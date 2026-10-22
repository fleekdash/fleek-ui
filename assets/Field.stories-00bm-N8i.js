import{j as e}from"./iframe-T4wYwA8j.js";import{I as l}from"./Input-CQuMoDT1.js";import{L as b}from"./index-DLytozW5.js";import{c as j}from"./instant-translate-BmoNkbk6.js";import"./preload-helper-Dp1pzeXC.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./field-focus-APfXAL04.js";import"./index-DHjlonOo.js";import"./index-C3ufoKdi.js";import"./index-Bba-lvXl.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";function r({label:s,htmlFor:x,hint:a,className:f,children:N}){return e.jsxs("div",{className:j("space-y-2",f),children:[s?e.jsx(b,{htmlFor:x,children:s}):null,N,a?e.jsx("p",{className:"text-muted-foreground text-xs",children:a}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"Field",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const E={title:"Components/Inputs/Field",component:r,parameters:{layout:"centered",docs:{description:{component:"Label + control + hint composition wrapper. Use for plain form rows that do not need react-hook-form wiring."}}},tags:["autodocs"]},n={args:{children:null},render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Widget title",htmlFor:"widget-title",hint:"Shown in the widget header and customize drawer.",children:e.jsx(l,{id:"widget-title",placeholder:"Monthly revenue"})})})},t={args:{children:null},render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Slug",htmlFor:"slug",children:e.jsx(l,{id:"slug",placeholder:"monthly-revenue"})})})},i={args:{children:null},render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{hint:"Plain field group without a label.",children:e.jsx(l,{placeholder:"Unlabeled input"})})})},H=["WithHint","LabelOnly","NoLabel"];var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-80">\r
      <Field label="Widget title" htmlFor="widget-title" hint="Shown in the widget header and customize drawer.">\r
        <Input id="widget-title" placeholder="Monthly revenue" />\r
      </Field>\r
    </div>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-80">\r
      <Field label="Slug" htmlFor="slug">\r
        <Input id="slug" placeholder="monthly-revenue" />\r
      </Field>\r
    </div>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-80">\r
      <Field hint="Plain field group without a label.">\r
        <Input placeholder="Unlabeled input" />\r
      </Field>\r
    </div>
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};export{t as LabelOnly,i as NoLabel,n as WithHint,H as __namedExportsOrder,E as default};
