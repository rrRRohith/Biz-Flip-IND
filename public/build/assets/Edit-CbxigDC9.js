import{W as N,r as t,j as e,Y as f,a as o}from"./app-CBDT_ghA.js";import{A as v}from"./AdminAuthenticated-CuxfdgPq.js";import{I as m}from"./InputError-DF7eorOj.js";import{T as c}from"./TextInput-_9kcbQHc.js";import{I as d}from"./InputLabel-BAx2MSOr.js";import"./SelectOption-D6SBD-xl.js";import"./DynamicSelect-CVMaKsXh.js";import{F as b}from"./Form-nMXmhsci.js";import{P as g}from"./PermissionAllow-BnAFY5Lb.js";import"./Dropdown-BKwAdTxP.js";import"./AdminHeader-DR6UZ_q8.js";import"./Dropdown-Bzq7v7Qy.js";import"./useMergedRefs-Bh24mJWa.js";import"./SSRProvider-tExD331u.js";import"./useWindow-2eudVQBH.js";import"./NavbarContext-T7kBOGSR.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Biui5D7Z.js";import"./BootstrapModalManager-DTUBZMch.js";import"./Fade-D5UtGihV.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DSGOK0hz.js";import"./ToastNotification-CiaamNRU.js";import"./ReactToastify-DWpULJSB.js";import"./react-select.esm-BrbT_xTm.js";import"./Select-49a62830.esm-CdgCXmPZ.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-oPfpWVJD.js";import"./hoist-non-react-statics.cjs-Bk4EYjYp.js";import"./ElementChildren-B62nTVpG.js";import"./Col-DkX7tpSZ.js";function te({province_item:s,queryParams:w=null,auth:n,countries:P}){const{data:r,setData:x,post:h,errors:i,reset:y}=N({image:"",name:s.name||"",code:s.code||"",status:s.status,position:s.position||"",_method:"PUT",remove_image:!1,country:s.country_name}),[E,p]=t.useState("");t.useEffect(()=>{s.image&&p(s.image)},[s.image]);const u=a=>{a.preventDefault(),h(route("admin.province.update",s.id))},l=(a,j)=>{x(a,j)};return e.jsxs(v,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Edit"}),children:[e.jsx(f,{title:"Province Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(o,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(o,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Province Edit",message:"true",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:a=>l("name",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(c,{id:"province-code",type:"text",name:"code",className:"form-control",value:r.code,onChange:a=>l("code",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.code,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(b.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:a=>l("status",a.target.checked?1:0)}),e.jsx(m,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12"})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{te as default};
