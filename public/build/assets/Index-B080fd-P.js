import{j as e,Y as o,a as r,y as m}from"./app-DUUes-Qe.js";import{A as h}from"./AdminAuthenticated-Ds-dgqPm.js";import{P as i}from"./PermissionAllow-a6rJKmWW.js";import"./Dropdown-CFmbVfto.js";import"./AdminSidebar-qQiqrWh-.js";import"./listen-8kQ8eSJE.js";import"./useWindow-BvcGFOsK.js";import"./Anchor-MvCfxlSE.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BzWycOG-.js";import"./ToastNotification-Cn01RQ_-.js";function A({bannersList:d,auth:a,success:l=null,error:n=null}){const c=s=>{window.confirm("Are you sure you want to delete the Banners?")&&m.delete(route("admin.banners.destroy",s.id))};return e.jsxs(h,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banners"}),success:l,error:n,children:[e.jsx(o,{title:"Banners List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Banners"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Banner Create",children:e.jsxs(r,{className:"btn btn-info text-end",href:route("admin.banners.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(i,{permission:"Banners Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx("img",{src:s.picture_desktop||s.picture_mobile,className:"w-100 rounded-5 ",alt:`${s.picture_desktop} Image`,onError:t=>{t.target.onerror=null,t.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.title}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{permission:"Banner Edit",children:e.jsx(r,{className:"btn btn-transparent",href:route("admin.banners.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Banner Delete",children:e.jsx("button",{onClick:t=>c(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{A as default};
