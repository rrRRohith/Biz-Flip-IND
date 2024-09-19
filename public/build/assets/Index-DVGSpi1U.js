import{r,W as C,j as e,Y as _,S as D,b as q}from"./app-BRfyC3Dx.js";import"./Dropdown-B_6LZRZy.js";import"./index-HBQ5iSaI.js";import{P as x}from"./PermissionAllow-D3b0rCfV.js";import F from"./Wrapper-veWBD1MC.js";import"./index-SAMdlgut.js";/* empty css                                  */import"./server.browser-IsvVNULa.js";import{M as i}from"./Modal-DnKQG_94.js";import E from"./Invoice-KaEdIA4r.js";import"./Header-CflYtKEL.js";import"./ProfileDropdown-CnOU6m3g.js";import"./Dropdown-CeNp-Uqk.js";import"./listen-QsrUyOKW.js";import"./useWindow-C5eny1oX.js";import"./Anchor-DXUTz38p.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-B5LGJOqd.js";import"./ReactToastify-XPYiUc3x.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BgvI9OIL.js";import"./BootstrapModalManager-B1A6bv-t.js";import"./Fade-DecXtZfO.js";import"./inheritsLoose-1HkgTRWY.js";function ne({auth:j,invoices:p,current_invoice:l,newInvoice:n}){const[o,b]=r.useState(p.data),{data:c,setData:u}=C({q:""}),v=async()=>{d(!0);const s=await q.get(route("seller.invoices.search",c));b(s.data),d(!1)},[g,d]=r.useState(!1),[f,m]=r.useState(!1),[N,y]=r.useState(null),[w,k]=r.useState("Invoice"),[h,S]=r.useState(""),I=()=>m(!1),t=async s=>{y(s),k("Invoice #"+s.invoice_no),S(s.id),m(!0)};return r.useEffect(()=>{n&&t(n)},[n]),e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Invoices"}),e.jsx(x,{permission:"Invoice View",children:e.jsxs(i,{size:"lg",show:f,onHide:I,centered:!0,children:[e.jsx(i.Header,{closeButton:!0,children:e.jsx(i.Title,{children:w})}),e.jsx(i.Body,{children:e.jsx(E,{invoice:N})}),e.jsxs(i.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("seller.invoices.print",h),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("seller.invoices.download",h),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(F,{user:j.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Invoices"}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[l&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",e.jsx("strong",{children:l.name})," with remaining ",e.jsx("strong",{children:l.remaining_ads})," ads till ",e.jsx("strong",{children:l.expire_date})]})}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:c.q,onChange:s=>u("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>v(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:o.length?e.jsx(e.Fragment,{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:a=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:a=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:["$",s.price," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsxs("div",{children:["$",s.total_amount]})}),e.jsx("td",{children:e.jsxs(x,{permission:"Invoice View",children:[e.jsx("button",{onClick:a=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("seller.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),g&&e.jsx(D,{})]})]})}export{ne as default};