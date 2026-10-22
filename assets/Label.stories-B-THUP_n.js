import{j as e}from"./iframe-T4wYwA8j.js";import{I as h}from"./Input-CQuMoDT1.js";import{L as l}from"./index-1HZQnkLX.js";import"./preload-helper-Dp1pzeXC.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./instant-translate-BmoNkbk6.js";import"./field-focus-APfXAL04.js";import"./index-DHjlonOo.js";import"./index-C3ufoKdi.js";import"./index-Bba-lvXl.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";const R={title:"Components/Inputs/Label",component:l,parameters:{layout:"centered",docs:{description:{component:"Radix form label. Dims automatically when its peer input is disabled (`peer-disabled:`)."}}},tags:["autodocs"],args:{children:"Field label"}},r={},a={name:"Associated with input",render:t=>e.jsxs("div",{className:"w-64 space-y-2",children:[e.jsx(l,{...t,htmlFor:"story-label-input",children:"Email"}),e.jsx(h,{id:"story-label-input",placeholder:"name@example.com"})]})},s={name:"Disabled peer (dimmed)",render:t=>e.jsxs("div",{className:"flex w-64 items-center gap-2",children:[e.jsx(h,{id:"story-label-disabled",disabled:!0,className:"peer",placeholder:"Unavailable"}),e.jsx(l,{...t,htmlFor:"story-label-disabled",children:"Disabled field"})]})},S=["Default","WithInput","DisabledPeer"];var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Associated with input",
  render: args => <div className="w-64 space-y-2">\r
      <Label {...args} htmlFor="story-label-input">\r
        Email\r
      </Label>\r
      <Input id="story-label-input" placeholder="name@example.com" />\r
    </div>
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,b,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Disabled peer (dimmed)",
  render: args => <div className="flex w-64 items-center gap-2">\r
      <Input id="story-label-disabled" disabled className="peer" placeholder="Unavailable" />\r
      {/* Label renders AFTER the peer sibling — Tailwind peer-* variants\r
          only look at preceding siblings, which is why the shadcn\r
          convention puts Label after the control. */}\r
      <Label {...args} htmlFor="story-label-disabled">\r
        Disabled field\r
      </Label>\r
    </div>
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};export{r as Default,s as DisabledPeer,a as WithInput,S as __namedExportsOrder,R as default};
