import{W as b,r as g,j as e,Y as v,a as o}from"./app-OIveC4vg.js";import{A as f}from"./AdminAuthenticated-tBKSSTyR.js";import{I as r}from"./InputError-XKtWHHBC.js";import{T as n}from"./TextInput-lVSeuO6k.js";import{I as d}from"./InputLabel-DWC1Vcc3.js";import"./SelectOption-DM1n37jW.js";import{D as C}from"./DynamicSelect-DILRhJ57.js";import{F as w}from"./Form-JIihCp9k.js";import{P as y}from"./PermissionAllow-InpQN_vS.js";import"./Dropdown-BT5_CmUH.js";import"./AdminHeader-B9F_eyeo.js";import"./Dropdown-CCZ7KOyw.js";import"./useMergedRefs-C14ws7xt.js";import"./useWindow-BKz7HuOD.js";import"./NavbarContext-BfalcnaE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CISIEJfx.js";import"./BootstrapModalManager-D7nAxY6_.js";import"./Fade-B6ZocwEE.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DO24z29d.js";import"./ToastNotification-B_e3cxiv.js";import"./ReactToastify-k7iD8hA9.js";import"./react-select.esm-CC62c_7a.js";import"./Select-49a62830.esm-BxixOZo6.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-iisuEEUB.js";import"./hoist-non-react-statics.cjs-Bz-59q0U.js";import"./ElementChildren-DbRJ-GKy.js";import"./Col-Yi2DZfoo.js";function le({auth:x,provinces:h}){const{data:a,setData:l,post:p,errors:i,reset:I}=b({image:"",name:"",status:"1",position:"",country:"",province:""}),j=s=>{s.preventDefault(),p(route("admin.city.store"))},[m,c]=g.useState(""),u=s=>{const t=s.target.files[0];t&&(l("image",t),c(URL.createObjectURL(t)))},N=()=>{l("image",""),c("")};return e.jsxs(f,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Create"}),children:[e.jsx(v,{title:"City Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(o,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(o,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(y,{permission:"City Create",message:"true",children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>handleChange("name",s.target.value),autoComplete:"off"}),e.jsx(r,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(C,{options:h,onChange:s=>handleChange("province",s),value:a.province}),e.jsx(r,{message:i.province,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(w.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>handleChange("status",s.target.checked?1:0)}),e.jsx(r,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:N})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:u})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{le as default};
