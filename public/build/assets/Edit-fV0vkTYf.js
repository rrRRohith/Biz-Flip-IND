import{W as I,j as e,Y as k,a as h}from"./app-DFq0yVq5.js";import{A as w}from"./AdminAuthenticated-DlW8TvGl.js";import{S as C}from"./SortableComponent-C68PgnYf.js";import{I as E}from"./InputLabel-Mq9RNF7I.js";import{I as T}from"./InputError-C6If64A0.js";import{S as y}from"./sweetalert2.all-LOxFFDsV.js";import{P as A}from"./PermissionAllow-D4zdlkCR.js";import{v as c}from"./v4-DvF23Exx.js";import"./Dropdown-BD6YUdaC.js";import"./AdminHeader-DRI7EmxH.js";import"./Dropdown-ZvaNFalz.js";import"./useMergedRefs-yvt1E_s8.js";import"./SSRProvider-DDBakYgc.js";import"./useWindow-Cc31lRmn.js";import"./NavbarContext-CTX-ZvmD.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DVM2IyrG.js";import"./BootstrapModalManager-CYE1Ntzd.js";import"./Fade-DKm1TWrQ.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRehnRrc.js";import"./ToastNotification-IPnVRav-.js";import"./ReactToastify-C65YYl7Y.js";import"./react-beautiful-dnd.esm-BLubMMR9.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./hoist-non-react-statics.cjs-Dzr6DZUi.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-BzFiV9Qx.js";c();const oe=({auth:p,landingPage:u,menu:d})=>{const{data:o,setData:a,post:x,errors:m}=I({title:d.title||"",items:d.children||[],_method:"PUT"}),f=i=>{if(!i.destination)return;const n=[...o.items],[r]=n.splice(i.source.index,1);if(i.destination.droppableId==="droppable")n.splice(i.destination.index,0,r);else{const l=parseInt(i.destination.droppableId.split("-")[1]),[s]=n.splice(l,1);s.children.splice(i.destination.index,0,r),n.splice(l,0,s)}a("items",n)},j=()=>{const i={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]};a("items",[...o.items,i])},g=i=>{const n={id:c(),linkText:"",linkType:"page_link",customLink:"",children:[]},r=(l,s)=>l.map(t=>t.id===s?{...t,children:[...t.children,n]}:t.children&&t.children.length?{...t,children:r(t.children,s)}:t);a("items",r(o.items,i))},b=i=>{y.fire({title:"Are you sure you want to delete this item?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(n=>{if(n.isConfirmed){const r=(l,s)=>l.filter(t=>t.id!==s).map(t=>t.children&&t.children.length?{...t,children:r(t.children,s)}:t);a("items",r(o.items,i))}})},N=(i,n)=>{const r=(l,s)=>l.map(t=>t.id===s?{...t,...n}:t.children&&t.children.length?{...t,children:r(t.children,s)}:t);a("items",r(o.items,i))},v=i=>{i.preventDefault(),x(route("admin.navigation-menu.update",d.id))};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Edit"}),children:[e.jsx(k,{title:"Navigation Menu Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(h,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(A,{permission:"Navigation Menu Edit",message:"true",children:e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(E,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:o.title,onChange:i=>a("title",i.target.value)}),e.jsx(T,{message:m.title,className:"mt-2 col-12"})]}),e.jsx(C,{items:o.items,onDragEnd:f,onAddItem:j,onAddChildItem:g,onDeleteItem:b,onChangeItem:N,landingPage:u,formErrors:m}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})})]})})]})};export{oe as default};
