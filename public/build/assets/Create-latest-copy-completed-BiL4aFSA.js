import{W as v,j as e,Y as N,a as c}from"./app-Akylwbq0.js";import{A as k}from"./AdminAuthenticated-DTgiHzF5.js";import{S as I}from"./SortableComponent-BJdQMkX8.js";import{I as T}from"./InputLabel-Bk9rWBnk.js";import{v as d}from"./v4-DvF23Exx.js";import"./Dropdown-DcblL1zV.js";import"./AdminHeader-D6tHz5HJ.js";import"./PermissionAllow-CB1VZH03.js";import"./Dropdown-Dym4xX4-.js";import"./useMergedRefs-C6hqy1VW.js";import"./SSRProvider-D8VGMU17.js";import"./useWindow-BMR63Lcn.js";import"./NavbarContext-CIWNcitZ.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CWh0YhTe.js";import"./BootstrapModalManager-Eahm6Wfg.js";import"./Fade-CwyKlMLO.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dvg67boC.js";import"./ToastNotification-DxiTJXKI.js";import"./ReactToastify-2i8COxRb.js";import"./react-beautiful-dnd.esm-DeLyRuWW.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./hoist-non-react-statics.cjs-aPz7-uqL.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-B_M-Umtr.js";import"./InputError-MdbydZjz.js";const C=[{id:d(),linkText:"",linkType:"page_link",customLink:"",children:[]}],te=({auth:m,landingPage:h})=>{const{data:a,setData:o,post:p}=v({title:"",items:C}),x=t=>{if(!t.destination)return;const n=[...a.items],[s]=n.splice(t.source.index,1);if(t.destination.droppableId==="droppable")n.splice(t.destination.index,0,s);else{const l=parseInt(t.destination.droppableId.split("-")[1]),[i]=n.splice(l,1);i.children.splice(t.destination.index,0,s),n.splice(l,0,i)}o("items",n)},u=()=>{const t={id:d(),linkText:"",linkType:"page_link",customLink:"",children:[]};o("items",[...a.items,t])},f=t=>{const n={id:d(),linkText:"",linkType:"page_link",customLink:"",children:[]},s=(l,i)=>l.map(r=>r.id===i?{...r,children:[...r.children,n]}:r.children&&r.children.length?{...r,children:s(r.children,i)}:r);o("items",s(a.items,t))},j=t=>{const n=(s,l)=>s.filter(i=>i.id!==l).map(i=>i.children&&i.children.length?{...i,children:n(i.children,l)}:i);o("items",n(a.items,t))},b=(t,n)=>{const s=(l,i)=>l.map(r=>r.id===i?{...r,...n}:r.children&&r.children.length?{...r,children:s(r.children,i)}:r);o("items",s(a.items,t))},g=t=>{t.preventDefault();let n=!0;const s={};if(a.items.forEach((l,i)=>{l.linkText.trim()||(s[`items.${i}.linkText`]="Link text is required",n=!1),(!l.linkType||l.linkType==="page_link")&&(s[`items.${i}.linkType`]="Link type is required",n=!1)}),!n){o("errors",s),console.log(s);return}p(route("admin.navigation-menu.store"))};return e.jsxs(k,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(N,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(c,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(T,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:a.title,onChange:t=>o("title",t.target.value)})]}),e.jsx(I,{items:a.items,onDragEnd:x,onAddItem:u,onAddChildItem:f,onDeleteItem:j,onChangeItem:b,landingPage:h}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})]})})]})};export{te as default};
