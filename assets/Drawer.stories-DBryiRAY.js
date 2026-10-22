import{j as r}from"./iframe-T4wYwA8j.js";import{B as e}from"./index-HZf78xiD.js";import{D as n,a as m,b as p,c as g,d as w,e as h,f as D,g as u,h as x}from"./index-vXIDsaz9.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./button-text-Cb5H-Sx-.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./index-Dj8qcVdI.js";import"./index-DxMdwhIO.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-D-QkTY3a.js";import"./index-BDqiunJ7.js";import"./index-UPRAAfe0.js";import"./index-CJI3Y6Cm.js";import"./index-CJ3T31u1.js";import"./index-AC-EWCAL.js";import"./index-BrhX1qx-.js";import"./index-DpjuSjS8.js";import"./index-D2IX1F60.js";import"./index-BVzRL7o2.js";import"./index-Dv7OwZ1M.js";import"./index-CNOGRVgk.js";import"./Combination-Dc_x3bih.js";const K={title:"Components/Overlay/Drawer",component:n,parameters:{layout:"centered",docs:{description:{component:"Vaul drawer primitive — bottom sheet with handle, header/footer composition and scrim. Nested modals inside drawers use `useVaulModal`, never a second `Drawer`."}}},tags:["autodocs"]},t={render:()=>r.jsxs(n,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Open drawer"})}),r.jsxs(p,{children:[r.jsx(g,{}),r.jsxs(w,{children:[r.jsx(h,{children:"Widget settings"}),r.jsx(D,{children:"Configure how this widget renders on the dashboard."})]}),r.jsx("div",{className:"px-4 pb-4",children:r.jsx("p",{className:"text-muted-foreground text-sm",children:"Drawer body content — forms, lists or previews go here."})}),r.jsxs(u,{children:[r.jsx(e,{children:"Save changes"}),r.jsx(x,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Cancel"})})]})]})]})},a={render:()=>r.jsxs(n,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Open modal drawer"})}),r.jsxs(p,{isModal:!0,children:[r.jsxs(w,{children:[r.jsx(h,{children:"Fade-out close"}),r.jsx(D,{children:"`isModal` swaps the slide-out animation for a fade."})]}),r.jsx(u,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Close"})})})]})]})},L=["BottomSheet","ModalStyle"];var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Drawer>\r
      <DrawerTrigger asChild>\r
        <Button variant="outline">Open drawer</Button>\r
      </DrawerTrigger>\r
      <DrawerContent>\r
        <DrawerHandle />\r
        <DrawerHeader>\r
          <DrawerTitle>Widget settings</DrawerTitle>\r
          <DrawerDescription>\r
            Configure how this widget renders on the dashboard.\r
          </DrawerDescription>\r
        </DrawerHeader>\r
        <div className="px-4 pb-4">\r
          <p className="text-muted-foreground text-sm">\r
            Drawer body content — forms, lists or previews go here.\r
          </p>\r
        </div>\r
        <DrawerFooter>\r
          <Button>Save changes</Button>\r
          <DrawerClose asChild>\r
            <Button variant="outline">Cancel</Button>\r
          </DrawerClose>\r
        </DrawerFooter>\r
      </DrawerContent>\r
    </Drawer>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Drawer>\r
      <DrawerTrigger asChild>\r
        <Button variant="outline">Open modal drawer</Button>\r
      </DrawerTrigger>\r
      <DrawerContent isModal>\r
        <DrawerHeader>\r
          <DrawerTitle>Fade-out close</DrawerTitle>\r
          <DrawerDescription>\r
            \`isModal\` swaps the slide-out animation for a fade.\r
          </DrawerDescription>\r
        </DrawerHeader>\r
        <DrawerFooter>\r
          <DrawerClose asChild>\r
            <Button variant="outline">Close</Button>\r
          </DrawerClose>\r
        </DrawerFooter>\r
      </DrawerContent>\r
    </Drawer>
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{t as BottomSheet,a as ModalStyle,L as __namedExportsOrder,K as default};
