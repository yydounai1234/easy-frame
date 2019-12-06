export declare type Dep = Set<ReactiveEffect>;
export interface ReactiveEffect<T = any> {
    (): T;
    _isEffect: true;
    active: boolean;
    raw: () => T;
    deps: Array<Dep>;
    options: ReactiveEffectOptions;
}
export interface ReactiveEffectOptions {
    lazy?: boolean;
    computed?: boolean;
    scheduler?: (run: Function) => void;
    onTrack?: (event: DebuggerEvent) => void;
    onTrigger?: (event: DebuggerEvent) => void;
    onStop?: () => void;
}
export declare type DebuggerEvent = {
    effect: ReactiveEffect;
    target: object;
    type: OperationTypes;
    key: any;
} & DebuggerEventExtraInfo;
export declare const enum OperationTypes {
    SET = "set",
    ADD = "add",
    DELETE = "delete",
    CLEAR = "clear",
    GET = "get",
    HAS = "has",
    ITERATE = "iterate"
}
export interface DebuggerEventExtraInfo {
    newValue?: any;
    oldValue?: any;
    oldTarget?: Map<any, any> | Set<any>;
}
export declare const effectStack: ReactiveEffect[];
export declare const ITERATE_KEY: unique symbol;
export declare function track(target: object, type: OperationTypes, key?: unknown): void;
export declare function trigger(target: object, type: OperationTypes, key?: unknown, extraInfo?: DebuggerEventExtraInfo): void;
export declare function effect<T = any>(fn: () => T, options?: ReactiveEffectOptions): ReactiveEffect<T>;
export declare function isEffect(fn: any): fn is ReactiveEffect;
//# sourceMappingURL=effect.d.ts.map