import{j as e}from"./iframe-D20LpuAU.js";import{B as t}from"./index-Bc2r6MAQ.js";import"./preload-helper-Dp1pzeXC.js";import"./instant-translate-pJhJtWwT.js";import"./button-text-Bnz5kdnX.js";import"./index-CVY6rmCy.js";import"./index-DaBFz4F_.js";import"./menu-trigger-chevron-DkXwEHUF.js";import"./index-CzQzOWpv.js";import"./index-DfAzSN1A.js";import"./index-B4NtPI5H.js";import"./index-Dej9r9Yr.js";import"./index-DAcSuKJh.js";import"./index-COIAqvkL.js";import"./index-C84c1MPb.js";import"./index-CEYjVXcp.js";import"./index-D3WvatuM.js";import"./index-D7zfKy2N.js";import"./index-C6UVvQbw.js";import"./index-CiBBATYp.js";import"./index-C1G0ezyr.js";import"./index-BWpMtWhh.js";const k={title:"Components/Inputs/Button/Shapes",component:t,parameters:{layout:"centered"},tags:["autodocs"]},n={parameters:{docs:{description:{story:"Buttons with squircle shape for modern, smoother corners. Squircle combines square and circle shapes to create more natural looking UI elements. This feature can be enabled/disabled globally at the theme level."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsx("h3",{className:"mb-3 text-lg font-medium",children:"Squircle Buttons"}),e.jsxs("div",{className:"flex flex-wrap items-end gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{children:"Default Squircle"}),e.jsx("span",{className:"font-mono text-xs",children:"squircle=true (default)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{squircle:!1,children:"Regular Button"}),e.jsx("span",{className:"font-mono text-xs",children:"squircle=false"})]})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"Automatic Radius Handling"}),e.jsxs("div",{className:"flex flex-wrap items-end gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{children:"Standard Button"}),e.jsx("span",{className:"font-mono text-xs",children:"Uses squircle"}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"16px border radius"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{radius:"full",children:"Full Radius Button"}),e.jsx("span",{className:"font-mono text-xs",children:'radius="full"'}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"Disables squircle automatically"})]})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"Smoothing Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-end gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{squircleSmoothing:"sm",children:"Subtle"}),e.jsx("span",{className:"font-mono text-xs",children:'squircleSmoothing="sm"'}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"Less curve"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{squircleSmoothing:"md",children:"Medium"}),e.jsx("span",{className:"font-mono text-xs",children:'squircleSmoothing="md" (default)'}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"Balanced"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{squircleSmoothing:"lg",children:"Strong"}),e.jsx("span",{className:"font-mono text-xs",children:'squircleSmoothing="lg"'}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"iOS-like"})]})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"With Different Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-end gap-3",children:[e.jsx(t,{size:"xs",children:"Extra Small"}),e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"icon",icon:"heart","aria-label":"Like"})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"With Different Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"})]}),e.jsx("h4",{className:"text-md mt-6 mb-3 font-medium",children:"With Outline Variant"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"outline",children:"Outline + Squircle"}),e.jsx(t,{variant:"outline",icon:"settings",children:"With Icon"}),e.jsx(t,{variant:"outline",squircle:!1,children:"Outline Only"})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-muted flex h-40 flex-col items-center justify-center rounded-md p-4",children:[e.jsx(t,{className:"h-32 w-32",size:"lg",children:"Square"}),e.jsx("span",{className:"mt-2 font-mono text-xs",children:"Equal width/height"})]}),e.jsxs("div",{className:"bg-muted flex h-40 flex-col items-center justify-center rounded-md p-4",children:[e.jsx(t,{className:"h-16 w-32",size:"lg",children:"Rectangle"}),e.jsx("span",{className:"mt-2 font-mono text-xs",children:"Different width/height"})]})]}),e.jsxs("div",{className:"bg-muted mt-6 rounded-lg p-4",children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"About Squircle"}),e.jsx("p",{className:"mb-2 text-sm",children:"Squircles are shapes with perfectly smooth corners that adapt to the element's dimensions. Unlike regular border-radius, squircles maintain a consistent appearance regardless of size and aspect ratio, similar to iOS app icons."}),e.jsx("h5",{className:"mt-3 mb-1 text-sm font-medium",children:"Smart Behavior:"}),e.jsxs("ul",{className:"flex list-disc flex-col gap-1 pl-5 text-sm",children:[e.jsx("li",{children:"When squircle is enabled, a border-radius of 16px is automatically applied for proper rendering"}),e.jsxs("li",{children:["If you use ",e.jsx("code",{children:'radius="full"'}),", squircle is automatically disabled to allow perfect circles"]}),e.jsxs("li",{children:["Can be enabled/disabled globally at the theme level via"," ",e.jsx("code",{children:"uiSettings.useSquircleButtons"})]})]}),e.jsx("h5",{className:"mt-3 mb-1 text-sm font-medium",children:"Implementation:"}),e.jsx("p",{className:"mb-2 text-sm",children:"This implementation uses dynamic SVG masks that are calculated based on each button's dimensions. The squircle shape is generated at runtime using cubic Bézier curves, ensuring perfect proportions regardless of size."}),e.jsx("h5",{className:"mt-3 mb-1 text-sm font-medium",children:"Usage:"}),e.jsx("pre",{className:"overflow-auto rounded-sm bg-zinc-200 p-2 text-xs",children:`// Enabled by default (with 16px border radius)
<Button>Default Button</Button>

