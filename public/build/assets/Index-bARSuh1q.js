import{j as e,Y as n,a as s,y as d}from"./app-Pjbz9rYH.js";import{A as l}from"./AdminAuthenticated-wOrGQIjr.js";import"./Dropdown-CE-gu5nq.js";import"./AdminHeader-_apOtq20.js";import"./PermissionAllow-BcOslNQQ.js";import"./Dropdown-DEtUw4_i.js";import"./listen-CXcLQhiT.js";import"./useWindow-D1noL5Ib.js";import"./Anchor-CzasrsdE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DM2p7FV6.js";import"./BootstrapModalManager-CAgHfQD6.js";import"./Fade-DmKvq5CQ.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B4fOitUh.js";import"./ToastNotification-B-ms-Kd4.js";import"./ReactToastify-RpSR8sos.js";function E({MenuList:t,auth:a,success:c=null,error:o=null}){const r=i=>{window.confirm("Are you sure you want to delete the menu?")&&d.delete(route("admin.navigation-menu.destroy",i.id))};return e.jsxs(l,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(n,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(s,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsx("td",{children:window.formatDateTime(i.updated_at)}),e.jsxs("td",{children:[e.jsx(s,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:m=>r(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})})]})}export{E as default};
