import { startsWith } from './utils'
import { createText, insert } from './dom'
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
function patchEvent(el: Element, key:string,value:any,context:any):void {
  (<any>el)[`on${key.slice(1)}`] = function() {
    context.methods[value].call(context)
  }
}
function advancePatchText(insertText: string, el: Element) {
  if (insertText) {
    const text = createText(insertText)
    insert(text, el)
  }
  return ''
}

export function patchProps(el: Element, key: string, value: any ,context: any) {
  switch (true) {
    case key === 'class':
      patchClass(el, value)
      break;
    case (/^:/.test(key)): 
        patchEvent(el, key,value,context)
        break;
  }
}

export function patchInterpolation(el: Element, result: string, context: any) {
  // let start = 0
  // let length = result.length
  let insertText = ''
  let rawResult = result
  while (rawResult.length) {
    if (startsWith(rawResult, delimiters[0])) {
      insertText = advancePatchText(insertText, el)
      const [open, close] = delimiters
      const startIndex = open.length
      const closeIndex = rawResult.indexOf(close, open.length)
      if (closeIndex !== -1) {
        console.log(context)
        insertText = advancePatchText(
          context.data[rawResult.slice(startIndex, closeIndex)],
          el
        )
        rawResult = rawResult.slice(closeIndex + close.length)
      }
    } else {
      insertText += rawResult[0]
      rawResult = rawResult.slice(1)
    }
  }
  insertText = advancePatchText(insertText, el)
}
