import { effect } from '../reactivity/effect'
import { reactive } from '../reactivity/reactive'
import { parse } from './paser'
import {
  createElement,
  insert,
  querySelector,
  createComment,
  createText,
  replace
} from './dom'
import { patchProps, patchInterpolation } from './props'

const enum NODETYPE {
  APP = 'app',
  TAG = 'tag',
  TEXT = 'text',
  COMPONENT = 'component'
}

export interface APPOPTION {
  mixin?: Array<any>
  store?: object
  onLanuch?: Function
}
export interface CONTEXT {
  render: object
  template: string
  methods?: {
    [key: string]: Function
  }
  value?: any
  onLoad?: Function
  onShow?: Function
  onUpdate?: Function
  mounted: boolean
  components?: {
    [key: string]: CONTEXT
  }
  subTree?: ENODE[]
}

let appOption: APPOPTION = {}
let devFragmentID = 0
export interface ENODE extends Node {
  context: CONTEXT
  attribs?: {
    [key: string]: object
  }
  type: NODETYPE
  name?: string
  children: ENODE[]
  data?: string
  el?: Element
  text?: Text
}

export function createApp(
  context: CONTEXT,
  container: Element,
  option: APPOPTION = {}
): CONTEXT {
  if (option!.onLanuch) {
    option!.onLanuch(option)
  }
  appOption = option
  patchApp()
  patchComponent(context, container)
  return context
}

function patch(
  node: ENODE,
  container: Element,
  type: NODETYPE,
  context: CONTEXT,
  anchor?: Node
) {
  switch (type) {
    // case NODETYPE.COMPONENT:
    //   node.type = NODETYPE.COMPONENT
    //   patchComponent(node, container, context)
    //   break
    case NODETYPE.TAG:
      if (context.components && context.components[node.name]) {
        patchComponent(context.components[node.name], container, anchor)
      } else {
        patchElement(node, container, context, anchor)
      }
      break
    case NODETYPE.TEXT:
      patchText(node, container, context)
      break
  }
}

function update(
  n1: ENODE[],
  n2: ENODE[],
  context: CONTEXT,
  container: Element
) {
  // console.log('进行diff操作')
  // console.log(n1, n2)
  n2.forEach((item, index) => {
    if (item.type === NODETYPE.TAG) {
      // this is component
      if (context.components && context.components[item.name]) {
        // console.log('判断是否是相同组件并且prop相同,待完成')
      } else {
        // same type
        if (n1[index] && n1[index].type === NODETYPE.TAG) {
          if (item.children.length === 0) {
            // delate all children node
          } else {
            // update all children node
            update(item.children, n1[index].children, context, container)
          }
        } else {
          // console.log('直接替换节点,待完成')
        }
      }
    } else if (item.type === NODETYPE.TEXT) {
      // same type
      if (n1[index] && n1[index].type === NODETYPE.TEXT) {
        // both all text node
        updateText(n1[index], item, context)
      } else if (n1[index]) {
        // delate prev node and insert next text node
      } else {
        //inpset next text node
      }
    }
  })
}
function patchApp() {
  appOption.mixin = []
  appOption.store = {}
}

function patchComponent(context: CONTEXT, container: Element, anchor?: Node) {
  const template = querySelector(context.template)
  const componentAnchor = patchFragment(container, anchor)
  parse(template.innerHTML.trim()).then((res: ENODE[]) => {
    effect(() => {
      // context.prevContext = context.
      const mounted = context.mounted
      if (!mounted) {
        context.mounted = true
        if (context!.onLoad) {
          context.onLoad.call(context)
        }
        for (let i of res) {
          patch(i, container, i.type, context, componentAnchor)
        }
        if (context!.onShow) {
          context.onShow.call(context)
        }
      } else {
        // diff
        update(context.subTree, res, context, container)
        if (context!.onUpdate) {
          context.onUpdate.call(context)
        }
      }
      context.subTree = res
    })
  })
}

function patchFragment(container: Element, anchor?: Node): Comment {
  const fragmentStartAnchor = createComment(`fragment-${devFragmentID}-start`)!
  const fragmentEndAnchor = createComment(`fragment-${devFragmentID}-end`)!
  devFragmentID++
  if (anchor !== null) {
    insert(fragmentStartAnchor, container, anchor)
    insert(fragmentEndAnchor, container, anchor)
  } else {
    insert(fragmentStartAnchor, container)
    insert(fragmentEndAnchor, container)
  }
  return fragmentEndAnchor
}

function patchElement(
  node: ENODE,
  container: Element,
  context: CONTEXT,
  anchor?: Node
) {
  const el = (node.el = createElement(node.name))
  for (let i in node.attribs) {
    patchProps(el, i, node.attribs[i], context)
  }
  if (anchor !== null) {
    insert(el, container, anchor)
  } else {
    insert(el, container)
  }
  patchChildren(node.children, el, context)
}

function patchChildren(
  children: Array<ENODE>,
  container: Element,
  context: CONTEXT
) {
  for (let i of children) {
    patch(i, container, i.type, context)
  }
}

function patchText(node: ENODE, container: Element, context: CONTEXT) {
  const text = patchInterpolation(node.data, context)
  if (text) {
    node.el = container
    const insertText = (node.text = createText(text))
    insert(insertText, container)
  }
}

function updateText(n1: ENODE, n2: ENODE, context: CONTEXT) {
  const text = patchInterpolation(n2.data, context)
  n2.el = n1!.el
  if (n1.text.nodeValue === text) {
    n2.text = n1!.text
  } else {
    const insertText = createText(text)
    replace(n1.text, insertText, n1.el)
    n2.text = insertText
  }
}
