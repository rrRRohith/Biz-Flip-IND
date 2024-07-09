import{j as e,Y as h,a as n,y as x}from"./app-DqEs7Bkv.js";import{A as j}from"./AdminAuthenticated-8TtlGUvq.js";import{S as a}from"./sweetalert2.all-DRMkO0QO.js";import{d as s}from"./index-ql_5Okc_.js";/* empty css                                  */import{P as t}from"./PermissionAllow-De5fAs-K.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./ToastNotification-p7KpGbX9.js";import"./interopRequireDefault-BbjLfwJi.js";import"./inherits-DEw0FBPK.js";import"./defineProperty-DpFVb8oi.js";function k({provinceList:d,auth:l,success:c=null,error:o=null}){const m=i=>{a.fire({title:"Are you sure you want to delete this province?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&x.delete(route("admin.province.destroy",i.id),{onSuccess:()=>{a.fire("Deleted!","Province has been deleted.","success")}})})};return e.jsxs(j,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province"}),success:c,error:o,children:[e.jsx(h,{title:"Province List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Province"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Province Create",children:e.jsxs(n,{className:"btn btn-info text-end",href:route("admin.province.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Province Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Code"}),e.jsx(s.Th,{children:"Country"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:d.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("img",{src:i.image,className:"w-40 rounded-5 ",alt:`${i.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:i.name})]}),e.jsx(s.Td,{children:i.code}),e.jsx(s.Td,{children:i.country_name}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:i.updated_at}),e.jsxs(s.Td,{children:[e.jsx(t,{permission:"Province Edit",children:e.jsx(n,{className:"btn btn-transparent",href:route("admin.province.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Province Delete",children:e.jsx("button",{onClick:r=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{k as default};
