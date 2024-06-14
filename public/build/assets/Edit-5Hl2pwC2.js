import{W as v,r as h,j as e,Y as C,a as j}from"./app-DOZcIWVh.js";import{A as w}from"./AdminAuthenticated-CBQJ-3I7.js";import{I as c}from"./InputError-COM9Dc_m.js";import{T as n}from"./TextInput-5vkQ05jO.js";import{I as d}from"./InputLabel-DDRTzj_T.js";import{S as y}from"./SelectOption-DEEfjd1A.js";import{R as u}from"./RadioButtonLabel-ClqdM3l2.js";import"./Dropdown-BYdKb6tQ.js";import"./AdminSidebar-BGLDizeY.js";import"./listen-BbKSz9Gy.js";import"./useWindow-DhqI_zMA.js";import"./Anchor-DRVRSgLP.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BgJ3aozw.js";import"./PermissionAllow-DPIa7gDb.js";import"./ToastNotification-DWZrIRJL.js";import"./react-select.esm-DjEZP4HW.js";import"./useStateManager-7e1e8489.esm-BdAqZFbm.js";import"./inherits-31b1Cyi6.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-JnW2krE5.js";function M({country_item:a,queryParams:I=null,auth:p}){const{data:l,setData:r,post:N,errors:m,reset:E}=v({image:"",name:a.name||"",code:a.code||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[x,o]=h.useState("");h.useEffect(()=>{a.image&&o(a.image)},[a.image]);const b=s=>{const t=s.target.files[0];t&&(r("image",t),o(URL.createObjectURL(t)))},g=()=>{r("image",""),o(""),r("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.country.update",a.id))},i=(s,t)=>{r(s,t)};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Edit"}),children:[e.jsx(C,{title:"Country Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:m.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(n,{id:"country-code",type:"text",name:"code",className:"form-control",value:l.code,onChange:s=>i("code",s.target.value),autoComplete:"off"}),e.jsx(c,{message:m.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(y,{onChange:s=>i("position",s),value:l.position,defaultValue:l.position}),e.jsx(c,{message:m.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(u,{name:"status",onChange:s=>i("status",s),value:"1",checked:l.status===1,label:"Published"}),e.jsx(u,{name:"status",onChange:s=>i("status",s),value:"0",checked:l.status===0,label:"Draft"}),e.jsx(c,{message:m.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{M as default};