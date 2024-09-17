import{W as C,r as x,j as e,Y as I,a as j}from"./app-BjRDVr7K.js";import{A as S}from"./AdminAuthenticated-DT-tO4x8.js";import{I as c}from"./InputError-DCTNKh6L.js";import{T as m}from"./TextInput-BvjCnLfT.js";import{I as n}from"./InputLabel-DJJunxRi.js";import{S as E}from"./SelectOption-B_ajZUj0.js";import{D as P}from"./DynamicSelect-P0lXrg3V.js";import{P as b}from"./PermissionAllow-DNNBW3FI.js";import{F as T}from"./Form-DOISYDx6.js";import"./Dropdown-Bf0mxkws.js";import"./AdminHeader-CpXCJvEE.js";import"./Dropdown-COIvMzCO.js";import"./listen-KPXmgqRh.js";import"./useWindow-qoUGISga.js";import"./Anchor-BS2sRxwm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DvLCd-L0.js";import"./BootstrapModalManager-C4N9f22L.js";import"./Fade-DO0vLiWL.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VofWu8MJ.js";import"./ToastNotification-Bs7WZX92.js";import"./ReactToastify-BdR81KYl.js";import"./react-select.esm-DZftWkmQ.js";import"./Select-49a62830.esm-BSqm6uZ4.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BQRk229a.js";import"./hoist-non-react-statics.cjs-DHDiPd3B.js";import"./ElementChildren-BzHK84fa.js";import"./Col-BCuTZvsx.js";function he({banner:t,queryParams:B=null,auth:g,countries:D}){const{data:a,setData:l,post:N,errors:r,reset:R}=C({title:t.title||"",redirection:t.redirection||"",type:t.type||"",new_window:t.new_window||"",picture_desktop:"",picture_mobile:"",position:t.position||"",status:t.status||1,_method:"PUT",remove_image:!1,remove_image2:!1}),f=s=>{s.preventDefault(),N(route("admin.banners.update",t.id))},[u,d]=x.useState(""),[h,p]=x.useState("");x.useEffect(()=>{t.picture_desktop&&d(t.picture_desktop),t.picture_mobile&&p(t.picture_mobile)},[t.picture_desktop,t.picture_mobile]);const v=s=>{const i=s.target.files[0];i&&(l("picture_desktop",i),d(URL.createObjectURL(i)))},_=()=>{l("picture_desktop",""),d(""),l("remove_image",!0)},w=s=>{const i=s.target.files[0];i&&(l("picture_mobile",i),p(URL.createObjectURL(i)))},k=()=>{l("picture_mobile",""),p(""),l("remove_image2",!0)},o=(s,i)=>{l(s,i)},y=[{value:"Banner Slider",label:"Banner Slider"},{value:"Home Tile",label:"Home Tile"},{value:"Page Top Tile",label:"Page Top Tile"}];return e.jsxs(S,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banner/Edit"}),children:[e.jsx(I,{title:"Banner Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Banner"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(b,{permission:"Banners Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.banners.index"),children:"Banners"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Banner Edit",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",className:"form-control",value:a.title,onChange:s=>o("title",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Redirection"}),e.jsx(m,{id:"redirection",type:"text",name:"redirection",className:"form-control",value:a.redirection,onChange:s=>o("redirection",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.redirection,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Type"}),e.jsx(P,{onChange:s=>o("type",s),value:a.type,options:y,name:"type",defaultValue:a.type}),e.jsx(c,{message:r.type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(E,{onChange:s=>o("position",s),value:a.position,defaultValue:a.position}),e.jsx(c,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(T.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>o("status",s.target.checked?1:0)}),e.jsx(c,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Desktop Image"}),e.jsxs("div",{className:"desktop-img",children:[u?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:u,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:_})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"w-50 mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(m,{id:"project_image_path",type:"file",name:"picture_desktop",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Mobile Image"}),e.jsxs("div",{className:"desktop-img",children:[h?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:h,alt:"Selected",className:"w-50  rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:k})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"w-50 mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(m,{id:"project_image_path2",type:"file",name:"picture_mobile",className:"d-none mt-1 block w-full upload",onChange:w})]})]})]})})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{he as default};