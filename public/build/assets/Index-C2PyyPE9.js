import{j as e,Y as c,a,y as m}from"./app-DqEs7Bkv.js";import{A as h}from"./AdminAuthenticated-8TtlGUvq.js";import{d as i}from"./index-ql_5Okc_.js";import{P as t}from"./PermissionAllow-De5fAs-K.js";import{S as d}from"./sweetalert2.all-DRMkO0QO.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./ToastNotification-p7KpGbX9.js";import"./interopRequireDefault-BbjLfwJi.js";import"./inherits-DEw0FBPK.js";import"./defineProperty-DpFVb8oi.js";function k({countryList:n,auth:l,success:x=null,error:j=null}){console.log(n);const o=s=>{d.fire({title:"Are you sure you want to delete this country?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&m.delete(route("admin.country.destroy",s.id),{onSuccess:()=>{d.fire("Deleted!","Country has been deleted.","success")}})})};return e.jsxs(h,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country"}),children:[e.jsx(c,{title:"Country List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Country"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Country Create",children:e.jsxs(a,{className:"btn btn-info text-end",href:route("admin.country.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Countries Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"Code"}),e.jsx(i.Th,{children:"Position"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{children:"Last Modified"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:n.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx("td",{children:s.code}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(t,{permission:"Country Edit",children:e.jsx(a,{className:"btn btn-transparent",href:route("admin.country.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Country Delete",children:e.jsx("button",{onClick:r=>o(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{k as default};
