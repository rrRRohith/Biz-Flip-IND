import{W as v,r as n,j as e,Y as f,a as d}from"./app-C-YXobOe.js";import{A as w}from"./AdminAuthenticated-BryW3kyh.js";import{I as c}from"./InputError-CyL_nGro.js";import{T as h}from"./TextInput-BpSECfZc.js";import{I as x}from"./InputLabel-B3-pwT4i.js";import"./SelectOption-CEmTVacq.js";import{D as C}from"./DynamicSelect-D9HbbQh9.js";import{F as y}from"./Form-0KcksrCl.js";import{P as I}from"./PermissionAllow-DtvTqjfA.js";import"./Dropdown-Bhi-mPBX.js";import"./AdminHeader-BqY5Y-pc.js";import"./Dropdown-CQoZgOke.js";import"./listen-NJRWOGU3.js";import"./useWindow-BglnbEhR.js";import"./Anchor-Cu9NdDED.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D5jd2WL2.js";import"./BootstrapModalManager-CAxmY8NW.js";import"./Fade-BsKEZmiP.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chg_9I5t.js";import"./ToastNotification-BAVcC5t-.js";import"./ReactToastify-CHjPQyay.js";import"./react-select.esm-CgLMR7NC.js";import"./Select-49a62830.esm-D7xvNJb1.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-FOhZUXVn.js";import"./hoist-non-react-statics.cjs-1L2ClLpA.js";import"./ElementChildren-B96R7PB3.js";import"./Col-ZWZUD74i.js";function ce({city_item:s,queryParams:E=null,auth:p,provinces:u}){const{data:i,setData:r,post:j,errors:t,reset:k}=v({image:"",name:s.name||"",status:(s.status=="published",1),position:s.position||"",_method:"PUT",remove_image:!1,country:s.country,province:s.province}),[o,l]=n.useState("");n.useEffect(()=>{s.image&&l(s.image)},[s.image,s.country]);const g=a=>{const m=a.target.files[0];m&&(r("image",m),l(URL.createObjectURL(m)))},b=()=>{r("image",""),l(""),r("remove_image",!0)},N=a=>{a.preventDefault(),j(route("admin.city.update",s.id))};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Edit"}),children:[e.jsx(f,{title:"City Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(d,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(d,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(I,{permission:"City Edit",message:"true",children:e.jsxs("form",{onSubmit:N,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(h,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:a=>handleChange("name",a.target.value),autoComplete:"off"}),e.jsx(c,{message:t.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(C,{options:u,onChange:a=>handleChange("province",a),defaultValue:i.province,value:i.province}),e.jsx(c,{message:t.province,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:a=>handleChange("status",a.target.checked?1:0)}),e.jsx(c,{message:t.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[o?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:o,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:g})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ce as default};
