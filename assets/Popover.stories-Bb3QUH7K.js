import{j as r}from"./iframe-D20LpuAU.js";import{B as c}from"./index-Bc2r6MAQ.js";import{P as n,a as l,b as g}from"./index-Ca6a96tD.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";import"./Combination-Dk4vqPKc.js";import"./overlay-z-index-BJUQghj5.js";const G={title:"Components/Overlay/Popover",component:n,parameters:{layout:"centered",docs:{description:{component:"Radix popover — anchored floating panel for settings, pickers and small forms."}}},tags:["autodocs"]},o={render:()=>r.jsxs(n,{children:[r.jsx(l,{asChild:!0,children:r.jsx(c,{variant:"outline",children:"Open popover"})}),r.jsx(g,{className:"w-64",children:r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{className:"text-sm font-medium",children:"Dimensions"}),r.jsx("p",{className:"text-muted-foreground text-xs",children:"Set the widget footprint on the dashboard grid."})]})})]})},t={render:()=>r.jsx("div",{className:"flex gap-4",children:["start","center","end"].map(e=>r.jsxs(n,{children:[r.jsx(l,{asChild:!0,children:r.jsxs(c,{variant:"outline",size:"sm",children:["align=",e]})}),r.jsx(g,{align:e,className:"w-48",children:r.jsxs("p",{className:"text-xs",children:["Aligned to the ",e," of the trigger."]})})]},e))})},H=["Basic","Alignments"];var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
