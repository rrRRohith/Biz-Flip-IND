import{r as n,j as e,Y as u,a as g,b as N}from"./app-DLtj40sa.js";import{A as v}from"./AdminAuthenticated-CPWSlPiI.js";import{P as b}from"./PermissionAllow-BllmSOcS.js";import{M as f}from"./ModalPopup-DyFX1COQ.js";import w from"./AdView-Dej3T9ll.js";import{S as A}from"./StatusBtn-DLkivdsi.js";import{B as y}from"./Badge-JtixcAhs.js";import"./Dropdown-B13ECKyy.js";import"./AdminHeader-BMhdvd2R.js";import"./Dropdown-zhn2kAqJ.js";import"./useMergedRefs-D7YIcOyO.js";import"./SSRProvider-D2QLqlEp.js";import"./useWindow-DKpabGkG.js";import"./NavbarContext-BtkgbX-t.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Ce3sjPK4.js";import"./BootstrapModalManager-BvIDlEH-.js";import"./Fade-CkZeSPZQ.js";import"./index-Bghs3Rzg.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Bof_1I4Z.js";import"./ReactToastify-BdU6FSfD.js";import"./Modal-D3P2py1g.js";import"./slick-theme-CbieAHF4.js";import"./TabView-MGqa3845.js";import"./TabPane-BCOjgWaq.js";import"./DynamicSelect-CB1pPxRo.js";import"./react-select.esm-CTWJl5O3.js";import"./Select-49a62830.esm-DgH97r4_.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-Cukox_w1.js";import"./hoist-non-react-statics.cjs-C8fRZjLU.js";import"./sweetalert2.all-BQN9MndI.js";const oe=({ads:i,auth:o,success:d=null,error:c=null})=>{const[m,r]=n.useState(!1),[l,h]=n.useState(null),a=()=>r(!1),p=async s=>{try{const j=(await N.get(route("admin.ads.show",s.id))).data;h(j),r(!0)}catch(t){console.error("Error fetching data",t)}},x=()=>{r(!1)};return e.jsxs(v,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Pending Approvel"}),success:d,error:c,children:[e.jsx(u,{title:"Ads Pending Approvel List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Support Ticket Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Leads"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"User"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.data.length?i.data.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(y,{value:`#${s.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsx("td",{children:e.jsx("img",{src:s.main_picture,className:"w-50 rounded-5 ",alt:"Image",onError:t=>{t.target.onerror=null,t.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.title}),e.jsxs("td",{children:[s.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:s.city})})]}),e.jsx("td",{children:window.formatPrice(s.price)}),e.jsx("td",{children:e.jsxs(g,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:s.id}),children:[s.total_leads," leads"]})}),e.jsx("td",{children:s.property_type}),e.jsx("td",{children:s.ad_purpose}),e.jsxs("td",{children:[s.seller.firstname," ",s.seller.lastname]}),e.jsx("td",{children:e.jsx(A,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{onClick:()=>p(s),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})]})})})})})})})})]})}),e.jsx(f,{show:m,handleClose:a,size:"lg",title:"Ad Details",children:l?e.jsx(w,{collection:l,handleClose:a,onSubmit:x}):"Failed fetching data..."})]})};export{oe as default};
