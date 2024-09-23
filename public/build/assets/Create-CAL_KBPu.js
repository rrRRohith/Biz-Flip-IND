import{W as b,r as g,j as e,Y as f,a as x}from"./app-DlBo-Ddu.js";import{A as v}from"./AdminAuthenticated-Cwz-whZZ.js";import{I as i}from"./InputError-D2IcB-2I.js";import{T as m}from"./TextInput-BvGAEKB4.js";import{I as c}from"./InputLabel-BQ4CPb_c.js";import{S as C}from"./SelectOption-DxoaB5bg.js";import{F as w}from"./Form-cPST5_c-.js";import{P as y}from"./PermissionAllow-Df6yLocr.js";import"./Dropdown-BVbw0fPm.js";import"./AdminHeader-XlUGR1mB.js";import"./Dropdown-BwnBMcYa.js";import"./useMergedRefs-C2W-uHs9.js";import"./useWindow-CDGLn9yS.js";import"./NavbarContext-BzvdvPuO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BojA_d6S.js";import"./BootstrapModalManager-Dqv4GHEH.js";import"./Fade-CmSRjtXj.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BWjN7ugN.js";import"./ToastNotification-BOPASvEd.js";import"./ReactToastify-DpQD6jLC.js";import"./react-select.esm-J2nNCklL.js";import"./Select-49a62830.esm-Dx6Tf3xm.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-BhcPD_Qg.js";import"./hoist-non-react-statics.cjs-CyvW9ahi.js";import"./ElementChildren-CM-IqZgD.js";import"./Col-pd7tV-fN.js";function ie({auth:h}){const{data:l,setData:o,post:p,errors:t,reset:I}=b({image:"",name:"",code:"",status:"1",position:""}),j=s=>{s.preventDefault(),p(route("admin.country.store"))},[n,d]=g.useState(""),u=s=>{const a=s.target.files[0];a&&(o("image",a),d(URL.createObjectURL(a)))},N=()=>{o("image",""),d("")},r=(s,a)=>{o(s,a)};return e.jsxs(v,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Create"}),children:[e.jsx(f,{title:"Country Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(y,{permission:"Country Create",message:"true",children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(m,{id:"country-name",type:"text",name:"name",className:"form-control",value:l.name,onChange:s=>r("name",s.target.value),autoComplete:"off"}),e.jsx(i,{message:t.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(m,{id:"country-code",type:"text",name:"code",className:"form-control",value:l.code,onChange:s=>r("code",s.target.value),autoComplete:"off"}),e.jsx(i,{message:t.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>r("position",s),value:l.position}),e.jsx(i,{message:t.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group p-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(w.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(i,{message:t.status,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:N})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(m,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:u})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ie as default};
