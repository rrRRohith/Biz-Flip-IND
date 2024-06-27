import{j as e,Y as m,a as t,y as h}from"./app-hnfrkFZg.js";import{A as x}from"./AdminAuthenticated-Cv4Vg8Vq.js";import{S as a}from"./sweetalert2.all-Dxdk7mo5.js";import{d as s}from"./index-B6i2j1mE.js";/* empty css                                  */import"./Dropdown-Ca-UCSU0.js";import"./AdminSidebar-DA2ORclv.js";import"./listen-DT5iH6cS.js";import"./useWindow-BqAU_gkT.js";import"./Anchor-C_LCvmXY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9RErJyb.js";import"./PermissionAllow-DpFhgEPZ.js";import"./ToastNotification-EgQe7kOo.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";function _({provinceList:d,auth:n,success:l=null,error:c=null}){const o=i=>{a.fire({title:"Are you sure you want to delete this province?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&h.delete(route("admin.province.destroy",i.id),{onSuccess:()=>{a.fire("Deleted!","Province has been deleted.","success")}})})};return e.jsxs(x,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province"}),success:l,error:c,children:[e.jsx(m,{title:"Province List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Province"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(t,{className:"btn btn-info text-end",href:route("admin.province.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Code"}),e.jsx(s.Th,{children:"Country"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:d.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsxs(s.Td,{children:[e.jsx("img",{src:i.image,className:"w-40 rounded-5 ",alt:`${i.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:i.name})]}),e.jsx(s.Td,{children:i.code}),e.jsx(s.Td,{children:i.country_name}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:i.updated_at}),e.jsxs(s.Td,{children:[e.jsx(t,{className:"btn btn-transparent",href:route("admin.province.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:r=>o(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})})]})}export{_ as default};
