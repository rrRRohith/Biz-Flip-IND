import{r as n,W as _,j as e,Y as w,a as p}from"./app-C7Wmsx-r.js";import{A as y}from"./AdminAuthenticated-BzMDgxo7.js";import{I as t}from"./InputError-Dhrn_y_m.js";import{T as m}from"./TextInput-DZGZRR4s.js";import{I as o}from"./InputLabel-B3dXs8C1.js";import{E}from"./index-DRfanjTe.js";import{P as h}from"./PermissionAllow-SWIDdt0G.js";import{D as k}from"./DynamicSelect-B_R3PZmB.js";import{F as P}from"./Form-CXiDeBVp.js";import"./Dropdown-B0qLyvOA.js";import"./AdminSidebar-DQ0wRrkg.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Anchor-CEqg9jmj.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CzsITtD-.js";import"./ToastNotification-gx8mAVOD.js";import"./react-select-creatable.esm-DirrFLVl.js";import"./useStateManager-7e1e8489.esm-K7qsbL5R.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DdNgd-M_.js";import"./hoist-non-react-statics.cjs-Ae5wMIlW.js";import"./index-D1UJqtKR.js";import"./index-Chjiymov.js";import"./ElementChildren-XGPhXeTL.js";import"./Col-D0K24Uvi.js";function oe({auth:j,imageList:f}){const u=Object.entries(f).map(([s,i])=>({value:s,label:i})),[d,g]=n.useState(null),{data:r,setData:x,post:N,errors:a,reset:D}=_({title:"",status:1,seo_title:"",seo_keywords:"",seo_description:"",image:"",pageContent:""}),l=(s,i)=>{x(s,i)},c=n.useRef(null);n.useEffect(()=>{x("pageContent",d)},[d]);const b=async s=>{s.preventDefault(),N(route("admin.content-page.store"))},v=()=>{c.current.editor.exportHtml(s=>{const{design:i,html:C}=s;g({design:i,html:C})})};return e.jsxs(y,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Create"}),children:[e.jsx(w,{title:"Content Page Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Content Page Create",message:!0,children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",className:"form-control",value:r.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(k,{onChange:s=>l("image",s),value:r.image,options:u,name:"image"}),e.jsx(t,{message:a.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(m,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:r.seo_title,onChange:s=>l("seo_title",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(m,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:r.seo_keywords,onChange:s=>l("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(m,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:r.seo_description,onChange:s=>l("seo_description",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(t,{message:a.pageContent,className:"mt-2 col-12"}),e.jsx(E,{ref:c,onLoad:()=>{c.current.editor.addEventListener("design:updated",v)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(P.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(t,{message:a.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{oe as default};
