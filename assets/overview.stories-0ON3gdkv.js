import{B as q}from"./index-Bc2r6MAQ.js";import"./iframe-D20LpuAU.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,ao={title:"Components/Inputs/Button",component:q,parameters:{layout:"centered",controls:{exclude:["asChild","ref","className","style","onAnimationStart","onDragStart","onDragEnd","onDrag","aria-label","aria-labelledby","aria-describedby","aria-details","aria-hidden","onMouseDown","onMouseUp","onClick","onClickCapture","onDoubleClick","onDoubleClickCapture","onMouseMove","onMouseMoveCapture","onMouseEnter","onMouseLeave","onMouseOver","onMouseOut","onFocus","onBlur","type","disabled","name","value","form","slot","title","translate","lang","role","tabIndex","hidden","dir","accessKey","draggable","spellCheck","inputMode","autoCapitalize","autoCorrect","autoSave","itemProp","itemScope","itemType","itemID","itemRef","enterKeyHint","onAnimationEnd","onAnimationIteration","onTransitionEnd","onTransitionStart","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onGotPointerCapture","onLostPointerCapture","onScroll","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","onCompositionStart","onCompositionEnd","onCompositionUpdate","onSelect","onSelectCapture","onKeyDown","onKeyUp","onKeyPress","onCopy","onCut","onPaste","onWheel","onContextMenu"],include:["variant","size","radius","state","icon","iconPosition","iconClassName","loadingSpinner","loadingText","successText","errorText","squircle","squircleSmoothing","enableRipple","clickZoom","shiny","instantLoading","loadingTimeout","timeoutErrorText","minWidth","showRetry","retryText","clickableInFinalState","brandColor","children"]}},args:{onClick:o(),onLoadingStart:o(),onLoadingTimeout:o(),onRetry:o()},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"Visual style variant of the button"},size:{control:"select",options:["xs","sm","default","lg","xl","icon"],description:"Size variant of the button"},radius:{control:"select",options:["none","sm","default","md","lg","xl","2xl","full"],description:"Border radius of the button"},state:{control:"select",options:[null,"loading","disabled","success","error"],description:"Current state of the button"},icon:{control:"text",description:"Icon map key (e.g., 'mail')"},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to text"},iconClassName:{control:"text",description:"Additional classes for the icon"},loadingSpinner:{control:"select",options:["default","alt","infinity","twist"],description:"Style of loading spinner"},loadingText:{control:"text",description:"Text shown during loading state"},successText:{control:"text",description:"Text shown in success state"},errorText:{control:"text",description:"Text shown in error state"},squircle:{control:"boolean",description:"Enable squircle shape (overrides theme setting)"},squircleSmoothing:{control:"select",options:["sm","md","lg"],description:"Smoothing level for squircle corners"},enableRipple:{control:"boolean",description:"Enable ripple effect on click"},clickZoom:{control:"boolean",description:"Enable zoom effect on click"},shiny:{control:"select",options:[!1,"hover","permanent"],description:"Shiny effect style"},instantLoading:{control:"boolean",description:"Enable instant loading state"},loadingTimeout:{control:"number",description:"Timeout in ms for instant loading"},timeoutErrorText:{control:"text",description:"Error text shown on timeout"},minWidth:{control:"number",description:"Minimum width in pixels"},showRetry:{control:"boolean",description:"Show retry option on error"},retryText:{control:"text",description:"Text for retry button"},clickableInFinalState:{control:"boolean",description:"Allow clicks in success/error states"},brandColor:{control:"color",description:"Custom brand color (overrides variant)"},children:{control:"text",description:"Button content"}},tags:["autodocs"]},e={args:{variant:"default",children:"Button"}},t={args:{variant:"secondary",children:"Secondary",shiny:"permanent"}},n={args:{variant:"destructive",children:"Delete"}},r={args:{variant:"outline",children:"Outline"}},i={args:{variant:"ghost",children:"Ghost"}},a={args:{children:"Small Button",size:"sm"}},s={args:{children:"Extra Small",size:"xs"}},c={args:{children:"Large Button",size:"lg"}},l={args:{size:"icon",icon:"search","aria-label":"Search"}},so=["Primary","Secondary","Destructive","Outline","Ghost","Small","ExtraSmall","Large","Icon"];var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "Button"
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary",
    shiny: "permanent"
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,x,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete"
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,v,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,T,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,M,k;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "sm"
  }
}`,...(k=(M=a.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var D,w,z;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Extra Small",
    size: "xs"
  }
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,O,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var I,_,R;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: "icon",
    icon: "search",
    "aria-label": "Search"
  }
}`,...(R=(_=l.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};export{n as Destructive,s as ExtraSmall,i as Ghost,l as Icon,c as Large,r as Outline,e as Primary,t as Secondary,a as Small,so as __namedExportsOrder,ao as default};
