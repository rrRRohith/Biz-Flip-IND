import{r as n,j as e,Y as u,a as g,b as N}from"./app-C_Be1jwZ.js";import{A as v}from"./AdminAuthenticated-C2osrzw6.js";import{P as b}from"./PermissionAllow-Bmij6yoq.js";import{M as f}from"./ModalPopup-ETyD9WAZ.js";import w from"./AdView-BkCCS807.js";import{S as A}from"./StatusBtn-B9n-Pz7b.js";import{B as y}from"./Badge-D3j2hL8g.js";import"./Dropdown-BZPnonvo.js";import"./AdminHeader-D8yZVA1r.js";import"./Dropdown-DZcJNce2.js";import"./useMergedRefs-Drm3LOLV.js";import"./SSRProvider-DcoMz4P4.js";import"./useWindow-pV3AxwMP.js";import"./NavbarContext-BaOOSdYv.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Chr8vuT0.js";import"./BootstrapModalManager-Bw0chMoc.js";import"./Fade-CfNVKMxo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D82SmN59.js";import"./ToastNotification-CXcIhcAv.js";import"./ReactToastify-C7iM6RHl.js";import"./Modal-TWh0wtiB.js";import"./slick-theme-CoMCnI3u.js";import"./TabView-CpAHR5ca.js";import"./TabPane-DC4ALUEX.js";import"./DynamicSelect-CmYqOVaO.js";import"./react-select.esm---he2VZI.js";import"./Select-49a62830.esm-8wMshqvs.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CvHRklAn.js";import"./hoist-non-react-statics.cjs-kxpDYtxE.js";import"./sweetalert2.all-CKhwm26G.js";const oe=({ads:i,auth:o,success:d=null,error:c=null})=>{const[m,r]=n.useState(!1),[l,h]=n.useState(null),a=()=>r(!1),p=async s=>{try{const j=(await N.get(route("admin.ads.show",s.id))).data;h(j),r(!0)}catch(t){console.error("Error fetching data",t)}},x=()=>{r(!1)};return e.jsxs(v,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Pending Approvel"}),success:d,error:c,children:[e.jsx(u,{title:"Ads Pending Approvel List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(b,{permission:"Support Ticket Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Leads"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"User"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.data.length?i.data.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(y,{value:`#${s.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsx("td",{children:e.jsx("img",{src:s.main_picture,className:"w-50 rounded-5 ",alt:"Image",onError:t=>{t.target.onerror=null,t.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.title}),e.jsxs("td",{children:[s.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:s.city})})]}),e.jsx("td",{children:window.formatPrice(s.price)}),e.jsx("td",{children:e.jsxs(g,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:s.id}),children:[s.total_leads," leads"]})}),e.jsx("td",{children:s.property_type}),e.jsx("td",{children:s.ad_purpose}),e.jsxs("td",{children:[s.seller.firstname," ",s.seller.lastname]}),e.jsx("td",{children:e.jsx(A,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{onClick:()=>p(s),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})]})})})})})})})})]})}),e.jsx(f,{show:m,handleClose:a,size:"lg",title:"Ad Details",children:l?e.jsx(w,{collection:l,handleClose:a,onSubmit:x}):"Failed fetching data..."})]})};export{oe as default};
