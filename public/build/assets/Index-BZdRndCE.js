import{r as o,j as e,Y as N,a as l,y as b,b as v}from"./app-j4GiECjb.js";import{A as g}from"./AdminAuthenticated-CSdqv3Vv.js";import{S as c}from"./sweetalert2.all-D8XyPq_-.js";import"./index-Yz-goRCC.js";/* empty css                                  */import{M as f}from"./ModalPopup-CqT-L3sG.js";import w from"./ViewNavigationMenu-xhRYNwxG.js";import{P as t}from"./PermissionAllow-BHKWex86.js";import"./Dropdown-CQ7Xqspz.js";import"./AdminHeader-C5aMr7ei.js";import"./Dropdown-Dry6_Qv-.js";import"./useMergedRefs-C8xZ3lA7.js";import"./useWindow-jY8UbfSv.js";import"./NavbarContext-BVIdfiOR.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Cmox0MvI.js";import"./BootstrapModalManager-BHyKOkYi.js";import"./Fade-Vkq8pMlg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-sp-3CwwU.js";import"./ToastNotification-Fl8NTfjx.js";import"./ReactToastify-CzcL8KNc.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./Modal-DYL9TDkv.js";function $({MenuList:d,auth:m,success:M=null,error:y=null}){const[h,a]=o.useState(!1),[n,x]=o.useState(null),p=i=>{c.fire({title:"Are you sure you want to delete this menu?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&b.delete(route("admin.navigation-menu.destroy",i.id),{onSuccess:()=>{c.fire("Deleted!","menu has been deleted.","success")}})})},r=()=>a(!1),j=async i=>{try{const s=await v.get(route("admin.navigation-menu.show",i.id)),u=s.data;console.log(1,s.data),x(u),a(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(g,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(N,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Navigation Menu Create",children:e.jsxs(l,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Navigation Menu Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsxs("td",{children:[e.jsx(t,{permission:"Navigation Menu Edit",children:e.jsx("span",{title:"Show",onClick:()=>j(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(t,{permission:"Navigation Menu Edit",children:e.jsx(l,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Navigation Menu Delete",children:e.jsx("button",{onClick:s=>p(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})}),e.jsx(f,{show:h,handleClose:r,size:"md",title:"Navigaion Menu Details",children:n?e.jsx(w,{collection:n,handleClose:r}):"Failed fetching data..."})]})}export{$ as default};
