import{j as e,Y as h,a as n,y as x}from"./app-CrIMPTAM.js";import{A as j}from"./AdminAuthenticated-CICSNNxp.js";import{P as t}from"./PermissionAllow-D4OnqpEt.js";import{S as l}from"./sweetalert2.all-BIQR7sDD.js";import{d as s}from"./index-DgLG8iIW.js";/* empty css                                  */import"./Dropdown-DWna7aM-.js";import"./AdminHeader-DcWke_fp.js";import"./Dropdown-CPvOAh2o.js";import"./useMergedRefs-D5grdPUn.js";import"./useWindow-CTg7VMSB.js";import"./NavbarContext-B2p1Hk4_.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B_5ZoEoG.js";import"./BootstrapModalManager-BCha_iXF.js";import"./Fade-CTsTf2WB.js";import"./index-C-fSIBHE.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BalU_MaD.js";import"./ReactToastify-ByO5j3Yb.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function R({bannersList:a,auth:d,success:o=null,error:c=null}){const m=i=>{l.fire({title:"Are you sure you want to delete this Banners?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&x.delete(route("admin.banners.destroy",i.id),{onSuccess:()=>{l.fire("Deleted!","Banners has been deleted.","success")}})})};return e.jsxs(j,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banners"}),success:o,error:c,children:[e.jsx(h,{title:"Banners List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Banners"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(t,{permission:"Banner Create",children:e.jsxs(n,{className:"btn btn-info text-end",href:route("admin.banners.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(t,{permission:"Banners Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Image"}),e.jsx(s.Th,{children:"Title"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Position"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:a.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:e.jsx("img",{src:i.picture_desktop||i.picture_mobile,className:"wd-100 rounded-5 ",alt:`${i.picture_desktop} Image`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx(s.Td,{children:i.title}),e.jsx(s.Td,{children:i.type}),e.jsx(s.Td,{children:i.position}),e.jsx(s.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(i.status)}})}),e.jsxs(s.Td,{children:[e.jsx(t,{permission:"Banner Edit",children:e.jsx(n,{className:"btn btn-transparent",href:route("admin.banners.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(t,{permission:"Banner Delete",children:e.jsx("button",{onClick:r=>m(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},i.id))})]})})})})})})})})]})})]})}export{R as default};
