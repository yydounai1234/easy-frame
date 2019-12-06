export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const toRawType: (value: unknown) => string;
export declare const isSymbol: (val: unknown) => val is symbol;
export declare function makeMap(str: string, expectsLowerCase?: boolean): (key: string) => boolean;
export declare const isArray: (arg: any) => arg is any[];
export declare const extend: <T extends object, U extends object>(a: T, b: U) => T & U;
export declare const hasOwn: (val: object, key: string | symbol) => key is never;
export declare const hasChanged: (value: any, oldValue: any) => boolean;
export declare const EMPTY_OBJ: {
    readonly [key: string]: any;
};
//# sourceMappingURL=utils.d.ts.map