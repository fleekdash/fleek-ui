import{j as e,r as de}from"./iframe-B4ogevxn.js";import{I as l}from"./menu-trigger-chevron-Q4kmR1jM.js";import{c as i}from"./instant-translate-pibj5xTz.js";import{a as ge,d as me}from"./field-focus-APfXAL04.js";import"./switch-BMmrq0cF.js";import{O as ue}from"./optimistic-switch-DWEd-c2b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Y7k0CB23.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-yfKPQT7J.js";import"./index-YtbWFEiY.js";import"./index-BFRsHRLp.js";import"./index-D75eZwGm.js";import"./index-CgyhEXZ3.js";import"./index-Bg0-gfri.js";import"./index-CPguq436.js";const pe="text-foreground text-base font-medium",Se="group relative flex flex-col rounded-lg border p-4 transition-colors transition-opacity",be="opacity-70",Ce="flex w-full items-center gap-4",Te="ms-4 flex shrink-0 items-center gap-1",fe="absolute top-1/2 end-full z-20 me-1 flex -translate-y-1/2 items-center gap-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100",he="group-hover:[mask-image:linear-gradient(to_inline-end,black_0%,black_50%,transparent_100%)] group-hover:[-webkit-mask-image:linear-gradient(to_inline-end,black_0%,black_50%,transparent_100%)]",_e="mt-3 rounded-md border border-border/60 bg-muted/20 px-4 py-3",xe="bg-primary/3 border-border",Ae="border-border bg-background hover:bg-muted/30",H="flex min-w-0 flex-1 items-center gap-3 p-0 text-start font-inherit text-inherit transition-colors",Ee=`${H} cursor-pointer rounded-md border-0 bg-transparent focus-visible:ring-primary/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-75`,Ne=H,ve="flex h-10 w-10 items-center justify-center rounded-lg",Ie="border-border border",Le="truncate text-sm font-medium capitalize",we="text-muted-foreground line-clamp-1 text-xs";function ye(t){return t?xe:Ae}function Re(t){const{enabled:n,disabled:s=!1,inactive:a=!1,selected:r=!1,className:o}=t;return i(Se,ye(n),!n&&be,r&&me,r&&ge,s&&"pointer-events-none",a&&"cursor-not-allowed",o)}function Fe(t){return i(ve,t&&Ie)}function je(t,n=!1){return i("min-w-0 flex-1",t&&"opacity-75",n&&he)}function De(t){return i(Le,t)}function Oe(t){return i("transition-opacity duration-200",t&&"opacity-50")}function ke(t=!1){return i(pe,t&&"capitalize")}function Ge(t){return{backgroundColor:`${t}15`}}const C=["#2563EB","#7C3AED","#DB2777","#DC2626","#059669","#D97706","#0891B2","#4F46E5","#BE185D","#0D9488"];function Ue(t){let n=0;for(const a of t)n+=a.codePointAt(0)??0;const s=n%C.length;return C[s]??C[0]}function Be(t){return{color:t}}function z({title:t,badge:n,capitalize:s=!1,className:a}){return e.jsxs("div",{className:i("flex items-center justify-between gap-2",a),children:[e.jsx("h4",{className:ke(s),children:t}),n]})}z.__docgenInfo={description:"",methods:[],displayName:"SettingsCategoryHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},badge:{required:!1,tsType:{name:"ReactNode"},description:""},capitalize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function He({iconTintColor:t,iconColorSeed:n,title:s,toggleAriaLabel:a}){const o=t===void 0?Ue(n??(typeof s=="string"?s:a)):t||null;if(o!==null)return{...Ge(o),...Be(o)}}function T(t){const{enabled:n,disabled:s=!1,switchDisabled:a=!1,switchHidden:r=!1,inactive:o=!1,toggleAriaLabel:p,switchAriaLabel:P,pressed:V,selected:f=!1,bodyDisabled:W=!1,onToggle:q,onCheckedChange:M,icon:Y,iconTintColor:$,iconColorSeed:X,title:h,badges:_,description:x,titleClassName:K,className:J,settingsContent:A,auxiliaryContent:E,trailingContent:Q,hoverRevealActions:N}=t,Z=o||!n,ee=n&&A!==void 0,S=N!==void 0,te=Re({enabled:n,disabled:s,inactive:o,selected:f,className:J}),ne=Fe(Z),se=je(o,S),ae=De(K),v=s||a,oe=Oe(v),ie=V??n,re=P??p,le=He({iconTintColor:$,iconColorSeed:X,title:h,toggleAriaLabel:p}),ce=W,I=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"shrink-0",children:e.jsx("div",{className:ne,style:le,children:Y})}),e.jsxs("div",{className:se,children:[e.jsxs("div",{className:"mb-1 flex items-center gap-2",children:[e.jsx("h5",{className:ae,children:h}),_?e.jsx("div",{className:"flex shrink-0 items-center gap-2",children:_}):null]}),x?e.jsx("p",{className:we,children:x}):null]})]});return e.jsxs("div",{className:te,...f?{"data-field-focus":""}:{},children:[e.jsxs("div",{className:Ce,children:[ce?e.jsx("div",{className:Ne,children:I}):e.jsx("button",{type:"button",disabled:s,"aria-pressed":ie,"data-field-focus":!0,"aria-label":p,onClick:q,className:Ee,children:I}),e.jsxs("div",{className:i(Te,S&&"relative"),onPointerDown:b=>{b.stopPropagation()},children:[S?e.jsx("div",{className:fe,children:N}):null,Q,r?null:e.jsx(ue,{checked:n,onCheckedChange:M,disabled:v,"aria-label":re,className:oe})]})]}),ee?e.jsx("div",{className:_e,children:A}):null,E?e.jsx("div",{className:"mt-2",onPointerDown:b=>{b.stopPropagation()},children:E}):null]})}T.__docgenInfo={description:"",methods:[],displayName:"SettingsFeatureToggleCard"};const at={title:"Components/Settings/SettingsFeatureToggleCard",component:T,parameters:{layout:"centered",docs:{description:{component:"Settings row card: tinted icon thumb (auto color from `iconColorSeed`), title/description, switch, and slots for `settingsContent`, `auxiliaryContent` and `trailingContent`. `SettingsCategoryHeader` groups sections."}}},tags:["autodocs"],argTypes:{enabled:{control:"boolean"},disabled:{control:"boolean"},switchHidden:{control:"boolean"}}};function c(t){const[n,s]=de.useState(t.enabled??!1);return e.jsx("div",{className:"w-[420px]",children:e.jsx(T,{...t,enabled:n,onToggle:()=>s(a=>!a),onCheckedChange:s})})}const d={args:{enabled:!1,toggleAriaLabel:"Toggle",icon:null,title:"",onToggle:()=>{},onCheckedChange:()=>{}},render:()=>e.jsx(c,{enabled:!0,toggleAriaLabel:"Toggle revenue widget",icon:e.jsx(l,{name:"stat",className:"size-4"}),iconColorSeed:"revenue",title:"Revenue chart",description:"Shows sales revenue over the selected period."})},g={args:{enabled:!1,toggleAriaLabel:"Toggle",icon:null,title:"",onToggle:()=>{},onCheckedChange:()=>{}},render:()=>e.jsxs("div",{className:"flex w-[420px] flex-col gap-3",children:[e.jsx(z,{title:"Widgets"}),[{seed:"chart",title:"Chart widget",icon:"stat"},{seed:"map",title:"Map widget",icon:"globe"},{seed:"table",title:"Table widget",icon:"home"}].map((t,n)=>e.jsx(c,{enabled:n!==2,toggleAriaLabel:`Toggle ${t.title}`,icon:e.jsx(l,{name:t.icon,className:"size-4"}),iconColorSeed:t.seed,title:t.title,description:"Tint derived from the seed — stable across locales."},t.seed))]})},m={args:{enabled:!1,toggleAriaLabel:"Toggle",icon:null,title:"",onToggle:()=>{},onCheckedChange:()=>{}},render:()=>e.jsx(c,{enabled:!0,toggleAriaLabel:"Toggle notifications",icon:e.jsx(l,{name:"notification",className:"size-4"}),iconTintColor:"#f59e0b",title:"Notifications",description:"Email me when a connector sync fails.",settingsContent:e.jsx("p",{className:"text-muted-foreground text-xs",children:"Expanded settings render inside the card when enabled."})})},u={args:{enabled:!1,toggleAriaLabel:"Toggle",icon:null,title:"",onToggle:()=>{},onCheckedChange:()=>{}},render:()=>e.jsxs("div",{className:"flex w-[420px] flex-col gap-3",children:[e.jsx(c,{enabled:!1,disabled:!0,toggleAriaLabel:"Disabled card",icon:e.jsx(l,{name:"settings",className:"size-4"}),title:"Disabled",description:"Entire card is non-interactive."}),e.jsx(c,{enabled:!0,switchHidden:!0,toggleAriaLabel:"Hidden switch",icon:e.jsx(l,{name:"verified",className:"size-4"}),title:"Switch hidden",description:"on/off state is driven by a dedicated control."})]})},ot=["Basic","AutoTintedThumbs","WithSettingsContent","DisabledAndHidden"];var L,w,y;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    enabled: false,
    toggleAriaLabel: "Toggle",
    icon: null,
    title: "",
    onToggle: () => {},
    onCheckedChange: () => {}
  },
  render: () => <FeatureCard enabled toggleAriaLabel="Toggle revenue widget" icon={<Icon name="stat" className="size-4" />} iconColorSeed="revenue" title="Revenue chart" description="Shows sales revenue over the selected period." />
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var R,F,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    enabled: false,
    toggleAriaLabel: "Toggle",
    icon: null,
    title: "",
    onToggle: () => {},
    onCheckedChange: () => {}
  },
  render: () => <div className="flex w-[420px] flex-col gap-3">\r
      <SettingsCategoryHeader title="Widgets" />\r
      {[{
      seed: "chart",
      title: "Chart widget",
      icon: "stat"
    }, {
      seed: "map",
      title: "Map widget",
      icon: "globe"
    }, {
      seed: "table",
      title: "Table widget",
      icon: "home"
    }].map((item, i) => <FeatureCard key={item.seed} enabled={i !== 2} toggleAriaLabel={\`Toggle \${item.title}\`} icon={<Icon name={item.icon} className="size-4" />} iconColorSeed={item.seed} title={item.title} description="Tint derived from the seed — stable across locales." />)}\r
    </div>
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var D,O,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    enabled: false,
    toggleAriaLabel: "Toggle",
    icon: null,
    title: "",
    onToggle: () => {},
    onCheckedChange: () => {}
  },
  render: () => <FeatureCard enabled toggleAriaLabel="Toggle notifications" icon={<Icon name="notification" className="size-4" />} iconTintColor="#f59e0b" title="Notifications" description="Email me when a connector sync fails." settingsContent={<p className="text-muted-foreground text-xs">\r
          Expanded settings render inside the card when enabled.\r
        </p>} />
}`,...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var G,U,B;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    enabled: false,
    toggleAriaLabel: "Toggle",
    icon: null,
    title: "",
    onToggle: () => {},
    onCheckedChange: () => {}
  },
  render: () => <div className="flex w-[420px] flex-col gap-3">\r
      <FeatureCard enabled={false} disabled toggleAriaLabel="Disabled card" icon={<Icon name="settings" className="size-4" />} title="Disabled" description="Entire card is non-interactive." />\r
      <FeatureCard enabled switchHidden toggleAriaLabel="Hidden switch" icon={<Icon name="verified" className="size-4" />} title="Switch hidden" description="on/off state is driven by a dedicated control." />\r
    </div>
}`,...(B=(U=u.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};export{g as AutoTintedThumbs,d as Basic,u as DisabledAndHidden,m as WithSettingsContent,ot as __namedExportsOrder,at as default};
