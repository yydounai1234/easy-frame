import { startsWith } from './utils'
import { createText, insert } from './dom'
import { Option } from './render'
const delimiters = [`{{`, `}}`]

function patchClass(el: Element, value: string) {
  el.className = value
}

function patchAttr(el: Element, key: string, value: any) {
  if (value == null) {
    el.removeAttribute(key)
  } else {
    el.setAttribute(key, value)
  }
}

function patchStyle(el: Element, value: string) {
  const attr = value.split(';')
  for (let i of attr) {
    ;(<any>el).style[i.split(':')[0]] = i.split(':')[1]
  }
}

function patchEvent(el: Element, key: string, value: string, context: Option) {
  ;(<any>el)[`on${key.slice(1)}`] = () => {
    context.methods[value].call(context)
  }
}

function patchInterpolationText(insertText: string, el: Element) {
  if (insertText) {
    const text = createText(insertText)
    insert(text, el)
  }
  return ''
}

export function patchProps(
  el: Element,
  key: string,
  value: any,
  context: Option
) {
  switch (true) {
    case key === 'class':
      patchClass(el, value)
      break
    case key === 'style':
      patchStyle(el, value)
      break
    case /^:/.test(key):
      patchEvent(el, key, value, context)
  }
}

export function patchInterpolation(
  el: Element,
  result: string,
  context: Option
) {
  let insertText = ''
  let rawResult = result
  while (rawResult.length) {
    if (startsWith(rawResult, delimiters[0])) {
      insertText = patchInterpolationText(insertText, el)
      const [open, close] = delimiters
      const startIndex: number = open.length
      const closeIndex: number = rawResult.indexOf(close, open.length)
      if (closeIndex !== -1) {
        const fn = `return ${rawResult.slice(startIndex, closeIndex)}`
        const result = new Function(fn)
        insertText = patchInterpolationText(result.call(context.value), el)
        rawResult = rawResult.slice(closeIndex + close.length)
      }
    } else {
      insertText += rawResult[0]
      rawResult = rawResult.slice(1)
    }
  }
  insertText = patchInterpolationText(insertText, el)
}
