import{W as p,r as x,j as e,Y as j,a as c}from"./app-BsOJghhl.js";import"./Dropdown-BYzwnsEO.js";import"./index-DkcNz8M8.js";import"./PermissionAllow-YX3Tka-N.js";import b from"./Wrapper-C2MOBHOB.js";import{I as l}from"./InputError-yWYu4p-W.js";import"./Header-CQbeWHhR.js";import"./ProfileDropdown-D4mOfFQ6.js";import"./Dropdown-DrWaoWjp.js";import"./useMergedRefs-BTu5Tfsf.js";import"./SSRProvider-CLPcrxiC.js";import"./useWindow-BMkORsZB.js";import"./NavbarContext-BWF44MDB.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BFMfi9dG.js";import"./ReactToastify-2rcHb9Do.js";import"./TopMenu-DuD2N9_7.js";import"./Footer-D8p53Sn3.js";import"./SocialLinks-D4aIjqkN.js";const v=[{label:"Low",value:"low",description:"Product questions"},{label:"Medium",value:"medium",description:"General support"},{label:"High",value:"high",description:"Application errors"}];function A({auth:n,success:o,error:m}){const{data:r,setData:d,post:u,errors:a,reset:g}=p({subject:"",message:"",priority:"low"});x.useState("");const t=(s,i)=>{d(s,i)},h=async s=>{s.preventDefault(),await u(route("account.tickets.store"))};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Open new ticket"}),e.jsx(b,{user:n.user,success:o,error:m,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:"Open new ticket"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(c,{href:route("account.tickets.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsx("form",{onSubmit:h,children:e.jsxs("div",{className:"row g-5",children:[e.jsx("div",{className:"mb-0",children:e.jsx("h4",{children:"Subject and message"})}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Subject"})," ",e.jsx("span",{class:"text-danger",children:" *"}),e.jsx("input",{value:r.subject,onChange:s=>{t("subject",s.target.value)},placeholder:"Enter your subject",className:"form-control"}),e.jsx(l,{message:a.subject}),e.jsx("div",{className:"small text-muted",children:"Right subject will help us assign right team member to your ticket."})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Your message"})," ",e.jsx("span",{class:"text-danger",children:" *"}),e.jsx("textarea",{onChange:s=>{t("message",s.target.value)},placeholder:"Tell us about how can we help you!",className:"form-control",children:r.message}),e.jsx(l,{message:a.message}),e.jsx("div",{className:"text-muted small",children:"Describe how we can help you. You can also attach images, docuements etc."})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Priority"})}),e.jsx("div",{className:"",children:v.map(s=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"radio",id:`priority_${s.value}`,checked:r.priority==s.value,value:s.value,onChange:i=>{t("priority",i.target.value)}}),e.jsx("label",{role:"button",className:"mt-1 font-bold",htmlFor:`priority_${s.value}`,children:s.label})]}),e.jsx("div",{className:"mb-3",children:s.description})]}))}),e.jsx(l,{message:a.priority})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(c,{href:route("account.tickets.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Open new ticket"})]})]})})})]})})})})]})}export{A as default};
