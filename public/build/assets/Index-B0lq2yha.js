import{r as c,j as e,Y as f,a as r,b as v,y as C}from"./app-CF42hCsE.js";import{A as w}from"./AdminAuthenticated-CIbRmVkT.js";import{P as n}from"./PermissionAllow-CwPJfgx7.js";import{S as d}from"./sweetalert2.all-w0XwpNWM.js";import{d as s}from"./index-BX4HBrTw.js";/* empty css                                  */import{M as P}from"./ModalPopup-aOeXR20C.js";import T from"./PageView-BbL17zH_.js";import"./Dropdown-LqEQGtB_.js";import"./AdminHeader-DgrKXRia.js";import"./Dropdown-DlVYykpp.js";import"./useMergedRefs-BEG5kaxv.js";import"./SSRProvider-56d8ag7j.js";import"./useWindow-BS-kXI6r.js";import"./NavbarContext-CkQ-JjWY.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DjO58dJ4.js";import"./BootstrapModalManager-lpbX9bua.js";import"./Fade-M2d93fZx.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-xHwecDyf.js";import"./ToastNotification-DAE2Lmoo.js";import"./ReactToastify-Cc6Jyae5.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-DTmDbwJo.js";function se({pageList:m,auth:h,success:x=null,error:p=null}){const[j,a]=c.useState(!1),[o,u]=c.useState(null),l=()=>a(!1),b=async t=>{try{const g=(await v.get(route("admin.content-page.show",t.id))).data;u(g),a(!0)}catch(i){console.error("Error fetching data",i)}},N=t=>{d.fire({title:"Are you sure you want to delete this page?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(i=>{i.isConfirmed&&C.delete(route("admin.content-page.destroy",t.id),{onSuccess:()=>{d.fire("Deleted!","page has been deleted.","success")}})})};return e.jsxs(w,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page"}),success:x,error:p,children:[e.jsx(f,{title:"Content Page List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Content Page"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(r,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(n,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(r,{href:route("admin.content-page.index"),children:"Content Page"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Content Page Create",children:e.jsx(r,{className:"btn btn-info text-end",href:route("admin.content-page.create"),children:" Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Content Pages Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Title"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:m.data.map(t=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:t.id}),e.jsx(s.Td,{children:t.title}),e.jsx(s.Td,{children:t.status}),e.jsxs(s.Td,{children:[e.jsx("span",{onClick:()=>b(t),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(n,{permission:"Content Page Edit",children:e.jsx(r,{className:"btn btn-transparent p-2 px-3",href:route("admin.content-page.edit",t.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Content Page Delete",children:e.jsx("button",{onClick:i=>N(t),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t.id))})]})})})})})})})})]})}),e.jsx(P,{show:j,handleClose:l,size:"lg",title:"Page Show",children:o?e.jsx(T,{collection:o,handleClose:l}):"Failed fetching data..."})]})}export{se as default};
