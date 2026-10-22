import{r as h,j as e}from"./iframe-AoE8j4ij.js";import{P as j}from"./index-B7cbT5jr.js";import{c as z}from"./instant-translate-CWwN--yb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-D0Ytr1w-.js";import"./index-CyY0JB9U.js";var w="Separator",p="horizontal",R=["horizontal","vertical"],N=h.forwardRef((r,t)=>{const{decorative:i,orientation:o=p,...c}=r,l=b(o)?o:p,S=i?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return e.jsx(j.div,{"data-orientation":l,...S,...c,ref:t})});N.displayName=w;function b(r){return R.includes(r)}var g=N;const a=h.forwardRef(({className:r,orientation:t="horizontal",decorative:i=!0,...o},c)=>e.jsx(g,{ref:c,decorative:i,orientation:t,className:z("bg-border shrink-0",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...o}));a.displayName=g.displayName;a.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const L={title:"Components/Layout/Separator",component:a,parameters:{layout:"centered",docs:{description:{component:"Radix separator painted with `--border`. Horizontal and vertical orientations."}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},decorative:{control:"boolean"}},args:{orientation:"horizontal",decorative:!0}},s={render:r=>e.jsxs("div",{className:"w-64 space-y-3",children:[e.jsx("p",{className:"text-sm",children:"Section above"}),e.jsx(a,{...r}),e.jsx("p",{className:"text-sm",children:"Section below"})]})},n={args:{orientation:"vertical"},render:r=>e.jsxs("div",{className:"flex h-10 items-center gap-3",children:[e.jsx("span",{className:"text-sm",children:"Left"}),e.jsx(a,{...r}),e.jsx("span",{className:"text-sm",children:"Right"})]})},H=["Horizontal","Vertical"];var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="w-64 space-y-3">\r
      <p className="text-sm">Section above</p>\r
      <Separator {...args} />\r
      <p className="text-sm">Section below</p>\r
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,x,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: args => <div className="flex h-10 items-center gap-3">\r
      <span className="text-sm">Left</span>\r
      <Separator {...args} />\r
      <span className="text-sm">Right</span>\r
    </div>
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{s as Horizontal,n as Vertical,H as __namedExportsOrder,L as default};
