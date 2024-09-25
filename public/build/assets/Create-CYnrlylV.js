import{W as u,j as e,Y as j,a as m}from"./app-CETDUQ2O.js";import{A as b}from"./AdminAuthenticated-DacAQcbt.js";import{I as i}from"./InputError-e_Ey8jiE.js";import{T as o}from"./TextInput-WAOUh7a2.js";import{I as t}from"./InputLabel-BP5mU-AG.js";import{S as f}from"./SelectOption-P6DGDU44.js";import{P as c}from"./PermissionAllow-COE0flJ2.js";import{F as N}from"./Form-DVLORas_.js";import"./Dropdown-CML94wOg.js";import"./AdminHeader-o-_QN0gK.js";import"./Dropdown-DpxJMqsl.js";import"./useMergedRefs-BNa28cw-.js";import"./SSRProvider-Bs2Xk6Wm.js";import"./useWindow-CYm_A8RM.js";import"./NavbarContext-CfrAZts5.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-qIVcvEOu.js";import"./BootstrapModalManager-DKIU9LXT.js";import"./Fade-Unlbx0yM.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CpSO6HaL.js";import"./ToastNotification-CD6iFmtn.js";import"./ReactToastify-Dgc1NXR6.js";import"./react-select.esm-bo_-XZgN.js";import"./Select-49a62830.esm-CGeBkhnb.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CdfnQj0a.js";import"./hoist-non-react-statics.cjs-B3wnF9yU.js";import"./ElementChildren-DgWzDr-X.js";import"./Col-CDtfLsX6.js";function se({auth:n}){const{data:a,setData:d,post:x,errors:r,reset:v}=u({color:"#a1a1a1",name:"",status:"1",priority:""}),h=s=>{s.preventDefault(),x(route("admin.feature-label.store"))},l=(s,p)=>{d(s,p)};return e.jsxs(b,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Create"}),children:[e.jsx(j,{title:"Feature Label Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(c,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(c,{permission:"Feature Label Create",message:!0,children:e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(o,{id:"color",type:"color",name:"color",className:"form-control",value:a.color,onChange:s=>l("color",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(f,{onChange:s=>l("priority",s),value:a.priority}),e.jsx(i,{message:r.priority,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(N.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(i,{message:r.status,className:"mt-2 col-12"})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{se as default};
