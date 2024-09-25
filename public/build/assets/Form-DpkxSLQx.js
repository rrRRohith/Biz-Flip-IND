import{W as j,j as e,Y as f,a as c}from"./app-BEKZL5x1.js";import{A as N}from"./AdminAuthenticated-C84VsSbs.js";import{I as o}from"./InputError-CQY9oav2.js";import"./TextInput-D9Rh1z9Y.js";import{I as m}from"./InputLabel-DCVzNYft.js";import"./SelectOption-73h60BrO.js";import{S as v}from"./react-select.esm-CXe0J0MK.js";import"./DynamicSelect-D7_wODRj.js";import{P as b}from"./PermissionAllow-BbQxP1Mu.js";import"./Dropdown-DGn_KBEm.js";import"./AdminHeader-D58O1fOc.js";import"./Dropdown-B6WWaJh1.js";import"./useMergedRefs-ClJ-oN-K.js";import"./SSRProvider-3O-wO1Tx.js";import"./useWindow-Q1YcEkHp.js";import"./NavbarContext-BMTg8RK9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-RfT9s9Qk.js";import"./BootstrapModalManager-DKhs2w8P.js";import"./Fade-BYEExXAF.js";import"./index-mzBByKJf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-O0cBrXff.js";import"./ReactToastify-BH1m3FPZ.js";import"./Select-49a62830.esm-BkUeoM76.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CEhjs0WD.js";import"./hoist-non-react-statics.cjs-BsFk7wc9.js";function re({staff:s,permissions:g,auth:d,success:w,error:_,roles:p}){const{data:r,setData:t,post:h,errors:l,reset:C}=j({firstname:s?s.firstname:null,lastname:s?s.lastname:null,email:s?s.email:null,phone:s?s.phone:null,role_id:s?s.role_id:null,role_name:s?s.role_name:"Select an option",_method:s?"PUT":"POST"}),i=(a,n)=>{t(a,n)},x=(a,n)=>{t(a,n.value)},u=async a=>{a.preventDefault(),await h(route(s?"admin.staff.update":"admin.staff.store",{staff:s?s.id:null}),{preserveScroll:!0})};return e.jsxs(N,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:" staff ? 'Staff/Edit' : 'Staff/Create'"}),children:[e.jsx(f,{title:s?"Update staff":"Create Staff"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("h4",{className:"page-title",children:[" ",s?"Update staff":"Create Staff"]}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.staff.index"),children:"Staffs"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:s?"Edit":"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Staff Edit",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"mb-35",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx("input",{value:r.firstname,onChange:a=>i("firstname",a.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(o,{message:l.firstname})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:a=>i("lastname",a.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(o,{message:l.lastname})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{htmlFor:"email",className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx("input",{value:r.email,onChange:a=>i("email",a.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(o,{message:l.email})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone Number"}),e.jsx("input",{value:r.phone,type:"tel",onChange:a=>i("phone",a.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(o,{message:l.phone})]})]}),e.jsx("div",{className:"mb-35 mt-5",children:e.jsx("h4",{children:"Roles and responsibility"})}),e.jsx("div",{className:"row g-5",children:e.jsx("div",{className:"col-md-6  mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Role"}),e.jsx(v,{autocomplete:"off",defaultValue:{value:r.role_id,label:r.role_name},onChange:a=>{x("role_id",a)},name:"role_id",options:p}),e.jsx(o,{message:l.role_id})]})})}),e.jsx("div",{className:"mb-35 mt-5",children:e.jsx("h4",{children:s?e.jsx(e.Fragment,{children:"Change password"}):e.jsx(e.Fragment,{children:"Set password"})})}),e.jsxs("div",{className:"row ",children:[e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"New Password"}),e.jsx("input",{type:"password",autoComplete:"new-password",value:r.password,onChange:a=>i("password",a.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(o,{message:l.password})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Conform New Password"}),e.jsx("input",{type:"password",value:r.confirm_password,onChange:a=>i("confirm_password",a.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(o,{message:l.confirm_password})]}),e.jsx("div",{className:"col-12 text-start",children:e.jsx("button",{type:"submit",className:"btn  btn-success",children:"Save"})})]})]})})})})})})})]})})]})}export{re as default};
