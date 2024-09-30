import{r as d,j as e,Y as b,a,y as N,b as g}from"./app-R6y9gL3g.js";import{A as v}from"./AdminAuthenticated-B2wS1uY8.js";import{S as m}from"./sweetalert2.all-BKZzp1c9.js";import{P as t}from"./PermissionAllow-D4BwgB5q.js";import{d as s}from"./index-BORELF9y.js";/* empty css                                  */import{M as S}from"./ModalPopup-DWmcV2G8.js";import T from"./ViewStaff-QDgp3fSX.js";import"./Dropdown-DgAiWIoo.js";import"./AdminHeader-CDhl87mA.js";import"./Dropdown-BlSHQWGn.js";import"./useMergedRefs-C3t7vQZD.js";import"./SSRProvider-xBs2tMT7.js";import"./useWindow-DRSLSfK6.js";import"./NavbarContext-DQxyGIWx.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CU6KdK5U.js";import"./BootstrapModalManager-aBqd47xI.js";import"./Fade-q808BQ0I.js";import"./index-CeBJEy_f.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DAW1pCwX.js";import"./ReactToastify-BMVUs_yP.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-CXcZHr5_.js";function $({auth:h,staffs:n}){const[x,l]=d.useState(!1),[c,j]=d.useState(null),p=function(i){m.fire({title:"Are you sure you want to delete this staff?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&N.delete(route("admin.staff.destroy",i),{onSuccess:()=>{m.fire("Deleted!","staff has been deleted.","success")}})})},o=()=>l(!1),f=async i=>{try{const u=(await g.get(route("admin.staff.show",i.id))).data;j(u),l(!0)}catch(r){console.error("Error fetching data",r)}};return e.jsxs(e.Fragment,{children:[e.jsxs(v,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Staff List"}),children:[e.jsx(b,{title:"Staff List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Staff List"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(a,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(a,{href:route("admin.staff.index"),children:"Staffs"})})]})})})]})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Staff Create",children:e.jsx(a,{className:"btn btn-info text-end",href:route("admin.staff.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Staff Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{scope:"col",children:"#"}),e.jsx(s.Th,{scope:"col",children:"Name"}),e.jsx(s.Th,{scope:"col",children:"Email"}),e.jsx(s.Th,{scope:"col",children:"Phone"}),e.jsx(s.Th,{scope:"col",children:"Role"}),e.jsx(s.Th,{scope:"col"})]})}),e.jsx(s.Tbody,{children:n.data.length?e.jsx(e.Fragment,{children:n.data.map(i=>e.jsxs(s.Tr,{children:[e.jsxs(s.Td,{children:["#",i.id]}),e.jsx(s.Td,{children:i.name}),e.jsx(s.Td,{children:i.email}),e.jsx(s.Td,{children:i.phone}),e.jsx(s.Td,{children:i.role_names}),e.jsxs(s.Td,{children:[e.jsx(t,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>f(i),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(t,{permission:"Staff Edit",children:e.jsx(a,{href:route("admin.staff.edit",i.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(t,{permission:"Staff Delete",children:e.jsx("button",{onClick:r=>p(i.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))}):e.jsx(e.Fragment,{children:e.jsx(s.Tr,{children:e.jsx(s.Td,{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})})})})})})})]})})]}),e.jsx(S,{show:x,handleClose:o,size:"md",title:"Staff User Details",children:c?e.jsx(T,{collection:c,handleClose:o}):"Failed fetching data..."})]})}export{$ as default};
