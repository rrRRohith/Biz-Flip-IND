import{r as s,W as V,j as e,S as q,Y as I,a as p,b as M,y as R}from"./app-C_Be1jwZ.js";import"./Dropdown-BZPnonvo.js";import"./index-Chr8vuT0.js";import{P as x}from"./PermissionAllow-Bmij6yoq.js";import W from"./Wrapper-_kwKwmUC.js";import L from"./AdsTable-Dx0SFi5Q.js";import T from"./Delete-oJ7pcDy5.js";import{S as c}from"./react-select.esm---he2VZI.js";import Y from"./PlanError-Js2AzLpU.js";import"./Header-MdIGD5oO.js";import"./ProfileDropdown-AgpaWNOR.js";import"./Dropdown-DZcJNce2.js";import"./useMergedRefs-Drm3LOLV.js";import"./SSRProvider-DcoMz4P4.js";import"./useWindow-pV3AxwMP.js";import"./NavbarContext-BaOOSdYv.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-CXcIhcAv.js";import"./ReactToastify-C7iM6RHl.js";import"./TopMenu-BqKJXP8s.js";import"./Footer-eO6SLR2x.js";import"./AdStatusBtn-CdmnfT-M.js";import"./AdAction-ZaCWhV4b.js";import"./Modal-TWh0wtiB.js";import"./BootstrapModalManager-Bw0chMoc.js";import"./Fade-CfNVKMxo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D82SmN59.js";import"./Select-49a62830.esm-8wMshqvs.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CvHRklAn.js";import"./hoist-non-react-statics.cjs-kxpDYtxE.js";function we({auth:h,ads:b,categories:n,industries:d,current_invoice:g}){const[v,m]=s.useState(!1),[j,f]=s.useState(b.data),{data:a,setData:l}=V({q:"",status:"",status_title:"All status",category:"",category_title:"All categories",industry:"",industry_title:"All industries"}),i=async()=>{m(!0);const t=await M.get(route("account.ads.search",a));f(t.data),m(!1)},[N,o]=s.useState(!1),[y,A]=s.useState(null),w=function(t){o(!1),R.delete(route("account.ads.destroy",t)),i()},S=t=>{A(t),o(!0)},C=()=>o(!1),_=[{label:"Pending",value:-1},{label:"Active",value:1},{label:"Inactive",value:0},{label:"Sold",value:2}],[D,k]=s.useState(d),E=t=>{const u=n.find(P=>P.value===t);k(u?u.ad_category_collection:d)},[r,F]=s.useState(!1);return e.jsxs(e.Fragment,{children:[v&&e.jsx(q,{}),e.jsx(I,{title:"Ads"}),e.jsx(T,{showDelete:N,handleClose:C,deleteAction:w,deleteId:y,setShowDelete:o}),e.jsx(W,{user:h.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Ads"}),e.jsx("div",{children:"Manage and track your ads effectively. Easily search, filter, and view detailed information about your campaigns, and monitor their performance."}),e.jsxs("div",{children:[e.jsx(Y,{current_invoice:g}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header border-bottom",children:[e.jsxs("div",{className:"d-flex d-lg-none align-items-center",children:[e.jsxs("div",{onClick:t=>F(!r),className:"d-lg-none btn btn-secondary text-overflow",children:["Filters ",r?e.jsx("i",{className:"bi bi-chevron-compact-up"}):e.jsx("i",{className:"bi bi-chevron-compact-down"})]}),e.jsx(x,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(p,{className:"btn btn-primary text-overflow",href:route("account.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]}),e.jsx("div",{className:r?"d-lg-block":"d-none d-lg-block",children:e.jsxs("div",{className:"row align-items-center mt-4 mt-lg-0",children:[e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx("input",{defaultValue:a.q,onChange:t=>l("q",t.target.value),type:"search",placeholder:"Search by name, location etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:a.category,label:a.category_title},onChange:t=>{l("category",t.value),E(t.value)},options:[{label:"All categories",value:""},...n]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:a.industry,label:a.industry_title},onChange:t=>{l("industry",t.value)},options:[{label:"All industries",value:""},...D]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsx(c,{defaultValue:{value:a.status,label:a.status_title},onChange:t=>l("status",t.value),options:[{label:"All status",value:""},..._]})}),e.jsx("div",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:e.jsxs("button",{onClick:t=>i(),type:"button",className:"btn btn-neutral w-full",children:[e.jsx("span",{className:"d-inline d-lg-none me-2",children:"Search"}),e.jsx("i",{className:"bi bi-search"})]})}),e.jsx(x,{permission:"Ad Create",children:e.jsx("div",{className:"ms-auto d-none d-lg-block col-lg-auto",children:e.jsxs(p,{className:"btn btn-primary text-overflow",href:route("account.ads.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),"New ad"]})})})]})})]}),e.jsx(L,{searchResult:i,confirmDelete:S,ads:j})]})]})]})})})})]})}export{we as default};
