import{r,W as C,j as e,Y as _,S as P,b as D}from"./app-R6y9gL3g.js";import"./Dropdown-DgAiWIoo.js";import"./index-CU6KdK5U.js";import{P as h}from"./PermissionAllow-D4BwgB5q.js";import q from"./Wrapper-Cm6k7W4r.js";import"./index-BORELF9y.js";/* empty css                                  */import"./server.browser-DtCr4Hk6.js";import{M as i}from"./Modal-CXcZHr5_.js";import E from"./Invoice-Ds4kFnFs.js";import F from"./PlanError-CpDAryZa.js";import"./Header-KE5JtzG3.js";import"./ProfileDropdown-Cu_HU6gU.js";import"./Dropdown-BlSHQWGn.js";import"./useMergedRefs-C3t7vQZD.js";import"./SSRProvider-xBs2tMT7.js";import"./useWindow-DRSLSfK6.js";import"./NavbarContext-DQxyGIWx.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-DAW1pCwX.js";import"./ReactToastify-BMVUs_yP.js";import"./TopMenu-Bb61hu07.js";import"./Footer-CVsc1fHd.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-aBqd47xI.js";import"./Fade-q808BQ0I.js";import"./index-CeBJEy_f.js";function he({auth:x,invoices:p,current_invoice:j,newInvoice:n}){const[o,u]=r.useState(p.data),{data:l,setData:b}=C({q:""}),f=async()=>{c(!0);const s=await D.get(route("account.invoices.search",l));u(s.data),c(!1)},[v,c]=r.useState(!1),[N,d]=r.useState(!1),[g,w]=r.useState(null),[y,k]=r.useState("Invoice"),[m,S]=r.useState(""),I=()=>d(!1),t=async s=>{w(s),k("Invoice #"+s.invoice_no),S(s.id),d(!0)};return r.useEffect(()=>{n&&t(n)},[n]),e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Invoices"}),e.jsx(h,{permission:"Invoice View",children:e.jsxs(i,{size:"lg",show:N,onHide:I,centered:!0,children:[e.jsx(i.Header,{closeButton:!0,children:e.jsx(i.Title,{children:y})}),e.jsx(i.Body,{children:e.jsx(E,{invoice:g})}),e.jsxs(i.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("account.invoices.print",m),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("account.invoices.download",m),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(q,{user:x.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"d-flex",children:e.jsx("div",{className:"text-xl font-bold",children:"Invoices"})}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[e.jsx(F,{current_invoice:j}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:l.q,onChange:s=>b("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>f(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:o.length?e.jsx(e.Fragment,{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:a=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:a=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:[window.formatPrice(s.price)," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:window.formatPrice(s.total_amount)})}),e.jsx("td",{children:e.jsxs(h,{permission:"Invoice View",children:[e.jsx("button",{onClick:a=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("account.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),v&&e.jsx(P,{})]})]})}export{he as default};
