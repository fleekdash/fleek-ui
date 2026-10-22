import{r as l,j as e}from"./iframe-AoE8j4ij.js";import{B as m}from"./index-BBiTMy7-.js";import{P as a}from"./index-bd3RFeMn.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-CWwN--yb.js";import"./button-text-DaZ12UVP.js";import"./index-D0Ytr1w-.js";import"./index-CyY0JB9U.js";import"./menu-trigger-chevron-DNXigjts.js";import"./index-C3ln6uYD.js";import"./index-Dnjqcorn.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-fqVMh7ov.js";import"./index-0wqsOdXR.js";import"./index-2t5kVuOk.js";import"./index-CoOhShBD.js";import"./index-ClnyGmSk.js";import"./index-BECtpOBS.js";import"./index-e2Y0WjtR.js";import"./index-DUlY3mAG.js";import"./index-CJar-LNY.js";import"./index-BXu8nf8_.js";const T={title:"Components/Overlay/PortalOverlay",component:a,parameters:{layout:"padded",docs:{description:{component:"Scrim + centered content shell for custom overlays. `onBackdropMouseDown` fires only when the press starts on the scrim — safe click-outside-to-close."}}},tags:["autodocs"]},r={render:function(){const[i,o]=l.useState(!1);return e.jsxs("div",{className:"relative h-64 w-full",children:[e.jsx(m,{onClick:()=>o(!0),children:"Open overlay"}),i&&e.jsx(a,{onBackdropMouseDown:()=>o(!1),className:"absolute inset-0",children:e.jsxs("div",{className:"bg-card border-border w-64 rounded-lg border p-4 shadow-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Overlay content"}),e.jsx("p",{className:"text-muted-foreground mt-1 text-xs",children:"Press the scrim to close. Dragging from inside the card does not close it."})]})})]})}},_=["ClickOutsideToClose"];var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
