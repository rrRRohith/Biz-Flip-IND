import{r as c,j as e,Y as R,a as w,y as A,b as k}from"./app-BGtL1idN.js";import{S as P}from"./sweetalert2.all-TjCzHEtG.js";import{A as U}from"./AdminAuthenticated-Ceq30wD9.js";import{M as z}from"./ModalPopup-D5opaEXr.js";import{d as t}from"./index-V_QR55fH.js";/* empty css                                  */import{T as $}from"./Tab-DBY4FN65.js";import{T as G}from"./Tabs-DH7f6DTf.js";import{P as S}from"./PermissionAllow-BAFgtCD_.js";import{P as B}from"./Pagination-8c_ZTxN9.js";import"./Dropdown-DDOkRdOL.js";import"./AdminHeader-Dli3e8ya.js";import"./Dropdown-BXLrSV09.js";import"./useMergedRefs-Dg_ayAfe.js";import"./SSRProvider-BlUcPW8O.js";import"./useWindow-DVdbgo_X.js";import"./NavbarContext-De51xqev.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BRq7hUFn.js";import"./BootstrapModalManager-CYKKLntR.js";import"./Fade-CLSnjR4s.js";import"./index-WDzcDGFf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-B1x0Gbjx.js";import"./ReactToastify-BO42l_97.js";import"./Modal-CxTqWPKr.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./TabPane-CzxJZT60.js";import"./ElementChildren-56bvTiZG.js";import"./objectWithoutPropertiesLoose-_n_vZqlI.js";import"./emotion-react.browser.esm-DimeYzFi.js";import"./hoist-non-react-statics.cjs-BRtGKWye.js";const H=({displayList:d,startIdx:o,endIdx:x,handlePageChange:b,currentPage:u,itemsPerPage:m,handleShow:r,searchQuery:h,handleSearch:l,deleteLead:j})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(S,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:h,onChange:l})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Property"}),e.jsx(t.Th,{children:"Agent"}),e.jsx(t.Th,{children:"Full Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile"}),e.jsx(t.Th,{children:"Status"}),e.jsx(t.Th,{children:"Created At"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:d.slice(o,x).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{children:s.id}),e.jsx(t.Td,{onClick:()=>r(s),children:s.ad?s.ad.title:"Unknown ad"}),e.jsx(t.Td,{onClick:()=>r(s),children:s.seller&&`${s.seller.firstname} ${s.seller.lastname}`}),e.jsxs(t.Td,{onClick:()=>r(s),children:[s.firstname," ",s.lastname]}),e.jsx(t.Td,{onClick:()=>r(s),children:s.email}),e.jsx(t.Td,{onClick:()=>r(s),children:s.phone}),e.jsx(t.Td,{onClick:()=>r(s),children:s.status}),e.jsx(t.Td,{onClick:()=>r(s),children:s.created_at}),e.jsxs(t.Td,{children:[e.jsx("button",{onClick:()=>r(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{onClick:()=>j(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})}),d.length>m&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(B,{count:Math.ceil(d.length/m),page:u,onChange:b})})]})})})})})}),J=({displayList:d,startIdx:o,endIdx:x,handlePageChange:b,currentPage:u,itemsPerPage:m,handleShow:r,searchQuery:h,handleSearch:l,deleteLead:j})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(S,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:h,onChange:l})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Full Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile"}),e.jsx(t.Th,{children:"Subject"}),e.jsx(t.Th,{children:"Created At"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:d.slice(o,x).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{children:s.id}),e.jsxs(t.Td,{onClick:()=>r(s),children:[s.firstname," ",s.lastname]}),e.jsx(t.Td,{onClick:()=>r(s),children:s.email}),e.jsx(t.Td,{onClick:()=>r(s),children:s.phone}),e.jsx(t.Td,{onClick:()=>r(s),children:s.subject}),e.jsx(t.Td,{onClick:()=>r(s),children:s.created_at}),e.jsxs(t.Td,{children:[e.jsx("button",{onClick:()=>r(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{onClick:()=>j(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})}),d.length>m&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(B,{count:Math.ceil(d.length/m),page:u,onChange:b})})]})})})})})});function Ee({contactLeads:d,adLeads:o,auth:x,success:b=null,error:u=null}){const[r,h]=c.useState(1),[l,j]=c.useState(""),[s,E]=c.useState(d.data),[M,_]=c.useState(o.data),[p,D]=c.useState("ContactLeads"),[I,g]=c.useState(!1),[F,N]=c.useState(null),f=(n,a)=>{h(a),window.scrollTo(0,0)},C=n=>{const a=n.target.value;j(a);let i;p==="ContactLeads"?(i=d.data.filter(T=>T.title.toLowerCase().includes(a.toLowerCase())),E(i)):p==="AdLeads"&&(i=o.data.filter(T=>T.title.toLowerCase().includes(a.toLowerCase())),_(i)),h(1)},v=l.length>0?p==="ContactLeads"?s:M:p==="ContactLeads"?d.data:o.data,y=(r-1)*5,L=r*5,K=n=>{P.fire({title:"Are you sure you want to delete this Lead?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&A.delete(route("admin.propery_lead_delete",n.id))})},Y=n=>{P.fire({title:"Are you sure you want to delete this Inquiry?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&A.delete(route("admin.contact_delete",n.id))})},O=()=>g(!1),Q=async n=>{try{const a=await k.get(route("admin.contact_show",n.id)),i=`
                <table className="table fw-700">
                    <tbody>
                        <tr><td><strong>Name</strong></td><td>:</td><td>${a.data.firstname} ${a.data.lastname}</td></tr>
                        <tr><td><strong>Email</strong></td><td>:</td><td>${a.data.email}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>:</td><td>${a.data.phone}</td></tr>
                        <tr><td><strong>Subject</strong></td><td>:</td><td>${a.data.subject}</td></tr>
                        <tr><td><strong>Message</strong></td><td>:</td><td>${a.data.message}</td></tr>
                    </tbody>
                </table>`;N(i),g(!0)}catch(a){console.error("Error fetching data",a)}},V=async n=>{try{const a=await k.get(route("admin.propery_lead_show",n.id)),i=`
                <table className="table fw-700">
                    <tbody>
                        <tr><td><strong>Name</strong></td><td>:</td><td>${a.data.firstname} ${a.data.lastname}</td></tr>
                        <tr><td><strong>Email</strong></td><td>:</td><td>${a.data.email}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>:</td><td>${a.data.phone}</td></tr>
                        <tr><td><strong>Subject</strong></td><td>:</td><td>${a.data.subject}</td></tr>
                        <tr><td><strong>Message</strong></td><td>:</td><td>${a.data.message}</td></tr>
                    </tbody>
                </table>`;N(i),g(!0)}catch(a){console.error("Error fetching data",a)}};return e.jsxs(U,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Leads Listing"}),children:[e.jsx(R,{title:"Ad Leads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Leads Listing"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(w,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(w,{href:"/admin/leads",children:"Leads"})})]})})})]})})})})}),e.jsxs(G,{id:"uncontrolled-tab-example",activeKey:p,onSelect:n=>D(n),children:[e.jsx($,{eventKey:"ContactLeads",title:"Contact Leads",children:e.jsx(J,{displayList:v,startIdx:y,endIdx:L,handlePageChange:f,currentPage:r,itemsPerPage:5,handleShow:Q,searchQuery:l,handleSearch:C,deleteLead:Y})}),e.jsx($,{eventKey:"AdLeads",title:"Ad Leads",children:e.jsx(H,{displayList:v,startIdx:y,endIdx:L,handlePageChange:f,currentPage:r,itemsPerPage:5,handleShow:V,searchQuery:l,handleSearch:C,deleteLead:K})})]})]})}),e.jsx(z,{show:I,handleClose:O,data:F,title:"Lead Details"})]})}export{Ee as default};
