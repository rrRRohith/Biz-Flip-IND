import{W as v,r as h,j as e,Y as w,a as g}from"./app-fOjyYbMD.js";import{A as C}from"./AdminAuthenticated-BsX_IIvZ.js";import{T as n,I as c}from"./TextInput-DEWgcAjY.js";import{I as o}from"./InputLabel-BUjfUP0o.js";import{S as y}from"./SelectOption-DDPWdLjF.js";import{R as j}from"./RadioButtonLabel-ASaw9fZ6.js";import"./index-CCmD6mTK.js";import"./AdminSidebar-Dnug4d1-.js";import"./Select-49a62830.esm-Bgfs5R43.js";import"./emotion-react.browser.esm-Dawthn-T.js";import"./setPrototypeOf-DgZC2w_0.js";function O({testimonial_item:a,queryParams:I=null,auth:u}){const{data:l,setData:r,post:N,errors:t,reset:E}=v({image:"",name:a.name||"",designation:a.designation||"",message:a.message||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[x,d]=h.useState("");h.useEffect(()=>{a.image&&d(a.image)},[a.image]);const b=s=>{const m=s.target.files[0];m&&(r("image",m),d(URL.createObjectURL(m)))},f=()=>{r("image",""),d(""),r("remove_image",!0)},p=s=>{s.preventDefault(),N(route("admin.testimonial.update",a.id))},i=(s,m)=>{r(s,m)};return e.jsxs(C,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial/Edit"}),children:[e.jsx(w,{title:"Testimonial Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Testimonial"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(g,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(g,{href:route("admin.testimonial.index"),children:"Testimonial"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:t.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(n,{id:"designation",type:"text",name:"designation",className:"form-control",value:l.designation,onChange:s=>i("designation",s.target.value),autoComplete:"off"}),e.jsx(c,{message:t.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Message"}),e.jsx(n,{id:"message",type:"text",name:"message",className:"form-control",value:l.message,onChange:s=>i("message",s.target.value),autoComplete:"off"}),e.jsx(c,{message:t.message,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(y,{onChange:s=>i("position",s),value:l.position}),e.jsx(c,{message:t.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(j,{name:"status",onChange:s=>i("status",s),value:"1",checked:l.status===1,label:"Published"}),e.jsx(j,{name:"status",onChange:s=>i("status",s),value:"0",checked:l.status===0,label:"Draft"}),e.jsx(c,{message:t.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{O as default};
