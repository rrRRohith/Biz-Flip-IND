import{W as j,j as e,Y as b,a as t}from"./app-0W1APbZD.js";import{A as u}from"./AdminAuthenticated-C0hlx0vw.js";import{I as c}from"./InputError-BTdU5CJ-.js";import{T as N}from"./TextInput-VnbFSOT6.js";import{I as f}from"./InputLabel-BoePyv6J.js";import"./SelectOption-Bf26HkLh.js";import{F as v}from"./Form-BQKbulGt.js";import"./PermissionAllow-XOsh9qMJ.js";import"./Dropdown-CW2G7CTq.js";import"./AdminHeader-D0hVflSJ.js";import"./Dropdown-BmG8wlXD.js";import"./useMergedRefs-HxUQZzs9.js";import"./SSRProvider-BeKkBxRJ.js";import"./useWindow-BVM9NObz.js";import"./NavbarContext-DZLMWwwg.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BE_wqAHt.js";import"./BootstrapModalManager--MDj59b2.js";import"./Fade-DuU66Ubb.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DrR2ekXN.js";import"./ToastNotification-Cpprh-6R.js";import"./ReactToastify-DCaH1Z7c.js";import"./react-select.esm-du94KXuT.js";import"./Select-49a62830.esm-D1Uq-j2Y.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CYSajrDR.js";import"./hoist-non-react-statics.cjs-CxVew3Ct.js";import"./ElementChildren-XbLsi9nT.js";import"./Col-Uo_Yr2Nm.js";function ie({permissionsList:r,auth:o}){const{data:a,setData:l,post:n,errors:m,reset:g}=j({name:"",permissions:[]}),d=s=>{s.preventDefault(),n(route("admin.role-responsibilities.store"))},h=(s,i)=>{l(s,i)},x=s=>{let i;a.permissions.includes(s)?i=a.permissions.filter(p=>p!==s):i=[...a.permissions,s],l("permissions",i)};return e.jsxs(u,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Create"}),children:[e.jsx(b,{title:"Role & Responsibilities Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Create Role & Responsibilities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(f,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(N,{id:"country-name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>h("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:m.name,className:"mt-2 col-12"})]})})})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsx("h5",{className:"mb-25",children:e.jsx("u",{children:"Allow Permissions"})}),e.jsx(c,{message:m.permissions,className:"mt-2 col-12"}),Object.keys(r).map(s=>e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold",children:s}),e.jsx("div",{className:"row my-3",children:r[s].map(i=>e.jsx("div",{className:"col-lg-2 col-6",children:e.jsx(v.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:a.permissions.includes(i.id),onChange:()=>x(i.id)})},i.id))})]},s))]})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})]})})]})}export{ie as default};
