import{r as o,j as e,Y as f,a as r,y as v,b as g}from"./app-BEKZL5x1.js";import{A as w}from"./AdminAuthenticated-C84VsSbs.js";import{S as c}from"./sweetalert2.all-Ci_HoRhW.js";import{d as i}from"./index-Hj8YHP8Z.js";/* empty css                                  */import{M as T}from"./ModalPopup-BDolxB8Y.js";import y from"./ViewRole-CYvRGUdI.js";import"./PermissionAllow-BbQxP1Mu.js";import"./Dropdown-DGn_KBEm.js";import"./AdminHeader-D58O1fOc.js";import"./Dropdown-B6WWaJh1.js";import"./useMergedRefs-ClJ-oN-K.js";import"./SSRProvider-3O-wO1Tx.js";import"./useWindow-Q1YcEkHp.js";import"./NavbarContext-BMTg8RK9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-RfT9s9Qk.js";import"./BootstrapModalManager-DKhs2w8P.js";import"./Fade-BYEExXAF.js";import"./index-mzBByKJf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-O0cBrXff.js";import"./ReactToastify-BH1m3FPZ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-BzMs5zT1.js";function ee({roleList:d,auth:m,success:h=null,error:x=null}){const[p,a]=o.useState(!1),[l,j]=o.useState(null),b=s=>{c.fire({title:"Are you sure you want to delete this role?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&v.delete(route("admin.role-responsibilities.destroy",s.id),{onSuccess:()=>{c.fire("Deleted!","role has been deleted.","success")}})})},n=()=>a(!1),u=async s=>{try{const N=(await g.get(route("admin.role-responsibilities.show",s.id))).data;j(N),a(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(w,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities"}),success:h,error:x,children:[e.jsx(f,{title:"Role & Responsibilities"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsxs("div",{children:[e.jsx("h4",{className:"page-title",children:"Role & Responsibilities"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(r,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:e.jsx(r,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})})]})})})]})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(r,{className:"btn btn-info text-end",href:route("admin.role-responsibilities.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"No of Permissions"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:d.data.map(s=>e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.id}),e.jsx(i.Td,{children:s.name}),e.jsx(i.Td,{children:Object.keys(s.permissions).length}),e.jsxs(i.Td,{children:[e.jsx("span",{title:"Show",onClick:()=>u(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(r,{title:"Edit",className:"btn btn-transparent",href:route("admin.role-responsibilities.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),s.name!=="admin"&&s.name!=="seller"&&s.name!=="customer"&&e.jsx("button",{title:"Delete",onClick:t=>b(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})}),e.jsx(T,{show:p,handleClose:n,size:"lg",title:"Role Details",children:l?e.jsx(y,{collection:l,handleClose:n}):"Failed fetching data..."})]})}export{ee as default};
