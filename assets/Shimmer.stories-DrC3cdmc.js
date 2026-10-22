import{j as e}from"./iframe-T4wYwA8j.js";import{c as g}from"./instant-translate-BmoNkbk6.js";import"./preload-helper-Dp1pzeXC.js";const t=({className:r,show:v=!0,duration:f=1.5})=>v?e.jsx("div",{className:g("via-muted/20 absolute inset-0 bg-linear-to-r from-transparent to-transparent","animate-pulse",r),style:{animationDuration:`${f}s`,animationTimingFunction:"ease-in-out",animationIterationCount:"infinite"}}):null;t.__docgenInfo={description:"",methods:[],displayName:"Shimmer",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},show:{required:!1,tsType:{name:"boolean"},description:`Whether to show shimmer
@default true`,defaultValue:{value:"true",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:`Animation duration in seconds
@default 1.5`,defaultValue:{value:"1.5",computed:!1}}}};const b={title:"Components/Feedback/Shimmer",component:t,parameters:{layout:"centered",docs:{description:{component:"Absolute-positioned shimmer sweep for loading overlays — drop inside a `relative` container to cover it."}}},tags:["autodocs"],argTypes:{show:{control:"boolean"},duration:{control:{type:"range",min:.3,max:4,step:.1}}},args:{show:!0,duration:1.5}},a={render:r=>e.jsx("div",{className:"bg-muted/40 relative h-24 w-72 overflow-hidden rounded-md",children:e.jsx(t,{...r})})},n={name:"Overlaying content",render:r=>e.jsxs("div",{className:"relative w-72 space-y-2 overflow-hidden rounded-md",children:[e.jsx("p",{className:"text-sm font-medium",children:"Revenue this month"}),e.jsx("p",{className:"text-2xl font-bold",children:"$84,210"}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"+12% vs last month"}),e.jsx(t,{...r})]})},s={args:{duration:3},render:r=>e.jsx("div",{className:"bg-muted/40 relative h-24 w-72 overflow-hidden rounded-md",children:e.jsx(t,{...r})})},y=["Default","OverContent","Slow"];var o,d,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className="bg-muted/40 relative h-24 w-72 overflow-hidden rounded-md">\r
      <Shimmer {...args} />\r
    </div>
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Overlaying content",
  render: args => <div className="relative w-72 space-y-2 overflow-hidden rounded-md">\r
      <p className="text-sm font-medium">Revenue this month</p>\r
      <p className="text-2xl font-bold">$84,210</p>\r
      <p className="text-muted-foreground text-xs">+12% vs last month</p>\r
      <Shimmer {...args} />\r
    </div>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    duration: 3
  },
  render: args => <div className="bg-muted/40 relative h-24 w-72 overflow-hidden rounded-md">\r
      <Shimmer {...args} />\r
    </div>
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{a as Default,n as OverContent,s as Slow,y as __namedExportsOrder,b as default};
