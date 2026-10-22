import{j as e}from"./iframe-AoE8j4ij.js";import{H as i,a as t}from"./index-BE4JyOFG.js";import{I as c}from"./menu-trigger-chevron-DNXigjts.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-CWwN--yb.js";const O={title:"Components/Data Display/HexagonBadge",component:i,parameters:{layout:"centered",docs:{description:{component:"Hexagonal shell used for feature/membership badges — outline and inner icon inherit one `shellColor`. Content goes in the `badge` slot."}}},tags:["autodocs"],argTypes:{size:{control:"text"},shellColor:{control:"color"},fill:{control:"text"},stroke:{control:"text"}},args:{size:"size-11"}},s={args:{badge:e.jsx(c,{name:"rocket",className:t})}},r={render:l=>e.jsx("div",{className:"flex items-center gap-4",children:["#2563eb","#16a34a","#dc2626","#9333ea","#ea580c"].map(a=>e.jsx(i,{...l,shellColor:a,badge:e.jsx(c,{name:"verified",className:t})},a))})},o={render:l=>e.jsx("div",{className:"flex items-end gap-4",children:["size-7","size-11","size-16"].map(a=>e.jsx(i,{...l,size:a,badge:e.jsx(c,{name:"rocket",className:t})},a))})},n={args:{fill:"fill-primary/10",badge:e.jsx(c,{name:"bolt",className:t})}},h=["Default","Colors","Sizes","Filled"];var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    badge: <Icon name="rocket" className={HEXAGON_BADGE_ICON_SIZE_CLASS} />
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,x,N;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">\r
      {["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#ea580c"].map(color => <HexagonBadge key={color} {...args} shellColor={color} badge={<Icon name="verified" className={HEXAGON_BADGE_ICON_SIZE_CLASS} />} />)}\r
    </div>
}`,...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var _,u,S;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div className="flex items-end gap-4">\r
      {["size-7", "size-11", "size-16"].map(size => <HexagonBadge key={size} {...args} size={size} badge={<Icon name="rocket" className={HEXAGON_BADGE_ICON_SIZE_CLASS} />} />)}\r
    </div>
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var f,C,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fill: "fill-primary/10",
    badge: <Icon name="bolt" className={HEXAGON_BADGE_ICON_SIZE_CLASS} />
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};export{r as Colors,s as Default,n as Filled,o as Sizes,h as __namedExportsOrder,O as default};
