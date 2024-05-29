import{W as v,r as d,j as e,Y as y,a as x}from"./app-fOjyYbMD.js";import{A as w}from"./AdminAuthenticated-BsX_IIvZ.js";import{T as h,I as m}from"./TextInput-DEWgcAjY.js";import{I as j}from"./InputLabel-BUjfUP0o.js";import{S as C}from"./SelectOption-DDPWdLjF.js";import{R as u}from"./RadioButtonLabel-ASaw9fZ6.js";import"./index-CCmD6mTK.js";import"./AdminSidebar-Dnug4d1-.js";import"./Select-49a62830.esm-Bgfs5R43.js";import"./emotion-react.browser.esm-Dawthn-T.js";import"./setPrototypeOf-DgZC2w_0.js";function O({category_item:a,queryParams:I=null,auth:g}){const{data:l,setData:t,post:N,errors:r,reset:_}=v({image:"",category_name:a.name||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[o,n]=d.useState("");d.useEffect(()=>{a.icon&&n(a.icon)},[a.icon]);const b=s=>{const i=s.target.files[0];i&&(t("image",i),n(URL.createObjectURL(i)))},p=()=>{t("image",""),n(""),t("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.category.update",a.id))},c=(s,i)=>{t(s,i)};return e.jsxs(w,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Category/Edit"}),children:[e.jsx(y,{title:"Category Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Category"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.category.index"),children:"Category"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(h,{id:"category-name",type:"text",name:"category_name",className:"form-control",value:l.category_name,onChange:s=>c("category_name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.category_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>c("position",s),value:l.position,defaultValue:l.position}),e.jsx(m,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(u,{name:"status",onChange:s=>c("status",s),value:"1",checked:l.status===1,label:"Published"}),e.jsx(u,{name:"status",onChange:s=>c("status",s),value:"0",checked:l.status===0,label:"Draft"}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[o?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:o,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:p})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{O as default};
