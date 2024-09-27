import{r as d,W as E,j as e,Y as P,a as p}from"./app-CQIRDB_X.js";import{A as k}from"./AdminAuthenticated-DX54AluG.js";import{I as o}from"./InputError-Cmx0lrw6.js";import{T as c}from"./TextInput-iSISYBDJ.js";import{I as i}from"./InputLabel-KA8OXQzc.js";import{E as D}from"./index-Cuu1Tapj.js";import{P as u}from"./PermissionAllow-twJbe2hf.js";import{D as S}from"./DynamicSelect-H789IrDS.js";import{F as I}from"./Form-B1CwxW3R.js";import"./Dropdown-QRzkMtG8.js";import"./AdminHeader-BuqDWglL.js";import"./Dropdown-BxzEHkzu.js";import"./useMergedRefs-BzCFH6f-.js";import"./SSRProvider-ClyxOBUY.js";import"./useWindow-DgAo-4V8.js";import"./NavbarContext-D_AIF8F9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CrHqqKcv.js";import"./BootstrapModalManager-D09_UzHb.js";import"./Fade-CO1Sws4T.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BTISSp39.js";import"./ToastNotification-CIvtYDRL.js";import"./ReactToastify-McQGZ74s.js";import"./react-select.esm-Binnh_wz.js";import"./Select-49a62830.esm-13r5pgxB.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-BJVtzPrT.js";import"./hoist-non-react-statics.cjs-Ezi43cMB.js";import"./ElementChildren-eYZcRYP8.js";import"./Col-BL4QCXDh.js";function pe({page_item:t,auth:j,imageList:f}){const g=Object.entries(f).map(([s,m])=>({value:s,label:m})),[x,N]=d.useState(null),b={design:t.data,html:t.content},{data:r,setData:h,post:v,errors:a,reset:T}=E({title:t.title||"",status:1,seo_title:t.seo_title||"",seo_keywords:t.seo_keywords||"",seo_description:t.seo_description||"",image:t.banner_id||"",pageContent:b,_method:"PUT"}),l=(s,m)=>{h(s,m)},n=d.useRef(null);d.useEffect(()=>{h("pageContent",x)},[x]);const w=async s=>{s.preventDefault(),v(route("admin.content-page.update",t.id))},C=()=>{n.current.editor.exportHtml(s=>{const{design:m,html:y}=s;N({design:m,html:y})})},_=s=>{s.setBodyValues({contentWidth:"inherit"})};return e.jsxs(k,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Edit"}),children:[e.jsx(P,{title:"Content Page Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Content Page Edit",message:!0,children:e.jsx("form",{onSubmit:w,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(c,{id:"title",type:"text",name:"title",className:"form-control",value:r.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:a.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(S,{onChange:s=>l("image",s),value:r.image,options:g,name:"image",defaultValue:t.image}),e.jsx(o,{message:a.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(c,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:r.seo_title,onChange:s=>l("seo_title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:a.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(c,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:r.seo_keywords,onChange:s=>l("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(o,{message:a.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(c,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:r.seo_description,onChange:s=>l("seo_description",s.target.value),autoComplete:"off"}),e.jsx(o,{message:a.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(o,{message:a.pageContent,className:"mt-2 col-12"}),e.jsx(D,{onReady:_,ref:n,onLoad:()=>{n.current.editor.addEventListener("design:updated",C),n.current.editor.loadDesign(t.data)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(I.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(o,{message:a.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{pe as default};
