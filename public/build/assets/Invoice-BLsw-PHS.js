<<<<<<<< HEAD:public/build/assets/Invoice-BOt9jFDN.js
import{j as s}from"./app-0W1APbZD.js";function r({invoice:e}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
========
import{j as s}from"./app-CETDUQ2O.js";function r({invoice:e}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
>>>>>>>> a169e6ad0c6d73ed0d666a16a5e4b062b5695b38:public/build/assets/Invoice-BLsw-PHS.js
          @media print {
            /* Hide everything by default */
            body * {
              visibility: hidden;
            }
            
            /* Make only the print area visible */
            .invoiceContainer, .invoiceContainer * {
              visibility: visible;
            }
            .invoiceContainer {
              position: fixed;
              padding:40px 20px;
              left: 0;
              top: 0;
              width: 100%;
            }
          }
        `}),s.jsxs("div",{className:"invoiceContainer",children:[s.jsxs("div",{className:"row align-items-top mb-5",children:[s.jsx("div",{className:"col-3 me-auto",children:s.jsx("img",{src:"/logo.png",alt:"..."})}),s.jsxs("div",{className:"col-9 ms-auto text-end",children:[s.jsx("h1",{children:"INVOICE"}),s.jsxs("div",{children:["Date ",e.invoice_date]})]})]}),s.jsxs("div",{className:"my-5 row",children:[s.jsxs("div",{className:"col-6",children:[s.jsx("div",{className:"font-bolder",children:"BILL TO"}),s.jsxs("div",{children:[e.address.firstname," ",e.address.lastname]}),e.address.address?s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[e.address.address,", ",e.address.city]}),s.jsxs("div",{children:[e.address.province,", ",e.address.postalcode]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{children:e.address.phone}),s.jsx("div",{children:e.address.email})]})]}),s.jsxs("div",{className:"col-6 text-end",children:[s.jsxs("div",{className:"",children:["Invoice no. ",s.jsxs("strong",{children:["#",e.invoice_no]})]}),s.jsxs("div",{className:"",children:["Date. ",s.jsx("strong",{children:e.invoice_date})]}),s.jsxs("div",{className:"",children:["Subscription tenure. ",s.jsx("strong",{children:e.invoice_date})," to ",s.jsx("strong",{children:e.expire_date})]})]})]}),s.jsx("div",{className:"font-bolder",children:"INVOICE SUMMERY"}),s.jsx("div",{className:"mb-5",children:s.jsxs("table",{className:"table w-full table-bordered",children:[s.jsxs("tr",{children:[s.jsx("th",{className:"font-bold py-2 border-top-0",children:"Description"}),s.jsx("th",{className:"font-bold text-end py-2 border-top-0",children:"Price"})]}),s.jsxs("tr",{children:[s.jsxs("td",{className:"py-2 border-bot",children:[e.name,s.jsx("br",{}),e.ads," ads | $",e.price,"/ ",e.duration," month"]}),s.jsxs("td",{className:"text-end py-2",children:["$",e.price]})]})]})}),s.jsxs("div",{className:"text-end text-lg",children:[s.jsxs("div",{className:"",children:["Sub total. ",s.jsxs("strong",{children:["$",e.price]})]}),s.jsxs("div",{className:"",children:["Tax amount. ",s.jsxs("strong",{children:["$",e.tax_amount]})]}),s.jsxs("div",{className:"",children:["Grand total. ",s.jsxs("strong",{children:["$",e.total_amount]})]})]}),s.jsx("div",{className:"my-5 small",children:"Thank you for your subscription! We appreciate your continued support and look forward to providing you with excellent service."})]})]})}export{r as default};
