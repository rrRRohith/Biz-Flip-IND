import{j as e,Y as h,a as t,y as x}from"./app-Akylwbq0.js";import{A as j}from"./AdminAuthenticated-DTgiHzF5.js";import{P as r}from"./PermissionAllow-CB1VZH03.js";import{S as a}from"./sweetalert2.all-c__LPqBQ.js";import{d as s}from"./index-CM-Akvhs.js";/* empty css                                  */import"./Dropdown-DcblL1zV.js";import"./AdminHeader-D6tHz5HJ.js";import"./Dropdown-Dym4xX4-.js";import"./useMergedRefs-C6hqy1VW.js";import"./SSRProvider-D8VGMU17.js";import"./useWindow-BMR63Lcn.js";import"./NavbarContext-CIWNcitZ.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CWh0YhTe.js";import"./BootstrapModalManager-Eahm6Wfg.js";import"./Fade-CwyKlMLO.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dvg67boC.js";import"./ToastNotification-DxiTJXKI.js";import"./ReactToastify-2i8COxRb.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({typeList:n,auth:l,success:c=null,error:o=null}){const m=i=>{a.fire({title:"Are you sure you want to delete this Ad Type?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(d=>{d.isConfirmed&&x.delete(route("admin.ad_types.destroy",i.id),{onSuccess:()=>{a.fire("Deleted!","Ad Type has been deleted.","success")}})})};return e.jsxs(j,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Type"}),success:c,error:o,children:[e.jsx(h,{title:"Ad Type List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Ad types"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(r,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.ad_types.index"),children:"Ad Type"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Ad Type Create",children:e.jsxs(t,{className:"btn btn-info text-end",href:route("admin.ad_types.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Ad Type Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:n.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("i",{className:`${i.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:i.title})]}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Ad Type Edit",children:e.jsx(t,{className:"btn btn-transparent",href:route("admin.ad_types.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Ad Type Delete",children:e.jsx("button",{onClick:d=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{R as default};
