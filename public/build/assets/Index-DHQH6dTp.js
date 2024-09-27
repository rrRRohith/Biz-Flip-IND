import{j as e,Y as h,a as r,y as x}from"./app-CPHmblyB.js";import{A as j}from"./AdminAuthenticated-Cu-_eB4y.js";import{S as a}from"./sweetalert2.all-DM8hCQ2F.js";import{d as s}from"./index-CA_DTVAv.js";/* empty css                                  */import{P as n}from"./PermissionAllow-BwxwuOhX.js";import"./Dropdown-0CXcFjtq.js";import"./AdminHeader-CSY18d6r.js";import"./Dropdown-QtP6JdFm.js";import"./useMergedRefs-BFO96Tpx.js";import"./SSRProvider-CxlNfGfU.js";import"./useWindow-B4KFCQso.js";import"./NavbarContext-Bbiy1I5a.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-SRguHiia.js";import"./BootstrapModalManager-BFaiKgB2.js";import"./Fade-D2_AvUfd.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-jrEq7tlc.js";import"./ToastNotification-Ci4gm1Z1.js";import"./ReactToastify-Xt1VQqe3.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function q({provinceList:d,auth:l,success:c=null,error:o=null}){const m=i=>{a.fire({title:"Are you sure you want to delete this province?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&x.delete(route("admin.province.destroy",i.id),{onSuccess:()=>{a.fire("Deleted!","Province has been deleted.","success")}})})};return e.jsxs(j,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province"}),success:c,error:o,children:[e.jsx(h,{title:"Provinces List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Provinces"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(r,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(r,{href:route("admin.province.index"),children:"Province"})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Province Create",children:e.jsx(r,{className:"btn btn-info text-end",href:route("admin.province.create"),children:" Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Province Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Code"}),e.jsx(s.Th,{children:"Leads"}),e.jsx(s.Th,{children:"Ads"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:d.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:e.jsx("span",{className:"ms-3",children:i.name})}),e.jsx(s.Td,{children:i.code}),e.jsx(s.Td,{children:i.leads.length}),e.jsx(s.Td,{children:i.ads.length}),e.jsx("td",{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{className:"text-end",children:[e.jsx(n,{permission:"Province Edit",children:e.jsx(r,{className:"btn btn-transparent p-2 px-3",href:route("admin.province.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Province Delete",children:e.jsx("button",{onClick:t=>m(i),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{q as default};
