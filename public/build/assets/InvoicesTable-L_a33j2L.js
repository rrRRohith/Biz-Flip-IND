import{r as n,j as e}from"./app-xlIuIJsy.js";import{M as r}from"./Modal-BhcQKbH2.js";import"./Dropdown-Dol-GmEj.js";import"./index-BoPl_Y3N.js";import"./PermissionAllow-D1RHxqIQ.js";import"./ReactToastify-BEIb5fZt.js";import{d as s}from"./index-BBDNRDC6.js";import p from"./Invoice-BIuIcw9b.js";import"./useMergedRefs-Dgr7rqb-.js";import"./useWindow-CA08abZi.js";import"./BootstrapModalManager-DqwErLQg.js";import"./Fade-DUV1peZc.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CER1-L1P.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";function v({invoices:l}){const[a,o]=n.useState(null);n.useState(!1);const[c,h]=n.useState("Invoice"),[m,i]=n.useState(!1),x=()=>i(!1),d=async t=>{o(t),h("Invoice #"+t.invoice_no),i(!0)},j=()=>{window.print()};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{size:"lg",show:m,onHide:x,centered:!0,children:[e.jsx(r.Header,{closeButton:!0,children:e.jsx(r.Title,{children:c})}),e.jsx(r.Body,{children:e.jsx(p,{invoice:a})}),e.jsx(r.Footer,{className:"col-lg-12 text-end",children:e.jsxs("button",{onClick:j,className:"btn btn-linkedin btn-sm  text-end",children:[" ",e.jsx("i",{class:"bi bi-print"})," Print invoice"]})})]}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Inv No"}),e.jsx(s.Th,{children:"User Name"}),e.jsx(s.Th,{children:"Plan"}),e.jsx(s.Th,{children:"Price"}),e.jsx(s.Th,{children:"Payment Id"}),e.jsx(s.Th,{children:"Payment Method"}),e.jsx(s.Th,{children:"Created At"}),e.jsx(s.Th,{children:"Actions"})]})}),e.jsx(s.Tbody,{children:l.data.map(t=>e.jsxs(s.Tr,{onClick:T=>d(t),children:[e.jsx(s.Td,{children:t.id}),e.jsx(s.Td,{children:t.invoice_no}),e.jsxs(s.Td,{children:[t.seller.firstname," ",t.seller.lastname]}),e.jsx(s.Td,{children:t.name}),e.jsx(s.Td,{children:t.price}),e.jsx(s.Td,{children:t.payment_id}),e.jsx(s.Td,{children:t.payment_method}),e.jsx(s.Td,{children:t.created_at}),e.jsx(s.Td,{children:e.jsx("button",{className:"btn btn-transparent",onClick:()=>d(t),children:e.jsx("i",{className:"bi bi-eye"})})})]},t.id))})]})})})]})}export{v as default};
