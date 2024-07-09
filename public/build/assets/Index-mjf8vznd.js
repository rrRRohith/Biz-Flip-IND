import{r as n,j as e,Y as V,a as Y,b as $}from"./app-DqEs7Bkv.js";import{A as G}from"./AdminAuthenticated-8TtlGUvq.js";import{P as H}from"./PermissionAllow-De5fAs-K.js";import{M as J}from"./ModalPopup-COviqR99.js";import O from"./AdView-DEkfFLma.js";import{B as U}from"./Badge-DrpcrcPL.js";import{T as C}from"./Tab-CDnI8ZGU.js";import{T as W}from"./Tabs-C5RA9-03.js";import{d as t}from"./index-ql_5Okc_.js";/* empty css                                  */import{P as X}from"./Pagination-D-jRusxh.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./ToastNotification-p7KpGbX9.js";import"./Modal-DOEIdxLy.js";import"./slick-theme-C-o3FmXP.js";import"./StatusBtn-Hy8i-pkq.js";import"./TabPane-CF__rGOj.js";import"./DynamicSelect-C6qYJtHS.js";import"./react-select-creatable.esm-6Dbc75pq.js";import"./inherits-BIvzEtgb.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./emotion-react.browser.esm-CFsy6mXa.js";import"./inherits-DEw0FBPK.js";import"./hoist-non-react-statics.cjs-CYd8FKoI.js";import"./ElementChildren-CjWpnGCx.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";const Me=({ads:d,pendingAdsList:o,suspendedAdsList:h,soldAdsList:j,auth:P,success:g=null,error:i=null})=>{const[k,u]=n.useState(!1),[s,v]=n.useState(null),m=5,[p,_]=n.useState(1),[f,K]=n.useState(""),[L,D]=n.useState(d.data),[E,I]=n.useState(o.data),[M,B]=n.useState(h.data),[Q,q]=n.useState(j.data),[r,z]=n.useState("ApprovedAds"),A=(x,l)=>{_(l),window.scrollTo(0,0)},T=x=>{const l=x.target.value;K(l);let a;r==="ApprovedAds"?(a=d.data.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())),D(a)):r==="PendingApproval"?(a=o.data.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())),I(a)):r==="SuspendedAds"?(a=h.data.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())),B(a)):r==="SoldAds"&&(a=j.data.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())),q(a)),_(1)},N=(()=>{if(f.length>0){if(r==="ApprovedAds")return L;if(r==="PendingApproval")return E;if(r==="SuspendedAds")return M;if(r==="SoldAds")return Q}else{if(r==="ApprovedAds")return d.data;if(r==="PendingApproval")return o.data;if(r==="SuspendedAds")return h.data;if(r==="SoldAds")return j.data}})(),b=(p-1)*m,S=p*m,F=()=>u(!1),y=async x=>{try{const a=(await $.get(route("admin.ads.show",x.id))).data;v(a),u(!0)}catch(l){console.error("Error fetching data",l)}},R=()=>{u(!1)};return e.jsxs(G,{user:P.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Listing"}),success:g,error:i,children:[e.jsx(V,{title:"Ads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsxs(W,{id:"uncontrolled-tab-example",activeKey:r,onSelect:x=>z(x),className:"",children:[e.jsx(C,{eventKey:"ApprovedAds",title:"Approved Ads",children:e.jsx(w,{displayList:N,startIdx:b,endIdx:S,handlePageChange:A,currentPage:p,itemsPerPage:m,handleShow:y,searchQuery:f,handleSearch:T})}),e.jsx(C,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),o.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:o.data.length})]}),children:e.jsx(w,{displayList:N,startIdx:b,endIdx:S,handlePageChange:A,currentPage:p,itemsPerPage:m,handleShow:y,searchQuery:f,handleSearch:T})}),e.jsx(C,{eventKey:"SuspendedAds",title:"Suspended Ads",children:e.jsx(w,{displayList:N,startIdx:b,endIdx:S,handlePageChange:A,currentPage:p,itemsPerPage:m,handleShow:y,searchQuery:f,handleSearch:T})}),e.jsx(C,{eventKey:"SoldAds",title:"Sold Ads",children:e.jsx(w,{displayList:N,startIdx:b,endIdx:S,handlePageChange:A,currentPage:p,itemsPerPage:m,handleShow:y,searchQuery:f,handleSearch:T})})]})]})}),e.jsx(J,{show:k,handleClose:F,size:"lg",title:"Ad Details",children:s?e.jsx(O,{collection:s,handleClose:F,onSubmit:R}):"Failed fetching data..."})]})},w=({displayList:d,startIdx:o,endIdx:h,handlePageChange:j,currentPage:P,itemsPerPage:g,handleShow:i,searchQuery:k,handleSearch:u})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(H,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:k,onChange:u})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Ad"}),e.jsx(t.Th,{children:"Address"}),e.jsx(t.Th,{className:"text-end",children:"Price"}),e.jsx(t.Th,{children:"Leads"}),e.jsx(t.Th,{children:"Type"}),e.jsx(t.Th,{children:"Purpose"}),e.jsx(t.Th,{children:"Seller"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:d.slice(o,h).map(s=>e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:e.jsx(U,{value:`#${s.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsxs(t.Td,{onClick:()=>i(s),children:[e.jsx("img",{src:s.main_picture,className:"w-25 rounded-5 ",alt:"Image",onError:v=>{v.target.onerror=null,v.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("span",{className:"ms-2",children:[" ",s.title," "]})]}),e.jsxs(t.Td,{onClick:()=>i(s),children:[s.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:s.city})})]}),e.jsx(t.Td,{onClick:()=>i(s),className:"text-end",children:window.formatPrice(s.price)}),e.jsx(t.Td,{onClick:()=>i(s),children:e.jsxs(Y,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:s.id}),children:[s.total_leads," leads"]})}),e.jsx(t.Td,{onClick:()=>i(s),children:s.property_type}),e.jsx(t.Td,{onClick:()=>i(s),children:s.ad_purpose}),e.jsxs(t.Td,{onClick:()=>i(s),children:[s.seller.firstname," ",s.seller.lastname]}),e.jsx(t.Td,{onClick:()=>i(s),children:s.date_text}),e.jsx(t.Td,{children:e.jsx("span",{onClick:()=>i(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})})]},s.id))})]})}),d.length>g&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(X,{count:Math.ceil(d.length/g),page:P,onChange:j})})]})})})})})});export{Me as default};
