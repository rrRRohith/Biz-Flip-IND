import{r as c,j as e,Y as V,y as w,b as A}from"./app-BGiLrZjH.js";import{S as k}from"./sweetalert2.all-B7bxUamG.js";import{A as R}from"./AdminAuthenticated-CTRd8j6z.js";import{M as U}from"./ModalPopup-B2qkeLNP.js";import{d as t}from"./index-C073nuwW.js";/* empty css                                  */import{T as P}from"./Tab-Bbwvg__5.js";import{T as z}from"./Tabs-C4s2nIZh.js";import{P as $}from"./PermissionAllow-BCG6WWhY.js";import{P as S}from"./Pagination-BoQiZ5mo.js";import"./Dropdown-C59AGE29.js";import"./AdminHeader-BC0SH_V5.js";import"./Dropdown-C2zKZrgQ.js";import"./useMergedRefs-Bc_6mM0I.js";import"./useWindow-Cxlkq8ra.js";import"./NavbarContext-i2-xdJJK.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CMlK3CII.js";import"./BootstrapModalManager-BdjKiDay.js";import"./Fade-CYLpb5Ev.js";import"./index-CsygoueB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-CTqwKsiI.js";import"./ReactToastify-DlEYrpQj.js";import"./Modal-DTCQy0wT.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./TabPane-C1ZL8xTP.js";import"./ElementChildren-BtLEIP8b.js";import"./objectWithoutPropertiesLoose-_n_vZqlI.js";import"./emotion-react.browser.esm-D07Oi0TC.js";import"./hoist-non-react-statics.cjs-DIT5Q69J.js";const G=({displayList:d,startIdx:i,endIdx:x,handlePageChange:b,currentPage:g,itemsPerPage:m,handleShow:a,searchQuery:h,handleSearch:l,deleteLead:j})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs($,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:h,onChange:l})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Property"}),e.jsx(t.Th,{children:"Agent"}),e.jsx(t.Th,{children:"Full Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile"}),e.jsx(t.Th,{children:"Status"}),e.jsx(t.Th,{children:"Created At"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:d.slice(i,x).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{children:s.id}),e.jsx(t.Td,{onClick:()=>a(s),children:s.ad?s.ad.title:"Unknown ad"}),e.jsx(t.Td,{onClick:()=>a(s),children:s.seller&&`${s.seller.firstname} ${s.seller.lastname}`}),e.jsxs(t.Td,{onClick:()=>a(s),children:[s.firstname," ",s.lastname]}),e.jsx(t.Td,{onClick:()=>a(s),children:s.email}),e.jsx(t.Td,{onClick:()=>a(s),children:s.phone}),e.jsx(t.Td,{onClick:()=>a(s),children:s.status}),e.jsx(t.Td,{onClick:()=>a(s),children:s.created_at}),e.jsxs(t.Td,{children:[e.jsx("button",{onClick:()=>a(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{onClick:()=>j(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})}),d.length>m&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(S,{count:Math.ceil(d.length/m),page:g,onChange:b})})]})})})})})}),H=({displayList:d,startIdx:i,endIdx:x,handlePageChange:b,currentPage:g,itemsPerPage:m,handleShow:a,searchQuery:h,handleSearch:l,deleteLead:j})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs($,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:h,onChange:l})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Full Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile"}),e.jsx(t.Th,{children:"Subject"}),e.jsx(t.Th,{children:"Created At"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:d.slice(i,x).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{children:s.id}),e.jsxs(t.Td,{onClick:()=>a(s),children:[s.firstname," ",s.lastname]}),e.jsx(t.Td,{onClick:()=>a(s),children:s.email}),e.jsx(t.Td,{onClick:()=>a(s),children:s.phone}),e.jsx(t.Td,{onClick:()=>a(s),children:s.subject}),e.jsx(t.Td,{onClick:()=>a(s),children:s.created_at}),e.jsxs(t.Td,{children:[e.jsx("button",{onClick:()=>a(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{onClick:()=>j(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})}),d.length>m&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(S,{count:Math.ceil(d.length/m),page:g,onChange:b})})]})})})})})});function Se({contactLeads:d,adLeads:i,auth:x,success:b=null,error:g=null}){const[a,h]=c.useState(1),[l,j]=c.useState(""),[s,B]=c.useState(d.data),[E,M]=c.useState(i.data),[p,_]=c.useState("ContactLeads"),[I,u]=c.useState(!1),[D,f]=c.useState(null),C=(n,r)=>{h(r),window.scrollTo(0,0)},N=n=>{const r=n.target.value;j(r);let o;p==="ContactLeads"?(o=d.data.filter(T=>T.title.toLowerCase().includes(r.toLowerCase())),B(o)):p==="AdLeads"&&(o=i.data.filter(T=>T.title.toLowerCase().includes(r.toLowerCase())),M(o)),h(1)},v=l.length>0?p==="ContactLeads"?s:E:p==="ContactLeads"?d.data:i.data,y=(a-1)*5,L=a*5,F=n=>{k.fire({title:"Are you sure you want to delete this Lead?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&w.delete(route("admin.propery_lead_delete",n.id))})},K=n=>{k.fire({title:"Are you sure you want to delete this Inquiry?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&w.delete(route("admin.contact_delete",n.id))})},Y=()=>u(!1),O=async n=>{try{const r=await A.get(route("admin.contact_show",n.id)),o=`
                <table className="table fw-700">
                    <tbody>
                        <tr><td><strong>Name</strong></td><td>:</td><td>${r.data.firstname} ${r.data.lastname}</td></tr>
                        <tr><td><strong>Email</strong></td><td>:</td><td>${r.data.email}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>:</td><td>${r.data.phone}</td></tr>
                        <tr><td><strong>Subject</strong></td><td>:</td><td>${r.data.subject}</td></tr>
                        <tr><td><strong>Message</strong></td><td>:</td><td>${r.data.message}</td></tr>
                    </tbody>
                </table>`;f(o),u(!0)}catch(r){console.error("Error fetching data",r)}},Q=async n=>{try{const r=await A.get(route("admin.propery_lead_show",n.id)),o=`
                <table className="table fw-700">
                    <tbody>
                        <tr><td><strong>Name</strong></td><td>:</td><td>${r.data.firstname} ${r.data.lastname}</td></tr>
                        <tr><td><strong>Email</strong></td><td>:</td><td>${r.data.email}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>:</td><td>${r.data.phone}</td></tr>
                        <tr><td><strong>Subject</strong></td><td>:</td><td>${r.data.subject}</td></tr>
                        <tr><td><strong>Message</strong></td><td>:</td><td>${r.data.message}</td></tr>
                    </tbody>
                </table>`;f(o),u(!0)}catch(r){console.error("Error fetching data",r)}};return e.jsxs(R,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Leads Listing"}),children:[e.jsx(V,{title:"Ad Leads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Leads Listing"})})})})})}),e.jsxs(z,{id:"uncontrolled-tab-example",activeKey:p,onSelect:n=>_(n),children:[e.jsx(P,{eventKey:"ContactLeads",title:"Contact Leads",children:e.jsx(H,{displayList:v,startIdx:y,endIdx:L,handlePageChange:C,currentPage:a,itemsPerPage:5,handleShow:O,searchQuery:l,handleSearch:N,deleteLead:K})}),e.jsx(P,{eventKey:"AdLeads",title:"Ad Leads",children:e.jsx(G,{displayList:v,startIdx:y,endIdx:L,handlePageChange:C,currentPage:a,itemsPerPage:5,handleShow:Q,searchQuery:l,handleSearch:N,deleteLead:F})})]})]})}),e.jsx(U,{show:I,handleClose:Y,data:D,title:"Lead Details"})]})}export{Se as default};
