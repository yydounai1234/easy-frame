export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const toRawType = (value: unknown): string =>
  Object.prototype.toString.call(value).slice(8, -1)

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) => boolean {
  const map: Record<string, boolean> = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val]
}
export const isArray = Array.isArray

export const extend = <T extends object, U extends object>(
  a: T,
  b: U
): T & U => {
  for (const key in b) {
    ;(a as any)[key] = b[key]
  }
  return a as any
}

export const hasOwn = (
  val: object,
  key: string | symbol
): key is keyof typeof val => Object.prototype.hasOwnProperty.call(val, key)

export const hasChanged = (value: any, oldValue: any): boolean =>
  value !== oldValue && (value === value || oldValue === oldValue)

export const EMPTY_OBJ: { readonly [key: string]: any } = __DEV__
  ? Object.freeze({})
  : {}
