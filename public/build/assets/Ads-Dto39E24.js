import{r as a,W as q,j as e,S as E,Y as I,a as p,b as P,y as M}from"./app-DGcPT93w.js";import"./Dropdown-JMLxGVnK.js";import"./index-DcXM4ciK.js";import{P as x}from"./PermissionAllow-OqVDtoCL.js";import R from"./Wrapper-BWeM02ht.js";import W from"./AdsTable-B8wj1VPm.js";import L from"./Delete-9yBlCjph.js";import{S as c}from"./react-select.esm-si0qQOIO.js";import"./Header-DLYLWlKH.js";import"./ProfileDropdown-CDaN8H6P.js";import"./Dropdown-MESXEvvB.js";import"./listen-Bt4XJasV.js";import"./useWindow-D9aa1zUv.js";import"./Anchor-JiuRFRLY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-Cc9nZ-qW.js";import"./ReactToastify-CJ9odq_r.js";import"./AdStatusBtn-BBlzHEK1.js";import"./AdAction-CschctCx.js";import"./Modal-CL-f690d.js";import"./BootstrapModalManager-BHOFIej6.js";import"./Fade-D2fF8ueo.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DoBXUtod.js";import"./Select-49a62830.esm-s-SAzgtz.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-D16BCuMK.js";import"./hoist-non-react-statics.cjs-D0e2qXh8.js";function ve({auth:h,ads:b,categories:n,industries:d}){const[g,m]=a.useState(!1),[v,j]=a.useState(b.data),{data:s,setData:l}=q({q:"",status:"",status_title:"All status",category:"",category_title:"All categories",industry:"",industry_title:"All industries"}),i=async()=>{m(!0);const t=await P.get(route("seller.ads.search",s));j(t.data),m(!1)},[f,o]=a.useState(!1),[N,y]=a.useState(null),A=function(t){o(!1),M.delete(route("seller.ads.destroy",t)),i()},w=t=>{y(t),o(!0)},S=()=>o(!1),C=[{label:"Pending",value:-1},{label:"Active",value:1},{label:"Inactive",value:0},{label:"Sold",value:2}],[_,D]=a.useState(d),k=t=>{const u=n.find(V=>V.value===t);D(u?u.ad_category_collection:d)},[r,F]=a.useState(!1);return e.jsxs(e.Fragment,{children:[g&&e.jsx(E,{}),e.jsx(I,{title:"Ads"}),e.jsx(L,{showDelete:f,handleClose:S,deleteAction:A,deleteId:N,setShowDelete:o}),e.jsx(R,{user:h.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Ads"}),e.jsx("div",{children:"Manage and track your ads effectively. Easily search, filter, and view detailed information about your campaigns, and monitor their performance."}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header border-bottom",children:[e.jsxs("div",{className:"d-flex d-lg-none align-items-center",children:[e.jsxs("div",{onClick:t=>F(!r),className:"d-lg-none btn btn-secondary text-overflow",children:["Filters ",r?e.jsx("i",{className:"bi bi-chevron-compact-up"}):e.jsx("i",{className:"bi bi-chevron-compact-down"})]}),e.jsx(x,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(p,{className:"btn btn-primary text-overflow",href:route("seller.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]}),e.jsx("div",{className:r?"d-lg-block":"d-none d-lg-block",children:e.jsxs("div",{className:"row align-items-center mt-4 mt-lg-0",children:[e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx("input",{defaultValue:s.q,onChange:t=>l("q",t.target.value),type:"search",placeholder:"Search by name, location etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:s.category,label:s.category_title},onChange:t=>{l("category",t.value),k(t.value)},options:[{label:"All categories",value:""},...n]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:s.industry,label:s.industry_title},onChange:t=>{l("industry",t.value)},options:[{label:"All industries",value:""},..._]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:s.status,label:s.status_title},onChange:t=>l("status",t.value),options:[{label:"All status",value:""},...C]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsxs("button",{onClick:t=>i(),type:"button",className:"btn btn-neutral w-full",children:[e.jsx("span",{className:"d-inline d-lg-none me-2",children:"Search"}),e.jsx("i",{className:"bi bi-search"})]})}),e.jsx(x,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto d-none d-lg-block col-lg-auto",children:e.jsxs(p,{className:"btn btn-primary text-overflow",href:route("seller.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]})})]}),e.jsx(W,{searchResult:i,confirmDelete:w,ads:v})]})})]})})})})]})}export{ve as default};