import{r,W as g,j as e,S,Y as y,a as o,b as D,y as w}from"./app-Pjbz9rYH.js";import"./Dropdown-CE-gu5nq.js";import"./index-DM2p7FV6.js";import{P as a}from"./PermissionAllow-BcOslNQQ.js";import q from"./Wrapper--SB3MFzY.js";import"./index-D7-sA4tA.js";/* empty css                                  */import"./server.browser-C1EZ1XEM.js";import C from"./Delete-PWmGs-Pn.js";import"./SideBar-CQfQB6Xr.js";import"./ProfileDropdown-tDMWrGp-.js";import"./Header-BCzNl1Hp.js";import"./Dropdown-DEtUw4_i.js";import"./listen-CXcLQhiT.js";import"./useWindow-D1noL5Ib.js";import"./Anchor-CzasrsdE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-B-ms-Kd4.js";import"./ReactToastify-RpSR8sos.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B4fOitUh.js";import"./Modal-CSjkg4Gf.js";import"./BootstrapModalManager-CAgHfQD6.js";import"./Fade-DmKvq5CQ.js";import"./inheritsLoose-1HkgTRWY.js";function ae({auth:c,staffs:d}){const[m,i]=r.useState(!1),[l,h]=r.useState(d.data),{data:n,setData:x}=g({q:""}),p=async()=>{i(!0);const s=await D.get(route("seller.staffs.search",n));h(s.data),i(!1)},[j,t]=r.useState(!1),[u,b]=r.useState(null),f=function(s){t(!1),w.delete(route("seller.staffs.destroy",s))},N=s=>{b(s),t(!0)},v=()=>t(!1);return e.jsxs(e.Fragment,{children:[m&&e.jsx(S,{}),e.jsx(y,{title:"Staffs"}),e.jsxs(q,{user:c.user,children:[e.jsx(C,{showDelete:j,handleClose:v,deleteAction:f,deleteId:u,setShowDelete:t}),e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staffs"}),e.jsx("div",{children:"Manage your staff members easily. Search, view, and edit staff information."}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:n.q,onChange:s=>x("q",s.target.value),type:"search",placeholder:"Search by name, email etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(a,{permission:"Staff Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(o,{className:"btn btn-primary text-overflow",href:route("seller.staffs.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New staff"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"}),e.jsx("th",{scope:"col",children:"Role"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:l.length?e.jsx(e.Fragment,{children:l.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone}),e.jsx("td",{children:s.role_names}),e.jsx("td",{children:s.date_text}),e.jsxs("td",{children:[e.jsx(a,{permission:"Staff Edit",children:e.jsx(o,{href:route("seller.staffs.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(a,{permission:"Staff Delete",children:e.jsx("button",{onClick:E=>N(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})})]})]})}export{ae as default};
