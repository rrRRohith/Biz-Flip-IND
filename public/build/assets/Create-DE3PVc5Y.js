import{q as w,W as y,r as _,j as e,Y as I,a as n}from"./app-DLtj40sa.js";import{A as k}from"./AdminAuthenticated-CPWSlPiI.js";import{I as d}from"./InputError-CLiWfMII.js";import{T as h}from"./TextInput-BuO0xMnB.js";import{I as x}from"./InputLabel-DlSNUTpi.js";import"./SelectOption-BR8IQx_d.js";import{P as p}from"./PermissionAllow-BllmSOcS.js";import{F as g}from"./Form-L6E7qcvt.js";import"./Dropdown-B13ECKyy.js";import"./AdminHeader-BMhdvd2R.js";import"./Dropdown-zhn2kAqJ.js";import"./useMergedRefs-D7YIcOyO.js";import"./SSRProvider-D2QLqlEp.js";import"./useWindow-DKpabGkG.js";import"./NavbarContext-BtkgbX-t.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Ce3sjPK4.js";import"./BootstrapModalManager-BvIDlEH-.js";import"./Fade-CkZeSPZQ.js";import"./index-Bghs3Rzg.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Bof_1I4Z.js";import"./ReactToastify-BdU6FSfD.js";import"./react-select.esm-CTWJl5O3.js";import"./Select-49a62830.esm-DgH97r4_.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-Cukox_w1.js";import"./hoist-non-react-statics.cjs-C8fRZjLU.js";import"./ElementChildren-CESWE5Ev.js";import"./Col-TZgyofzy.js";function me({auth:j}){const{adCategoryList:u}=w().props,{data:i,setData:r,post:b,errors:l,reset:S}=y({image:"",category_name:"",status:"1",position:"",description:"",adCategories:[]}),N=s=>{let a;i.adCategories.includes(s)?a=i.adCategories.filter(m=>m!==s):a=[...i.adCategories,s],r("adCategories",a)},v=s=>{s.preventDefault(),b(route("admin.business-category.store"))},[o,c]=_.useState(""),f=s=>{const a=s.target.files[0];a&&(r("image",a),c(URL.createObjectURL(a)))},C=()=>{r("image",""),c("")},t=(s,a)=>{r(s,a)};return e.jsxs(k,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Category/Create"}),children:[e.jsx(I,{title:"Category Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Business Category"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(n,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Categories Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(n,{href:route("admin.business-category.index"),children:"Business Categories"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Category Create",message:"true",children:e.jsxs("form",{onSubmit:v,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(h,{id:"category-name",type:"text",name:"category_name",className:"form-control",value:i.category_name,onChange:s=>t("category_name",s.target.value),autoComplete:"off"}),e.jsx(d,{message:l.category_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{className:"form-control",rows:4,onChange:s=>t("description",s.target.value)})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"h-100 border p-3",children:[e.jsx("h6",{className:"fw-bold mb-3",children:"Select Availabe to Ad Categories"}),e.jsx("div",{className:"p-3",children:e.jsx("div",{className:"row",children:u.data.map((s,a)=>e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"form-group",children:e.jsx(g.Check,{type:"switch",id:`custom-switch-${a}`,name:"adCategory",value:s.id,label:s.name,role:"button",onChange:m=>N(s.id)},a)})}))})})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(g.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",onChange:s=>t("status",s.target.checked?1:0)}),e.jsx(d,{message:l.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border bg-gray-100 rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[o?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},src:o,alt:"Selected",className:"w-50 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:C})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 w-50 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:f})]})]})]})})})})]})})})}),e.jsx("div",{className:"form-actions mt-10 col-lg-6 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{me as default};
