import{r as o,j as e,Y as N,a as l,y as b,b as v}from"./app-BgVwgUXI.js";import{A as g}from"./AdminAuthenticated-kucZX0xA.js";import{S as d}from"./sweetalert2.all-BylBEoZW.js";import"./index-OtcZuI8M.js";/* empty css                                  */import{M as f}from"./ModalPopup-DiCxwHJT.js";import w from"./ViewNavigationMenu-DF6GpMgz.js";import{P as s}from"./PermissionAllow-Bzpm65F1.js";import"./Dropdown-LcSwA3Wo.js";import"./AdminHeader-DVgZFNDe.js";import"./Dropdown-BCEmpKpX.js";import"./listen-BbQaJNIh.js";import"./useWindow-pKE9VyPq.js";import"./Anchor-C5jrjHc8.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-B6AAXhkx.js";import"./BootstrapModalManager-WvlF3dSK.js";import"./Fade-DhyUofpz.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DkYKEvYU.js";import"./ToastNotification-g0vHssf-.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-DM2IsgWP.js";import"./defineProperty-DpFVb8oi.js";import"./Modal-SUjuNXIp.js";function Z({MenuList:c,auth:m,success:M=null,error:y=null}){const[h,a]=o.useState(!1),[n,x]=o.useState(null),p=i=>{d.fire({title:"Are you sure you want to delete this menu?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&b.delete(route("admin.navigation-menu.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","menu has been deleted.","success")}})})},r=()=>a(!1),j=async i=>{try{const t=await v.get(route("admin.navigation-menu.show",i.id)),u=t.data;console.log(1,t.data),x(u),a(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(g,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(N,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(s,{permission:"Navigation Menu Create",children:e.jsxs(l,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(s,{permission:"Navigation Menu Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:c.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsx("td",{children:window.formatDateTime(i.updated_at)}),e.jsxs("td",{children:[e.jsx(s,{permission:"Navigation Menu Edit",children:e.jsx("span",{title:"Show",onClick:()=>j(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(s,{permission:"Navigation Menu Edit",children:e.jsx(l,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(s,{permission:"Navigation Menu Delete",children:e.jsx("button",{onClick:t=>p(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})}),e.jsx(f,{show:h,handleClose:r,size:"md",title:"Navigaion Menu Details",children:n?e.jsx(w,{collection:n,handleClose:r}):"Failed fetching data..."})]})}export{Z as default};
