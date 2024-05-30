import{W as v,r as d,j as e,Y as w,a as x}from"./app-CJ8gtaWK.js";import{A as C}from"./AdminAuthenticated-VedlVE-1.js";import{I as n}from"./InputError-CXZmLGzP.js";import{T as h}from"./TextInput-BkMZLaX2.js";import{I as j}from"./InputLabel-L28_G93Y.js";import{S as I}from"./SelectOption-M1bIkM26.js";import{R as u}from"./RadioButtonLabel-uD2ao7s4.js";import"./PermissionAllow-8aMWW39F.js";import"./AdminSidebar-k5u8Y9Pb.js";import"./objectWithoutPropertiesLoose-mTU-Rj-z.js";import"./ToastNotification-GiQwRqxR.js";import"./react-select.esm-C-Qzknou.js";import"./Select-49a62830.esm-CrE4LB8d.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BDHRj7Tc.js";function F({country_item:a,queryParams:y=null,auth:p}){const{data:i,setData:t,post:N,errors:m,reset:E}=v({image:"",name:a.name||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[o,c]=d.useState("");d.useEffect(()=>{a.image&&c(a.image)},[a.image]);const b=s=>{const l=s.target.files[0];l&&(t("image",l),c(URL.createObjectURL(l)))},g=()=>{t("image",""),c(""),t("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.country.update",a.id))},r=(s,l)=>{t(s,l)};return e.jsxs(C,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Edit"}),children:[e.jsx(w,{title:"Country Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(h,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>r("name",s.target.value),autoComplete:"off"}),e.jsx(n,{message:m.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(I,{onChange:s=>r("position",s),value:i.position,defaultValue:i.position}),e.jsx(n,{message:m.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(u,{name:"status",onChange:s=>r("status",s),value:"1",checked:i.status===1,label:"Published"}),e.jsx(u,{name:"status",onChange:s=>r("status",s),value:"0",checked:i.status===0,label:"Draft"}),e.jsx(n,{message:m.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[o?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:o,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{F as default};
