import{W as N,j as s,Y as f,a as n}from"./app-BLep4a_v.js";import{A as v}from"./AdminAuthenticated-C_X71V-Q.js";import{I as o}from"./InputError-MwQouRg7.js";import{T as g}from"./TextInput-iQfSGAgu.js";import{I as y}from"./InputLabel-BD_rBY5P.js";import"./SelectOption-Brd902jQ.js";import{F as R}from"./Form-D5LcdqkV.js";import"./PermissionAllow-Bw1nH26z.js";import"./Dropdown-C-ntnV8Y.js";import"./AdminHeader-BYBR0nrz.js";import"./Dropdown-DaR_s_6f.js";import"./listen-bVhbO5mt.js";import"./useWindow-CgfjH_xT.js";import"./Anchor-Djf5sm_B.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Ce-lT5oA.js";import"./BootstrapModalManager-Z6MjKZtp.js";import"./Fade-DuAq4uZE.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-YoWyG7So.js";import"./ToastNotification-xqERWRZD.js";import"./react-select.esm-DoLQJpXZ.js";import"./Select-49a62830.esm-DGV6mq4z.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-Cd21aDf9.js";import"./hoist-non-react-statics.cjs-BNmgfxmt.js";import"./ElementChildren-p4mpdXRK.js";import"./Col-D7iuAHVK.js";function ls({role:a,permissionsList:r,queryParams:k=null,auth:d}){const h=a.permissions?Object.keys(a.permissions).map(e=>parseInt(e)):[],{data:l,setData:m,post:p,errors:t,reset:w}=N({permissions:h||[],name:a.name||"",_method:"PUT"}),x=e=>{e.preventDefault(),p(route("admin.role-responsibilities.update",a.id))},j=(e,i)=>{m(e,i)},c=a.name==="admin"||a.name==="seller",b=e=>{let i;l.permissions.includes(e)?i=l.permissions.filter(u=>u!==e):i=[...l.permissions,e],m("permissions",i)};return s.jsxs(v,{user:d.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Edit"}),children:[s.jsx(f,{title:"Role & Responsibilities Edit"}),s.jsx("div",{className:"content-wrapper me-4",children:s.jsxs("div",{className:"container-full",children:[s.jsx("div",{className:"content-header",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"d-flex flex-column",children:[s.jsx("h4",{className:"page-title",children:" Edit Role & Responsibilities"}),s.jsx("div",{className:"d-inline-block align-items-center mt-2",children:s.jsx("nav",{children:s.jsxs("ol",{className:"breadcrumb",children:[s.jsx("li",{className:"breadcrumb-item",children:s.jsxs(n,{href:route("admin.index"),children:[s.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),s.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:s.jsx(n,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),s.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),s.jsx("div",{className:"col-lg-6"})]})}),s.jsx("section",{className:"content",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"box",children:s.jsx("div",{className:"box-body",children:s.jsxs("form",{onSubmit:x,children:[s.jsx("div",{className:"form-body",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-12",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-md-12 mb-3",children:s.jsxs("div",{className:"form-group",children:[s.jsx(y,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),s.jsx(g,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:c?null:e=>j("name",e.target.value),readOnly:c,autoComplete:"off"}),s.jsx(o,{message:t.name,className:"mt-2 col-12"})]})})})}),s.jsxs("div",{className:"col-lg-12",children:[s.jsx("h5",{className:"mb-25",children:s.jsx("u",{children:"Allow Permissions"})}),s.jsx(o,{message:t.permissions,className:"mt-2 col-12"}),Object.keys(r).map(e=>s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold",children:e}),s.jsx("div",{className:"row my-3",children:r[e].map(i=>s.jsx("div",{className:"col-lg-2 col-6",children:s.jsx(R.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:l.permissions.includes(i.id),onChange:()=>b(i.id)})},i.id))})]},e))]})]})}),s.jsx("div",{className:"form-actions mt-10",children:s.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",s.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{ls as default};
