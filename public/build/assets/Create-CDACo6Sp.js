import{W as b,r as f,j as e,Y as v,a as p}from"./app-DFq0yVq5.js";import{A as w}from"./AdminAuthenticated-DlW8TvGl.js";import{I as l}from"./InputError-C6If64A0.js";import{T as c}from"./TextInput-BzFiV9Qx.js";import{I as m}from"./InputLabel-Mq9RNF7I.js";import{S as C}from"./SelectOption-5NCeUafb.js";import{P as x}from"./PermissionAllow-D4zdlkCR.js";import{F as I}from"./Form-BwkQELOW.js";import"./Dropdown-BD6YUdaC.js";import"./AdminHeader-DRI7EmxH.js";import"./Dropdown-ZvaNFalz.js";import"./useMergedRefs-yvt1E_s8.js";import"./SSRProvider-DDBakYgc.js";import"./useWindow-Cc31lRmn.js";import"./NavbarContext-CTX-ZvmD.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DVM2IyrG.js";import"./BootstrapModalManager-CYE1Ntzd.js";import"./Fade-DKm1TWrQ.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRehnRrc.js";import"./ToastNotification-IPnVRav-.js";import"./ReactToastify-C65YYl7Y.js";import"./react-select.esm-e9BEaLmb.js";import"./Select-49a62830.esm-BHV2-F_G.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-C8zpll8h.js";import"./hoist-non-react-statics.cjs-Dzr6DZUi.js";import"./ElementChildren-BxU3Ffu4.js";import"./Col-B3YNppD2.js";function le({auth:h}){const{data:t,setData:o,post:j,errors:i,reset:_}=b({image:"",title:"",status:"1",position:"",icon:""}),u=s=>{s.preventDefault(),j(route("admin.ad_purposes.store"))},[n,d]=f.useState(""),N=s=>{const a=s.target.files[0];a&&(o("image",a),d(URL.createObjectURL(a)))},g=()=>{o("image",""),d("")},r=(s,a)=>{o(s,a)};return e.jsxs(w,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Purpose/Create"}),children:[e.jsx(v,{title:"Ad Purpose Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Ad Purpose"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(x,{permission:"Ad Purpose Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.ad_purposes.index"),children:"Ad Pupose"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(x,{permission:"Ad Purpose Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"purpose-name",type:"text",name:"title",className:"form-control",value:t.title,onChange:s=>r("title",s.target.value),autoComplete:"off"}),e.jsx(l,{message:i.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(m,{className:"fw-700 fs-16 form-label form-group__label",children:["Bootstrap icon class (eg bi-car-front-fill)",e.jsxs("span",{className:"ms-5 text-danger",children:[" - ",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Open icon list"})]})]}),e.jsx(c,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:t.icon,onChange:s=>r("icon",s.target.value),autoComplete:"off"}),e.jsx(l,{message:i.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>r("position",s),value:t.position}),e.jsx(l,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(I.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(l,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{le as default};