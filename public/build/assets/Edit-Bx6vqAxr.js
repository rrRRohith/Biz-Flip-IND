import{W as j,j as e,Y as f,a as m}from"./app-CdcX4MyJ.js";import{A as N}from"./AdminAuthenticated-BGdADRwR.js";import{I as t}from"./InputError-G43JNiUJ.js";import{T as c}from"./TextInput-D6fDXrsi.js";import{I as o}from"./InputLabel-Dqmi2cxM.js";import{S as b}from"./SelectOption-BEo6Spc6.js";import{P as n}from"./PermissionAllow-caSI3ojy.js";import{F as v}from"./Form-DawC9s6d.js";import"./Dropdown-CuiSu6LE.js";import"./AdminHeader-CCOtrFGI.js";import"./Dropdown-CR2RuJ8A.js";import"./useMergedRefs-B486IWSx.js";import"./useWindow-B4Mn1lKL.js";import"./NavbarContext-B3zFm8h7.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BJNnkTVo.js";import"./BootstrapModalManager-xvHZEziN.js";import"./Fade-AP6juNIG.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DsrmHSXP.js";import"./ToastNotification-BtSOpUeR.js";import"./ReactToastify-DwzKbxFo.js";import"./react-select.esm-Brvn33xO.js";import"./Select-49a62830.esm-Dz0vORRY.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-zlV8i5Jr.js";import"./hoist-non-react-statics.cjs-CxGmMPfu.js";import"./ElementChildren-CPjWqled.js";import"./Col-C2arcxbf.js";function ae({label_item:a,queryParams:g=null,auth:d}){const{data:r,setData:p,post:x,errors:l,reset:y}=j({color:a.color||"",name:a.name||"",status:a.status=1,priority:a.priority||"",_method:"PUT"}),h=s=>{s.preventDefault(),x(route("admin.feature-label.update",a.id))},i=(s,u)=>{p(s,u)};return e.jsxs(N,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Edit"}),children:[e.jsx(f,{title:"Feature Label Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(n,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Feature Label Edit",message:!0,children:e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(c,{id:"color",type:"color",name:"color",className:"form-control",value:r.color,onChange:s=>i("color",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(b,{onChange:s=>i("priority",s),value:r.priority,defaultValue:r.priority}),e.jsx(t,{message:l.priority,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(t,{message:l.status,className:"mt-2 col-12"})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{ae as default};
