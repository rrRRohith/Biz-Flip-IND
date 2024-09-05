import{r as c,j as e,Y as b,a as d,y as N,b as T}from"./app-D1aGfrPI.js";import{A as S}from"./AdminAuthenticated-CTFfksGu.js";import{S as m}from"./sweetalert2.all-C98cKNGZ.js";import{P as r}from"./PermissionAllow-DnhKOBGp.js";import{d as s}from"./index-BC3kmjo4.js";/* empty css                                  */import{M as g}from"./ModalPopup--u62J9YS.js";import v from"./ViewStaff-DardUgu1.js";import"./Dropdown-BvMv-Cx8.js";import"./AdminHeader-CDOzUpY-.js";import"./Dropdown-BQsnKVnZ.js";import"./listen-DVsGTPDo.js";import"./useWindow-yIzIVMkV.js";import"./Anchor-C4IM8qLW.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BEdlw4hQ.js";import"./BootstrapModalManager-C205_b1o.js";import"./Fade-Bq72BtaS.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BsnoveWJ.js";import"./ToastNotification-DBC-l_Wa.js";import"./ReactToastify-B59Tg9ya.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./Modal-DKS9K9Nh.js";function Z({auth:h,staffs:n}){const[x,a]=c.useState(!1),[l,p]=c.useState(null),j=function(t){m.fire({title:"Are you sure you want to delete this staff?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(i=>{i.isConfirmed&&N.delete(route("admin.staff.destroy",t),{onSuccess:()=>{m.fire("Deleted!","staff has been deleted.","success")}})})},o=()=>a(!1),f=async t=>{try{const u=(await T.get(route("admin.staff.show",t.id))).data;p(u),a(!0)}catch(i){console.error("Error fetching data",i)}};return e.jsxs(e.Fragment,{children:[e.jsxs(S,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Staff List"}),children:[e.jsx(b,{title:"Staff List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Staff List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Staff Create",children:e.jsxs(d,{className:"btn btn-info text-end",href:route("admin.staff.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Staff Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{scope:"col",children:"#"}),e.jsx(s.Th,{scope:"col",children:"Name"}),e.jsx(s.Th,{scope:"col",children:"Email"}),e.jsx(s.Th,{scope:"col",children:"Phone"}),e.jsx(s.Th,{scope:"col",children:"Role"}),e.jsx(s.Th,{scope:"col",children:"Last Modified"}),e.jsx(s.Th,{scope:"col"})]})}),e.jsx(s.Tbody,{children:n.data.length?e.jsx(e.Fragment,{children:n.data.map(t=>e.jsxs(s.Tr,{children:[e.jsxs(s.Td,{children:["#",t.id]}),e.jsx(s.Td,{children:t.name}),e.jsx(s.Td,{children:t.email}),e.jsx(s.Td,{children:t.phone}),e.jsx(s.Td,{children:t.role_names}),e.jsx(s.Td,{children:t.date_text}),e.jsxs(s.Td,{children:[e.jsx(r,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>f(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(r,{permission:"Staff Edit",children:e.jsx(d,{href:route("admin.staff.edit",t.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(r,{permission:"Staff Delete",children:e.jsx("button",{onClick:i=>j(t.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t.id))}):e.jsx(e.Fragment,{children:e.jsx(s.Tr,{children:e.jsx(s.Td,{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})})})})})})})]})})]}),e.jsx(g,{show:x,handleClose:o,size:"md",title:"Staff User Details",children:l?e.jsx(v,{collection:l,handleClose:o}):"Failed fetching data..."})]})}export{Z as default};
