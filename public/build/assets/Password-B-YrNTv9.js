import{W as u,r as w,j as s,Y as h}from"./app-1W61cHJj.js";import"./Dropdown-ChLCVAVs.js";import"./index-BCmS9dAa.js";import"./PermissionAllow-Bx3DGybq.js";import j from"./Wrapper-CtLR49R1.js";import{I as d}from"./InputError-BASFLVK9.js";import"./Header-CY5r9c7k.js";import"./ProfileDropdown-Bq2lP1JJ.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";function O({user:v,queryParams:f=null,auth:t,success:n,error:l}){const{data:e,setData:c,post:i,errors:a,reset:m}=u({password:"",confirm_password:""});w.useState();const o=(r,x)=>{c(r,x)},p=async r=>{r.preventDefault(),await i(route("account.password.store"),{preserveScroll:!0,onSuccess:()=>{m("confirm_password","password","old_password")}})};return s.jsxs(s.Fragment,{children:[s.jsx(h,{title:"Security"}),s.jsx(j,{success:n,error:l,user:t.user,children:s.jsx("main",{className:"py-6",children:s.jsx("div",{className:"container px-3",children:s.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[s.jsx("div",{className:"text-xl font-bold",children:"Change your password"}),s.jsx("div",{children:"Update your password for enhanced security."}),s.jsx("div",{children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"mb-5 mt-5",children:s.jsx("h4",{children:"Change password"})}),s.jsxs("div",{className:"row g-5",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Old password"})," ",s.jsx("input",{type:"password",value:e.old_password,onChange:r=>o("old_password",r.target.value),name:"old_password",id:"password",placeholder:"Your current secret password",className:"form-control"})]}),s.jsx(d,{message:a.old_password})]}),s.jsx("div",{className:"col-md-6"}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"New password"})," ",s.jsx("input",{type:"password",value:e.password,onChange:r=>o("password",r.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),s.jsx(d,{message:a.password})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Conform new password"})," ",s.jsx("input",{type:"password",value:e.confirm_password,onChange:r=>o("confirm_password",r.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),s.jsx(d,{message:a.confirm_password})]})]}),s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end mt-10",children:[s.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})})]})})]})})})})]})}export{O as default};
