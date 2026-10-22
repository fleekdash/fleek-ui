import{j as e}from"./iframe-D20LpuAU.js";import{S as r,W as C}from"./index-Dg-DMuy9.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";const E={title:"Components/Feedback/Skeleton",component:r,parameters:{layout:"centered",docs:{description:{component:"Loading placeholder primitives (`skeleton-bg` token surface) plus the dashboard/widget composite skeletons. Variants: default, circular, rounded; animations: pulse, shimmer, none."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","circular","rounded"]},animation:{control:"select",options:["pulse","shimmer","none"]},width:{control:"text"},height:{control:"text"}},args:{variant:"rounded",animation:"pulse",width:200,height:20}},a={},s={render:t=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{...t,variant:"default",width:160,height:20}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"default"})]}),e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{...t,variant:"rounded",width:160,height:20}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"rounded"})]}),e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{...t,variant:"circular",width:48,height:48}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"circular"})]})]})},n={args:{animation:"shimmer",width:280,height:16}},d={name:"Composed text block",render:t=>e.jsxs("div",{className:"w-72 space-y-2",children:[e.jsx(r,{...t,width:"80%",height:18,variant:"rounded"}),e.jsx(r,{...t,width:"100%",height:12,variant:"rounded"}),e.jsx(r,{...t,width:"95%",height:12,variant:"rounded"}),e.jsx(r,{...t,width:"60%",height:12,variant:"rounded"})]})},i={name:"WidgetSkeleton — stats",render:()=>e.jsx("div",{className:"w-64",children:e.jsx(C,{type:"stats"})})},o={name:"WidgetSkeleton — chart",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(C,{type:"chart"})})},_=["Default","Variants","Shimmer","TextBlock","WidgetStats","WidgetChart"];var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var h,p,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div className="flex items-end gap-6">\r
      <div className="space-y-2 text-center">\r
        <Skeleton {...args} variant="default" width={160} height={20} />\r
        <p className="text-muted-foreground text-xs">default</p>\r
      </div>\r
      <div className="space-y-2 text-center">\r
        <Skeleton {...args} variant="rounded" width={160} height={20} />\r
        <p className="text-muted-foreground text-xs">rounded</p>\r
      </div>\r
      <div className="space-y-2 text-center">\r
        <Skeleton {...args} variant="circular" width={48} height={48} />\r
        <p className="text-muted-foreground text-xs">circular</p>\r
      </div>\r
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    animation: "shimmer",
    width: 280,
    height: 16
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,w,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Composed text block",
  render: args => <div className="w-72 space-y-2">\r
      <Skeleton {...args} width="80%" height={18} variant="rounded" />\r
      <Skeleton {...args} width="100%" height={12} variant="rounded" />\r
      <Skeleton {...args} width="95%" height={12} variant="rounded" />\r
      <Skeleton {...args} width="60%" height={12} variant="rounded" />\r
    </div>
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var j,f,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "WidgetSkeleton — stats",
  render: () => <div className="w-64">\r
      <WidgetSkeleton type="stats" />\r
    </div>
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var y,W,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "WidgetSkeleton — chart",
  render: () => <div className="w-80">\r
      <WidgetSkeleton type="chart" />\r
    </div>
}`,...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};export{a as Default,n as Shimmer,d as TextBlock,s as Variants,o as WidgetChart,i as WidgetStats,_ as __namedExportsOrder,E as default};
