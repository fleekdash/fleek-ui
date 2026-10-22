import{j as e}from"./iframe-AoE8j4ij.js";import{B as x}from"./index-Jly65EPZ.js";import{c as l}from"./instant-translate-CWwN--yb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BtgwBQJy.js";import"./index-D0Ytr1w-.js";import"./index-CyY0JB9U.js";function d({className:a,...t}){return e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{"data-slot":"table",className:l("w-full caption-bottom text-sm",a),...t})})}function p({className:a,...t}){return e.jsx("thead",{"data-slot":"table-header",className:l(a),...t})}function T({className:a,...t}){return e.jsx("tbody",{"data-slot":"table-body",className:l("[&_tr:last-child]:border-0",a),...t})}function h({className:a,...t}){return e.jsx("tfoot",{"data-slot":"table-footer",className:l("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...t})}function n({className:a,...t}){return e.jsx("tr",{"data-slot":"table-row",className:l("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...t})}function o({className:a,...t}){return e.jsx("th",{"data-slot":"table-head",className:l("text-muted-foreground h-12 px-3 text-start align-middle font-medium has-[role=checkbox]:w-px [&:has([role=checkbox])]:pe-0",a),...t})}function s({className:a,...t}){return e.jsx("td",{"data-slot":"table-cell",className:l("p-3 align-middle [&:has([role=checkbox])]:pe-0",a),...t})}function u({className:a,...t}){return e.jsx("caption",{"data-slot":"table-caption",className:l("text-muted-foreground mt-4 text-sm",a),...t})}d.__docgenInfo={description:"",methods:[],displayName:"Table"};T.__docgenInfo={description:"",methods:[],displayName:"TableBody"};u.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};s.__docgenInfo={description:"",methods:[],displayName:"TableCell"};h.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};o.__docgenInfo={description:"",methods:[],displayName:"TableHead"};p.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const _={title:"Components/Data Display/Table",component:d,parameters:{layout:"centered",docs:{description:{component:"Semantic table primitives — header/body/footer/caption — used by the table widget panels."}}},tags:["autodocs"]},i=[{name:"Revenue chart",type:"chart",size:"hero",status:"published"},{name:"Top posts",type:"table",size:"body",status:"published"},{name:"World map",type:"map",size:"rail",status:"draft"}],r={render:()=>e.jsx("div",{className:"w-[560px]",children:e.jsxs(d,{children:[e.jsx(u,{children:"Dashboard widgets"}),e.jsx(p,{children:e.jsxs(n,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Type"}),e.jsx(o,{children:"Size"}),e.jsx(o,{children:"Status"})]})}),e.jsx(T,{children:i.map(a=>e.jsxs(n,{children:[e.jsx(s,{className:"font-medium",children:a.name}),e.jsx(s,{children:a.type}),e.jsx(s,{children:a.size}),e.jsx(s,{children:e.jsx(x,{variant:a.status==="published"?"default":"secondary",children:a.status})})]},a.name))}),e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(s,{colSpan:3,children:"Total"}),e.jsxs(s,{children:[i.length," widgets"]})]})})]})})},H=["Basic"];var c,b,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-[560px]">\r
      <Table>\r
        <TableCaption>Dashboard widgets</TableCaption>\r
        <TableHeader>\r
          <TableRow>\r
            <TableHead>Name</TableHead>\r
            <TableHead>Type</TableHead>\r
            <TableHead>Size</TableHead>\r
            <TableHead>Status</TableHead>\r
          </TableRow>\r
        </TableHeader>\r
        <TableBody>\r
          {ROWS.map(row => <TableRow key={row.name}>\r
              <TableCell className="font-medium">{row.name}</TableCell>\r
              <TableCell>{row.type}</TableCell>\r
              <TableCell>{row.size}</TableCell>\r
              <TableCell>\r
                <Badge variant={row.status === "published" ? "default" : "secondary"}>\r
                  {row.status}\r
                </Badge>\r
              </TableCell>\r
            </TableRow>)}\r
        </TableBody>\r
        <TableFooter>\r
          <TableRow>\r
            <TableCell colSpan={3}>Total</TableCell>\r
            <TableCell>{ROWS.length} widgets</TableCell>\r
          </TableRow>\r
        </TableFooter>\r
      </Table>\r
    </div>
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};export{r as Basic,H as __namedExportsOrder,_ as default};
