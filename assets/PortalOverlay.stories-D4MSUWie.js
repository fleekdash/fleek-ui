import{r as l,j as e}from"./iframe-D20LpuAU.js";import{B as m}from"./index-Bc2r6MAQ.js";import{P as a}from"./index-QG6kaEE6.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";const T={title:"Components/Overlay/PortalOverlay",component:a,parameters:{layout:"padded",docs:{description:{component:"Scrim + centered content shell for custom overlays. `onBackdropMouseDown` fires only when the press starts on the scrim — safe click-outside-to-close."}}},tags:["autodocs"]},r={render:function(){const[i,o]=l.useState(!1);return e.jsxs("div",{className:"relative h-64 w-full",children:[e.jsx(m,{onClick:()=>o(!0),children:"Open overlay"}),i&&e.jsx(a,{onBackdropMouseDown:()=>o(!1),className:"absolute inset-0",children:e.jsxs("div",{className:"bg-card border-border w-64 rounded-lg border p-4 shadow-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Overlay content"}),e.jsx("p",{className:"text-muted-foreground mt-1 text-xs",children:"Press the scrim to close. Dragging from inside the card does not close it."})]})})]})}},_=["ClickOutsideToClose"];var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
