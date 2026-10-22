import{r as p,j as e}from"./iframe-D20LpuAU.js";import{P as h}from"./index-14Xtho__.js";import{I as y}from"./menu-trigger-chevron-DkXwEHUF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./instant-translate-pJhJtWwT.js";var b=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),x="VisuallyHidden",m=p.forwardRef((o,u)=>e.jsx(h.span,{...o,ref:u,style:{...b,...o.style}}));m.displayName=x;var f=m;const t=f,D={title:"Components/Utilities/VisuallyHidden",component:t,parameters:{layout:"centered",docs:{description:{component:"Radix `VisuallyHidden` passthrough — content stays in the a11y tree but is clipped out of view. The canonical use is giving icon-only controls an accessible name."}}},tags:["autodocs"]},n={name:"Icon-only button (accessible name)",render:()=>e.jsxs("button",{type:"button",className:"border-border hover:bg-secondary flex size-9 items-center justify-center rounded-md border",children:[e.jsx(y,{name:"search",className:"size-4","aria-hidden":!0}),e.jsx(t,{children:"Search"})]})},r={name:"Hidden but in the DOM",render:()=>e.jsxs("div",{className:"text-muted-foreground space-y-2 text-center text-xs",children:[e.jsx("p",{children:"Nothing visible below this line — inspect the DOM to find the hidden text."}),e.jsx(t,{children:"Screen-reader only announcement"})]})},O=["IconOnlyButton","InDom"];var s,i,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Icon-only button (accessible name)",
  render: () => <button type="button" className="border-border hover:bg-secondary flex size-9 items-center justify-center rounded-md border">\r
      <Icon name="search" className="size-4" aria-hidden />\r
      <VisuallyHidden>Search</VisuallyHidden>\r
    </button>
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Hidden but in the DOM",
  render: () => <div className="text-muted-foreground space-y-2 text-center text-xs">\r
      <p>\r
        Nothing visible below this line — inspect the DOM to find the hidden\r
        text.\r
      </p>\r
      <VisuallyHidden>Screen-reader only announcement</VisuallyHidden>\r
    </div>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{n as IconOnlyButton,r as InDom,O as __namedExportsOrder,D as default};
