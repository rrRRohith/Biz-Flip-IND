import{j as s,Y as c,R as n,a as m}from"./app-DA3kWpyT.js";import{A as o}from"./AdminAuthenticated-DTpoxFwe.js";import{P as r}from"./PermissionAllow-CatPWOR2.js";import"./sweetalert2.all-WGLkCLsO.js";import{d as e}from"./index-CBvByLPK.js";/* empty css                                  */import"./Dropdown-DwhAOHWK.js";import"./AdminHeader-CYBZnRzT.js";import"./Dropdown-C4g8BwlD.js";import"./listen-PQ8YVYSi.js";import"./useWindow-m9PyNX1i.js";import"./Anchor-4-PI7QGH.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DyJkGZ4V.js";import"./BootstrapModalManager-UDfIyIdl.js";import"./Fade-9U48mqhz.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CTzM4ZlW.js";import"./ToastNotification-BS3is8iG.js";import"./ReactToastify-CzFpsPLJ.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";function _({tickets:a,auth:l,success:t=null,error:d=null}){return s.jsxs(o,{user:l.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Support Tickets"}),success:t,error:d,children:[s.jsx(c,{title:"Support Tickets List"}),s.jsx("div",{className:"content-wrapper me-4",children:s.jsxs("div",{className:"container-full",children:[s.jsx("div",{className:"content-header",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-6",children:s.jsx("div",{className:"d-flex align-items-center",children:s.jsx("div",{className:"me-auto",children:s.jsx("h4",{className:"page-title",children:"Support Tickets"})})})}),s.jsx("div",{className:"col-lg-6",children:s.jsx("div",{className:"text-end"})})]})}),s.jsx("section",{className:"content",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"box",children:s.jsx("div",{className:"box-body",children:s.jsx(r,{permission:"Support Ticket Listing",message:"true",children:s.jsx("div",{className:"table-responsive rounded card-table",children:s.jsxs(e.Table,{className:"table border-no",id:"example1",children:[s.jsx(e.Thead,{children:s.jsxs(e.Tr,{children:[s.jsx(e.Th,{children:"#"}),s.jsx(e.Th,{children:"Seller"}),s.jsx(e.Th,{children:"Subject"}),s.jsx(e.Th,{children:"Priority"}),s.jsx(e.Th,{children:"Status"}),s.jsx(e.Th,{children:"Created Date"}),s.jsx(e.Th,{})]})}),s.jsx("tbody",{children:a.data.map(i=>s.jsx(n.Fragment,{children:s.jsxs(e.Tr,{className:"hover-primary",children:[s.jsx(e.Td,{children:i.id}),s.jsxs(e.Td,{className:"text-capitalize",children:[i.user.firstname," ",i.user.lastname]}),s.jsx(e.Td,{className:"text-capitalize",children:i.subject}),s.jsx(e.Td,{className:"text-capitalize",children:i.priority}),s.jsx(e.Td,{className:"text-capitalize",children:s.jsx("span",{className:`badge  ${i.status=="open"?"bg-info":"bg-success"}`,children:i.status})}),s.jsx(e.Td,{children:i.date_text}),s.jsx(e.Td,{children:s.jsx(r,{permission:"Support Ticket Edit",children:s.jsx(m,{className:"btn btn-transparent",href:route("admin.support-tickets.show",i.id),children:s.jsx("i",{className:"bi bi-eye"})})})})]},i.id)},i.id))})]})})})})})})})})]})})]})}export{_ as default};