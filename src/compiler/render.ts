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

export interface Option {
  render: object
  template: string
  methods?: {
    [key:string]:Function
  }
  value?: any
  mixin?: Array<any>
}
export interface ENode extends Node, Option {
  context: ENode
  attribs?: {
    [key: string]: object
  }
  type: NODETYPE
  renderProxy?: object
  name?: string
  children: ENode[]
  data?: string
}

export function createApp(node: ENode, container: Element): ENode {
  patch(node, container, NODETYPE.APP, node)
  return node
}

function patch(
  node: ENode,
  container: Element,
  type: NODETYPE,
  context: Option
) {
  switch (type) {
    case NODETYPE.COMPONENT:
      node.type = NODETYPE.COMPONENT
      patchComponent(node, container, context)
      break
    case NODETYPE.TAG:
      patchElement(node, container, context)
      break
    case NODETYPE.TEXT:
      patchText(node, container, context)
      break
    case NODETYPE.APP:
      node.type = NODETYPE.APP
      patchApp(node, container, context)
  }
}

function patchApp(node: ENode, container: Element, context: Option) {
  node.renderProxy = reactive(node)
  node.mixin = []
  node.context = node
  patchComponent(node, container, context)
} 

function patchComponent(node: ENode, container: Element, context: Option) {
  const template = querySelector(node.template)
  parse(template.innerHTML.trim()).then((res: ENode[]) => {
    console.log(res)
    effect(() => {
      container.innerHTML = ''
      for (let i of res) {
        patch(i, container, i.type, context)
      }
    })
  })
}

function patchElement(node: ENode, container: Element, context: Option) {
  const el = createElement(node.name)
  for (let i in node.attribs) {
    patchProps(el, i, node.attribs[i], context)
  }
  insert(el, container)
  patchChildren(node.children, el, context)
}

function patchChildren(
  children: Array<ENode>,
  container: Element,
  context: Option
) {
  for (let i of children) {
    patch(i, container, i.type, context)
  }
}

function patchText(node: ENode, container: Element, context: Option) {
  patchInterpolation(container, node.data, context)
}
