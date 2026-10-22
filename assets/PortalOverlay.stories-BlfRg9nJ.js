import{r as l,j as e}from"./iframe-T4wYwA8j.js";import{B as m}from"./index-HZf78xiD.js";import{P as a}from"./index-Dv7OwZ1M.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./button-text-Cb5H-Sx-.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./index-Dj8qcVdI.js";import"./index-DxMdwhIO.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-D-QkTY3a.js";import"./index-BDqiunJ7.js";import"./index-UPRAAfe0.js";import"./index-CJI3Y6Cm.js";import"./index-CJ3T31u1.js";import"./index-AC-EWCAL.js";import"./index-BrhX1qx-.js";import"./index-DpjuSjS8.js";import"./index-D2IX1F60.js";import"./index-BVzRL7o2.js";const T={title:"Components/Overlay/PortalOverlay",component:a,parameters:{layout:"padded",docs:{description:{component:"Scrim + centered content shell for custom overlays. `onBackdropMouseDown` fires only when the press starts on the scrim — safe click-outside-to-close."}}},tags:["autodocs"]},r={render:function(){const[i,o]=l.useState(!1);return e.jsxs("div",{className:"relative h-64 w-full",children:[e.jsx(m,{onClick:()=>o(!0),children:"Open overlay"}),i&&e.jsx(a,{onBackdropMouseDown:()=>o(!1),className:"absolute inset-0",children:e.jsxs("div",{className:"bg-card border-border w-64 rounded-lg border p-4 shadow-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Overlay content"}),e.jsx("p",{className:"text-muted-foreground mt-1 text-xs",children:"Press the scrim to close. Dragging from inside the card does not close it."})]})})]})}},_=["ClickOutsideToClose"];var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div className="relative h-64 w-full">\r
        <Button onClick={() => setOpen(true)}>Open overlay</Button>\r
        {open && <PortalOverlay onBackdropMouseDown={() => setOpen(false)} className="absolute inset-0">\r
            <div className="bg-card border-border w-64 rounded-lg border p-4 shadow-lg">\r
              <p className="text-sm font-medium">Overlay content</p>\r
              <p className="text-muted-foreground mt-1 text-xs">\r
                Press the scrim to close. Dragging from inside the card does not\r
                close it.\r
              </p>\r
            </div>\r
          </PortalOverlay>}\r
      </div>;
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};export{r as ClickOutsideToClose,_ as __namedExportsOrder,T as default};
