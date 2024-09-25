import{W as v,r as i,j as e,Y as f,a as n,R as g,y}from"./app-0W1APbZD.js";import{A as w}from"./AdminAuthenticated-C0hlx0vw.js";import{I as k}from"./InputError-BTdU5CJ-.js";import"./Dropdown-CW2G7CTq.js";import"./AdminHeader-D0hVflSJ.js";import"./PermissionAllow-XOsh9qMJ.js";import"./Dropdown-BmG8wlXD.js";import"./useMergedRefs-HxUQZzs9.js";import"./SSRProvider-BeKkBxRJ.js";import"./useWindow-BVM9NObz.js";import"./NavbarContext-DZLMWwwg.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BE_wqAHt.js";import"./BootstrapModalManager--MDj59b2.js";import"./Fade-DuU66Ubb.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DrR2ekXN.js";import"./ToastNotification-Cpprh-6R.js";import"./ReactToastify-DCaH1Z7c.js";function J({ticket:a,messages:r,auth:l,success:c=null,error:d=null}){const{data:o,setData:m,post:x,errors:h,reset:u}=v({message:"",_method:"PUT"}),t=i.useRef(null),p=(s,N)=>{m(s,N)},j=async s=>{s.preventDefault(),await x(route("admin.support-tickets.update",a.id),{preserveScroll:!0,onSuccess:()=>{u("message")}})},b=s=>{window.confirm("Are you sure you want to close the ticket?")&&y.post(route("admin.support-tickets.close-ticket",s))};return i.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[r]),e.jsxs(w,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Support Tickets"}),success:c,error:d,children:[e.jsx(f,{title:"Support Tickets List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsxs("div",{className:"me-auto",children:[e.jsxs("h4",{className:"page-title",children:["Support Tickets #",a.ticket_no]}),e.jsx("br",{}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs("a",{href:"/",children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx("a",{href:"{route('admin.support-tickets.index')}",children:"Support Tickets"})}),e.jsxs("li",{className:"breadcrumb-item active","aria-current":"page",children:["#",a.ticket_no]})]})})})]})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(n,{href:route("admin.support-tickets.index"),className:"btn btn-danger",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"col-12",children:[a.status==="solved"&&e.jsxs("div",{className:"alert alert-warning rounded-input border-0",children:["This ticket has been closed and is no longer active. If you need any further assistance, please open another ticket and mention your ticket ",e.jsxs("strong",{children:["ID#",a.id]}),"."]}),e.jsxs("div",{className:"message alert text-white bg-bitbucket rounded-input mb-3",children:[e.jsx("div",{className:"small float-end pb-2",children:a.date_text}),e.jsxs("i",{children:["You opened ticket at with ",a.priority,".",e.jsxs("div",{children:["Subject: ",a.subject]})]})]})]}),e.jsx("div",{className:"box mt-3",children:e.jsx("div",{className:"box-body",style:{maxHeight:"350px",overflowY:"auto"},children:r&&r.data&&r.data.length>0?r.data.map(s=>e.jsx(g.Fragment,{children:e.jsx("div",{className:`d-flex ${s.is_sender?"":"flex-row-reverse"}`,children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`d-flex rounded-circle align-items-center message-avatar alert p-0 ${s.is_sender?"me-2 alert-secondary":"ms-2 alert-primary"}`,children:e.jsx("div",{className:"m-auto font-bold text-md",children:s.sender_name.substring(0,1)})}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:`${s.is_sender?"text-start":"text-end"} small`,children:[s.is_sender?s.sender_name:""," ",s.date_text]}),e.jsx("div",{className:`${s.is_sender?"me-auto text-start text-dark alert-secondary":"alert-primary text-end ms-auto"} alert rounded-input message w-auto alert rounded-input mb-3`,children:s.message})]})]})},s.id)},s.id)):e.jsx("div",{children:"No messages available."})})}),a.status=="open"?e.jsx("form",{onSubmit:j,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-10",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label form-group__label",children:"Your message"}),e.jsx("textarea",{value:o.message,name:"message",id:"message",onChange:s=>{p("message",s.target.value)},placeholder:"Tell us about how can we help you!",className:"form-control"}),e.jsx(k,{message:h.message})]})}),e.jsx("div",{className:"col-lg-2  align-content-center",children:e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-send"}),"Send message"]}),e.jsxs("span",{onClick:s=>b(a.id),className:"btn btn-warning",children:[e.jsx("i",{className:"bi bi-x"}),"Close Ticket"]})]})})]})}):e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"alert alert-warning rounded-input border-0",children:["This ticket has been closed and is no longer active, if you need any further assitance please open another ticket and mention your ticket ",e.jsxs("strong",{children:["ID#",a.id]})]}),e.jsx("div",{className:"ms-auto text-end mt-3",children:e.jsx(n,{href:route("admin.support-tickets.reopen",a.id),className:"btn btn-success",children:"Reopen Ticket"})})]})]})})})]})})]})}export{J as default};
