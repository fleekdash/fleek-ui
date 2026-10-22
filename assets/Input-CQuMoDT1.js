import{r as u,j as t}from"./iframe-T4wYwA8j.js";import{I as f}from"./menu-trigger-chevron-DWrnO5CH.js";import{F as y,a as F,b as E,c as T}from"./field-focus-APfXAL04.js";import{c as l,r as O,d as A}from"./instant-translate-BmoNkbk6.js";import{c as x}from"./index-DHjlonOo.js";const g=x(`
    flex w-full bg-card border border-input text-card-foreground placeholder:text-muted-foreground/80
    ${y}
    disabled:cursor-not-allowed disabled:opacity-60
    [[readonly]]:bg-muted/80 [[readonly]]:cursor-not-allowed
    file:h-full [[type=file]]:py-0 file:border-solid file:border-input file:bg-transparent
    file:font-medium file:not-italic file:text-card-foreground file:p-0 file:border-0 file:border-e
  `,{variants:{variant:{lg:"h-10 px-4 text-sm rounded-md file:pe-4 file:me-4",md:"h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) rounded-md file:pe-3 file:me-3",sm:"h-7 px-2.5 text-xs rounded-sm file:pe-2.5 file:me-2.5"}},defaultVariants:{variant:"md"}}),R=x(`flex items-center shrink-0 justify-center bg-muted/50 border border-input shadow-xs shadow-[rgba(0,0,0,0.05)] text-card-foreground
   [&_svg]:text-current group-focus-within:text-primary group-aria-invalid:text-destructive`,{variants:{variant:{sm:"rounded-md h-7 min-w-7 text-xs px-2.5 [&_svg:not([class*=size-])]:size-3.5",md:"rounded-md h-8.5 min-w-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) [&_svg:not([class*=size-])]:size-4.5",lg:"rounded-md h-10 min-w-10 px-4 text-sm [&_svg:not([class*=size-])]:size-4.5"},mode:{default:"",icon:"px-0 justify-center"}},defaultVariants:{variant:"md",mode:"default"}}),S=x(`
    group flex items-stretch rounded-md overflow-hidden border border-input bg-[var(--input-bg)]
    ${F} ${E} ${T}

    [&_[data-slot=input]]:grow [&_[data-slot=input]]:border-0 [&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:shadow-none
    [&_[data-slot=input]]:focus-visible:shadow-none [&_[data-slot=input]]:focus-visible:border-transparent [&_[data-slot=input]]:focus-visible:outline-none
    [&_[data-slot=input-addon]]:border-0 [&_[data-slot=input-addon]]:bg-transparent
    [&_[data-slot=button]]:border-0 [&_[data-slot=button]]:bg-transparent

    [&_[data-slot=input-addon]:has(+[data-slot=input])]:rounded-e-none
    [&_[data-slot=input-addon]:has(+[data-slot=datefield])]:rounded-e-none
    [&_[data-slot=input]+[data-slot=input-addon]]:rounded-s-none
    [&_[data-slot=input-addon]:has(+[data-slot=button])]:rounded-e-none
    [&_[data-slot=input]+[data-slot=button]]:rounded-s-none
    [&_[data-slot=button]+[data-slot=input]]:rounded-s-none
    [&_[data-slot=input-addon]+[data-slot=input]]:rounded-s-none
    [&_[data-slot=input-addon]+[data-slot=datefield]]:[&_[data-slot=input]]:rounded-s-none
    [&_[data-slot=datefield]:has(+[data-slot=input-addon])]:[&_[data-slot=input]]:rounded-e-none
    [&_[data-slot=input]:has(+[data-slot=button])]:rounded-e-none
    [&_[data-slot=input]:has(+[data-slot=input-addon])]:rounded-e-none
    [&_[data-slot=datefield]]:grow
    [&_[data-slot=datefield]+[data-slot=input-addon]]:rounded-s-none

    /* Adjust padding when inside a group */
    [&_[data-slot=input-addon]+[data-slot=input]]:ps-0
    [&_[data-slot=input]:has(+[data-slot=input-addon])]:pe-0
    [&_[data-slot=input]:has(+[data-slot=button])]:pe-0
    [&_[data-slot=button]+[data-slot=input]]:ps-0
  `,{variants:{},defaultVariants:{}});function _(...s){return a=>{s.forEach(e=>{if(e){if(typeof e=="function")e(a);else if(typeof e=="object"&&e!==null)try{e.current=a}catch(d){O()!=="production"&&A("MAIN","[Input] Failed to assign ref",d)}}})}}const I=u.forwardRef(({className:s,type:a,variant:e,autoFocusOnVisible:d,prefixIcon:r,suffixIcon:i,...p},b)=>{const o=u.useRef(null),[v,N]=u.useState(!1);u.useEffect(()=>{if(!d||!o.current)return;let n=null;function w(j){var h;j[0].isIntersecting&&((h=o.current)==null||h.focus(),n==null||n.disconnect())}return n=new globalThis.IntersectionObserver(w,{threshold:.1}),n.observe(o.current),()=>n==null?void 0:n.disconnect()},[d]),u.useEffect(()=>{if(!o.current)return;const n=o.current.closest('[data-slot="input-group"]');N(!!n)},[]);const c=!!r&&typeof r=="string"&&r.trim()!=="",m=!!i&&typeof i=="string"&&i.trim()!=="";return v?t.jsxs(t.Fragment,{children:[c&&t.jsx("span",{className:"text-muted-foreground pointer-events-none absolute start-2 flex items-center",children:t.jsx(f,{name:r,className:"h-4 w-4"})}),t.jsx("input",{"data-slot":"input",type:a,ref:_(b,o),tabIndex:p.tabIndex??0,className:l(g({variant:e}),c&&"ps-7",m&&"pe-7","pointer-events-auto"),...p}),m&&t.jsx("span",{className:"text-muted-foreground pointer-events-none absolute end-2 flex items-center",children:t.jsx(f,{name:i,className:"h-4 w-4"})})]}):t.jsxs("div",{className:l("relative flex w-full items-center",s),children:[c&&t.jsx("span",{className:"text-muted-foreground pointer-events-none absolute start-2.5 flex items-center",children:t.jsx(f,{name:r,className:"h-4 w-4"})}),t.jsx("input",{"data-slot":"input",type:a,ref:_(b,o),tabIndex:p.tabIndex??0,className:l(g({variant:e}),c&&"ps-8",m&&"pe-8","pointer-events-auto"),...p}),m&&t.jsx("span",{className:"text-muted-foreground pointer-events-none absolute end-2.5 flex items-center",children:t.jsx(f,{name:i,className:"h-4 w-4"})})]})});I.displayName="Input";function V({className:s,variant:a,mode:e,...d}){return t.jsx("div",{"data-slot":"input-addon",className:l(R({variant:a,mode:e}),s),...d})}function z({className:s,...a}){return t.jsx("div",{"data-slot":"input-group",className:l(S(),s),...a})}I.__docgenInfo={description:"",methods:[],displayName:"Input",props:{autoFocusOnVisible:{required:!1,tsType:{name:"boolean"},description:""},prefixIcon:{required:!1,tsType:{name:"string"},description:""},suffixIcon:{required:!1,tsType:{name:"string"},description:""}}};V.__docgenInfo={description:"",methods:[],displayName:"InputAddon"};z.__docgenInfo={description:"",methods:[],displayName:"InputGroup"};export{I,z as a,V as b};
