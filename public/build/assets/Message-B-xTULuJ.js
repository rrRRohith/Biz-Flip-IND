<<<<<<<< HEAD:public/build/assets/Message-B-xTULuJ.js
import{W as u,r as h,j as e}from"./app-0W1APbZD.js";import{I as j}from"./InputError-BTdU5CJ-.js";function g({chat:a,messages:t,user:l}){const{data:d,setData:r,post:n,errors:c,reset:i}=u({message:"",_method:"PUT"});h.useState("");const m=(s,x)=>{r(s,x)},o=async s=>{s.preventDefault(),await n(route(l.type=="customer"?"customer.chats.update":"seller.chats.update",a.id),{preserveScroll:!0,onSuccess:()=>{i("message"),r("message","")}})};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-3",children:e.jsx("img",{alt:"Image Placeholder",src:a.contact_image,class:"avatar avatar- rounded-circle"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-md font-bold mb-0",children:a.contact_name}),e.jsx("div",{className:"small",children:"Offline"})]})]}),e.jsx("div",{children:t.data.map(s=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:`d-flex ${s.is_sender?"flex-row-reverse":""}`,children:[e.jsx("div",{className:`d-flex rounded-circle align-items-center message-avatar alert p-0 ${s.is_sender?"ms-2 alert-primary":"me-2 alert-secondary"}`,children:e.jsx("div",{className:"m-auto font-bold text-md",children:s.sender_name.substring(0,1)})}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:`${s.is_sender?"text-end":"text-start"} small`,children:[s.is_sender?"":s.sender_name," ",s.date_text]}),e.jsx("div",{className:`${s.is_sender?"alert-primary text-end ms-auto":"me-auto text-start text-dark alert-secondary"} alert rounded-input message w-auto alert rounded-input mb-3`,children:s.message})]})]})}))}),e.jsx("form",{onSubmit:o,children:e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Your message"}),e.jsx("textarea",{value:d.message,name:"message",id:"message",onChange:s=>{m("message",s.target.value)},placeholder:"Type your message",className:"form-control"}),e.jsx(j,{message:c.message})]}),e.jsx("div",{className:"col-12 text-end",children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Send message"})})]})})]})})})})}export{g as default};
========
import{W as u,r as h,j as e}from"./app-CETDUQ2O.js";import{I as j}from"./InputError-e_Ey8jiE.js";function g({chat:a,messages:t,user:l}){const{data:d,setData:r,post:n,errors:c,reset:i}=u({message:"",_method:"PUT"});h.useState("");const m=(s,x)=>{r(s,x)},o=async s=>{s.preventDefault(),await n(route(l.type=="customer"?"customer.chats.update":"seller.chats.update",a.id),{preserveScroll:!0,onSuccess:()=>{i("message"),r("message","")}})};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-3",children:e.jsx("img",{alt:"Image Placeholder",src:a.contact_image,class:"avatar avatar- rounded-circle"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-md font-bold mb-0",children:a.contact_name}),e.jsx("div",{className:"small",children:"Offline"})]})]}),e.jsx("div",{children:t.data.map(s=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:`d-flex ${s.is_sender?"flex-row-reverse":""}`,children:[e.jsx("div",{className:`d-flex rounded-circle align-items-center message-avatar alert p-0 ${s.is_sender?"ms-2 alert-primary":"me-2 alert-secondary"}`,children:e.jsx("div",{className:"m-auto font-bold text-md",children:s.sender_name.substring(0,1)})}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:`${s.is_sender?"text-end":"text-start"} small`,children:[s.is_sender?"":s.sender_name," ",s.date_text]}),e.jsx("div",{className:`${s.is_sender?"alert-primary text-end ms-auto":"me-auto text-start text-dark alert-secondary"} alert rounded-input message w-auto alert rounded-input mb-3`,children:s.message})]})]})}))}),e.jsx("form",{onSubmit:o,children:e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Your message"}),e.jsx("textarea",{value:d.message,name:"message",id:"message",onChange:s=>{m("message",s.target.value)},placeholder:"Type your message",className:"form-control"}),e.jsx(j,{message:c.message})]}),e.jsx("div",{className:"col-12 text-end",children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Send message"})})]})})]})})})})}export{g as default};
>>>>>>>> a169e6ad0c6d73ed0d666a16a5e4b062b5695b38:public/build/assets/Message-CFFuwm5g.js
