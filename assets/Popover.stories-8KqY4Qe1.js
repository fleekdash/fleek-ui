import{j as r}from"./iframe-T4wYwA8j.js";import{B as c}from"./index-HZf78xiD.js";import{P as n,a as l,b as g}from"./index-CMawTAXc.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./button-text-Cb5H-Sx-.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./index-Dj8qcVdI.js";import"./index-DxMdwhIO.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-D-QkTY3a.js";import"./index-BDqiunJ7.js";import"./index-UPRAAfe0.js";import"./index-CJI3Y6Cm.js";import"./index-CJ3T31u1.js";import"./index-AC-EWCAL.js";import"./index-BrhX1qx-.js";import"./index-DpjuSjS8.js";import"./index-D2IX1F60.js";import"./index-BVzRL7o2.js";import"./Combination-Dc_x3bih.js";import"./overlay-z-index-BJUQghj5.js";const G={title:"Components/Overlay/Popover",component:n,parameters:{layout:"centered",docs:{description:{component:"Radix popover — anchored floating panel for settings, pickers and small forms."}}},tags:["autodocs"]},o={render:()=>r.jsxs(n,{children:[r.jsx(l,{asChild:!0,children:r.jsx(c,{variant:"outline",children:"Open popover"})}),r.jsx(g,{className:"w-64",children:r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{className:"text-sm font-medium",children:"Dimensions"}),r.jsx("p",{className:"text-muted-foreground text-xs",children:"Set the widget footprint on the dashboard grid."})]})})]})},t={render:()=>r.jsx("div",{className:"flex gap-4",children:["start","center","end"].map(e=>r.jsxs(n,{children:[r.jsx(l,{asChild:!0,children:r.jsxs(c,{variant:"outline",size:"sm",children:["align=",e]})}),r.jsx(g,{align:e,className:"w-48",children:r.jsxs("p",{className:"text-xs",children:["Aligned to the ",e," of the trigger."]})})]},e))})},H=["Basic","Alignments"];var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
