import{W as v,j as e,Y as I,a as m}from"./app-Mi5-AqKU.js";import{A as C}from"./AdminAuthenticated-DlHDvaUZ.js";import{S as k}from"./SortableComponent-CrR8K2Ht.js";import{I as w}from"./InputLabel-D5OKBtk7.js";import{I as y}from"./InputError-Dv4MT5Ay.js";import{S as A}from"./sweetalert2.all-BP8zmD6F.js";import{P as T}from"./PermissionAllow-B8xuR5O8.js";import{v as c}from"./v4-DvF23Exx.js";import"./Dropdown-Dk7jjItk.js";import"./AdminHeader-DZWAdAgA.js";import"./Dropdown-BdYkEp6F.js";import"./useMergedRefs-B9NgnWcR.js";import"./SSRProvider-DMDV9ab5.js";import"./useWindow-CcF1-924.js";import"./NavbarContext-C0XN_G8R.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-Da_kr_1K.js";import"./BootstrapModalManager-CXIzqira.js";import"./Fade-DuL5UsXy.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B_UjAs0f.js";import"./ToastNotification-Bnj11tKi.js";import"./ReactToastify-C6-0c1dT.js";import"./react-beautiful-dnd.esm-DyDiVOC4.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./hoist-non-react-statics.cjs-CTCe2Omd.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-BqBT6_mC.js";const D=[{id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]}],ae=({auth:h,landingPage:p})=>{const{data:a,setData:o,post:u,errors:d}=v({title:"",items:D}),x=i=>{if(!i.destination)return;const n=[...a.items],[r]=n.splice(i.source.index,1);if(i.destination.droppableId==="droppable")n.splice(i.destination.index,0,r);else{const l=parseInt(i.destination.droppableId.split("-")[1]),[s]=n.splice(l,1);s.children.splice(i.destination.index,0,r),n.splice(l,0,s)}o("items",n)},f=()=>{const i={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]};o("items",[...a.items,i])},j=i=>{const n={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]},r=(l,s)=>l.map(t=>t.id===s?{...t,children:[...t.children,n]}:t.children&&t.children.length?{...t,children:r(t.children,s)}:t);o("items",r(a.items,i))},g=i=>{A.fire({title:"Are you sure you want to delete this item?",text:"this item can`t be recover",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(n=>{if(n.isConfirmed){const r=(l,s)=>l.filter(t=>t.id!==s).map(t=>t.children&&t.children.length?{...t,children:r(t.children,s)}:t);o("items",r(a.items,i))}})},b=(i,n)=>{const r=(l,s)=>l.map(t=>t.id===s?{...t,...n}:t.children&&t.children.length?{...t,children:r(t.children,s)}:t);o("items",r(a.items,i))},N=i=>{i.preventDefault(),u(route("admin.navigation-menu.store"))};return e.jsxs(C,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(I,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(m,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(T,{permission:"Navigation Menu Create",message:"true",children:e.jsxs("form",{onSubmit:N,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(w,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:a.title,onChange:i=>o("title",i.target.value)}),e.jsx(y,{message:d.title,className:"mt-2 col-12"})]}),e.jsx(k,{items:a.items,onDragEnd:x,onAddItem:f,onAddChildItem:j,onDeleteItem:g,onChangeItem:b,landingPage:p,formErrors:d}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})})]})})]})};export{ae as default};
