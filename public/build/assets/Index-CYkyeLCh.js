import{j as e,Y as n,a as t,y as c}from"./app-BzHzbjUi.js";import{A as h}from"./AdminAuthenticated-BoOKwFnD.js";import"./Dropdown-B8zNYMVj.js";import"./AdminSidebar-Cj8lN2XK.js";import"./useMergedRefs-p-XhYV3y.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BiAyyWDW.js";import"./PermissionAllow-r-u98lAn.js";import"./ToastNotification-CNh4IScK.js";function g({subscribersList:i,auth:d,success:a=null,error:l=null}){const r=s=>{window.confirm("Are you sure you want to delete the subscriber?")&&c.delete(route("admin.subscribers.destroy",s.id))};return e.jsxs(h,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscriber"}),success:a,error:l,children:[e.jsx(n,{title:"Subscribers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Subscribers List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(t,{className:"btn btn-danger btn-sm text-end",href:route("admin.subscribers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Type of Needed"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.email_id}),e.jsx("td",{children:s.type_of_needed}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(t,{className:"btn btn-transparent",href:route("admin.subscribers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:x=>r(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})})]})}export{g as default};
