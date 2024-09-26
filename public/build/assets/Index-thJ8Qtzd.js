import{j as e,Y as x,a as t,y as h}from"./app-Mi5-AqKU.js";import{A as p}from"./AdminAuthenticated-DlHDvaUZ.js";import{P as r}from"./PermissionAllow-B8xuR5O8.js";import{S as n}from"./sweetalert2.all-BP8zmD6F.js";import{d as s}from"./index-BxwUfokB.js";/* empty css                                  */import"./Dropdown-Dk7jjItk.js";import"./AdminHeader-DZWAdAgA.js";import"./Dropdown-BdYkEp6F.js";import"./useMergedRefs-B9NgnWcR.js";import"./SSRProvider-DMDV9ab5.js";import"./useWindow-CcF1-924.js";import"./NavbarContext-C0XN_G8R.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Da_kr_1K.js";import"./BootstrapModalManager-CXIzqira.js";import"./Fade-DuL5UsXy.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B_UjAs0f.js";import"./ToastNotification-Bnj11tKi.js";import"./ReactToastify-C6-0c1dT.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({typeList:a,auth:l,success:c=null,error:o=null}){const m=i=>{n.fire({title:"Are you sure you want to delete this Ad Type?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(d=>{d.isConfirmed&&h.delete(route("admin.ad_types.destroy",i.id),{onSuccess:()=>{n.fire("Deleted!","Ad Type has been deleted.","success")}})})};return e.jsxs(p,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Type"}),success:c,error:o,children:[e.jsx(x,{title:"Ad Type List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Ad types"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(r,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.ad_types.index"),children:"Ad Type"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Ad Type Create",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.ad_types.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Ad Type Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:a.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("i",{className:`${i.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:i.title})]}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Ad Type Edit",children:e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.ad_types.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Ad Type Delete",children:e.jsx("button",{onClick:d=>m(i),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{R as default};
