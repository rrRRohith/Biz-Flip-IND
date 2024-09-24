import{W as v,r as h,j as e,Y as w,a as p}from"./app-Bz2LQuP9.js";import{A as C}from"./AdminAuthenticated-CNwSy-zv.js";import{I as m}from"./InputError-B3Poe2K_.js";import{T as n}from"./TextInput-CoB69TXJ.js";import{I as d}from"./InputLabel-Dp3-6_us.js";import{S as I}from"./SelectOption-B_kWxetY.js";import{P as u}from"./PermissionAllow-0ixGAbiA.js";import{F as _}from"./Form-BO-N3Oez.js";import"./Dropdown-DSUsZ5oh.js";import"./AdminHeader-ClrnhyB_.js";import"./Dropdown-_EwWfX2z.js";import"./useMergedRefs-29McOKRJ.js";import"./useWindow-B_GaMEav.js";import"./NavbarContext-DLXhLQ6j.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CQ_2uBLJ.js";import"./BootstrapModalManager-BQSb3-Qi.js";import"./Fade-C3w90BI6.js";import"./index-B1WMH_8v.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DPSGfnSp.js";import"./ReactToastify-Do1xRJfI.js";import"./react-select.esm-BinNvf5Q.js";import"./Select-49a62830.esm-2GpyX7NO.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-c_n2QB9s.js";import"./hoist-non-react-statics.cjs-C-mWgX9W.js";import"./ElementChildren-CRiCKZCP.js";import"./Col-DMt20L_d.js";function oe({features_item:a,queryParams:y=null,auth:j}){const{data:i,setData:r,post:N,errors:l,reset:k}=v({image:"",feature_name:a.name||"",status:a.status,position:a.position||"",_method:"PUT",remove_image:!1,icon:a.icon}),[x,c]=h.useState("");h.useEffect(()=>{a.icon&&c(a.icon)},[a.icon]);const g=s=>{const t=s.target.files[0];t&&(r("image",t),c(URL.createObjectURL(t)))},b=()=>{r("image",""),c(""),r("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.features.update",a.id))},o=(s,t)=>{r(s,t)};return e.jsxs(C,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Edit"}),children:[e.jsx(w,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.features.index"),children:"Features"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Feature Create",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:i.feature_name,onChange:s=>o("feature_name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:l.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(d,{className:"fw-700 fs-16 form-label form-group__label",children:["Icon",e.jsxs("span",{className:"ms-5 text-danger",children:[" (",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Get from icon name"}),")"]})]}),e.jsx(n,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:i.icon,onChange:s=>o("icon",s.target.value),autoComplete:"off"}),e.jsx(m,{message:l.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(I,{onChange:s=>o("position",s),value:i.position,defaultValue:i.position}),e.jsx(m,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>o("status",s.target.checked?1:0)}),e.jsx(m,{message:l.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:g})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{oe as default};
