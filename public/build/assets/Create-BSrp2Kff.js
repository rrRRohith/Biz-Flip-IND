import{W as I,r as h,j as e,Y as S,a as j}from"./app-b61ggBVK.js";import{A as k}from"./AdminAuthenticated-D6-pV21W.js";import{I as t}from"./InputError-CIBSIQ9H.js";import{T as p}from"./TextInput-CAtUELi7.js";import{I as c}from"./InputLabel-CdNfTY-x.js";import{S as D}from"./SelectOption-DOC842PU.js";import{R as u}from"./RadioButtonLabel-DUf6mi0c.js";import{D as N}from"./DynamicSelect-n-8VkKc7.js";import"./index-B1IIQBEw.js";import"./AdminSidebar-Jt8wJB0G.js";import"./objectWithoutPropertiesLoose-DgWvQqX6.js";import"./ToastNotification-BPLhBA2Y.js";import"./react-select.esm-4IXXm24s.js";import"./Select-49a62830.esm-DPvvf3_U.js";import"./emotion-react.browser.esm-B4XBF4CY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select-creatable.esm-D4LTR1la.js";function K({auth:n,countries:b}){const{data:i,setData:o,post:v,errors:l,reset:P}=I({image:"",name:"",status:"1",position:"",country:"",province:""}),f=s=>{s.preventDefault(),v(route("admin.city.store"))},[m,d]=h.useState(""),g=s=>{const a=s.target.files[0];a&&(o("image",a),d(URL.createObjectURL(a)))},y=()=>{o("image",""),d("")},r=(s,a)=>{o(s,a),s==="country"&&w(a)},[C,x]=h.useState([]),w=async s=>{if(!s){x([]);return}try{const _=await(await fetch(`/admin/provinces/${s}`,{headers:{Authorization:`Bearer ${n.token}`}})).json();x(_)}catch(a){console.error("Error fetching provinces:",a)}};return e.jsxs(k,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Create"}),children:[e.jsx(S,{title:"City Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(p,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>r("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(N,{options:b,onChange:s=>r("country",s),value:i.country}),e.jsx(t,{message:l.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(N,{options:C,onChange:s=>r("province",s),value:i.province}),e.jsx(t,{message:l.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(D,{onChange:s=>r("position",s),value:i.position}),e.jsx(t,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(u,{name:"status",onChange:s=>r("status",s),value:"1",checked:i.status==="1",label:"Published"}),e.jsx(u,{name:"status",onChange:s=>r("status",s),value:"0",checked:i.status==="0",label:"Draft"}),e.jsx(t,{message:l.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:y})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(p,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:g})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{K as default};
