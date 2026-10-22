import{j as s,a as v}from"./iframe-T4wYwA8j.js";import{I as N}from"./menu-trigger-chevron-DWrnO5CH.js";import{c as z}from"./instant-translate-BmoNkbk6.js";import"./preload-helper-Dp1pzeXC.js";const C={cmd:"kbd",ctrl:"kbd",shift:"kbdShift",enter:"kbdEnter",space:"kbdSpace"},w={esc:"Esc"};function P(e,a){const t=C[e];if(t)return s.jsx(N,{name:t,className:a});const n=w[e];return n?s.jsx("span",{className:"font-semibold",children:n}):s.jsx("span",{className:"font-semibold uppercase",children:e})}const R={sm:"text-[9px] h-2 w-2",md:"text-[10px] h-2.5 w-2.5",lg:"text-[11px] h-3 w-3"},r=({keys:e,className:a,size:t="md"})=>{const n=R[t];return s.jsx("kbd",{className:z("bg-foreground/10 border-border text-muted-foreground ms-auto flex items-center gap-1 rounded-sm border font-mono leading-4 shadow-none outline-0",t==="sm"&&"px-1 text-[9px]",t==="md"&&"px-1.5 text-[10.5px]",t==="lg"&&"px-2 text-[11px]",a),children:e.map((i,S)=>s.jsxs(v.Fragment,{children:[P(i,n),S<e.length-1&&s.jsx("span",{"aria-hidden":"true",className:"text-muted-foreground/60",children:"+"})]},i))})};r.__docgenInfo={description:`Reusable keyboard shortcut indicator component

@example
// Basic usage
<Kbd keys={["ctrl", "shift", "f"]} />

@example
// Custom keys
<Kbd keys={["cmd", "k"]} />

@example
// Mixed icons and text
<Kbd keys={["alt", "t"]} />

@example
// Custom text keys
<Kbd keys={["ctrl", "shift", "p"]} />`,methods:[],displayName:"Kbd",props:{keys:{required:!0,tsType:{name:"ReadonlyArray",elements:[{name:"string"}],raw:"ReadonlyArray<string>"},description:'Keys to display — use {@link PredefinedKbdKey} or any custom label (e.g. `"k"`, `"f"`).'},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size variant",defaultValue:{value:'"md"',computed:!1}}}};const L={title:"Components/Data Display/Kbd",component:r,parameters:{layout:"centered",docs:{description:{component:"Keyboard shortcut hint. Predefined keys (cmd, ctrl, shift, alt, enter, space, esc) render icons/labels; any other string renders uppercase text."}}},tags:["autodocs"],argTypes:{keys:{control:"object"},size:{control:"select",options:["sm","md","lg"]}},args:{keys:["cmd","k"],size:"md"}},o={},d={name:"Predefined keys",render:e=>s.jsxs("div",{className:"flex flex-col items-start gap-2",children:[s.jsx(r,{...e,keys:["cmd","shift","f"]}),s.jsx(r,{...e,keys:["ctrl","k"]}),s.jsx(r,{...e,keys:["alt","enter"]}),s.jsx(r,{...e,keys:["esc"]}),s.jsx(r,{...e,keys:["space"]})]})},c={render:e=>s.jsx("div",{className:"flex items-center gap-3",children:["sm","md","lg"].map(a=>s.jsx(r,{...e,size:a,keys:["cmd","k"]},a))})},m={args:{keys:["tab","then","?"]}},_=["Default","PredefinedKeys","Sizes","CustomLabels"];var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,y,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Predefined keys",
  render: args => <div className="flex flex-col items-start gap-2">\r
      <Kbd {...args} keys={["cmd", "shift", "f"]} />\r
      <Kbd {...args} keys={["ctrl", "k"]} />\r
      <Kbd {...args} keys={["alt", "enter"]} />\r
      <Kbd {...args} keys={["esc"]} />\r
      <Kbd {...args} keys={["space"]} />\r
    </div>
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,b,g;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-3">\r
      {(["sm", "md", "lg"] as const).map(size => <Kbd key={size} {...args} size={size} keys={["cmd", "k"]} />)}\r
    </div>
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,K,j;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    keys: ["tab", "then", "?"]
  }
}`,...(j=(K=m.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};export{m as CustomLabels,o as Default,d as PredefinedKeys,c as Sizes,_ as __namedExportsOrder,L as default};
