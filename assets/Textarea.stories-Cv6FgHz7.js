import{r as _,j as e}from"./iframe-AoE8j4ij.js";import{F as O}from"./field-focus-APfXAL04.js";import{c as D}from"./instant-translate-CWwN--yb.js";import{L}from"./index-ClKSfjzG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYubRgnd.js";import"./index-B7cbT5jr.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-D0Ytr1w-.js";import"./index-CyY0JB9U.js";import"./index-BtgwBQJy.js";const r=_.forwardRef(({className:a,...y},w)=>e.jsx("textarea",{className:D("border-input placeholder:text-muted-foreground flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs disabled:cursor-not-allowed disabled:opacity-50",O,a),ref:w,...y}));r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const{action:S}=__STORYBOOK_MODULE_ACTIONS__,U={title:"Components/Inputs/Textarea",component:r,parameters:{layout:"centered",docs:{description:{component:"Base textarea with the shared FIELD_FOCUS_CONTROL ring and disabled styling."}}},tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},rows:{control:"number"}},args:{placeholder:"Write something…",rows:4,disabled:!1,onChange:S("changed")},render:a=>e.jsx("div",{className:"w-80",children:e.jsx(r,{...a})})},t={},o={name:"With value",args:{defaultValue:`Release notes draft:
- Storybook catalog now covers all 7 widget types
- KPI group populates from demo data`}},s={args:{disabled:!0,defaultValue:"Disabled content"}},n={name:"With label",render:a=>e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsx(L,{htmlFor:"story-textarea",children:"Description"}),e.jsx(r,{...a,id:"story-textarea"})]})},k=["Default","WithValue","Disabled","WithLabel"];var d,l,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With value",
  args: {
    defaultValue: "Release notes draft:\\n- Storybook catalog now covers all 7 widget types\\n- KPI group populates from demo data"
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Disabled content"
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With label",
  render: args => <div className="w-80 space-y-2">\r
      <Label htmlFor="story-textarea">Description</Label>\r
      <Textarea {...args} id="story-textarea" />\r
    </div>
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};export{t as Default,s as Disabled,n as WithLabel,o as WithValue,k as __namedExportsOrder,U as default};
