import{j as e,r as b}from"./iframe-D20LpuAU.js";import{B as m}from"./index-Bc2r6MAQ.js";import{i as C}from"./instant-translate-pJhJtWwT.js";import{B}from"./index-C_bjDtTn.js";import"./preload-helper-Dp1pzeXC.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";import"./index-CY04nF0F.js";function y(){return C("Changes are saved automatically")}function S(){return C("Unsaved")}function r(){return e.jsx("p",{className:"text-muted-foreground text-xs",children:y()})}r.__docgenInfo={description:"",methods:[],displayName:"AutoSavedChangesHint"};function s({visible:i}){return i?e.jsx(B,{variant:"outline",className:"border-orange-500/20 bg-orange-500/10 px-2 py-0.5 text-[11px] leading-none font-medium text-orange-600 dark:text-orange-400","aria-live":"polite",children:S()}):null}s.__docgenInfo={description:"",methods:[],displayName:"UnsavedChangesBadge",props:{visible:{required:!0,tsType:{name:"boolean"},description:""}}};const Q={title:"Components/Feedback/FormPersistStatus",component:s,parameters:{layout:"centered",docs:{description:{component:"Form persistence indicators: `UnsavedChangesBadge` marks dirty state; `AutoSavedChangesHint` reassures that changes persist automatically."}}},tags:["autodocs"]},a={args:{visible:!1},name:"UnsavedChangesBadge",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{visible:!1}),e.jsx(s,{visible:!0}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"hidden → visible"})]})},t={args:{visible:!1},name:"AutoSavedChangesHint",render:()=>e.jsx(r,{})},n={args:{visible:!1},render:function(){const[o,d]=b.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{variant:"outline",size:"sm",onClick:()=>d(!0),children:"Make a change"}),e.jsx(m,{variant:"ghost",size:"sm",disabled:!o,onClick:()=>d(!1),children:"Save"}),e.jsx(s,{visible:o}),e.jsx(r,{})]})}},V=["Badge","Hint","Interactive"];var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
