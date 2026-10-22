import{r as l,j as e}from"./iframe-B4ogevxn.js";import{B as m}from"./index-IiT93W48.js";import{P as a}from"./index-OYOV08-1.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pibj5xTz.js";import"./button-text-DNz-Xq84.js";import"./index-q2t2gBUy.js";import"./index-yfKPQT7J.js";import"./menu-trigger-chevron-Q4kmR1jM.js";import"./index-CPN_ecL-.js";import"./index-Y7k0CB23.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-YtbWFEiY.js";import"./index-vfXVsf48.js";import"./index-CdEyXhUw.js";import"./index-D75eZwGm.js";import"./index-CnPndVxn.js";import"./index-C_H-g0R6.js";import"./index-Bg0-gfri.js";import"./index-rTX2682U.js";import"./index-BFRsHRLp.js";import"./index-CPguq436.js";const T={title:"Components/Overlay/PortalOverlay",component:a,parameters:{layout:"padded",docs:{description:{component:"Scrim + centered content shell for custom overlays. `onBackdropMouseDown` fires only when the press starts on the scrim — safe click-outside-to-close."}}},tags:["autodocs"]},r={render:function(){const[i,o]=l.useState(!1);return e.jsxs("div",{className:"relative h-64 w-full",children:[e.jsx(m,{onClick:()=>o(!0),children:"Open overlay"}),i&&e.jsx(a,{onBackdropMouseDown:()=>o(!1),className:"absolute inset-0",children:e.jsxs("div",{className:"bg-card border-border w-64 rounded-lg border p-4 shadow-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Overlay content"}),e.jsx("p",{className:"text-muted-foreground mt-1 text-xs",children:"Press the scrim to close. Dragging from inside the card does not close it."})]})})]})}},_=["ClickOutsideToClose"];var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
