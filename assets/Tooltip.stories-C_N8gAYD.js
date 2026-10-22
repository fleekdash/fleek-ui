import{j as o}from"./iframe-D20LpuAU.js";import{B as s}from"./index-Bc2r6MAQ.js";import{T as n,a as j,b as a,c as p}from"./index-CzQzOWpv.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-BWpMtWhh.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";const I={title:"Components/Overlay/Tooltip",component:n,parameters:{layout:"centered",docs:{description:{component:"Radix tooltip with dark surface + arrow. `TooltipProvider` controls the shared `delayDuration`."}}},tags:["autodocs"],decorators:[r=>o.jsx(j,{delayDuration:150,children:o.jsx(r,{})})]},t={render:()=>o.jsxs(n,{children:[o.jsx(a,{asChild:!0,children:o.jsx(s,{variant:"outline",children:"Hover me"})}),o.jsx(p,{children:"Refresh this widget"})]})},e={render:()=>o.jsx("div",{className:"flex gap-6 pt-2",children:["top","right","bottom","left"].map(r=>o.jsxs(n,{children:[o.jsx(a,{asChild:!0,children:o.jsx(s,{variant:"outline",size:"sm",children:r})}),o.jsxs(p,{side:r,children:["Tooltip on ",r]})]},r))})},i={render:()=>o.jsxs(n,{children:[o.jsx(a,{asChild:!0,children:o.jsx(s,{variant:"outline",children:"No arrow"})}),o.jsx(p,{showArrow:!1,children:"Flat tooltip"})]})},J=["Basic","Placements","NoArrow"];var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
