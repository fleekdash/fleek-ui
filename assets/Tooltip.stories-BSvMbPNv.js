import{j as o}from"./iframe-T4wYwA8j.js";import{B as s}from"./index-HZf78xiD.js";import{T as n,a as j,b as a,c as p}from"./index-Dj8qcVdI.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./button-text-Cb5H-Sx-.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./index-BVzRL7o2.js";import"./index-DxMdwhIO.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-D-QkTY3a.js";import"./index-BDqiunJ7.js";import"./index-UPRAAfe0.js";import"./index-CJI3Y6Cm.js";import"./index-CJ3T31u1.js";import"./index-AC-EWCAL.js";import"./index-BrhX1qx-.js";import"./index-DpjuSjS8.js";import"./index-D2IX1F60.js";const I={title:"Components/Overlay/Tooltip",component:n,parameters:{layout:"centered",docs:{description:{component:"Radix tooltip with dark surface + arrow. `TooltipProvider` controls the shared `delayDuration`."}}},tags:["autodocs"],decorators:[r=>o.jsx(j,{delayDuration:150,children:o.jsx(r,{})})]},t={render:()=>o.jsxs(n,{children:[o.jsx(a,{asChild:!0,children:o.jsx(s,{variant:"outline",children:"Hover me"})}),o.jsx(p,{children:"Refresh this widget"})]})},e={render:()=>o.jsx("div",{className:"flex gap-6 pt-2",children:["top","right","bottom","left"].map(r=>o.jsxs(n,{children:[o.jsx(a,{asChild:!0,children:o.jsx(s,{variant:"outline",size:"sm",children:r})}),o.jsxs(p,{side:r,children:["Tooltip on ",r]})]},r))})},i={render:()=>o.jsxs(n,{children:[o.jsx(a,{asChild:!0,children:o.jsx(s,{variant:"outline",children:"No arrow"})}),o.jsx(p,{showArrow:!1,children:"Flat tooltip"})]})},J=["Basic","Placements","NoArrow"];var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Hover me</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>Refresh this widget</TooltipContent>\r
    </Tooltip>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,T,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 pt-2">\r
      {(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side}>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline" size="sm">\r
              {side}\r
            </Button>\r
          </TooltipTrigger>\r
          <TooltipContent side={side}>Tooltip on {side}</TooltipContent>\r
        </Tooltip>)}\r
    </div>
}`,...(u=(T=e.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var h,g,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">No arrow</Button>\r
      </TooltipTrigger>\r
      <TooltipContent showArrow={false}>Flat tooltip</TooltipContent>\r
    </Tooltip>
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};export{t as Basic,i as NoArrow,e as Placements,J as __namedExportsOrder,I as default};
