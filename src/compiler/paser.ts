import { Parser, DomHandler } from 'htmlparser2'

export function parse(template: string) {
  return new Promise<object>((resolve, reject) => {
    const handler = new DomHandler(
      (error, dom) => {
        if (error) {
          reject(error)
        } else {
          resolve(dom)
        }
      },
      {
        normalizeWhitespace: true
      }
    )
    const parser = new Parser(handler)
    parser.write(template)
    parser.end()
  })
}
