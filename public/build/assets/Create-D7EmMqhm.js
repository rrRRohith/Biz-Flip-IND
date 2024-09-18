import{W as g,r as f,j as e,Y as v,a as n}from"./app-Pjbz9rYH.js";import{A as y}from"./AdminAuthenticated-wOrGQIjr.js";import{I as c}from"./InputError-BA7-z4Ie.js";import{T as d}from"./TextInput-1ThCrAtl.js";import{I as x}from"./InputLabel-DhpQLjLO.js";import{S as w}from"./SelectOption-_pKVvUJl.js";import{P as h}from"./PermissionAllow-BcOslNQQ.js";import{F as C}from"./Form-BMETrvbK.js";import"./Dropdown-CE-gu5nq.js";import"./AdminHeader-_apOtq20.js";import"./Dropdown-DEtUw4_i.js";import"./listen-CXcLQhiT.js";import"./useWindow-D1noL5Ib.js";import"./Anchor-CzasrsdE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DM2p7FV6.js";import"./BootstrapModalManager-CAgHfQD6.js";import"./Fade-DmKvq5CQ.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B4fOitUh.js";import"./ToastNotification-B-ms-Kd4.js";import"./ReactToastify-RpSR8sos.js";import"./react-select.esm-37mHKYsA.js";import"./Select-49a62830.esm-XB9h2VnO.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-D3TS66FT.js";import"./hoist-non-react-statics.cjs-7fYuGb7i.js";import"./ElementChildren-BOoAykDs.js";import"./Col-CQ8WsTOI.js";function le({auth:p}){const{data:i,setData:t,post:j,errors:l,reset:I}=g({image:"",facility_name:"",status:"1",position:""}),u=s=>{s.preventDefault(),j(route("admin.facilities.store"))},[m,o]=f.useState(""),N=s=>{const a=s.target.files[0];a&&(t("image",a),o(URL.createObjectURL(a)))},b=()=>{t("image",""),o("")},r=(s,a)=>{t(s,a)};return e.jsxs(y,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Facility/Create"}),children:[e.jsx(v,{title:"Facility Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Facility"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(n,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(n,{href:route("admin.facilities.index"),children:"Facility"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Facility Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"facility-name",type:"text",name:"facility_name",className:"form-control",value:i.facility_name,onChange:s=>r("facility_name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:l.facility_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(w,{onChange:s=>r("position",s),value:i.position}),e.jsx(c,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(C.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(c,{message:l.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{le as default};
