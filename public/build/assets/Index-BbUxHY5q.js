import{r as t,W as I,j as e,Y as E,a as d,S as F,b as m,y as _}from"./app-C7Wmsx-r.js";import"./Dropdown-B0qLyvOA.js";import"./index-CzsITtD-.js";import{P as l}from"./PermissionAllow-SWIDdt0G.js";import A from"./Wrapper-BG-gv0mJ.js";import"./index-Bhq-rrrz.js";/* empty css                                  */import{M as L}from"./ModalPopup-pv647XVD.js";import M from"./Permissions-CCVFeXmm.js";import{s as T}from"./server.browser-CED8a1ND.js";import W from"./Delete-CJNxOO28.js";import"./SideBar-C5XeElQ2.js";import"./ProfileDropdown-em-Z3wSF.js";import"./Header-D9VyhKxS.js";import"./ToastNotification-gx8mAVOD.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./Modal-Zzk52Z60.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Fade-Du7pQ0im.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./index-D1UJqtKR.js";import"./TransitionGroupContext-BvsyIu3A.js";function xe({auth:p,roles:h}){const[n,x]=t.useState(h.data),{data:o,setData:j}=I({q:""}),u=async()=>{r(!0);const s=await m.get(route("seller.roles.search",o));x(s.data),r(!1)},[b,c]=t.useState(!1),[f,N]=t.useState(null),[v,g]=t.useState(null),[S,r]=t.useState(!1),w=()=>c(!1),y=async function(s){g(`Permissions of ${s.name}`),r(!0);const i=await m.get(route("seller.roles.show",s.id));N(T.renderToString(e.jsx(M,{permissions:i.data.permissions}))),r(!1),c(!0)},[D,a]=t.useState(!1),[C,R]=t.useState(null),P=function(s){a(!1),_.delete(route("seller.roles.destroy",s))},q=s=>{R(s),a(!0)},k=()=>a(!1);return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Staff roles"}),e.jsx(W,{showDelete:D,handleClose:k,deleteAction:P,deleteId:C,setShowDelete:a}),e.jsxs(A,{user:p.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staff roles"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:o.q,onChange:s=>j("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>u(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(l,{permission:"Role and Responsibilities Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(d,{className:"btn btn-primary text-overflow",href:route("seller.roles.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New role"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Permissions"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:n.length?e.jsx(e.Fragment,{children:n.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsxs("div",{role:"button",onClick:i=>y(s),className:"text-primary text-decoration-none",children:[s.total_permissions," permissions"]})}),e.jsx("td",{children:s.updated_text}),e.jsxs("td",{children:[e.jsx(l,{permission:"Role and Responsibilities Edit",children:e.jsx(d,{href:route("seller.roles.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(l,{permission:"Role and Responsibilities Delete",children:e.jsx("button",{onClick:i=>q(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})}),S&&e.jsx(F,{}),e.jsx(L,{animation:!1,centered:!0,show:b,handleClose:w,data:f,title:v})]})]})}export{xe as default};
