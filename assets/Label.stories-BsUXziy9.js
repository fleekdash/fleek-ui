import{j as e}from"./iframe-B4ogevxn.js";import{I as h}from"./Input-Cwsr2Og7.js";import{L as l}from"./index-mH5Pd0Ip.js";import"./preload-helper-Dp1pzeXC.js";import"./menu-trigger-chevron-Q4kmR1jM.js";import"./instant-translate-pibj5xTz.js";import"./field-focus-APfXAL04.js";import"./index-BFlTwmna.js";import"./index-91As92z0.js";import"./index-DsJnMvtX.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-q2t2gBUy.js";import"./index-yfKPQT7J.js";const R={title:"Components/Inputs/Label",component:l,parameters:{layout:"centered",docs:{description:{component:"Radix form label. Dims automatically when its peer input is disabled (`peer-disabled:`)."}}},tags:["autodocs"],args:{children:"Field label"}},r={},a={name:"Associated with input",render:t=>e.jsxs("div",{className:"w-64 space-y-2",children:[e.jsx(l,{...t,htmlFor:"story-label-input",children:"Email"}),e.jsx(h,{id:"story-label-input",placeholder:"name@example.com"})]})},s={name:"Disabled peer (dimmed)",render:t=>e.jsxs("div",{className:"flex w-64 items-center gap-2",children:[e.jsx(h,{id:"story-label-disabled",disabled:!0,className:"peer",placeholder:"Unavailable"}),e.jsx(l,{...t,htmlFor:"story-label-disabled",children:"Disabled field"})]})},S=["Default","WithInput","DisabledPeer"];var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
