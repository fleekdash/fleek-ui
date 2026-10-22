import{j as r}from"./iframe-D20LpuAU.js";import{B as e}from"./index-Bc2r6MAQ.js";import{D as n,a as m,b as p,c as g,d as w,e as h,f as D,g as u,h as x}from"./index-ot__1L_3.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";import"./index-QG6kaEE6.js";import"./index-DzDhedGD.js";import"./Combination-Dk4vqPKc.js";const K={title:"Components/Overlay/Drawer",component:n,parameters:{layout:"centered",docs:{description:{component:"Vaul drawer primitive — bottom sheet with handle, header/footer composition and scrim. Nested modals inside drawers use `useVaulModal`, never a second `Drawer`."}}},tags:["autodocs"]},t={render:()=>r.jsxs(n,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Open drawer"})}),r.jsxs(p,{children:[r.jsx(g,{}),r.jsxs(w,{children:[r.jsx(h,{children:"Widget settings"}),r.jsx(D,{children:"Configure how this widget renders on the dashboard."})]}),r.jsx("div",{className:"px-4 pb-4",children:r.jsx("p",{className:"text-muted-foreground text-sm",children:"Drawer body content — forms, lists or previews go here."})}),r.jsxs(u,{children:[r.jsx(e,{children:"Save changes"}),r.jsx(x,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Cancel"})})]})]})]})},a={render:()=>r.jsxs(n,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Open modal drawer"})}),r.jsxs(p,{isModal:!0,children:[r.jsxs(w,{children:[r.jsx(h,{children:"Fade-out close"}),r.jsx(D,{children:"`isModal` swaps the slide-out animation for a fade."})]}),r.jsx(u,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Close"})})})]})]})},L=["BottomSheet","ModalStyle"];var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
