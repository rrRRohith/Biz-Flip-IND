import{r,W as d,j as e,S as u,Y as x,a as h,b as j}from"./app-BP1ASY9m.js";import"./Dropdown-ErKsyKJB.js";import"./index-B-nPVonw.js";import{P as f}from"./PermissionAllow-DDRUKtYh.js";import N from"./Wrapper-CtZlV-wj.js";import"./index-BXwcN5c5.js";/* empty css                                  */import b from"./Tickets-UdxwfArb.js";import"./Header-BZ-9vGGb.js";import"./ProfileDropdown-CjyUniTY.js";import"./Dropdown-CuM2Misa.js";import"./useMergedRefs-C7i9xQs_.js";import"./useWindow-CjeW6bh8.js";import"./NavbarContext-Ci8xUASw.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-paLV-kgH.js";import"./ReactToastify-DsLGQMwT.js";import"./TopMenu-CkaAGnno.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";function H({auth:i,tickets:o}){const[c,s]=r.useState(!1),[n,m]=r.useState(o.data),{data:a,setData:l}=d({q:""}),p=async()=>{s(!0);const t=await j.get(route("account.tickets.search",a));m(t.data),s(!1)};return e.jsxs(e.Fragment,{children:[c&&e.jsx(u,{}),e.jsx(x,{title:"Support tickets"}),e.jsx(N,{user:i.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{className:"",children:"Stay informed and in control of your support requests. Easily create new tickets, track their status, search for past cases, and prioritize urgent issues. Our user-friendly interface makes it simple to communicate with our support team and receive timely assistance."}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:a.q,onChange:t=>l("q",t.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:t=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(f,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(h,{className:"btn btn-primary text-overflow",href:route("account.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx(b,{ticketData:n})]})})]})})})})]})}export{H as default};
