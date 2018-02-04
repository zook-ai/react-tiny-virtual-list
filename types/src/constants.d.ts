export declare type ALIGNMENT = 'auto' | 'center' | 'end' | 'start';
export declare const ALIGN_AUTO: ALIGNMENT;
export declare const ALIGN_START: ALIGNMENT;
export declare const ALIGN_CENTER: ALIGNMENT;
export declare const ALIGN_END: ALIGNMENT;
export declare type DIRECTION = 'horizontal' | 'vertical';
export declare const DIRECTION_VERTICAL: DIRECTION;
export declare const DIRECTION_HORIZONTAL: DIRECTION;
export declare type SCROLL_CHANGE_REASON = 'observed' | 'requested';
export declare const SCROLL_CHANGE_OBSERVED: SCROLL_CHANGE_REASON;
export declare const SCROLL_CHANGE_REQUESTED: SCROLL_CHANGE_REASON;
export declare const scrollProp: {
    [DIRECTION_VERTICAL]: string;
    [DIRECTION_HORIZONTAL]: string;
};
export declare const sizeProp: {
    [DIRECTION_VERTICAL]: string;
    [DIRECTION_HORIZONTAL]: string;
};
export declare const positionProp: {
    [DIRECTION_VERTICAL]: string;
    [DIRECTION_HORIZONTAL]: string;
};
export declare const transformProp: {
    [DIRECTION_VERTICAL]: string;
    [DIRECTION_HORIZONTAL]: string;
};
