/// <reference types="react" />
/// <reference types="seamless-immutable" />
/** @jsx jsx */
import { React, ReactRedux, IMThemeVariables, jsx, IMLayoutItemJson } from 'jimu-core';
import { ToolItemConfig } from '../types';
export interface ToolbarProps {
    tools: Array<ToolItemConfig | ToolItemConfig[]>;
    layoutId: string;
    layoutItem: IMLayoutItemJson;
    parentRef: HTMLElement;
    theme: IMThemeVariables;
    formatMessage: (id: string, values?: any) => string;
}
interface StateToProps {
    isLockLayout: boolean;
}
interface State {
    activeItem?: string;
    toggleOn?: boolean;
}
declare class _Toolbar extends React.PureComponent<ToolbarProps & StateToProps, State> {
    state: State;
    constructor(props: any);
    onItemClick(value: string): void;
    onItemUnSelected(value: string): void;
    getStyle(): import("jimu-core").SerializedStyles;
    reOrganizeTools(): (ToolItemConfig | ToolItemConfig[])[];
    render(): jsx.JSX.Element;
}
export declare const Toolbar: ReactRedux.ConnectedComponent<typeof _Toolbar, {
    ref?: React.LegacyRef<_Toolbar>;
    key?: React.Key;
    theme: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").ThemeVariables> & {
        readonly darkTheme?: boolean;
        readonly coloration?: import("jimu-core").ThemeColorationType;
        readonly colorationVariants?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeColorationVariants>;
        readonly typography?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeTypography>;
        readonly colors?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeAllColors>;
        readonly spacer?: import("jimu-core").ThemeSize;
        readonly sizes?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeSizes>;
        readonly gutters?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeSizes>;
        readonly borderRadiuses?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeBorderRadiuses>;
        readonly boxShadows?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeBoxShadows>;
        readonly focusedStyles?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeFocusedStyles>;
        readonly surfaces?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeSurfaces>;
        readonly header?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeHeader>;
        readonly footer?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeFooter>;
        readonly body?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeBody>;
        readonly link?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeLink>;
        readonly border?: import("seamless-immutable").ImmutableObject<import("../../../jimu-ui").BorderStyle>;
        readonly components?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeComponents>;
        readonly arcgis?: import("seamless-immutable").ImmutableObject<import("jimu-core").ThemeArcGIS>;
    };
    tools: Array<ToolItemConfig | ToolItemConfig[]>;
    formatMessage: (id: string, values?: any) => string;
    layoutId: string;
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
    parentRef: HTMLElement;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export {};
