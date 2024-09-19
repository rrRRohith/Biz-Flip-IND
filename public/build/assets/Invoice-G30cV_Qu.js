import{j as s}from"./app-BRfyC3Dx.js";function a({invoice:e}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
        `}),s.jsxs("div",{className:"invoiceContainer p-2",children:[s.jsxs("div",{className:"row align-items-top mb-5",children:[s.jsx("div",{className:"col-3 me-auto",children:s.jsx("img",{src:"/logo.png",alt:"..."})}),s.jsxs("div",{className:"col-9 ms-auto text-end",children:[s.jsx("h1",{children:"INVOICE"}),s.jsxs("div",{children:["Date ",e.invoice_date]})]})]}),s.jsxs("div",{className:"my-5 row",children:[s.jsxs("div",{className:"col-6",children:[s.jsx("div",{className:"font-bolder mb-2",children:"BILL TO"}),s.jsxs("div",{className:"mb-2",children:[e.address.firstname," ",e.address.lastname]}),e.address.address?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mb-1",children:[e.address.address,", ",e.address.city]}),s.jsxs("div",{className:"mb-1",children:[e.address.province,", ",e.address.postalcode]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mb-1",children:e.address.phone}),s.jsx("div",{className:"mb-1",children:e.address.email})]})]}),s.jsxs("div",{className:"col-6 text-end",children:[s.jsxs("div",{className:"mb-1",children:["Invoice no. ",s.jsxs("strong",{children:["#",e.invoice_no]})]}),s.jsxs("div",{className:"mb-1",children:["Date. ",s.jsx("strong",{children:e.invoice_date})]}),s.jsxs("div",{className:"mb-1",children:["Subscription tenure. ",s.jsx("strong",{children:e.invoice_date})," to ",s.jsx("strong",{children:e.expire_date})]})]})]}),s.jsx("div",{className:"font-bolder mb-2 ",children:"INVOICE SUMMERY"}),s.jsx("div",{className:"mb-5",children:s.jsxs("table",{className:"table w-full table-bordered",children:[s.jsxs("tr",{children:[s.jsx("th",{className:"font-bold py-2 border-top-0 ps-2",children:"Description"}),s.jsx("th",{className:"font-bold text-end py-2 border-top-0 pe-2",children:"Price"})]}),s.jsxs("tr",{children:[s.jsxs("td",{className:"py-2 border-bot ps-2",children:[e.name,s.jsx("br",{}),e.ads," ads | $",e.price,"/ ",e.duration," month"]}),s.jsxs("td",{className:"text-end py-2 pe-2",children:["$",e.price]})]})]})}),s.jsxs("div",{className:"text-end text-lg mb-3",children:[s.jsxs("div",{className:"mb-2",children:["Sub total. ",s.jsxs("strong",{children:["$",e.price]})]}),s.jsxs("div",{className:"mb-2",children:["Tax amount. ",s.jsxs("strong",{children:["$",e.tax_amount]})]}),s.jsxs("div",{className:"mb-2",children:["Grand total. ",s.jsxs("strong",{children:["$",e.total_amount]})]})]}),s.jsx("div",{className:"mt-5 small",children:"Thank you for your subscription! We appreciate your continued support and look forward to providing you with excellent service."})]})]})}export{a as default};
