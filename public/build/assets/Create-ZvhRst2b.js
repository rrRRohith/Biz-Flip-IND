import{W as j,j as e,Y as b,a as t}from"./app-BEKZL5x1.js";import{A as u}from"./AdminAuthenticated-C84VsSbs.js";import{I as c}from"./InputError-CQY9oav2.js";import{T as N}from"./TextInput-D9Rh1z9Y.js";import{I as f}from"./InputLabel-DCVzNYft.js";import"./SelectOption-73h60BrO.js";import{F as v}from"./Form-BdHIxv9h.js";import"./PermissionAllow-BbQxP1Mu.js";import"./Dropdown-DGn_KBEm.js";import"./AdminHeader-D58O1fOc.js";import"./Dropdown-B6WWaJh1.js";import"./useMergedRefs-ClJ-oN-K.js";import"./SSRProvider-3O-wO1Tx.js";import"./useWindow-Q1YcEkHp.js";import"./NavbarContext-BMTg8RK9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-RfT9s9Qk.js";import"./BootstrapModalManager-DKhs2w8P.js";import"./Fade-BYEExXAF.js";import"./index-mzBByKJf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-O0cBrXff.js";import"./ReactToastify-BH1m3FPZ.js";import"./react-select.esm-CXe0J0MK.js";import"./Select-49a62830.esm-BkUeoM76.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CEhjs0WD.js";import"./hoist-non-react-statics.cjs-BsFk7wc9.js";import"./ElementChildren-lweFqnaz.js";import"./Col-CCdRsCjQ.js";function ie({permissionsList:r,auth:o}){const{data:a,setData:l,post:n,errors:m,reset:g}=j({name:"",permissions:[]}),d=s=>{s.preventDefault(),n(route("admin.role-responsibilities.store"))},h=(s,i)=>{l(s,i)},x=s=>{let i;a.permissions.includes(s)?i=a.permissions.filter(p=>p!==s):i=[...a.permissions,s],l("permissions",i)};return e.jsxs(u,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Create"}),children:[e.jsx(b,{title:"Role & Responsibilities Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Create Role & Responsibilities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(f,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(N,{id:"country-name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>h("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:m.name,className:"mt-2 col-12"})]})})})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsx("h5",{className:"mb-25",children:e.jsx("u",{children:"Allow Permissions"})}),e.jsx(c,{message:m.permissions,className:"mt-2 col-12"}),Object.keys(r).map(s=>e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold",children:s}),e.jsx("div",{className:"row my-3",children:r[s].map(i=>e.jsx("div",{className:"col-lg-2 col-6",children:e.jsx(v.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:a.permissions.includes(i.id),onChange:()=>x(i.id)})},i.id))})]},s))]})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})]})})]})}export{ie as default};
