import{r as n,j as a}from"./iframe-T4wYwA8j.js";import{c as B}from"./instant-translate-BmoNkbk6.js";import{c as Ce}from"./index-DHjlonOo.js";import{u as ne}from"./index-C3LWm9v9.js";import{c as ve}from"./index-D-QkTY3a.js";import{P as L,c as O}from"./index-DxMdwhIO.js";import{u as ye}from"./index-D2IX1F60.js";import{u as _e}from"./index-BsMG4kXf.js";import{u as je}from"./index-BrhX1qx-.js";import{P as Ie}from"./index-DpjuSjS8.js";import{L as Ne}from"./index-1HZQnkLX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DHUIFpa-.js";import"./index-BfYX0ma9.js";import"./index-CJI3Y6Cm.js";import"./index-C3ufoKdi.js";import"./index-Bba-lvXl.js";import"./index-CnMh2ajg.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Se=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,o)=>o?o.toUpperCase():s.toLowerCase()),M=e=>{const t=Se(e);return t.charAt(0).toUpperCase()+t.slice(1)},ce=(...e)=>e.filter((t,s,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===s).join(" ").trim(),we=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:c="",children:r,iconNode:m,...u},d)=>n.createElement("svg",{ref:d,...Re,width:t,height:t,stroke:e,strokeWidth:o?Number(s)*24/Number(t):s,className:ce("lucide",c),...!r&&!we(u)&&{"aria-hidden":"true"},...u},[...m.map(([h,f])=>n.createElement(h,f)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(e,t)=>{const s=n.forwardRef(({className:o,...c},r)=>n.createElement(Pe,{ref:r,iconNode:t,className:ce(`lucide-${Ee(M(e))}`,`lucide-${e}`,o),...c}));return s.displayName=M(e),s};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Le=ie("check",ze);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M5 12h14",key:"1ays0h"}]],De=ie("minus",Ae);var w="Checkbox",[Be]=ve(w),[Oe,A]=Be(w);function Me(e){const{__scopeCheckbox:t,checked:s,children:o,defaultChecked:c,disabled:r,form:m,name:u,onCheckedChange:d,required:h,value:f="on",internal_do_not_use_render:p}=e,[b,C]=ye({prop:s,defaultProp:c??!1,onChange:d,caller:w}),[g,x]=n.useState(null),[v,i]=n.useState(null),l=n.useRef(!1),P=g?!!m||!!g.closest("form"):!0,z={checked:b,disabled:r,setChecked:C,control:g,setControl:x,name:u,form:m,value:f,hasConsumerStoppedPropagationRef:l,required:h,defaultChecked:k(c)?!1:c,isFormControl:P,bubbleInput:v,setBubbleInput:i};return a.jsx(Oe,{scope:t,...z,children:Te(p)?p(z):o})}var de="CheckboxTrigger",le=n.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:s,...o},c)=>{const{control:r,value:m,disabled:u,checked:d,required:h,setControl:f,setChecked:p,hasConsumerStoppedPropagationRef:b,isFormControl:C,bubbleInput:g}=A(de,e),x=ne(c,f),v=n.useRef(d);return n.useEffect(()=>{const i=r==null?void 0:r.form;if(i){const l=()=>p(v.current);return i.addEventListener("reset",l),()=>i.removeEventListener("reset",l)}},[r,p]),a.jsx(L.button,{type:"button",role:"checkbox","aria-checked":k(d)?"mixed":d,"aria-required":h,"data-state":be(d),"data-disabled":u?"":void 0,disabled:u,value:m,...o,ref:x,onKeyDown:O(t,i=>{i.key==="Enter"&&i.preventDefault()}),onClick:O(s,i=>{p(l=>k(l)?!0:!l),g&&C&&(b.current=i.isPropagationStopped(),b.current||i.stopPropagation())})})});le.displayName=de;var ue=n.forwardRef((e,t)=>{const{__scopeCheckbox:s,name:o,checked:c,defaultChecked:r,required:m,disabled:u,value:d,onCheckedChange:h,form:f,...p}=e;return a.jsx(Me,{__scopeCheckbox:s,checked:c,defaultChecked:r,disabled:u,required:m,onCheckedChange:h,name:o,form:f,value:d,internal_do_not_use_render:({isFormControl:b})=>a.jsxs(a.Fragment,{children:[a.jsx(le,{...p,ref:t,__scopeCheckbox:s}),b&&a.jsx(fe,{__scopeCheckbox:s})]})})});ue.displayName=w;var me="CheckboxIndicator",pe=n.forwardRef((e,t)=>{const{__scopeCheckbox:s,forceMount:o,...c}=e,r=A(me,s);return a.jsx(Ie,{present:o||k(r.checked)||r.checked===!0,children:a.jsx(L.span,{"data-state":be(r.checked),"data-disabled":r.disabled?"":void 0,...c,ref:t,style:{pointerEvents:"none",...e.style}})})});pe.displayName=me;var he="CheckboxBubbleInput",fe=n.forwardRef(({__scopeCheckbox:e,...t},s)=>{const{control:o,hasConsumerStoppedPropagationRef:c,checked:r,defaultChecked:m,required:u,disabled:d,name:h,value:f,form:p,bubbleInput:b,setBubbleInput:C}=A(he,e),g=ne(s,C),x=_e(r),v=je(o);n.useEffect(()=>{const l=b;if(!l)return;const P=window.HTMLInputElement.prototype,D=Object.getOwnPropertyDescriptor(P,"checked").set,ge=!c.current;if(x!==r&&D){const xe=new Event("click",{bubbles:ge});l.indeterminate=k(r),D.call(l,k(r)?!1:r),l.dispatchEvent(xe)}},[b,x,r,c]);const i=n.useRef(k(r)?!1:r);return a.jsx(L.input,{type:"checkbox","aria-hidden":!0,defaultChecked:m??i.current,required:u,disabled:d,name:h,value:f,form:p,...t,tabIndex:-1,ref:g,style:{...t.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});fe.displayName=he;function Te(e){return typeof e=="function"}function k(e){return e==="indeterminate"}function be(e){return k(e)?"indeterminate":e?"checked":"unchecked"}const We=Ce(`
    group peer bg-background shrink-0 rounded-sm ring-offset-background
    border-2 border-solid border-input
    focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
    disabled:cursor-not-allowed disabled:opacity-50
    aria-invalid:border-destructive/60! aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive!
    in-data-[invalid=true]:border-destructive/60! in-data-[invalid=true]:ring-destructive/10 dark:in-data-[invalid=true]:border-destructive!
    data-[state=checked]:border-primary! data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
    data-[state=indeterminate]:border-primary! data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground
    `,{variants:{size:{sm:"size-4.5 [&_svg]:size-3",md:"size-5 [&_svg]:size-3.5",lg:"size-5.5 [&_svg]:size-4"}},defaultVariants:{size:"md"}});function R({className:e,size:t,...s}){return a.jsx(ue,{"data-slot":"checkbox",className:B(We({size:t}),e),...s,children:a.jsxs(pe,{className:B("flex items-center justify-center text-current"),children:[a.jsx(Le,{className:"group-data-[state=indeterminate]:hidden"}),a.jsx(De,{className:"hidden group-data-[state=indeterminate]:block"})]})})}R.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const{action:ke}=__STORYBOOK_MODULE_ACTIONS__,nt={title:"Components/Inputs/Checkbox",component:R,parameters:{layout:"centered",docs:{description:{component:"Radix checkbox with FleekDash focus/invalid styling and three sizes. Supports checked, unchecked, indeterminate and disabled states."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"select",options:[!0,!1,"indeterminate"]},disabled:{control:"boolean"},"aria-invalid":{control:"boolean"}},args:{size:"md",checked:!1,disabled:!1,onCheckedChange:ke("checkedChanged")}},y={},_={args:{checked:!0}},j={args:{checked:"indeterminate"}},I={args:{disabled:!0,checked:!0}},N={args:{"aria-invalid":!0}},E={render:e=>a.jsx("div",{className:"flex items-center gap-4",children:["sm","md","lg"].map(t=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(R,{...e,size:t,checked:!0}),a.jsx("span",{className:"text-muted-foreground text-xs",children:t})]},t))})};function Fe(e){const[t,s]=n.useState(!1);return a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(R,{...e,id:"story-checkbox",checked:t,onCheckedChange:o=>{s(o===!0),ke("checkedChanged")(o)}}),a.jsx(Ne,{htmlFor:"story-checkbox",children:"Accept terms"})]})}const S={name:"With label (interactive)",render:e=>a.jsx(Fe,{...e})},ct=["Default","Checked","Indeterminate","Disabled","Invalid","Sizes","WithLabel"];var T,W,F;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(F=(W=y.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var $,q,U;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(U=(q=_.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var K,H,G;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate"
  }
}`,...(G=(H=j.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var V,X,Z;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Y,J,Q;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true
  }
}`,...(Q=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,re;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">\r
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-2">\r
          <Checkbox {...args} size={size} checked />\r
          <span className="text-muted-foreground text-xs">{size}</span>\r
        </div>)}\r
    </div>
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ae,oe;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "With label (interactive)",
  render: args => <CheckboxWithLabelDemo {...args} />
}`,...(oe=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};export{_ as Checked,y as Default,I as Disabled,j as Indeterminate,N as Invalid,E as Sizes,S as WithLabel,ct as __namedExportsOrder,nt as default};
