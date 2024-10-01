import{W as v,r as h,j as e,Y as w,a as p}from"./app-DLXOGcZi.js";import{A as y}from"./AdminAuthenticated-Ds9zqSBK.js";import{I as o}from"./InputError-DIMp_WVY.js";import{T as n}from"./TextInput-B9h9u6yq.js";import{I as d}from"./InputLabel-ntb_qK_-.js";import{S as C}from"./SelectOption-DTBsXj26.js";import{P as j}from"./PermissionAllow-FjCSE7Fq.js";import{F as I}from"./Form-D8kgzfPf.js";import"./Dropdown-BzQaryl-.js";import"./AdminHeader-CdeGrUD7.js";import"./Dropdown-DoBBUR4m.js";import"./useMergedRefs-BtIKzljZ.js";import"./SSRProvider-BEKAir0L.js";import"./useWindow-BsXDL-p9.js";import"./NavbarContext-B4gA4rQT.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DRfxNIt4.js";import"./BootstrapModalManager-duh7bGD7.js";import"./Fade-DoodeI9j.js";import"./index-rRSUnOEs.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-CfEM5l5i.js";import"./ReactToastify-B0j25eZ5.js";import"./react-select.esm-CHGhcu4T.js";import"./Select-49a62830.esm-BP3jXN8-.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CXBwkEfE.js";import"./hoist-non-react-statics.cjs-DWxBPR1j.js";import"./ElementChildren-Bx1wfWVS.js";import"./Col-CrhTNyfp.js";function oe({facility_item:a,queryParams:_=null,auth:u}){const{data:i,setData:l,post:g,errors:r,reset:E}=v({image:"",facility_name:a.name||"",status:a.status,position:a.position||"",_method:"PUT",remove_image:!1,icon:a.icon}),[x,m]=h.useState("");h.useEffect(()=>{a.icon&&m(a.icon)},[a.icon]);const N=s=>{const t=s.target.files[0];t&&(l("image",t),m(URL.createObjectURL(t)))},b=()=>{l("image",""),m(""),l("remove_image",!0)},f=s=>{s.preventDefault(),g(route("admin.facilities.update",a.id))},c=(s,t)=>{l(s,t)};return e.jsxs(y,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Facility/Edit"}),children:[e.jsx(w,{title:"Facility Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Facility"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(j,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.facilities.index"),children:"Facility"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(j,{permission:"Facility Edit",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"facility-name",type:"text",name:"facility_name",className:"form-control",value:i.facility_name,onChange:s=>c("facility_name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:r.facility_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(d,{className:"fw-700 fs-16 form-label form-group__label",children:["Bootstrap icon class (eg bi-car-front-fill)",e.jsxs("span",{className:"ms-5 text-danger",children:[" - ",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Open icon list"})]})]}),e.jsx(n,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:i.icon,onChange:s=>c("icon",s.target.value),autoComplete:"off"}),e.jsx(o,{message:r.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>c("position",s),value:i.position,defaultValue:i.position}),e.jsx(o,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(I.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>c("status",s.target.checked?1:0)}),e.jsx(o,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{oe as default};
