import{r as l,j as e,Y as N,a,y as b,b as v}from"./app-itwJjUX3.js";import{A as g}from"./AdminAuthenticated-C_PU8b7Z.js";import{S as c}from"./sweetalert2.all-DUrIEgmt.js";import"./index-CTh7GNLK.js";/* empty css                                  */import{M as f}from"./ModalPopup-BSnPNuVs.js";import w from"./ViewNavigationMenu-BiAAXC-5.js";import{P as t}from"./PermissionAllow-D0TY0oyo.js";import"./Dropdown-gO2VTgWX.js";import"./AdminHeader-DPrWPOx-.js";import"./Dropdown-DxKzW6ad.js";import"./useMergedRefs-avGIJ7As.js";import"./SSRProvider-BTMhcs7e.js";import"./useWindow-YycjxZAG.js";import"./NavbarContext-D8L38UUl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-l5WsDjp0.js";import"./BootstrapModalManager-Bz6xU9B3.js";import"./Fade-DEX4mjoG.js";import"./index-CpWed4k1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BeZVjDUA.js";import"./ReactToastify-LOs0-z25.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-JZ7CR4em.js";function ee({MenuList:d,auth:m,success:M=null,error:y=null}){const[h,n]=l.useState(!1),[r,x]=l.useState(null),j=i=>{c.fire({title:"Are you sure you want to delete this menu?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&b.delete(route("admin.navigation-menu.destroy",i.id),{onSuccess:()=>{c.fire("Deleted!","menu has been deleted.","success")}})})},o=()=>n(!1),u=async i=>{try{const s=await v.get(route("admin.navigation-menu.show",i.id)),p=s.data;console.log(1,s.data),x(p),n(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(g,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(N,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Navigation Menu List"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(a,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(a,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Navigation Menu Create",children:e.jsxs(a,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Navigation Menu Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsxs("td",{children:[e.jsx(t,{permission:"Navigation Menu Edit",children:e.jsx("span",{title:"Show",onClick:()=>u(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(t,{permission:"Navigation Menu Edit",children:e.jsx(a,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Navigation Menu Delete",children:e.jsx("button",{onClick:s=>j(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})}),e.jsx(f,{show:h,handleClose:o,size:"md",title:"Navigaion Menu Details",children:r?e.jsx(w,{collection:r,handleClose:o}):"Failed fetching data..."})]})}export{ee as default};
