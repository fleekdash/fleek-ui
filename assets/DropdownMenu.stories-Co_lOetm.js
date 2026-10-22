import{j as n,r as u}from"./iframe-T4wYwA8j.js";import{B as w}from"./index-HZf78xiD.js";import{D as i,a as M,b as h,c as s,d as t,e,f as C,g,h as I,i as R,j as v,k as f,l as d}from"./index-BJJ-va8_.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-BmoNkbk6.js";import"./button-text-Cb5H-Sx-.js";import"./index-CnMh2ajg.js";import"./index-C3LWm9v9.js";import"./menu-trigger-chevron-DWrnO5CH.js";import"./index-Dj8qcVdI.js";import"./index-DxMdwhIO.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-D-QkTY3a.js";import"./index-BDqiunJ7.js";import"./index-UPRAAfe0.js";import"./index-CJI3Y6Cm.js";import"./index-CJ3T31u1.js";import"./index-AC-EWCAL.js";import"./index-BrhX1qx-.js";import"./index-DpjuSjS8.js";import"./index-D2IX1F60.js";import"./index-BVzRL7o2.js";import"./index-DAzU-WkU.js";import"./index-CPaP38EK.js";import"./index-vu9-QLnI.js";import"./Combination-Dc_x3bih.js";import"./index-CoibKBqH.js";import"./overlay-z-index-BJUQghj5.js";const tn={title:"Components/Overlay/DropdownMenu",component:i,parameters:{layout:"centered",docs:{description:{component:"Dropdown menu with items, checkbox/radio groups, shortcuts, labels and sub-menus."}}},tags:["autodocs"]},o={render:()=>n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open menu"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Widget actions"}),n.jsx(t,{}),n.jsxs(e,{children:["Edit",n.jsx(C,{children:"⌘E"})]}),n.jsx(e,{children:"Duplicate"}),n.jsxs(g,{children:[n.jsx(I,{children:"Size"}),n.jsxs(R,{children:[n.jsx(e,{children:"Cluster"}),n.jsx(e,{children:"Rail"}),n.jsx(e,{children:"Hero"})]})]}),n.jsx(t,{}),n.jsx(e,{className:"text-destructive",children:"Delete"})]})]})},r={render:function(){const[x,j]=u.useState(!0),[S,b]=u.useState("comfortable");return n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"View options"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Display"}),n.jsx(t,{}),n.jsx(v,{checked:x,onCheckedChange:j,children:"Show grid lines"}),n.jsx(t,{}),n.jsx(s,{children:"Density"}),n.jsxs(f,{value:S,onValueChange:b,children:[n.jsx(d,{value:"compact",children:"Compact"}),n.jsx(d,{value:"comfortable",children:"Comfortable"}),n.jsx(d,{value:"spacious",children:"Spacious"})]})]})]})}},dn=["Basic","CheckboxesAndRadio"];var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
