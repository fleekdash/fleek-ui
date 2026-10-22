import{j as e}from"./iframe-B4ogevxn.js";import{B as n}from"./index-IiT93W48.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pibj5xTz.js";import"./button-text-DNz-Xq84.js";import"./index-q2t2gBUy.js";import"./index-yfKPQT7J.js";import"./menu-trigger-chevron-Q4kmR1jM.js";import"./index-CPN_ecL-.js";import"./index-Y7k0CB23.js";import"./index-DIXRwbkp.js";import"./index-BK6SfLHh.js";import"./index-YtbWFEiY.js";import"./index-vfXVsf48.js";import"./index-CdEyXhUw.js";import"./index-D75eZwGm.js";import"./index-CnPndVxn.js";import"./index-C_H-g0R6.js";import"./index-Bg0-gfri.js";import"./index-rTX2682U.js";import"./index-BFRsHRLp.js";import"./index-CPguq436.js";const A={title:"Components/Inputs/Button/Icons",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={parameters:{docs:{description:{story:"Buttons with icons using the `icon` prop and icons-map keys (theme-aware Solar/Lucide). You can position the icon on either side of text or use icon-only buttons."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsx("h3",{className:"mb-3 text-lg font-medium",children:"Icon Buttons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{icon:"mail",children:"Email"}),e.jsx("span",{className:"font-mono text-xs",children:'icon="mail"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{icon:"settings",iconPosition:"right",children:"Settings"}),e.jsx("span",{className:"font-mono text-xs",children:'iconPosition="right"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{variant:"secondary",icon:"add",children:"Add New"}),e.jsx("span",{className:"font-mono text-xs",children:'variant="secondary"'})]})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"Icon-Only Buttons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"icon",icon:"search","aria-label":"Search"}),e.jsx("span",{className:"font-mono text-xs",children:'size="icon"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"icon",icon:"add",variant:"secondary","aria-label":"Add"}),e.jsx("span",{className:"font-mono text-xs",children:'variant="secondary"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"icon",icon:"delete",variant:"destructive","aria-label":"Delete"}),e.jsx("span",{className:"font-mono text-xs",children:'variant="destructive"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"icon",icon:"heart",variant:"outline",radius:"full","aria-label":"Like"}),e.jsx("span",{className:"font-mono text-xs",children:'radius="full"'})]})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"Icon Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-end gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"sm",icon:"arrowRight",children:"Small"}),e.jsx("span",{className:"font-mono text-xs",children:'size="sm"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{icon:"arrowRight",children:"Default"}),e.jsx("span",{className:"font-mono text-xs",children:"default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"lg",icon:"arrowRight",children:"Large"}),e.jsx("span",{className:"font-mono text-xs",children:'size="lg"'})]})]}),e.jsxs("div",{className:"bg-muted mt-6 rounded-lg p-4",children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"How to Use Icon Prop"}),e.jsxs("p",{className:"mb-2 text-sm",children:["Use keys from ",e.jsx("code",{className:"text-xs",children:"icons-map.ts"})," (resolved per active theme):"]}),e.jsx("pre",{className:"overflow-auto rounded-sm bg-zinc-200 p-2 text-xs",children:`<Button icon="mail">Send Email</Button>
<Button icon="search" size="icon" aria-label="Search" />
<Button icon="arrowRight" iconPosition="right">Next</Button>`})]})]})},a={parameters:{docs:{description:{story:"Demonstração do equilíbrio visual do espaçamento em botões com ícones, com padding compensado do lado oposto ao ícone."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsx("h3",{className:"mb-3 text-lg font-medium",children:"Equilíbrio Visual com Ícones"}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Comparação Lado a Lado"}),e.jsx("div",{className:"bg-muted relative rounded-lg p-4",children:e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{children:"Sem Ícone"}),e.jsx("span",{className:"font-mono text-xs",children:"Padding padrão"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{icon:"mail",children:"Com Ícone"}),e.jsx("span",{className:"font-mono text-xs",children:"Padding compensado"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{icon:"arrowRight",iconPosition:"right",children:"Ícone à Direita"}),e.jsx("span",{className:"font-mono text-xs",children:"Padding compensado"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Ajuste por Tamanho"}),e.jsx("div",{className:"bg-muted rounded-lg p-4",children:e.jsxs("div",{className:"flex flex-wrap items-end gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"xs",icon:"settings",children:"XS Button"}),e.jsx("span",{className:"font-mono text-xs",children:"Espaçamento menor (mr-1.5)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"sm",icon:"settings",children:"SM Button"}),e.jsx("span",{className:"font-mono text-xs",children:"Espaçamento padrão (mr-2)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{icon:"settings",children:"Default Button"}),e.jsx("span",{className:"font-mono text-xs",children:"Espaçamento padrão (mr-2)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"lg",icon:"settings",children:"Large Button"}),e.jsx("span",{className:"font-mono text-xs",children:"Espaçamento maior (mr-3)"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Ícone em Botão Large"}),e.jsx("div",{className:"bg-muted rounded-lg p-4",children:e.jsxs("div",{className:"flex flex-wrap items-end gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"lg",icon:"settings",children:"Tamanho do Ícone Ajustado"}),e.jsx("span",{className:"font-mono text-xs",children:"h-5 w-5 (reduzido de h-6 w-6)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{size:"default",icon:"settings",children:"Botão Default"}),e.jsx("span",{className:"font-mono text-xs",children:"h-5 w-5 (referência)"})]})]})})]})]}),e.jsxs("div",{className:"bg-muted mt-6 rounded-lg p-4",children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Ajustes Finos Implementados"}),e.jsxs("ul",{className:"flex list-disc flex-col gap-1 pl-5 text-sm",children:[e.jsx("li",{children:"Adicionado padding extra (pr-1/pl-1) no lado oposto ao ícone para equilibrar visualmente"}),e.jsx("li",{children:"Espaçamento entre ícone e texto proporcional ao tamanho do botão (xs: 1.5, padrão: 2, lg: 3)"}),e.jsx("li",{children:"Reduzido o tamanho do ícone em botões large de h-6 w-6 para h-5 w-5"}),e.jsx("li",{children:"Padding maior em botões large (pr-1.5/pl-1.5 vs pr-1/pl-1)"})]})]})]})},R=["IconButton","IconBalancing"];var t,o,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons using the \`icon\` prop and icons-map keys (theme-aware Solar/Lucide). You can position the icon on either side of text or use icon-only buttons."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-4">\r
      <h3 className="mb-3 text-lg font-medium">Icon Buttons</h3>\r
\r
      <div className="flex flex-wrap gap-4">\r
        <div className="flex flex-col items-center gap-2">\r
          <Button icon="mail">Email</Button>\r
          <span className="font-mono text-xs">icon="mail"</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button icon="settings" iconPosition="right">\r
            Settings\r
          </Button>\r
          <span className="font-mono text-xs">iconPosition="right"</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button variant="secondary" icon="add">\r
            Add New\r
          </Button>\r
          <span className="font-mono text-xs">variant="secondary"</span>\r
        </div>\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">Icon-Only Buttons</h4>\r
      <div className="flex flex-wrap gap-4">\r
        <div className="flex flex-col items-center gap-2">\r
          <Button size="icon" icon="search" aria-label="Search" />\r
          <span className="font-mono text-xs">size="icon"</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button size="icon" icon="add" variant="secondary" aria-label="Add" />\r
          <span className="font-mono text-xs">variant="secondary"</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button size="icon" icon="delete" variant="destructive" aria-label="Delete" />\r
          <span className="font-mono text-xs">variant="destructive"</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button size="icon" icon="heart" variant="outline" radius="full" aria-label="Like" />\r
          <span className="font-mono text-xs">radius="full"</span>\r
        </div>\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">Icon Sizes</h4>\r
      <div className="flex flex-wrap items-end gap-4">\r
        <div className="flex flex-col items-center gap-2">\r
          <Button size="sm" icon="arrowRight">\r
            Small\r
          </Button>\r
          <span className="font-mono text-xs">size="sm"</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button icon="arrowRight">Default</Button>\r
          <span className="font-mono text-xs">default</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button size="lg" icon="arrowRight">\r
            Large\r
          </Button>\r
          <span className="font-mono text-xs">size="lg"</span>\r
        </div>\r
      </div>\r
\r
      <div className="bg-muted mt-6 rounded-lg p-4">\r
        <h4 className="text-md mb-2 font-medium">How to Use Icon Prop</h4>\r
        <p className="mb-2 text-sm">\r
          Use keys from <code className="text-xs">icons-map.ts</code> (resolved\r
          per active theme):\r
        </p>\r
        <pre className="overflow-auto rounded-sm bg-zinc-200 p-2 text-xs">\r
          {\`<Button icon="mail">Send Email</Button>
<Button icon="search" size="icon" aria-label="Search" />
<Button icon="arrowRight" iconPosition="right">Next</Button>\`}\r
        </pre>\r
      </div>\r
    </div>
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var r,l,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Demonstração do equilíbrio visual do espaçamento em botões com ícones, com padding compensado do lado oposto ao ícone."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-4">\r
      <h3 className="mb-3 text-lg font-medium">Equilíbrio Visual com Ícones</h3>\r
\r
      <div className="flex flex-col gap-6">\r
        <div>\r
          <h4 className="text-md mb-2 font-medium">Comparação Lado a Lado</h4>\r
          <div className="bg-muted relative rounded-lg p-4">\r
            <div className="flex flex-wrap gap-4">\r
              <div className="flex flex-col items-center gap-2">\r
                <Button>Sem Ícone</Button>\r
                <span className="font-mono text-xs">Padding padrão</span>\r
              </div>\r
              <div className="flex flex-col items-center gap-2">\r
                <Button icon="mail">Com Ícone</Button>\r
                <span className="font-mono text-xs">Padding compensado</span>\r
              </div>\r
              <div className="flex flex-col items-center gap-2">\r
                <Button icon="arrowRight" iconPosition="right">\r
                  Ícone à Direita\r
                </Button>\r
                <span className="font-mono text-xs">Padding compensado</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 className="text-md mb-2 font-medium">Ajuste por Tamanho</h4>\r
          <div className="bg-muted rounded-lg p-4">\r
            <div className="flex flex-wrap items-end gap-4">\r
              <div className="flex flex-col items-center gap-2">\r
                <Button size="xs" icon="settings">\r
                  XS Button\r
                </Button>\r
                <span className="font-mono text-xs">\r
                  Espaçamento menor (mr-1.5)\r
                </span>\r
              </div>\r
              <div className="flex flex-col items-center gap-2">\r
                <Button size="sm" icon="settings">\r
                  SM Button\r
                </Button>\r
                <span className="font-mono text-xs">\r
                  Espaçamento padrão (mr-2)\r
                </span>\r
              </div>\r
              <div className="flex flex-col items-center gap-2">\r
                <Button icon="settings">Default Button</Button>\r
                <span className="font-mono text-xs">\r
                  Espaçamento padrão (mr-2)\r
                </span>\r
              </div>\r
              <div className="flex flex-col items-center gap-2">\r
                <Button size="lg" icon="settings">\r
                  Large Button\r
                </Button>\r
                <span className="font-mono text-xs">\r
                  Espaçamento maior (mr-3)\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 className="text-md mb-2 font-medium">Ícone em Botão Large</h4>\r
          <div className="bg-muted rounded-lg p-4">\r
            <div className="flex flex-wrap items-end gap-4">\r
              <div className="flex flex-col items-center gap-2">\r
                <Button size="lg" icon="settings">\r
                  Tamanho do Ícone Ajustado\r
                </Button>\r
                <span className="font-mono text-xs">\r
                  h-5 w-5 (reduzido de h-6 w-6)\r
                </span>\r
              </div>\r
              <div className="flex flex-col items-center gap-2">\r
                <Button size="default" icon="settings">\r
                  Botão Default\r
                </Button>\r
                <span className="font-mono text-xs">h-5 w-5 (referência)</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="bg-muted mt-6 rounded-lg p-4">\r
        <h4 className="text-md mb-2 font-medium">\r
          Ajustes Finos Implementados\r
        </h4>\r
        <ul className="flex list-disc flex-col gap-1 pl-5 text-sm">\r
          <li>\r
            Adicionado padding extra (pr-1/pl-1) no lado oposto ao ícone para\r
            equilibrar visualmente\r
          </li>\r
          <li>\r
            Espaçamento entre ícone e texto proporcional ao tamanho do botão\r
            (xs: 1.5, padrão: 2, lg: 3)\r
          </li>\r
          <li>\r
            Reduzido o tamanho do ícone em botões large de h-6 w-6 para h-5 w-5\r
          </li>\r
          <li>Padding maior em botões large (pr-1.5/pl-1.5 vs pr-1/pl-1)</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{a as IconBalancing,s as IconButton,R as __namedExportsOrder,A as default};
