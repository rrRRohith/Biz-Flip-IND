import{r as n,j as e,Y as u,a as g,b as N}from"./app-CG-cedyX.js";import{A as f}from"./AdminAuthenticated-ByjJAyqE.js";import{P as v}from"./PermissionAllow-BtKYLFOB.js";import{M as b}from"./ModalPopup-Blypx__3.js";import w from"./AdView-DFLGOj83.js";import{S as A}from"./StatusBtn-Bvp1lRk-.js";import{B as S}from"./Badge-CulGq6BW.js";import"./Dropdown-BzC72U1u.js";import"./AdminHeader-Dj0oJY3B.js";import"./Dropdown-B1WKr_ab.js";import"./listen-BAmu7Ho1.js";import"./useWindow-DcnfaM70.js";import"./Anchor-DdZ2pRBt.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CB8FP-AD.js";import"./BootstrapModalManager-Dg4mQ0vY.js";import"./Fade-BjsinVYN.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D1LT8eKv.js";import"./ToastNotification-IV0ugsHC.js";import"./ReactToastify-glfqqVTn.js";import"./Modal-JgpSDYD-.js";import"./slick-theme-DIr5eAHy.js";import"./DynamicSelect-Comx2M2B.js";import"./react-select.esm-RGXfl3Tu.js";import"./Select-49a62830.esm-Do4iK4i6.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-ByTTzjc8.js";import"./hoist-non-react-statics.cjs-DUT9nNpZ.js";import"./TabPane-Dl9AxJHt.js";const le=({ads:i,auth:d,success:o=null,error:c=null})=>{const[m,r]=n.useState(!1),[l,h]=n.useState(null),a=()=>r(!1),x=async s=>{try{const j=(await N.get(route("admin.ads.show",s.id))).data;h(j),r(!0)}catch(t){console.error("Error fetching data",t)}},p=()=>{r(!1)};return e.jsxs(f,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Pending Approvel"}),success:o,error:c,children:[e.jsx(u,{title:"Ads Pending Approvel List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(v,{permission:"Support Ticket Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Leads"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Seller"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.data.length?i.data.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(S,{value:`#${s.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsx("td",{children:e.jsx("img",{src:s.main_picture,className:"w-50 rounded-5 ",alt:"Image",onError:t=>{t.target.onerror=null,t.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.title}),e.jsxs("td",{children:[s.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:s.city})})]}),e.jsx("td",{children:window.formatPrice(s.price)}),e.jsx("td",{children:e.jsxs(g,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:s.id}),children:[s.total_leads," leads"]})}),e.jsx("td",{children:s.property_type}),e.jsx("td",{children:s.ad_purpose}),e.jsxs("td",{children:[s.seller.firstname," ",s.seller.lastname]}),e.jsx("td",{children:s.date_text}),e.jsx("td",{children:e.jsx(A,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{onClick:()=>x(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})]})})})})})})})})]})}),e.jsx(b,{show:m,handleClose:a,size:"lg",title:"Ad Details",children:l?e.jsx(w,{collection:l,handleClose:a,onSubmit:p}):"Failed fetching data..."})]})};export{le as default};