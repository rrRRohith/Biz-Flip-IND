import{W as g,r as v,j as e,Y as f,a as o}from"./app-b61ggBVK.js";import{A as C}from"./AdminAuthenticated-D6-pV21W.js";import{I as c}from"./InputError-CIBSIQ9H.js";import{T as d}from"./TextInput-CAtUELi7.js";import{I as x}from"./InputLabel-CdNfTY-x.js";import{S as y}from"./SelectOption-DOC842PU.js";import{R as h}from"./RadioButtonLabel-DUf6mi0c.js";import"./index-B1IIQBEw.js";import"./AdminSidebar-Jt8wJB0G.js";import"./objectWithoutPropertiesLoose-DgWvQqX6.js";import"./ToastNotification-BPLhBA2Y.js";import"./react-select.esm-4IXXm24s.js";import"./Select-49a62830.esm-DPvvf3_U.js";import"./emotion-react.browser.esm-B4XBF4CY.js";import"./setPrototypeOf-DgZC2w_0.js";function Y({auth:j}){const{data:l,setData:i,post:u,errors:r,reset:w}=g({image:"",name:"",status:"1",position:""}),N=s=>{s.preventDefault(),u(route("admin.country.store"))},[m,n]=v.useState(""),b=s=>{const a=s.target.files[0];a&&(i("image",a),n(URL.createObjectURL(a)))},p=()=>{i("image",""),n("")},t=(s,a)=>{i(s,a)};return e.jsxs(C,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Create"}),children:[e.jsx(f,{title:"Country Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(o,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(o,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:N,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"country-name",type:"text",name:"name",className:"form-control",value:l.name,onChange:s=>t("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(y,{onChange:s=>t("position",s),value:l.position}),e.jsx(c,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(h,{name:"status",onChange:s=>t("status",s),value:"1",checked:l.status==="1",label:"Published"}),e.jsx(h,{name:"status",onChange:s=>t("status",s),value:"0",checked:l.status==="0",label:"Draft"}),e.jsx(c,{message:r.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:p})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{Y as default};
