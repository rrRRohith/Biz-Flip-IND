import{W as v,r as h,j as e,Y as w,a as p}from"./app-CBDT_ghA.js";import{A as C}from"./AdminAuthenticated-CuxfdgPq.js";import{I as c}from"./InputError-DF7eorOj.js";import{T as n}from"./TextInput-_9kcbQHc.js";import{I as d}from"./InputLabel-BAx2MSOr.js";import{S as I}from"./SelectOption-D6SBD-xl.js";import{P as u}from"./PermissionAllow-BnAFY5Lb.js";import{F as _}from"./Form-nMXmhsci.js";import"./Dropdown-BKwAdTxP.js";import"./AdminHeader-DR6UZ_q8.js";import"./Dropdown-Bzq7v7Qy.js";import"./useMergedRefs-Bh24mJWa.js";import"./SSRProvider-tExD331u.js";import"./useWindow-2eudVQBH.js";import"./NavbarContext-T7kBOGSR.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Biui5D7Z.js";import"./BootstrapModalManager-DTUBZMch.js";import"./Fade-D5UtGihV.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DSGOK0hz.js";import"./ToastNotification-CiaamNRU.js";import"./ReactToastify-DWpULJSB.js";import"./react-select.esm-BrbT_xTm.js";import"./Select-49a62830.esm-CdgCXmPZ.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-oPfpWVJD.js";import"./hoist-non-react-statics.cjs-Bk4EYjYp.js";import"./ElementChildren-B62nTVpG.js";import"./Col-DkX7tpSZ.js";function ce({features_item:a,queryParams:y=null,auth:j}){const{data:i,setData:r,post:g,errors:l,reset:k}=v({image:"",feature_name:a.name||"",status:a.status,position:a.position||"",_method:"PUT",remove_image:!1,icon:a.icon}),[x,m]=h.useState("");h.useEffect(()=>{a.icon&&m(a.icon)},[a.icon]);const N=s=>{const t=s.target.files[0];t&&(r("image",t),m(URL.createObjectURL(t)))},b=()=>{r("image",""),m(""),r("remove_image",!0)},f=s=>{s.preventDefault(),g(route("admin.features.update",a.id))},o=(s,t)=>{r(s,t)};return e.jsxs(C,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Edit"}),children:[e.jsx(w,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.features.index"),children:"Features"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Feature Create",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:i.feature_name,onChange:s=>o("feature_name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:l.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsxs(d,{className:"fw-700 fs-16 form-label form-group__label",children:["Bootstrap icon class (eg bi-car-front-fill)",e.jsxs("span",{className:"ms-5 text-danger",children:[" - ",e.jsx("a",{href:"https://icons.getbootstrap.com/",className:"text-danger",target:"_nw",children:"Open icon list"})]})]}),e.jsx(n,{id:"icon-name",type:"text",name:"icon",className:"form-control",value:i.icon,onChange:s=>o("icon",s.target.value),autoComplete:"off"}),e.jsx(c,{message:l.icon,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(I,{onChange:s=>o("position",s),value:i.position,defaultValue:i.position}),e.jsx(c,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(_.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>o("status",s.target.checked?1:0)}),e.jsx(c,{message:l.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3 d-none",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{ce as default};
