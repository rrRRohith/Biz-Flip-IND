import{r as s,W as E,j as e,S as I,Y as P,a as c,b as Y,y as M}from"./app-BVfgA8MD.js";import"./Dropdown-DGVRm4s2.js";import"./index-C4miQACD.js";import{P as h}from"./PermissionAllow-DerVwwrp.js";import R from"./Wrapper-ByKsphcD.js";import W from"./AdsTable-CrpWq-WT.js";import $ from"./Delete-CkcJDnxk.js";import{S as d}from"./react-select.esm-BRHNnAXT.js";import"./Header-nAmN7Ckq.js";import"./ProfileDropdown-QPR0tRTy.js";import"./Dropdown-CSewB2O-.js";import"./useMergedRefs-BibEQBDI.js";import"./SSRProvider-BMAy1Wxu.js";import"./useWindow-C_1n6iJy.js";import"./NavbarContext-CkkAU4yH.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-B1BXF7TZ.js";import"./ReactToastify-lnkyzxL8.js";import"./TopMenu-Dli01ZVC.js";import"./Footer-W09ZGv9d.js";import"./AdStatusBtn-BQ9vGNi_.js";import"./AdAction-Dz-_dW-s.js";import"./Modal-Dqz39BHG.js";import"./BootstrapModalManager-Bw23O1Yn.js";import"./Fade-Bpdq1hMi.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CRrC9As2.js";import"./Select-49a62830.esm-D7MT8xFp.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-BzoTG0jd.js";import"./hoist-non-react-statics.cjs-DZf2pnCY.js";function ye({auth:b,ads:g,categories:m,industries:u,current_invoice:l}){const[j,p]=s.useState(!1),[v,f]=s.useState(g.data),{data:t,setData:o}=E({q:"",status:"",status_title:"All status",category:"",category_title:"All categories",industry:"",industry_title:"All industries"}),i=async()=>{p(!0);const a=await Y.get(route("account.ads.search",t));f(a.data),p(!1)},[N,r]=s.useState(!1),[y,w]=s.useState(null),A=function(a){r(!1),M.delete(route("account.ads.destroy",a)),i()},S=a=>{w(a),r(!0)},C=()=>r(!1),D=[{label:"Pending",value:-1},{label:"Active",value:1},{label:"Inactive",value:0},{label:"Sold",value:2}],[_,k]=s.useState(u),F=a=>{const x=m.find(q=>q.value===a);k(x?x.ad_category_collection:u)},[n,V]=s.useState(!1);return e.jsxs(e.Fragment,{children:[j&&e.jsx(I,{}),e.jsx(P,{title:"Ads"}),e.jsx($,{showDelete:N,handleClose:C,deleteAction:A,deleteId:y,setShowDelete:r}),e.jsx(R,{user:b.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Ads"}),e.jsx("div",{children:"Manage and track your ads effectively. Easily search, filter, and view detailed information about your campaigns, and monitor their performance."}),e.jsxs("div",{children:[l?e.jsx(e.Fragment,{children:e.jsxs("div",{className:`alert ${l.remaining_ads>0?"alert-success":"alert-danger"} mb-5`,children:["You currently have active subscription ",e.jsx("strong",{children:l.name})," with remaining ",e.jsx("strong",{children:l.remaining_ads})," ads till ",e.jsx("strong",{children:l.expire_date})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"alert alert-danger mb-5",children:["You currently have no active subscription, please ",e.jsx(c,{href:route("account.plans.index"),children:"subscribe"})," to a plan to post new ads."]})}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header border-bottom",children:[e.jsxs("div",{className:"d-flex d-lg-none align-items-center",children:[e.jsxs("div",{onClick:a=>V(!n),className:"d-lg-none btn btn-secondary text-overflow",children:["Filters ",n?e.jsx("i",{className:"bi bi-chevron-compact-up"}):e.jsx("i",{className:"bi bi-chevron-compact-down"})]}),e.jsx(h,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(c,{className:"btn btn-primary text-overflow",href:route("account.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]}),e.jsx("div",{className:n?"d-lg-block":"d-none d-lg-block",children:e.jsxs("div",{className:"row align-items-center mt-4 mt-lg-0",children:[e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx("input",{defaultValue:t.q,onChange:a=>o("q",a.target.value),type:"search",placeholder:"Search by name, location etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(d,{defaultValue:{value:t.category,label:t.category_title},onChange:a=>{o("category",a.value),F(a.value)},options:[{label:"All categories",value:""},...m]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(d,{defaultValue:{value:t.industry,label:t.industry_title},onChange:a=>{o("industry",a.value)},options:[{label:"All industries",value:""},..._]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(d,{defaultValue:{value:t.status,label:t.status_title},onChange:a=>o("status",a.value),options:[{label:"All status",value:""},...D]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsxs("button",{onClick:a=>i(),type:"button",className:"btn btn-neutral w-full",children:[e.jsx("span",{className:"d-inline d-lg-none me-2",children:"Search"}),e.jsx("i",{className:"bi bi-search"})]})}),e.jsx(h,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto d-none d-lg-block col-lg-auto",children:e.jsxs(c,{className:"btn btn-primary text-overflow",href:route("account.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]})})]}),e.jsx(W,{searchResult:i,confirmDelete:S,ads:v})]})]})]})})})})]})}export{ye as default};
