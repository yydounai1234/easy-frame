import { isSymbol,isObject,hasOwn,hasChanged } from './utils'
import { track,trigger,OperationTypes } from './effect'
import { reactive,toRaw } from './reactive'
const builtInSymbols = new Set(
  Object.getOwnPropertyNames(Symbol)
    .map(key => (Symbol as any)[key])
    .filter(isSymbol)
)

function get(target: object, key: string | symbol, receiver: object) {
  let res = Reflect.get(target, key, receiver)
  // 内置的symbol不进行track
  if (isSymbol(key) && builtInSymbols.has(key)) {
    return res
  }
  track(target, OperationTypes.GET, key)
  return isObject(res) ? reactive(res) : res
}

function set(
  target: object,
  key: string | symbol,
  value: unknown,
  receiver: object
): boolean {
  value = toRaw(value)
  const oldValue = (target as any)[key]
  const hadKey = hasOwn(target, key)
  const result = Reflect.set(target, key, value, receiver)
  if (target === toRaw(receiver)) {
    if (__DEV__) {
      const extraInfo = { oldValue, newValue: value }
      if (!hadKey) {
        trigger(target, OperationTypes.ADD, key, extraInfo)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, OperationTypes.SET, key, extraInfo)
      }
    } else {
      if (!hadKey) {
        trigger(target, OperationTypes.ADD, key)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, OperationTypes.SET, key)
      }
    }
  }
  return result
}

function deleteProperty(target: object, key: string | symbol): boolean {
  const hadKey = hasOwn(target, key)
  const oldValue = (target as any)[key]
  const result = Reflect.deleteProperty(target, key)
  if (result && hadKey) {
    if (__DEV__) {
      trigger(target, OperationTypes.DELETE, key, { oldValue })
    } else {
      trigger(target, OperationTypes.DELETE, key)
    }
  }
  return result
}

function has(target: object, key: string | symbol): boolean {
  const result = Reflect.has(target, key)
  track(target, OperationTypes.HAS, key)
  return result
}

function ownKeys(target: object): (string | number | symbol)[] {
  track(target, OperationTypes.ITERATE)
  return Reflect.ownKeys(target)
}

export const collectionHandlers: ProxyHandler<object> = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
}
