import{W as u,r as h,j as s,Y as w}from"./app-Pjbz9rYH.js";import"./Dropdown-CE-gu5nq.js";import"./index-DM2p7FV6.js";import"./PermissionAllow-BcOslNQQ.js";import j from"./Wrapper--SB3MFzY.js";import{I as t}from"./InputError-BA7-z4Ie.js";import"./SideBar-CQfQB6Xr.js";import"./ProfileDropdown-tDMWrGp-.js";import"./Header-BCzNl1Hp.js";import"./Dropdown-DEtUw4_i.js";import"./listen-CXcLQhiT.js";import"./useWindow-D1noL5Ib.js";import"./Anchor-CzasrsdE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-B-ms-Kd4.js";import"./ReactToastify-RpSR8sos.js";function U({user:v,queryParams:f=null,auth:n,success:i,error:d}){const{data:e,setData:c,post:l,errors:a,reset:m}=u({password:"",confirm_password:""});h.useState();const o=(r,x)=>{c(r,x)},p=async r=>{r.preventDefault(),await l(route("seller.password.store"),{preserveScroll:!0,onSuccess:()=>{m("confirm_password","password")}})};return s.jsxs(s.Fragment,{children:[s.jsx(w,{title:"Security"}),s.jsx(j,{success:i,error:d,user:n.user,children:s.jsx("main",{className:"py-6",children:s.jsx("div",{className:"container px-3 px-lg-6",children:s.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[s.jsx("div",{className:"text-xl font-bold",children:"Change your password"}),s.jsx("div",{children:"Update your password for enhanced security."}),s.jsx("div",{children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"mb-5 mt-5",children:s.jsx("h4",{children:"Change password"})}),s.jsxs("div",{className:"row g-5",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"New password"})," ",s.jsx("input",{type:"password",value:e.password,onChange:r=>o("password",r.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),s.jsx(t,{message:a.password})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Conform new password"})," ",s.jsx("input",{type:"password",value:e.confirm_password,onChange:r=>o("confirm_password",r.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),s.jsx(t,{message:a.confirm_password})]})]}),s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end mt-10",children:[s.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})})]})})]})})})})]})}export{U as default};
