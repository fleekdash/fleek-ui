import{j as n,r as u}from"./iframe-AoE8j4ij.js";import{B as w}from"./index-BBiTMy7-.js";import{D as i,a as M,b as h,c as s,d as t,e,f as C,g,h as I,i as R,j as v,k as f,l as d}from"./index-BQuhKKn_.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-CWwN--yb.js";import"./button-text-DaZ12UVP.js";import"./index-D0Ytr1w-.js";import"./index-CyY0JB9U.js";import"./menu-trigger-chevron-DNXigjts.js";import"./index-C3ln6uYD.js";import"./index-Dnjqcorn.js";import"./index-BPufsg8P.js";import"./index-D64T_Elo.js";import"./index-fqVMh7ov.js";import"./index-0wqsOdXR.js";import"./index-2t5kVuOk.js";import"./index-CoOhShBD.js";import"./index-ClnyGmSk.js";import"./index-BECtpOBS.js";import"./index-e2Y0WjtR.js";import"./index-DUlY3mAG.js";import"./index-CJar-LNY.js";import"./index-BXu8nf8_.js";import"./index-BqGjHXfz.js";import"./index-CuiMF-IJ.js";import"./index-ZDOu8O0q.js";import"./Combination-D7RAEOgv.js";import"./index-C3rcF5-5.js";import"./overlay-z-index-BJUQghj5.js";const tn={title:"Components/Overlay/DropdownMenu",component:i,parameters:{layout:"centered",docs:{description:{component:"Dropdown menu with items, checkbox/radio groups, shortcuts, labels and sub-menus."}}},tags:["autodocs"]},o={render:()=>n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open menu"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Widget actions"}),n.jsx(t,{}),n.jsxs(e,{children:["Edit",n.jsx(C,{children:"⌘E"})]}),n.jsx(e,{children:"Duplicate"}),n.jsxs(g,{children:[n.jsx(I,{children:"Size"}),n.jsxs(R,{children:[n.jsx(e,{children:"Cluster"}),n.jsx(e,{children:"Rail"}),n.jsx(e,{children:"Hero"})]})]}),n.jsx(t,{}),n.jsx(e,{className:"text-destructive",children:"Delete"})]})]})},r={render:function(){const[x,j]=u.useState(!0),[S,b]=u.useState("comfortable");return n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"View options"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Display"}),n.jsx(t,{}),n.jsx(v,{checked:x,onCheckedChange:j,children:"Show grid lines"}),n.jsx(t,{}),n.jsx(s,{children:"Density"}),n.jsxs(f,{value:S,onValueChange:b,children:[n.jsx(d,{value:"compact",children:"Compact"}),n.jsx(d,{value:"comfortable",children:"Comfortable"}),n.jsx(d,{value:"spacious",children:"Spacious"})]})]})]})}},dn=["Basic","CheckboxesAndRadio"];var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
