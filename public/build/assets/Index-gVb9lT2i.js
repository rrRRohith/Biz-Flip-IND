import{j as e,Y as m,a as i,y as h}from"./app-BGtL1idN.js";import{A as x}from"./AdminAuthenticated-Ceq30wD9.js";import{S as n}from"./sweetalert2.all-TjCzHEtG.js";import{P as r}from"./PermissionAllow-BAFgtCD_.js";import"./Dropdown-DDOkRdOL.js";import"./AdminHeader-Dli3e8ya.js";import"./Dropdown-BXLrSV09.js";import"./useMergedRefs-Dg_ayAfe.js";import"./SSRProvider-BlUcPW8O.js";import"./useWindow-DVdbgo_X.js";import"./NavbarContext-De51xqev.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BRq7hUFn.js";import"./BootstrapModalManager-CYKKLntR.js";import"./Fade-CLSnjR4s.js";import"./index-WDzcDGFf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-B1x0Gbjx.js";import"./ReactToastify-BO42l_97.js";function k({subscribersList:a,auth:l,success:d=null,error:c=null}){const o=s=>{n.fire({title:"Are you sure you want to delete this subscriber?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&h.delete(route("admin.subscribers.destroy",s.id),{onSuccess:()=>{n.fire("Deleted!","Subscriber has been deleted.","success")}})})};return e.jsxs(x,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscriber"}),success:d,error:c,children:[e.jsx(m,{title:"Subscribers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Subscribers List"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(i,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(i,{href:route("admin.subscribers.index"),children:"News Subscriber"})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Subscriber Create",children:e.jsx(i,{className:"btn btn-info text-end",href:route("admin.subscribers.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Subscribers Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Type of Needed"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.email_id}),e.jsx("td",{children:s.type_of_needed}),e.jsx("td",{children:s.status_text}),e.jsxs("td",{children:[e.jsx(r,{permission:"Subscriber Edit",children:e.jsx(i,{className:"btn btn-transparent p-2 px-3",href:route("admin.subscribers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Subscriber Delete",children:e.jsx("button",{onClick:t=>o(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{k as default};
