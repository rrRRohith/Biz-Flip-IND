import{j as e,Y as h,a as n,y as x}from"./app-BP1ASY9m.js";import{A as j}from"./AdminAuthenticated-C34ejvVU.js";import{S as d}from"./sweetalert2.all-BSFnksV-.js";import{d as s}from"./index-BXwcN5c5.js";/* empty css                                  */import{P as r}from"./PermissionAllow-DDRUKtYh.js";import"./Dropdown-ErKsyKJB.js";import"./AdminHeader-DclFL37X.js";import"./Dropdown-CuM2Misa.js";import"./useMergedRefs-C7i9xQs_.js";import"./useWindow-CjeW6bh8.js";import"./NavbarContext-Ci8xUASw.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B-nPVonw.js";import"./BootstrapModalManager-CtfNojTw.js";import"./Fade-DClmjdQ0.js";import"./index-BggJkT38.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-paLV-kgH.js";import"./ReactToastify-DsLGQMwT.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({provinceList:l,auth:a,success:c=null,error:o=null}){const m=i=>{d.fire({title:"Are you sure you want to delete this province?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&x.delete(route("admin.province.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","Province has been deleted.","success")}})})};return e.jsxs(j,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province"}),success:c,error:o,children:[e.jsx(h,{title:"Provinces List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Provinces"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Province Create",children:e.jsxs(n,{className:"btn btn-info text-end",href:route("admin.province.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Province Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Code"}),e.jsx(s.Th,{children:"Leads"}),e.jsx(s.Th,{children:"Ads"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:l.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:e.jsx("span",{className:"ms-3",children:i.name})}),e.jsx(s.Td,{children:i.code}),e.jsx(s.Td,{children:i.leads.length}),e.jsx(s.Td,{children:i.ads.length}),e.jsx("td",{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{className:"text-end",children:[e.jsx(r,{permission:"Province Edit",children:e.jsx(n,{className:"btn btn-transparent",href:route("admin.province.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Province Delete",children:e.jsx("button",{onClick:t=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{R as default};
