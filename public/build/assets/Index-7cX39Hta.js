import{r as d,W as D,j as e,Y as I,a as u,b}from"./app-hKBUMLe1.js";import{A as P}from"./AdminAuthenticated-BUAq0ZRe.js";import{P as l}from"./PermissionAllow-DHgXbBFu.js";import{Q as S,B as k}from"./ReactToastify--3VAQVlo.js";import"./sweetalert2.all-B7v3Kys_.js";import"./index-CwWIxwAX.js";/* empty css                                  */import{M as y}from"./ModalPopup-CWB_YKey.js";import B from"./ViewCategory-W2tM5Vka.js";import{D as E,C as A,P as M}from"./react-beautiful-dnd.esm-DaxJ9uon.js";import"./Dropdown-DOmracxd.js";import"./AdminHeader-BWRrkpvi.js";import"./Dropdown-BfH5VE4C.js";import"./useMergedRefs-C-7sqODX.js";import"./useWindow-9aWrHFBt.js";import"./NavbarContext-osRKzuZ_.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CasjjZNO.js";import"./BootstrapModalManager-CF_6iA4n.js";import"./Fade-DsbnRmX9.js";import"./index-C5yvl4A4.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DiUc3PQC.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./Modal-BgK84Lya.js";import"./slick-theme-jDO5wAtz.js";import"./StatusBtn-CVgpGGeY.js";import"./TabPane-CmFo_z1k.js";import"./DynamicSelect-e9_Qq7Al.js";import"./react-select.esm-CDxZ7iOp.js";import"./Select-49a62830.esm-Gjv0wZ5m.js";import"./objectSpread2-zE2D4Rih.js";import"./emotion-react.browser.esm-DBBXXhuG.js";import"./hoist-non-react-statics.cjs-DVHzUy4i.js";import"./tiny-invariant.esm-CCoILDQG.js";function ve({categoryList:c,auth:g}){const[N,m]=d.useState(!1),[$,f]=d.useState(c.data),{data:p,setData:h,post:L,errors:O,reset:R}=D({orderedIds:[]}),[x,C]=d.useState(c.data),j=()=>m(!1),w=async r=>{if(!r.destination)return;const s=Array.from(x),[a]=s.splice(r.source.index,1);s.splice(r.destination.index,0,a);const i=s.map((t,v)=>({...t,position:v+1}));C(i),f(i);const n=i.map(t=>t.id);h("orderedIds",n);try{const t=await b.post(route("admin.business-category.position-update"),{orderedIds:n});k.success(t.data,{position:"top-right",autoClose:5e3,closeOnClick:!0})}catch(t){console.error("Error posting data:",t)}},o=async r=>{try{const a=(await b.get(route("admin.business-category.show",r.id))).data;h(a),m(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(P,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Categories"}),children:[e.jsx(I,{title:"Business Category List"}),e.jsx(S,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Business Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Business Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(l,{permission:"Categories Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(E,{onDragEnd:w,children:e.jsx(A,{droppableId:"categories",children:r=>e.jsxs("table",{className:"table border-no ",id:"example1",...r.droppableProps,ref:r.innerRef,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Move Position"}),e.jsx("th",{children:"Name"}),e.jsx("th",{className:"text-center",children:"Status"}),e.jsx("th",{className:"text-center",children:"Last Modified"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[x.map((s,a)=>e.jsx(M,{draggableId:`${s.id}-${s.name}`,index:a,children:(i,n)=>e.jsxs("tr",{ref:i.innerRef,...i.draggableProps,...i.dragHandleProps,className:` ${n.isDragging?"dragging":""}`,children:[e.jsx("td",{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsx("td",{onClick:()=>o(s),children:s.name}),e.jsx("td",{onClick:()=>o(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx("td",{onClick:()=>o(s),className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs("td",{align:"right",children:[e.jsx(l,{permission:"Category Show",children:e.jsx("span",{onClick:()=>o(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(l,{permission:"Category Edit",children:e.jsx(u,{className:"btn btn-transparent",href:route("admin.business-category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})})]})]})},`${s.id}-${s.name}`)),r.placeholder]})]})})})})})})})})})})]})}),e.jsx(y,{show:N,handleClose:j,size:"md",title:"Business Category Details",children:p?e.jsx(B,{collection:p,handleClose:j}):"Failed fetching data..."})]})}export{ve as default};