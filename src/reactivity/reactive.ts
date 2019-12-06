import { normalHandlers } from './normalHandlers'
import { collectionHandlers } from './collectionHandlers'
import { isObject, makeMap, toRawType } from './utils'
import { Dep } from './effect'
const collectionTypes = new Set<Function>([Set, Map, WeakMap, WeakSet])
const rawToReactive = new WeakMap<any, any>()
const reactiveToRaw = new WeakMap<any, any>()
const isObservableType = makeMap('Object,Array,Map,Set,WeakMap,WeakSet')
export function reactive(target: object) {
  return createReactiveObject(
    target,
    rawToReactive,
    reactiveToRaw,
    normalHandlers,
    collectionHandlers
  )
}

function createReactiveObject(
  target: object,
  toProxy: WeakMap<any, any>,
  toRaw: WeakMap<any, any>,
  normalHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  let observed = toProxy.get(target)
  if (observed !== void 0) {
    return observed
  }
  if (toRaw.has(target)) {
    return target
  }
  if (!isObservableType(toRawType(target))) {
    return target
  }
  observed = new Proxy(
    target,
    collectionTypes.has(target.constructor)
      ? collectionHandlers
      : normalHandlers
  )
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  if (!targetMap.has(target)) {
    targetMap.set(target, new Map())
  }
  return observed
}

export const targetMap = new WeakMap<any, KeyToDepMap>()

export type KeyToDepMap = Map<any, Dep>

export function toRaw<T>(observed: T): T {
  return reactiveToRaw.get(observed) || observed
}