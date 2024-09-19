import{W as j,j as e,Y as f,a as m}from"./app-DGcPT93w.js";import{A as N}from"./AdminAuthenticated-Cl3EdnFJ.js";import{I as t}from"./InputError-DBFVGOME.js";import{T as c}from"./TextInput-581OwfLo.js";import{I as o}from"./InputLabel-CQjHHn1U.js";import{S as b}from"./SelectOption-DrvHXWFg.js";import{P as n}from"./PermissionAllow-OqVDtoCL.js";import{F as v}from"./Form-DmyVsDt-.js";import"./Dropdown-JMLxGVnK.js";import"./AdminHeader-B4D60kLt.js";import"./Dropdown-MESXEvvB.js";import"./listen-Bt4XJasV.js";import"./useWindow-D9aa1zUv.js";import"./Anchor-JiuRFRLY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DcXM4ciK.js";import"./BootstrapModalManager-BHOFIej6.js";import"./Fade-D2fF8ueo.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DoBXUtod.js";import"./ToastNotification-Cc9nZ-qW.js";import"./ReactToastify-CJ9odq_r.js";import"./react-select.esm-si0qQOIO.js";import"./Select-49a62830.esm-s-SAzgtz.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-D16BCuMK.js";import"./hoist-non-react-statics.cjs-D0e2qXh8.js";import"./ElementChildren-CdD-0tOA.js";import"./Col-BhZyhgWN.js";function ae({label_item:a,queryParams:g=null,auth:d}){const{data:r,setData:p,post:x,errors:l,reset:y}=j({color:a.color||"",name:a.name||"",status:a.status=1,priority:a.priority||"",_method:"PUT"}),h=s=>{s.preventDefault(),x(route("admin.feature-label.update",a.id))},i=(s,u)=>{p(s,u)};return e.jsxs(N,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Edit"}),children:[e.jsx(f,{title:"Feature Label Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(n,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Feature Label Edit",message:!0,children:e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(c,{id:"color",type:"color",name:"color",className:"form-control",value:r.color,onChange:s=>i("color",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(b,{onChange:s=>i("priority",s),value:r.priority,defaultValue:r.priority}),e.jsx(t,{message:l.priority,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(t,{message:l.status,className:"mt-2 col-12"})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};