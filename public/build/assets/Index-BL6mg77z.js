import{r as a,W as g,j as e,S,Y as y,a as i,b as w,y as D}from"./app-roG2FNUw.js";import"./Dropdown-CBoT_l1M.js";import"./index-BADdu3Kb.js";import{P as r}from"./PermissionAllow-Cm40Mk8e.js";import q from"./Wrapper-PPnQg89C.js";import"./index-BYOm8-Jv.js";/* empty css                                  */import"./server.browser-ClVAtjXT.js";import C from"./Delete-yixx2Lj7.js";import"./Header-CiIeRvA2.js";import"./ProfileDropdown-D39kx3Nu.js";import"./Dropdown-Bctdksvb.js";import"./useMergedRefs-CmHmiumL.js";import"./useWindow-Degt0VVA.js";import"./NavbarContext-CzESW6Li.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-C7CNvKRm.js";import"./ReactToastify-B_HsxkDQ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BhalhK_u.js";import"./Modal-CoaYMI_-.js";import"./BootstrapModalManager-CJOGpHN0.js";import"./Fade-AzVfb9Pt.js";import"./inheritsLoose-B6jfs0L0.js";function ae({auth:o,staffs:d}){const[m,n]=a.useState(!1),[l,h]=a.useState(d.data),{data:c,setData:x}=g({q:""}),p=async()=>{n(!0);const s=await w.get(route("account.staffs.search",c));h(s.data),n(!1)},[j,t]=a.useState(!1),[u,b]=a.useState(null),f=function(s){t(!1),D.delete(route("account.staffs.destroy",s))},N=s=>{b(s),t(!0)},v=()=>t(!1);return e.jsxs(e.Fragment,{children:[m&&e.jsx(S,{}),e.jsx(y,{title:"Staffs"}),e.jsxs(q,{user:o.user,children:[e.jsx(C,{showDelete:j,handleClose:v,deleteAction:f,deleteId:u,setShowDelete:t}),e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staffs"}),e.jsx(r,{permission:"Plan Purchase",children:e.jsx("div",{className:"ms-auto",children:e.jsx(i,{className:"btn btn-secondary text-overflow",href:route("account.roles.index"),children:"Manage roles"})})})]}),e.jsx("div",{children:"Manage your staff members easily. Search, view, and edit staff information."}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:c.q,onChange:s=>x("q",s.target.value),type:"search",placeholder:"Search by name, email etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(r,{permission:"Staff Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(i,{className:"btn btn-primary text-overflow",href:route("account.staffs.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New staff"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"}),e.jsx("th",{scope:"col",children:"Role"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:l.length?e.jsx(e.Fragment,{children:l.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone}),e.jsx("td",{children:s.role_names}),e.jsx("td",{children:s.date_text}),e.jsxs("td",{children:[e.jsx(r,{permission:"Staff Edit",children:e.jsx(i,{href:route("account.staffs.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(r,{permission:"Staff Delete",children:e.jsx("button",{onClick:P=>N(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})})]})]})}export{ae as default};