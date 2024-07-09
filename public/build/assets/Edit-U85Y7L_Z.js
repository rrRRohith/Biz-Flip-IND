import{W as I,j as e,Y as k,a as h}from"./app-DqEs7Bkv.js";import{A as w}from"./AdminAuthenticated-8TtlGUvq.js";import{S as C}from"./SortableComponent-CI-xUmPK.js";import{I as E}from"./InputLabel-Dok6018G.js";import{I as T}from"./InputError-D28HyOFN.js";import{S as y}from"./sweetalert2.all-DRMkO0QO.js";import{P as A}from"./PermissionAllow-De5fAs-K.js";import{v as c}from"./v4-DvF23Exx.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./ToastNotification-p7KpGbX9.js";import"./react-beautiful-dnd.esm-P_17uAnr.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./hoist-non-react-statics.cjs-CYd8FKoI.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-DbDcmex8.js";c();const te=({auth:p,landingPage:u,menu:d})=>{const{data:a,setData:o,post:x,errors:m}=I({title:d.title||"",items:d.children||[],_method:"PUT"}),f=i=>{if(!i.destination)return;const n=[...a.items],[s]=n.splice(i.source.index,1);if(i.destination.droppableId==="droppable")n.splice(i.destination.index,0,s);else{const l=parseInt(i.destination.droppableId.split("-")[1]),[r]=n.splice(l,1);r.children.splice(i.destination.index,0,s),n.splice(l,0,r)}o("items",n)},j=()=>{const i={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]};o("items",[...a.items,i])},g=i=>{const n={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]},s=(l,r)=>l.map(t=>t.id===r?{...t,children:[...t.children,n]}:t.children&&t.children.length?{...t,children:s(t.children,r)}:t);o("items",s(a.items,i))},b=i=>{y.fire({title:"Are you sure you want to delete this item?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(n=>{if(n.isConfirmed){const s=(l,r)=>l.filter(t=>t.id!==r).map(t=>t.children&&t.children.length?{...t,children:s(t.children,r)}:t);o("items",s(a.items,i))}})},N=(i,n)=>{const s=(l,r)=>l.map(t=>t.id===r?{...t,...n}:t.children&&t.children.length?{...t,children:s(t.children,r)}:t);o("items",s(a.items,i))},v=i=>{i.preventDefault(),x(route("admin.navigation-menu.update",d.id))};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Edit"}),children:[e.jsx(k,{title:"Navigation Menu Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(h,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(A,{permission:"Navigation Menu Edit",message:"true",children:e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(E,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:a.title,onChange:i=>o("title",i.target.value)}),e.jsx(T,{message:m.title,className:"mt-2 col-12"})]}),e.jsx(C,{items:a.items,onDragEnd:f,onAddItem:j,onAddChildItem:g,onDeleteItem:b,onChangeItem:N,landingPage:u,formErrors:m}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})})]})})]})};export{te as default};
