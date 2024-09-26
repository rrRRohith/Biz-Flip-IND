import{j as e,Y as x,a as t,y as h}from"./app-DQU21Xrf.js";import{A as j}from"./AdminAuthenticated-BC4KwMAV.js";import{P as r}from"./PermissionAllow-DncPlnPy.js";import{S as n}from"./sweetalert2.all-Dj8pfeu8.js";import{d as i}from"./index-DWNB8uv9.js";/* empty css                                  */import"./Dropdown-BIvKyiW9.js";import"./AdminHeader-Dj7bBNZ2.js";import"./Dropdown-B2zRrySR.js";import"./useMergedRefs-Dz8djZOs.js";import"./SSRProvider-B53W2ngP.js";import"./useWindow-B9oUJZ-O.js";import"./NavbarContext-CG21-y5q.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CPNxqrWb.js";import"./BootstrapModalManager-Cbts_2Fc.js";import"./Fade-B3SGwTWq.js";import"./index-CKBByt1d.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-oNu_vh-l.js";import"./ReactToastify-D7vifwnW.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({facilityList:l,auth:d,success:c=null,error:o=null}){const m=s=>{n.fire({title:"Are you sure you want to delete this Facility?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&h.delete(route("admin.facilities.destroy",s.id),{onSuccess:()=>{n.fire("Deleted!","Facility has been deleted.","success")}})})};return e.jsxs(j,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Facility"}),success:c,error:o,children:[e.jsx(x,{title:"Facility List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Facilities"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(r,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.facilities.index"),children:"Facility"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Facility Create",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.facilities.create"),children:" Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Facilities Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"Position"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:l.data.map(s=>e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.id}),e.jsxs(i.Td,{children:[e.jsx("i",{className:`${s.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx(i.Td,{children:s.position}),e.jsx(i.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs(i.Td,{children:[e.jsx(r,{permission:"Facility Edit",children:e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.facilities.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Facility Delete",children:e.jsx("button",{onClick:a=>m(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{R as default};
