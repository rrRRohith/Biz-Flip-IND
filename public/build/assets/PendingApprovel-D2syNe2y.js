import{j as e,Y as c,a as t,R as m,y as o}from"./app-CdcX4MyJ.js";import{A as h}from"./AdminAuthenticated-BGdADRwR.js";import"./PermissionAllow-caSI3ojy.js";import"./Dropdown-CuiSu6LE.js";import"./AdminHeader-CCOtrFGI.js";import"./Dropdown-CR2RuJ8A.js";import"./useMergedRefs-B486IWSx.js";import"./useWindow-B4Mn1lKL.js";import"./NavbarContext-B3zFm8h7.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BJNnkTVo.js";import"./BootstrapModalManager-xvHZEziN.js";import"./Fade-AP6juNIG.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DsrmHSXP.js";import"./ToastNotification-BtSOpUeR.js";import"./ReactToastify-DwzKbxFo.js";function k({sellers:r,auth:l,success:a=null,error:n=null}){const d=s=>{window.confirm("Are you sure you want to delete the Seller?")&&o.delete(route("admin.sellers.destroy",s.user_id))};return e.jsxs(h,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Sellers  Pending Approvel"}),success:a,error:n,children:[e.jsx(c,{title:"Sellers  Pending Approvel"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers  Pending Approvel"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(t,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Company Name"}),e.jsx("th",{children:"Designation"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.data.map(s=>e.jsxs(m.Fragment,{children:[console.log(s),e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx("img",{src:s.picture,className:"w-30 rounded-circle ",alt:`${s.picture} icon`,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"}})}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.company_name}),e.jsx("td",{children:s.designation}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(t,{className:"btn btn-transparent",href:route("admin.sellers.edit",s.user_id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:i=>d(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id)]},s.id))})]})})})})})})})]})})]})}export{k as default};
