<<<<<<<< HEAD:public/build/assets/Password-CrCzEDJX.js
import{W as u,r as h,j as s,Y as w}from"./app-BGtL1idN.js";import"./Dropdown-DDOkRdOL.js";import"./index-BRq7hUFn.js";import"./PermissionAllow-BAFgtCD_.js";import j from"./Wrapper-BS0duTRN.js";import{I as t}from"./InputError-Cpiixjv0.js";import"./SideBar-CD6QWsuY.js";import"./ProfileDropdown-BBvSlXsa.js";import"./SideBar-D_1LNZkm.js";import"./ProfileDropdown-BwVM8N8v.js";import"./Header-CpdR-JbE.js";import"./Dropdown-BXLrSV09.js";import"./useMergedRefs-Dg_ayAfe.js";import"./SSRProvider-BlUcPW8O.js";import"./useWindow-DVdbgo_X.js";import"./NavbarContext-De51xqev.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-B1x0Gbjx.js";import"./ReactToastify-BO42l_97.js";function G({user:v,queryParams:f=null,auth:i,success:n,error:m}){const{data:e,setData:d,post:c,errors:a,reset:l}=u({password:"",confirm_password:""});h.useState();const o=(r,x)=>{d(r,x)},p=async r=>{r.preventDefault(),await c(route("customer.password.store"),{preserveScroll:!0,onSuccess:()=>{l("confirm_password","password")}})};return s.jsxs(s.Fragment,{children:[s.jsx(w,{title:"Security"}),s.jsx(j,{success:n,error:m,user:i.user,children:s.jsx("main",{className:"py-6",children:s.jsx("div",{className:"container px-3 px-lg-6",children:s.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[s.jsx("div",{className:"text-xl font-bold",children:"Change your password"}),s.jsx("div",{children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"mb-5 mt-5",children:s.jsx("h4",{children:"Change password"})}),s.jsxs("div",{className:"row g-5",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"New password"})," ",s.jsx("input",{type:"password",value:e.password,onChange:r=>o("password",r.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),s.jsx(t,{message:a.password})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Conform new password"})," ",s.jsx("input",{type:"password",value:e.confirm_password,onChange:r=>o("confirm_password",r.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),s.jsx(t,{message:a.confirm_password})]})]}),s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end mt-10",children:[s.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{G as default};
========
import{W as u,r as h,j as s,Y as w}from"./app-Cv4J_obM.js";import"./Dropdown-Ct4HCL4H.js";import"./index-3INN4Kof.js";import"./PermissionAllow-Dt8qbyn1.js";import j from"./Wrapper-C4tH-pW2.js";import{I as t}from"./InputError-ClMS-C0l.js";import"./SideBar-BogV7l6P.js";import"./ProfileDropdown-Cpl2XHge.js";import"./SideBar-BRnhVNDz.js";import"./ProfileDropdown-FS4tmf6s.js";import"./Header-CNlSSr3n.js";import"./Dropdown-B0ayaTV9.js";import"./useMergedRefs-DoppZSNR.js";import"./SSRProvider-7ChdXwuB.js";import"./useWindow-BdZtvrSg.js";import"./NavbarContext-BP5HhpAZ.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-Lp0O2Nnd.js";import"./ReactToastify-CXeg6P4H.js";function G({user:v,queryParams:f=null,auth:i,success:n,error:m}){const{data:e,setData:d,post:c,errors:a,reset:l}=u({password:"",confirm_password:""});h.useState();const o=(r,x)=>{d(r,x)},p=async r=>{r.preventDefault(),await c(route("customer.password.store"),{preserveScroll:!0,onSuccess:()=>{l("confirm_password","password")}})};return s.jsxs(s.Fragment,{children:[s.jsx(w,{title:"Security"}),s.jsx(j,{success:n,error:m,user:i.user,children:s.jsx("main",{className:"py-6",children:s.jsx("div",{className:"container px-3 px-lg-6",children:s.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[s.jsx("div",{className:"text-xl font-bold",children:"Change your password"}),s.jsx("div",{children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"mb-5 mt-5",children:s.jsx("h4",{children:"Change password"})}),s.jsxs("div",{className:"row g-5",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"New password"})," ",s.jsx("input",{type:"password",value:e.password,onChange:r=>o("password",r.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),s.jsx(t,{message:a.password})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Conform new password"})," ",s.jsx("input",{type:"password",value:e.confirm_password,onChange:r=>o("confirm_password",r.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),s.jsx(t,{message:a.confirm_password})]})]}),s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end mt-10",children:[s.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{G as default};
>>>>>>>> 0489afd8f35de188ae832589e863e72546ac7e17:public/build/assets/Password-CJmLXOaM.js
