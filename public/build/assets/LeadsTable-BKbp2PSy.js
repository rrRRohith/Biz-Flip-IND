import{r as l,j as e,y as j}from"./app-BLep4a_v.js";import g from"./LeadStatusBtn-1gg5xGP3.js";import"./server.browser-DxIEcy-g.js";import{M as o}from"./Modal-vq931zbM.js";import L from"./Lead-trlfmI_P.js";import{P as c}from"./PermissionAllow-Bw1nH26z.js";import"./listen-bVhbO5mt.js";import"./useWindow-CgfjH_xT.js";import"./BootstrapModalManager-Z6MjKZtp.js";import"./Fade-DuAq4uZE.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-YoWyG7So.js";function q({leads:d,confirmDelete:m,minimal:n=!1,searchResult:a}){const[p,i]=l.useState(!1),[u,b]=l.useState(null);l.useState("Lead details");const f=()=>i(!1),t=async s=>{b(s),i(!0)},h=s=>{i(!1),j.put(route("seller.leads.update",s.id),{status:"responded"}),a()},x=s=>{i(!1),j.put(route("seller.leads.update",s.id),{status:"sold"}),a()};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{show:p,onHide:f,centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"Lead Details"})}),e.jsx(o.Body,{children:e.jsx(L,{lead:u,attendLead:h,sold:x})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Client"}),e.jsx("th",{children:e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("th",{scope:"col",children:"Message"})})})]}),e.jsx("th",{scope:"col",children:"Ad"}),e.jsx("th",{scope:"col",children:"Date time"}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Phone"})]}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.length?e.jsx(e.Fragment,{children:d.map(s=>e.jsxs("tr",{children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>t(s),children:e.jsxs("div",{children:[s.firstname," ",s.lastname]})}),e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("td",{className:"text-overflow mw-200",onClick:r=>t(s),children:s.message})})]}),e.jsxs("td",{onClick:r=>t(s),children:[e.jsx("div",{children:s.ad.title}),!n&&e.jsx("div",{className:"small text-muted",children:s.ad.city})]}),e.jsx("td",{onClick:r=>t(s),children:s.date_text}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>t(s),children:s.email}),e.jsx("td",{onClick:r=>t(s),children:s.phone})]}),e.jsx("td",{children:e.jsx(g,{attendLead:h,sold:x,lead:s})}),e.jsxs("td",{children:[e.jsx(c,{permission:"Ad Lead Show",children:e.jsx("button",{onClick:r=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})}),!n&&e.jsx(c,{permission:"Ad Lead Edit",children:e.jsx("button",{onClick:r=>m(s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{q as default};
