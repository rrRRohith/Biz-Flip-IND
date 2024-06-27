import{W as v,r as h,j as e,Y as w,a as u}from"./app-hnfrkFZg.js";import{A as y}from"./AdminAuthenticated-Cv4Vg8Vq.js";import{I as m}from"./InputError-DusLNygE.js";import{T as d}from"./TextInput-ClCF4dnK.js";import{I as c}from"./InputLabel-CG14koSY.js";import{S as C}from"./SelectOption-CoAFfQjC.js";import{D as I}from"./DynamicSelect-jPFDohWw.js";import{F as E}from"./Form-BKbJkW_G.js";import"./Dropdown-Ca-UCSU0.js";import"./AdminSidebar-DA2ORclv.js";import"./listen-DT5iH6cS.js";import"./useWindow-BqAU_gkT.js";import"./Anchor-C_LCvmXY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9RErJyb.js";import"./PermissionAllow-DpFhgEPZ.js";import"./ToastNotification-EgQe7kOo.js";import"./react-select.esm-BwjQvwwb.js";import"./useStateManager-7e1e8489.esm-Cok-RV1I.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-ZojVR3yc.js";import"./hoist-non-react-statics.cjs-C5HjtOxa.js";import"./react-select-creatable.esm-CG5_FEGR.js";import"./index-CtPsS-RI.js";import"./index-Chjiymov.js";import"./ElementChildren-DtcqwvE-.js";import"./Col-DyJIwJwq.js";function re({province_item:a,queryParams:P=null,auth:j,countries:p}){const{data:l,setData:o,post:N,errors:t,reset:k}=v({image:"",name:a.name||"",code:a.code||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1,country:a.country_name}),[x,n]=h.useState("");h.useEffect(()=>{a.image&&n(a.image)},[a.image]);const g=s=>{const r=s.target.files[0];r&&(o("image",r),n(URL.createObjectURL(r)))},b=()=>{o("image",""),n(""),o("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.province.update",a.id))},i=(s,r)=>{o(s,r)};return e.jsxs(y,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Edit"}),children:[e.jsx(w,{title:"Province Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(u,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(d,{id:"province-code",type:"text",name:"code",className:"form-control",value:l.code,onChange:s=>i("code",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(I,{options:p,onChange:s=>i("country",s),value:l.country,defaultValue:l.country}),e.jsx(m,{message:t.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>i("position",s),value:l.position,defaultValue:l.position}),e.jsx(m,{message:t.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(E.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(m,{message:t.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:g})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{re as default};
