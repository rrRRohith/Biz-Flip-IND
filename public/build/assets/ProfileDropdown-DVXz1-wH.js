import{j as s,a as e}from"./app-CVpwYE9P.js";import{P as o}from"./PermissionAllow-CPI5K9D7.js";import{d}from"./index-DN9VZM2a.js";function n({user:i}){const a=()=>{d.Inertia.post(route("logout"))};return s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"dropdown-header",children:[s.jsx("span",{className:"d-block text-sm text-muted mb-1",children:"Signed in as"}),s.jsxs("span",{className:"d-block text-heading font-semibold",children:[i.firstname," ",i.lastname]}),s.jsx("div",{class:"text-muted",children:i.email})]}),s.jsx("div",{className:"dropdown-divider"}),i.type=="customer"?s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"customer/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/customer/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"/account",children:[s.jsx("i",{class:"bi bi-speedometer me-3"}),"Dashboard "]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",href:"/account/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/account/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]}),s.jsx(o,{permission:"Invoice List",children:s.jsxs(e,{className:"dropdown-item",href:"/account/invoices",children:[s.jsx("i",{class:"bi bi-receipt me-3"}),"Billing "]})}),i.is_agent&&s.jsx(s.Fragment,{}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",onClick:a,children:[s.jsx("i",{className:"bi bi-box-arrow-left me-3"}),"Logout "]})]})]})}export{n as default};
