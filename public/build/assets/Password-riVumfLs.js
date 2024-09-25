import{W as u,r as w,j as s,Y as h}from"./app-CVpwYE9P.js";import"./Dropdown-P-QDNcVZ.js";import"./index-DN9VZM2a.js";import"./PermissionAllow-CPI5K9D7.js";import j from"./Wrapper-DL8-RZlH.js";import{I as d}from"./InputError-Bz1aC3kX.js";import"./Header-C0WHjnMq.js";import"./ProfileDropdown-DVXz1-wH.js";import"./Dropdown-Dp0-k-F5.js";import"./useMergedRefs-CQHdrhiR.js";import"./SSRProvider-DGBg1T-M.js";import"./useWindow-DWtcNps6.js";import"./NavbarContext-7YKe9biM.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BUuELAn3.js";import"./ReactToastify-CfG5r9Q7.js";import"./TopMenu-D9BGnATh.js";function U({user:v,queryParams:f=null,auth:t,success:n,error:l}){const{data:e,setData:i,post:c,errors:a,reset:m}=u({password:"",confirm_password:""});w.useState();const o=(r,x)=>{i(r,x)},p=async r=>{r.preventDefault(),await c(route("account.password.store"),{preserveScroll:!0,onSuccess:()=>{m("confirm_password","password","old_password")}})};return s.jsxs(s.Fragment,{children:[s.jsx(h,{title:"Security"}),s.jsx(j,{success:n,error:l,user:t.user,children:s.jsx("main",{className:"py-6",children:s.jsx("div",{className:"container px-3",children:s.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[s.jsx("div",{className:"text-xl font-bold",children:"Change your password"}),s.jsx("div",{children:"Update your password for enhanced security."}),s.jsx("div",{children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"mb-5 mt-5",children:s.jsx("h4",{children:"Change password"})}),s.jsxs("div",{className:"row g-5",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Old password"})," ",s.jsx("input",{type:"password",value:e.old_password,onChange:r=>o("old_password",r.target.value),name:"old_password",id:"password",placeholder:"Your current secret password",className:"form-control"})]}),s.jsx(d,{message:a.old_password})]}),s.jsx("div",{className:"col-md-6"}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"New password"})," ",s.jsx("input",{type:"password",value:e.password,onChange:r=>o("password",r.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),s.jsx(d,{message:a.password})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Conform new password"})," ",s.jsx("input",{type:"password",value:e.confirm_password,onChange:r=>o("confirm_password",r.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),s.jsx(d,{message:a.confirm_password})]})]}),s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end mt-10",children:[s.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{U as default};
