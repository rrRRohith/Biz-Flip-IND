import{j as e,a}from"./app-DvZEQs7q.js";import d from"./ProfileDropdown-1F0lxis-.js";import{P as r}from"./PermissionAllow-DjiL2LeK.js";import{d as t}from"./index-DeYRaHSg.js";const n=(l,s)=>new RegExp(`^${s.replace(/\*/g,".*")}$`).test(l),o=()=>{t.Inertia.post(route("logout"))},b=({user:l})=>{const s=window.location.pathname;return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"navbar show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0",id:"navbarVertical",children:e.jsxs("div",{className:"container-fluid px-3 px-lg-4",children:[e.jsx("button",{className:"navbar-toggler ms-n2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarCollapse","aria-controls":"sidebarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("a",{className:"navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-none d-lg-block text-center",href:"/",children:e.jsx("img",{src:"/logo.png",alt:"..."})}),e.jsx("div",{className:"me-auto ms-3 d-lg-none",children:e.jsx(r,{permission:"Ad Create",children:e.jsx(a,{className:"btn btn-primary btn-sm text-overflow",href:route("seller.ads.create"),children:"Place an ad"})})}),e.jsx("div",{className:"ms-auto me-3 d-lg-none",children:e.jsx("a",{className:"fw-semibold btn btn-primary btn-sm",href:"/",children:"Home"})}),e.jsx("div",{className:"navbar-user d-lg-none",children:e.jsxs("div",{className:"dropdown",children:[e.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsxs("div",{className:"avatar-parent-child",children:[e.jsx("img",{alt:"Image Placeholder",src:l.picture_url,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),e.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),e.jsx("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"sidebarAvatar",children:e.jsx(d,{user:l})})]})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"sidebarCollapse",children:[e.jsx("div",{className:"mt-auto"}),e.jsxs("div",{className:"mb-5 text-center d-none d-lg-block",children:[e.jsx("img",{alt:"Image Placeholder",src:l.picture_url,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar-big rounded-circle border-2 border-light rounded-circle"}),e.jsxs("div",{className:"text-center text-md font-bold mt-3",children:[l.firstname," ",l.lastname]})]}),e.jsxs("ul",{className:"navbar-nav p-0 px-lg-3",children:[e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/seller")?"bg-gray-100":""}`,children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("seller.index"),children:[e.jsx("i",{className:"bi bi-speedometer"})," Dashboard"]})}),e.jsx(r,{permission:"Ads Listing",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/seller/ads*")?"bg-gray-100":""}`,children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("seller.ads.index"),children:[e.jsx("i",{className:"bi bi-house"})," Ads"]})})}),e.jsx(r,{permission:"Ads Leads Listing",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/seller/leads*")?"bg-gray-100":""}`,children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("seller.leads.index"),children:[e.jsx("i",{className:"bi bi-house-check"})," Leads"]})})}),e.jsx(r,{permission:"Messages",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/seller/chats*")?"bg-gray-100":""}`,children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("seller.chats.index"),children:[e.jsx("i",{className:"bi bi-chat-left-dots"})," Messages"]})})}),e.jsx(r,{permission:"Staff Listing",children:l.is_agent&&e.jsxs("li",{className:"nav-item rounded-0 rounded-lg-3 mb-2",children:[e.jsxs("a",{className:`nav-link text-md rounded-0 rounded-lg-3 ${n(s,"/seller/staffs*")?"bg-gray-100":""}`,href:"#sidebar-staffs","data-bs-toggle":"collapse",role:"button","aria-expanded":"true","aria-controls":"sidebar-settings",children:[e.jsx("i",{className:"bi bi-people"})," Staff management "]}),e.jsx("div",{className:`collapse ${n(s,"/seller/staffs*")?"show":""}`,id:"sidebar-staffs",style:{},children:e.jsxs("ul",{className:"nav nav-sm flex-column",children:[e.jsx("li",{className:"nav-item",children:e.jsx(a,{href:route("seller.staffs.index"),className:"nav-link",children:"Staffs"})}),e.jsx(r,{permission:"Role and Responsibilities Listing",children:e.jsx("li",{className:"nav-item",children:e.jsx(a,{href:route("seller.roles.index"),className:"nav-link",children:"Roles"})})})]})})]})}),e.jsx(r,{permission:"Support Ticket Listing",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/seller/tickets*")?"bg-gray-100":""}`,children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("seller.tickets.index"),children:[e.jsx("i",{className:"bi bi-headset"})," Support tickets"]})})}),e.jsx(r,{permission:"Settings",children:l.is_agent&&e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/seller/settings*")?"bg-gray-100":""}`,children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("seller.settings.index"),children:[e.jsx("i",{className:"bi bi-gear"})," Settings"]})})}),e.jsx("li",{className:"nav-item rounded-0 rounded-lg-3 mb-2",children:e.jsxs(a,{className:"nav-link text-md rounded-0 rounded-lg-3",onClick:o,children:[e.jsx("i",{className:"bi bi-power"})," Logout"]})})]}),e.jsx("div",{className:"mb-auto"})]})]})})})};export{b as default};
