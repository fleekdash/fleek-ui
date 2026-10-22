import{j as r}from"./iframe-B4ogevxn.js";import{B as e}from"./index-IiT93W48.js";import{D as n,a as m,b as p,c as g,d as w,e as h,f as D,g as u,h as x}from"./index-CpCD1QGr.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pibj5xTz.js";import"./button-text-DNz-Xq84.js";import"./index-q2t2gBUy.js";import"./index-yfKPQT7J.js";import"./menu-trigger-chevron-Q4kmR1jM.js";import"./index-CPN_ecL-.js";import"./index-Y7k0CB23.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-YtbWFEiY.js";import"./index-vfXVsf48.js";import"./index-CdEyXhUw.js";import"./index-D75eZwGm.js";import"./index-CnPndVxn.js";import"./index-C_H-g0R6.js";import"./index-Bg0-gfri.js";import"./index-rTX2682U.js";import"./index-BFRsHRLp.js";import"./index-CPguq436.js";import"./index-OYOV08-1.js";import"./index-CHwU0gwQ.js";import"./Combination-DPAIdUIc.js";const K={title:"Components/Overlay/Drawer",component:n,parameters:{layout:"centered",docs:{description:{component:"Vaul drawer primitive — bottom sheet with handle, header/footer composition and scrim. Nested modals inside drawers use `useVaulModal`, never a second `Drawer`."}}},tags:["autodocs"]},t={render:()=>r.jsxs(n,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Open drawer"})}),r.jsxs(p,{children:[r.jsx(g,{}),r.jsxs(w,{children:[r.jsx(h,{children:"Widget settings"}),r.jsx(D,{children:"Configure how this widget renders on the dashboard."})]}),r.jsx("div",{className:"px-4 pb-4",children:r.jsx("p",{className:"text-muted-foreground text-sm",children:"Drawer body content — forms, lists or previews go here."})}),r.jsxs(u,{children:[r.jsx(e,{children:"Save changes"}),r.jsx(x,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Cancel"})})]})]})]})},a={render:()=>r.jsxs(n,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Open modal drawer"})}),r.jsxs(p,{isModal:!0,children:[r.jsxs(w,{children:[r.jsx(h,{children:"Fade-out close"}),r.jsx(D,{children:"`isModal` swaps the slide-out animation for a fade."})]}),r.jsx(u,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Close"})})})]})]})},L=["BottomSheet","ModalStyle"];var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
