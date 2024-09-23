import{W as I,r as d,j as e,Y as E,a as h}from"./app-DlBo-Ddu.js";import{A as _}from"./AdminAuthenticated-Cwz-whZZ.js";import{I as x}from"./InputError-D2IcB-2I.js";import{T as u}from"./TextInput-BvGAEKB4.js";import{I as j}from"./InputLabel-BQ4CPb_c.js";import{P as p}from"./PermissionAllow-Df6yLocr.js";import{F as g}from"./Form-cPST5_c-.js";import"./Dropdown-BVbw0fPm.js";import"./AdminHeader-XlUGR1mB.js";import"./Dropdown-BwnBMcYa.js";import"./useMergedRefs-C2W-uHs9.js";import"./useWindow-CDGLn9yS.js";import"./NavbarContext-BzvdvPuO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BojA_d6S.js";import"./BootstrapModalManager-Dqv4GHEH.js";import"./Fade-CmSRjtXj.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BWjN7ugN.js";import"./ToastNotification-BOPASvEd.js";import"./ReactToastify-DpQD6jLC.js";import"./ElementChildren-CM-IqZgD.js";import"./Col-pd7tV-fN.js";function ae({category_item:i,queryParams:P=null,auth:b,adCategoryList:N}){const v=i.selected_items||[],{data:l,setData:t,post:f,errors:o,reset:A}=I({image:"",category_name:i.name||"",status:i.status==1?1:0,position:i.position||"",_method:"PUT",description:"",remove_image:!1,adCategories:v||[]}),C=s=>{let a;l.adCategories.includes(s)?a=l.adCategories.filter(n=>n!==s):a=[...l.adCategories,s],t("adCategories",a)},[m,r]=d.useState("");d.useEffect(()=>{i.icon&&r(i.icon)},[i.icon]);const w=s=>{const a=s.target.files[0];a&&(t("image",a),r(URL.createObjectURL(a)))},y=()=>{t("image",""),r(""),t("remove_image",!0)},k=s=>{s.preventDefault(),f(route("admin.business-category.update",i.id))},c=(s,a)=>{t(s,a)};return e.jsxs(_,{user:b.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Category/Edit"}),children:[e.jsx(E,{title:"Category Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Category"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Categories Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(h,{href:route("admin.business-category.index"),children:"Business Categories"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Category Edit",message:"true",children:e.jsxs("form",{onSubmit:k,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(u,{disabled:!0,readonly:!0,id:"category-name",type:"text",name:"category_name",className:"form-control",value:l.category_name,onChange:s=>c("category_name",s.target.value),autoComplete:"off"}),e.jsx(x,{message:o.category_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{className:"form-control",rows:4,onChange:s=>c("description",s.target.value),defaultValue:l.description})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"h-100 border p-3",children:[e.jsx("h6",{className:"fw-bold mb-3",children:"Select Availabe to Ad Categories"}),e.jsx("div",{className:"col-lg-12 p-3",children:e.jsx("div",{className:"row",children:N.data.map((s,a)=>e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"form-group",children:e.jsx(g.Check,{type:"switch",id:`custom-switch-${a}`,name:"adCategory",label:s.name,value:s.id,checked:l.adCategories.includes(s.id),role:"button",onChange:n=>C(s.id)},a)})}))})})]})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(g.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status===1,onChange:s=>c("status",s.target.checked?1:0)}),e.jsx(x,{message:o.status,className:"mt-2 col-12"})]})})})]})}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  bg-gray-100 text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:y})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 w-50 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(u,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:w})]})]})]})})})})]})})})}),e.jsx("div",{className:"form-actions mt-10 col-lg-6 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Update Data"]})})]})})})})})})})]})})]})}export{ae as default};
