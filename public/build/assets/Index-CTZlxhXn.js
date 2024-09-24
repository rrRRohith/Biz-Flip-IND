import{j as e,Y as x,a as d,y as h}from"./app-BXfOFtMl.js";import{A as j}from"./AdminAuthenticated-Dwx8ZxkL.js";import{P as r}from"./PermissionAllow-Bmav22Jn.js";import{S as n}from"./sweetalert2.all-BdvOc9ft.js";import{d as s}from"./index-xVZ2K_k5.js";/* empty css                                  */import"./Dropdown-Cp_rOS_V.js";import"./AdminHeader-B6A_v_mg.js";import"./Dropdown-Dv0ZZ02g.js";import"./useMergedRefs-WOjEEHiq.js";import"./useWindow-Md6ixlI9.js";import"./NavbarContext-Dtj3Ep1K.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CzhnDPPu.js";import"./BootstrapModalManager-D4jQBsz4.js";import"./Fade-D7rPbNdF.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dii__Aqi.js";import"./ToastNotification-D57WkZ_V.js";import"./ReactToastify-cpV57kyA.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({purposeList:a,auth:l,success:o=null,error:c=null}){const m=i=>{n.fire({title:"Are you sure you want to delete this Ad Purpose?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&h.delete(route("admin.ad_purposes.destroy",i.id),{onSuccess:()=>{n.fire("Deleted!","Ad Purpose has been deleted.","success")}})})};return e.jsxs(j,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Purpose"}),success:o,error:c,children:[e.jsx(x,{title:"Ad Purpose List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ad purposes"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Ad Purpose Create",children:e.jsxs(d,{className:"btn btn-info text-end",href:route("admin.ad_purposes.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Ad Purpose Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:a.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("i",{className:`${i.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:i.title})]}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Ad Purpose Edit",children:e.jsx(d,{className:"btn btn-transparent",href:route("admin.ad_purposes.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Ad Purpose Delete",children:e.jsx("button",{onClick:t=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{R as default};
