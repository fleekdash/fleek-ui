import{j as e}from"./iframe-T4wYwA8j.js";import{I as t}from"./menu-trigger-chevron-DWrnO5CH.js";import{I as r,a as l,b as d}from"./Input-CQuMoDT1.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./field-focus-APfXAL04.js";import"./index-DHjlonOo.js";const z={title:"Components/Inputs/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"Text input (sm/md/lg) with `InputGroup`/`InputWrapper`/`InputAddon` composition for leading/trailing slots."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},type:{control:"text"}},args:{placeholder:"Widget title"},decorators:[S=>e.jsx("div",{className:"w-80",children:e.jsx(S,{})})]},a={},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"sm",placeholder:"Small (sm)"}),e.jsx(r,{variant:"md",placeholder:"Medium (md)"}),e.jsx(r,{variant:"lg",placeholder:"Large (lg)"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(l,{children:[e.jsx(d,{children:e.jsx(t,{name:"search"})}),e.jsx(r,{placeholder:"Search widgets..."})]}),e.jsxs(l,{children:[e.jsx(r,{placeholder:"https://"}),e.jsx(d,{mode:"icon",children:e.jsx(t,{name:"globe"})})]})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{placeholder:"Normal"}),e.jsx(r,{placeholder:"Disabled",disabled:!0}),e.jsx(r,{defaultValue:"Invalid value","aria-invalid":!0})]})},B=["Basic","Sizes","WithAddons","States"];var p,c,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Input variant="sm" placeholder="Small (sm)" />\r
      <Input variant="md" placeholder="Medium (md)" />\r
      <Input variant="lg" placeholder="Large (lg)" />\r
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,I,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <InputGroup>\r
        <InputAddon>\r
          <Icon name="search" />\r
        </InputAddon>\r
        <Input placeholder="Search widgets..." />\r
      </InputGroup>\r
      <InputGroup>\r
        <Input placeholder="https://" />\r
        <InputAddon mode="icon">\r
          <Icon name="globe" />\r
        </InputAddon>\r
      </InputGroup>\r
    </div>
}`,...(g=(I=n.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var v,j,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Input placeholder="Normal" />\r
      <Input placeholder="Disabled" disabled />\r
      <Input defaultValue="Invalid value" aria-invalid />\r
    </div>
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};export{a as Basic,s as Sizes,o as States,n as WithAddons,B as __namedExportsOrder,z as default};
