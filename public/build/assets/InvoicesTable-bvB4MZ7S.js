import{r as n,j as e}from"./app-SffcvnXz.js";import{M as r}from"./Modal-DGqWhGwL.js";import"./Dropdown-z9EH4xl8.js";import"./index-DVC7WBiR.js";import"./PermissionAllow-C2vX6ItO.js";import"./ReactToastify-DoajG6XW.js";import{d as s}from"./index-SOfQ1Wmw.js";import p from"./Invoice-C1-1A_aU.js";import"./useMergedRefs-XxFL2mk3.js";import"./useWindow-h7aJFNcs.js";import"./BootstrapModalManager-DIAOfY0Q.js";import"./Fade-CeSJ_QV3.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-sd__IyW0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-DfGK67Ds.js";import"./defineProperty-yZu_Kmkx.js";function v({invoices:d}){const[a,o]=n.useState(null);n.useState(!1);const[c,h]=n.useState("Invoice"),[m,i]=n.useState(!1),x=()=>i(!1),l=async t=>{o(t),h("Invoice #"+t.invoice_no),i(!0)},j=()=>{window.print()};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{size:"lg",show:m,onHide:x,centered:!0,children:[e.jsx(r.Header,{closeButton:!0,children:e.jsx(r.Title,{children:c})}),e.jsx(r.Body,{children:e.jsx(p,{invoice:a})}),e.jsx(r.Footer,{className:"col-lg-12 text-end",children:e.jsxs("button",{onClick:j,className:"btn btn-linkedin btn-sm  text-end",children:[" ",e.jsx("i",{class:"bi bi-print"})," Print invoice"]})})]}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Inv No"}),e.jsx(s.Th,{children:"Seller Name"}),e.jsx(s.Th,{children:"Plan"}),e.jsx(s.Th,{children:"Price"}),e.jsx(s.Th,{children:"Payment Id"}),e.jsx(s.Th,{children:"Payment Method"}),e.jsx(s.Th,{children:"Created At"}),e.jsx(s.Th,{children:"Actions"})]})}),e.jsx(s.Tbody,{children:d.data.map(t=>e.jsxs(s.Tr,{onClick:T=>l(t),children:[e.jsx(s.Td,{children:t.id}),e.jsx(s.Td,{children:t.invoice_no}),e.jsxs(s.Td,{children:[t.seller.firstname," ",t.seller.lastname]}),e.jsx(s.Td,{children:t.name}),e.jsx(s.Td,{children:t.price}),e.jsx(s.Td,{children:t.payment_id}),e.jsx(s.Td,{children:t.payment_method}),e.jsx(s.Td,{children:t.created_at}),e.jsx(s.Td,{children:e.jsx("button",{className:"btn btn-transparent",onClick:()=>l(t),children:e.jsx("i",{className:"bi bi-eye"})})})]},t.id))})]})})})]})}export{v as default};
