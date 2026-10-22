import{j as r}from"./iframe-AoE8j4ij.js";import{B as c}from"./index-BBiTMy7-.js";import{P as n,a as l,b as g}from"./index-pT6xUUUb.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-CWwN--yb.js";import"./button-text-DaZ12UVP.js";import"./index-D0Ytr1w-.js";import"./index-CyY0JB9U.js";import"./menu-trigger-chevron-DNXigjts.js";import"./index-C3ln6uYD.js";import"./index-Dnjqcorn.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-fqVMh7ov.js";import"./index-0wqsOdXR.js";import"./index-2t5kVuOk.js";import"./index-CoOhShBD.js";import"./index-ClnyGmSk.js";import"./index-BECtpOBS.js";import"./index-e2Y0WjtR.js";import"./index-DUlY3mAG.js";import"./index-CJar-LNY.js";import"./index-BXu8nf8_.js";import"./Combination-D7RAEOgv.js";import"./overlay-z-index-BJUQghj5.js";const G={title:"Components/Overlay/Popover",component:n,parameters:{layout:"centered",docs:{description:{component:"Radix popover — anchored floating panel for settings, pickers and small forms."}}},tags:["autodocs"]},o={render:()=>r.jsxs(n,{children:[r.jsx(l,{asChild:!0,children:r.jsx(c,{variant:"outline",children:"Open popover"})}),r.jsx(g,{className:"w-64",children:r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{className:"text-sm font-medium",children:"Dimensions"}),r.jsx("p",{className:"text-muted-foreground text-xs",children:"Set the widget footprint on the dashboard grid."})]})})]})},t={render:()=>r.jsx("div",{className:"flex gap-4",children:["start","center","end"].map(e=>r.jsxs(n,{children:[r.jsx(l,{asChild:!0,children:r.jsxs(c,{variant:"outline",size:"sm",children:["align=",e]})}),r.jsx(g,{align:e,className:"w-48",children:r.jsxs("p",{className:"text-xs",children:["Aligned to the ",e," of the trigger."]})})]},e))})},H=["Basic","Alignments"];var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button variant="outline">Open popover</Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-64">\r
        <div className="space-y-2">\r
          <p className="text-sm font-medium">Dimensions</p>\r
          <p className="text-muted-foreground text-xs">\r
            Set the widget footprint on the dashboard grid.\r
          </p>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      {(["start", "center", "end"] as const).map(align => <Popover key={align}>\r
          <PopoverTrigger asChild>\r
            <Button variant="outline" size="sm">\r
              align={align}\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent align={align} className="w-48">\r
            <p className="text-xs">Aligned to the {align} of the trigger.</p>\r
          </PopoverContent>\r
        </Popover>)}\r
    </div>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{t as Alignments,o as Basic,H as __namedExportsOrder,G as default};
