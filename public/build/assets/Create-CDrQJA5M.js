import{W as u,j as e,Y as j,a as m}from"./app-roG2FNUw.js";import{A as b}from"./AdminAuthenticated-DNPupbbI.js";import{I as i}from"./InputError-Jzku-OSV.js";import{T as o}from"./TextInput-B9R2TIkH.js";import{I as t}from"./InputLabel-C9vz4-Mk.js";import{S as f}from"./SelectOption-BX5xyMj9.js";import{P as c}from"./PermissionAllow-Cm40Mk8e.js";import{F as N}from"./Form-Dg4WnBuh.js";import"./Dropdown-CBoT_l1M.js";import"./AdminHeader-CRZhssXX.js";import"./Dropdown-Bctdksvb.js";import"./useMergedRefs-CmHmiumL.js";import"./useWindow-Degt0VVA.js";import"./NavbarContext-CzESW6Li.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BADdu3Kb.js";import"./BootstrapModalManager-CJOGpHN0.js";import"./Fade-AzVfb9Pt.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BhalhK_u.js";import"./ToastNotification-C7CNvKRm.js";import"./ReactToastify-B_HsxkDQ.js";import"./react-select.esm-GrO0h9QA.js";import"./Select-49a62830.esm-CinIhGgm.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-CKqmVXxi.js";import"./hoist-non-react-statics.cjs-DQXGR7Nj.js";import"./ElementChildren-CV429Z5j.js";import"./Col-DDr-n03o.js";function ee({auth:n}){const{data:a,setData:d,post:x,errors:r,reset:v}=u({color:"#a1a1a1",name:"",status:"1",priority:""}),h=s=>{s.preventDefault(),x(route("admin.feature-label.store"))},l=(s,p)=>{d(s,p)};return e.jsxs(b,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Create"}),children:[e.jsx(j,{title:"Feature Label Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(c,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(c,{permission:"Feature Label Create",message:!0,children:e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(o,{id:"color",type:"color",name:"color",className:"form-control",value:a.color,onChange:s=>l("color",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(f,{onChange:s=>l("priority",s),value:a.priority}),e.jsx(i,{message:r.priority,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(N.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(i,{message:r.status,className:"mt-2 col-12"})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ee as default};
