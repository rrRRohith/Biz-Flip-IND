import{W as f,r as b,j as e,Y as v,a as x}from"./app-D1aGfrPI.js";import{A as w}from"./AdminAuthenticated-CTFfksGu.js";import{I as t}from"./InputError-ibcQE1fe.js";import{T as r}from"./TextInput-B6xDCsTf.js";import{I as o}from"./InputLabel-rfyA0lFw.js";import{S as C}from"./SelectOption-BA4bF_dJ.js";import{F as _}from"./Form-CAxAPdAK.js";import{P as p}from"./PermissionAllow-DnhKOBGp.js";import"./Dropdown-BvMv-Cx8.js";import"./AdminHeader-CDOzUpY-.js";import"./Dropdown-BQsnKVnZ.js";import"./listen-DVsGTPDo.js";import"./useWindow-yIzIVMkV.js";import"./Anchor-C4IM8qLW.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BEdlw4hQ.js";import"./BootstrapModalManager-C205_b1o.js";import"./Fade-Bq72BtaS.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BsnoveWJ.js";import"./ToastNotification-DBC-l_Wa.js";import"./ReactToastify-B59Tg9ya.js";import"./react-select.esm-DGhhwa_3.js";import"./Select-49a62830.esm-CFWocRlW.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-DG0r8uCn.js";import"./hoist-non-react-statics.cjs-3_Nw-Sj0.js";import"./ElementChildren-BoxbomdY.js";import"./Col-BffuSBWd.js";function te({auth:h}){const{data:a,setData:n,post:g,errors:i,reset:y}=f({image:"",name:"",company_name:"",designation:"",message:"",status:"1",position:""}),j=s=>{s.preventDefault(),g(route("admin.testimonial.store"))},[c,d]=b.useState(""),u=s=>{const l=s.target.files[0];l&&(n("image",l),d(URL.createObjectURL(l)))},N=()=>{n("image",""),d("")},m=(s,l)=>{n(s,l)};return e.jsxs(w,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial/Create"}),children:[e.jsx(v,{title:"Testimonial Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Testimonial"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Testimonials Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.testimonial.index"),children:"Testimonial"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Testimonial Create",message:!0,children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(r,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>m("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(r,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:a.company_name,onChange:s=>m("company_name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:i.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(r,{id:"designation",type:"text",name:"designation",className:"form-control",value:a.designation,onChange:s=>m("designation",s.target.value),autoComplete:"off"}),e.jsx(t,{message:i.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Message"}),e.jsx("textarea",{id:"message",type:"text",name:"message",className:"form-control",value:a.message,onChange:s=>m("message",s.target.value),autoComplete:"off",rows:4,cols:40}),e.jsx(t,{message:i.message,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>m("position",s),value:a.position}),e.jsx(t,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>m("status",s.target.checked?1:0)}),e.jsx(t,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[c?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:c,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:N})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},className:"w-50  mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:u})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{te as default};
