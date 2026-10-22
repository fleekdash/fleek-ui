import{j as e}from"./iframe-D20LpuAU.js";import{c as g}from"./instant-translate-pJhJtWwT.js";import"./preload-helper-Dp1pzeXC.js";function t({className:n,variant:a="default",...f}){return e.jsx("div",{className:g("skeleton-bg animate-pulse rounded-md",{"h-4 w-full":a==="text","h-8 w-[250px]":a==="title","h-12 w-12 rounded-full":a==="avatar","h-10 w-[120px]":a==="button","h-[200px] w-full":a==="card"},n),...f})}t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const k={title:"Components/Feedback/SkeletonBase",component:t,parameters:{layout:"centered",docs:{description:{component:"Preset-shaped skeleton primitive (card/title/text/avatar/button) — the older sibling of `atoms/Skeleton`, kept because callers use its fixed presets. Prefer `atoms/Skeleton` for free-form sizing."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","card","title","text","avatar","button"]}},args:{variant:"text"}},r={},s={render:n=>e.jsx("div",{className:"flex flex-col items-start gap-4",children:["text","title","avatar","button","card","default"].map(a=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{...n,variant:a}),e.jsx("span",{className:"text-muted-foreground text-xs",children:a})]},a))})},o={name:"Composed card placeholder",render:()=>e.jsxs("div",{className:"border-border w-64 space-y-3 rounded-lg border p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"avatar"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{variant:"title",className:"w-3/4"}),e.jsx(t,{variant:"text"})]})]}),e.jsx(t,{variant:"card",className:"h-24"}),e.jsx(t,{variant:"button"})]})},j=["Default","Presets","ComposedCard"];var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-start gap-4">\r
      {(["text", "title", "avatar", "button", "card", "default"] as const).map(variant => <div key={variant} className="flex items-center gap-3">\r
            <Skeleton {...args} variant={variant} />\r
            <span className="text-muted-foreground text-xs">{variant}</span>\r
          </div>)}\r
    </div>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Composed card placeholder",
  render: () => <div className="border-border w-64 space-y-3 rounded-lg border p-4">\r
      <div className="flex items-center gap-3">\r
        <Skeleton variant="avatar" />\r
        <div className="flex-1 space-y-2">\r
          <Skeleton variant="title" className="w-3/4" />\r
          <Skeleton variant="text" />\r
        </div>\r
      </div>\r
      <Skeleton variant="card" className="h-24" />\r
      <Skeleton variant="button" />\r
    </div>
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};export{o as ComposedCard,r as Default,s as Presets,j as __namedExportsOrder,k as default};
