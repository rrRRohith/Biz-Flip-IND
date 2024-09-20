<<<<<<<< HEAD:public/build/assets/Login-_BpQ2L4k.js
import{j as e,q as v,W as w,r as n,Y as y,a as C}from"./app-BFziaLc8.js";import{G as k}from"./GuestLayout-JNEplTE-.js";import{I as l}from"./InputError-DtpJH6bB.js";import{P as E}from"./PrimaryButton-BUNGw4Z0.js";import{T as m}from"./TextInput-CALHCXSJ.js";function I({className:t="",...o}){return e.jsx("input",{...o,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+t})}function T({status:t,canResetPassword:o}){const{captcha_validation_disable:p}=v().props,{data:r,setData:c,post:u,processing:x,errors:a,reset:h}=w({email:"",password:"",remember:!1,captcha:p==!0?"DEFAULT":""}),[i,g]=n.useState(!1),[j,f]=n.useState(route("captcha.create")),N=()=>{g(!i)},d=()=>{f(`${route("captcha.create")}?${Date.now()}`)};n.useEffect(()=>()=>{h("password")},[]),n.useEffect(()=>{(a.captcha||a.email||a.password)&&d()},[a]);const b=s=>{s.preventDefault(),u(route("login"))};return e.jsxs(k,{children:[e.jsx(y,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:b,children:[e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-user"})}),e.jsx(m,{id:"email",type:"email",name:"email",value:r.email,className:"form-control ps-15 bg-transparent",autoComplete:"username",isFocused:!0,onChange:s=>c("email",s.target.value),autoFocus:!0}),e.jsx(l,{message:a.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-lock"})}),e.jsx(m,{id:"password",type:i?"text":"password",name:"password",value:r.password,className:"form-control ps-15 bg-transparent",autoComplete:"current-password",onChange:s=>c("password",s.target.value)}),e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{role:"button",className:`bi ${i?"bi-eye":"bi-eye-slash"}`,onClick:N})}),e.jsx(l,{message:a.password,className:"mt-2 col-12"})]})}),p==!1&&e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-help-alt"})}),e.jsx(m,{id:"captcha",type:"text",name:"captcha",value:r.captcha,className:"form-control ps-15 bg-transparent",placeholder:"Enter CAPTCHA",onChange:s=>c("captcha",s.target.value)}),e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("img",{src:j,alt:"captcha",className:"captcha-image"})}),e.jsx("span",{role:"button",className:"input-group-text bg-transparent",children:e.jsx("i",{onClick:d,className:"ti-reload"})}),a.captcha&&e.jsx(l,{message:"Invalid Captcha code",className:"mt-2 col-12"})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"checkbox",children:[e.jsx(I,{name:"remember",checked:r.remember,onChange:s=>c("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"col-lg-12 text-end",children:[o&&e.jsx(C,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx("div",{className:"col-12 text-center",children:e.jsx(E,{className:"btn btn-danger mt-10",disabled:x,children:"SIGN IN"})})]})]})]}),e.jsxs("div",{className:"flex  items-center text-center mt-4",children:[e.jsx("hr",{}),e.jsx("h6",{className:"text-bold text-center mt-15",children:"No account yet? Get started for free!"}),e.jsx("div",{class:"mt-25",children:e.jsx("a",{href:"/sign-up",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign Up"})}),e.jsx("br",{})]})]})}export{T as default};
========
import{j as e,q as v,W as w,r as n,Y as y,a as C}from"./app-BFbjwEJ5.js";import{G as k}from"./GuestLayout-Cda8Yaet.js";import{I as l}from"./InputError-B9j3TZCL.js";import{P as E}from"./PrimaryButton-Xj-fPKxX.js";import{T as m}from"./TextInput-GTeuPY3N.js";function I({className:t="",...o}){return e.jsx("input",{...o,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+t})}function T({status:t,canResetPassword:o}){const{captcha_validation_disable:p}=v().props,{data:r,setData:c,post:u,processing:x,errors:a,reset:h}=w({email:"",password:"",remember:!1,captcha:p==!0?"DEFAULT":""}),[i,g]=n.useState(!1),[j,f]=n.useState(route("captcha.create")),N=()=>{g(!i)},d=()=>{f(`${route("captcha.create")}?${Date.now()}`)};n.useEffect(()=>()=>{h("password")},[]),n.useEffect(()=>{(a.captcha||a.email||a.password)&&d()},[a]);const b=s=>{s.preventDefault(),u(route("login"))};return e.jsxs(k,{children:[e.jsx(y,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:b,children:[e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-user"})}),e.jsx(m,{id:"email",type:"email",name:"email",value:r.email,className:"form-control ps-15 bg-transparent",autoComplete:"username",isFocused:!0,onChange:s=>c("email",s.target.value),autoFocus:!0}),e.jsx(l,{message:a.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-lock"})}),e.jsx(m,{id:"password",type:i?"text":"password",name:"password",value:r.password,className:"form-control ps-15 bg-transparent",autoComplete:"current-password",onChange:s=>c("password",s.target.value)}),e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{role:"button",className:`bi ${i?"bi-eye":"bi-eye-slash"}`,onClick:N})}),e.jsx(l,{message:a.password,className:"mt-2 col-12"})]})}),p==!1&&e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-help-alt"})}),e.jsx(m,{id:"captcha",type:"text",name:"captcha",value:r.captcha,className:"form-control ps-15 bg-transparent",placeholder:"Enter CAPTCHA",onChange:s=>c("captcha",s.target.value)}),e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("img",{src:j,alt:"captcha",className:"captcha-image"})}),e.jsx("span",{role:"button",className:"input-group-text bg-transparent",children:e.jsx("i",{onClick:d,className:"ti-reload"})}),a.captcha&&e.jsx(l,{message:"Invalid Captcha code",className:"mt-2 col-12"})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"checkbox",children:[e.jsx(I,{name:"remember",checked:r.remember,onChange:s=>c("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"col-lg-12 text-end",children:[o&&e.jsx(C,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx("div",{className:"col-12 text-center",children:e.jsx(E,{className:"btn btn-danger mt-10",disabled:x,children:"SIGN IN"})})]})]})]}),e.jsxs("div",{className:"flex  items-center text-center mt-4",children:[e.jsx("hr",{}),e.jsx("h6",{className:"text-bold text-center mt-15",children:"No account yet? Get started for free!"}),e.jsx("div",{class:"mt-25",children:e.jsx("a",{href:"/sign-up",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign Up"})}),e.jsx("br",{})]})]})}export{T as default};
>>>>>>>> 8a0a76ae1116db8dead3c7caf94f52c29dc22f8f:public/build/assets/Login-BFD4INaN.js
