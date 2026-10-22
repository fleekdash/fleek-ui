import{j as n}from"./iframe-B4ogevxn.js";import{I as g}from"./menu-trigger-chevron-Q4kmR1jM.js";import{i as r,c as o}from"./instant-translate-pibj5xTz.js";import"./preload-helper-Dp1pzeXC.js";function y(){return r("pagination")}function b(){return r("Go to previous page")}function _(){return r("Previous")}function L(){return r("Go to next page")}function k(){return r("Next")}function z(){return r("More pages")}function c({className:e,...a}){return n.jsx("nav",{role:"navigation","aria-label":y(),"data-slot":"pagination",className:o("mx-auto flex w-full justify-center",e),...a})}function d({className:e,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",e),...a})}function i({...e}){return n.jsx("li",{"data-slot":"pagination-item",...e})}function t({className:e,isActive:a,size:N="icon",...v}){return n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:o(a?"outline":"ghost",N,e),...v})}function m({className:e,...a}){return n.jsxs(t,{"aria-label":b(),size:"default",className:o("gap-1 px-2.5 sm:pe-4",e),...a,children:[n.jsx(g,{name:"chevronLeft",className:"size-2 fill-current rtl:-scale-x-100"}),n.jsx("span",{children:_()})]})}function p({className:e,...a}){return n.jsxs(t,{"aria-label":L(),size:"default",className:o("gap-1 px-2.5 sm:ps-4",e),...a,children:[n.jsx("span",{children:k()}),n.jsx(g,{name:"chevronRight",className:"size-2 fill-current rtl:-scale-x-100"})]})}function I({className:e,...a}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",e),...a,children:[n.jsx(g,{name:"more-horizontal",className:"size-2 fill-current"}),n.jsx("span",{className:"sr-only",children:z()})]})}c.__docgenInfo={description:"",methods:[],displayName:"Pagination"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};I.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const T={title:"Components/Navigation/Pagination",component:c,parameters:{layout:"centered",docs:{description:{component:"Pagination bar: previous/next links, numbered page links and an ellipsis item for skipped ranges."}}},tags:["autodocs"]},s={render:()=>n.jsx(c,{children:n.jsxs(d,{children:[n.jsx(i,{children:n.jsx(m,{href:"#"})}),[1,2,3].map(e=>n.jsx(i,{children:n.jsx(t,{href:"#",isActive:e===2,children:e})},e)),n.jsx(i,{children:n.jsx(I,{})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"12"})}),n.jsx(i,{children:n.jsx(p,{href:"#"})})]})})},l={render:()=>n.jsx(c,{children:n.jsxs(d,{children:[n.jsx(i,{children:n.jsx(m,{href:"#","aria-disabled":!0,className:"pointer-events-none opacity-50"})}),[1,2,3,4].map(e=>n.jsx(i,{children:n.jsx(t,{href:"#",isActive:e===1,children:e})},e)),n.jsx(i,{children:n.jsx(p,{href:"#"})})]})})},w=["Basic","FirstPage"];var P,u,f;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        {[1, 2, 3].map(page => <PaginationItem key={page}>\r
            <PaginationLink href="#" isActive={page === 2}>\r
              {page}\r
            </PaginationLink>\r
          </PaginationItem>)}\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">12</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,h,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" aria-disabled className="pointer-events-none opacity-50" />\r
        </PaginationItem>\r
        {[1, 2, 3, 4].map(page => <PaginationItem key={page}>\r
            <PaginationLink href="#" isActive={page === 1}>\r
              {page}\r
            </PaginationLink>\r
          </PaginationItem>)}\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};export{s as Basic,l as FirstPage,w as __namedExportsOrder,T as default};
