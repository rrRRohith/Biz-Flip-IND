import{j as e,Y as l,a as t,y as c}from"./app-CjewbWUq.js";import{A as o}from"./AdminAuthenticated-B6RdVAZp.js";import{P as i}from"./PermissionAllow-CRcCMSN3.js";import"./Dropdown-CJ6RRfHE.js";import"./AdminSidebar-BByzt6BP.js";import"./listen-wp56gr8a.js";import"./useWindow-Cm-iF9fr.js";import"./Anchor-C1shSEEN.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DXXuAbUi.js";import"./ToastNotification-Chxa-umb.js";function y({categoryList:a,auth:n}){const d=s=>{window.confirm("Are you sure you want to delete the category?")&&c.delete(route("admin.category.destroy",s.id))};return e.jsxs(o,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Category"}),children:[e.jsx(l,{title:"Category List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Categories"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Category Create",children:e.jsxs(t,{className:"btn btn-danger btn-sm text-end",href:route("admin.category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(i,{permission:"Categories Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Icon"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx("img",{src:s.icon,className:"w-100 rounded-5 ",alt:`${s.icon} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{permission:"Category Edit",children:e.jsx(t,{className:"btn btn-transparent",href:route("admin.category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Category Delete",children:e.jsx("button",{onClick:r=>d(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{y as default};
