import{j as e}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import{L as o,N as h}from"./index-CJuOCMJj.js";import{s as j}from"./index-CGdB1uJD.js";import{B as v}from"./button-Xx2KT_8X.js";import{u as y,I as N}from"./AuthContext-CP3wofEh.js";import{d as b}from"./queriesAndMutations-C1C6liHq.js";import{L}from"./Loader-DUht5tEw.js";import{u as C,c as S,M as w}from"./index-Df8taAry.js";import{Q}from"./QueryClientProvider-CirB6fzW.js";import{Q as R}from"./queryClient-Oa8pBn12.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";import"./index-BYV5VcoI.js";import"./extends-CCbyfPlC.js";import"./utils-sGJAxcXv.js";const I=()=>{const a=C(),{pathname:d}=S(),{user:t,setUser:u,setIsAuthenticated:p,isLoading:g}=y(),{mutate:x}=b(),f=async s=>{s.preventDefault(),x(),p(!1),u(N),a("/sign-in")};return e.jsxs("nav",{className:"leftsidebar",children:[e.jsxs("div",{className:"flex flex-col gap-11",children:[e.jsx(o,{to:"/",className:"flex gap-3 items-center",children:e.jsx("img",{src:"/assets/images/twigma.svg",alt:"logo",width:170,height:36})}),g||!t.email?e.jsx("div",{className:"h-14",children:e.jsx(L,{})}):e.jsxs(o,{to:`/profile/${t.id}`,className:"flex gap-3 items-center",children:[e.jsx("img",{src:t.imageUrl||"/assets/icons/profile-placeholder.svg",alt:"profile",className:"h-14 w-14 rounded-full"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"body-bold",children:t.name}),e.jsxs("p",{className:"small-regular text-light-3",children:["@",t.username]})]})]}),e.jsx("ul",{className:"flex flex-col gap-6",children:j.map(s=>{const i=d===s.route;return e.jsx("li",{className:`leftsidebar-link group ${i&&"bg-primary-500"}`,children:e.jsxs(h,{to:s.route,className:"flex gap-4 items-center p-4",children:[e.jsx("img",{src:s.imgURL,alt:s.label,className:`group-hover:invert-white ${i&&"invert-white"}`}),s.label]})},s.label)})})]}),e.jsxs(v,{variant:"ghost",className:"shad-button_ghost",onClick:s=>f(s),children:[e.jsx("img",{src:"/assets/icons/logout-icon-1.svg",alt:"logout"}),e.jsx("p",{className:"small-medium lg:base-medium",children:"Logout"})]})]})},m=I,K={title:"Twigstagram/shared/LeftSidebar",component:m,parameters:{layout:"fullscreen"}},U=`
    .leftsidebar {
      display: flex;
      flex-direction: column;
      gap: 11px;
      padding: 10px;
    }
  `,_=new R,A=a=>e.jsxs("div",{children:[e.jsx("style",{children:U}),e.jsx(Q,{client:_,children:e.jsx(w,{children:e.jsx(m,{...a})})})]}),r=A.bind({});r.args={};var l,n,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div>
      <style>{styles}</style>
      {/* Wrap your component with QueryClientProvider and provide the queryClient instance */}
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LeftSidebar {...args} />
        </MemoryRouter>
      </QueryClientProvider>
    </div>`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const V=["Default"];export{r as Default,V as __namedExportsOrder,K as default};
