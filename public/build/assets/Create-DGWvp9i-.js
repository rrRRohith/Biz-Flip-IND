import{W as h,r as j,j as e,Y as u,a as m}from"./app-aINRV8qI.js";import{A as N}from"./AdminAuthenticated-ClrMzHfV.js";import{I as t}from"./InputError-R7OZ7Xxi.js";import{T as o}from"./TextInput-bEgivJzu.js";import{I as c}from"./InputLabel-BSagH4UG.js";import"./SelectOption-CxdanP-s.js";import"./DynamicSelect-zrOeBI4g.js";import{F as v}from"./Form-BsKp8AWs.js";import{P as f}from"./PermissionAllow-DmVCzBgw.js";import"./Dropdown-tHpxPYL4.js";import"./AdminHeader-ZAqlJY8j.js";import"./Dropdown-DxVU1EVf.js";import"./listen-Bj9dGC-x.js";import"./useWindow-BmX5Dja0.js";import"./Anchor-B3cpeJ7_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BqrtqZ2h.js";import"./BootstrapModalManager-BMHOV86L.js";import"./Fade-eTD1w2IO.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BqFK5Q3S.js";import"./ToastNotification-C1To0QtD.js";import"./ReactToastify-kKLAh2vx.js";import"./react-select.esm-Cjk9PGXw.js";import"./Select-49a62830.esm-UlFy35rz.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CnkmXK7q.js";import"./hoist-non-react-statics.cjs-bC0g9jjn.js";import"./ElementChildren-DPqvOh15.js";import"./Col-BsNzkVBI.js";function ae({auth:l,countries:b}){const{data:a,setData:n,post:d,errors:r,reset:g}=h({image:"",name:"",code:"",status:"1",position:"",country:""}),x=s=>{s.preventDefault(),d(route("admin.province.store"))};j.useState("");const i=(s,p)=>{n(s,p)};return e.jsxs(N,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Create"}),children:[e.jsx(u,{title:"Province Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(f,{permission:"Province Create",message:"true",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(o,{id:"province-code",type:"text",name:"code",className:"form-control",value:a.code,onChange:s=>i("code",s.target.value),autoComplete:"off"}),e.jsx(t,{message:r.code,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(t,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3"})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};