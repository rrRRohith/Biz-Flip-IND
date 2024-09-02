import{W as N,r as t,j as e,Y as f,a as c}from"./app-BLep4a_v.js";import{A as v}from"./AdminAuthenticated-C_X71V-Q.js";import{I as m}from"./InputError-MwQouRg7.js";import{T as o}from"./TextInput-iQfSGAgu.js";import{I as d}from"./InputLabel-BD_rBY5P.js";import"./SelectOption-Brd902jQ.js";import"./DynamicSelect-B6XEIOmE.js";import{F as b}from"./Form-D5LcdqkV.js";import{P as g}from"./PermissionAllow-Bw1nH26z.js";import"./Dropdown-C-ntnV8Y.js";import"./AdminHeader-BYBR0nrz.js";import"./Dropdown-DaR_s_6f.js";import"./listen-bVhbO5mt.js";import"./useWindow-CgfjH_xT.js";import"./Anchor-Djf5sm_B.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Ce-lT5oA.js";import"./BootstrapModalManager-Z6MjKZtp.js";import"./Fade-DuAq4uZE.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-YoWyG7So.js";import"./ToastNotification-xqERWRZD.js";import"./react-select.esm-DoLQJpXZ.js";import"./Select-49a62830.esm-DGV6mq4z.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-Cd21aDf9.js";import"./hoist-non-react-statics.cjs-BNmgfxmt.js";import"./ElementChildren-p4mpdXRK.js";import"./Col-D7iuAHVK.js";function le({province_item:s,queryParams:w=null,auth:n,countries:P}){const{data:r,setData:x,post:h,errors:i,reset:y}=N({image:"",name:s.name||"",code:s.code||"",status:s.status=1,position:s.position||"",_method:"PUT",remove_image:!1,country:s.country_name}),[E,u]=t.useState("");t.useEffect(()=>{s.image&&u(s.image)},[s.image]);const p=a=>{a.preventDefault(),h(route("admin.province.update",s.id))},l=(a,j)=>{x(a,j)};return e.jsxs(v,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Edit"}),children:[e.jsx(f,{title:"Province Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Province Edit",message:"true",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:a=>l("name",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(o,{id:"province-code",type:"text",name:"code",className:"form-control",value:r.code,onChange:a=>l("code",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.code,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(b.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:a=>l("status",a.target.checked?1:0)}),e.jsx(m,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12"})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{le as default};
