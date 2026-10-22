import{j as n,r as u}from"./iframe-D20LpuAU.js";import{B as w}from"./index-Bc2r6MAQ.js";import{D as i,a as M,b as h,c as s,d as t,e,f as C,g,h as I,i as R,j as v,k as f,l as d}from"./index-BqQjfdg4.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";import"./index-Du4-0e45.js";import"./index-CpxkvYzD.js";import"./index-B1hSgRyS.js";import"./Combination-Dk4vqPKc.js";import"./index-CWMR5PwX.js";import"./overlay-z-index-BJUQghj5.js";const tn={title:"Components/Overlay/DropdownMenu",component:i,parameters:{layout:"centered",docs:{description:{component:"Dropdown menu with items, checkbox/radio groups, shortcuts, labels and sub-menus."}}},tags:["autodocs"]},o={render:()=>n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open menu"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Widget actions"}),n.jsx(t,{}),n.jsxs(e,{children:["Edit",n.jsx(C,{children:"⌘E"})]}),n.jsx(e,{children:"Duplicate"}),n.jsxs(g,{children:[n.jsx(I,{children:"Size"}),n.jsxs(R,{children:[n.jsx(e,{children:"Cluster"}),n.jsx(e,{children:"Rail"}),n.jsx(e,{children:"Hero"})]})]}),n.jsx(t,{}),n.jsx(e,{className:"text-destructive",children:"Delete"})]})]})},r={render:function(){const[x,j]=u.useState(!0),[S,b]=u.useState("comfortable");return n.jsxs(i,{children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"View options"})}),n.jsxs(h,{children:[n.jsx(s,{children:"Display"}),n.jsx(t,{}),n.jsx(v,{checked:x,onCheckedChange:j,children:"Show grid lines"}),n.jsx(t,{}),n.jsx(s,{children:"Density"}),n.jsxs(f,{value:S,onValueChange:b,children:[n.jsx(d,{value:"compact",children:"Compact"}),n.jsx(d,{value:"comfortable",children:"Comfortable"}),n.jsx(d,{value:"spacious",children:"Spacious"})]})]})]})}},dn=["Basic","CheckboxesAndRadio"];var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
