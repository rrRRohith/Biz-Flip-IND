import{W as f,r as b,j as e,Y as v,a as x}from"./app-DvFGvXdx.js";import{A as w}from"./AdminAuthenticated-D-zMRHnz.js";import{I as l}from"./InputError-B2ZlsISG.js";import{T as r}from"./TextInput-DtxWb5Ya.js";import{I as o}from"./InputLabel-jnwu-znK.js";import{S as C}from"./SelectOption-UKufI4Ci.js";import{F as _}from"./Form-DCiMo5oc.js";import{P as p}from"./PermissionAllow-D9D849r5.js";import"./Dropdown-Dv9kgZM4.js";import"./AdminHeader-BLZTylm7.js";import"./Dropdown-l-da9rBz.js";import"./useMergedRefs-D75ORZ4e.js";import"./useWindow-BVJR-Id8.js";import"./NavbarContext-CqUhnY4e.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-8z7Z5zc5.js";import"./BootstrapModalManager-C0ljKC2c.js";import"./Fade-B7YvUX8l.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DXO1pmiC.js";import"./ToastNotification-CCAk__2k.js";import"./ReactToastify-E8VKSlRY.js";import"./react-select.esm-Mio-Dy5d.js";import"./Select-49a62830.esm-Bj4AoYc2.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-lOCJsOYN.js";import"./hoist-non-react-statics.cjs-CmBVkyqr.js";import"./ElementChildren-SFQOEKcw.js";import"./Col-Dp5XqYRZ.js";function le({auth:h}){const{data:a,setData:n,post:g,errors:i,reset:y}=f({image:"",name:"",company_name:"",designation:"",message:"",status:"1",position:""}),j=s=>{s.preventDefault(),g(route("admin.testimonial.store"))},[c,d]=b.useState(""),u=s=>{const t=s.target.files[0];t&&(n("image",t),d(URL.createObjectURL(t)))},N=()=>{n("image",""),d("")},m=(s,t)=>{n(s,t)};return e.jsxs(w,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial/Create"}),children:[e.jsx(v,{title:"Testimonial Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Testimonial"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Testimonials Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.testimonial.index"),children:"Testimonial"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Testimonial Create",message:!0,children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(r,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>m("name",s.target.value),autoComplete:"off"}),e.jsx(l,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(r,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:a.company_name,onChange:s=>m("company_name",s.target.value),autoComplete:"off"}),e.jsx(l,{message:i.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(r,{id:"designation",type:"text",name:"designation",className:"form-control",value:a.designation,onChange:s=>m("designation",s.target.value),autoComplete:"off"}),e.jsx(l,{message:i.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Message"}),e.jsx("textarea",{id:"message",type:"text",name:"message",className:"form-control",value:a.message,onChange:s=>m("message",s.target.value),autoComplete:"off",rows:4,cols:40}),e.jsx(l,{message:i.message,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>m("position",s),value:a.position}),e.jsx(l,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>m("status",s.target.checked?1:0)}),e.jsx(l,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[c?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:c,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:N})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},className:"w-50  mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:u})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{le as default};
