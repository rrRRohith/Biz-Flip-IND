import{j as e,Y as n,a as s,y as l}from"./app-DLtj40sa.js";import{A as d}from"./AdminAuthenticated-CPWSlPiI.js";import"./Dropdown-B13ECKyy.js";import"./AdminHeader-BMhdvd2R.js";import"./PermissionAllow-BllmSOcS.js";import"./Dropdown-zhn2kAqJ.js";import"./useMergedRefs-D7YIcOyO.js";import"./SSRProvider-D2QLqlEp.js";import"./useWindow-DKpabGkG.js";import"./NavbarContext-BtkgbX-t.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Ce3sjPK4.js";import"./BootstrapModalManager-BvIDlEH-.js";import"./Fade-CkZeSPZQ.js";import"./index-Bghs3Rzg.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Bof_1I4Z.js";import"./ReactToastify-BdU6FSfD.js";function R({MenuList:t,auth:a,success:c=null,error:o=null}){const r=i=>{window.confirm("Are you sure you want to delete the menu?")&&l.delete(route("admin.navigation-menu.destroy",i.id))};return e.jsxs(d,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(n,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(s,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:" Create"})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsxs("td",{className:"text-end",children:[e.jsx(s,{className:"btn btn-transparent p-2 px-3",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:m=>r(i),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})})]})}export{R as default};
