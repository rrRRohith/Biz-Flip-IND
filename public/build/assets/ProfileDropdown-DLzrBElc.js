<<<<<<<< HEAD:public/build/assets/ProfileDropdown-DLzrBElc.js
import{j as s,a as e}from"./app-DlBo-Ddu.js";import{P as i}from"./PermissionAllow-Df6yLocr.js";import{d}from"./index-BojA_d6S.js";function t({user:a}){const c=()=>{d.Inertia.post(route("logout"))};return s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"dropdown-header",children:[s.jsx("span",{className:"d-block text-sm text-muted mb-1",children:"Signed in as"}),s.jsxs("span",{className:"d-block text-heading font-semibold",children:[a.firstname," ",a.lastname]}),s.jsx("div",{class:"text-muted",children:a.email})]}),s.jsx("div",{className:"dropdown-divider"}),a.type=="customer"?s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"customer/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/customer/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"/account/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/account/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",href:"/account",children:[s.jsx("i",{class:"bi bi-speedometer me-3"}),"Dashboard "]}),s.jsx(i,{permission:"Ads Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/ads",children:[s.jsx("i",{className:"bi bi-house me-3"}),"Ads "]})}),s.jsx(i,{permission:"Ads Leads Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/leads",children:[s.jsx("i",{className:"bi bi-house-check me-3"}),"Leads "]})}),s.jsx(i,{permission:"Messages",children:s.jsxs(e,{className:"dropdown-item",href:"/account/chats",children:[s.jsx("i",{className:"bi bi-chat-left-dots me-3"}),"Messages"]})}),s.jsx(i,{permission:"Invoice List",children:s.jsxs(e,{className:"dropdown-item",href:"/account/invoices",children:[s.jsx("i",{class:"bi bi-receipt me-3"}),"Accounts "]})}),s.jsx(i,{permission:"Support Ticket Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/tickets",children:[s.jsx("i",{className:"bi bi-headset me-3"}),"Support tickets "]})}),a.is_agent&&s.jsxs(s.Fragment,{children:[s.jsx(i,{permission:"Staff Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/staffs",children:[s.jsx("i",{className:"bi bi-people me-3"}),"Staffs "]})}),s.jsx(i,{permission:"Settings",children:s.jsxs(e,{className:"dropdown-item",href:"/account/settings",children:[s.jsx("i",{className:"bi bi-gear me-3"}),"Settings "]})})]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",onClick:c,children:[s.jsx("i",{className:"bi bi-box-arrow-left me-3"}),"Logout "]})]})]})}export{t as default};
========
import{j as s,a as e}from"./app-roG2FNUw.js";import{P as i}from"./PermissionAllow-Cm40Mk8e.js";import{d}from"./index-BADdu3Kb.js";function t({user:a}){const c=()=>{d.Inertia.post(route("logout"))};return s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"dropdown-header",children:[s.jsx("span",{className:"d-block text-sm text-muted mb-1",children:"Signed in as"}),s.jsxs("span",{className:"d-block text-heading font-semibold",children:[a.firstname," ",a.lastname]}),s.jsx("div",{class:"text-muted",children:a.email})]}),s.jsx("div",{className:"dropdown-divider"}),a.type=="customer"?s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"customer/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/customer/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(e,{className:"dropdown-item",href:"/account/profile",children:[s.jsx("i",{className:"bi bi-pencil me-3"}),"Profile "]}),s.jsxs(e,{className:"dropdown-item",href:"/account/password",children:[s.jsx("i",{class:"bi bi-shield-lock me-3"}),"Security "]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",href:"/account",children:[s.jsx("i",{class:"bi bi-speedometer me-3"}),"Dashboard "]}),s.jsx(i,{permission:"Ads Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/ads",children:[s.jsx("i",{className:"bi bi-house me-3"}),"Ads "]})}),s.jsx(i,{permission:"Ads Leads Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/leads",children:[s.jsx("i",{className:"bi bi-house-check me-3"}),"Leads "]})}),s.jsx(i,{permission:"Messages",children:s.jsxs(e,{className:"dropdown-item",href:"/account/chats",children:[s.jsx("i",{className:"bi bi-chat-left-dots me-3"}),"Messages"]})}),s.jsx(i,{permission:"Invoice List",children:s.jsxs(e,{className:"dropdown-item",href:"/account/invoices",children:[s.jsx("i",{class:"bi bi-receipt me-3"}),"Accounts "]})}),s.jsx(i,{permission:"Support Ticket Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/tickets",children:[s.jsx("i",{className:"bi bi-headset me-3"}),"Support tickets "]})}),a.is_agent&&s.jsxs(s.Fragment,{children:[s.jsx(i,{permission:"Staff Listing",children:s.jsxs(e,{className:"dropdown-item",href:"/account/staffs",children:[s.jsx("i",{className:"bi bi-people me-3"}),"Staffs "]})}),s.jsx(i,{permission:"Settings",children:s.jsxs(e,{className:"dropdown-item",href:"/account/settings",children:[s.jsx("i",{className:"bi bi-gear me-3"}),"Settings "]})})]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(e,{className:"dropdown-item",onClick:c,children:[s.jsx("i",{className:"bi bi-box-arrow-left me-3"}),"Logout "]})]})]})}export{t as default};
>>>>>>>> bcdb30c4ee2f7ede093e73517a01ebb57695d351:public/build/assets/ProfileDropdown-D39kx3Nu.js
