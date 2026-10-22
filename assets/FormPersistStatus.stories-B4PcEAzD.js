import{j as e,r as b}from"./iframe-B4ogevxn.js";import{B as m}from"./index-IiT93W48.js";import{i as C}from"./instant-translate-pibj5xTz.js";import{B}from"./index-gEcqb2xa.js";import"./preload-helper-Dp1pzeXC.js";import"./button-text-DNz-Xq84.js";import"./index-q2t2gBUy.js";import"./index-yfKPQT7J.js";import"./menu-trigger-chevron-Q4kmR1jM.js";import"./index-CPN_ecL-.js";import"./index-Y7k0CB23.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-YtbWFEiY.js";import"./index-vfXVsf48.js";import"./index-CdEyXhUw.js";import"./index-D75eZwGm.js";import"./index-CnPndVxn.js";import"./index-C_H-g0R6.js";import"./index-Bg0-gfri.js";import"./index-rTX2682U.js";import"./index-BFRsHRLp.js";import"./index-CPguq436.js";import"./index-BFlTwmna.js";function y(){return C("Changes are saved automatically")}function S(){return C("Unsaved")}function r(){return e.jsx("p",{className:"text-muted-foreground text-xs",children:y()})}r.__docgenInfo={description:"",methods:[],displayName:"AutoSavedChangesHint"};function s({visible:i}){return i?e.jsx(B,{variant:"outline",className:"border-orange-500/20 bg-orange-500/10 px-2 py-0.5 text-[11px] leading-none font-medium text-orange-600 dark:text-orange-400","aria-live":"polite",children:S()}):null}s.__docgenInfo={description:"",methods:[],displayName:"UnsavedChangesBadge",props:{visible:{required:!0,tsType:{name:"boolean"},description:""}}};const Q={title:"Components/Feedback/FormPersistStatus",component:s,parameters:{layout:"centered",docs:{description:{component:"Form persistence indicators: `UnsavedChangesBadge` marks dirty state; `AutoSavedChangesHint` reassures that changes persist automatically."}}},tags:["autodocs"]},a={args:{visible:!1},name:"UnsavedChangesBadge",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{visible:!1}),e.jsx(s,{visible:!0}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"hidden → visible"})]})},t={args:{visible:!1},name:"AutoSavedChangesHint",render:()=>e.jsx(r,{})},n={args:{visible:!1},render:function(){const[o,d]=b.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{variant:"outline",size:"sm",onClick:()=>d(!0),children:"Make a change"}),e.jsx(m,{variant:"ghost",size:"sm",disabled:!o,onClick:()=>d(!1),children:"Save"}),e.jsx(s,{visible:o}),e.jsx(r,{})]})}},V=["Badge","Hint","Interactive"];var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  name: "UnsavedChangesBadge",
  render: () => <div className="flex items-center gap-4">\r
      <UnsavedChangesBadge visible={false} />\r
      <UnsavedChangesBadge visible />\r
      <span className="text-muted-foreground text-xs">hidden → visible</span>\r
    </div>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,u,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  name: "AutoSavedChangesHint",
  render: () => <AutoSavedChangesHint />
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: function Render() {
    const [dirty, setDirty] = useState(false);
    return <div className="flex items-center gap-3">\r
        <Button variant="outline" size="sm" onClick={() => setDirty(true)}>\r
          Make a change\r
        </Button>\r
        <Button variant="ghost" size="sm" disabled={!dirty} onClick={() => setDirty(false)}>\r
          Save\r
        </Button>\r
        <UnsavedChangesBadge visible={dirty} />\r
        <AutoSavedChangesHint />\r
      </div>;
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{a as Badge,t as Hint,n as Interactive,V as __namedExportsOrder,Q as default};
