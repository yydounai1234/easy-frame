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
export declare function createApp(app: Component, container: Element): void;
//# sourceMappingURL=render.d.ts.map