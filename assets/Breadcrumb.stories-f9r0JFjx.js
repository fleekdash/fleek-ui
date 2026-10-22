import{j as r}from"./iframe-B4ogevxn.js";import{S as L}from"./index-q2t2gBUy.js";import{I as j}from"./menu-trigger-chevron-Q4kmR1jM.js";import{c as d}from"./instant-translate-pibj5xTz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yfKPQT7J.js";function i({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:d("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5",e),...a})}function n({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:d("inline-flex items-center gap-1.5",e),...a})}function t({asChild:e,className:a,...o}){const I=e?L:"a";return r.jsx(I,{"data-slot":"breadcrumb-link",className:d("hover:text-foreground transition-colors",a),...o})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:d("text-foreground font-normal",e),...a})}function s({children:e,className:a,...o}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:a,...o,children:e??r.jsx(j,{name:"chevronRight",className:"size-2 fill-current rtl:-scale-x-100"})})}function g({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:d("flex size-5 items-center justify-center",e),...a,children:[r.jsx(j,{name:"more-horizontal",className:"size-2 fill-current"}),r.jsx("span",{className:"sr-only",children:"More"})]})}i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const E={title:"Components/Navigation/Breadcrumb",component:i,parameters:{layout:"centered",docs:{description:{component:"Breadcrumb trail: list, item, link, page (current), separator and ellipsis for collapsed middle segments."}}},tags:["autodocs"]},c={render:()=>r.jsx(i,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(t,{href:"#",children:"Dashboard"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(t,{href:"#",children:"Widgets"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Chart"})})]})})},m={render:()=>r.jsx(i,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(t,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(g,{})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(t,{href:"#",children:"Settings"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Connectors"})})]})})},P=["Basic","WithEllipsis"];var b,p,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Widgets</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Chart</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...(B=(p=c.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var h,x,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbEllipsis />\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Connectors</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{c as Basic,m as WithEllipsis,P as __namedExportsOrder,E as default};
