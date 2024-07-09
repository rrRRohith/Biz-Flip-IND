import{r as d,W as D,j as e,Y as I,a as u,b}from"./app-DqEs7Bkv.js";import{A as P}from"./AdminAuthenticated-8TtlGUvq.js";import{P as l}from"./PermissionAllow-De5fAs-K.js";import{Q as S,B as k}from"./ToastNotification-p7KpGbX9.js";import"./sweetalert2.all-DRMkO0QO.js";import"./index-ql_5Okc_.js";/* empty css                                  */import{M as y}from"./ModalPopup-COviqR99.js";import B from"./ViewCategory-BSBZmk8L.js";import{D as E,C as A,P as $}from"./react-beautiful-dnd.esm-P_17uAnr.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./interopRequireDefault-BbjLfwJi.js";import"./inherits-DEw0FBPK.js";import"./defineProperty-DpFVb8oi.js";import"./Modal-DOEIdxLy.js";import"./slick-theme-C-o3FmXP.js";import"./StatusBtn-Hy8i-pkq.js";import"./TabPane-CF__rGOj.js";import"./DynamicSelect-C6qYJtHS.js";import"./react-select-creatable.esm-6Dbc75pq.js";import"./inherits-BIvzEtgb.js";import"./objectSpread2-BZX5QY3a.js";import"./emotion-react.browser.esm-CFsy6mXa.js";import"./hoist-non-react-statics.cjs-CYd8FKoI.js";import"./tiny-invariant.esm-CCoILDQG.js";function ge({categoryList:c,auth:g}){const[N,m]=d.useState(!1),[M,f]=d.useState(c.data),{data:p,setData:h,post:L,errors:O,reset:R}=D({orderedIds:[]}),[x,C]=d.useState(c.data),j=()=>m(!1),w=async r=>{if(!r.destination)return;const s=Array.from(x),[a]=s.splice(r.source.index,1);s.splice(r.destination.index,0,a);const t=s.map((i,v)=>({...i,position:v+1}));C(t),f(t);const o=t.map(i=>i.id);h("orderedIds",o);try{const i=await b.post(route("admin.business-category.position-update"),{orderedIds:o});k.success(i.data,{position:"top-right",autoClose:5e3,closeOnClick:!0})}catch(i){console.error("Error posting data:",i)}},n=async r=>{try{const a=(await b.get(route("admin.business-category.show",r.id))).data;h(a),m(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(P,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Categories"}),children:[e.jsx(I,{title:"Business Category List"}),e.jsx(S,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Business Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Business Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(l,{permission:"Categories Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(E,{onDragEnd:w,children:e.jsx(A,{droppableId:"categories",children:r=>e.jsxs("table",{className:"table border-no ",id:"example1",...r.droppableProps,ref:r.innerRef,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Name"}),e.jsx("th",{className:"text-center",children:"Status"}),e.jsx("th",{className:"text-center",children:"Last Modified"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[x.map((s,a)=>e.jsx($,{draggableId:`${s.id}-${s.name}`,index:a,children:(t,o)=>e.jsxs("tr",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,className:` ${o.isDragging?"dragging":""}`,children:[e.jsx("td",{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsx("td",{onClick:()=>n(s),children:s.name}),e.jsx("td",{onClick:()=>n(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx("td",{onClick:()=>n(s),className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs("td",{align:"right",children:[e.jsx(l,{permission:"Category Show",children:e.jsx("span",{onClick:()=>n(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(l,{permission:"Category Edit",children:e.jsx(u,{className:"btn btn-transparent",href:route("admin.business-category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})})]})]})},`${s.id}-${s.name}`)),r.placeholder]})]})})})})})})})})})})]})}),e.jsx(y,{show:N,handleClose:j,size:"md",title:"Business Category Details",children:p?e.jsx(B,{collection:p,handleClose:j}):"Failed fetching data..."})]})}export{ge as default};
