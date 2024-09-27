import{W as v,r as p,j as e,Y as w,a as h}from"./app-CQIRDB_X.js";import{A as y}from"./AdminAuthenticated-DX54AluG.js";import{I as o}from"./InputError-Cmx0lrw6.js";import{T as n}from"./TextInput-iSISYBDJ.js";import{I as t}from"./InputLabel-KA8OXQzc.js";import{S as C}from"./SelectOption-FS6Xqg-m.js";import{P as g}from"./PermissionAllow-twJbe2hf.js";import{F as _}from"./Form-B1CwxW3R.js";import"./Dropdown-QRzkMtG8.js";import"./AdminHeader-BuqDWglL.js";import"./Dropdown-BxzEHkzu.js";import"./useMergedRefs-BzCFH6f-.js";import"./SSRProvider-ClyxOBUY.js";import"./useWindow-DgAo-4V8.js";import"./NavbarContext-D_AIF8F9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CrHqqKcv.js";import"./BootstrapModalManager-D09_UzHb.js";import"./Fade-CO1Sws4T.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BTISSp39.js";import"./ToastNotification-CIvtYDRL.js";import"./ReactToastify-McQGZ74s.js";import"./react-select.esm-Binnh_wz.js";import"./Select-49a62830.esm-13r5pgxB.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-BJVtzPrT.js";import"./hoist-non-react-statics.cjs-Ezi43cMB.js";import"./ElementChildren-eYZcRYP8.js";import"./Col-BL4QCXDh.js";function te({testimonial_item:a,queryParams:I=null,auth:j}){const{data:m,setData:c,post:u,errors:i,reset:E}=v({image:"",name:a.name||"",company_name:a.company_name||"",designation:a.designation||"",message:a.message||"",status:a.status,position:a.position||"",_method:"PUT",remove_image:!1}),[x,d]=p.useState("");p.useEffect(()=>{a.image&&d(a.image)},[a.image]);const N=s=>{const r=s.target.files[0];r&&(c("image",r),d(URL.createObjectURL(r)))},f=()=>{c("image",""),d(""),c("remove_image",!0)},b=s=>{s.preventDefault(),u(route("admin.testimonial.update",a.id))},l=(s,r)=>{c(s,r)};return e.jsxs(y,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial/Edit"}),children:[e.jsx(w,{title:"Testimonial Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Testimonial"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(g,{permission:"Testimonials Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(h,{href:route("admin.testimonial.index"),children:"Testimonial"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Testimonial Edit",message:!0,children:e.jsxs("form",{onSubmit:b,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"name",type:"text",name:"name",className:"form-control",value:m.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(n,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:m.company_name,onChange:s=>l("company_name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:i.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(n,{id:"designation",type:"text",name:"designation",className:"form-control",value:m.designation,onChange:s=>l("designation",s.target.value),autoComplete:"off"}),e.jsx(o,{message:i.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Message"}),e.jsx("textarea",{id:"message",type:"text",name:"message",className:"form-control",onChange:s=>l("message",s.target.value),autoComplete:"off",rows:4,children:m.message}),e.jsx(o,{message:i.message,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>l("position",s),value:m.position,defaultValue:m.position}),e.jsx(o,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:m.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(o,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-50  rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"w-50 mb-15 text-center",onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{te as default};
