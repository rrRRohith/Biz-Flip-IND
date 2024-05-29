import{W as v,r as d,j as e,Y as w,a as x}from"./app-Ce4nVPSv.js";import{A as I}from"./AdminAuthenticated-DFE4wL38.js";import{I as n}from"./InputError-DdG6jy3g.js";import{T as h}from"./TextInput-CLVd4khO.js";import{I as u}from"./InputLabel-Wzc1bc8a.js";import{S as C}from"./SelectOption-sE0IMKG5.js";import{R as j}from"./RadioButtonLabel-C4-ZZ8jW.js";import"./Dropdown-BaINlLOw.js";import"./AdminSidebar-C_IBhiI5.js";import"./ToastNotification-Cst6kWz9.js";import"./react-select.esm-BF9K53j0.js";import"./Select-49a62830.esm-BAMjzVJP.js";import"./emotion-react.browser.esm-B1W4S1lM.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";function W({features_item:a,queryParams:y=null,auth:p}){const{data:l,setData:t,post:N,errors:c,reset:_}=v({image:"",feature_name:a.name||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[o,m]=d.useState("");d.useEffect(()=>{a.icon&&m(a.icon)},[a.icon]);const b=s=>{const i=s.target.files[0];i&&(t("image",i),m(URL.createObjectURL(i)))},g=()=>{t("image",""),m(""),t("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.features.update",a.id))},r=(s,i)=>{t(s,i)};return e.jsxs(I,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Edit"}),children:[e.jsx(w,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.features.index"),children:"Features"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(u,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(h,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:l.feature_name,onChange:s=>r("feature_name",s.target.value),autoComplete:"off"}),e.jsx(n,{message:c.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(u,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>r("position",s),value:l.position,defaultValue:l.position}),e.jsx(n,{message:c.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(j,{name:"status",onChange:s=>r("status",s),value:"1",checked:l.status===1,label:"Published"}),e.jsx(j,{name:"status",onChange:s=>r("status",s),value:"0",checked:l.status===0,label:"Draft"}),e.jsx(n,{message:c.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[o?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:o,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{W as default};