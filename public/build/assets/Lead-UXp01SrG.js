<<<<<<<< HEAD:public/build/assets/Lead-BHOn4p7V.js
import{r as b,W as u,j as s,a as w}from"./app-BGtL1idN.js";import N from"./LeadStatusBtn-5S8VebWZ.js";import{P as i}from"./PermissionAllow-BAFgtCD_.js";import{I as g}from"./InputError-Cpiixjv0.js";function C({lead:e,attendLead:r,sold:n}){const[a,c]=b.useState(!1),{data:l,setData:d,post:o,errors:h,reset:m}=u({message:"",_method:"PUT"}),x=(t,p)=>{d(t,p)},j=async t=>{t.preventDefault(),await o(route("account.leads.respond",e.id),{preserveScroll:!0,onSuccess:()=>{m("message"),r(e)}})};return s.jsxs(s.Fragment,{children:[s.jsx("table",{className:"table table-hover table-nowrap mb-5",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"Ad."}),s.jsxs("td",{className:"font-bold whitespace-wrap",children:[e.ad.title," ",s.jsx("small",{children:e.ad.city})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Name."}),s.jsxs("td",{className:"font-bold whitespace-wrap",children:[e.firstname," ",e.lastname]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Email."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.email})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Phone."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.phone})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Date."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.date_text})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Message."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.message})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Status."}),s.jsx("td",{children:s.jsx(N,{attendLead:r,sold:n,lead:e})})]}),e.attender&&s.jsxs("tr",{children:[s.jsx("td",{children:"Attended by."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.attender})]}),e.response&&s.jsxs("tr",{children:[s.jsx("td",{children:"Response."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.response})]}),e.chat_id&&s.jsx("tr",{children:s.jsx("td",{colSpan:2,children:s.jsx(w,{href:route("account.chats.show",e.chat_id),className:"text-primary",children:"View chat"})})})]})}),e.status==0&&s.jsx(i,{permission:"Ad Lead Edit",children:s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end",children:[s.jsx("button",{onClick:t=>r(e),type:"submit",className:"btn btn-primary",children:"Mark as responded"}),s.jsx("button",{onClick:t=>c(!a),type:"submit",className:"btn ms-2 btn-secondary",children:"Send response"})]})})}),e.status==1&&s.jsx(i,{permission:"Ad Lead Edit",children:s.jsx("div",{className:"row g-5",children:s.jsx("div",{className:"col-12 text-end",children:s.jsx("button",{onClick:t=>n(e),type:"submit",className:"btn btn-primary",children:"Mark as sold"})})})}),a&&s.jsx("div",{className:"mt-10",children:s.jsx("form",{action:"",onSubmit:j,children:s.jsxs("div",{className:"row g-5",children:[s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"col-md-12",children:[s.jsx("label",{children:"Your message"}),s.jsx("textarea",{value:l.message,name:"message",id:"message",onChange:t=>{x("message",t.target.value)},placeholder:"Tell us about how can we help you!",className:"form-control"}),s.jsx(g,{message:h.message})]})}),s.jsxs("div",{className:"col-12 text-end",children:[s.jsx("button",{onClick:t=>c(!a),type:"button",className:"btn btn-secondary",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn ms-2 btn-primary",children:"Send message"})]})]})})})]})}export{C as default};
========
import{r as b,W as u,j as s,a as w}from"./app-Cv4J_obM.js";import N from"./LeadStatusBtn-BM2Rx792.js";import{P as i}from"./PermissionAllow-Dt8qbyn1.js";import{I as g}from"./InputError-ClMS-C0l.js";function C({lead:e,attendLead:r,sold:n}){const[a,c]=b.useState(!1),{data:l,setData:d,post:o,errors:h,reset:m}=u({message:"",_method:"PUT"}),x=(t,p)=>{d(t,p)},j=async t=>{t.preventDefault(),await o(route("account.leads.respond",e.id),{preserveScroll:!0,onSuccess:()=>{m("message"),r(e)}})};return s.jsxs(s.Fragment,{children:[s.jsx("table",{className:"table table-hover table-nowrap mb-5",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"Ad."}),s.jsxs("td",{className:"font-bold whitespace-wrap",children:[e.ad.title," ",s.jsx("small",{children:e.ad.city})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Name."}),s.jsxs("td",{className:"font-bold whitespace-wrap",children:[e.firstname," ",e.lastname]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Email."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.email})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Phone."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.phone})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Date."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.date_text})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Message."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.message})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Status."}),s.jsx("td",{children:s.jsx(N,{attendLead:r,sold:n,lead:e})})]}),e.attender&&s.jsxs("tr",{children:[s.jsx("td",{children:"Attended by."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.attender})]}),e.response&&s.jsxs("tr",{children:[s.jsx("td",{children:"Response."}),s.jsx("td",{className:"font-bold whitespace-wrap",children:e.response})]}),e.chat_id&&s.jsx("tr",{children:s.jsx("td",{colSpan:2,children:s.jsx(w,{href:route("account.chats.show",e.chat_id),className:"text-primary",children:"View chat"})})})]})}),e.status==0&&s.jsx(i,{permission:"Ad Lead Edit",children:s.jsx("div",{className:"row g-5",children:s.jsxs("div",{className:"col-12 text-end",children:[s.jsx("button",{onClick:t=>r(e),type:"submit",className:"btn btn-primary",children:"Mark as responded"}),s.jsx("button",{onClick:t=>c(!a),type:"submit",className:"btn ms-2 btn-secondary",children:"Send response"})]})})}),e.status==1&&s.jsx(i,{permission:"Ad Lead Edit",children:s.jsx("div",{className:"row g-5",children:s.jsx("div",{className:"col-12 text-end",children:s.jsx("button",{onClick:t=>n(e),type:"submit",className:"btn btn-primary",children:"Mark as sold"})})})}),a&&s.jsx("div",{className:"mt-10",children:s.jsx("form",{action:"",onSubmit:j,children:s.jsxs("div",{className:"row g-5",children:[s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"col-md-12",children:[s.jsx("label",{children:"Your message"}),s.jsx("textarea",{value:l.message,name:"message",id:"message",onChange:t=>{x("message",t.target.value)},placeholder:"Tell us about how can we help you!",className:"form-control"}),s.jsx(g,{message:h.message})]})}),s.jsxs("div",{className:"col-12 text-end",children:[s.jsx("button",{onClick:t=>c(!a),type:"button",className:"btn btn-secondary",children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn ms-2 btn-primary",children:"Send message"})]})]})})})]})}export{C as default};
>>>>>>>> 0489afd8f35de188ae832589e863e72546ac7e17:public/build/assets/Lead-UXp01SrG.js
