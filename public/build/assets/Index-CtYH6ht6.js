import{r as a,W as d,j as e,S as u,Y as x,a as h,b as j}from"./app-nM40PByU.js";import"./Dropdown-CBGA4HX4.js";import"./index-C-AhLGLq.js";import{P as f}from"./PermissionAllow-Bdr1zOp1.js";import N from"./Wrapper-BGjPDlya.js";import"./index-0QzPbxII.js";/* empty css                                  */import b from"./Tickets-atI9hu71.js";import"./Header-BtjnGAe7.js";import"./ProfileDropdown-BiNUKgF1.js";import"./Dropdown-Q3F5L1HX.js";import"./listen-B0xvoyQk.js";import"./useWindow-Dc_LvRuG.js";import"./Anchor-IJqCzHoa.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-CILpDDOS.js";import"./ReactToastify-BYbCVDOU.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DofFlkVg.js";function G({auth:i,tickets:o}){const[c,t]=a.useState(!1),[n,l]=a.useState(o.data),{data:r,setData:m}=d({q:""}),p=async()=>{t(!0);const s=await j.get(route("seller.tickets.search",r));l(s.data),t(!1)};return e.jsxs(e.Fragment,{children:[c&&e.jsx(u,{}),e.jsx(x,{title:"Support tickets"}),e.jsx(N,{user:i.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{className:"",children:"Stay informed and in control of your support requests. Easily create new tickets, track their status, search for past cases, and prioritize urgent issues. Our user-friendly interface makes it simple to communicate with our support team and receive timely assistance."}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:r.q,onChange:s=>m("q",s.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(f,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(h,{className:"btn btn-primary text-overflow",href:route("seller.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx(b,{ticketData:n})]})})]})})})})]})}export{G as default};