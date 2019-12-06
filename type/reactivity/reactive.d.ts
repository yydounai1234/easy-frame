import { Dep } from './effect';
export declare function reactive(target: object): any;
export declare const targetMap: WeakMap<any, KeyToDepMap>;
export declare type KeyToDepMap = Map<any, Dep>;
export declare function toRaw<T>(observed: T): T;
//# sourceMappingURL=reactive.d.ts.map