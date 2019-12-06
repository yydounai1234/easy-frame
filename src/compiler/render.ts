import { effect } from '../reactivity/effect'
import { parse } from './paser'
import { createElement, insert, createText, querySelector } from './dom'
import { patchProps, patchInterpolation } from './props'

export interface Component {
  render: string
  methods?: object
  data?: object
  type: string
}

export interface Node {
  type: string
  name: string
  children: Array<Node>
  attribs: {
    [key: string]: any
  }
  data: string
  easy: Component
}

const enum NODETYPE {
  APP = 'app',
  TAG = 'tag',
  TEXT = 'text'
}

let contextStack: any = []

export function createApp(app: Component, container: Element) {
  app.type = NODETYPE.APP
  patch(app, container)
  return app
}

function patch(result: Component | Node, container: Element) {
  const { type } = result
  switch (type) {
    case NODETYPE.TAG:
      patchElement(result as Node, container)
      break
    case NODETYPE.TEXT:
      patchText(result as Node, container)
      break
    case NODETYPE.APP:
      patchComponent(result as Component, container)
  }
}

function patchElement(result: Node, container: Element) {
  const el = createElement(result.name)
  const context = contextStack[contextStack.length - 1]
  for (let i in result.attribs) {
    patchProps(el, i, result.attribs[i], context)
  }
  insert(el, container)
  patchChildren(result.children, el)
}

function patchComponent(result: Component, container: Element) {
  const template = querySelector(result.render)
  parse(template.innerHTML).then((res: Array<Node>) => {
    effect(() => {
      container.innerHTML = ''
      contextStack.push(result)
      for (let i of res) {
        patch(i, container)
      }
      contextStack.pop()
    })
  })
}

function patchChildren(children: Array<Node>, container: Element) {
  for (let i of children) {
    patch(i, container)
  }
}

function patchText(result: Node, container: Element) {
  const context = contextStack[contextStack.length - 1]
  patchInterpolation(container, result.data, context)
  // let text = null
  // while(!isEnd()) {

  // }
  // const reg = /\{\{(.*)\}\}/g
  // if (reg.test(result.data)) {
  //   text = createText(context.data[RegExp.$1])
  //   console.log(context.data[RegExp.$1])
  // } else {
  //   text = createText(result.data)
  // }
  // insert(text, container)
}
