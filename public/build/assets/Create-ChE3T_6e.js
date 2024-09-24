import{W as g,r as b,j as e,Y as v,a as x}from"./app-DvFGvXdx.js";import{A as w}from"./AdminAuthenticated-D-zMRHnz.js";import{I as c}from"./InputError-B2ZlsISG.js";import{T as m}from"./TextInput-DtxWb5Ya.js";import{I as o}from"./InputLabel-jnwu-znK.js";import{S as y}from"./SelectOption-UKufI4Ci.js";import{P as h}from"./PermissionAllow-D9D849r5.js";import{F as C}from"./Form-DCiMo5oc.js";import"./Dropdown-Dv9kgZM4.js";import"./AdminHeader-BLZTylm7.js";import"./Dropdown-l-da9rBz.js";import"./useMergedRefs-D75ORZ4e.js";import"./useWindow-BVJR-Id8.js";import"./NavbarContext-CqUhnY4e.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-8z7Z5zc5.js";import"./BootstrapModalManager-C0ljKC2c.js";import"./Fade-B7YvUX8l.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DXO1pmiC.js";import"./ToastNotification-CCAk__2k.js";import"./ReactToastify-E8VKSlRY.js";import"./react-select.esm-Mio-Dy5d.js";import"./Select-49a62830.esm-Bj4AoYc2.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-lOCJsOYN.js";import"./hoist-non-react-statics.cjs-CmBVkyqr.js";import"./ElementChildren-SFQOEKcw.js";import"./Col-Dp5XqYRZ.js";function le({auth:p}){const{data:i,setData:r,post:j,errors:t,reset:_}=g({image:"",facility_name:"",status:"1",position:"",icon:""}),u=s=>{s.preventDefault(),j(route("admin.facilities.store"))},[n,d]=b.useState(""),N=s=>{const a=s.target.files[0];a&&(r("image",a),d(URL.createObjectURL(a)))},f=()=>{r("image",""),d("")},l=(s,a)=>{r(s,a)};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Facility/Create"}),children:[e.jsx(v,{title:"Facility Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Facility"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.facilities.index"),children:"Facility"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Facility Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(m,{id:"facility-name",type:"text",name:"facility_name",className:"form-control",value:i.facility_name,onChange:s=>l("facility_name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:t.facility_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(o,{className:"fw-700 fs-16 form-label form-group__label",children:["Icon",e.jsxs("span",{className:"ms-5 text-danger",children:[" (",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Get from icon name"}),")"]})]}),e.jsx(m,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:i.icon,onChange:s=>l("icon",s.target.value),autoComplete:"off"}),e.jsx(c,{message:t.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(y,{onChange:s=>l("position",s),value:i.position}),e.jsx(c,{message:t.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(C.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(c,{message:t.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(m,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{le as default};
