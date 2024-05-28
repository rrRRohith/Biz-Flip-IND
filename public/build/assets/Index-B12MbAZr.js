import{W as h,j as e,Y as g,a as j}from"./app-BNxhFZPN.js";import{A as N}from"./AdminAuthenticated-BNTQeCzo.js";import{T as n,I as m}from"./TextInput-Bpw-dXUT.js";import{I as r}from"./InputLabel-j8fEykWS.js";import"./SelectOption-4xHuNeAp.js";import{D as b}from"./DynamicSelect-DBn0i4K_.js";import"./Dropdown-B2Y32odu.js";import"./AdminSidebar-DUpkTSpT.js";import"./Select-49a62830.esm-DYNKg3tM.js";import"./emotion-react.browser.esm-BFaL3Ngl.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./react-select-creatable.esm-BcKnCRvt.js";function G({company_settings:l,queryParams:k=null,auth:t,success:c=null,error:d=null}){const{data:s,setData:f,post:_,errors:i,reset:v}=h({facebook_link:l.facebook_link||"",instagram_link:l.instagram_link||"",linkedin_link:l.linkedin_link||"",youtube_link:l.youtube_link||"",twitter_link:l.twitter_link||"",seo_title:l.seo_title||"",seo_description:l.seo_description||"",seo_keywords:l.seo_keywords||"",email_config_api_url:l.email_config_api_url||"",email_config_api_key:l.email_config_api_key||"",email_config_api_method:l.email_config_api_method||"",_method:"PUT"}),x=a=>{a.preventDefault(),_(route("admin.company-settings.update",l.id))},u=[{value:"GET",label:"GET"},{value:"POST",label:"POST"}],o=(a,p)=>{f(a,p)};return e.jsxs(N,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Company Settings"}),success:c,error:d,children:[e.jsx(g,{title:"Company Settings"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Company Settings"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Company Settings"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Facebook Link"}),e.jsx(n,{id:"facebook_link",type:"text",name:"facebook_link",className:"form-control",value:s.facebook_link,onChange:a=>o("facebook_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.facebook_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Instagram Link"}),e.jsx(n,{id:"instagram_link",type:"text",name:"instagram_link",className:"form-control",value:s.instagram_link,onChange:a=>o("instagram_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.instagram_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Linkedin Link"}),e.jsx(n,{id:"linkedin_link",type:"text",name:"linkedin_link",className:"form-control",value:s.linkedin_link,onChange:a=>o("linkedin_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.linkedin_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Youtube Link"}),e.jsx(n,{id:"youtube_link",type:"text",name:"youtube_link",className:"form-control",value:s.youtube_link,onChange:a=>o("youtube_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.youtube_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Twitter Link"}),e.jsx(n,{id:"twitter_link",type:"text",name:"twitter_link",className:"form-control",value:s.twitter_link,onChange:a=>o("twitter_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.twitter_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configration Api Url"}),e.jsx(n,{id:"email_config_api_url",type:"text",name:"email_config_api_url",className:"form-control",value:s.email_config_api_url,onChange:a=>o("email_config_api_url",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.email_config_api_url,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configration Api Key"}),e.jsx(n,{id:"email_config_api_key",type:"text",name:"email_config_api_key",className:"form-control",value:s.email_config_api_key,onChange:a=>o("email_config_api_key",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.email_config_api_key,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configration Api Method"}),e.jsx(b,{onChange:a=>o("email_config_api_method",a),value:s.email_config_api_method,options:u,name:"email_config_api_method"}),e.jsx(m,{message:i.email_config_api_method,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(n,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:s.seo_title,onChange:a=>o("seo_title",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(n,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:s.seo_description,onChange:a=>o("seo_description",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.seo_description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(r,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(n,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:s.seo_keywords,onChange:a=>o("seo_keywords",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.seo_keywords,className:"mt-2 col-12"})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Update Data"]})})]})})})})})})]})})]})}export{G as default};