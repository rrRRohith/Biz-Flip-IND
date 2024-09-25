import{W as f,j as e,Y as j,a as c}from"./app-BP1ASY9m.js";import{A as N}from"./AdminAuthenticated-C34ejvVU.js";import{I as m}from"./InputError-DaSlgYBj.js";import{T as o}from"./TextInput-DvzZpDDw.js";import{I as t}from"./InputLabel-T-Y_H_Xj.js";import{D as b}from"./DynamicMultiSelect-rF_OgiLu.js";import{F as v}from"./Form-Dsi3Zu4Y.js";import{P as g}from"./PermissionAllow-DDRUKtYh.js";import"./Dropdown-ErKsyKJB.js";import"./AdminHeader-DclFL37X.js";import"./Dropdown-CuM2Misa.js";import"./useMergedRefs-C7i9xQs_.js";import"./useWindow-CjeW6bh8.js";import"./NavbarContext-Ci8xUASw.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B-nPVonw.js";import"./BootstrapModalManager-CtfNojTw.js";import"./Fade-DClmjdQ0.js";import"./index-BggJkT38.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-paLV-kgH.js";import"./ReactToastify-DsLGQMwT.js";import"./Select-49a62830.esm-DEzrXKfT.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-B87KevhJ.js";import"./hoist-non-react-statics.cjs-Cpx4YngB.js";import"./ElementChildren-Cc_CeouD.js";import"./Col-zGi4pwZ3.js";function ae({subscriber_item:a,queryParams:_=null,auth:n}){const{data:l,setData:d,post:u,errors:r,reset:y}=f({firstname:a.firstname||"",lastname:a.lastname||"",email_id:a.email_id||"",type_of_needed:a.type_of_needed||[],status:a.status||1,_method:"PUT"}),p=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}],x=s=>{s.preventDefault(),u(route("admin.subscribers.update",a.id))},i=(s,h)=>{d(s,h)};return e.jsxs(N,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Edit"}),children:[e.jsx(j,{title:"News Subscriber Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Subscriber Edit",message:"true",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(o,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:s=>i("firstname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(o,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:s=>i("lastname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(o,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:l.email_id,onChange:s=>i("email_id",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(b,{onChange:s=>i("type_of_needed",s),value:l.type_of_needed,options:p,name:"type_of_needed"}),e.jsx(m,{message:r.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status!==1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{ae as default};
