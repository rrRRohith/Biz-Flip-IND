import{r as c,j as e,Y as f,a as t,y as g,b as v}from"./app-6BcKqqXU.js";import{A as w}from"./AdminAuthenticated-Be7KpLny.js";import{P as a}from"./PermissionAllow-BmCNOlNQ.js";import{S as m}from"./sweetalert2.all-DoEQk7j9.js";import y from"./ViewTestimonial-xIjtB4p2.js";import{d as i}from"./index-7xk5LMF3.js";/* empty css                                  */import{M as C}from"./ModalPopup-C4Un0Zbc.js";import"./Dropdown-ComaojRe.js";import"./AdminHeader-ySwx5AX5.js";import"./Dropdown-DvwRhQBu.js";import"./useMergedRefs-BjZmlaaD.js";import"./SSRProvider-B1cDgeAM.js";import"./useWindow-DlwoiV10.js";import"./NavbarContext-BLw6Ox5R.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DxwM-BRW.js";import"./BootstrapModalManager-DdMdDjvO.js";import"./Fade-C9x2Ts3i.js";import"./index-B6tdujfY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DJBDi_LG.js";import"./ReactToastify-ByKSbOc-.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-BPLQ7h0L.js";function se({testimonialList:h,auth:x,success:p=null,error:j=null}){const[u,l]=c.useState(!1),[o,b]=c.useState(null),N=s=>{m.fire({title:"Are you sure you want to delete this testimonial?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&g.delete(route("admin.testimonial.destroy",s.id),{onSuccess:()=>{m.fire("Deleted!","testimonial has been deleted.","success")}})})},d=()=>l(!1),n=async s=>{try{const T=(await v.get(route("admin.testimonial.show",s.id))).data;b(T),l(!0)}catch(r){console.error("Error fetching data",r)}};return e.jsxs(w,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial"}),success:p,error:j,children:[e.jsx(f,{title:"Testimonial List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Testimonials"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(a,{permission:"Testimonials Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.testimonial.index"),children:"Testimonial"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(a,{permission:"Testimonial Create",children:e.jsx(t,{className:"btn btn-info text-end",href:route("admin.testimonial.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(a,{permission:"Testimonials Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"Company"}),e.jsx(i.Th,{children:"Designation"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:h.data.map(s=>e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.id}),e.jsxs(i.Td,{onClick:()=>n(s),children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx(i.Td,{onClick:()=>n(s),children:s.company_name}),e.jsx(i.Td,{onClick:()=>n(s),children:s.designation}),e.jsx(i.Td,{onClick:()=>n(s),children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs(i.Td,{children:[e.jsx(a,{permission:"Testimonial Show",children:e.jsx("span",{onClick:()=>n(s),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(a,{permission:"Testimonial Edit",children:e.jsx(t,{className:"btn btn-transparent p-2 px-3",href:route("admin.testimonial.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(a,{permission:"Testimonial Delete",children:e.jsx("button",{onClick:r=>N(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})}),e.jsx(C,{show:u,handleClose:d,size:"md",title:"Testimonial Details",children:o?e.jsx(y,{collection:o,handleClose:d}):"Failed fetching data..."})]})}export{se as default};
