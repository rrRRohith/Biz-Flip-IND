import{W as j,r as v,j as e,Y as b,a as r}from"./app-Cksvl5er.js";import"./Dropdown-VEgez_ti.js";import"./index-Bk1VfZ7k.js";import{P as N}from"./PermissionAllow-Ce_0d2Qw.js";import g from"./Wrapper-Bsno47X-.js";import{I as f}from"./InputError-DoaSVOfD.js";import"./Header-Dpr57kmI.js";import"./ProfileDropdown-B_lh-9wV.js";import"./Dropdown-CIaqrQda.js";import"./listen-DWsycqH6.js";import"./useWindow-BALqw6zz.js";import"./Anchor-BJO8hJNl.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-BqIpHI82.js";import"./ReactToastify-1VlLDSZ-.js";function G({ticket:a,messages:t,auth:n,success:i,error:l}){const{data:d,setData:o,post:c,errors:m,reset:x}=j({message:"",_method:"PUT"});v.useState("");const u=(s,h)=>{o(s,h)},p=async s=>{s.preventDefault(),await c(route("seller.tickets.update",a.id),{preserveScroll:!0,onSuccess:()=>{x("message")}})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:`Support Ticket#${a.id}`}),e.jsx(g,{user:n.user,success:i,error:l,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[a.status=="solved"&&e.jsxs("div",{className:"alert alert-warning rounded-input border-0",children:["This ticket has been closed and is no longer active, if you need any further assitance please open another ticket and mention your ticket ",e.jsxs("strong",{children:["ID#",a.id]})]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{className:"text-xl font-bold",children:["Support Ticket#",a.id]}),e.jsx("div",{className:"ms-auto",children:e.jsxs(r,{href:route("seller.tickets.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex flex-row-reverse",children:[e.jsx("div",{className:"alert-primary alert p-0 text-primary ms-2 rounded-circle d-flex align-items-center message-avatar",children:e.jsx("div",{className:"m-auto fond-bold text-md",children:a.sender_name.substring(0,1)})}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"small",children:a.date_text}),e.jsxs("div",{className:"message alert alert-primary rounded-input mb-3",children:["You opened ticket at with ",a.priority,".",e.jsxs("div",{children:["Subject.",a.subject]})]})]})]}),t.data.map(s=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:`d-flex ${s.is_sender?"flex-row-reverse":""}`,children:[e.jsx("div",{className:`d-flex rounded-circle align-items-center message-avatar alert p-0 ${s.is_sender?"ms-2 alert-primary":"me-2 alert-secondary"}`,children:e.jsx("div",{className:"m-auto font-bold text-md",children:s.sender_name.substring(0,1)})}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:`${s.is_sender?"text-end":"text-start"} small`,children:[s.is_sender?"":s.sender_name," ",s.date_text]}),e.jsx("div",{className:`${s.is_sender?"alert-primary text-end ms-auto":"me-auto text-start text-dark alert-secondary"} alert rounded-input message w-auto alert rounded-input mb-3`,children:s.message})]})]})}))]}),e.jsx(N,{permission:"Support Ticket Edit",children:a.status=="open"?e.jsx("form",{onSubmit:p,children:e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Your message"}),e.jsx("textarea",{value:d.message,name:"message",id:"message",onChange:s=>{u("message",s.target.value)},placeholder:"Tell us about how can we help you!",className:"form-control"}),e.jsx(f,{message:m.message}),e.jsx("div",{className:"text-muted small",children:"Describe how we can help you. You can also attach images, docuements etc."})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(r,{href:route("seller.tickets.index"),role:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Send message"})]})]})}):e.jsxs("div",{className:"alert alert-warning rounded-input border-0",children:["This ticket has been closed and is no longer active, if you need any further assitance please open another ticket and mention your ticket ",e.jsxs("strong",{children:["ID#",a.id]})]})})]})})})})]})}export{G as default};
