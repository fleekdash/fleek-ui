import{j as e,r as N}from"./iframe-AoE8j4ij.js";import{S as q}from"./switch-DhspFiTt.js";import{O}from"./optimistic-switch-J3cciskW.js";import{L as P}from"./index-ylDqdqaE.js";import{c as A}from"./instant-translate-CWwN--yb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dnjqcorn.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-CyY0JB9U.js";import"./index-fqVMh7ov.js";import"./index-CJar-LNY.js";import"./index-CoOhShBD.js";import"./index-BsZNNPoo.js";import"./index-e2Y0WjtR.js";import"./index-BXu8nf8_.js";import"./index-CYubRgnd.js";import"./index-B7cbT5jr.js";import"./index-D0Ytr1w-.js";const L="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0",_="min-w-0 flex-1 space-y-1",D="text-sm text-muted-foreground";function a(t){const{id:s,title:d,description:c,checked:v,onCheckedChange:C,disabled:y=!1,pending:x=!1,optimistic:S=!1,className:T,children:R}=t,l={id:s,checked:v,disabled:y||x,onCheckedChange:j=>C(!!j)};return e.jsxs("div",{className:A(L,T),children:[e.jsxs("div",{className:_,children:[e.jsx(P,{htmlFor:s,children:d}),c?e.jsx("p",{className:D,children:c}):null,R]}),S?e.jsx(O,{...l}):e.jsx(q,{...l})]})}a.__docgenInfo={description:"",methods:[],displayName:"SettingsToggleRow",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void | Promise<void>",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},pending:{required:!1,tsType:{name:"boolean"},description:""},optimistic:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ie={title:"Components/Settings/SettingsToggleRow",component:a,parameters:{layout:"centered",docs:{description:{component:"Compact settings row: title, description and a switch. `optimistic` uses the OptimisticSwitch for instant visual feedback; `pending` shows the busy state."}}},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},pending:{control:"boolean"},optimistic:{control:"boolean"}},decorators:[t=>e.jsx("div",{className:"w-96",children:e.jsx(t,{})})]};function i(t){const[s,d]=N.useState(t.checked??!1);return e.jsx(a,{...t,checked:s,onCheckedChange:d})}const r={args:{id:"row",title:"Row",checked:!1,onCheckedChange:()=>{}},render:()=>e.jsx(i,{id:"auto-refresh",title:"Auto refresh",description:"Refresh widget data on the dashboard interval.",checked:!0})},o={args:{id:"row",title:"Row",checked:!1,onCheckedChange:()=>{}},render:()=>e.jsxs("div",{className:"divide-border divide-y",children:[e.jsx(i,{id:"row-1",title:"Show legend",description:"Display the chart legend below the plot.",checked:!0}),e.jsx(i,{id:"row-2",title:"Compact numbers",description:"Format large values as 1.2K / 3.4M.",checked:!1}),e.jsx(i,{id:"row-3",title:"Optimistic save",description:"Instant toggle feedback via OptimisticSwitch.",checked:!0,optimistic:!0})]})},n={args:{id:"row",title:"Row",checked:!1,onCheckedChange:()=>{}},render:()=>e.jsxs("div",{className:"divide-border divide-y",children:[e.jsx(i,{id:"p1",title:"Saving...",description:"Pending state while the request runs.",checked:!0,pending:!0}),e.jsx(i,{id:"p2",title:"Locked setting",description:"Managed by the workspace admin.",checked:!1,disabled:!0})]})},se=["Basic","Group","PendingAndDisabled"];var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: "row",
    title: "Row",
    checked: false,
    onCheckedChange: () => {}
  },
  render: () => <ToggleRow id="auto-refresh" title="Auto refresh" description="Refresh widget data on the dashboard interval." checked />
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,u,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "row",
    title: "Row",
    checked: false,
    onCheckedChange: () => {}
  },
  render: () => <div className="divide-border divide-y">\r
      <ToggleRow id="row-1" title="Show legend" description="Display the chart legend below the plot." checked />\r
      <ToggleRow id="row-2" title="Compact numbers" description="Format large values as 1.2K / 3.4M." checked={false} />\r
      <ToggleRow id="row-3" title="Optimistic save" description="Instant toggle feedback via OptimisticSwitch." checked optimistic />\r
    </div>
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var f,k,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "row",
    title: "Row",
    checked: false,
    onCheckedChange: () => {}
  },
  render: () => <div className="divide-border divide-y">\r
      <ToggleRow id="p1" title="Saving..." description="Pending state while the request runs." checked pending />\r
      <ToggleRow id="p2" title="Locked setting" description="Managed by the workspace admin." checked={false} disabled />\r
    </div>
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};export{r as Basic,o as Group,n as PendingAndDisabled,se as __namedExportsOrder,ie as default};
