import{r as a,W as q,j as e,S as I,Y as P,a as p,b as E,y as R}from"./app-BgVwgUXI.js";import"./Dropdown-LcSwA3Wo.js";import"./index-B6AAXhkx.js";import{P as x}from"./PermissionAllow-Bzpm65F1.js";import W from"./Wrapper-r9R5RcYN.js";import L from"./AdsTable-D4XBet3J.js";import M from"./Delete-CS5eP39B.js";import{S as c}from"./react-select.esm-CmAyWM2m.js";import"./SideBar-B7vAcbnS.js";import"./ProfileDropdown-DRkroKFi.js";import"./Header-CLahqRXC.js";import"./Dropdown-BCEmpKpX.js";import"./listen-BbQaJNIh.js";import"./useWindow-pKE9VyPq.js";import"./Anchor-C5jrjHc8.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-g0vHssf-.js";import"./AdStatusBtn-CIT1KEjl.js";import"./AdAction-CYNxUVIU.js";import"./Modal-SUjuNXIp.js";import"./BootstrapModalManager-WvlF3dSK.js";import"./Fade-DhyUofpz.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DkYKEvYU.js";import"./Select-49a62830.esm-Bha3jcxF.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-CAYFtNzy.js";import"./hoist-non-react-statics.cjs-Bx32C7Zx.js";function ve({auth:b,ads:h,categories:n,industries:d}){const[g,m]=a.useState(!1),[v,j]=a.useState(h.data),{data:s,setData:l}=q({q:"",status:"",status_title:"All status",category:"",category_title:"All categories",industry:"",industry_title:"All industries"}),i=async()=>{m(!0);const t=await E.get(route("seller.ads.search",s));j(t.data),m(!1)},[f,o]=a.useState(!1),[N,y]=a.useState(null),A=function(t){o(!1),R.delete(route("seller.ads.destroy",t)),i()},S=t=>{y(t),o(!0)},w=()=>o(!1),C=[{label:"Pending",value:-1},{label:"Active",value:1},{label:"Inactive",value:0},{label:"Sold",value:2}],[_,D]=a.useState(d),k=t=>{const u=n.find(V=>V.value===t);D(u?u.ad_category_collection:d)},[r,F]=a.useState(!1);return e.jsxs(e.Fragment,{children:[g&&e.jsx(I,{}),e.jsx(P,{title:"Ads"}),e.jsx(M,{showDelete:f,handleClose:w,deleteAction:A,deleteId:N,setShowDelete:o}),e.jsx(W,{user:b.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Ads"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header border-bottom",children:[e.jsxs("div",{className:"d-flex d-lg-none align-items-center",children:[e.jsxs("div",{onClick:t=>F(!r),className:"d-lg-none btn btn-secondary text-overflow",children:["Filters ",r?e.jsx("i",{class:"bi bi-chevron-compact-up"}):e.jsx("i",{class:"bi bi-chevron-compact-down"})]}),e.jsx(x,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(p,{className:"btn btn-primary text-overflow",href:route("seller.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]}),e.jsx("div",{className:r?"d-lg-block":"d-none d-lg-block",children:e.jsxs("div",{className:"row align-items-center mt-4 mt-lg-0",children:[e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx("input",{defaultValue:s.q,onChange:t=>l("q",t.target.value),type:"search",placeholder:"Search by name, location etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:s.category,label:s.category_title},onChange:t=>{l("category",t.value),k(t.value)},options:[{label:"All categories",value:""},...n]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:s.industry,label:s.industry_title},onChange:t=>{l("industry",t.value)},options:[{label:"All industries",value:""},..._]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:s.status,label:s.status_title},onChange:t=>l("status",t.value),options:[{label:"All status",value:""},...C]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsxs("button",{onClick:t=>i(),type:"button",className:"btn btn-neutral w-full",children:[e.jsx("span",{className:"d-inline d-lg-none me-2",children:"Search"}),e.jsx("i",{className:"bi bi-search"})]})}),e.jsx(x,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto d-none d-lg-block col-lg-auto",children:e.jsxs(p,{className:"btn btn-primary text-overflow",href:route("seller.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]})})]}),e.jsx(L,{searchResult:i,confirmDelete:S,ads:v})]})})]})})})})]})}export{ve as default};
