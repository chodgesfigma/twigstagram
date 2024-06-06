import{j as r}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import{u as b,F as w,C as m}from"./index.esm-BC_vOT9p.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F=({children:e,onSubmit:s})=>r.jsx("form",{onSubmit:s,className:"space-y-6",children:e}),l=({children:e})=>r.jsx("div",{className:"space-y-2",children:e}),d=({children:e})=>r.jsx("label",{className:"block base-medium text-light-1",children:e}),i=({as:e="input",...s})=>r.jsx(e,{...s,className:"shad-input mt-1 block w-full shadow-sm sm:text-sm rounded-md"}),c=({children:e})=>r.jsx("p",{className:"mt-2 text-sm text-light-4",children:e}),u=({children:e})=>r.jsx("p",{className:"mt-2 text-sm text-red",children:e}),I={title:"Twigstagram/ui/Form",component:F},S=e=>{const s=b();return r.jsx(w,{...s,children:r.jsxs(F,{onSubmit:s.handleSubmit(o=>console.log(o)),children:[r.jsxs(l,{children:[r.jsx(d,{children:"Username"}),r.jsx(m,{name:"username",control:s.control,render:({field:o,fieldState:n})=>r.jsxs(r.Fragment,{children:[r.jsx(i,{as:"input",...o}),r.jsx(c,{children:"Enter your username"}),n.error&&r.jsx(u,{children:n.error.message})]})})]}),r.jsxs(l,{children:[r.jsx(d,{children:"Password"}),r.jsx(m,{name:"password",control:s.control,render:({field:o,fieldState:n})=>r.jsxs(r.Fragment,{children:[r.jsx(i,{as:"input",type:"password",...o}),r.jsx(c,{children:"Enter your password"}),n.error&&r.jsx(u,{children:n.error.message})]})})]})]})})},t=S.bind({});t.args={};const y=e=>{const s=b({defaultValues:{username:"",password:""}});return r.jsx(w,{...s,children:r.jsxs(F,{onSubmit:s.handleSubmit(o=>console.log(o)),children:[r.jsx(m,{name:"username",control:s.control,rules:{required:"Username is required"},render:({field:o,fieldState:n})=>r.jsxs(l,{children:[r.jsx(d,{children:"Username"}),r.jsx(i,{as:"input",...o}),r.jsx(c,{children:"Enter your username"}),n.error&&r.jsx(u,{children:n.error.message})]})}),r.jsx(m,{name:"password",control:s.control,rules:{required:"Password is required"},render:({field:o,fieldState:n})=>r.jsxs(l,{children:[r.jsx(d,{children:"Password"}),r.jsx(i,{as:"input",type:"password",...o}),r.jsx(c,{children:"Enter your password"}),n.error&&r.jsx(u,{children:n.error.message})]})})]})})},a=y.bind({});a.args={};var p,x,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const methods = useForm();
  return <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <Controller name="username" control={methods.control} render={({
          field,
          fieldState
        }) => <>
                <FormControl as="input" {...field} />
                <FormDescription>Enter your username</FormDescription>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </>} />
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <Controller name="password" control={methods.control} render={({
          field,
          fieldState
        }) => <>
                <FormControl as="input" type="password" {...field} />
                <FormDescription>Enter your password</FormDescription>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </>} />
        </FormItem>
      </Form>
    </FormProvider>;
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,g,f;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  return <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <Controller name="username" control={methods.control} rules={{
        required: 'Username is required'
      }} render={({
        field,
        fieldState
      }) => <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl as="input" {...field} />
              <FormDescription>Enter your username</FormDescription>
              {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
            </FormItem>} />
        <Controller name="password" control={methods.control} rules={{
        required: 'Password is required'
      }} render={({
        field,
        fieldState
      }) => <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl as="input" type="password" {...field} />
              <FormDescription>Enter your password</FormDescription>
              {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
            </FormItem>} />
      </Form>
    </FormProvider>;
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["DefaultForm","WithValidation"];export{t as DefaultForm,a as WithValidation,L as __namedExportsOrder,I as default};
