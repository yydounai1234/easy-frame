export interface Component {
    render: string;
    methods?: object;
    data?: object;
    type: string;
}
export interface Node {
    type: string;
    name: string;
    children: Array<Node>;
    attribs: {
        [key: string]: any;
    };
    data: string;
    easy: Component;
}
/**
 * The base class for create app.
 *
 * @remarks
 * createApp can make us create a reactivity app component
 *
 * @param Component app component options.
 * @param Element - dom node.
 * @returns Component - app
 * 
 * @public
 */
export declare function createApp(app: Component, container: Element): void;
//# sourceMappingURL=render.d.ts.map