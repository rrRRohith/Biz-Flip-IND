import{r as l,j as e,Y as z,a as H,b as O}from"./app-C4G85uq6.js";import{A as U}from"./AdminAuthenticated-BlCMwjTS.js";import{P as Y}from"./PermissionAllow-C8F5i1ep.js";import{M as $}from"./ModalPopup-CkABvVsi.js";import G from"./AdView-DQpbzMJh.js";import{B as J}from"./Badge-ebQdESsY.js";import{T as w}from"./Tab-D0Y_mkpS.js";import{T as W}from"./Tabs-Bxu0jFEb.js";import{d as s}from"./index-DGAWd5AZ.js";/* empty css                                  */import{P as X}from"./Pagination-Db-QuCPh.js";import"./Dropdown-CtkXdWFp.js";import"./AdminHeader-BBprjd8_.js";import"./Dropdown-a7L1ADLf.js";import"./useMergedRefs-BowFoGfK.js";import"./useWindow-Bo79gOI5.js";import"./NavbarContext-o-jod6r2.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DR7Z4j5r.js";import"./BootstrapModalManager-qIbNpEmt.js";import"./Fade-C-0t23Gq.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dej2v1i9.js";import"./ToastNotification-DfIAoRAg.js";import"./ReactToastify-ipGcVK3S.js";import"./Modal-dhUnzy4z.js";import"./slick-theme-Cc5_fRKy.js";import"./StatusBtn-CsH062r1.js";import"./TabPane-DWJVl9iw.js";import"./DynamicSelect-sgMEdG2-.js";import"./react-select.esm-dS_YT2j6.js";import"./Select-49a62830.esm-CRzGqylq.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-onTbIgnP.js";import"./hoist-non-react-statics.cjs-DxTsM8Dh.js";import"./ElementChildren-D0SwePER.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./objectWithoutPropertiesLoose-_n_vZqlI.js";const qe=({ads:n,pendingAdsList:d,suspendedAdsList:x,soldAdsList:j,auth:C,success:b=null,error:y=null})=>{const[_,u]=l.useState(!1),[t,P]=l.useState(null),o=50,[c,K]=l.useState(1),[p,F]=l.useState(""),[L,k]=l.useState(n.data),[E,I]=l.useState(d.data),[M,R]=l.useState(x.data),[B,Q]=l.useState(j.data),[r,V]=l.useState("PendingApproval"),f=(h,i)=>{K(i),window.scrollTo(0,0)},g=h=>{const i=h.target.value;F(i);let a;r==="ApprovedAds"?(a=n.data.filter(m=>m.title.toLowerCase().includes(i.toLowerCase())),k(a)):r==="PendingApproval"?(a=d.data.filter(m=>m.title.toLowerCase().includes(i.toLowerCase())),I(a)):r==="SuspendedAds"?(a=x.data.filter(m=>m.title.toLowerCase().includes(i.toLowerCase())),R(a)):r==="SoldAds"&&(a=j.data.filter(m=>m.title.toLowerCase().includes(i.toLowerCase())),Q(a)),K(1)},v=(()=>{if(p.length>0){if(r==="ApprovedAds")return L;if(r==="PendingApproval")return E;if(r==="SuspendedAds")return M;if(r==="SoldAds")return B}else{if(r==="ApprovedAds")return n.data;if(r==="PendingApproval")return d.data;if(r==="SuspendedAds")return x.data;if(r==="SoldAds")return j.data}})(),A=(c-1)*o,T=c*o,D=()=>u(!1),S=async h=>{try{const a=(await O.get(route("admin.ads.show",h.id))).data;P(a),u(!0)}catch(i){console.error("Error fetching data",i)}},q=()=>{u(!1)};return e.jsxs(U,{user:C.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Listing"}),success:b,error:y,children:[e.jsx(z,{title:"Ads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsxs(W,{id:"uncontrolled-tab-example",activeKey:r,onSelect:h=>V(h),className:"",children:[e.jsx(w,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Review"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(N,{displayList:v,startIdx:A,endIdx:T,handlePageChange:f,currentPage:c,itemsPerPage:o,handleShow:S,searchQuery:p,handleSearch:g})}),e.jsx(w,{eventKey:"ApprovedAds",title:"Active",children:e.jsx(N,{displayList:v,startIdx:A,endIdx:T,handlePageChange:f,currentPage:c,itemsPerPage:o,handleShow:S,searchQuery:p,handleSearch:g})}),e.jsx(w,{eventKey:"SuspendedAds",title:"On Hold",children:e.jsx(N,{displayList:v,startIdx:A,endIdx:T,handlePageChange:f,currentPage:c,itemsPerPage:o,handleShow:S,searchQuery:p,handleSearch:g})}),e.jsx(w,{eventKey:"SuspendedAds",title:"Rejected",children:e.jsx(N,{displayList:v,startIdx:A,endIdx:T,handlePageChange:f,currentPage:c,itemsPerPage:o,handleShow:S,searchQuery:p,handleSearch:g})}),e.jsx(w,{eventKey:"SoldAds",title:"Sold",children:e.jsx(N,{displayList:v,startIdx:A,endIdx:T,handlePageChange:f,currentPage:c,itemsPerPage:o,handleShow:S,searchQuery:p,handleSearch:g})})]})]})}),e.jsx($,{show:_,handleClose:D,size:"lg",title:"Ad Details",children:t?e.jsx(G,{collection:t,handleClose:D,onSubmit:q,keyVal:r}):"Failed fetching data..."})]})},N=({displayList:n,startIdx:d,endIdx:x,handlePageChange:j,currentPage:C,itemsPerPage:b,handleShow:y,searchQuery:_,handleSearch:u})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(Y,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by ad name or user name",value:_,onChange:u})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Ad"}),e.jsx(s.Th,{children:"City"}),e.jsx(s.Th,{className:"text-end",children:"Price"}),e.jsx(s.Th,{children:"Leads"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Purpose"}),e.jsx(s.Th,{children:"User"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:n.slice(d,x).map(t=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:e.jsx(J,{value:`#${t.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsxs(s.Td,{role:"button",onClick:()=>y(t),children:[e.jsx("img",{src:t.main_picture,className:"w-25 rounded-5 ",alt:"Image",onError:P=>{P.target.onerror=null,P.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("span",{className:"ms-2",children:[" ",t.title," "]})]}),e.jsx(s.Td,{children:e.jsx("small",{children:t.city})}),e.jsx(s.Td,{className:"text-end",children:window.formatPrice(t.price)}),e.jsx(s.Td,{children:e.jsx(H,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:t.id}),children:t.total_leads})}),e.jsx(s.Td,{children:t.property_type}),e.jsx(s.Td,{children:t.ad_purpose}),e.jsxs(s.Td,{children:[t.seller.firstname," ",t.seller.lastname]}),e.jsxs(s.Td,{children:[window.formatDate(t.created_at),e.jsx("br",{}),window.formatTime(t.created_at)]}),e.jsx(s.Td,{children:e.jsx("span",{onClick:()=>y(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})})]},t.id))})]})}),n.length>b&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(X,{count:Math.ceil(n.length/b),page:C,onChange:j})})]})})})})})});export{qe as default};
