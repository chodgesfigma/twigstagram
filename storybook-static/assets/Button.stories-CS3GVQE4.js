import{j as J}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import{B as R}from"./button-Xx2KT_8X.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BYV5VcoI.js";import"./extends-CCbyfPlC.js";import"./utils-sGJAxcXv.js";const Z={title:"Twigstagram/ui/Button",component:R,argTypes:{variant:{control:{type:"select",options:["default","destructive","outline","secondary","ghost","link"]}},size:{control:{type:"select",options:["default","sm","lg","icon"]}},asChild:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}}},K={default:"bg-primary-500 text-white",destructive:"bg-red-500 text-white",outline:"bg-transparent border border-primary-500 text-primary-500",secondary:"bg-secondary-500 text-white",ghost:"bg-transparent text-primary-500",link:"bg-transparent text-primary-500 underline"},M={default:"h-12 px-6",sm:"h-8 px-4",lg:"h-16 px-8",icon:"h-10 w-10"},s=({variant:q,size:A,...F})=>{const H=["rounded-lg focus:outline-none transition",K[q],M[A]].join(" ");return J.jsx(R,{className:H,...F})},a=s.bind({});a.args={children:"Default Button",variant:"default",size:"default"};const e=s.bind({});e.args={children:"Destructive Button",variant:"destructive",size:"default"};const n=s.bind({});n.args={children:"Outline Button",variant:"outline",size:"default"};const r=s.bind({});r.args={children:"Secondary Button",variant:"secondary",size:"default"};const t=s.bind({});t.args={children:"Ghost Button",variant:"ghost",size:"default"};const o=s.bind({});o.args={children:"Link Button",variant:"link",size:"default"};const i=s.bind({});i.args={children:"Small Button",variant:"default",size:"sm"};const c=s.bind({});c.args={children:"Large Button",variant:"default",size:"lg"};const l=s.bind({});l.args={children:"Icon Button",variant:"default",size:"icon"};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(v=(p=e.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var z,N,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(f=(N=n.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,C,x;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var S,j,G;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(G=(j=o.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var k,D,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,O,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(I=(O=c.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var T,_,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`({
  variant,
  size,
  ...args
}) => {
  // Generate dynamic classNames based on variant and size
  const classNames = ['rounded-lg focus:outline-none transition', variantClasses[variant], sizeClasses[size]].join(' ');
  return <Button className={classNames} {...args} />;
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const $=["Default","Destructive","Outline","Secondary","Ghost","Link","Small","Large","Icon"];export{a as Default,e as Destructive,t as Ghost,l as Icon,c as Large,o as Link,n as Outline,r as Secondary,i as Small,$ as __namedExportsOrder,Z as default};
