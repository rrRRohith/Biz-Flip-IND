import{r as a,W as g,j as e,S,Y as y,a as c,b as D,y as w}from"./app-OIveC4vg.js";import"./Dropdown-BT5_CmUH.js";import"./index-CISIEJfx.js";import{P as r}from"./PermissionAllow-InpQN_vS.js";import q from"./Wrapper-3Z16wVCk.js";import"./index-Bgd1G4Oe.js";/* empty css                                  */import"./server.browser-B0tZGKyp.js";import C from"./Delete-4TyZwc7K.js";import"./Header-D6ozEgkU.js";import"./ProfileDropdown-ojH-eUbG.js";import"./Dropdown-CCZ7KOyw.js";import"./useMergedRefs-C14ws7xt.js";import"./useWindow-BKz7HuOD.js";import"./NavbarContext-BfalcnaE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-B_e3cxiv.js";import"./ReactToastify-k7iD8hA9.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DO24z29d.js";import"./Modal-CBSZOgBU.js";import"./BootstrapModalManager-D7nAxY6_.js";import"./Fade-B6ZocwEE.js";import"./inheritsLoose-1HkgTRWY.js";function ae({auth:o,staffs:d}){const[m,i]=a.useState(!1),[n,h]=a.useState(d.data),{data:l,setData:x}=g({q:""}),p=async()=>{i(!0);const s=await D.get(route("account.staffs.search",l));h(s.data),i(!1)},[j,t]=a.useState(!1),[u,b]=a.useState(null),f=function(s){t(!1),w.delete(route("account.staffs.destroy",s))},N=s=>{b(s),t(!0)},v=()=>t(!1);return e.jsxs(e.Fragment,{children:[m&&e.jsx(S,{}),e.jsx(y,{title:"Staffs"}),e.jsxs(q,{user:o.user,children:[e.jsx(C,{showDelete:j,handleClose:v,deleteAction:f,deleteId:u,setShowDelete:t}),e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staffs"}),e.jsx("div",{children:"Manage your staff members easily. Search, view, and edit staff information."}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:l.q,onChange:s=>x("q",s.target.value),type:"search",placeholder:"Search by name, email etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(r,{permission:"Staff Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(c,{className:"btn btn-primary text-overflow",href:route("account.staffs.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New staff"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"}),e.jsx("th",{scope:"col",children:"Role"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:n.length?e.jsx(e.Fragment,{children:n.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone}),e.jsx("td",{children:s.role_names}),e.jsx("td",{children:s.date_text}),e.jsxs("td",{children:[e.jsx(r,{permission:"Staff Edit",children:e.jsx(c,{href:route("account.staffs.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(r,{permission:"Staff Delete",children:e.jsx("button",{onClick:E=>N(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})})]})]})}export{ae as default};
