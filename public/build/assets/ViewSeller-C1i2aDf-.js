import{r as a,W as p,j as s}from"./app-CETDUQ2O.js";import{P as r}from"./index-CpSO6HaL.js";import"./slick-theme-CjhSPHkE.js";import"./TabView-BvUzRntF.js";import"./DynamicSelect-Cda5c2X6.js";import{T as n}from"./Tabs-BlURl-1R.js";import{T as l}from"./Tab-k8GR25vr.js";import"./useMergedRefs-BNa28cw-.js";import"./TabPane-DNY8IZqO.js";import"./NavbarContext-CfrAZts5.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-Unlbx0yM.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-bo_-XZgN.js";import"./Select-49a62830.esm-CGeBkhnb.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CdfnQj0a.js";import"./hoist-non-react-statics.cjs-B3wnF9yU.js";import"./ElementChildren-DgWzDr-X.js";import"./SSRProvider-Bs2Xk6Wm.js";const m=({collection:e,handleClose:o,onSubmit:c})=>{a.useState(!1),a.useState(e.status);const[t,d]=a.useState("Profile");return p({status:e.status||"0"}),console.log(e),e.status==1||e.status==-1,s.jsx("div",{className:"col-lg-12",children:s.jsx("div",{className:"row  border-0",children:s.jsxs(n,{id:"subscription-plans-tabs",activeKey:t,onSelect:i=>d(i),className:"mb-3",children:[s.jsx(l,{eventKey:"Profile",title:"Profile",children:s.jsx("div",{className:"col-lg-12 mx-auto",children:s.jsxs("div",{className:"row p-4",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx("div",{className:"col-lg-12",children:s.jsx("img",{src:e.picture,className:"me-3 rounded-circle avatar-xxxl",onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"}})})}),s.jsxs("div",{className:"col-lg-4",children:[s.jsxs("h5",{children:[s.jsx("span",{className:"bi bi-person-fill fs-20 me-2"}),e.full_name]}),s.jsxs("h6",{children:[s.jsx("span",{className:"bi bi-envelope-fill fs-20 me-2"}),s.jsx("a",{href:`tel:${e.email}`,children:e.email})]}),s.jsxs("h6",{children:[s.jsx("span",{className:"bi bi-phone-fill fs-20 me-2"}),s.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]}),s.jsxs("h6",{children:[s.jsx("span",{className:"bi bi-geo-alt-fill fs-20 me-2"}),e.address,",",s.jsxs("span",{className:"",children:[" ",e.postalcode," ",e.city," ",e.province]})]})]}),s.jsxs("div",{className:"mt-20",children:[s.jsx("h4",{className:"fw-bold",children:s.jsx("u",{children:"Company Details"})}),s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-lg-4",children:[s.jsxs("h5",{children:[s.jsx("span",{className:"bi bi-buildings-fill fs-20 me-2"}),e.company_name]}),s.jsxs("h6",{children:[s.jsx("span",{className:"bi bi-globe-europe-africa fs-20 me-2"}),e.website]})]}),s.jsx("div",{className:"col-lg-4"})]})})]})]})})}),s.jsx(l,{eventKey:"Ads",title:"Ads",children:"2"}),s.jsx(l,{eventKey:"Leads",title:"Leads",children:"3"})]})})})};m.propTypes={collection:r.object.isRequired,handleClose:r.func.isRequired,onSubmit:r.func.isRequired};const k=m;export{k as default};
