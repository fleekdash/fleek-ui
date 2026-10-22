import{r,j as a}from"./iframe-AoE8j4ij.js";import{R as b,V as g,C as v,S as x,a as w}from"./index-DQlqLfHK.js";import{c as N}from"./instant-translate-CWwN--yb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dnjqcorn.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-CyY0JB9U.js";import"./index-DUlY3mAG.js";import"./index-CoOhShBD.js";import"./index-fqVMh7ov.js";import"./index-2t5kVuOk.js";import"./index-ZDOu8O0q.js";import"./index-BdQq_4o_.js";const t=r.forwardRef(({className:o,children:e,...n},c)=>r.createElement(b,{ref:c,className:N("relative overflow-hidden",o),...n},r.createElement(g,{className:"h-full w-full rounded-[inherit]"},e),r.createElement(d,null),r.createElement(v,null)));t.displayName=b.displayName;const d=r.forwardRef(({className:o,orientation:e="vertical",...n},c)=>r.createElement(x,{ref:c,orientation:e,className:N("flex touch-none transition-colors select-none",e==="vertical"&&"h-full w-2.5 border-s border-s-transparent p-px",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-px",o),...n},r.createElement(w,{className:"bg-border relative flex-1 rounded-full"})));d.displayName=x.displayName;t.__docgenInfo={description:`ScrollArea component with a custom scrollbar
@type {React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>}`,methods:[]};d.__docgenInfo={description:`Custom scrollbar component for the ScrollArea
@type {React.ForwardRefExoticComponent<ScrollBarProps & React.RefAttributes<HTMLDivElement>>}`,methods:[],props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};const L={title:"Components/Layout/ScrollArea",component:t,parameters:{layout:"centered",docs:{description:{component:"Radix scroll area with the FleekDash scrollbar styling. Bound the root with a fixed height/width; the viewport scrolls inside it."}}},tags:["autodocs"]},s={render:()=>a.jsx(t,{className:"border-border h-48 w-64 rounded-md border p-3",children:a.jsx("div",{className:"space-y-2",children:Array.from({length:24},(o,e)=>a.jsxs("p",{className:"text-sm",children:["Scrollable item ",e+1]},e))})})},l={name:"Inside a card",render:()=>a.jsxs("div",{className:"border-border bg-card w-72 rounded-lg border p-4",children:[a.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Notifications"}),a.jsx(t,{className:"h-40",children:a.jsx("div",{className:"space-y-3",children:Array.from({length:12},(o,e)=>a.jsxs("div",{className:"text-muted-foreground text-xs",children:["Update ",e+1," — a dashboard widget changed state."]},e))})})]})},T=["Vertical","InCard"];var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ScrollArea className="border-border h-48 w-64 rounded-md border p-3">\r
      <div className="space-y-2">\r
        {Array.from({
        length: 24
      }, (_, i) => <p key={i} className="text-sm">\r
            Scrollable item {i + 1}\r
          </p>)}\r
      </div>\r
    </ScrollArea>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Inside a card",
  render: () => <div className="border-border bg-card w-72 rounded-lg border p-4">\r
      <h3 className="mb-2 text-sm font-medium">Notifications</h3>\r
      <ScrollArea className="h-40">\r
        <div className="space-y-3">\r
          {Array.from({
          length: 12
        }, (_, i) => <div key={i} className="text-muted-foreground text-xs">\r
              Update {i + 1} — a dashboard widget changed state.\r
            </div>)}\r
        </div>\r
      </ScrollArea>\r
    </div>
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};export{l as InCard,s as Vertical,T as __namedExportsOrder,L as default};
