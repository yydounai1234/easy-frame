
declare interface Component {
    render: string;
    methods?: object;
    data?: object;
    type: string;
}

/**
 * The base class for create app.
 *
 * @remarks
 * createApp can make us create a reactivity app component
 *
 * @param Component - app component options.
 * @param Element - dom node.
 * @returns Component - app
 * 
 * @public
 */
export declare function createApp(app: Component, container: Element): void;

declare type DebuggerEvent = {
    effect: ReactiveEffect;
    target: object;
    type: OperationTypes;
    key: any;
} & DebuggerEventExtraInfo;

declare interface DebuggerEventExtraInfo {
    newValue?: any;
    oldValue?: any;
    oldTarget?: Map<any, any> | Set<any>;
}

declare type Dep = Set<ReactiveEffect>;

export declare function effect<T = any>(fn: () => T, options?: ReactiveEffectOptions): ReactiveEffect<T>;

declare const enum OperationTypes {
    SET = "set",
    ADD = "add",
    DELETE = "delete",
    CLEAR = "clear",
    GET = "get",
    HAS = "has",
    ITERATE = "iterate"
}

export declare function reactive(target: object): any;

declare interface ReactiveEffect<T = any> {
    (): T;
    _isEffect: true;
    active: boolean;
    raw: () => T;
    deps: Array<Dep>;
    options: ReactiveEffectOptions;
}

declare interface ReactiveEffectOptions {
    lazy?: boolean;
    computed?: boolean;
    scheduler?: (run: Function) => void;
    onTrack?: (event: DebuggerEvent) => void;
    onTrigger?: (event: DebuggerEvent) => void;
    onStop?: () => void;
}

export { }
