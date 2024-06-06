import{j as t}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import{b as c}from"./index-CGdB1uJD.js";import{L as l}from"./index-CJuOCMJj.js";import{c as d,M as p}from"./index-Df8taAry.js";import{Q as u}from"./queryClient-Oa8pBn12.js";import{Q as y}from"./QueryClientProvider-CirB6fzW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";const b=()=>{const{pathname:o}=d();return t.jsx("section",{className:"bottom-bar",children:c.map(e=>{const s=o===e.route;return t.jsxs(l,{to:e.route,className:`${s&&"bg-primary-500 rounded-[10px]"} flex-center flex-col gap-1 p-2 transition`,children:[t.jsx("img",{src:e.imgURL,alt:e.label,width:16,height:16,className:` ${s&&"invert-white"}`}),t.jsx("p",{className:"tiny-medium text-light-2",children:e.label})]},e.label)})})},m=b,M={title:"Twigstagram/shared/Bottombar",component:m,parameters:{layout:"fullscreen"}},x=`
    .bottom-bar {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: sticky;
      bottom: 0;
      background-color: #09090A; /* Update with your dark-2 color from Tailwind CSS */
      padding: 1rem 2rem;
    }
  `,h=new u,f=o=>t.jsxs("div",{children:[t.jsx("style",{children:x}),t.jsx(y,{client:h,children:t.jsx(p,{children:t.jsx(m,{...o})})})]}),r=f.bind({});r.args={};var a,i,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => <div>
      <style>{styles}</style>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Bottombar {...args} />
        </MemoryRouter>
      </QueryClientProvider>
    </div>`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,M as default};
