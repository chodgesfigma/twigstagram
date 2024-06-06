import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as m}from"./index-CleY8y_P.js";import{L as o}from"./index-CJuOCMJj.js";import{B as d}from"./button-Xx2KT_8X.js";import{d as u}from"./queriesAndMutations-C1C6liHq.js";import{u as g}from"./AuthContext-CP3wofEh.js";import{u as x,M as f}from"./index-Df8taAry.js";import{Q as h}from"./QueryClientProvider-CirB6fzW.js";import{Q as y}from"./queryClient-Oa8pBn12.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";import"./index-BYV5VcoI.js";import"./extends-CCbyfPlC.js";import"./utils-sGJAxcXv.js";const j=()=>{const{mutate:r,isSuccess:t}=u(),c=x(),{user:p}=g();return m.useEffect(()=>{t&&c(0)},[t]),e.jsx("section",{className:"topbar",children:e.jsxs("div",{className:"flex-between py-4 px-5",children:[e.jsx(o,{to:"/",className:"flex gap-3 items-center",children:e.jsx("img",{src:"/assets/images/twigma.svg",alt:"logo",width:130,height:325})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(d,{variant:"ghost",className:"shad-button_ghost",onClick:()=>r(),children:e.jsx("img",{src:"/assets/icons/logout-icon-1.svg",alt:"logout"})}),e.jsx(o,{to:"/profile/${user.id}",className:"flex-center gap-3",children:e.jsx("img",{src:p.imageUrl||"/assets/icons/profile-placeholder.svg",alt:"profile",className:"h-8 w-8 rounded-full"})})]})]})})},l=j,q={title:"Twigstagram/shared/Topbar",component:l,parameters:{layout:"fullscreen"}},b=`
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #09090A; /* Update with your dark-2 color from Tailwind CSS */
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .topbar-logo {
    width: 130px;
    height: 32.5px;
  }

  .topbar-profile {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .topbar-icons {
    display: flex;
    gap: 2rem; /* Adjust the gap between icons */
  }
`,v=new y,w=r=>e.jsxs("div",{children:[e.jsx("style",{children:b}),e.jsx(h,{client:v,children:e.jsx(f,{children:e.jsx(l,{...r})})})]}),s=w.bind({});s.args={user:{id:"user_id",imageUrl:"/assets/icons/profile-placeholder.svg"}};var i,a,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => <div>
    <style>{styles}</style>
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Topbar {...args} />
      </MemoryRouter>
    </QueryClientProvider>
  </div>`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const B=["Default"];export{s as Default,B as __namedExportsOrder,q as default};
