import{r as n,W as S,j as e,Y as I,a as p}from"./app-R6y9gL3g.js";import{A as T}from"./AdminAuthenticated-B2wS1uY8.js";import{I as l}from"./InputError-C2QaN2Nu.js";import{T as x}from"./TextInput-DFgzpvU2.js";import{I as r}from"./InputLabel-oTZjvInR.js";import{E as L}from"./index-pqP-K6GO.js";import{P as u}from"./PermissionAllow-D4BwgB5q.js";import{D as A}from"./DynamicSelect-DjZgTuJ6.js";import{F as O}from"./Form-C0tocSo4.js";import"./Dropdown-DgAiWIoo.js";import"./AdminHeader-CDhl87mA.js";import"./Dropdown-BlSHQWGn.js";import"./useMergedRefs-C3t7vQZD.js";import"./SSRProvider-xBs2tMT7.js";import"./useWindow-DRSLSfK6.js";import"./NavbarContext-DQxyGIWx.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CU6KdK5U.js";import"./BootstrapModalManager-aBqd47xI.js";import"./Fade-q808BQ0I.js";import"./index-CeBJEy_f.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DAW1pCwX.js";import"./ReactToastify-BMVUs_yP.js";import"./react-select.esm-CQdKVASU.js";import"./Select-49a62830.esm-D-F_Otqp.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-Bepk0hpa.js";import"./hoist-non-react-statics.cjs-DcoXb29O.js";import"./ElementChildren-Bnk9bHPl.js";import"./Col-Dvm8EQeK.js";function ge({page_item:a,auth:f,imageList:j}){const g=Object.entries(j).map(([s,m])=>({value:s,label:m})),[h,N]=n.useState(null),[b,v]=n.useState(a.slug),w={design:a.data,html:a.content},{data:o,setData:d,post:y,errors:t,reset:R}=S({title:a.title||"",status:1,seo_title:a.seo_title||"",seo_keywords:a.seo_keywords||"",seo_description:a.seo_description||"",image:a.banner_id||"",pageContent:w,_method:"PUT",id:a.id}),i=(s,m)=>{d(s,m)},_=s=>{d("title",s),v(C(s))},C=s=>s.toLowerCase().trim().replace(/[\s-]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,""),c=n.useRef(null);n.useEffect(()=>{d("pageContent",h)},[h]);const E=async s=>{s.preventDefault(),y(route("admin.content-page.update",a.id))},k=()=>{c.current.editor.exportHtml(s=>{const{design:m,html:D}=s;N({design:m,html:D})})},P=s=>{s.setBodyValues({contentWidth:"inherit"})};return e.jsxs(T,{user:f.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Page/Edit"}),children:[e.jsx(I,{title:"Page Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Pages"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.content-page.index"),children:"Pages"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Content Page Edit",message:!0,children:e.jsx("form",{onSubmit:E,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(x,{id:"title",type:"text",name:"title",className:"form-control",value:o.title,onChange:s=>_(s.target.value),autoComplete:"off"}),e.jsxs("label",{class:"block font-medium text-sm text-blue fw-700 fs-16 form-label form-label",children:["/",b]}),e.jsx(l,{message:t.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(A,{onChange:s=>i("image",s),value:o.image,options:g,name:"image",defaultValue:a.image}),e.jsx(l,{message:t.image,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-label",children:"Design page"}),e.jsx(l,{message:t.pageContent,className:"mt-2 col-12"}),e.jsx(L,{onReady:P,ref:c,onLoad:()=>{c.current.editor.addEventListener("design:updated",k),c.current.editor.loadDesign(a.data)}})]})})}),e.jsxs("div",{className:"row mt-3",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(x,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:o.seo_title,onChange:s=>i("seo_title",s.target.value),autoComplete:"off"}),e.jsx(l,{message:t.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(x,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:o.seo_keywords,onChange:s=>i("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(l,{message:t.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx("textarea",{rows:3,id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:o.seo_description,onChange:s=>i("seo_description",s.target.value),autoComplete:"off"}),e.jsx(l,{message:t.seo_description,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(O.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:o.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(l,{message:t.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"row"}),e.jsx("div",{className:"form-actions mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success me-2",children:"Save"})})]})})})})})})})})]})})]})}export{ge as default};
