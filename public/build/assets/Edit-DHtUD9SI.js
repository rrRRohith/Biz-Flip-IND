<<<<<<<< HEAD:public/build/assets/Edit-DHtUD9SI.js
import{r as d,W as y,j as e,Y as E,a as p}from"./app-NOf8Ud2Y.js";import{A as P}from"./AdminAuthenticated-BvfjHjqe.js";import{I as o}from"./InputError-BdgXvWt_.js";import{T as c}from"./TextInput-BDN7Nh6k.js";import{I as i}from"./InputLabel-Mj6lnj-0.js";import{E as k}from"./index-Dujo710A.js";import{P as u}from"./PermissionAllow-DuJ9Iv_Y.js";import{D}from"./DynamicSelect-DOBuTmDv.js";import{F as S}from"./Form-tqNuHPHs.js";import"./Dropdown-BeYQcZ-k.js";import"./AdminHeader-CMTsUJ_A.js";import"./Dropdown-DvMLigQO.js";import"./listen-DAonDIvx.js";import"./useWindow-CHvFuoXy.js";import"./Anchor-Bk6fN3Km.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Blf2R5jN.js";import"./BootstrapModalManager-BrrHINVF.js";import"./Fade-BeIZaMCs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-0eJ9DX1U.js";import"./ToastNotification-beDGr7FA.js";import"./ReactToastify-Dj4qrOSt.js";import"./react-select.esm-Zq4xYsl7.js";import"./Select-49a62830.esm-yfvIYKNF.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CsTObgxi.js";import"./hoist-non-react-statics.cjs-D1VeiPUh.js";import"./ElementChildren-Dnnap9xS.js";import"./Col-ubKeuqZO.js";function xe({page_item:a,auth:j,imageList:f}){const g=Object.entries(f).map(([s,m])=>({value:s,label:m})),[x,N]=d.useState(null),b={design:a.data,html:a.content},{data:l,setData:h,post:v,errors:t,reset:I}=y({title:a.title||"",status:1,seo_title:a.seo_title||"",seo_keywords:a.seo_keywords||"",seo_description:a.seo_description||"",image:a.banner_id||"",pageContent:b,_method:"PUT"}),r=(s,m)=>{h(s,m)},n=d.useRef(null);d.useEffect(()=>{h("pageContent",x)},[x]);const w=async s=>{s.preventDefault(),v(route("admin.content-page.update",a.id))},C=()=>{n.current.editor.exportHtml(s=>{const{design:m,html:_}=s;N({design:m,html:_})})};return e.jsxs(P,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Edit"}),children:[e.jsx(E,{title:"Content Page Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Content Page Edit",message:!0,children:e.jsx("form",{onSubmit:w,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(c,{id:"title",type:"text",name:"title",className:"form-control",value:l.title,onChange:s=>r("title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(D,{onChange:s=>r("image",s),value:l.image,options:g,name:"image",defaultValue:a.image}),e.jsx(o,{message:t.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(c,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:l.seo_title,onChange:s=>r("seo_title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(c,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:l.seo_keywords,onChange:s=>r("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(c,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:l.seo_description,onChange:s=>r("seo_description",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(o,{message:t.pageContent,className:"mt-2 col-12"}),e.jsx(k,{ref:n,onLoad:()=>{n.current.editor.addEventListener("design:updated",C),n.current.editor.loadDesign(a.data)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(S.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(o,{message:t.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{xe as default};
========
import{r as d,W as y,j as e,Y as E,a as p}from"./app-DvZEQs7q.js";import{A as P}from"./AdminAuthenticated-znZDMwen.js";import{I as o}from"./InputError-BLcqGYnS.js";import{T as c}from"./TextInput-D1PlEwEu.js";import{I as i}from"./InputLabel-25ByoFv4.js";import{E as k}from"./index-D134iahF.js";import{P as u}from"./PermissionAllow-DjiL2LeK.js";import{D}from"./DynamicSelect-C0SWDV6o.js";import{F as S}from"./Form-CQI4Qylm.js";import"./Dropdown-BatJtg61.js";import"./AdminHeader-CrVBgSW2.js";import"./Dropdown-CuQS9aha.js";import"./listen-B73106F4.js";import"./useWindow-DCw2ZySZ.js";import"./Anchor-CDa32GWz.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DeYRaHSg.js";import"./BootstrapModalManager-DtfyV_Y4.js";import"./Fade-nrbR4rxK.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BHIby_lu.js";import"./ToastNotification-Yj8jc6-v.js";import"./ReactToastify-uiHPkRGu.js";import"./react-select.esm-BVUURsEn.js";import"./Select-49a62830.esm-D0RUBDeS.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-xdAJojEI.js";import"./hoist-non-react-statics.cjs-B9q_QMYK.js";import"./ElementChildren-BWHT-j42.js";import"./Col-Dw8Pa575.js";function xe({page_item:a,auth:j,imageList:f}){const g=Object.entries(f).map(([s,m])=>({value:s,label:m})),[x,N]=d.useState(null),b={design:a.data,html:a.content},{data:l,setData:h,post:v,errors:t,reset:I}=y({title:a.title||"",status:1,seo_title:a.seo_title||"",seo_keywords:a.seo_keywords||"",seo_description:a.seo_description||"",image:a.banner_id||"",pageContent:b,_method:"PUT"}),r=(s,m)=>{h(s,m)},n=d.useRef(null);d.useEffect(()=>{h("pageContent",x)},[x]);const w=async s=>{s.preventDefault(),v(route("admin.content-page.update",a.id))},C=()=>{n.current.editor.exportHtml(s=>{const{design:m,html:_}=s;N({design:m,html:_})})};return e.jsxs(P,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Edit"}),children:[e.jsx(E,{title:"Content Page Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Content Page Edit",message:!0,children:e.jsx("form",{onSubmit:w,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(c,{id:"title",type:"text",name:"title",className:"form-control",value:l.title,onChange:s=>r("title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(D,{onChange:s=>r("image",s),value:l.image,options:g,name:"image",defaultValue:a.image}),e.jsx(o,{message:t.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(c,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:l.seo_title,onChange:s=>r("seo_title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(c,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:l.seo_keywords,onChange:s=>r("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(c,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:l.seo_description,onChange:s=>r("seo_description",s.target.value),autoComplete:"off"}),e.jsx(o,{message:t.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(o,{message:t.pageContent,className:"mt-2 col-12"}),e.jsx(k,{ref:n,onLoad:()=>{n.current.editor.addEventListener("design:updated",C),n.current.editor.loadDesign(a.data)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(S.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(o,{message:t.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{xe as default};
>>>>>>>> 470c74d89ca7d7db853d4fce4809f9e3b5a4e1a7:public/build/assets/Edit-B_5kw0Et.js
