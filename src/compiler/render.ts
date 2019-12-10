import { effect } from '../reactivity/effect'
import { reactive } from '../reactivity/reactive'
import { parse } from './paser'
import { createElement, insert, querySelector } from './dom'
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
  renderProxy?: object
  onLanuch?: Function
}
export interface CONTEXT {
  option: APPOPTION
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
}
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
  patchApp(option)
  patchComponent(context, container, option)
  return context
}

function patch(
  node: ENODE,
  container: Element,
  type: NODETYPE,
  context: CONTEXT
) {
  switch (type) {
    // case NODETYPE.COMPONENT:
    //   node.type = NODETYPE.COMPONENT
    //   patchComponent(node, container, context)
    //   break
    case NODETYPE.TAG:
      patchElement(node, container, context)
      break
    case NODETYPE.TEXT:
      patchText(node, container, context)
      break
  }
}

function patchApp(option: APPOPTION) {
  option.renderProxy = reactive(option)
  option.mixin = []
  option.store = {}
}

function patchComponent(
  context: CONTEXT,
  container: Element,
  option: APPOPTION
) {
  context.option = option
  const template = querySelector(context.template)
  parse(template.innerHTML.trim()).then((res: ENODE[]) => {
    effect(() => {
      const mounted = context.mounted
      if(!mounted && context!.onLoad) {
        context.onLoad.call(context)
      }
      container.innerHTML = ''
      for (let i of res) {
        patch(i, container, i.type, context)
      }
      if(!mounted && context!.onShow) {
        context.mounted = true
        context.onShow.call(context)
      }else if(mounted && context!.onUpdate){
        context.onUpdate.call(context)
      }
    })
  })
}

function patchElement(node: ENODE, container: Element, context: CONTEXT) {
  const el = createElement(node.name)
  for (let i in node.attribs) {
    patchProps(el, i, node.attribs[i], context)
  }
  insert(el, container)
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
