import{r as C,j as e}from"./iframe-B4ogevxn.js";import{I as E}from"./menu-trigger-chevron-Q4kmR1jM.js";import{P as O,c as V}from"./index-Y7k0CB23.js";import{u as F}from"./index-BFRsHRLp.js";import{c as B}from"./index-BFlTwmna.js";import{c as D}from"./instant-translate-pibj5xTz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-yfKPQT7J.js";import"./index-D75eZwGm.js";var I="Toggle",_=C.forwardRef((r,t)=>{const{pressed:a,defaultPressed:c,onPressedChange:k,...w}=r,[g,R]=F({prop:a,onChange:k,defaultProp:c??!1,caller:I});return e.jsx(O.button,{type:"button","aria-pressed":g,"data-state":g?"on":"off","data-disabled":r.disabled?"":void 0,...w,ref:t,onClick:V(r.onClick,()=>{r.disabled||R(!g)})})});_.displayName=I;var A=_;const H=B("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-hidden aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}});function s({className:r,variant:t,size:a,...c}){return e.jsx(A,{"data-slot":"toggle","data-field-focus":"",className:D(H({variant:t,size:a,className:r})),...c})}s.__docgenInfo={description:"",methods:[],displayName:"Toggle"};const Y={title:"Components/Inputs/Toggle",component:s,parameters:{layout:"centered",docs:{description:{component:"Radix toggle button — pressed state flips to the primary surface. Variants `default`/`outline`, sizes `sm`/`default`/`lg`."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["sm","default","lg"]},pressed:{control:"boolean"},disabled:{control:"boolean"}},args:{children:"Toggle me"}},n={},o={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{variant:"default",defaultPressed:!0,children:"Default on"}),e.jsx(s,{variant:"outline",defaultPressed:!0,children:"Outline on"}),e.jsx(s,{variant:"outline",children:"Outline off"})]})},i={render:()=>e.jsx("div",{className:"flex items-center gap-3",children:["sm","default","lg"].map(r=>e.jsx(s,{size:r,variant:"outline",children:r},r))})},l={render:()=>e.jsx(s,{variant:"outline","aria-label":"Toggle notifications",children:e.jsx(E,{name:"notification"})})},d={render:function(){const[t,a]=C.useState(!0);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{variant:"outline",pressed:t,onPressedChange:a,children:t?"Following":"Follow"}),e.jsxs("span",{className:"text-muted-foreground text-xs",children:["pressed: ",String(t)]})]})}},Z=["Basic","Variants","Sizes","IconToggle","Controlled"];var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Toggle variant="default" defaultPressed>\r
        Default on\r
      </Toggle>\r
      <Toggle variant="outline" defaultPressed>\r
        Outline on\r
      </Toggle>\r
      <Toggle variant="outline">Outline off</Toggle>\r
    </div>
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,h,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      {(["sm", "default", "lg"] as const).map(size => <Toggle key={size} size={size} variant="outline">\r
          {size}\r
        </Toggle>)}\r
    </div>
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var P,j,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Toggle variant="outline" aria-label="Toggle notifications">\r
      <Icon name="notification" />\r
    </Toggle>
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,y,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState(true);
    return <div className="flex items-center gap-3">\r
        <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>\r
          {pressed ? "Following" : "Follow"}\r
        </Toggle>\r
        <span className="text-muted-foreground text-xs">\r
          pressed: {String(pressed)}\r
        </span>\r
      </div>;
  }
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};export{n as Basic,d as Controlled,l as IconToggle,i as Sizes,o as Variants,Z as __namedExportsOrder,Y as default};
