import{r as n,j as e,Y as u,a as g,b as N}from"./app-Akylwbq0.js";import{A as v}from"./AdminAuthenticated-DTgiHzF5.js";import{P as b}from"./PermissionAllow-CB1VZH03.js";import{M as f}from"./ModalPopup-C9jJ1qas.js";import w from"./AdView-DE5lrOz5.js";import{S as A}from"./StatusBtn-DzGextw7.js";import{B as y}from"./Badge-kZTJR-do.js";import"./Dropdown-DcblL1zV.js";import"./AdminHeader-D6tHz5HJ.js";import"./Dropdown-Dym4xX4-.js";import"./useMergedRefs-C6hqy1VW.js";import"./SSRProvider-D8VGMU17.js";import"./useWindow-BMR63Lcn.js";import"./NavbarContext-CIWNcitZ.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CWh0YhTe.js";import"./BootstrapModalManager-Eahm6Wfg.js";import"./Fade-CwyKlMLO.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dvg67boC.js";import"./ToastNotification-DxiTJXKI.js";import"./ReactToastify-2i8COxRb.js";import"./Modal-DUnEKisL.js";import"./slick-theme-EdBYtRx8.js";import"./TabView-DUfkJ1l8.js";import"./TabPane-BSLEpMNz.js";import"./DynamicSelect-3Pwq2RLK.js";import"./react-select.esm-c8YfPu_1.js";import"./Select-49a62830.esm-Bs8VIgt4.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CkQLsdcf.js";import"./hoist-non-react-statics.cjs-aPz7-uqL.js";import"./sweetalert2.all-c__LPqBQ.js";const oe=({ads:i,auth:o,success:d=null,error:c=null})=>{const[m,r]=n.useState(!1),[l,h]=n.useState(null),a=()=>r(!1),p=async s=>{try{const j=(await N.get(route("admin.ads.show",s.id))).data;h(j),r(!0)}catch(t){console.error("Error fetching data",t)}},x=()=>{r(!1)};return e.jsxs(v,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Pending Approvel"}),success:d,error:c,children:[e.jsx(u,{title:"Ads Pending Approvel List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Support Ticket Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Leads"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"User"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.data.length?i.data.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(y,{value:`#${s.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsx("td",{children:e.jsx("img",{src:s.main_picture,className:"w-50 rounded-5 ",alt:"Image",onError:t=>{t.target.onerror=null,t.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.title}),e.jsxs("td",{children:[s.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:s.city})})]}),e.jsx("td",{children:window.formatPrice(s.price)}),e.jsx("td",{children:e.jsxs(g,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:s.id}),children:[s.total_leads," leads"]})}),e.jsx("td",{children:s.property_type}),e.jsx("td",{children:s.ad_purpose}),e.jsxs("td",{children:[s.seller.firstname," ",s.seller.lastname]}),e.jsx("td",{children:e.jsx(A,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{onClick:()=>p(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})]})})})})})})})})]})}),e.jsx(f,{show:m,handleClose:a,size:"lg",title:"Ad Details",children:l?e.jsx(w,{collection:l,handleClose:a,onSubmit:x}):"Failed fetching data..."})]})};export{oe as default};
