import{j as e,Y as d,a as t,c as m,y as o}from"./app-BOqhPDGM.js";import{A as x}from"./AdminAuthenticated-Cv__0uVe.js";import"./PermissionAllow-3rOh3DOP.js";import"./Dropdown-D9RGquUm.js";import"./AdminHeader-DiiHiN-d.js";import"./Dropdown-CBiJhb6M.js";import"./useMergedRefs-AexUiP1a.js";import"./SSRProvider-a0eTEbKP.js";import"./useWindow-C5_dBDD0.js";import"./NavbarContext-Vb86u3WE.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-C9pIBBx0.js";import"./BootstrapModalManager-C1h5qeGy.js";import"./Fade-_-knUhDY.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-3YgOwXEj.js";import"./ToastNotification-TdgfoM4Z.js";import"./ReactToastify-CuAb0PAp.js";function F({sellers:r,auth:l,success:a=null,error:n=null}){const c=s=>{window.confirm("Are you sure you want to delete the User?")&&o.delete(route("admin.sellers.destroy",s.user_id))};return e.jsxs(x,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Sellers  Pending Approvel"}),success:a,error:n,children:[e.jsx(d,{title:"Sellers  Pending Approvel"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers  Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:"Create"})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Company Name"}),e.jsx("th",{children:"Designation"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.data.map(s=>e.jsxs(m.Fragment,{children:[console.log(s),e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx("img",{src:s.picture,className:"w-30 rounded-circle ",alt:`${s.picture} icon`,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"}})}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.company_name}),e.jsx("td",{children:s.designation}),e.jsx("td",{children:s.status}),e.jsxs("td",{className:"text-end",children:[e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.sellers.edit",s.user_id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:i=>c(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id)]},s.id))})]})})})})})})})]})})]})}export{F as default};