// Disable squircle
<Button squircle={false}>Regular Button</Button>

// Automatically disables squircle
<Button radius="full">Round Button</Button>

// Adjust smoothing
<Button squircleSmoothing="lg">Strong Smoothing</Button>

// Global theme setting
myTheme.uiSettings = { useSquircleButtons: true }`})]})]})},s={parameters:{docs:{description:{story:"Demonstrando o alinhamento vertical aprimorado para texto e ícones nos botões."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsx("h3",{className:"mb-3 text-lg font-medium",children:"Alinhamento Vertical"}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Comparação por Tamanho"}),e.jsxs("div",{className:"bg-muted relative rounded-lg p-4",children:[e.jsx("div",{className:"absolute top-1/2 right-0 left-0 z-10 h-px -translate-y-1/2 bg-red-400"}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(t,{size:"xs",children:"Extra Small"}),e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"icon",icon:"heart","aria-label":"Like"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Alinhamento com Ícones"}),e.jsxs("div",{className:"bg-muted relative rounded-lg p-4",children:[e.jsx("div",{className:"absolute top-1/2 right-0 left-0 z-10 h-px -translate-y-1/2 bg-red-400"}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(t,{size:"xs",icon:"mail",children:"Email"}),e.jsx(t,{size:"sm",icon:"mail",children:"Email"}),e.jsx(t,{icon:"mail",children:"Email"}),e.jsx(t,{size:"lg",icon:"mail",children:"Email"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Diferentes Variantes"}),e.jsxs("div",{className:"bg-muted relative rounded-lg p-4",children:[e.jsx("div",{className:"absolute top-1/2 right-0 left-0 z-10 h-px -translate-y-1/2 bg-red-400"}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"ghost-default",children:"Ghost Default"}),e.jsx(t,{variant:"link",children:"Link"})]})]})]})]}),e.jsxs("div",{className:"bg-muted mt-6 rounded-lg p-4",children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"Melhorias de Alinhamento"}),e.jsxs("ul",{className:"flex list-disc flex-col gap-1 pl-5 text-sm",children:[e.jsxs("li",{children:["Definido ",e.jsx("code",{children:"leading-none"})," para todos os botões"]}),e.jsxs("li",{children:["Substituído o padding vertical por altura fixa (",e.jsx("code",{children:"py-0"})," + altura definida)"]}),e.jsxs("li",{children:["Adicionado ",e.jsx("code",{children:"leading-tight"})," para cada tamanho de botão"]}),e.jsxs("li",{children:["Envolvido o conteúdo do botão em"," ",e.jsx("code",{children:"inline-flex items-center"})]}),e.jsx("li",{children:"Estilos CSS globais para garantir consistência em todos os navegadores"})]})]})]})},V=["SquircleVariant","VerticalAlignment"];var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Buttons with squircle shape for modern, smoother corners. Squircle combines square and circle shapes to create more natural looking UI elements. This feature can be enabled/disabled globally at the theme level."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-4">\r
      <h3 className="mb-3 text-lg font-medium">Squircle Buttons</h3>\r
\r
      <div className="flex flex-wrap items-end gap-6">\r
        <div className="flex flex-col items-center gap-2">\r
          <Button>Default Squircle</Button>\r
          <span className="font-mono text-xs">squircle=true (default)</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button squircle={false}>Regular Button</Button>\r
          <span className="font-mono text-xs">squircle=false</span>\r
        </div>\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">\r
        Automatic Radius Handling\r
      </h4>\r
      <div className="flex flex-wrap items-end gap-6">\r
        <div className="flex flex-col items-center gap-2">\r
          <Button>Standard Button</Button>\r
          <span className="font-mono text-xs">Uses squircle</span>\r
          <span className="text-muted-foreground text-xs">\r
            16px border radius\r
          </span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button radius="full">Full Radius Button</Button>\r
          <span className="font-mono text-xs">radius="full"</span>\r
          <span className="text-muted-foreground text-xs">\r
            Disables squircle automatically\r
          </span>\r
        </div>\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">Smoothing Comparison</h4>\r
      <div className="flex flex-wrap items-end gap-6">\r
        <div className="flex flex-col items-center gap-2">\r
          <Button squircleSmoothing="sm">Subtle</Button>\r
          <span className="font-mono text-xs">squircleSmoothing="sm"</span>\r
          <span className="text-muted-foreground text-xs">Less curve</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button squircleSmoothing="md">Medium</Button>\r
          <span className="font-mono text-xs">\r
            squircleSmoothing="md" (default)\r
          </span>\r
          <span className="text-muted-foreground text-xs">Balanced</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Button squircleSmoothing="lg">Strong</Button>\r
          <span className="font-mono text-xs">squircleSmoothing="lg"</span>\r
          <span className="text-muted-foreground text-xs">iOS-like</span>\r
        </div>\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">With Different Sizes</h4>\r
      <div className="flex flex-wrap items-end gap-3">\r
        <Button size="xs">Extra Small</Button>\r
        <Button size="sm">Small</Button>\r
        <Button size="default">Default</Button>\r
        <Button size="lg">Large</Button>\r
        <Button size="icon" icon="heart" aria-label="Like" />\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">With Different Variants</h4>\r
      <div className="flex flex-wrap gap-3">\r
        <Button variant="default">Default</Button>\r
        <Button variant="secondary">Secondary</Button>\r
        <Button variant="destructive">Destructive</Button>\r
        <Button variant="outline">Outline</Button>\r
        <Button variant="ghost">Ghost</Button>\r
      </div>\r
\r
      <h4 className="text-md mt-6 mb-3 font-medium">With Outline Variant</h4>\r
      <div className="flex flex-wrap gap-4">\r
        <Button variant="outline">Outline + Squircle</Button>\r
        <Button variant="outline" icon="settings">\r
          With Icon\r
        </Button>\r
        <Button variant="outline" squircle={false}>\r
          Outline Only\r
        </Button>\r
      </div>\r
\r
      <div className="mt-6 grid grid-cols-2 gap-4">\r
        <div className="bg-muted flex h-40 flex-col items-center justify-center rounded-md p-4">\r
          <Button className="h-32 w-32" size="lg">\r
            Square\r
          </Button>\r
          <span className="mt-2 font-mono text-xs">Equal width/height</span>\r
        </div>\r
        <div className="bg-muted flex h-40 flex-col items-center justify-center rounded-md p-4">\r
          <Button className="h-16 w-32" size="lg">\r
            Rectangle\r
          </Button>\r
          <span className="mt-2 font-mono text-xs">Different width/height</span>\r
        </div>\r
      </div>\r
\r
      <div className="bg-muted mt-6 rounded-lg p-4">\r
        <h4 className="text-md mb-2 font-medium">About Squircle</h4>\r
        <p className="mb-2 text-sm">\r
          Squircles are shapes with perfectly smooth corners that adapt to the\r
          element's dimensions. Unlike regular border-radius, squircles maintain\r
          a consistent appearance regardless of size and aspect ratio, similar\r
          to iOS app icons.\r
        </p>\r
        <h5 className="mt-3 mb-1 text-sm font-medium">Smart Behavior:</h5>\r
        <ul className="flex list-disc flex-col gap-1 pl-5 text-sm">\r
          <li>\r
            When squircle is enabled, a border-radius of 16px is automatically\r
            applied for proper rendering\r
          </li>\r
          <li>\r
            If you use <code>radius="full"</code>, squircle is automatically\r
            disabled to allow perfect circles\r
          </li>\r
          <li>\r
            Can be enabled/disabled globally at the theme level via{" "}\r
            <code>uiSettings.useSquircleButtons</code>\r
          </li>\r
        </ul>\r
        <h5 className="mt-3 mb-1 text-sm font-medium">Implementation:</h5>\r
        <p className="mb-2 text-sm">\r
          This implementation uses dynamic SVG masks that are calculated based\r
          on each button's dimensions. The squircle shape is generated at\r
          runtime using cubic Bézier curves, ensuring perfect proportions\r
          regardless of size.\r
        </p>\r
        <h5 className="mt-3 mb-1 text-sm font-medium">Usage:</h5>\r
        <pre className="overflow-auto rounded-sm bg-zinc-200 p-2 text-xs">\r
          {\`// Enabled by default (with 16px border radius)
<Button>Default Button</Button>

// Disable squircle
<Button squircle={false}>Regular Button</Button>

// Automatically disables squircle
<Button radius="full">Round Button</Button>

// Adjust smoothing
<Button squircleSmoothing="lg">Strong Smoothing</Button>

// Global theme setting
myTheme.uiSettings = { useSquircleButtons: true }\`}\r
        </pre>\r
      </div>\r
    </div>
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,o,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Demonstrando o alinhamento vertical aprimorado para texto e ícones nos botões."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-4">\r
      <h3 className="mb-3 text-lg font-medium">Alinhamento Vertical</h3>\r
\r
      <div className="flex flex-col gap-6">\r
        <div>\r
          <h4 className="text-md mb-2 font-medium">Comparação por Tamanho</h4>\r
          <div className="bg-muted relative rounded-lg p-4">\r
            <div className="absolute top-1/2 right-0 left-0 z-10 h-px -translate-y-1/2 bg-red-400" />\r
\r
            <div className="flex items-start gap-3">\r
              <Button size="xs">Extra Small</Button>\r
              <Button size="sm">Small</Button>\r
              <Button size="default">Default</Button>\r
              <Button size="lg">Large</Button>\r
              <Button size="icon" icon="heart" aria-label="Like" />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 className="text-md mb-2 font-medium">Alinhamento com Ícones</h4>\r
          <div className="bg-muted relative rounded-lg p-4">\r
            <div className="absolute top-1/2 right-0 left-0 z-10 h-px -translate-y-1/2 bg-red-400" />\r
\r
            <div className="flex items-start gap-3">\r
              <Button size="xs" icon="mail">\r
                Email\r
              </Button>\r
              <Button size="sm" icon="mail">\r
                Email\r
              </Button>\r
              <Button icon="mail">Email</Button>\r
              <Button size="lg" icon="mail">\r
                Email\r
              </Button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 className="text-md mb-2 font-medium">Diferentes Variantes</h4>\r
          <div className="bg-muted relative rounded-lg p-4">\r
            <div className="absolute top-1/2 right-0 left-0 z-10 h-px -translate-y-1/2 bg-red-400" />\r
\r
            <div className="flex items-start gap-3">\r
              <Button variant="default">Default</Button>\r
              <Button variant="secondary">Secondary</Button>\r
              <Button variant="destructive">Destructive</Button>\r
              <Button variant="outline">Outline</Button>\r
              <Button variant="ghost">Ghost</Button>\r
              <Button variant="ghost-default">Ghost Default</Button>\r
              <Button variant="link">Link</Button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="bg-muted mt-6 rounded-lg p-4">\r
        <h4 className="text-md mb-2 font-medium">Melhorias de Alinhamento</h4>\r
        <ul className="flex list-disc flex-col gap-1 pl-5 text-sm">\r
          <li>\r
            Definido <code>leading-none</code> para todos os botões\r
          </li>\r
          <li>\r
            Substituído o padding vertical por altura fixa (<code>py-0</code> +\r
            altura definida)\r
          </li>\r
          <li>\r
            Adicionado <code>leading-tight</code> para cada tamanho de botão\r
          </li>\r
          <li>\r
            Envolvido o conteúdo do botão em{" "}\r
            <code>inline-flex items-center</code>\r
          </li>\r
          <li>\r
            Estilos CSS globais para garantir consistência em todos os\r
            navegadores\r
          </li>\r
        </ul>\r
      </div>\r
    </div>
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};export{n as SquircleVariant,s as VerticalAlignment,V as __namedExportsOrder,k as default};
