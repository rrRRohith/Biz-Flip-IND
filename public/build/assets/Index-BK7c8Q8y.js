<<<<<<<< HEAD:public/build/assets/Index-Ded18J3K.js
import{r as o,j as e,Y as N,a as l,y as b,b as v}from"./app-NOf8Ud2Y.js";import{A as g}from"./AdminAuthenticated-BvfjHjqe.js";import{S as d}from"./sweetalert2.all-DvqkVDG2.js";import"./index-Btq9algJ.js";/* empty css                                  */import{M as f}from"./ModalPopup-ByGA8Ggc.js";import w from"./ViewNavigationMenu-BkUWY8sc.js";import{P as s}from"./PermissionAllow-DuJ9Iv_Y.js";import"./Dropdown-BeYQcZ-k.js";import"./AdminHeader-CMTsUJ_A.js";import"./Dropdown-DvMLigQO.js";import"./listen-DAonDIvx.js";import"./useWindow-CHvFuoXy.js";import"./Anchor-Bk6fN3Km.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Blf2R5jN.js";import"./BootstrapModalManager-BrrHINVF.js";import"./Fade-BeIZaMCs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-0eJ9DX1U.js";import"./ToastNotification-beDGr7FA.js";import"./ReactToastify-Dj4qrOSt.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./Modal-Dza8gc_j.js";function $({MenuList:c,auth:m,success:M=null,error:y=null}){const[h,a]=o.useState(!1),[n,x]=o.useState(null),p=i=>{d.fire({title:"Are you sure you want to delete this menu?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&b.delete(route("admin.navigation-menu.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","menu has been deleted.","success")}})})},r=()=>a(!1),j=async i=>{try{const t=await v.get(route("admin.navigation-menu.show",i.id)),u=t.data;console.log(1,t.data),x(u),a(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(g,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(N,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(s,{permission:"Navigation Menu Create",children:e.jsxs(l,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(s,{permission:"Navigation Menu Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:c.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsx("td",{children:window.formatDateTime(i.updated_at)}),e.jsxs("td",{children:[e.jsx(s,{permission:"Navigation Menu Edit",children:e.jsx("span",{title:"Show",onClick:()=>j(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(s,{permission:"Navigation Menu Edit",children:e.jsx(l,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(s,{permission:"Navigation Menu Delete",children:e.jsx("button",{onClick:t=>p(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})}),e.jsx(f,{show:h,handleClose:r,size:"md",title:"Navigaion Menu Details",children:n?e.jsx(w,{collection:n,handleClose:r}):"Failed fetching data..."})]})}export{$ as default};
========
import{r as o,j as e,Y as N,a as l,y as b,b as v}from"./app-DvZEQs7q.js";import{A as g}from"./AdminAuthenticated-znZDMwen.js";import{S as d}from"./sweetalert2.all-BCTOxUKZ.js";import"./index-NlZy6jqC.js";/* empty css                                  */import{M as f}from"./ModalPopup-e-uiQhVi.js";import w from"./ViewNavigationMenu-JRsBuxFo.js";import{P as s}from"./PermissionAllow-DjiL2LeK.js";import"./Dropdown-BatJtg61.js";import"./AdminHeader-CrVBgSW2.js";import"./Dropdown-CuQS9aha.js";import"./listen-B73106F4.js";import"./useWindow-DCw2ZySZ.js";import"./Anchor-CDa32GWz.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DeYRaHSg.js";import"./BootstrapModalManager-DtfyV_Y4.js";import"./Fade-nrbR4rxK.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BHIby_lu.js";import"./ToastNotification-Yj8jc6-v.js";import"./ReactToastify-uiHPkRGu.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./Modal-DMucxtN7.js";function $({MenuList:c,auth:m,success:M=null,error:y=null}){const[h,a]=o.useState(!1),[n,x]=o.useState(null),p=i=>{d.fire({title:"Are you sure you want to delete this menu?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&b.delete(route("admin.navigation-menu.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","menu has been deleted.","success")}})})},r=()=>a(!1),j=async i=>{try{const t=await v.get(route("admin.navigation-menu.show",i.id)),u=t.data;console.log(1,t.data),x(u),a(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(g,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(N,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(s,{permission:"Navigation Menu Create",children:e.jsxs(l,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(s,{permission:"Navigation Menu Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:c.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsx("td",{children:window.formatDateTime(i.updated_at)}),e.jsxs("td",{children:[e.jsx(s,{permission:"Navigation Menu Edit",children:e.jsx("span",{title:"Show",onClick:()=>j(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(s,{permission:"Navigation Menu Edit",children:e.jsx(l,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(s,{permission:"Navigation Menu Delete",children:e.jsx("button",{onClick:t=>p(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})}),e.jsx(f,{show:h,handleClose:r,size:"md",title:"Navigaion Menu Details",children:n?e.jsx(w,{collection:n,handleClose:r}):"Failed fetching data..."})]})}export{$ as default};
>>>>>>>> 470c74d89ca7d7db853d4fce4809f9e3b5a4e1a7:public/build/assets/Index-BK7c8Q8y.js
