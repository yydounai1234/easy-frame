export const insert = (child: Node, parent: Node, anchor?: Node) => {
    if (anchor != null) {
      parent.insertBefore(child, anchor)
    } else {
      parent.appendChild(child)
    }
  }

export const createElement = (tag: string): Element => document.createElement(tag)

export const createText = (text: string): Text => document.createTextNode(text)

export const querySelector =  (selector: string): Element | null => document.querySelector(selector)

export const createComment = (text: string): Comment => document.createComment(text)

export const replace = (prev:Node,next: Node, parent: Node) => parent.replaceChild(next,prev)