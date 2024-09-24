import{r as a,W as C,j as e,Y as P,a as _,S as D,b as q}from"./app-CdcX4MyJ.js";import"./Dropdown-CuiSu6LE.js";import"./index-BJNnkTVo.js";import{P as o}from"./PermissionAllow-caSI3ojy.js";import F from"./Wrapper-C1yBoe1J.js";import"./index-CKvHKld-.js";/* empty css                                  */import"./server.browser-BazK1gVm.js";import{M as n}from"./Modal-0nvZwhxf.js";import E from"./Invoice-BEzFM15T.js";import"./Header-C658lYlW.js";import"./ProfileDropdown-BNqGz02g.js";import"./Dropdown-CR2RuJ8A.js";import"./useMergedRefs-B486IWSx.js";import"./useWindow-B4Mn1lKL.js";import"./NavbarContext-B3zFm8h7.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BtSOpUeR.js";import"./ReactToastify-DwzKbxFo.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DsrmHSXP.js";import"./BootstrapModalManager-xvHZEziN.js";import"./Fade-AP6juNIG.js";import"./inheritsLoose-B6jfs0L0.js";function oe({auth:j,invoices:p,current_invoice:i,newInvoice:l}){const[c,u]=a.useState(p.data),{data:d,setData:b}=C({q:""}),v=async()=>{m(!0);const s=await q.get(route("account.invoices.search",d));u(s.data),m(!1)},[N,m]=a.useState(!1),[f,h]=a.useState(!1),[g,w]=a.useState(null),[y,k]=a.useState("Invoice"),[x,S]=a.useState(""),I=()=>h(!1),t=async s=>{w(s),k("Invoice #"+s.invoice_no),S(s.id),h(!0)};return a.useEffect(()=>{l&&t(l)},[l]),e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Invoices"}),e.jsx(o,{permission:"Invoice View",children:e.jsxs(n,{size:"lg",show:f,onHide:I,centered:!0,children:[e.jsx(n.Header,{closeButton:!0,children:e.jsx(n.Title,{children:y})}),e.jsx(n.Body,{children:e.jsx(E,{invoice:g})}),e.jsxs(n.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("account.invoices.print",x),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("account.invoices.download",x),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(F,{user:j.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"text-xl font-bold",children:"Invoices"}),e.jsx(o,{permission:"Plan Purchase",children:e.jsx("div",{className:"ms-auto",children:e.jsx(_,{className:"btn btn-primary text-overflow",href:route("account.plans.index"),children:e.jsx("span",{className:"d-none d-md-inline",children:"Purchase new plan"})})})})]}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[i&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",e.jsx("strong",{children:i.name})," with remaining ",e.jsx("strong",{children:i.remaining_ads})," ads till ",e.jsx("strong",{children:i.expire_date})]})}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:d.q,onChange:s=>b("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>v(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:c.length?e.jsx(e.Fragment,{children:c.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:r=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:r=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:["$",s.price," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:r=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:r=>t(s),children:e.jsxs("div",{children:["$",s.total_amount]})}),e.jsx("td",{children:e.jsxs(o,{permission:"Invoice View",children:[e.jsx("button",{onClick:r=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("account.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),N&&e.jsx(D,{})]})]})}export{oe as default};
