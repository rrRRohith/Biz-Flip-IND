import{j as s,a as e}from"./app-nM40PByU.js";import{P as i}from"./PermissionAllow-Bdr1zOp1.js";import{d as a}from"./index-C-AhLGLq.js";function c({user:r}){const l=()=>{a.Inertia.post(route("logout"))};return s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"dropdown-header",children:[s.jsx("span",{className:"d-block text-sm text-muted mb-1",children:"Signed in as"}),s.jsxs("span",{className:"d-block text-heading font-semibold",children:[r.firstname," ",r.lastname]})]}),s.jsx("div",{className:"dropdown-divider"}),r.type=="customer"?s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"customer/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/customer/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"/seller/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/seller/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",href:"/seller",children:[s.jsx("i",{class:"bi bi-speedometer me-3"}),"Dashboard "]}),s.jsx(i,{permission:"Ads Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/ads",children:[s.jsx("i",{className:"bi bi-house me-3"}),"Ads "]})}),s.jsx(i,{permission:"Ads Leads Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/leads",children:[s.jsx("i",{className:"bi bi-house-check me-3"}),"Leads "]})}),s.jsx(i,{permission:"Messages",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/chats",children:[s.jsx("i",{className:"bi bi-chat-left-dots me-3"}),"Messages"]})}),s.jsx(i,{permission:"Plan Purchase",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/plans",children:[s.jsx("i",{class:"bi bi-currency-dollar me-3"}),"Plans "]})}),s.jsx(i,{permission:"Invoice List",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/invoices",children:[s.jsx("i",{class:"bi bi-receipt me-3"}),"Invoices "]})}),s.jsx(i,{permission:"Support Ticket Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/tickets",children:[s.jsx("i",{className:"bi bi-headset me-3"}),"Support tickets "]})}),s.jsx(i,{permission:"Staff Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/staffs",children:[s.jsx("i",{className:"bi bi-people me-3"}),"Staffs "]})}),s.jsx(i,{permission:"Role and Responsibilities Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/staffs/roles",children:[s.jsx("i",{class:"bi bi-person-gear me-3"}),"Staff roles "]})}),s.jsx(i,{permission:"Settings",children:s.jsxs(e,{className:"dropdown-item",href:"/seller/settings",children:[s.jsx("i",{className:"bi bi-gear me-3"}),"Settings "]})}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",onClick:l,children:[s.jsx("i",{className:"bi bi-box-arrow-left me-3"}),"Logout "]})]})]})}export{c as default};
