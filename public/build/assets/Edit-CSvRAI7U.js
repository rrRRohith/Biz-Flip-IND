import{W as S,r as d,j as e,Y as P,a as j}from"./app-ubtpBZLn.js";import{A as _}from"./AdminAuthenticated-C_d8im7i.js";import{T as p,I as t}from"./TextInput-DgyTfVcW.js";import{I as n}from"./InputLabel-Ddo2be3J.js";import{S as k}from"./SelectOption-B9gl58CL.js";import{R as N}from"./RadioButtonLabel-CQFLO2Bl.js";import{D as f}from"./DynamicSelect-1TCRymlO.js";import"./Dropdown-B61pZ40z.js";import"./AdminSidebar-Cie97x6K.js";import"./emotion-react.browser.esm-CMO6Um0Z.js";import"./react-select-creatable.esm-BfYPF4qn.js";function Y({city_item:l,queryParams:D=null,auth:x,countries:g}){const{data:i,setData:o,post:b,errors:c,reset:R}=S({image:"",name:l.name||"",status:l.status=1,position:l.position||"",_method:"PUT",remove_image:!1,country:l.country_id}),[h,m]=d.useState("");d.useEffect(()=>{l.image&&m(l.image)},[l.image]);const v=s=>{const a=s.target.files[0];a&&(o("image",a),m(URL.createObjectURL(a)))},w=()=>{o("image",""),m(""),o("remove_image",!0)},y=s=>{s.preventDefault(),b(route("admin.city.update",l.id))},[C,u]=d.useState([]),E=async s=>{if(!s){u([]);return}try{const I=await(await fetch(`/admin/provinces/${s}`,{headers:{Authorization:`Bearer ${x.token}`}})).json();u(I)}catch(a){console.error("Error fetching provinces:",a)}},r=(s,a)=>{o(s,a),s==="country"&&E(a)};return e.jsxs(_,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Edit"}),children:[e.jsx(P,{title:"City Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(p,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>r("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:c.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(f,{options:g,onChange:s=>r("country",s),value:i.country}),e.jsx(t,{message:c.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(f,{options:C,onChange:s=>r("province",s),value:i.province}),e.jsx(t,{message:c.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(k,{onChange:s=>r("position",s),value:i.position,defaultValue:i.position}),e.jsx(t,{message:c.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(N,{name:"status",onChange:s=>r("status",s),value:"1",checked:i.status===1,label:"Published"}),e.jsx(N,{name:"status",onChange:s=>r("status",s),value:"0",checked:i.status===0,label:"Draft"}),e.jsx(t,{message:c.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[h?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:h,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:w})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(p,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{Y as default};
