import{r as i,j as t,Y as q,y as S,b as A}from"./app-D1aGfrPI.js";import{S as P}from"./sweetalert2.all-C98cKNGZ.js";import{A as O}from"./AdminAuthenticated-CTFfksGu.js";import{M as Q}from"./ModalPopup--u62J9YS.js";import{d as s}from"./index-BC3kmjo4.js";/* empty css                                  */import{P as V}from"./PermissionAllow-DnhKOBGp.js";import{P as R}from"./Pagination-DtH9C9BV.js";import"./Dropdown-BvMv-Cx8.js";import"./AdminHeader-CDOzUpY-.js";import"./Dropdown-BQsnKVnZ.js";import"./listen-DVsGTPDo.js";import"./useWindow-yIzIVMkV.js";import"./Anchor-C4IM8qLW.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BEdlw4hQ.js";import"./BootstrapModalManager-C205_b1o.js";import"./Fade-Bq72BtaS.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BsnoveWJ.js";import"./ToastNotification-DBC-l_Wa.js";import"./ReactToastify-B59Tg9ya.js";import"./Modal-DKS9K9Nh.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./emotion-react.browser.esm-DG0r8uCn.js";import"./hoist-non-react-statics.cjs-3_Nw-Sj0.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Ct({contactLeads:n,adLeads:h,auth:x,success:f=null,error:y=null}){const[l,m]=i.useState(1),[c,p]=i.useState(""),[a,g]=i.useState(n.data),[B,E]=i.useState(h.data),[o,_]=i.useState("ContactLeads"),N=(r,e)=>{m(e),window.scrollTo(0,0)},w=r=>{const e=r.target.value;p(e);let d;o==="ContactLeads"?(d=n.data.filter(b=>b.title.toLowerCase().includes(e.toLowerCase())),g(d)):o==="AdLeads"&&(d=pendingAdsList.data.filter(b=>b.title.toLowerCase().includes(e.toLowerCase())),E(d)),m(1)},T=(()=>{if(c.length>0){if(o==="ContactLeads")return a;if(o==="AdLeads")return B}else{if(o==="ContactLeads")return n.data;if(o==="AdLeads")return pendingAdsList.data}})(),C=(l-1)*5,v=l*5,M=r=>{P.fire({title:"Are you sure you want to delete this Leads?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(e=>{e.isConfirmed&&S.delete(route("admin.propery_lead_delete",r.id))})},I=r=>{P.fire({title:"Are you sure you want to delete this Inquiry?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(e=>{e.isConfirmed&&S.delete(route("admin.contact_delete",r.id))})},[k,j]=i.useState(!1),[D,L]=i.useState(null),K=()=>j(!1),F=async r=>{try{const e=await A.get(route("admin.propery_lead_show",r.id)),d=`   <table className="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${e.data.firstname} ${e.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${e.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${e.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${e.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${e.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;L(d),j(!0)}catch(e){console.error("Error fetching data",e)}},Y=async r=>{try{const e=await A.get(route("admin.contact_show",r.id)),d=`   <table className="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${e.data.firstname} ${e.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${e.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${e.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${e.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${e.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;L(d),j(!0)}catch(e){console.error("Error fetching data",e)}};return t.jsxs(O,{user:x.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Leads Listing"}),children:[t.jsx(q,{title:"Ad Leads Listing"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Leads Listing"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsxs(Tabs,{id:"uncontrolled-tab-example",activeKey:o,onSelect:r=>_(r),className:"",children:[t.jsx(Tab,{eventKey:"ContactLeads",title:"Contact Ads",children:t.jsx($,{displayList:T,startIdx:C,endIdx:v,handlePageChange:N,currentPage:l,itemsPerPage:5,handleShow:F,searchQuery:c,handleSearch:w,deletelead:M})}),t.jsx(Tab,{eventKey:"AdLeads",title:"Ad Ads",children:t.jsx($,{displayList:T,startIdx:C,endIdx:v,handlePageChange:N,currentPage:l,itemsPerPage:5,handleShow:Y,searchQuery:c,handleSearch:w,deletelead:I})})]})]})}),t.jsx(Q,{show:k,handleClose:K,data:D,title:"Lead Details"})]})}const $=({displayList:n,startIdx:h,endIdx:x,handlePageChange:f,currentPage:y,itemsPerPage:u,handleShow:l,searchQuery:m,handleSearch:c,deletelead:p})=>t.jsx("section",{className:"content2",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsxs(V,{permission:"Ad Show",message:"true",children:[t.jsx("div",{className:"mb-3 col-lg-4",children:t.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:m,onChange:c})}),t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs(s.Table,{className:"table border-no",id:"example1",children:[t.jsx(s.Thead,{children:t.jsxs(s.Tr,{children:[t.jsx(s.Th,{children:"#"}),t.jsx(s.Th,{children:"Property"}),t.jsx(s.Th,{children:"Agent"}),t.jsx(s.Th,{children:"Full Name"}),t.jsx(s.Th,{children:"Email"}),t.jsx(s.Th,{children:"Mobile"}),t.jsx(s.Th,{children:"Status"}),t.jsx(s.Th,{children:"Created At"}),t.jsx(s.Th,{})]})}),t.jsx(s.Tbody,{children:n.slice(h,x).map(a=>t.jsxs(s.Tr,{className:"hover-primary",children:[t.jsx(s.Td,{children:a.id}),t.jsx(s.Td,{children:a.ad!=null?a.ad.title:"Unknown ad"}),t.jsxs(s.Td,{children:[a.seller.firstname," ",a.seller.lastname]}),t.jsxs(s.Td,{children:[a.firstname," ",a.lastname]}),t.jsx(s.Td,{children:a.email}),t.jsx(s.Td,{children:a.phone}),t.jsx(s.Td,{children:a.status}),t.jsx(s.Td,{children:a.created_at}),t.jsxs(s.Td,{children:[t.jsx("button",{onClick:g=>l(a),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:g=>p(a),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},a.id))})]})}),n.length>u&&t.jsx("div",{className:"pagination-container float-end py-5",children:t.jsx(R,{count:Math.ceil(n.length/u),page:y,onChange:f})})]})})})})})});export{Ct as default};
