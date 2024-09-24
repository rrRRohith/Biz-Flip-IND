import{W as k,r as h,j as e,Y as y,a as j}from"./app-DvFGvXdx.js";import{A as I}from"./AdminAuthenticated-D-zMRHnz.js";import{I as o}from"./InputError-B2ZlsISG.js";import{T as c}from"./TextInput-DtxWb5Ya.js";import{I as m}from"./InputLabel-jnwu-znK.js";import{S}from"./SelectOption-UKufI4Ci.js";import{D as B}from"./DynamicSelect-YJR8Xh4I.js";import{P as b}from"./PermissionAllow-D9D849r5.js";import{F as P}from"./Form-DCiMo5oc.js";import"./Dropdown-Dv9kgZM4.js";import"./AdminHeader-BLZTylm7.js";import"./Dropdown-l-da9rBz.js";import"./useMergedRefs-D75ORZ4e.js";import"./useWindow-BVJR-Id8.js";import"./NavbarContext-CqUhnY4e.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-8z7Z5zc5.js";import"./BootstrapModalManager-C0ljKC2c.js";import"./Fade-B7YvUX8l.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DXO1pmiC.js";import"./ToastNotification-CCAk__2k.js";import"./ReactToastify-E8VKSlRY.js";import"./react-select.esm-Mio-Dy5d.js";import"./Select-49a62830.esm-Bj4AoYc2.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-lOCJsOYN.js";import"./hoist-non-react-statics.cjs-CmBVkyqr.js";import"./ElementChildren-SFQOEKcw.js";import"./Col-Dp5XqYRZ.js";function pe({auth:u}){const{data:t,setData:i,post:g,errors:l,reset:T}=k({title:"",redirection:"",type:"",new_window:"",picture_desktop:"",picture_mobile:"",position:"",status:"1"}),N=s=>{s.preventDefault(),g(route("admin.banners.store"))},[n,d]=h.useState(""),[p,x]=h.useState(""),f=s=>{const a=s.target.files[0];a&&(i("picture_desktop",a),d(URL.createObjectURL(a)))},v=()=>{i("picture_desktop",""),d("")},w=s=>{const a=s.target.files[0];a&&(i("picture_mobile",a),x(URL.createObjectURL(a)))},C=()=>{i("picture_mobile",""),x("")},r=(s,a)=>{i(s,a)},_=[{value:"Banner Slider",label:"Banner Slider"},{value:"Home Tile",label:"Home Tile"},{value:"Page Top Tile",label:"Page Top Tile"}];return e.jsxs(I,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banner/Create"}),children:[e.jsx(y,{title:"Banner Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Banner"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(b,{permission:"Banners Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.banners.index"),children:"Banner"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Banner Create",message:!0,children:e.jsxs("form",{onSubmit:N,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(c,{id:"title",type:"text",name:"title",className:"form-control",value:t.title,onChange:s=>r("title",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Redirection"}),e.jsx(c,{id:"redirection",type:"text",name:"redirection",className:"form-control",value:t.redirection,onChange:s=>r("redirection",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.redirection,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Type"}),e.jsx(B,{onChange:s=>r("type",s),value:t.type,options:_,name:"type"}),e.jsx(o,{message:l.type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(S,{onChange:s=>r("position",s),value:t.position}),e.jsx(o,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(P.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(o,{message:l.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Desktop Image"}),e.jsxs("div",{className:"desktop-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:v})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"w-50 mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"picture_desktop",className:"d-none mt-1 block w-full upload",onChange:f})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Mobile Image"}),e.jsxs("div",{className:"desktop-img",children:[p?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:p,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:C})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"w-50  mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path2",type:"file",name:"picture_mobile",className:"d-none mt-1 block w-full upload",onChange:w})]})]})]})})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{pe as default};
