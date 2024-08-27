import{W as g,r as f,j as e,Y as v,a as n}from"./app-BgVwgUXI.js";import{A as w}from"./AdminAuthenticated-kucZX0xA.js";import{I as m}from"./InputError-BPooo4gn.js";import{T as d}from"./TextInput-B3jndsi5.js";import{I as x}from"./InputLabel-CMQyocYK.js";import{S as C}from"./SelectOption-CgFyDraV.js";import{P as h}from"./PermissionAllow-Bzpm65F1.js";import{F as I}from"./Form-BtmqB2gy.js";import"./Dropdown-LcSwA3Wo.js";import"./AdminHeader-DVgZFNDe.js";import"./Dropdown-BCEmpKpX.js";import"./listen-BbQaJNIh.js";import"./useWindow-pKE9VyPq.js";import"./Anchor-C5jrjHc8.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-B6AAXhkx.js";import"./BootstrapModalManager-WvlF3dSK.js";import"./Fade-DhyUofpz.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DkYKEvYU.js";import"./ToastNotification-g0vHssf-.js";import"./react-select.esm-CmAyWM2m.js";import"./Select-49a62830.esm-Bha3jcxF.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-CAYFtNzy.js";import"./hoist-non-react-statics.cjs-Bx32C7Zx.js";import"./ElementChildren-Dy5TzRfs.js";import"./Col-8tsZtolO.js";function ie({auth:p}){const{data:t,setData:i,post:u,errors:r,reset:_}=g({image:"",feature_name:"",status:"1",position:""}),j=s=>{s.preventDefault(),u(route("admin.features.store"))},[c,o]=f.useState(""),N=s=>{const a=s.target.files[0];a&&(i("image",a),o(URL.createObjectURL(a)))},b=()=>{i("image",""),o("")},l=(s,a)=>{i(s,a)};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Create"}),children:[e.jsx(v,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(n,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(n,{href:route("admin.features.index"),children:"Features"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Feature Create",message:!0,children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:t.feature_name,onChange:s=>l("feature_name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>l("position",s),value:t.position}),e.jsx(m,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(I.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[c?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:c,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ie as default};
