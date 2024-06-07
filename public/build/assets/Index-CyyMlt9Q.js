import{r as t,W as R,j as e,Y as P,a as c,S as C,b as d,y as D}from"./app-CjewbWUq.js";import"./Dropdown-CJ6RRfHE.js";import"./index-DXXuAbUi.js";import{P as i}from"./PermissionAllow-CRcCMSN3.js";import q from"./Wrapper-DB6Ax3NE.js";import"./SuperResponsiveTableStyle-Dy9JKJUz.js";import{M as k}from"./ModalPopup-BIR1IjbJ.js";import E from"./Permissions-3gREztJc.js";import{s as F}from"./server.browser-AG4gle1e.js";import"./SideBar-CZC62MCb.js";import"./ProfileDropdown-BjwSGHuF.js";import"./Header-Dj3YUQzL.js";import"./ToastNotification-Chxa-umb.js";import"./extends-CQBvBT1m.js";import"./extends-B6xKY8K9.js";import"./inherits-DuN3otLB.js";import"./toPropertyKey-PLuKRk1e.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B4YvV15V.js";import"./Modal-c1dlaqwH.js";import"./listen-wp56gr8a.js";import"./useWindow-Cm-iF9fr.js";import"./Fade-C6KST17b.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./TransitionGroupContext-BwccNs-L.js";function ae({auth:m,roles:x}){const[n,h]=t.useState(x.data),{data:o,setData:p}=R({q:""}),j=async()=>{r(!0);const s=await d.get(route("seller.roles.search",o));h(s.data),r(!1)},u=function(s){window.confirm("Are you sure you want to delete the role?")&&D.delete(route("seller.roles.destroy",s))},[b,l]=t.useState(!1),[f,N]=t.useState(null),[v,g]=t.useState(null),[w,r]=t.useState(!1),y=()=>l(!1),S=async function(s){g(`Permissions of ${s.name}`),r(!0);const a=await d.get(route("seller.roles.show",s.id));N(F.renderToString(e.jsx(E,{permissions:a.data.permissions}))),r(!1),l(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Staff roles"}),e.jsxs(q,{user:m.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-lg vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staff roles"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:o.q,onChange:s=>p("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>j(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(i,{permission:"Role and Responsibilities Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(c,{className:"btn btn-primary text-overflow",href:route("seller.roles.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New role"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Permissions"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:n.length?e.jsx(e.Fragment,{children:n.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsxs("div",{role:"button",onClick:a=>S(s),className:"text-primary text-decoration-none",children:[s.total_permissions," permissions"]})}),e.jsx("td",{children:s.updated_text}),e.jsxs("td",{children:[e.jsx(i,{permission:"Role and Responsibilities Edit",children:e.jsx(c,{href:route("seller.roles.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(i,{permission:"Role and Responsibilities Delete",children:e.jsx("button",{onClick:a=>u(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})}),w&&e.jsx(C,{}),e.jsx(k,{animation:!1,centered:!0,show:b,handleClose:y,data:f,title:v})]})]})}export{ae as default};
