import{j as e,Y as n,a as t,y as c}from"./app-Bt0m9nwf.js";import{A as h}from"./AdminAuthenticated-DMuTscZI.js";import"./Dropdown--3mGBi1U.js";import"./AdminSidebar-BMjG_Soo.js";function b({labelList:a,auth:i,success:r=null,error:d=null}){const l=s=>{window.confirm("Are you sure you want to delete the Feature label?")&&c.delete(route("admin.feature-label.destroy",s.id))};return e.jsxs(h,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label"}),success:r,error:d,children:[e.jsx(n,{title:"Feature Label List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Feature Label"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(t,{className:"btn btn-danger btn-sm text-end",href:route("admin.feature-label.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Color"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsx("i",{className:"bi bi-dot display-1",style:{color:s.color}})}),e.jsx("td",{children:s.priority}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(t,{className:"btn btn-transparent",href:route("admin.feature-label.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:x=>l(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})})]})}export{b as default};