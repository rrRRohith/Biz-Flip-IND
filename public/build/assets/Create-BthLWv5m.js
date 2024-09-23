import{W as g,r as b,j as e,Y as v,a as x}from"./app-DlBo-Ddu.js";import{A as w}from"./AdminAuthenticated-Cwz-whZZ.js";import{I as l}from"./InputError-D2IcB-2I.js";import{T as c}from"./TextInput-BvGAEKB4.js";import{I as o}from"./InputLabel-BQ4CPb_c.js";import{S as C}from"./SelectOption-DxoaB5bg.js";import{P as h}from"./PermissionAllow-Df6yLocr.js";import{F as _}from"./Form-cPST5_c-.js";import"./Dropdown-BVbw0fPm.js";import"./AdminHeader-XlUGR1mB.js";import"./Dropdown-BwnBMcYa.js";import"./useMergedRefs-C2W-uHs9.js";import"./useWindow-CDGLn9yS.js";import"./NavbarContext-BzvdvPuO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BojA_d6S.js";import"./BootstrapModalManager-Dqv4GHEH.js";import"./Fade-CmSRjtXj.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BWjN7ugN.js";import"./ToastNotification-BOPASvEd.js";import"./ReactToastify-DpQD6jLC.js";import"./react-select.esm-J2nNCklL.js";import"./Select-49a62830.esm-Dx6Tf3xm.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-BhcPD_Qg.js";import"./hoist-non-react-statics.cjs-CyvW9ahi.js";import"./ElementChildren-CM-IqZgD.js";import"./Col-pd7tV-fN.js";function ie({auth:p}){const{data:t,setData:m,post:u,errors:r,reset:I}=g({image:"",feature_name:"",status:"1",position:"",icon:""}),j=s=>{s.preventDefault(),u(route("admin.features.store"))},[n,d]=b.useState(""),N=s=>{const a=s.target.files[0];a&&(m("image",a),d(URL.createObjectURL(a)))},f=()=>{m("image",""),d("")},i=(s,a)=>{m(s,a)};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Create"}),children:[e.jsx(v,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.features.index"),children:"Features"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Feature Create",message:!0,children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:t.feature_name,onChange:s=>i("feature_name",s.target.value),autoComplete:"off"}),e.jsx(l,{message:r.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(o,{className:"fw-700 fs-16 form-label form-group__label",children:["Icon",e.jsxs("span",{className:"ms-5 text-danger",children:[" (",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Get from icon name"}),")"]})]}),e.jsx(c,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:t.icon,onChange:s=>i("icon",s.target.value),autoComplete:"off"}),e.jsx(l,{message:r.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>i("position",s),value:t.position}),e.jsx(l,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(l,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ie as default};
