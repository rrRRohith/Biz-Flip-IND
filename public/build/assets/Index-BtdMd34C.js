import{j as e,Y as c,a,y as m}from"./app-BP1ASY9m.js";import{A as h}from"./AdminAuthenticated-C34ejvVU.js";import{d as i}from"./index-BXwcN5c5.js";import{P as t}from"./PermissionAllow-DDRUKtYh.js";import{S as l}from"./sweetalert2.all-BSFnksV-.js";import"./Dropdown-ErKsyKJB.js";import"./AdminHeader-DclFL37X.js";import"./Dropdown-CuM2Misa.js";import"./useMergedRefs-C7i9xQs_.js";import"./useWindow-CjeW6bh8.js";import"./NavbarContext-Ci8xUASw.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B-nPVonw.js";import"./BootstrapModalManager-CtfNojTw.js";import"./Fade-DClmjdQ0.js";import"./index-BggJkT38.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-paLV-kgH.js";import"./ReactToastify-DsLGQMwT.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function q({countryList:n,auth:d,success:x=null,error:j=null}){console.log(n);const o=s=>{l.fire({title:"Are you sure you want to delete this country?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&m.delete(route("admin.country.destroy",s.id),{onSuccess:()=>{l.fire("Deleted!","Country has been deleted.","success")}})})};return e.jsxs(h,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country"}),children:[e.jsx(c,{title:"Country List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Country"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Country Create",children:e.jsxs(a,{className:"btn btn-info text-end",href:route("admin.country.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Countries Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"Code"}),e.jsx(i.Th,{children:"Position"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:n.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx("td",{children:s.code}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsxs("td",{children:[e.jsx(t,{permission:"Country Edit",children:e.jsx(a,{className:"btn btn-transparent",href:route("admin.country.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Country Delete",children:e.jsx("button",{onClick:r=>o(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{q as default};
