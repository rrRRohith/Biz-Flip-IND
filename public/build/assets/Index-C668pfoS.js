import{j as e,Y as d,a as i,y as c}from"./app-DOZcIWVh.js";import{A as o}from"./AdminAuthenticated-CBQJ-3I7.js";import"./Dropdown-BYdKb6tQ.js";import"./AdminSidebar-BGLDizeY.js";import"./listen-BbKSz9Gy.js";import"./useWindow-DhqI_zMA.js";import"./Anchor-DRVRSgLP.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BgJ3aozw.js";import"./PermissionAllow-DPIa7gDb.js";import"./ToastNotification-DWZrIRJL.js";function w({roleList:t,auth:l,success:a=null,error:n=null}){const r=s=>{window.confirm("Are you sure you want to delete the role?")&&c.delete(route("admin.role-responsibilities.destroy",s.id))};return e.jsxs(o,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities"}),success:a,error:n,children:[e.jsx(d,{title:"Role & Responsibilities"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Role & Responsibilities"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(i,{className:"btn btn-danger btn-sm text-end",href:route("admin.role-responsibilities.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"No of Permissions"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:Object.keys(s.permissions).length}),e.jsxs("td",{children:[e.jsx(i,{className:"btn btn-transparent",href:route("admin.role-responsibilities.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),s.name!=="admin"&&s.name!=="seller"&&e.jsx("button",{onClick:m=>r(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})})]})}export{w as default};