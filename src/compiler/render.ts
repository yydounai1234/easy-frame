import { effect } from '../reactivity/effect'
import { reactive } from '../reactivity/reactive'
import { parse } from './paser'
import { createElement, insert, querySelector, createComment } from './dom'
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
        patchComponent(context.components[node.name], container)
      } else {
        patchElement(node, container, context, anchor)
      }
      break
    case NODETYPE.TEXT:
      patchText(node, container, context)
      break
  }
}

function patchApp() {
  appOption.mixin = []
  appOption.store = {}
}

function patchComponent(context: CONTEXT, container: Element) {
  const template = querySelector(context.template)
  const anchor = patchFragment(container)
  parse(template.innerHTML.trim()).then((res: ENODE[]) => {
    effect(() => {
      const mounted = context.mounted
      if (!mounted && context!.onLoad) {
        context.onLoad.call(context)
        for (let i of res) {
          patch(i, container, i.type, context, anchor)
        }
      } else {
        // diff
        for (let i of res) {
          patch(i, container, i.type, context, anchor)
        }
      }
      if (!mounted && context!.onShow) {
        context.mounted = true
        context.onShow.call(context)
      } else if (mounted && context!.onUpdate) {
        context.onUpdate.call(context)
      }
    })
  })
}

function patchFragment(container: Element): Comment {
  const fragmentStartAnchor = createComment(`fragment-${devFragmentID}-start`)!
  const fragmentEndAnchor = createComment(`fragment-${devFragmentID}-end`)!
  devFragmentID++
  insert(fragmentStartAnchor, container)
  insert(fragmentEndAnchor, container)
  return fragmentEndAnchor
}

function patchElement(
  node: ENODE,
  container: Element,
  context: CONTEXT,
  anchor?: Node
) {
  const el = createElement(node.name)
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
  patchInterpolation(container, node.data, context)
}
