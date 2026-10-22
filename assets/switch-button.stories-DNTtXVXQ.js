import{r as f,j as e}from"./iframe-AoE8j4ij.js";import{S as Y}from"./switch-DhspFiTt.js";import"./optimistic-switch-J3cciskW.js";import{c as k}from"./instant-translate-CWwN--yb.js";import{t as $}from"./index-BXu8nf8_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dnjqcorn.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-CyY0JB9U.js";import"./index-fqVMh7ov.js";import"./index-CJar-LNY.js";import"./index-CoOhShBD.js";import"./index-BsZNNPoo.js";import"./index-e2Y0WjtR.js";const Z=$({base:["flex items-center justify-between px-3 py-2 rounded-md border border-transparent","hover:border-border hover:bg-muted/30  cursor-pointer"],variants:{size:{sm:"px-2 py-1.5 text-sm",md:"px-3 py-2 text-sm",lg:"px-4 py-3 text-base"},variant:{default:"hover:border-border hover:bg-muted/30",ghost:"hover:bg-muted/50",outline:"border-border hover:bg-muted/20"},disabled:{true:"cursor-not-allowed opacity-50 hover:border-transparent hover:bg-transparent",false:""}},defaultVariants:{size:"md",variant:"default",disabled:!1}}),ee=$({base:"text-muted-foreground select-none",variants:{size:{sm:"text-xs",md:"text-sm",lg:"text-base"}},defaultVariants:{size:"md"}}),a=f.forwardRef(({className:t,size:n,variant:r,disabled:o=!1,checked:i,onCheckedChange:c,label:v,switchSize:F="sm",description:x,...J},K)=>{const Q=()=>{o||c(!i)},U=X=>{X.stopPropagation(),o||c(!i)};return e.jsxs("div",{ref:K,className:k(Z({size:n,variant:r,disabled:o,className:t})),onClick:Q,...J,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:`font-medium ${k(ee({size:n}))} `,children:v}),x&&e.jsx("div",{className:"text-muted-foreground/70 mt-0.5 text-xs",children:x})]}),e.jsx("div",{onClick:U,className:"flex items-center",children:e.jsx(Y,{checked:i,onCheckedChange:c,size:F,disabled:o,"aria-label":v})})]})});a.displayName="SwitchButton";a.__docgenInfo={description:"",methods:[],displayName:"SwitchButton",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},switchSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit","VariantProps"]};const fe={title:"Components/Inputs/SwitchButton",component:a,parameters:{layout:"centered"},argTypes:{checked:{control:"boolean",description:"The controlled state of the switch"},onCheckedChange:{action:"checked changed"},label:{control:"text",description:"The label text for the switch button"},description:{control:"text",description:"Optional description text below the label"},disabled:{control:"boolean",description:"Whether the switch button is disabled"},size:{control:"select",options:["sm","md","lg"],description:"Size of the switch button container"},switchSize:{control:"select",options:["sm","md","lg"],description:"Size of the actual switch component"},variant:{control:"select",options:["default","ghost","outline"],description:"Visual variant of the switch button"}},tags:["autodocs"]},s=t=>{const[n,r]=f.useState(t.checked||!1);return e.jsx(a,{...t,checked:n,onCheckedChange:r})},te=()=>{const[t,n]=f.useState({notifications:!0,darkMode:!1,autoSave:!0,analytics:!1}),r=o=>i=>{n(c=>({...c,[o]:i}))};return e.jsxs("div",{className:"w-80 space-y-3",children:[e.jsx(a,{label:"Push notifications",description:"Receive notifications for important updates",checked:t.notifications,onCheckedChange:r("notifications")}),e.jsx(a,{label:"Dark mode",description:"Switch to dark theme",checked:t.darkMode,onCheckedChange:r("darkMode")}),e.jsx(a,{label:"Auto-save",description:"Automatically save changes",checked:t.autoSave,onCheckedChange:r("autoSave")}),e.jsx(a,{label:"Analytics",description:"Help improve the app by sharing usage data",checked:t.analytics,onCheckedChange:r("analytics"),variant:"ghost"})]})},d={render:s,args:{label:"Enable notifications",checked:!1}},l={render:s,args:{label:"Dark mode",description:"Switch between light and dark themes",checked:!0}},p={render:s,args:{label:"Compact mode",size:"sm",switchSize:"sm",checked:!1}},m={render:s,args:{label:"Advanced settings",description:"Enable advanced configuration options",size:"lg",switchSize:"md",checked:!0}},u={render:s,args:{label:"Disabled option",description:"This option is currently disabled",checked:!1,disabled:!0}},h={render:s,args:{label:"Ghost variant",variant:"ghost",checked:!0}},b={render:s,args:{label:"Outline variant",variant:"outline",checked:!1}},g={render:()=>e.jsx(te,{})},ve=["Default","WithDescription","Small","Large","Disabled","Ghost","Outline","Multiple"];var S,w,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Enable notifications",
    checked: false
  }
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,z,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Dark mode",
    description: "Switch between light and dark themes",
    checked: true
  }
}`,...(j=(z=l.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var D,T,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Compact mode",
    size: "sm",
    switchSize: "sm",
    checked: false
  }
}`,...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var I,E,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Advanced settings",
    description: "Enable advanced configuration options",
    size: "lg",
    switchSize: "md",
    checked: true
  }
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,M,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Disabled option",
    description: "This option is currently disabled",
    checked: false,
    disabled: true
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,A,B;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Ghost variant",
    variant: "ghost",
    checked: true
  }
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var G,_,P;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: "Outline variant",
    variant: "outline",
    checked: false
  }
}`,...(P=(_=b.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,L,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <MultipleSwitchesExample />
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};export{d as Default,u as Disabled,h as Ghost,m as Large,g as Multiple,b as Outline,p as Small,l as WithDescription,ve as __namedExportsOrder,fe as default};
