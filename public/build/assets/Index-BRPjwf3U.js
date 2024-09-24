import{r as l,W as I,j as e,Y as B,a as d,y as S,b}from"./app-BXfOFtMl.js";import{A as P}from"./AdminAuthenticated-Dwx8ZxkL.js";import{P as o}from"./PermissionAllow-Bmav22Jn.js";import{Q as A,B as E}from"./ReactToastify-cpV57kyA.js";import{S as g}from"./sweetalert2.all-BdvOc9ft.js";import"./index-xVZ2K_k5.js";/* empty css                                  */import{M as k}from"./ModalPopup-V4JO2jJH.js";import $ from"./ViewCategory-CWcvw1As.js";import{D as M,C as O,P as R}from"./react-beautiful-dnd.esm-DqRBGEG8.js";import"./Dropdown-Cp_rOS_V.js";import"./AdminHeader-B6A_v_mg.js";import"./Dropdown-Dv0ZZ02g.js";import"./useMergedRefs-WOjEEHiq.js";import"./useWindow-Md6ixlI9.js";import"./NavbarContext-Dtj3Ep1K.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CzhnDPPu.js";import"./BootstrapModalManager-D4jQBsz4.js";import"./Fade-D7rPbNdF.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dii__Aqi.js";import"./ToastNotification-D57WkZ_V.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-C5li0lM4.js";import"./slick-theme-DbBDNlna.js";import"./StatusBtn-d2IUDt1O.js";import"./TabPane-C3PJUb1H.js";import"./DynamicSelect-B5ktYz9r.js";import"./react-select.esm-DdIEJsKq.js";import"./Select-49a62830.esm-VUuXrGx2.js";import"./objectSpread2-BGia1Xzf.js";import"./emotion-react.browser.esm-B1m4xUmc.js";import"./hoist-non-react-statics.cjs-DtGCvVSw.js";import"./tiny-invariant.esm-CCoILDQG.js";function Ie({categoryList:c,auth:f}){const[N,m]=l.useState(!1),[T,C]=l.useState(c.data),{data:p,setData:h,post:H,errors:L,reset:Y}=I({orderedIds:[]}),w=r=>{g.fire({title:"Are you sure you want to delete this category?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&S.delete(route("admin.business-category.destroy",r.id),{onSuccess:()=>{g.fire("Deleted!","category has been deleted.","success")}})})},[x,y]=l.useState(c.data),u=()=>m(!1),v=async r=>{if(!r.destination)return;const s=Array.from(x),[a]=s.splice(r.source.index,1);s.splice(r.destination.index,0,a);const t=s.map((i,D)=>({...i,position:D+1}));y(t),C(t);const n=t.map(i=>i.id);h("orderedIds",n);try{const i=await b.post(route("admin.business-category.position-update"),{orderedIds:n});E.success(i.data,{position:"top-right",autoClose:5e3,closeOnClick:!0})}catch(i){console.error("Error posting data:",i)}},j=async r=>{try{const a=(await b.get(route("admin.business-category.show",r.id))).data;h(a),m(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(P,{user:f.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Categories"}),children:[e.jsx(B,{title:"Business Category List"}),e.jsx(A,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Business Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(d,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Business Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(o,{permission:"Category Create",children:e.jsxs(d,{className:"btn btn-info text-end",href:route("admin.business-category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(o,{permission:"Categories Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(M,{onDragEnd:v,children:e.jsx(O,{droppableId:"categories",children:r=>e.jsxs("table",{className:"table border-no ",id:"example1",...r.droppableProps,ref:r.innerRef,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Move Position"}),e.jsx("th",{children:"Name"}),e.jsx("th",{className:"text-center",children:"Status"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[x.map((s,a)=>e.jsx(R,{draggableId:`${s.id}-${s.name}`,index:a,children:(t,n)=>e.jsxs("tr",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,className:` ${n.isDragging?"dragging":""}`,children:[e.jsx("td",{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsx("td",{children:e.jsx("strong",{role:"button",onClick:()=>j(s),children:s.name})}),e.jsx("td",{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs("td",{align:"right",children:[e.jsx(o,{permission:"Category Show",children:e.jsx("span",{onClick:()=>j(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(o,{permission:"Category Edit",children:e.jsx(d,{className:"btn btn-transparent",href:route("admin.business-category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(o,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>w(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]})},`${s.id}-${s.name}`)),r.placeholder]})]})})})})})})})})})})]})}),e.jsx(k,{show:N,handleClose:u,size:"md",title:"Business Category Details",children:p?e.jsx($,{collection:p,handleClose:u}):"Failed fetching data..."})]})}export{Ie as default};
