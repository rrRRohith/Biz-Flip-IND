import{r,W as C,j as e,Y as _,S as D,b as q}from"./app-BGtL1idN.js";import"./Dropdown-DDOkRdOL.js";import"./index-BRq7hUFn.js";import{P as h}from"./PermissionAllow-BAFgtCD_.js";import E from"./Wrapper-uZVDDIdX.js";import"./index-V_QR55fH.js";/* empty css                                  */import"./server.browser-D_-0_A4a.js";import{M as i}from"./Modal-CxTqWPKr.js";import P from"./Invoice-gm9rY1jk.js";import F from"./PlanError-DkgEQpgR.js";import"./Header-CpdR-JbE.js";import"./ProfileDropdown-BwVM8N8v.js";import"./Dropdown-BXLrSV09.js";import"./useMergedRefs-Dg_ayAfe.js";import"./SSRProvider-BlUcPW8O.js";import"./useWindow-DVdbgo_X.js";import"./NavbarContext-De51xqev.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-B1x0Gbjx.js";import"./ReactToastify-BO42l_97.js";import"./TopMenu-D9HhmkIM.js";import"./Footer-BbIG-Wxb.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-CYKKLntR.js";import"./Fade-CLSnjR4s.js";import"./index-WDzcDGFf.js";function he({auth:x,invoices:p,current_invoice:j,newInvoice:n}){const[o,u]=r.useState(p.data),{data:l,setData:b}=C({q:""}),v=async()=>{c(!0);const s=await q.get(route("account.invoices.search",l));u(s.data),c(!1)},[f,c]=r.useState(!1),[N,d]=r.useState(!1),[g,y]=r.useState(null),[w,k]=r.useState("Invoice"),[m,S]=r.useState(""),I=()=>d(!1),t=async s=>{y(s),k("Invoice #"+s.invoice_no),S(s.id),d(!0)};return r.useEffect(()=>{n&&t(n)},[n]),e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Invoices"}),e.jsx(h,{permission:"Invoice View",children:e.jsxs(i,{size:"lg",show:N,onHide:I,centered:!0,children:[e.jsx(i.Header,{closeButton:!0,children:e.jsx(i.Title,{children:w})}),e.jsx(i.Body,{children:e.jsx(P,{invoice:g})}),e.jsxs(i.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("account.invoices.print",m),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("account.invoices.download",m),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(E,{user:x.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"d-flex",children:e.jsx("div",{className:"text-xl font-bold",children:"Invoices"})}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[e.jsx(F,{current_invoice:j}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:l.q,onChange:s=>b("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>v(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:o.length?e.jsx(e.Fragment,{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:a=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:a=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:["$",s.price," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsxs("div",{children:["$",s.total_amount]})}),e.jsx("td",{children:e.jsxs(h,{permission:"Invoice View",children:[e.jsx("button",{onClick:a=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("account.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),f&&e.jsx(D,{})]})]})}export{he as default};
