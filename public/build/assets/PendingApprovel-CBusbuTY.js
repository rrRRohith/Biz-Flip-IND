import{r as n,j as e,Y as u,a as g,b as N}from"./app-hnfrkFZg.js";import{A as f}from"./AdminAuthenticated-Cv4Vg8Vq.js";import{P as v}from"./PermissionAllow-DpFhgEPZ.js";import{M as b}from"./ModalPopup-CCfZQLNE.js";import w from"./AdView-Z1vkO0V6.js";import{S as A}from"./StatusBtn-BlLfYkxm.js";import{B as S}from"./Badge-R2Y01RDq.js";import"./Dropdown-Ca-UCSU0.js";import"./AdminSidebar-DA2ORclv.js";import"./listen-DT5iH6cS.js";import"./useWindow-BqAU_gkT.js";import"./Anchor-C_LCvmXY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9RErJyb.js";import"./ToastNotification-EgQe7kOo.js";import"./Modal-BfpCo8Qn.js";import"./Fade-DvMu3KAZ.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CtPsS-RI.js";import"./index-Chjiymov.js";import"./TransitionGroupContext-DclnSYLS.js";import"./SlickSlider-CNJF3EJ2.js";import"./slick-theme-DVz6aDi6.js";import"./DynamicSelect-jPFDohWw.js";import"./react-select-creatable.esm-CG5_FEGR.js";import"./useStateManager-7e1e8489.esm-Cok-RV1I.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-ZojVR3yc.js";import"./hoist-non-react-statics.cjs-C5HjtOxa.js";import"./TabPane-IoVDExaA.js";const le=({ads:i,auth:d,success:o=null,error:c=null})=>{const[m,r]=n.useState(!1),[l,h]=n.useState(null),a=()=>r(!1),x=async s=>{try{const j=(await N.get(route("admin.ads.show",s.id))).data;h(j),r(!0)}catch(t){console.error("Error fetching data",t)}},p=()=>{r(!1)};return e.jsxs(f,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Pending Approvel"}),success:o,error:c,children:[e.jsx(u,{title:"Ads Pending Approvel List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(v,{permission:"Support Ticket Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Leads"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Seller"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.data.length?i.data.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(S,{value:`#${s.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsx("td",{children:e.jsx("img",{src:s.main_picture,className:"w-50 rounded-5 ",alt:"Image",onError:t=>{t.target.onerror=null,t.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.title}),e.jsxs("td",{children:[s.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:s.city})})]}),e.jsx("td",{children:window.formatPrice(s.price)}),e.jsx("td",{children:e.jsxs(g,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:s.id}),children:[s.total_leads," leads"]})}),e.jsx("td",{children:s.property_type}),e.jsx("td",{children:s.ad_purpose}),e.jsxs("td",{children:[s.seller.firstname," ",s.seller.lastname]}),e.jsx("td",{children:s.date_text}),e.jsx("td",{children:e.jsx(A,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{onClick:()=>x(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})]})})})})})})})})]})}),e.jsx(b,{show:m,handleClose:a,size:"lg",title:"Ad Details",children:l?e.jsx(w,{collection:l,handleClose:a,onSubmit:p}):"Failed fetching data..."})]})};export{le as default};
