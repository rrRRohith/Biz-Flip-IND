import{W as u,r as h,j as s,Y as w}from"./app-DeIulrNp.js";import"./Dropdown-B2zrbQTw.js";import"./index-B_47ad35.js";import"./PermissionAllow-D4mDavJj.js";import j from"./Wrapper-Dbs3xVdg.js";import{I as t}from"./InputError-BN8rasy3.js";import"./SideBar-dAXgY-ZB.js";import"./ProfileDropdown-BkhfP03_.js";import"./SideBar-DX9JbPKP.js";import"./ProfileDropdown-DcniqSRF.js";import"./Header-C4U1HA_6.js";import"./Dropdown-DXQFQa0d.js";import"./useMergedRefs-5d4600-3.js";import"./SSRProvider-B_rcikjq.js";import"./useWindow-BlJgaEBS.js";import"./NavbarContext-C1avH50O.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-5DiJ1gBl.js";import"./ReactToastify-CHxw7-MP.js";function G({user:v,queryParams:f=null,auth:i,success:n,error:m}){const{data:e,setData:d,post:c,errors:a,reset:l}=u({password:"",confirm_password:""});h.useState();const o=(r,x)=>{d(r,x)},p=async r=>{r.preventDefault(),await c(route("customer.password.store"),{preserveScroll:!0,onSuccess:()=>{l("confirm_password","password")}})};return s.jsxs(s.Fragment,{children:[s.jsx(w,{title:"Security"}),s.jsx(j,{success:n,error:m,user:i.user,children:s.jsx("main",{className:"py-6",children:s.jsx("div",{className:"container px-3 px-lg-6",children:s.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[s.jsx("div",{className:"text-xl font-bold",children:"Change your password"}),s.jsx("div",{children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"mb-5 mt-5",children:s.jsx("h4",{children:"Change password"})}),s.jsxs("div",{className:"row g-5",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"New password"})," ",s.jsx("input",{type:"password",value:e.password,onChange:r=>o("password",r.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),s.jsx(t,{message:a.password})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Conform new password"})," ",s.jsx("input",{type:"password",value:e.confirm_password,onChange:r=>o("confirm_password",r.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),s.jsx(t,{message:a.confirm_password})]})]}),s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end mt-10",children:[s.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{G as default};
