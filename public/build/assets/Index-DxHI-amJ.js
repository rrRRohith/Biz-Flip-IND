import{j as e,Y as x,a as t,y as h}from"./app-6BcKqqXU.js";import{A as j}from"./AdminAuthenticated-Be7KpLny.js";import{P as r}from"./PermissionAllow-BmCNOlNQ.js";import{S as n}from"./sweetalert2.all-DoEQk7j9.js";import{d as s}from"./index-7xk5LMF3.js";/* empty css                                  */import"./Dropdown-ComaojRe.js";import"./AdminHeader-ySwx5AX5.js";import"./Dropdown-DvwRhQBu.js";import"./useMergedRefs-BjZmlaaD.js";import"./SSRProvider-B1cDgeAM.js";import"./useWindow-DlwoiV10.js";import"./NavbarContext-BLw6Ox5R.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DxwM-BRW.js";import"./BootstrapModalManager-DdMdDjvO.js";import"./Fade-C9x2Ts3i.js";import"./index-B6tdujfY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DJBDi_LG.js";import"./ReactToastify-ByKSbOc-.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({purposeList:a,auth:l,success:c=null,error:o=null}){const m=i=>{n.fire({title:"Are you sure you want to delete this Ad Purpose?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(d=>{d.isConfirmed&&h.delete(route("admin.ad_purposes.destroy",i.id),{onSuccess:()=>{n.fire("Deleted!","Ad Purpose has been deleted.","success")}})})};return e.jsxs(j,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Purpose"}),success:c,error:o,children:[e.jsx(x,{title:"Ad Purpose List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Ad purposes"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(r,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.ad_purposes.index"),children:"Ad Purpose"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Ad Purpose Create",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.ad_purposes.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Ad Purpose Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:a.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("i",{className:`${i.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:i.title})]}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Ad Purpose Edit",children:e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.ad_purposes.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Ad Purpose Delete",children:e.jsx("button",{onClick:d=>m(i),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{R as default};
