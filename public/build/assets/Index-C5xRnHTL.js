import{r as d,j as e,Y as f,a as c,y as g,b as w}from"./app-j4GiECjb.js";import{A as v}from"./AdminAuthenticated-CSdqv3Vv.js";import{P as n}from"./PermissionAllow-BHKWex86.js";import{S as m}from"./sweetalert2.all-D8XyPq_-.js";import y from"./ViewTestimonial-95OseITT.js";import{d as i}from"./index-Yz-goRCC.js";/* empty css                                  */import{M as C}from"./ModalPopup-CqT-L3sG.js";import"./Dropdown-CQ7Xqspz.js";import"./AdminHeader-C5aMr7ei.js";import"./Dropdown-Dry6_Qv-.js";import"./useMergedRefs-C8xZ3lA7.js";import"./useWindow-jY8UbfSv.js";import"./NavbarContext-BVIdfiOR.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Cmox0MvI.js";import"./BootstrapModalManager-BHyKOkYi.js";import"./Fade-Vkq8pMlg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-sp-3CwwU.js";import"./ToastNotification-Fl8NTfjx.js";import"./ReactToastify-CzcL8KNc.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./Modal-DYL9TDkv.js";function ee({testimonialList:h,auth:x,success:p=null,error:j=null}){const[u,a]=d.useState(!1),[l,b]=d.useState(null),N=s=>{m.fire({title:"Are you sure you want to delete this testimonial?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&g.delete(route("admin.testimonial.destroy",s.id),{onSuccess:()=>{m.fire("Deleted!","testimonial has been deleted.","success")}})})},o=()=>a(!1),t=async s=>{try{const T=(await w.get(route("admin.testimonial.show",s.id))).data;b(T),a(!0)}catch(r){console.error("Error fetching data",r)}};return e.jsxs(v,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial"}),success:p,error:j,children:[e.jsx(f,{title:"Testimonial List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Testimonials"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Testimonial Create",children:e.jsxs(c,{className:"btn btn-info text-end",href:route("admin.testimonial.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Testimonials Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"Company"}),e.jsx(i.Th,{children:"Designation"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:h.data.map(s=>e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.id}),e.jsxs(i.Td,{onClick:()=>t(s),children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx(i.Td,{onClick:()=>t(s),children:s.company_name}),e.jsx(i.Td,{onClick:()=>t(s),children:s.designation}),e.jsx(i.Td,{onClick:()=>t(s),children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs(i.Td,{children:[e.jsx(n,{permission:"Testimonial Show",children:e.jsx("span",{onClick:()=>t(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(n,{permission:"Testimonial Edit",children:e.jsx(c,{className:"btn btn-transparent",href:route("admin.testimonial.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Testimonial Delete",children:e.jsx("button",{onClick:r=>N(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})}),e.jsx(C,{show:u,handleClose:o,size:"md",title:"Testimonial Details",children:l?e.jsx(y,{collection:l,handleClose:o}):"Failed fetching data..."})]})}export{ee as default};
