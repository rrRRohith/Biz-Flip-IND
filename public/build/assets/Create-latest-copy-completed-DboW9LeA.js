import{W as v,j as e,Y as N,a as c}from"./app-BLep4a_v.js";import{A as k}from"./AdminAuthenticated-C_X71V-Q.js";import{S as I}from"./SortableComponent-70zJ0OKZ.js";import{I as T}from"./InputLabel-BD_rBY5P.js";import{v as d}from"./v4-DvF23Exx.js";import"./Dropdown-C-ntnV8Y.js";import"./AdminHeader-BYBR0nrz.js";import"./PermissionAllow-Bw1nH26z.js";import"./Dropdown-DaR_s_6f.js";import"./listen-bVhbO5mt.js";import"./useWindow-CgfjH_xT.js";import"./Anchor-Djf5sm_B.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Ce-lT5oA.js";import"./BootstrapModalManager-Z6MjKZtp.js";import"./Fade-DuAq4uZE.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-YoWyG7So.js";import"./ToastNotification-xqERWRZD.js";import"./react-beautiful-dnd.esm-2-cYLrCt.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./hoist-non-react-statics.cjs-BNmgfxmt.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-iQfSGAgu.js";import"./InputError-MwQouRg7.js";const C=[{id:d(),linkText:"",linkType:"page_link",customLink:"",children:[]}],ee=({auth:m,landingPage:h})=>{const{data:a,setData:o,post:p}=v({title:"",items:C}),x=t=>{if(!t.destination)return;const n=[...a.items],[r]=n.splice(t.source.index,1);if(t.destination.droppableId==="droppable")n.splice(t.destination.index,0,r);else{const l=parseInt(t.destination.droppableId.split("-")[1]),[i]=n.splice(l,1);i.children.splice(t.destination.index,0,r),n.splice(l,0,i)}o("items",n)},u=()=>{const t={id:d(),linkText:"",linkType:"page_link",customLink:"",children:[]};o("items",[...a.items,t])},f=t=>{const n={id:d(),linkText:"",linkType:"page_link",customLink:"",children:[]},r=(l,i)=>l.map(s=>s.id===i?{...s,children:[...s.children,n]}:s.children&&s.children.length?{...s,children:r(s.children,i)}:s);o("items",r(a.items,t))},j=t=>{const n=(r,l)=>r.filter(i=>i.id!==l).map(i=>i.children&&i.children.length?{...i,children:n(i.children,l)}:i);o("items",n(a.items,t))},b=(t,n)=>{const r=(l,i)=>l.map(s=>s.id===i?{...s,...n}:s.children&&s.children.length?{...s,children:r(s.children,i)}:s);o("items",r(a.items,t))},g=t=>{t.preventDefault();let n=!0;const r={};if(a.items.forEach((l,i)=>{l.linkText.trim()||(r[`items.${i}.linkText`]="Link text is required",n=!1),(!l.linkType||l.linkType==="page_link")&&(r[`items.${i}.linkType`]="Link type is required",n=!1)}),!n){o("errors",r),console.log(r);return}p(route("admin.navigation-menu.store"))};return e.jsxs(k,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(N,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(c,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(T,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:a.title,onChange:t=>o("title",t.target.value)})]}),e.jsx(I,{items:a.items,onDragEnd:x,onAddItem:u,onAddChildItem:f,onDeleteItem:j,onChangeItem:b,landingPage:h}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})]})})]})};export{ee as default};
