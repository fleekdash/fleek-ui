import{j as a}from"./iframe-T4wYwA8j.js";import{B as d}from"./index-D86QLl0G.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./index-DHjlonOo.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";const O={title:"Components/Data Display/Badge",component:d,parameters:{layout:"centered",docs:{description:{component:"Status badge with variant × appearance × size × shape matrix. Light appearances resolve the theme `--color-*-soft/accent` tokens."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","success","warning","info","outline","destructive"]},appearance:{control:"select",options:["default","light","outline","ghost"]},size:{control:"select",options:["lg","md","sm","xs"]},shape:{control:"select",options:["default","circle"]},disabled:{control:"boolean"}},args:{variant:"primary",appearance:"default",size:"md",shape:"default",disabled:!1,children:"Badge"}},s={},t={render:r=>a.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["default","primary","secondary","success","warning","info","outline","destructive"].map(e=>a.jsx(d,{...r,variant:e,children:e},e))})},n={name:"Light appearances",render:r=>a.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["primary","secondary","success","warning","info","destructive"].map(e=>a.jsx(d,{...r,variant:e,appearance:"light",children:e},e))})},c={render:r=>a.jsx("div",{className:"flex items-center gap-2",children:["xs","sm","md","lg"].map(e=>a.jsx(d,{...r,size:e,children:e},e))})},i={name:"Circle (status dot)",args:{shape:"circle",children:"3",variant:"destructive"}},o={args:{disabled:!0}},R=["Default","Variants","LightAppearances","Sizes","CircleDot","Disabled"];var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,u,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">\r
      {(["default", "primary", "secondary", "success", "warning", "info", "outline", "destructive"] as const).map(variant => <Badge key={variant} {...args} variant={variant}>\r
          {variant}\r
        </Badge>)}\r
    </div>
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,h,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Light appearances",
  render: args => <div className="flex flex-wrap items-center gap-2">\r
      {(["primary", "secondary", "success", "warning", "info", "destructive"] as const).map(variant => <Badge key={variant} {...args} variant={variant} appearance="light">\r
          {variant}\r
        </Badge>)}\r
    </div>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,w,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">\r
      {(["xs", "sm", "md", "lg"] as const).map(size => <Badge key={size} {...args} size={size}>\r
          {size}\r
        </Badge>)}\r
    </div>
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var S,b,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Circle (status dot)",
  args: {
    shape: "circle",
    children: "3",
    variant: "destructive"
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var z,D,N;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};export{i as CircleDot,s as Default,o as Disabled,n as LightAppearances,c as Sizes,t as Variants,R as __namedExportsOrder,O as default};
