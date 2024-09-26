import{W as g,r as v,j as e,Y as f,a as n}from"./app-Mi5-AqKU.js";import{A as C}from"./AdminAuthenticated-DlHDvaUZ.js";import{I as m}from"./InputError-Dv4MT5Ay.js";import{T as d}from"./TextInput-BqBT6_mC.js";import{I as x}from"./InputLabel-D5OKBtk7.js";import"./SelectOption-BVoxYvTX.js";import{D as w}from"./DynamicSelect-BNo5Tq0Z.js";import{F as y}from"./Form-CKI-LWMP.js";import{P as I}from"./PermissionAllow-B8xuR5O8.js";import"./Dropdown-Dk7jjItk.js";import"./AdminHeader-DZWAdAgA.js";import"./Dropdown-BdYkEp6F.js";import"./useMergedRefs-B9NgnWcR.js";import"./SSRProvider-DMDV9ab5.js";import"./useWindow-CcF1-924.js";import"./NavbarContext-C0XN_G8R.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Da_kr_1K.js";import"./BootstrapModalManager-CXIzqira.js";import"./Fade-DuL5UsXy.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B_UjAs0f.js";import"./ToastNotification-Bnj11tKi.js";import"./ReactToastify-C6-0c1dT.js";import"./react-select.esm-DsfuIGnf.js";import"./Select-49a62830.esm-Cw8IuBId.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-C86POnWe.js";import"./hoist-non-react-statics.cjs-CTCe2Omd.js";import"./ElementChildren-btn7UIZY.js";import"./Col-BiWK5UeR.js";function ce({auth:h,provinces:p}){const{data:i,setData:t,post:j,errors:r,reset:k}=g({image:"",name:"",status:"1",position:"",country:"",province:""}),u=s=>{s.preventDefault(),j(route("admin.city.store"))},[c,o]=v.useState(""),N=s=>{const a=s.target.files[0];a&&(t("image",a),o(URL.createObjectURL(a)))},b=()=>{t("image",""),o("")},l=(s,a)=>{t(s,a),s==="country"&&fetchProvinces(a)};return e.jsxs(C,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Create"}),children:[e.jsx(f,{title:"City Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(n,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(n,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(I,{permission:"City Create",message:"true",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(w,{options:p,onChange:s=>l("province",s),value:i.province}),e.jsx(m,{message:r.province,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[c?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:c,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{ce as default};
