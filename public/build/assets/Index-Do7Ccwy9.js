import{r as a,j as e,Y as T,a as n,b as w,y as C}from"./app-CBDT_ghA.js";import{A as P}from"./AdminAuthenticated-CuxfdgPq.js";import{P as r}from"./PermissionAllow-BnAFY5Lb.js";import{S as d}from"./sweetalert2.all-BYnTh2Xd.js";import{d as t}from"./index-B-JOdMxb.js";/* empty css                                  */import{M as y}from"./ModalPopup-BadtsXPZ.js";import S from"./PageView-DLJFBQ70.js";import"./Dropdown-BKwAdTxP.js";import"./AdminHeader-DR6UZ_q8.js";import"./Dropdown-Bzq7v7Qy.js";import"./useMergedRefs-Bh24mJWa.js";import"./SSRProvider-tExD331u.js";import"./useWindow-2eudVQBH.js";import"./NavbarContext-T7kBOGSR.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Biui5D7Z.js";import"./BootstrapModalManager-DTUBZMch.js";import"./Fade-D5UtGihV.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DSGOK0hz.js";import"./ToastNotification-CiaamNRU.js";import"./ReactToastify-DWpULJSB.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-DY1fmDYC.js";function ie({pageList:m,auth:h,success:x=null,error:j=null}){const[p,l]=a.useState(!1),[u,b]=a.useState(""),[o,N]=a.useState(null),c=()=>l(!1),g=async s=>{try{const v=(await w.get(route("admin.content-page.show",s.id))).data;N(v),l(!0),b(s.title)}catch(i){console.error("Error fetching data",i)}},f=s=>{d.fire({title:"Are you sure you want to delete this page?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(i=>{i.isConfirmed&&C.delete(route("admin.content-page.destroy",s.id),{onSuccess:()=>{d.fire("Deleted!","page has been deleted.","success")}})})};return e.jsxs(P,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page"}),success:x,error:j,children:[e.jsx(T,{title:"Content Page List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsx("h4",{className:"page-title",children:"Pages"}),e.jsx("div",{className:"align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(n,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(r,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(n,{href:route("admin.content-page.index"),children:"Pages"})})})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(r,{permission:"Content Page Create",children:e.jsx(n,{className:"btn btn-info text-end",href:route("admin.content-page.create"),children:" Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(r,{permission:"Content Pages Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Title"}),e.jsx(t.Th,{children:"Url"}),e.jsx(t.Th,{children:"Status"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:m.data.map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{children:s.id}),e.jsx(t.Td,{children:s.title}),e.jsx(t.Td,{children:e.jsxs("a",{target:"blank",href:"/"+s.slug,children:["/",s.slug]})}),e.jsx("td",{className:"",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs(t.Td,{className:"text-end",children:[e.jsx("a",{target:"blank",href:"/"+s.slug,className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{class:"bi bi-globe-americas"})}),e.jsx("span",{onClick:()=>g(s),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(r,{permission:"Content Page Edit",children:e.jsx(n,{className:"btn btn-transparent p-2 px-3",href:route("admin.content-page.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(r,{permission:"Content Page Delete",children:e.jsx("button",{onClick:i=>f(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})}),e.jsx(y,{show:p,handleClose:c,size:"lg",title:u,children:o?e.jsx(S,{collection:o,handleClose:c}):"Failed fetching data..."})]})}export{ie as default};
