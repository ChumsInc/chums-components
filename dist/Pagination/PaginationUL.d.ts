import React from 'react';
declare const PaginationUL: import("styled-components").IStyledComponent<"web", {
    ref?: React.LegacyRef<HTMLUListElement> | undefined;
    key?: React.Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLUListElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLUListElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLUListElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLUListElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLUListElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLUListElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLUListElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLUListElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLUListElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLUListElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLUListElement> | undefined;
    onChange?: React.FormEventHandler<HTMLUListElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLUListElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLUListElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLUListElement> | undefined;
    onInput?: React.FormEventHandler<HTMLUListElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLUListElement> | undefined;
    onReset?: React.FormEventHandler<HTMLUListElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLUListElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLUListElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLUListElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLUListElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLUListElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onError?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLUListElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onResize?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLUListElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLUListElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLUListElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLUListElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLUListElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLUListElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLUListElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLUListElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLUListElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLUListElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLUListElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLUListElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLUListElement> | undefined;
}>;
export default PaginationUL;
