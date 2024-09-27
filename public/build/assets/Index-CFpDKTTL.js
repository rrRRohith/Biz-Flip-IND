import{r as u,j as e,Y as b,a as r,c as N}from"./app-CPHmblyB.js";import{A as T}from"./AdminAuthenticated-Cu-_eB4y.js";import{P as l}from"./PermissionAllow-BwxwuOhX.js";import"./sweetalert2.all-DM8hCQ2F.js";import{d as i}from"./index-CA_DTVAv.js";/* empty css                                  */import{T as g}from"./Tabs-o2dsaJ7K.js";import{T as t}from"./Tab-Biy1FCdp.js";import"./Dropdown-0CXcFjtq.js";import"./AdminHeader-CSY18d6r.js";import"./Dropdown-QtP6JdFm.js";import"./useMergedRefs-BFO96Tpx.js";import"./SSRProvider-CxlNfGfU.js";import"./useWindow-B4KFCQso.js";import"./NavbarContext-Bbiy1I5a.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-SRguHiia.js";import"./BootstrapModalManager-BFaiKgB2.js";import"./Fade-D2_AvUfd.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-jrEq7tlc.js";import"./ToastNotification-Ci4gm1Z1.js";import"./ReactToastify-Xt1VQqe3.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./TabPane-tGVXYZw1.js";import"./ElementChildren-ChtDAW7O.js";function W({tickets:a,auth:s,success:n=null,error:d=null,newTickets:o,openTickets:m,closedTickets:x}){const[h,p]=u.useState("NewTickets");return e.jsxs(T,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Support Tickets"}),success:n,error:d,children:[e.jsx(b,{title:"Support Tickets List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Support Tickets"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(r,{href:"/admin",children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(r,{href:route("admin.support-tickets.index"),children:"Support Tickets"})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(l,{permission:"Support Ticket Listing",message:"true",children:e.jsxs(g,{id:"uncontrolled-tab-example",activeKey:h,onSelect:j=>p(j),className:"",children:[e.jsx(t,{eventKey:"NewTickets",title:"New Tickets",children:e.jsx(c,{tickets:o})}),e.jsx(t,{eventKey:"OpenTickets",title:"Open Tickets",children:e.jsx(c,{tickets:m})}),e.jsx(t,{eventKey:"ClosedTickets",title:"Closed Tickets",children:e.jsx(c,{tickets:x})})]})})})})})})})]})})]})}const c=function({tickets:a}){return e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"User"}),e.jsx(i.Th,{children:"Subject"}),e.jsx(i.Th,{children:"Priority"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{children:"Created Date"}),e.jsx(i.Th,{})]})}),e.jsx("tbody",{children:a.data.length?e.jsx(e.Fragment,{children:a.data.map(s=>e.jsx(N.Fragment,{children:e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.ticket_no}),e.jsxs(i.Td,{className:"text-capitalize",children:[s.user.firstname," ",s.user.lastname]}),e.jsx(i.Td,{className:"text-capitalize",children:s.subject}),e.jsx(i.Td,{className:"text-capitalize",children:e.jsx("span",{className:`badge  ${s.priority=="high"?"bg-danger":s.priority=="medium"?"bg-warning":"bg-secondary"}`,children:s.priority})}),e.jsx(i.Td,{className:"text-capitalize",children:e.jsx("span",{className:`badge  ${s.status=="open"?"bg-info":"bg-success"}`,children:s.status})}),e.jsx(i.Td,{children:s.date_text}),e.jsx(i.Td,{className:"text-end text-right",children:e.jsxs(l,{permission:"Support Ticket Edit",children:[e.jsx(r,{className:"btn btn-transparent p-2 px-3",href:route("admin.support-tickets.show",s.id),children:e.jsx("i",{className:"bi bi-eye"})}),s.status=="open"?e.jsxs(e.Fragment,{children:[e.jsx(r,{className:"badge bg-secondary me-2",href:route("admin.support-tickets.show",s.id),children:"Respond"}),e.jsx(r,{className:"badge bg-secondary",href:route("admin.support-tickets.close-ticket",s.id),children:"Close"})]}):e.jsx(r,{className:"badge bg-secondary",href:route("admin.support-tickets.reopen",s.id),children:"Reopen"})]})})]},s.id)},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{colspan:"100",className:"text-center",children:"No tickets found."})})})})]})})};export{W as default};
