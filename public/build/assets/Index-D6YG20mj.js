import{j as e,Y as n,a as s,y as l}from"./app-CrIMPTAM.js";import{A as d}from"./AdminAuthenticated-CICSNNxp.js";import"./Dropdown-DWna7aM-.js";import"./AdminHeader-DcWke_fp.js";import"./PermissionAllow-D4OnqpEt.js";import"./Dropdown-CPvOAh2o.js";import"./useMergedRefs-D5grdPUn.js";import"./useWindow-CTg7VMSB.js";import"./NavbarContext-B2p1Hk4_.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B_5ZoEoG.js";import"./BootstrapModalManager-BCha_iXF.js";import"./Fade-CTsTf2WB.js";import"./index-C-fSIBHE.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BalU_MaD.js";import"./ReactToastify-ByO5j3Yb.js";function P({MenuList:t,auth:a,success:c=null,error:o=null}){const r=i=>{window.confirm("Are you sure you want to delete the menu?")&&l.delete(route("admin.navigation-menu.destroy",i.id))};return e.jsxs(d,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(n,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(s,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsxs("td",{children:[e.jsx(s,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:m=>r(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})})]})}export{P as default};
