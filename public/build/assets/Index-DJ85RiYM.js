<<<<<<<< HEAD:public/build/assets/Index-DJ85RiYM.js
import{j as e,Y as h,a as n,y as x}from"./app-1W61cHJj.js";import{A as j}from"./AdminAuthenticated-KOuZwmJM.js";import{P as t}from"./PermissionAllow-Bx3DGybq.js";import{S as d}from"./sweetalert2.all-RV9XoKUG.js";import{d as s}from"./index-DcM7R-IT.js";/* empty css                                  */import"./Dropdown-ChLCVAVs.js";import"./AdminHeader-9zNdcYjW.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BCmS9dAa.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";function $({bannersList:l,auth:a,success:c=null,error:o=null}){const m=i=>{d.fire({title:"Are you sure you want to delete this Banners?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&x.delete(route("admin.banners.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","Banners has been deleted.","success")}})})};return e.jsxs(j,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banners"}),success:c,error:o,children:[e.jsx(h,{title:"Banners List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Banners"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Banner Create",children:e.jsxs(n,{className:"btn btn-info text-end",href:route("admin.banners.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Banners Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Image"}),e.jsx(s.Th,{children:"Title"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:l.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:e.jsx("img",{src:i.picture_desktop||i.picture_mobile,className:"wd-100 rounded-5 ",alt:`${i.picture_desktop} Image`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx(s.Td,{children:i.title}),e.jsx(s.Td,{children:i.type}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:i.updated_at}),e.jsxs(s.Td,{children:[e.jsx(t,{permission:"Banner Edit",children:e.jsx(n,{className:"btn btn-transparent",href:route("admin.banners.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Banner Delete",children:e.jsx("button",{onClick:r=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{$ as default};
========
import{j as e,Y as h,a as n,y as x}from"./app-3mR5dcr4.js";import{A as j}from"./AdminAuthenticated-BlwLajFx.js";import{P as t}from"./PermissionAllow-DG8o1wpc.js";import{S as d}from"./sweetalert2.all-BD-9aLUN.js";import{d as s}from"./index-Cg3Cr8Ne.js";/* empty css                                  */import"./Dropdown-ZEr-Y8i8.js";import"./AdminHeader-BW3uHsMP.js";import"./Dropdown-CdjKfX0W.js";import"./useMergedRefs-Cxa2RhTo.js";import"./useWindow-DWsydW6I.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DIiL02v3.js";import"./BootstrapModalManager-BNNgC5FG.js";import"./Fade-RO9t0QGZ.js";import"./index-CXQI1DE5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Ce627oE5.js";import"./ReactToastify-CLUolKJn.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";function $({bannersList:l,auth:a,success:c=null,error:o=null}){const m=i=>{d.fire({title:"Are you sure you want to delete this Banners?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&x.delete(route("admin.banners.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","Banners has been deleted.","success")}})})};return e.jsxs(j,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banners"}),success:c,error:o,children:[e.jsx(h,{title:"Banners List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Banners"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Banner Create",children:e.jsxs(n,{className:"btn btn-info text-end",href:route("admin.banners.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Banners Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Image"}),e.jsx(s.Th,{children:"Title"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:l.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:e.jsx("img",{src:i.picture_desktop||i.picture_mobile,className:"wd-100 rounded-5 ",alt:`${i.picture_desktop} Image`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx(s.Td,{children:i.title}),e.jsx(s.Td,{children:i.type}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:i.status}),e.jsx(s.Td,{children:i.updated_at}),e.jsxs(s.Td,{children:[e.jsx(t,{permission:"Banner Edit",children:e.jsx(n,{className:"btn btn-transparent",href:route("admin.banners.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Banner Delete",children:e.jsx("button",{onClick:r=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{$ as default};
>>>>>>>> c9be03ff60f4a7293e6db07ca2da3faa2a6d6e95:public/build/assets/Index-FvHqXW5v.js
