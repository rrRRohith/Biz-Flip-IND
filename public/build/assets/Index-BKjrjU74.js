import{r as i,W as p,j as e,S as u,Y as b,a as n,b as f,y as N}from"./app-DUUes-Qe.js";import"./Dropdown-CFmbVfto.js";import"./index-BzWycOG-.js";import{P as t}from"./PermissionAllow-a6rJKmWW.js";import v from"./Wrapper-CmKRsvxI.js";import"./SuperResponsiveTableStyle-DAsaUTl5.js";import"./server.browser-Bq3EySzD.js";import"./SideBar-XH0J0a7H.js";import"./ProfileDropdown-CvQ1wisH.js";import"./Header-DeJlKGev.js";import"./ToastNotification-Cn01RQ_-.js";import"./extends-COuXmZt1.js";import"./extends-B6xKY8K9.js";import"./inherits-CWsdyUoO.js";import"./defineProperty-DpFVb8oi.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BgGHsYll.js";function Y({auth:c,staffs:d}){const[o,a]=i.useState(!1),[r,m]=i.useState(d.data),{data:l,setData:h}=p({q:""}),x=async()=>{a(!0);const s=await f.get(route("seller.staffs.search",l));m(s.data),a(!1)},j=function(s){window.confirm("Are you sure you want to delete the staff?")&&N.delete(route("seller.staffs.destroy",s))};return e.jsxs(e.Fragment,{children:[o&&e.jsx(u,{}),e.jsx(b,{title:"Staffs"}),e.jsx(v,{user:c.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-lg vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staffs"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:l.q,onChange:s=>h("q",s.target.value),type:"search",placeholder:"Search by name, email etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>x(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(t,{permission:"Staff Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(n,{className:"btn btn-primary text-overflow",href:route("seller.staffs.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New staff"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"}),e.jsx("th",{scope:"col",children:"Role"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:r.length?e.jsx(e.Fragment,{children:r.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone}),e.jsx("td",{children:s.role_names}),e.jsx("td",{children:s.date_text}),e.jsxs("td",{children:[e.jsx(t,{permission:"Staff Edit",children:e.jsx(n,{href:route("seller.staffs.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(t,{permission:"Staff Delete",children:e.jsx("button",{onClick:g=>j(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})})})]})}export{Y as default};
