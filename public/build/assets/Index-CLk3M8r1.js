<<<<<<<< HEAD:public/build/assets/Index-DZ1xhAUF.js
import{r as a,W as C,j as e,Y as P,a as _,S as D,b as q}from"./app-1W61cHJj.js";import"./Dropdown-ChLCVAVs.js";import"./index-BCmS9dAa.js";import{P as o}from"./PermissionAllow-Bx3DGybq.js";import F from"./Wrapper-CtLR49R1.js";import"./index-DcM7R-IT.js";/* empty css                                  */import"./server.browser-N9mLeX_X.js";import{M as n}from"./Modal-DVrnKPqa.js";import E from"./Invoice-m5IUtWG0.js";import"./Header-CY5r9c7k.js";import"./ProfileDropdown-Bq2lP1JJ.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";function oe({auth:j,invoices:p,current_invoice:i,newInvoice:l}){const[c,u]=a.useState(p.data),{data:d,setData:b}=C({q:""}),v=async()=>{m(!0);const s=await q.get(route("account.invoices.search",d));u(s.data),m(!1)},[N,m]=a.useState(!1),[f,h]=a.useState(!1),[g,w]=a.useState(null),[y,k]=a.useState("Invoice"),[x,S]=a.useState(""),I=()=>h(!1),t=async s=>{w(s),k("Invoice #"+s.invoice_no),S(s.id),h(!0)};return a.useEffect(()=>{l&&t(l)},[l]),e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Invoices"}),e.jsx(o,{permission:"Invoice View",children:e.jsxs(n,{size:"lg",show:f,onHide:I,centered:!0,children:[e.jsx(n.Header,{closeButton:!0,children:e.jsx(n.Title,{children:y})}),e.jsx(n.Body,{children:e.jsx(E,{invoice:g})}),e.jsxs(n.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("account.invoices.print",x),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("account.invoices.download",x),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(F,{user:j.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"text-xl font-bold",children:"Invoices"}),e.jsx(o,{permission:"Plan Purchase",children:e.jsx("div",{className:"ms-auto",children:e.jsx(_,{className:"btn btn-primary text-overflow",href:route("account.plans.index"),children:e.jsx("span",{className:"d-none d-md-inline",children:"Purchase new plan"})})})})]}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[i&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",e.jsx("strong",{children:i.name})," with remaining ",e.jsx("strong",{children:i.remaining_ads})," ads till ",e.jsx("strong",{children:i.expire_date})]})}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:d.q,onChange:s=>b("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>v(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:c.length?e.jsx(e.Fragment,{children:c.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:r=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:r=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:["$",s.price," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:r=>t(s),children:e.jsxs("div",{children:["$",s.total_amount]})}),e.jsx("td",{children:e.jsxs(o,{permission:"Invoice View",children:[e.jsx("button",{onClick:r=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("account.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),N&&e.jsx(D,{})]})]})}export{oe as default};
========
import{r as a,W as C,j as e,Y as P,a as _,S as D,b as q}from"./app-3mR5dcr4.js";import"./Dropdown-ZEr-Y8i8.js";import"./index-DIiL02v3.js";import{P as o}from"./PermissionAllow-DG8o1wpc.js";import F from"./Wrapper-Bgu9zrSR.js";import"./index-Cg3Cr8Ne.js";/* empty css                                  */import"./server.browser-B0i_FNag.js";import{M as n}from"./Modal-D-ju8Brs.js";import E from"./Invoice-yY_Yr2v6.js";import"./Header-_tj5AQFI.js";import"./ProfileDropdown-AkfgYUD3.js";import"./Dropdown-CdjKfX0W.js";import"./useMergedRefs-Cxa2RhTo.js";import"./useWindow-DWsydW6I.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-Ce627oE5.js";import"./ReactToastify-CLUolKJn.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BNNgC5FG.js";import"./Fade-RO9t0QGZ.js";import"./index-CXQI1DE5.js";function oe({auth:j,invoices:p,current_invoice:i,newInvoice:l}){const[c,u]=a.useState(p.data),{data:d,setData:b}=C({q:""}),v=async()=>{m(!0);const s=await q.get(route("account.invoices.search",d));u(s.data),m(!1)},[N,m]=a.useState(!1),[f,h]=a.useState(!1),[g,w]=a.useState(null),[y,k]=a.useState("Invoice"),[x,S]=a.useState(""),I=()=>h(!1),t=async s=>{w(s),k("Invoice #"+s.invoice_no),S(s.id),h(!0)};return a.useEffect(()=>{l&&t(l)},[l]),e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Invoices"}),e.jsx(o,{permission:"Invoice View",children:e.jsxs(n,{size:"lg",show:f,onHide:I,centered:!0,children:[e.jsx(n.Header,{closeButton:!0,children:e.jsx(n.Title,{children:y})}),e.jsx(n.Body,{children:e.jsx(E,{invoice:g})}),e.jsxs(n.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("account.invoices.print",x),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("account.invoices.download",x),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(F,{user:j.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"text-xl font-bold",children:"Invoices"}),e.jsx(o,{permission:"Plan Purchase",children:e.jsx("div",{className:"ms-auto",children:e.jsx(_,{className:"btn btn-primary text-overflow",href:route("account.plans.index"),children:e.jsx("span",{className:"d-none d-md-inline",children:"Purchase new plan"})})})})]}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[i&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",e.jsx("strong",{children:i.name})," with remaining ",e.jsx("strong",{children:i.remaining_ads})," ads till ",e.jsx("strong",{children:i.expire_date})]})}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:d.q,onChange:s=>b("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>v(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:c.length?e.jsx(e.Fragment,{children:c.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:r=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:r=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:["$",s.price," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:r=>t(s),children:e.jsxs("div",{children:["$",s.total_amount]})}),e.jsx("td",{children:e.jsxs(o,{permission:"Invoice View",children:[e.jsx("button",{onClick:r=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("account.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),N&&e.jsx(D,{})]})]})}export{oe as default};
>>>>>>>> c9be03ff60f4a7293e6db07ca2da3faa2a6d6e95:public/build/assets/Index-CLk3M8r1.js
