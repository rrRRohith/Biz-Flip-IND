import{W as v,j as e,Y as I,a as m}from"./app-R6y9gL3g.js";import{A as C}from"./AdminAuthenticated-B2wS1uY8.js";import{S as k}from"./SortableComponent-zd7kRtkN.js";import{I as w}from"./InputLabel-oTZjvInR.js";import{I as y}from"./InputError-C2QaN2Nu.js";import{S as A}from"./sweetalert2.all-BKZzp1c9.js";import{P as T}from"./PermissionAllow-D4BwgB5q.js";import{v as c}from"./v4-DvF23Exx.js";import"./Dropdown-DgAiWIoo.js";import"./AdminHeader-CDhl87mA.js";import"./Dropdown-BlSHQWGn.js";import"./useMergedRefs-C3t7vQZD.js";import"./SSRProvider-xBs2tMT7.js";import"./useWindow-DRSLSfK6.js";import"./NavbarContext-DQxyGIWx.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CU6KdK5U.js";import"./BootstrapModalManager-aBqd47xI.js";import"./Fade-q808BQ0I.js";import"./index-CeBJEy_f.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-DAW1pCwX.js";import"./ReactToastify-BMVUs_yP.js";import"./react-beautiful-dnd.esm-CVtfgxHj.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./hoist-non-react-statics.cjs-DcoXb29O.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-DFgzpvU2.js";const D=[{id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]}],ae=({auth:h,landingPage:p})=>{const{data:a,setData:o,post:u,errors:d}=v({title:"",items:D}),x=i=>{if(!i.destination)return;const n=[...a.items],[r]=n.splice(i.source.index,1);if(i.destination.droppableId==="droppable")n.splice(i.destination.index,0,r);else{const l=parseInt(i.destination.droppableId.split("-")[1]),[s]=n.splice(l,1);s.children.splice(i.destination.index,0,r),n.splice(l,0,s)}o("items",n)},f=()=>{const i={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]};o("items",[...a.items,i])},j=i=>{const n={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]},r=(l,s)=>l.map(t=>t.id===s?{...t,children:[...t.children,n]}:t.children&&t.children.length?{...t,children:r(t.children,s)}:t);o("items",r(a.items,i))},g=i=>{A.fire({title:"Are you sure you want to delete this item?",text:"this item can`t be recover",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(n=>{if(n.isConfirmed){const r=(l,s)=>l.filter(t=>t.id!==s).map(t=>t.children&&t.children.length?{...t,children:r(t.children,s)}:t);o("items",r(a.items,i))}})},b=(i,n)=>{const r=(l,s)=>l.map(t=>t.id===s?{...t,...n}:t.children&&t.children.length?{...t,children:r(t.children,s)}:t);o("items",r(a.items,i))},N=i=>{i.preventDefault(),u(route("admin.navigation-menu.store"))};return e.jsxs(C,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(I,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(m,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(T,{permission:"Navigation Menu Create",message:"true",children:e.jsxs("form",{onSubmit:N,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(w,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:a.title,onChange:i=>o("title",i.target.value)}),e.jsx(y,{message:d.title,className:"mt-2 col-12"})]}),e.jsx(k,{items:a.items,onDragEnd:x,onAddItem:f,onAddChildItem:j,onDeleteItem:g,onChangeItem:b,landingPage:p,formErrors:d}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})})]})})]})};export{ae as default};
