import{r as o,j as e,Y as N,a as l,y as b,b as v}from"./app-DqBPa-SR.js";import{A as g}from"./AdminAuthenticated-BHa003es.js";import{S as c}from"./sweetalert2.all-9YtvYniI.js";import"./index-V_VZ2oHH.js";/* empty css                                  */import{M as f}from"./ModalPopup-edcDI-dF.js";import w from"./ViewNavigationMenu-BcC17tAr.js";import{P as t}from"./PermissionAllow-_FOCjMW7.js";import"./Dropdown-VKa3EENY.js";import"./AdminHeader-BV3y8vHJ.js";import"./Dropdown-_Bsp9ZY-.js";import"./useMergedRefs-CDRUL058.js";import"./useWindow-D7v8P1xz.js";import"./NavbarContext-e7GZQeMN.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DVOovl5J.js";import"./BootstrapModalManager-BVazxGBD.js";import"./Fade-BDlFZNxo.js";import"./index-BfUHJ4WG.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-RRvC_ehg.js";import"./ReactToastify-D4Pl-_dY.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-CxxBVebG.js";function $({MenuList:d,auth:m,success:M=null,error:y=null}){const[h,a]=o.useState(!1),[n,x]=o.useState(null),p=i=>{c.fire({title:"Are you sure you want to delete this menu?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&b.delete(route("admin.navigation-menu.destroy",i.id),{onSuccess:()=>{c.fire("Deleted!","menu has been deleted.","success")}})})},r=()=>a(!1),j=async i=>{try{const s=await v.get(route("admin.navigation-menu.show",i.id)),u=s.data;console.log(1,s.data),x(u),a(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(g,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu List"}),children:[e.jsx(N,{title:"Navigation Menu List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Navigation Menu List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Navigation Menu Create",children:e.jsxs(l,{className:"btn btn-info text-end",href:route("admin.navigation-menu.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Navigation Menu Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.data.map(i=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.title}),e.jsxs("td",{children:[e.jsx(t,{permission:"Navigation Menu Edit",children:e.jsx("span",{title:"Show",onClick:()=>j(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(t,{permission:"Navigation Menu Edit",children:e.jsx(l,{className:"btn btn-transparent",href:route("admin.navigation-menu.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Navigation Menu Delete",children:e.jsx("button",{onClick:s=>p(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})}),e.jsx(f,{show:h,handleClose:r,size:"md",title:"Navigaion Menu Details",children:n?e.jsx(w,{collection:n,handleClose:r}):"Failed fetching data..."})]})}export{$ as default};
