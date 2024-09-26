import{W as g,r as b,j as e,Y as v,a as x}from"./app-m6jwzREc.js";import{A as w}from"./AdminAuthenticated-D-c0Ehnf.js";import{I as l}from"./InputError--WutcOn4.js";import{T as c}from"./TextInput-B_ybNFzz.js";import{I as o}from"./InputLabel-Dix81KfR.js";import{S as C}from"./SelectOption-BtkyFn6p.js";import{P as h}from"./PermissionAllow-DFKxE1No.js";import{F as _}from"./Form-BvK5PbP-.js";import"./Dropdown-De-CftB8.js";import"./AdminHeader-Df6Pg7Zr.js";import"./Dropdown-DZe-wPe9.js";import"./useMergedRefs-Txjd5-DZ.js";import"./SSRProvider-D3QKeGVy.js";import"./useWindow-DjWiBSqy.js";import"./NavbarContext-DmJk-5Ir.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DoH87g0J.js";import"./BootstrapModalManager-C4GqAccA.js";import"./Fade-CGtw0FQ8.js";import"./index-vBzHIoDB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DDdeHOU8.js";import"./ReactToastify-BUp-Yjnc.js";import"./react-select.esm-C4l9KfHj.js";import"./Select-49a62830.esm-B5h1ngej.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-DvY3Merc.js";import"./hoist-non-react-statics.cjs-r4hCWOT5.js";import"./ElementChildren-CBnCre0W.js";import"./Col-DRboS-B0.js";function le({auth:p}){const{data:t,setData:m,post:u,errors:r,reset:I}=g({image:"",feature_name:"",status:"1",position:"",icon:""}),j=s=>{s.preventDefault(),u(route("admin.features.store"))},[n,d]=b.useState(""),N=s=>{const a=s.target.files[0];a&&(m("image",a),d(URL.createObjectURL(a)))},f=()=>{m("image",""),d("")},i=(s,a)=>{m(s,a)};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Create"}),children:[e.jsx(v,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.features.index"),children:"Features"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Feature Create",message:!0,children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:t.feature_name,onChange:s=>i("feature_name",s.target.value),autoComplete:"off"}),e.jsx(l,{message:r.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(o,{className:"fw-700 fs-16 form-label form-group__label",children:["Icon",e.jsxs("span",{className:"ms-5 text-danger",children:[" (",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Get from icon name"}),")"]})]}),e.jsx(c,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:t.icon,onChange:s=>i("icon",s.target.value),autoComplete:"off"}),e.jsx(l,{message:r.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>i("position",s),value:t.position}),e.jsx(l,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(l,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{le as default};
