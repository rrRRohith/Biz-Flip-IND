import{j as e,Y as n,a as s,y as l}from"./app-BGtL1idN.js";import{A as d}from"./AdminAuthenticated-Ceq30wD9.js";import"./Dropdown-DDOkRdOL.js";import"./AdminHeader-Dli3e8ya.js";import"./PermissionAllow-BAFgtCD_.js";import"./Dropdown-BXLrSV09.js";import"./useMergedRefs-Dg_ayAfe.js";import"./SSRProvider-BlUcPW8O.js";import"./useWindow-DVdbgo_X.js";import"./NavbarContext-De51xqev.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BRq7hUFn.js";import"./BootstrapModalManager-CYKKLntR.js";import"./Fade-CLSnjR4s.js";import"./index-WDzcDGFf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-B1x0Gbjx.js";import"./ReactToastify-BO42l_97.js";function R({MenuList:t,auth:r,success:c=null,error:o=null}){const a=i=>{window.confirm("Are you sure you want to delete the menu?")&&l.delete(route("admin.navigation-menu.destroy",i.id))};return e.jsxs(d,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(n,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(s,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:" Create"})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsxs("td",{children:[e.jsx(s,{className:"btn btn-transparent p-2 px-3",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:m=>a(i),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})})]})}export{R as default};
