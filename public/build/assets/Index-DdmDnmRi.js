import{j as e,Y as h,a as t,y as x}from"./app-itwJjUX3.js";import{A as j}from"./AdminAuthenticated-C_PU8b7Z.js";import{P as r}from"./PermissionAllow-D0TY0oyo.js";import{S as n}from"./sweetalert2.all-DUrIEgmt.js";import{d as s}from"./index-CTh7GNLK.js";/* empty css                                  */import"./Dropdown-gO2VTgWX.js";import"./AdminHeader-DPrWPOx-.js";import"./Dropdown-DxKzW6ad.js";import"./useMergedRefs-avGIJ7As.js";import"./SSRProvider-BTMhcs7e.js";import"./useWindow-YycjxZAG.js";import"./NavbarContext-D8L38UUl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-l5WsDjp0.js";import"./BootstrapModalManager-Bz6xU9B3.js";import"./Fade-DEX4mjoG.js";import"./index-CpWed4k1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BeZVjDUA.js";import"./ReactToastify-LOs0-z25.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function $({featuresList:l,auth:d,success:c=null,error:o=null}){const m=i=>{n.fire({title:"Are you sure you want to delete this Feature?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&x.delete(route("admin.features.destroy",i.id),{onSuccess:()=>{n.fire("Deleted!","Feature has been deleted.","success")}})})};return e.jsxs(j,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Features"}),success:c,error:o,children:[e.jsx(h,{title:"feature List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Features"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(r,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.features.index"),children:"Features"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Feature Create",children:e.jsxs(t,{className:"btn btn-info text-end",href:route("admin.features.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Features Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:l.data.map((i,a)=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:a+1}),e.jsxs(s.Td,{children:[e.jsx("i",{className:`${i.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:i.name})]}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Feature Edit",children:e.jsx(t,{className:"btn btn-transparent",href:route("admin.features.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Feature Delete",children:e.jsx("button",{onClick:u=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{$ as default};
