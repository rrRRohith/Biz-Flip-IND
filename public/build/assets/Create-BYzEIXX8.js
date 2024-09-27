import{r as n,W as w,j as e,Y as y,a as x}from"./app-BGtL1idN.js";import{A as E}from"./AdminAuthenticated-Ceq30wD9.js";import{I as t}from"./InputError-Cpiixjv0.js";import{T as m}from"./TextInput-Ccwi3BSp.js";import{I as l}from"./InputLabel-CLKD64m5.js";import{E as k}from"./index-7XY-IHWC.js";import{P as h}from"./PermissionAllow-BAFgtCD_.js";import{D as P}from"./DynamicSelect-DiLPwAR6.js";import{F as D}from"./Form-NmR2jJ0-.js";import"./Dropdown-DDOkRdOL.js";import"./AdminHeader-Dli3e8ya.js";import"./Dropdown-BXLrSV09.js";import"./useMergedRefs-Dg_ayAfe.js";import"./SSRProvider-BlUcPW8O.js";import"./useWindow-DVdbgo_X.js";import"./NavbarContext-De51xqev.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BRq7hUFn.js";import"./BootstrapModalManager-CYKKLntR.js";import"./Fade-CLSnjR4s.js";import"./index-WDzcDGFf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-B1x0Gbjx.js";import"./ReactToastify-BO42l_97.js";import"./react-select.esm-Di3uNUSz.js";import"./Select-49a62830.esm-CjMxPtNs.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-DimeYzFi.js";import"./hoist-non-react-statics.cjs-BRtGKWye.js";import"./ElementChildren-56bvTiZG.js";import"./Col-EDzVjeAE.js";function pe({auth:j,imageList:u}){const f=Object.entries(u).map(([s,i])=>({value:s,label:i})),[d,g]=n.useState(null),{data:r,setData:p,post:N,errors:a,reset:S}=w({title:"",status:1,seo_title:"",seo_keywords:"",seo_description:"",image:"",pageContent:""}),o=(s,i)=>{p(s,i)},c=n.useRef(null);n.useEffect(()=>{p("pageContent",d)},[d]);const b=async s=>{s.preventDefault(),N(route("admin.content-page.store"))},v=()=>{c.current.editor.exportHtml(s=>{const{design:i,html:C}=s;g({design:i,html:C})})},_=s=>{s.setBodyValues({contentWidth:"inherit"})};return e.jsxs(E,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Page/Create"}),children:[e.jsx(y,{title:"Page Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.content-page.index"),children:"Pages"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Content Page Create",message:!0,children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",className:"form-control",value:r.title,onChange:s=>o("title",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(P,{onChange:s=>o("image",s),value:r.image,options:f,name:"image"}),e.jsx(t,{message:a.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(m,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:r.seo_title,onChange:s=>o("seo_title",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(m,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:r.seo_keywords,onChange:s=>o("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(m,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:r.seo_description,onChange:s=>o("seo_description",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(t,{message:a.pageContent,className:"mt-2 col-12"}),e.jsx(k,{onReady:_,ref:c,onLoad:()=>{c.current.editor.addEventListener("design:updated",v)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(D.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>o("status",s.target.checked?1:0)}),e.jsx(t,{message:a.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{pe as default};
