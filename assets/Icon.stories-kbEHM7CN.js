import{j as e}from"./iframe-AoE8j4ij.js";import{I as a}from"./menu-trigger-chevron-DNXigjts.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-CWwN--yb.js";const k={title:"Components/Data Display/Icon",component:a,parameters:{layout:"centered",docs:{description:{component:"Iconify-backed icon resolved through the FleekDash icon library (Solar-style set). `name` takes any registered key; unknown names render nothing."}}},tags:["autodocs"],argTypes:{name:{control:"text"},className:{control:"text"}},args:{name:"home",className:"size-6"},render:s=>e.jsx(a,{name:s.name,className:s.className})},t={},o={name:"Common icons",render:s=>e.jsx("div",{className:"flex flex-wrap items-center gap-5",children:["home","stat","settings","membership","notification","search","event","globe","rocket","verified"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{...s,name:r}),e.jsx("span",{className:"text-muted-foreground text-[10px]",children:r})]},r))})},n={render:s=>e.jsx("div",{className:"flex items-end gap-4",children:["size-3","size-4","size-5","size-6","size-8","size-10"].map(r=>e.jsx(a,{...s,className:r},r))})},c={render:s=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{...s,className:"text-primary size-8"}),e.jsx(a,{...s,className:"size-8 text-[var(--color-success-accent,var(--color-green-500))]"}),e.jsx(a,{...s,className:"text-destructive size-8"}),e.jsx(a,{...s,className:"text-muted-foreground size-8"})]})},S=["Default","CommonSet","Sizes","Colored"];var m,i,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Common icons",
  render: args => <div className="flex flex-wrap items-center gap-5">\r
      {["home", "stat", "settings", "membership", "notification", "search", "event", "globe", "rocket", "verified"].map(name => <div key={name} className="flex flex-col items-center gap-1">\r
          <Icon {...args} name={name} />\r
          <span className="text-muted-foreground text-[10px]">{name}</span>\r
        </div>)}\r
    </div>
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,u,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex items-end gap-4">\r
      {["size-3", "size-4", "size-5", "size-6", "size-8", "size-10"].map(cls => <Icon key={cls} {...args} className={cls} />)}\r
    </div>
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var N,v,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">\r
      <Icon {...args} className="text-primary size-8" />\r
      <Icon {...args} className="size-8 text-[var(--color-success-accent,var(--color-green-500))]" />\r
      <Icon {...args} className="text-destructive size-8" />\r
      <Icon {...args} className="text-muted-foreground size-8" />\r
    </div>
}`,...(z=(v=c.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};export{c as Colored,o as CommonSet,t as Default,n as Sizes,S as __namedExportsOrder,k as default};
