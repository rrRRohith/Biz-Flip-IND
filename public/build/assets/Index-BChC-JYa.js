import{r as d,j as e,Y as J,a as K,b as X}from"./app-DLtj40sa.js";import{A as Z}from"./AdminAuthenticated-CPWSlPiI.js";import{P as ee}from"./PermissionAllow-BllmSOcS.js";import{M as se}from"./ModalPopup-DyFX1COQ.js";import te from"./AdView-Dej3T9ll.js";import{B as re}from"./Badge-JtixcAhs.js";import{T as S}from"./Tab-Cv6Dn6JM.js";import{T as le}from"./Tabs-1n2A6Ido.js";import{d as l}from"./index-DxkNXNQd.js";/* empty css                                  */import{P as ae}from"./Pagination-DWx85PpG.js";import"./Dropdown-B13ECKyy.js";import"./AdminHeader-BMhdvd2R.js";import"./Dropdown-zhn2kAqJ.js";import"./useMergedRefs-D7YIcOyO.js";import"./SSRProvider-D2QLqlEp.js";import"./useWindow-DKpabGkG.js";import"./NavbarContext-BtkgbX-t.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Ce3sjPK4.js";import"./BootstrapModalManager-BvIDlEH-.js";import"./Fade-CkZeSPZQ.js";import"./index-Bghs3Rzg.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Bof_1I4Z.js";import"./ReactToastify-BdU6FSfD.js";import"./Modal-D3P2py1g.js";import"./slick-theme-CbieAHF4.js";import"./TabView-MGqa3845.js";import"./TabPane-BCOjgWaq.js";import"./StatusBtn-DLkivdsi.js";import"./DynamicSelect-CB1pPxRo.js";import"./react-select.esm-CTWJl5O3.js";import"./Select-49a62830.esm-DgH97r4_.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-Cukox_w1.js";import"./hoist-non-react-statics.cjs-C8fRZjLU.js";import"./sweetalert2.all-BQN9MndI.js";import"./ElementChildren-CESWE5Ev.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./objectWithoutPropertiesLoose-_n_vZqlI.js";const Xe=({ads:m,pendingAdsList:h,suspendedAdsList:u,soldAdsList:j,onHoldAdsList:f,categories:p,auth:P})=>{const[_,g]=d.useState(!1),[F,k]=d.useState(null),a=50,[c,D]=d.useState(1),[w,R]=d.useState(""),[V,z]=d.useState(""),[O,H]=d.useState(m.data),[U,E]=d.useState(h.data),[W,I]=d.useState(u.data),[Y,Q]=d.useState(j.data),[$,B]=d.useState(f.data),[i,q]=d.useState("PendingApproval"),C=(x,t)=>{D(t),window.scrollTo(0,0)},b=x=>{const t=x.target.value;R(t);let o;i==="ApprovedAds"?(o=m.data.filter(s=>{var r,n;return s.title.toLowerCase().includes(t.toLowerCase())||((r=s.seller.firstname)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))||((n=s.seller.city)==null?void 0:n.toLowerCase().includes(t.toLowerCase()))}),H(o)):i==="PendingApproval"?(o=h.data.filter(s=>{var r,n;return s.title.toLowerCase().includes(t.toLowerCase())||((r=s.seller.firstname)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))||((n=s.seller.city)==null?void 0:n.toLowerCase().includes(t.toLowerCase()))}),E(o)):i==="SuspendedAds"?(o=u.data.filter(s=>{var r,n;return s.title.toLowerCase().includes(t.toLowerCase())||((r=s.seller.firstname)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))||((n=s.seller.city)==null?void 0:n.toLowerCase().includes(t.toLowerCase()))}),I(o)):i==="HoldAds"?(o=f.data.filter(s=>{var r,n;return s.title.toLowerCase().includes(t.toLowerCase())||((r=s.seller.firstname)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))||((n=s.seller.city)==null?void 0:n.toLowerCase().includes(t.toLowerCase()))}),B(o)):i==="SoldAds"&&(o=j.data.filter(s=>{var r,n;return s.title.toLowerCase().includes(t.toLowerCase())||((r=s.seller.firstname)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))||((n=s.seller.city)==null?void 0:n.toLowerCase().includes(t.toLowerCase()))}),Q(o)),D(1)},v=x=>{const t=x.target.value;z(t);let o;i==="ApprovedAds"?(o=m.data.filter(s=>{var r;return s.ad_purpose.toLowerCase().includes(t.toLowerCase())||((r=s.business_category.label)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))}),H(o)):i==="PendingApproval"?(o=h.data.filter(s=>{var r;return s.ad_purpose.toLowerCase().includes(t.toLowerCase())||((r=s.business_category.label)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))}),E(o)):i==="SuspendedAds"?(o=u.data.filter(s=>{var r;return s.ad_purpose.toLowerCase().includes(t.toLowerCase())||((r=s.business_category.label)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))}),I(o)):i==="HoldAds"?(o=f.data.filter(s=>{var r;return s.ad_purpose.toLowerCase().includes(t.toLowerCase())||((r=s.business_category.label)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))}),B(o)):i==="SoldAds"&&(o=j.data.filter(s=>{var r;return s.ad_purpose.toLowerCase().includes(t.toLowerCase())||((r=s.business_category.label)==null?void 0:r.toLowerCase().includes(t.toLowerCase()))}),Q(o)),D(1)},y=(()=>{if(w.length>0||V.length>0){if(i==="ApprovedAds")return O;if(i==="PendingApproval")return U;if(i==="SuspendedAds")return W;if(i==="SoldAds")return Y;if(i==="HoldAds")return $}else{if(i==="ApprovedAds")return m.data;if(i==="PendingApproval")return h.data;if(i==="SuspendedAds")return u.data;if(i==="SoldAds")return j.data;if(i==="HoldAds")return f.data}})(),N=(c-1)*a,A=c*a,M=()=>g(!1),L=async x=>{try{const o=(await X.get(route("admin.ads.show",x.id))).data;k(o),g(!0)}catch(t){console.error("Error fetching data",t)}},G=()=>{g(!1)};return e.jsxs(Z,{user:P.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Listing"}),children:[e.jsx(J,{title:"Ads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Ads Listing"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(K,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(K,{href:route("admin.ads.index"),children:"Ads"})})]})})})]})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsxs(le,{id:"uncontrolled-tab-example",activeKey:i,onSelect:x=>q(x),className:"",children:[e.jsx(S,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Review"}),h.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:h.data.length})]}),children:e.jsx(T,{displayList:y,startIdx:N,endIdx:A,handlePageChange:C,currentPage:c,itemsPerPage:a,handleShow:L,searchQuery:w,handleSearch:b,categories:p,handleSearchType:v})}),e.jsx(S,{eventKey:"ApprovedAds",title:"Active",children:e.jsx(T,{displayList:y,startIdx:N,endIdx:A,handlePageChange:C,currentPage:c,itemsPerPage:a,handleShow:L,searchQuery:w,handleSearch:b,categories:p,handleSearchType:v})}),e.jsx(S,{eventKey:"HoldAds",title:"On Hold",children:e.jsx(T,{displayList:y,startIdx:N,endIdx:A,handlePageChange:C,currentPage:c,itemsPerPage:a,handleShow:L,searchQuery:w,handleSearch:b,categories:p,handleSearchType:v})}),e.jsx(S,{eventKey:"SuspendedAds",title:"Rejected",children:e.jsx(T,{displayList:y,startIdx:N,endIdx:A,handlePageChange:C,currentPage:c,itemsPerPage:a,handleShow:L,searchQuery:w,handleSearch:b,categories:p,handleSearchType:v})}),e.jsx(S,{eventKey:"SoldAds",title:"Sold",children:e.jsx(T,{displayList:y,startIdx:N,endIdx:A,handlePageChange:C,currentPage:c,itemsPerPage:a,handleShow:L,searchQuery:w,handleSearch:b,categories:p,handleSearchType:v})})]})]})}),e.jsx(se,{show:_,handleClose:M,size:"lg",title:"Ad Details",children:F?e.jsx(te,{collection:F,handleClose:M,onSubmit:G,keyVal:i}):"Failed fetching data..."})]})},T=({displayList:m,startIdx:h,endIdx:u,handlePageChange:j,currentPage:f,itemsPerPage:p,handleShow:P,searchQuery:_,handleSearch:g,categories:F,handleSearchType:k})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(ee,{permission:"Ad Show",message:"true",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by ad name, city or user name",value:_,onChange:g})}),e.jsxs("div",{className:"mb-3 col-lg-2 form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label form-group__label",children:"Purpose"}),e.jsxs("select",{onChange:k,name:"type",className:"form-control select-option",style:{WebkitAppearance:"auto !important"},children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"sale",children:"Sale"}),e.jsx("option",{value:"buy",children:"Buy"})]})]})]}),e.jsx("div",{className:"table-responsive rounded card-table",children:m.length>0?e.jsx(e.Fragment,{children:e.jsxs(l.Table,{className:"table border-no",id:"example1",children:[e.jsx(l.Thead,{children:e.jsxs(l.Tr,{children:[e.jsx(l.Th,{children:"#"}),e.jsx(l.Th,{children:"Ad"}),e.jsx(l.Th,{children:"City"}),e.jsx(l.Th,{className:"text-end",children:"Price"}),e.jsx(l.Th,{children:"Leads"}),e.jsx(l.Th,{children:"Type"}),e.jsx(l.Th,{children:"Purpose"}),e.jsx(l.Th,{children:"User"}),e.jsx(l.Th,{children:"Created at"}),e.jsx(l.Th,{})]})}),e.jsx(l.Tbody,{children:m.slice(h,u).map(a=>e.jsxs(l.Tr,{children:[e.jsx(l.Td,{children:e.jsx(re,{value:`#${1e3+a.id}`,bg:"bg-dark",color:"text-white"})}),e.jsx(l.Td,{role:"button",onClick:()=>P(a),children:e.jsxs("div",{className:"d-flex",children:[e.jsx("img",{src:a.main_picture,className:"w-30 rounded-5 ",alt:"Image",onError:c=>{c.target.onerror=null,c.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("span",{className:"ms-2",children:[" ",a.title," "]})]})}),e.jsx(l.Td,{children:e.jsx("small",{children:a.city})}),e.jsx(l.Td,{className:"text-end",children:window.formatPrice(a.price)}),e.jsx(l.Td,{children:e.jsx(K,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:a.id}),children:a.total_leads})}),e.jsx(l.Td,{children:a.property_type}),e.jsx(l.Td,{children:a.ad_purpose}),e.jsxs(l.Td,{children:[a.seller.firstname," ",a.seller.lastname]}),e.jsxs(l.Td,{children:[window.formatDate(a.created_at),e.jsx("br",{}),window.formatTime(a.created_at)]}),e.jsx(l.Td,{children:e.jsx("span",{onClick:()=>P(a),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})})})]},a.id))})]})}):e.jsx(e.Fragment,{children:e.jsx("div",{id:"content",className:"h-100 text-center",children:e.jsx("h5",{className:"fw-bold fs-4",children:"No ads found!"})})})}),m.length>p&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(ae,{count:Math.ceil(m.length/p),page:f,onChange:j})})]})})})})})});export{Xe as default};
