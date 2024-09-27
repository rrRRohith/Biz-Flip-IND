import{j as e,Y as h,a as t,y as x}from"./app-6BcKqqXU.js";import{A as j}from"./AdminAuthenticated-Be7KpLny.js";import{P as i}from"./PermissionAllow-BmCNOlNQ.js";import{S as l}from"./sweetalert2.all-DoEQk7j9.js";import{d as s}from"./index-7xk5LMF3.js";/* empty css                                  */import"./Dropdown-ComaojRe.js";import"./AdminHeader-ySwx5AX5.js";import"./Dropdown-DvwRhQBu.js";import"./useMergedRefs-BjZmlaaD.js";import"./SSRProvider-B1cDgeAM.js";import"./useWindow-DlwoiV10.js";import"./NavbarContext-BLw6Ox5R.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DxwM-BRW.js";import"./BootstrapModalManager-DdMdDjvO.js";import"./Fade-C9x2Ts3i.js";import"./index-B6tdujfY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DJBDi_LG.js";import"./ReactToastify-ByKSbOc-.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function $({labelList:n,auth:d,success:c=null,error:o=null}){const m=r=>{l.fire({title:"Are you sure you want to delete this Feature label?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&x.delete(route("admin.feature-label.destroy",r.id),{onSuccess:()=>{l.fire("Deleted!","Feature label has been deleted.","success")}})})};return e.jsxs(j,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label"}),success:c,error:o,children:[e.jsx(h,{title:"Feature Label List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Feature Label"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(i,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Feature Label Create",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.feature-label.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(i,{permission:"Feature Label Listing",message:!0,children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Color"}),e.jsx(s.Th,{children:"Priority"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:n.data.map((r,a)=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:a+1}),e.jsxs(s.Td,{children:[" ",e.jsx("i",{className:`${r.icon} bi  w-40 rounded-5`}),r.name]}),e.jsx(s.Td,{children:e.jsx("div",{style:{backgroundColor:r.color,width:"20px",height:"20px"}})}),e.jsx(s.Td,{children:r.priority}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(r.status)}})}),e.jsxs(s.Td,{children:[e.jsx(i,{permission:"Feature Label Edit",children:e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.feature-label.edit",r.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Feature Label Delete",children:e.jsx("button",{onClick:u=>m(r),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},r.id))})]})})})})})})})})]})})]})}export{$ as default};
