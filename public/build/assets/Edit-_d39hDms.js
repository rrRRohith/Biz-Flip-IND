import{W as f,r as h,j as e,Y as v,a as p}from"./app-CETDUQ2O.js";import{A as w}from"./AdminAuthenticated-DacAQcbt.js";import{I as o}from"./InputError-e_Ey8jiE.js";import{T as n}from"./TextInput-WAOUh7a2.js";import{I as d}from"./InputLabel-BP5mU-AG.js";import{S as C}from"./SelectOption-P6DGDU44.js";import{F as y}from"./Form-DVLORas_.js";import{P as I}from"./PermissionAllow-COE0flJ2.js";import"./Dropdown-CML94wOg.js";import"./AdminHeader-o-_QN0gK.js";import"./Dropdown-DpxJMqsl.js";import"./useMergedRefs-BNa28cw-.js";import"./SSRProvider-Bs2Xk6Wm.js";import"./useWindow-CYm_A8RM.js";import"./NavbarContext-CfrAZts5.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-qIVcvEOu.js";import"./BootstrapModalManager-DKIU9LXT.js";import"./Fade-Unlbx0yM.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CpSO6HaL.js";import"./ToastNotification-CD6iFmtn.js";import"./ReactToastify-Dgc1NXR6.js";import"./react-select.esm-bo_-XZgN.js";import"./Select-49a62830.esm-CGeBkhnb.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CdfnQj0a.js";import"./hoist-non-react-statics.cjs-B3wnF9yU.js";import"./ElementChildren-DgWzDr-X.js";import"./Col-CDtfLsX6.js";function oe({country_item:a,queryParams:E=null,auth:j}){const{data:i,setData:l,post:u,errors:r,reset:k}=f({image:"",name:a.name||"",code:a.code||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[x,c]=h.useState("");h.useEffect(()=>{a.image&&c(a.image)},[a.image]);const N=s=>{const t=s.target.files[0];t&&(l("image",t),c(URL.createObjectURL(t)))},g=()=>{l("image",""),c(""),l("remove_image",!0)},b=s=>{s.preventDefault(),u(route("admin.country.update",a.id))},m=(s,t)=>{l(s,t)};return e.jsxs(w,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Edit"}),children:[e.jsx(v,{title:"Country Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(I,{permission:"Country Edit",message:"true",children:e.jsxs("form",{onSubmit:b,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>m("name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(n,{id:"country-code",type:"text",name:"code",className:"form-control",value:i.code,onChange:s=>m("code",s.target.value),autoComplete:"off"}),e.jsx(o,{message:r.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>m("position",s),value:i.position,defaultValue:i.position}),e.jsx(o,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group p-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>m("status",s.target.checked?1:0)}),e.jsx(o,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{oe as default};
