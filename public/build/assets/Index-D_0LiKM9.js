import{r as d,j as e,Y as f,a as c,y as g,b as w}from"./app-aINRV8qI.js";import{A as v}from"./AdminAuthenticated-ClrMzHfV.js";import{P as t}from"./PermissionAllow-DmVCzBgw.js";import{S as m}from"./sweetalert2.all-DccQjVny.js";import C from"./ViewTestimonial-B6LUHHG6.js";import{d as i}from"./index-DiUWDYBn.js";/* empty css                                  */import{M as y}from"./ModalPopup-DwktC1Rn.js";import"./Dropdown-tHpxPYL4.js";import"./AdminHeader-ZAqlJY8j.js";import"./Dropdown-DxVU1EVf.js";import"./listen-Bj9dGC-x.js";import"./useWindow-BmX5Dja0.js";import"./Anchor-B3cpeJ7_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BqrtqZ2h.js";import"./BootstrapModalManager-BMHOV86L.js";import"./Fade-eTD1w2IO.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BqFK5Q3S.js";import"./ToastNotification-C1To0QtD.js";import"./ReactToastify-kKLAh2vx.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./Modal-D5Vd5MO_.js";function ee({testimonialList:h,auth:x,success:p=null,error:j=null}){const[u,n]=d.useState(!1),[l,b]=d.useState(null),T=s=>{m.fire({title:"Are you sure you want to delete this testimonial?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&g.delete(route("admin.testimonial.destroy",s.id),{onSuccess:()=>{m.fire("Deleted!","testimonial has been deleted.","success")}})})},o=()=>n(!1),a=async s=>{try{const N=(await w.get(route("admin.testimonial.show",s.id))).data;b(N),n(!0)}catch(r){console.error("Error fetching data",r)}};return e.jsxs(v,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial"}),success:p,error:j,children:[e.jsx(f,{title:"Testimonial List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Testimonials"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Testimonial Create",children:e.jsxs(c,{className:"btn btn-info text-end",href:route("admin.testimonial.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Testimonials Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"Company"}),e.jsx(i.Th,{children:"Designation"}),e.jsx(i.Th,{children:"Status"}),e.jsx(i.Th,{children:"Last Modified"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:h.data.map(s=>e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.id}),e.jsxs(i.Td,{onClick:()=>a(s),children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx(i.Td,{onClick:()=>a(s),children:s.company_name}),e.jsx(i.Td,{onClick:()=>a(s),children:s.designation}),e.jsx(i.Td,{onClick:()=>a(s),children:s.status}),e.jsx(i.Td,{onClick:()=>a(s),children:window.formatDateTime(s.updated_at)}),e.jsxs(i.Td,{children:[e.jsx(t,{permission:"Testimonial Show",children:e.jsx("span",{onClick:()=>a(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(t,{permission:"Testimonial Edit",children:e.jsx(c,{className:"btn btn-transparent",href:route("admin.testimonial.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Testimonial Delete",children:e.jsx("button",{onClick:r=>T(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})}),e.jsx(y,{show:u,handleClose:o,size:"md",title:"Testimonial Details",children:l?e.jsx(C,{collection:l,handleClose:o}):"Failed fetching data..."})]})}export{ee as default};