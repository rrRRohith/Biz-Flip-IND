import{j as e,Y as h,a,y as x}from"./app-C-YXobOe.js";import{A as j}from"./AdminAuthenticated-BryW3kyh.js";import{P as r}from"./PermissionAllow-DtvTqjfA.js";import{S as d}from"./sweetalert2.all-CU2T7bGe.js";import{d as s}from"./index-GZnAuu8H.js";/* empty css                                  */import"./Dropdown-Bhi-mPBX.js";import"./AdminHeader-BqY5Y-pc.js";import"./Dropdown-CQoZgOke.js";import"./listen-NJRWOGU3.js";import"./useWindow-BglnbEhR.js";import"./Anchor-Cu9NdDED.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D5jd2WL2.js";import"./BootstrapModalManager-CAxmY8NW.js";import"./Fade-BsKEZmiP.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chg_9I5t.js";import"./ToastNotification-BAVcC5t-.js";import"./ReactToastify-CHjPQyay.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";function _({labelList:l,auth:n,success:o=null,error:c=null}){const m=i=>{d.fire({title:"Are you sure you want to delete this Feature label?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&x.delete(route("admin.feature-label.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","Feature label has been deleted.","success")}})})};return e.jsxs(j,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label"}),success:o,error:c,children:[e.jsx(h,{title:"Feature Label List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Feature Label"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Feature Label Create",children:e.jsxs(a,{className:"btn btn-info text-end",href:route("admin.feature-label.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(r,{permission:"Feature Label Listing",message:!0,children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Color"}),e.jsx(s.Th,{children:"Priority"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:l.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:i.name}),e.jsx(s.Td,{children:e.jsx("div",{style:{backgroundColor:i.color,width:"20px",height:"20px"}})}),e.jsx(s.Td,{children:i.priority}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:window.formatDateTime(i.updated_at)}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Feature Label Edit",children:e.jsx(a,{className:"btn btn-transparent",href:route("admin.feature-label.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Feature Label Delete",children:e.jsx("button",{onClick:t=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{_ as default};
