import{j as e}from"./iframe-D20LpuAU.js";import{c as g}from"./instant-translate-pJhJtWwT.js";import{g as O}from"./button-text-Bnz5kdnX.js";import"./preload-helper-Dp1pzeXC.js";const U={sm:"h-4 w-4 border-2",md:"h-6 w-6 border-2",lg:"h-8 w-8 border-[3px]",xl:"h-12 w-12 border-[3px]"};function r({size:x="md",className:n,label:s=O()}){const a=s;return e.jsx("output",{className:g("block animate-spin rounded-full not-italic","border-muted","border-t-(--primary)",U[x],n),"aria-live":"polite","aria-label":a,children:e.jsx("span",{className:"sr-only",children:a})})}r.Centered=function({size:n="lg",text:s,className:a}){return e.jsxs("div",{className:g("flex flex-col items-center justify-center","h-full min-h-screen",a),children:[e.jsx(r,{size:n,label:s??O()}),s&&e.jsx("p",{className:"text-muted-foreground mt-4 text-sm",children:s})]})};r.Inline=function({className:n}){return e.jsx(r,{size:"sm",className:g("inline-block",n)})};r.__docgenInfo={description:`Spinner component with theme colors

Uses muted border with primary accent for professional look.

@example
<Spinner size="md" />
<Spinner size="lg" label="Loading posts..." />`,methods:[{name:"Centered",docblock:`Centered spinner with optional text

@example
<Spinner.Centered text="Loading integration..." />`,modifiers:["static"],params:[{name:`{
  size = "lg",
  text,
  className,
}: SpinnerCenteredProps`,optional:!1,type:{name:"SpinnerCenteredProps",alias:"SpinnerCenteredProps"}}],returns:null,description:"Centered spinner with optional text"},{name:"Inline",docblock:`Inline spinner for buttons and inline elements

@example
<Button disabled><Spinner.Inline /> Loading...</Button>`,modifiers:["static"],params:[{name:`{
  className,
}: Readonly<{ className?: string }>`,optional:!1,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"Readonly<{ className?: string }>",alias:"Readonly"}}],returns:null,description:"Inline spinner for buttons and inline elements"}],displayName:"Spinner",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1},label:{defaultValue:{value:"getButtonDefaultLoadingText()",computed:!0},required:!1}}};const Q={title:"Components/Feedback/Spinner",component:r,parameters:{layout:"centered",docs:{description:{component:"Traditional loading spinner with muted theme colors. Matches FleekDash design aesthetic."}}},tags:["autodocs"]},t={args:{size:"sm"}},i={args:{size:"md"}},o={args:{size:"lg"}},d={args:{size:"xl"}},l={render:()=>e.jsx("div",{className:"border-border h-64 w-full rounded-lg border",children:e.jsx(r.Centered,{text:"Loading data..."})})},m={render:()=>e.jsx("div",{className:"border-border h-64 w-full rounded-lg border",children:e.jsx(r.Centered,{})})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Inline,{}),e.jsx("span",{children:"Loading..."})]})},p={render:()=>e.jsxs("button",{disabled:!0,className:"bg-primary text-primary-foreground flex items-center gap-2 rounded-md px-4 py-2",children:[e.jsx(r.Inline,{}),"Loading..."]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm"}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"Small (16px)"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"md"}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"Medium (32px)"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"lg"}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"Large (48px)"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"xl"}),e.jsx("span",{className:"text-muted-foreground text-sm",children:"Extra Large (64px)"})]})]})},X=["Small","Medium","Large","ExtraLarge","Centered","CenteredWithoutText","Inline","InButton","AllSizes"];var f,h,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,S,j;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,z,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(y=(z=o.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var L,C,w;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "xl"
  }
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,k,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="border-border h-64 w-full rounded-lg border">\r
      <Spinner.Centered text="Loading data..." />\r
    </div>
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var E,M,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="border-border h-64 w-full rounded-lg border">\r
      <Spinner.Centered />\r
    </div>
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var T,_,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">\r
      <Spinner.Inline />\r
      <span>Loading...</span>\r
    </div>
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,P,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <button disabled className="bg-primary text-primary-foreground flex items-center gap-2 rounded-md px-4 py-2">\r
      <Spinner.Inline />\r
      Loading...\r
    </button>
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,V,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">\r
      <div className="flex items-center gap-4">\r
        <Spinner size="sm" />\r
        <span className="text-muted-foreground text-sm">Small (16px)</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Spinner size="md" />\r
        <span className="text-muted-foreground text-sm">Medium (32px)</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Spinner size="lg" />\r
        <span className="text-muted-foreground text-sm">Large (48px)</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Spinner size="xl" />\r
        <span className="text-muted-foreground text-sm">\r
          Extra Large (64px)\r
        </span>\r
      </div>\r
    </div>
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};export{u as AllSizes,l as Centered,m as CenteredWithoutText,d as ExtraLarge,p as InButton,c as Inline,o as Large,i as Medium,t as Small,X as __namedExportsOrder,Q as default};
