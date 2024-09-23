import{W as j,j as e,Y as f,a as t}from"./app-DlBo-Ddu.js";import{A as N}from"./AdminAuthenticated-Cwz-whZZ.js";import{I as o}from"./InputError-D2IcB-2I.js";import"./TextInput-BvGAEKB4.js";import{I as m}from"./InputLabel-BQ4CPb_c.js";import"./SelectOption-DxoaB5bg.js";import{S as v}from"./react-select.esm-J2nNCklL.js";import"./DynamicSelect-fmHR695F.js";import{P as b}from"./PermissionAllow-Df6yLocr.js";import"./Dropdown-BVbw0fPm.js";import"./AdminHeader-XlUGR1mB.js";import"./Dropdown-BwnBMcYa.js";import"./useMergedRefs-C2W-uHs9.js";import"./useWindow-CDGLn9yS.js";import"./NavbarContext-BzvdvPuO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BojA_d6S.js";import"./BootstrapModalManager-Dqv4GHEH.js";import"./Fade-CmSRjtXj.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BWjN7ugN.js";import"./ToastNotification-BOPASvEd.js";import"./ReactToastify-DpQD6jLC.js";import"./Select-49a62830.esm-Dx6Tf3xm.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-BhcPD_Qg.js";import"./hoist-non-react-statics.cjs-CyvW9ahi.js";function ae({staff:a,permissions:g,auth:d,success:w,error:_,roles:p}){const{data:r,setData:c,post:h,errors:l,reset:C}=j({firstname:a?a.firstname:null,lastname:a?a.lastname:null,email:a?a.email:null,phone:a?a.phone:null,role_id:a?a.role_id:null,role_name:a?a.role_name:"Select an option",_method:a?"PUT":"POST"}),i=(s,n)=>{c(s,n)},x=(s,n)=>{c(s,n.value)},u=async s=>{s.preventDefault(),await h(route(a?"admin.staff.update":"admin.staff.store",{staff:a?a.id:null}),{preserveScroll:!0})};return e.jsxs(N,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:" staff ? 'Staff/Edit' : 'Staff/Create'"}),children:[e.jsx(f,{title:"Seller Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Seller"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.staff.index"),children:"Staffs"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:a?"Edit":"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Staff Edit",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"mb-35",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx("input",{value:r.firstname,onChange:s=>i("firstname",s.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(o,{message:l.firstname})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:s=>i("lastname",s.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(o,{message:l.lastname})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{htmlFor:"email",className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx("input",{value:r.email,onChange:s=>i("email",s.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(o,{message:l.email})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone Number"}),e.jsx("input",{value:r.phone,type:"tel",onChange:s=>i("phone",s.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(o,{message:l.phone})]})]}),e.jsx("div",{className:"mb-35 mt-5",children:e.jsx("h4",{children:"Roles and responsibility"})}),e.jsx("div",{className:"row g-5",children:e.jsx("div",{className:"col-md-6  mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Role"}),e.jsx(v,{autocomplete:"off",defaultValue:{value:r.role_id,label:r.role_name},onChange:s=>{x("role_id",s)},name:"role_id",options:p}),e.jsx(o,{message:l.role_id})]})})}),e.jsx("div",{className:"mb-35 mt-5",children:e.jsx("h4",{children:a?e.jsx(e.Fragment,{children:"Change password"}):e.jsx(e.Fragment,{children:"Set password"})})}),e.jsxs("div",{className:"row ",children:[e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"New Password"}),e.jsx("input",{type:"password",autoComplete:"new-password",value:r.password,onChange:s=>i("password",s.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(o,{message:l.password})]}),e.jsxs("div",{className:"col-md-6  mb-3",children:[e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Conform New Password"}),e.jsx("input",{type:"password",value:r.confirm_password,onChange:s=>i("confirm_password",s.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(o,{message:l.confirm_password})]}),e.jsx("div",{className:"col-12 text-start",children:e.jsx("button",{type:"submit",className:"btn  btn-success",children:"Save changes"})})]})]})})})})})})})]})})]})}export{ae as default};
