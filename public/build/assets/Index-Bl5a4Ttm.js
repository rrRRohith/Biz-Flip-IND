import{j as e,Y as h,a,y as x}from"./app-roG2FNUw.js";import{A as j}from"./AdminAuthenticated-DNPupbbI.js";import{P as t}from"./PermissionAllow-Cm40Mk8e.js";import{S as n}from"./sweetalert2.all-DJlddvFF.js";import{d as s}from"./index-BYOm8-Jv.js";/* empty css                                  */import"./Dropdown-CBoT_l1M.js";import"./AdminHeader-CRZhssXX.js";import"./Dropdown-Bctdksvb.js";import"./useMergedRefs-CmHmiumL.js";import"./useWindow-Degt0VVA.js";import"./NavbarContext-CzESW6Li.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BADdu3Kb.js";import"./BootstrapModalManager-CJOGpHN0.js";import"./Fade-AzVfb9Pt.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BhalhK_u.js";import"./ToastNotification-C7CNvKRm.js";import"./ReactToastify-B_HsxkDQ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";function _({facilityList:l,auth:d,success:c=null,error:o=null}){const m=i=>{n.fire({title:"Are you sure you want to delete this Facility?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&x.delete(route("admin.facilities.destroy",i.id),{onSuccess:()=>{n.fire("Deleted!","Facility has been deleted.","success")}})})};return e.jsxs(j,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Facility"}),success:c,error:o,children:[e.jsx(h,{title:"Facility List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Facilities"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Facility Create",children:e.jsxs(a,{className:"btn btn-info text-end",href:route("admin.facilities.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Facilities Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:l.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("i",{className:`${i.icon} bi  w-40 rounded-5`}),e.jsx("span",{className:"ms-3",children:i.name})]}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:window.formatDateTime(i.updated_at)}),e.jsxs(s.Td,{children:[e.jsx(t,{permission:"Facility Edit",children:e.jsx(a,{className:"btn btn-transparent",href:route("admin.facilities.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Facility Delete",children:e.jsx("button",{onClick:r=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{_ as default};
