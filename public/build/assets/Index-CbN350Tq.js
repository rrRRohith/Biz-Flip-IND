import{j as e,Y as h,a as t,y as x}from"./app-m6jwzREc.js";import{A as j}from"./AdminAuthenticated-D-c0Ehnf.js";import{P as n}from"./PermissionAllow-DFKxE1No.js";import{S as a}from"./sweetalert2.all-f_CFJi6U.js";import{d as s}from"./index-DP8Idtr2.js";/* empty css                                  */import"./Dropdown-De-CftB8.js";import"./AdminHeader-Df6Pg7Zr.js";import"./Dropdown-DZe-wPe9.js";import"./useMergedRefs-Txjd5-DZ.js";import"./SSRProvider-D3QKeGVy.js";import"./useWindow-DjWiBSqy.js";import"./NavbarContext-DmJk-5Ir.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DoH87g0J.js";import"./BootstrapModalManager-C4GqAccA.js";import"./Fade-CGtw0FQ8.js";import"./index-vBzHIoDB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DDdeHOU8.js";import"./ReactToastify-BUp-Yjnc.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function $({bannersList:d,auth:l,success:c=null,error:o=null}){const m=i=>{a.fire({title:"Are you sure you want to delete this Banners?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&x.delete(route("admin.banners.destroy",i.id),{onSuccess:()=>{a.fire("Deleted!","Banners has been deleted.","success")}})})};return e.jsxs(j,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banners"}),success:c,error:o,children:[e.jsx(h,{title:"Banners List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Banners"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(n,{permission:"Banners Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.banners.index"),children:"Banners"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Banner Create",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.banners.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Banners Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Image"}),e.jsx(s.Th,{children:"Title"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:d.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:e.jsx("img",{src:i.picture_desktop||i.picture_mobile,className:"wd-100 rounded-5 ",alt:`${i.picture_desktop} Image`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx(s.Td,{children:i.title}),e.jsx(s.Td,{children:i.type}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(n,{permission:"Banner Edit",children:e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.banners.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Banner Delete",children:e.jsx("button",{onClick:r=>m(i),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{$ as default};
