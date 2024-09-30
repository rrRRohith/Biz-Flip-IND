import{r as o,j as e,Y as O,a as S,y as A,b as P}from"./app-0aoHyoz5.js";import{S as $}from"./sweetalert2.all-CMJ-359h.js";import{A as Q}from"./AdminAuthenticated-eQPjaVtD.js";import{M as V}from"./ModalPopup-Bqbvbxpj.js";import{d as s}from"./index-DBfwIR5-.js";/* empty css                                  */import{P as R}from"./PermissionAllow-CxZ2RWtD.js";import{P as U}from"./Pagination-0sJpZfKq.js";import"./Dropdown-CP4KkRbJ.js";import"./AdminHeader-BEkc_RT4.js";import"./Dropdown-DBScLNpA.js";import"./useMergedRefs-B5uLeDim.js";import"./SSRProvider-BEY92LvW.js";import"./useWindow-DF1SNVG3.js";import"./NavbarContext-O6zi1bws.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-jVidAuu3.js";import"./BootstrapModalManager-Bb-vtMUq.js";import"./Fade-BZDxvKQT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-cZRJK8nz.js";import"./ToastNotification-DN8RRYgR.js";import"./ReactToastify-BMJiDBqz.js";import"./Modal-CTZFW7IS.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./objectWithoutPropertiesLoose-_n_vZqlI.js";import"./emotion-react.browser.esm-MR2oeoF1.js";import"./hoist-non-react-statics.cjs-BrO7s5Tn.js";function Le({contactLeads:n,adLeads:h,auth:x,success:f=null,error:N=null}){const[l,m]=o.useState(1),[c,j]=o.useState(""),[a,p]=o.useState(n.data),[E,_]=o.useState(h.data),[i,M]=o.useState("ContactLeads"),y=(r,t)=>{m(t),window.scrollTo(0,0)},w=r=>{const t=r.target.value;j(t);let d;i==="ContactLeads"?(d=n.data.filter(b=>b.title.toLowerCase().includes(t.toLowerCase())),p(d)):i==="AdLeads"&&(d=pendingAdsList.data.filter(b=>b.title.toLowerCase().includes(t.toLowerCase())),_(d)),m(1)},T=(()=>{if(c.length>0){if(i==="ContactLeads")return a;if(i==="AdLeads")return E}else{if(i==="ContactLeads")return n.data;if(i==="AdLeads")return pendingAdsList.data}})(),v=(l-1)*5,C=l*5,D=r=>{$.fire({title:"Are you sure you want to delete this Leads?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&A.delete(route("admin.propery_lead_delete",r.id))})},I=r=>{$.fire({title:"Are you sure you want to delete this Inquiry?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&A.delete(route("admin.contact_delete",r.id))})},[k,g]=o.useState(!1),[F,L]=o.useState(null),K=()=>g(!1),Y=async r=>{try{const t=await P.get(route("admin.propery_lead_show",r.id)),d=`   <table className="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${t.data.firstname} ${t.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${t.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${t.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${t.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${t.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;L(d),g(!0)}catch(t){console.error("Error fetching data",t)}},q=async r=>{try{const t=await P.get(route("admin.contact_show",r.id)),d=`   <table className="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${t.data.firstname} ${t.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${t.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${t.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${t.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${t.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;L(d),g(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(Q,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Leads Listing"}),children:[e.jsx(O,{title:"Ad Leads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Leads Listing"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(S,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(S,{href:route("admin.leads.index"),children:"Leads"})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsxs(Tabs,{id:"uncontrolled-tab-example",activeKey:i,onSelect:r=>M(r),className:"",children:[e.jsx(Tab,{eventKey:"ContactLeads",title:"Contact Ads",children:e.jsx(B,{displayList:T,startIdx:v,endIdx:C,handlePageChange:y,currentPage:l,itemsPerPage:5,handleShow:Y,searchQuery:c,handleSearch:w,deletelead:D})}),e.jsx(Tab,{eventKey:"AdLeads",title:"Ad Ads",children:e.jsx(B,{displayList:T,startIdx:v,endIdx:C,handlePageChange:y,currentPage:l,itemsPerPage:5,handleShow:q,searchQuery:c,handleSearch:w,deletelead:I})})]})]})}),e.jsx(V,{show:k,handleClose:K,data:F,title:"Lead Details"})]})}const B=({displayList:n,startIdx:h,endIdx:x,handlePageChange:f,currentPage:N,itemsPerPage:u,handleShow:l,searchQuery:m,handleSearch:c,deletelead:j})=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(R,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:m,onChange:c})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Property"}),e.jsx(s.Th,{children:"Agent"}),e.jsx(s.Th,{children:"Full Name"}),e.jsx(s.Th,{children:"Email"}),e.jsx(s.Th,{children:"Mobile"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Created At"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:n.slice(h,x).map(a=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:a.id}),e.jsx(s.Td,{children:a.ad!=null?a.ad.title:"Unknown ad"}),e.jsxs(s.Td,{children:[a.seller.firstname," ",a.seller.lastname]}),e.jsxs(s.Td,{children:[a.firstname," ",a.lastname]}),e.jsx(s.Td,{children:a.email}),e.jsx(s.Td,{children:a.phone}),e.jsx(s.Td,{children:a.status}),e.jsx(s.Td,{children:a.created_at}),e.jsxs(s.Td,{children:[e.jsx("button",{onClick:p=>l(a),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{onClick:p=>j(a),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},a.id))})]})}),n.length>u&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(U,{count:Math.ceil(n.length/u),page:N,onChange:f})})]})})})})})})});export{Le as default};
