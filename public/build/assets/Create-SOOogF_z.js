<<<<<<<< HEAD:public/build/assets/Create-CRMpOjJt.js
import{W as b,r as f,j as e,Y as v,a as x}from"./app-1W61cHJj.js";import{A as w}from"./AdminAuthenticated-KOuZwmJM.js";import{I as r}from"./InputError-BASFLVK9.js";import{T as c}from"./TextInput-CYkU9j_F.js";import{I as o}from"./InputLabel-B3CMY0KR.js";import{S as C}from"./SelectOption-DQTI-68e.js";import{P as p}from"./PermissionAllow-Bx3DGybq.js";import{F as y}from"./Form-oYx8AsQl.js";import"./Dropdown-ChLCVAVs.js";import"./AdminHeader-9zNdcYjW.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BCmS9dAa.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./react-select.esm-BfdzhtfU.js";import"./Select-49a62830.esm-VWcMs1ZE.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-D9bVkl2G.js";import"./hoist-non-react-statics.cjs-CLxNQMLt.js";import"./ElementChildren-DM8QJiJN.js";import"./Col-D-jEGrYa.js";function le({auth:h}){const{data:t,setData:m,post:j,errors:i,reset:I}=b({image:"",title:"",status:"1",position:"",icon:""}),u=s=>{s.preventDefault(),j(route("admin.ad_types.store"))},[n,d]=f.useState(""),N=s=>{const a=s.target.files[0];a&&(m("image",a),d(URL.createObjectURL(a)))},g=()=>{m("image",""),d("")},l=(s,a)=>{m(s,a)};return e.jsxs(w,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Type/Create"}),children:[e.jsx(v,{title:"Ad Type Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Ad Type"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Ad Type Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.ad_types.index"),children:"Ad Pupose"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Ad Type Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"type-name",type:"text",name:"title",className:"form-control",value:t.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(r,{message:i.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(o,{className:"fw-700 fs-16 form-label form-group__label",children:["Icon",e.jsxs("span",{className:"ms-5 text-danger",children:[" (",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Get from icon name"}),")"]})]}),e.jsx(c,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:t.icon,onChange:s=>l("icon",s.target.value),autoComplete:"off"}),e.jsx(r,{message:i.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>l("position",s),value:t.position}),e.jsx(r,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(r,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{le as default};
========
import{W as b,r as f,j as e,Y as v,a as x}from"./app-3mR5dcr4.js";import{A as w}from"./AdminAuthenticated-BlwLajFx.js";import{I as r}from"./InputError-Du3SBvs4.js";import{T as c}from"./TextInput-BkBK5nx2.js";import{I as o}from"./InputLabel-HAmvNK3t.js";import{S as C}from"./SelectOption-Ck9FV90D.js";import{P as p}from"./PermissionAllow-DG8o1wpc.js";import{F as y}from"./Form-Tq_CSPBj.js";import"./Dropdown-ZEr-Y8i8.js";import"./AdminHeader-BW3uHsMP.js";import"./Dropdown-CdjKfX0W.js";import"./useMergedRefs-Cxa2RhTo.js";import"./useWindow-DWsydW6I.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DIiL02v3.js";import"./BootstrapModalManager-BNNgC5FG.js";import"./Fade-RO9t0QGZ.js";import"./index-CXQI1DE5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Ce627oE5.js";import"./ReactToastify-CLUolKJn.js";import"./react-select.esm-SN6pvjJu.js";import"./Select-49a62830.esm-JzTYEEs2.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-DGv-1Euc.js";import"./hoist-non-react-statics.cjs-i33gionF.js";import"./ElementChildren-CL-qOvQn.js";import"./Col-Hgdnk8cn.js";function le({auth:h}){const{data:t,setData:m,post:j,errors:i,reset:I}=b({image:"",title:"",status:"1",position:"",icon:""}),u=s=>{s.preventDefault(),j(route("admin.ad_types.store"))},[n,d]=f.useState(""),N=s=>{const a=s.target.files[0];a&&(m("image",a),d(URL.createObjectURL(a)))},g=()=>{m("image",""),d("")},l=(s,a)=>{m(s,a)};return e.jsxs(w,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Type/Create"}),children:[e.jsx(v,{title:"Ad Type Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Ad Type"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Ad Type Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.ad_types.index"),children:"Ad Pupose"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Ad Type Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"type-name",type:"text",name:"title",className:"form-control",value:t.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(r,{message:i.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(o,{className:"fw-700 fs-16 form-label form-group__label",children:["Icon",e.jsxs("span",{className:"ms-5 text-danger",children:[" (",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Get from icon name"}),")"]})]}),e.jsx(c,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:t.icon,onChange:s=>l("icon",s.target.value),autoComplete:"off"}),e.jsx(r,{message:i.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>l("position",s),value:t.position}),e.jsx(r,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(r,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{le as default};
>>>>>>>> c9be03ff60f4a7293e6db07ca2da3faa2a6d6e95:public/build/assets/Create-SOOogF_z.js
