import{j as e,a as s}from"./app-BNxhFZPN.js";const r=(a,l)=>new RegExp(`^${l.replace(/\*/g,".*")}$`).test(a),n=()=>{const a=window.location.pathname;return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"navbar show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0",id:"navbarVertical",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("button",{className:"navbar-toggler ms-n2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarCollapse","aria-controls":"sidebarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("a",{className:"navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-none d-lg-block text-center",href:"#",children:e.jsx("img",{src:"https://res.cloudinary.com/rr6/image/upload/v1716203422/unnamed_1_l0br9p.png",alt:"..."})}),e.jsx("div",{className:"navbar-user d-lg-none",children:e.jsxs("div",{className:"dropdown",children:[e.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsxs("div",{className:"avatar-parent-child",children:[e.jsx("img",{alt:"Image Placeholder",src:"https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",className:"avatar avatar- rounded-circle"}),e.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),e.jsxs("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"sidebarAvatar",children:[e.jsx("a",{href:"#",className:"dropdown-item",children:"Profile"}),e.jsx("a",{href:"#",className:"dropdown-item",children:"Settings"}),e.jsx("hr",{className:"dropdown-divider"}),e.jsx("a",{href:"#",className:"dropdown-item",children:"Logout"})]})]})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"sidebarCollapse",children:[e.jsx("div",{className:"mt-auto"}),e.jsxs("div",{className:"mb-5 text-center d-none d-lg-block",children:[e.jsx("img",{alt:"Image Placeholder",src:"https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",className:"avatar avatar-big rounded-circle border-2 border-light rounded-circle"}),e.jsx("div",{className:"text-center text-md font-bold",children:"Tahlia Mooney"})]}),e.jsxs("ul",{className:"navbar-nav p-0 px-lg-3",children:[e.jsx("li",{className:`nav-item rounded-3 mb-2 ${r(a,"/seller")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-3",href:"/seller",children:[e.jsx("i",{className:"bi bi-speedometer"})," Dashboard"]})}),e.jsx("li",{className:`nav-item rounded-3 mb-2 ${r(a,"/seller/properties*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-3",href:"/seller/properties",children:[e.jsx("i",{className:"bi bi-house"})," Properties"]})}),e.jsx("li",{className:`nav-item rounded-3 mb-2 ${r(a,"/seller/leads*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-3",href:"/seller/leads",children:[e.jsx("i",{className:"bi bi-house-check"})," Leads"]})}),e.jsx("li",{className:`nav-item rounded-3 mb-2 ${r(a,"/seller/profile*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-3",href:"/seller/profile",children:[e.jsx("i",{className:"bi bi-person"})," Account"]})}),e.jsx("li",{className:`nav-item rounded-3 mb-2 ${r(a,"/seller/settings*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-3",href:"/seller/settings",children:[e.jsx("i",{className:"bi bi-gear"})," Settings"]})}),e.jsx("li",{className:"nav-item rounded-3 mb-2",children:e.jsxs(s,{className:"nav-link text-md rounded-3",href:"/logout",children:[e.jsx("i",{className:"bi bi-power"})," Logout"]})})]}),e.jsx("div",{className:"mb-auto"})]})]})})})};export{n as default};