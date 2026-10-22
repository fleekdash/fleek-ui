import{j as e,r as k}from"./iframe-B4ogevxn.js";import{I as R}from"./menu-trigger-chevron-Q4kmR1jM.js";import{c as x}from"./instant-translate-pibj5xTz.js";import"./preload-helper-Dp1pzeXC.js";const M={xs:"size-6 text-[9px]",sm:"size-7 text-[10px]"},q={xs:"size-3",sm:"size-3.5"},G="relative shrink-0 overflow-hidden rounded-md border border-border bg-background",D="border border-border bg-background text-foreground flex shrink-0 items-center justify-center rounded-md font-semibold tabular-nums",A=k.forwardRef(function({item:s,size:n,className:f},l){var a;const[g,h]=k.useState(!1),r=((a=s.src)==null?void 0:a.trim())||void 0,t=!!r&&!g,v=k.useCallback(()=>{h(!0)},[]);return e.jsx("div",{ref:l,className:x(G,"hover:border-foreground/25 transition-shadow hover:z-10",M[n],f),title:s.alt,children:t?e.jsx("img",{src:r,alt:s.alt||"",className:"size-full object-cover",loading:"lazy",onError:v}):e.jsx("div",{className:"bg-muted text-muted-foreground flex size-full items-center justify-center",children:e.jsx(R,{name:"product",className:q[n],"aria-hidden":"true"})})})});A.displayName="StackedThumbnail";function F({items:b,maxVisible:s=4,totalCount:n,showOverflowCount:f=!0,size:l="sm",layout:g="stacked",className:h,renderItemWrapper:r}){const t=b.slice(0,s),v=n??b.length,a=Math.max(0,v-t.length),o=g==="stacked";return e.jsxs("div",{className:x("flex items-center",o?void 0:"gap-1",h),children:[t.map((c,i)=>{const B=c.key||c.alt||`thumbnail-${i}`,y=e.jsx(A,{item:c,size:l,className:o&&i>0?"-ms-1.5":void 0}),L=r?r(c,i,y):y;return e.jsx("div",{className:"relative shrink-0",style:o?{zIndex:t.length-i}:void 0,children:L},B)}),a>0&&f?e.jsxs("div",{className:x(D,M[l],o&&t.length>0&&"-ms-1.5"),style:o?{zIndex:0}:void 0,title:`+${a}`,"aria-label":`+${a}`,children:["+",a]}):null]})}F.__docgenInfo={description:"",methods:[],displayName:"StackedThumbnailGroup",props:{maxVisible:{defaultValue:{value:"4",computed:!1},required:!1},showOverflowCount:{defaultValue:{value:"true",computed:!1},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},required:!1},layout:{defaultValue:{value:'"stacked"',computed:!1},required:!1}}};const H=[{key:"1",src:"https://i.pravatar.cc/40?img=1",alt:"Member 1"},{key:"2",src:"https://i.pravatar.cc/40?img=2",alt:"Member 2"},{key:"3",src:"https://i.pravatar.cc/40?img=3",alt:"Member 3"},{key:"4",src:"https://i.pravatar.cc/40?img=4",alt:"Member 4"},{key:"5",src:"https://i.pravatar.cc/40?img=5",alt:"Member 5"}],Z={title:"Components/Data Display/StackedThumbnailGroup",component:F,parameters:{layout:"centered",docs:{description:{component:"Overlapping (`stacked`) or side-by-side (`inline`) thumbnail group with `maxVisible` overflow count and `totalCount` override."}}},tags:["autodocs"],argTypes:{layout:{control:"select",options:["stacked","inline"]},size:{control:"select",options:["xs","sm"]},maxVisible:{control:{type:"number",min:1,max:8}},showOverflowCount:{control:"boolean"}},args:{items:H,maxVisible:3,totalCount:12}},m={},d={args:{layout:"inline",maxVisible:4}},u={args:{showOverflowCount:!1}},p={args:{items:[{key:"a",alt:"Fallback A"},{key:"b",alt:"Fallback B"}],maxVisible:2,totalCount:2}},J=["Stacked","Inline","WithoutOverflowCount","NoImages"];var S,C,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(w=(C=m.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,V,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    layout: "inline",
    maxVisible: 4
  }
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var E,N,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    showOverflowCount: false
  }
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,z,T;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      key: "a",
      alt: "Fallback A"
    }, {
      key: "b",
      alt: "Fallback B"
    }],
    maxVisible: 2,
    totalCount: 2
  }
}`,...(T=(z=p.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};export{d as Inline,p as NoImages,m as Stacked,u as WithoutOverflowCount,J as __namedExportsOrder,Z as default};
