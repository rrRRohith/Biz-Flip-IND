import{j as e,Y as h,a,y as x}from"./app-C4G85uq6.js";import{A as j}from"./AdminAuthenticated-BlCMwjTS.js";import{P as r}from"./PermissionAllow-C8F5i1ep.js";import{S as l}from"./sweetalert2.all-RX9uc4ej.js";import{d as s}from"./index-DGAWd5AZ.js";/* empty css                                  */import"./Dropdown-CtkXdWFp.js";import"./AdminHeader-BBprjd8_.js";import"./Dropdown-a7L1ADLf.js";import"./useMergedRefs-BowFoGfK.js";import"./useWindow-Bo79gOI5.js";import"./NavbarContext-o-jod6r2.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DR7Z4j5r.js";import"./BootstrapModalManager-qIbNpEmt.js";import"./Fade-C-0t23Gq.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dej2v1i9.js";import"./ToastNotification-DfIAoRAg.js";import"./ReactToastify-ipGcVK3S.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";function $({labelList:d,auth:n,success:o=null,error:c=null}){const m=i=>{l.fire({title:"Are you sure you want to delete this Feature label?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&x.delete(route("admin.feature-label.destroy",i.id),{onSuccess:()=>{l.fire("Deleted!","Feature label has been deleted.","success")}})})};return e.jsxs(j,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label"}),success:o,error:c,children:[e.jsx(h,{title:"Feature Label List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Feature Label"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Feature Label Create",children:e.jsxs(a,{className:"btn btn-info text-end",href:route("admin.feature-label.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(r,{permission:"Feature Label Listing",message:!0,children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Color"}),e.jsx(s.Th,{children:"Priority"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:d.data.map((i,t)=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:t+1}),e.jsxs(s.Td,{children:[" ",e.jsx("i",{className:`${feature.icon} bi  w-40 rounded-5`}),i.name]}),e.jsx(s.Td,{children:e.jsx("div",{style:{backgroundColor:i.color,width:"20px",height:"20px"}})}),e.jsx(s.Td,{children:i.priority}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:window.formatDateTime(i.updated_at)}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Feature Label Edit",children:e.jsx(a,{className:"btn btn-transparent",href:route("admin.feature-label.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Feature Label Delete",children:e.jsx("button",{onClick:p=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{$ as default};
