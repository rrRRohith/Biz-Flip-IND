import{j as s,a}from"./app-CauLUyu1.js";import{P as n}from"./PermissionAllow-BB_GIEhL.js";function m({user:c}){const e=(t,r)=>new RegExp(`^${r.replace(/\*/g,".*")}$`).test(t),i=window.location.pathname;return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mt-20 bg-lighter py-0 pb-0",children:s.jsx("div",{className:"container px-3 position-relative",children:s.jsx("nav",{class:"navbar seller-top-navbar navbar-expand-lg p-0 top-menu position-relative",children:s.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent2",children:s.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 align-items-center",children:[s.jsxs(a,{className:`dropdown-item  ${e(i,"/account")?"active-link":""}`,href:"/account",children:[s.jsx("i",{class:"bi bi-speedometer me-3"})," Dashboard"]}),s.jsx(n,{permission:"Invoice List",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/invoices*")||e(i,"/account/plans*")?"active-link":""}`,href:"/account/invoices",children:[s.jsx("i",{class:"bi bi-receipt me-3"}),"Billing "]})}),s.jsx(n,{permission:"Ads Listing",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/ads*")?"active-link":""}`,href:"/account/ads",children:[s.jsx("i",{className:"bi bi-house me-3"}),"Ads "]})}),s.jsx(n,{permission:"Ads Leads Listing",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/leads*")?"active-link":""}`,href:"/account/leads",children:[s.jsx("i",{className:"bi bi-house-check me-3"}),"Leads "]})}),s.jsx(n,{permission:"Messages",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/chats*")?"active-link":""}`,href:"/account/chats",children:[s.jsx("i",{className:"bi bi-chat-left-dots me-3"}),"Messages"]})}),s.jsx(n,{permission:"Support Ticket Listing",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/tickets*")?"active-link":""}`,href:"/account/tickets",children:[s.jsx("i",{className:"bi bi-headset me-3"}),"Support "]})}),c.is_agent&&s.jsxs(s.Fragment,{children:[s.jsx(n,{permission:"Staff Listing",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/staffs*")?"active-link":""}`,href:"/account/staffs",children:[s.jsx("i",{className:"bi bi-people me-3"}),"Staffs "]})}),s.jsx(n,{permission:"Settings",children:s.jsxs(a,{className:`dropdown-item  ${e(i,"/account/settings*")?"active-link":""}`,href:"/account/settings",children:[s.jsx("i",{className:"bi bi-gear me-3"}),"Settings "]})})]})]})})})})})})}export{m as default};
