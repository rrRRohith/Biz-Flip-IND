import{r as l,j as e,y as x}from"./app-C7Wmsx-r.js";import f from"./LeadStatusBtn-BIjS0j8p.js";import"./server.browser-CED8a1ND.js";import{M as o}from"./Modal-Zzk52Z60.js";import g from"./Lead-CAG10mPq.js";import{P as c}from"./PermissionAllow-SWIDdt0G.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Fade-Du7pQ0im.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D1UJqtKR.js";import"./index-Chjiymov.js";import"./TransitionGroupContext-BvsyIu3A.js";function q({leads:d,confirmDelete:j,minimal:n=!1}){const[m,i]=l.useState(!1),[p,u]=l.useState(null);l.useState("Lead details");const b=()=>i(!1),t=async s=>{u(s),i(!0)},a=s=>{i(!1),x.put(route("seller.leads.update",s.id),{status:"responded"})},h=s=>{i(!1),x.put(route("seller.leads.update",s.id),{status:"sold"})};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{show:m,onHide:b,centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"Lead Details"})}),e.jsx(o.Body,{children:e.jsx(g,{lead:p,attendLead:a,sold:h})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Client"}),e.jsx("th",{children:e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("th",{scope:"col",children:"Message"})})})]}),e.jsx("th",{scope:"col",children:"Ad"}),e.jsx("th",{scope:"col",children:"Date time"}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"})]}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.length?e.jsx(e.Fragment,{children:d.map(s=>e.jsxs("tr",{children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>t(s),children:e.jsxs("div",{children:[s.firstname," ",s.lastname]})}),e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("td",{className:"text-overflow mw-200",onClick:r=>t(s),children:s.message})})]}),e.jsxs("td",{onClick:r=>t(s),children:[e.jsx("div",{children:s.ad.title}),!n&&e.jsx("div",{className:"small text-muted",children:s.ad.city})]}),e.jsx("td",{onClick:r=>t(s),children:s.date_text}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>t(s),children:s.email}),e.jsx("td",{onClick:r=>t(s),children:s.phone})]}),e.jsx("td",{children:e.jsx(f,{attendLead:a,sold:h,lead:s})}),e.jsxs("td",{children:[e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("button",{onClick:r=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})}),!n&&e.jsx(c,{permission:"Ad Lead Edit",children:e.jsx("button",{onClick:r=>j(s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{q as default};
