<<<<<<<< HEAD:public/build/assets/Edit-DdrU_HSk.js
import{W as f,j as e,Y as j,a as c}from"./app-1W61cHJj.js";import{A as N}from"./AdminAuthenticated-KOuZwmJM.js";import{I as m}from"./InputError-BASFLVK9.js";import{T as o}from"./TextInput-CYkU9j_F.js";import{I as t}from"./InputLabel-B3CMY0KR.js";import{D as b}from"./DynamicMultiSelect-DCCroTM1.js";import{F as v}from"./Form-oYx8AsQl.js";import{P as g}from"./PermissionAllow-Bx3DGybq.js";import"./Dropdown-ChLCVAVs.js";import"./AdminHeader-9zNdcYjW.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BCmS9dAa.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./Select-49a62830.esm-VWcMs1ZE.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-D9bVkl2G.js";import"./hoist-non-react-statics.cjs-CLxNQMLt.js";import"./ElementChildren-DM8QJiJN.js";import"./Col-D-jEGrYa.js";function ae({subscriber_item:a,queryParams:_=null,auth:n}){const{data:l,setData:d,post:u,errors:r,reset:y}=f({firstname:a.firstname||"",lastname:a.lastname||"",email_id:a.email_id||"",type_of_needed:a.type_of_needed||[],status:a.status||1,_method:"PUT"}),p=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}],x=s=>{s.preventDefault(),u(route("admin.subscribers.update",a.id))},i=(s,h)=>{d(s,h)};return e.jsxs(N,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Edit"}),children:[e.jsx(j,{title:"News Subscriber Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Subscriber Edit",message:"true",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(o,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:s=>i("firstname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(o,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:s=>i("lastname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(o,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:l.email_id,onChange:s=>i("email_id",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(b,{onChange:s=>i("type_of_needed",s),value:l.type_of_needed,options:p,name:"type_of_needed"}),e.jsx(m,{message:r.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status!==1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};
========
import{W as f,j as e,Y as j,a as c}from"./app-3mR5dcr4.js";import{A as N}from"./AdminAuthenticated-BlwLajFx.js";import{I as m}from"./InputError-Du3SBvs4.js";import{T as o}from"./TextInput-BkBK5nx2.js";import{I as t}from"./InputLabel-HAmvNK3t.js";import{D as b}from"./DynamicMultiSelect-DmGJaBnc.js";import{F as v}from"./Form-Tq_CSPBj.js";import{P as g}from"./PermissionAllow-DG8o1wpc.js";import"./Dropdown-ZEr-Y8i8.js";import"./AdminHeader-BW3uHsMP.js";import"./Dropdown-CdjKfX0W.js";import"./useMergedRefs-Cxa2RhTo.js";import"./useWindow-DWsydW6I.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DIiL02v3.js";import"./BootstrapModalManager-BNNgC5FG.js";import"./Fade-RO9t0QGZ.js";import"./index-CXQI1DE5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Ce627oE5.js";import"./ReactToastify-CLUolKJn.js";import"./Select-49a62830.esm-JzTYEEs2.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-DGv-1Euc.js";import"./hoist-non-react-statics.cjs-i33gionF.js";import"./ElementChildren-CL-qOvQn.js";import"./Col-Hgdnk8cn.js";function ae({subscriber_item:a,queryParams:_=null,auth:n}){const{data:l,setData:d,post:u,errors:r,reset:y}=f({firstname:a.firstname||"",lastname:a.lastname||"",email_id:a.email_id||"",type_of_needed:a.type_of_needed||[],status:a.status||1,_method:"PUT"}),p=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}],x=s=>{s.preventDefault(),u(route("admin.subscribers.update",a.id))},i=(s,h)=>{d(s,h)};return e.jsxs(N,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Edit"}),children:[e.jsx(j,{title:"News Subscriber Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Subscriber Edit",message:"true",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(o,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:s=>i("firstname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(o,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:s=>i("lastname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(o,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:l.email_id,onChange:s=>i("email_id",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(b,{onChange:s=>i("type_of_needed",s),value:l.type_of_needed,options:p,name:"type_of_needed"}),e.jsx(m,{message:r.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status!==1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};
>>>>>>>> c9be03ff60f4a7293e6db07ca2da3faa2a6d6e95:public/build/assets/Edit-DCSqcx2B.js
