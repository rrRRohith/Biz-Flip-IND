import{r as l,j as e,y as j}from"./app-SffcvnXz.js";import w from"./LeadStatusBtn-CCcxHHKH.js";import"./server.browser-Bkw8dUqm.js";import{M as o}from"./Modal-DGqWhGwL.js";import v from"./Lead-qSLPjQfn.js";import{P as c}from"./PermissionAllow-C2vX6ItO.js";import"./useMergedRefs-XxFL2mk3.js";import"./useWindow-h7aJFNcs.js";import"./BootstrapModalManager-DIAOfY0Q.js";import"./Fade-CeSJ_QV3.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-sd__IyW0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./InputError-BvC2ptgE.js";function H({leads:d,confirmDelete:m,minimal:n=!1,searchResult:a}){const[p,i]=l.useState(!1),[u,b]=l.useState(null);l.useState("Lead details");const f=()=>i(!1),t=async s=>{b(s),i(!0)},h=s=>{i(!1),j.put(route("account.leads.update",s.id),{status:"responded"}),a()},x=s=>{i(!1),j.put(route("account.leads.update",s.id),{status:"sold"}),a()};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{show:p,onHide:f,centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"Lead Details"})}),e.jsx(o.Body,{children:e.jsx(v,{lead:u,attendLead:h,sold:x})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Client"}),e.jsx("th",{children:e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("th",{scope:"col",children:"Message"})})})]}),e.jsx("th",{scope:"col",children:"Ad"}),e.jsx("th",{scope:"col",children:"Date time"}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"})]}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.length?e.jsx(e.Fragment,{children:d.map(s=>e.jsxs("tr",{children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>t(s),children:e.jsxs("div",{children:[s.firstname," ",s.lastname]})}),e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("td",{className:"text-overflow mw-200",onClick:r=>t(s),children:s.message})})]}),e.jsxs("td",{onClick:r=>t(s),children:[e.jsx("div",{className:"text-overflow w-40",children:s.ad.title}),!n&&e.jsx("div",{className:"small text-muted",children:s.ad.city})]}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{className:"text-overflow w-40",children:s.date_text})}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{className:"text-overflow w-40",children:s.email})}),e.jsx("td",{onClick:r=>t(s),children:s.phone})]}),e.jsx("td",{children:e.jsx(w,{attendLead:h,sold:x,lead:s})}),e.jsxs("td",{children:[e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("button",{onClick:r=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})}),!n&&e.jsx(c,{permission:"Ad Lead Edit",children:e.jsx("button",{onClick:r=>m(s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{H as default};
