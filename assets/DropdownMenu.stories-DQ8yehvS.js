import{j as n,r as u}from"./iframe-B4ogevxn.js";import{B as w}from"./index-IiT93W48.js";import{D as i,a as M,b as h,c as s,d as t,e,f as C,g,h as I,i as R,j as v,k as f,l as d}from"./index-CAtHDR74.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pibj5xTz.js";import"./button-text-DNz-Xq84.js";import"./index-q2t2gBUy.js";import"./index-yfKPQT7J.js";import"./menu-trigger-chevron-Q4kmR1jM.js";import"./index-CPN_ecL-.js";import"./index-Y7k0CB23.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-YtbWFEiY.js";import"./index-vfXVsf48.js";import"./index-CdEyXhUw.js";import"./index-D75eZwGm.js";import"./index-CnPndVxn.js";import"./index-C_H-g0R6.js";import"./index-Bg0-gfri.js";import"./index-rTX2682U.js";import"./index-BFRsHRLp.js";import"./index-CPguq436.js";import"./index-DjzoAP2N.js";import"./index-D5Q9ZEEo.js";import"./index-C_UVrVa-.js";import"./Combination-DPAIdUIc.js";import"./index-Cimk8u82.js";import"./overlay-z-index-BJUQghj5.js";const tn={title:"Components/Overlay/DropdownMenu",component:i,parameters:{layout:"centered",docs:{description:{component:"Dropdown menu with items, checkbox/radio groups, shortcuts, labels and sub-menus."}}},tags:["autodocs"]},o={render:()=>n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open menu"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Widget actions"}),n.jsx(t,{}),n.jsxs(e,{children:["Edit",n.jsx(C,{children:"⌘E"})]}),n.jsx(e,{children:"Duplicate"}),n.jsxs(g,{children:[n.jsx(I,{children:"Size"}),n.jsxs(R,{children:[n.jsx(e,{children:"Cluster"}),n.jsx(e,{children:"Rail"}),n.jsx(e,{children:"Hero"})]})]}),n.jsx(t,{}),n.jsx(e,{className:"text-destructive",children:"Delete"})]})]})},r={render:function(){const[x,j]=u.useState(!0),[S,b]=u.useState("comfortable");return n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"View options"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Display"}),n.jsx(t,{}),n.jsx(v,{checked:x,onCheckedChange:j,children:"Show grid lines"}),n.jsx(t,{}),n.jsx(s,{children:"Density"}),n.jsxs(f,{value:S,onValueChange:b,children:[n.jsx(d,{value:"compact",children:"Compact"}),n.jsx(d,{value:"comfortable",children:"Comfortable"}),n.jsx(d,{value:"spacious",children:"Spacious"})]})]})]})}},dn=["Basic","CheckboxesAndRadio"];var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
      <DropdownMenuTrigger asChild>\r
        <Button variant="outline">Open menu</Button>\r
      </DropdownMenuTrigger>\r
      <DropdownMenuContent>\r
        <DropdownMenuLabel>Widget actions</DropdownMenuLabel>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem>\r
          Edit\r
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>Duplicate</DropdownMenuItem>\r
        <DropdownMenuSub>\r
          <DropdownMenuSubTrigger>Size</DropdownMenuSubTrigger>\r
          <DropdownMenuSubContent>\r
            <DropdownMenuItem>Cluster</DropdownMenuItem>\r
            <DropdownMenuItem>Rail</DropdownMenuItem>\r
            <DropdownMenuItem>Hero</DropdownMenuItem>\r
          </DropdownMenuSubContent>\r
        </DropdownMenuSub>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>\r
      </DropdownMenuContent>\r
    </DropdownMenu>
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,l,D;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [showGrid, setShowGrid] = useState(true);
    const [density, setDensity] = useState("comfortable");
    return <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button variant="outline">View options</Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent>\r
          <DropdownMenuLabel>Display</DropdownMenuLabel>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>\r
            Show grid lines\r
          </DropdownMenuCheckboxItem>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuLabel>Density</DropdownMenuLabel>\r
          <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>\r
            <DropdownMenuRadioItem value="compact">\r
              Compact\r
            </DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="comfortable">\r
              Comfortable\r
            </DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="spacious">\r
              Spacious\r
            </DropdownMenuRadioItem>\r
          </DropdownMenuRadioGroup>\r
        </DropdownMenuContent>\r
      </DropdownMenu>;
  }
}`,...(D=(l=r.parameters)==null?void 0:l.docs)==null?void 0:D.source}}};export{o as Basic,r as CheckboxesAndRadio,dn as __namedExportsOrder,tn as default};
