/// <reference types="react" />
/// <reference types="seamless-immutable" />
/** @jsx jsx */
import { React, ReactRedux, IMLayoutItemJson, jsx, SerializedStyles } from 'jimu-core';
import { LayoutItemProps, FlowLayoutItemSetting } from '../../types';
import { StateToFlowItemProps } from '../layout-utils';
interface OwnProps {
    index: number;
    layoutItem: IMLayoutItemJson;
    gutter: number;
}
declare class FlowLayoutItem extends React.PureComponent<LayoutItemProps & StateToFlowItemProps & OwnProps> {
    autoHeight: boolean;
    calHeight(itemSetting: FlowLayoutItemSetting): string;
    getStyle(itemSetting: FlowLayoutItemSetting): [SerializedStyles, string];
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof FlowLayoutItem, {
    ref?: React.LegacyRef<FlowLayoutItem>;
    className?: string;
    style?: React.CSSProperties;
    children?: any;
    onClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
    onDoubleClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
    key?: React.Key;
    draggable?: boolean;
    aspectRatio?: number;
    gutter: number;
    index: number;
    autoWidth?: boolean;
    layoutId: string;
    layoutItemId: string;
    resizable?: boolean;
    autoHeight?: boolean;
    isInSection?: boolean;
    showDefaultTools?: boolean;
    selectable?: boolean;
    forbidContextMenu?: boolean;
    forbidToolbar?: boolean;
    trailOrder?: number;
    forceAspectRatio?: boolean;
    resizeObserver?: ResizeObserver;
    layoutItem: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").LayoutItemJson> & {
        readonly id?: string;
        readonly bbox?: import("seamless-immutable").ImmutableObject<import("jimu-core").BoundingBox>;
        readonly type?: import("jimu-core").LayoutItemType;
        readonly setting?: any;
        readonly widgetId?: string;
        readonly sectionId?: string;
        readonly screenGroupId?: string;
        readonly isPlaceholder?: boolean;
        readonly isPending?: boolean;
        readonly parent?: string;
    };
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export default _default;
