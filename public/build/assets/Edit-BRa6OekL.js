import{W as N,j as s,Y as f,a as n}from"./app-CrIMPTAM.js";import{A as v}from"./AdminAuthenticated-CICSNNxp.js";import{I as o}from"./InputError-qI9weO6u.js";import{T as g}from"./TextInput-CkfOZR69.js";import{I as y}from"./InputLabel-bGATYLGW.js";import"./SelectOption-BqxN39FQ.js";import{F as R}from"./Form-tTM0USif.js";import"./PermissionAllow-D4OnqpEt.js";import"./Dropdown-DWna7aM-.js";import"./AdminHeader-DcWke_fp.js";import"./Dropdown-CPvOAh2o.js";import"./useMergedRefs-D5grdPUn.js";import"./useWindow-CTg7VMSB.js";import"./NavbarContext-B2p1Hk4_.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B_5ZoEoG.js";import"./BootstrapModalManager-BCha_iXF.js";import"./Fade-CTsTf2WB.js";import"./index-C-fSIBHE.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BalU_MaD.js";import"./ReactToastify-ByO5j3Yb.js";import"./react-select.esm-evy0UnjZ.js";import"./Select-49a62830.esm-DCQ7NBCt.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CcBqXpXH.js";import"./hoist-non-react-statics.cjs-BszDc22f.js";import"./ElementChildren-D9Pw-O6C.js";import"./Col-C5s0Cj0w.js";function rs({role:a,permissionsList:r,queryParams:k=null,auth:d}){const p=a.permissions?Object.keys(a.permissions).map(e=>parseInt(e)):[],{data:l,setData:m,post:h,errors:t,reset:w}=N({permissions:p||[],name:a.name||"",_method:"PUT"}),x=e=>{e.preventDefault(),h(route("admin.role-responsibilities.update",a.id))},j=(e,i)=>{m(e,i)},c=a.name==="admin"||a.name==="seller"||a.name==="customer",b=e=>{let i;l.permissions.includes(e)?i=l.permissions.filter(u=>u!==e):i=[...l.permissions,e],m("permissions",i)};return s.jsxs(v,{user:d.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Edit"}),children:[s.jsx(f,{title:"Role & Responsibilities Edit"}),s.jsx("div",{className:"content-wrapper me-4",children:s.jsxs("div",{className:"container-full",children:[s.jsx("div",{className:"content-header",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"d-flex flex-column",children:[s.jsx("h4",{className:"page-title",children:" Edit Role & Responsibilities"}),s.jsx("div",{className:"d-inline-block align-items-center mt-2",children:s.jsx("nav",{children:s.jsxs("ol",{className:"breadcrumb",children:[s.jsx("li",{className:"breadcrumb-item",children:s.jsxs(n,{href:route("admin.index"),children:[s.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),s.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:s.jsx(n,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),s.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),s.jsx("div",{className:"col-lg-6"})]})}),s.jsx("section",{className:"content",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"box",children:s.jsx("div",{className:"box-body",children:s.jsxs("form",{onSubmit:x,children:[s.jsx("div",{className:"form-body",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-12",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-md-12 mb-3",children:s.jsxs("div",{className:"form-group",children:[s.jsx(y,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),s.jsx(g,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:c?null:e=>j("name",e.target.value),readOnly:c,autoComplete:"off"}),s.jsx(o,{message:t.name,className:"mt-2 col-12"})]})})})}),s.jsxs("div",{className:"col-lg-12",children:[s.jsx("h5",{className:"mb-25",children:s.jsx("u",{children:"Allow Permissions"})}),s.jsx(o,{message:t.permissions,className:"mt-2 col-12"}),Object.keys(r).map(e=>s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold",children:e}),s.jsx("div",{className:"row my-3",children:r[e].map(i=>s.jsx("div",{className:"col-lg-2 col-6",children:s.jsx(R.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:l.permissions.includes(i.id),onChange:()=>b(i.id)})},i.id))})]},e))]})]})}),s.jsx("div",{className:"form-actions mt-10",children:s.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",s.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})]})})]})}export{rs as default};
