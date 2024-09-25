import{W as h,r as j,j as e,Y as u,a as m}from"./app-BP1ASY9m.js";import{A as N}from"./AdminAuthenticated-C34ejvVU.js";import{I as t}from"./InputError-DaSlgYBj.js";import{T as o}from"./TextInput-DvzZpDDw.js";import{I as c}from"./InputLabel-T-Y_H_Xj.js";import"./SelectOption-D06r9vly.js";import"./DynamicSelect-DHdH5KRu.js";import{F as v}from"./Form-Dsi3Zu4Y.js";import{P as f}from"./PermissionAllow-DDRUKtYh.js";import"./Dropdown-ErKsyKJB.js";import"./AdminHeader-DclFL37X.js";import"./Dropdown-CuM2Misa.js";import"./useMergedRefs-C7i9xQs_.js";import"./useWindow-CjeW6bh8.js";import"./NavbarContext-Ci8xUASw.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B-nPVonw.js";import"./BootstrapModalManager-CtfNojTw.js";import"./Fade-DClmjdQ0.js";import"./index-BggJkT38.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-paLV-kgH.js";import"./ReactToastify-DsLGQMwT.js";import"./react-select.esm-rGoalN4A.js";import"./Select-49a62830.esm-DEzrXKfT.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-B87KevhJ.js";import"./hoist-non-react-statics.cjs-Cpx4YngB.js";import"./ElementChildren-Cc_CeouD.js";import"./Col-zGi4pwZ3.js";function ae({auth:l,countries:b}){const{data:a,setData:n,post:d,errors:r,reset:g}=h({image:"",name:"",code:"",status:"1",position:"",country:""}),x=s=>{s.preventDefault(),d(route("admin.province.store"))};j.useState("");const i=(s,p)=>{n(s,p)};return e.jsxs(N,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Create"}),children:[e.jsx(u,{title:"Province Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(f,{permission:"Province Create",message:"true",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(o,{id:"province-code",type:"text",name:"code",className:"form-control",value:a.code,onChange:s=>i("code",s.target.value),autoComplete:"off"}),e.jsx(t,{message:r.code,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(t,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3"})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{ae as default};
