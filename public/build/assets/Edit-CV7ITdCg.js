import{W as I,r as d,j as e,Y as E,a as h}from"./app-DA3kWpyT.js";import{A as _}from"./AdminAuthenticated-DTpoxFwe.js";import{I as x}from"./InputError-DD5eoVtL.js";import{T as p}from"./TextInput-CMAWMAl7.js";import{I as u}from"./InputLabel-CZb2EnKM.js";import"./SelectOption-BltEYWOz.js";import{P as j}from"./PermissionAllow-CatPWOR2.js";import{F as g}from"./Form-Ci22xdoT.js";import"./Dropdown-DwhAOHWK.js";import"./AdminHeader-CYBZnRzT.js";import"./Dropdown-C4g8BwlD.js";import"./listen-PQ8YVYSi.js";import"./useWindow-m9PyNX1i.js";import"./Anchor-4-PI7QGH.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DyJkGZ4V.js";import"./BootstrapModalManager-UDfIyIdl.js";import"./Fade-9U48mqhz.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CTzM4ZlW.js";import"./ToastNotification-BS3is8iG.js";import"./ReactToastify-CzFpsPLJ.js";import"./react-select.esm-C1uZCYGw.js";import"./Select-49a62830.esm-YMqusL0d.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BBfUBrjs.js";import"./hoist-non-react-statics.cjs-8Il2-AkJ.js";import"./ElementChildren-DSnG37SX.js";import"./Col-CEadueU4.js";function ne({category_item:i,queryParams:P=null,auth:b,BusinesscategoryList:N}){const f=i.selected_items||[],{data:t,setData:l,post:v,errors:o,reset:S}=I({image:"",category_name:i.name||"",status:i.status==1?1:0,_method:"PUT",remove_image:!1,description:i.description||"",businessCategories:f||[]}),C=s=>{let a;t.businessCategories.includes(s)?a=t.businessCategories.filter(n=>n!==s):a=[...t.businessCategories,s],l("businessCategories",a)},[m,r]=d.useState("");d.useEffect(()=>{i.icon&&r(i.icon)},[i.icon]);const w=s=>{const a=s.target.files[0];a&&(l("image",a),r(URL.createObjectURL(a)))},y=()=>{l("image",""),r(""),l("remove_image",!0)},k=s=>{s.preventDefault(),v(route("admin.category.update",i.id))},c=(s,a)=>{l(s,a)};return e.jsxs(_,{user:b.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Category/Edit"}),children:[e.jsx(E,{title:"Category Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Category"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(j,{permission:"Categories Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(h,{href:route("admin.category.index"),children:"Category"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(j,{permission:"Category Edit",message:"true",children:e.jsxs("form",{onSubmit:k,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(u,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(p,{id:"category-name",type:"text",name:"category_name",className:"form-control",value:t.category_name,onChange:s=>c("category_name",s.target.value),autoComplete:"off"}),e.jsx(x,{message:o.category_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(u,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{className:"form-control",rows:4,onChange:s=>c("description",s.target.value),defaultValue:t.description})]})}),e.jsx("div",{className:"col-lg-12 mb-3",children:e.jsxs("div",{className:"h-100 border p-3",children:[e.jsx("h6",{className:"fw-bold mb-3",children:"Select Availabe to Business Categories"}),e.jsx("div",{className:"p-3 row",children:N.data.map((s,a)=>e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"form-group",children:e.jsx(g.Check,{type:"switch",id:`custom-switch-${a}`,name:"adCategory",value:s.id,label:s.name,checked:t.businessCategories.includes(s.id),role:"button",onChange:n=>C(s.id)},a)})}))})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(g.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>c("status",s.target.checked?1:0)}),e.jsx(x,{message:o.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  bg-gray-100 text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:y})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 w-50 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(p,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:w})]})]})]})})})})]})})})})}),e.jsx("div",{className:"form-actions mt-10 col-lg-12 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Update Data"]})})]})})})})})})})]})})]})}export{ne as default};
