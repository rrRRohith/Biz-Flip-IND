import{j as e,a as s}from"./app-CVpwYE9P.js";import d from"./ProfileDropdown-DVXz1-wH.js";import{P as r}from"./PermissionAllow-CPI5K9D7.js";import{d as t}from"./index-DN9VZM2a.js";const l=(n,a)=>new RegExp(`^${a.replace(/\*/g,".*")}$`).test(n),c=()=>{t.Inertia.post(route("logout"))},u=({user:n})=>{const a=window.location.pathname;return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"navbar show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0",id:"navbarVertical",children:e.jsxs("div",{className:"container-fluid px-3 px-lg-4",children:[e.jsx("button",{className:"navbar-toggler ms-n2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarCollapse","aria-controls":"sidebarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("a",{className:"navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-none d-lg-block text-center",href:"/",children:e.jsx("img",{src:"/logo.png",alt:"..."})}),e.jsx("div",{className:"me-auto ms-3 d-lg-none",children:e.jsx(r,{permission:"Ad Create",children:e.jsx(s,{className:"btn btn-primary btn-sm text-overflow",href:route("account.ads.create"),children:"Place an ad"})})}),e.jsx("div",{className:"ms-auto me-3 d-lg-none",children:e.jsx("a",{className:"fw-semibold btn btn-primary btn-sm",href:"/",children:"Home"})}),e.jsx("div",{className:"navbar-user d-lg-none",children:e.jsxs("div",{className:"dropdown",children:[e.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsxs("div",{className:"avatar-parent-child",children:[e.jsx("img",{alt:"Image Placeholder",src:n.picture_url,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),e.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),e.jsx("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"sidebarAvatar",children:e.jsx(d,{user:n})})]})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"sidebarCollapse",children:[e.jsx("div",{className:"mt-auto"}),e.jsxs("div",{className:"mb-5 text-center d-none d-lg-block",children:[e.jsx("img",{alt:"Image Placeholder",src:n.picture_url,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar-big rounded-circle border-2 border-light rounded-circle"}),e.jsxs("div",{className:"text-center text-md font-bold mt-3",children:[n.firstname," ",n.lastname]})]}),e.jsxs("ul",{className:"navbar-nav p-0 px-lg-3",children:[e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${l(a,"/account")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("account.index"),children:[e.jsx("i",{className:"bi bi-speedometer"})," Dashboard"]})}),e.jsx(r,{permission:"Ads Listing",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${l(a,"/account/ads*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("account.ads.index"),children:[e.jsx("i",{className:"bi bi-house"})," Ads"]})})}),e.jsx(r,{permission:"Ads Leads Listing",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${l(a,"/account/leads*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("account.leads.index"),children:[e.jsx("i",{className:"bi bi-house-check"})," Leads"]})})}),e.jsx(r,{permission:"Messages",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${l(a,"/account/chats*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("account.chats.index"),children:[e.jsx("i",{className:"bi bi-chat-left-dots"})," Messages"]})})}),e.jsx(r,{permission:"Staff Listing",children:n.is_agent&&e.jsxs("li",{className:"nav-item rounded-0 rounded-lg-3 mb-2",children:[e.jsxs("a",{className:`nav-link text-md rounded-0 rounded-lg-3 ${l(a,"/account/staffs*")?"bg-gray-100":""}`,href:"#sidebar-staffs","data-bs-toggle":"collapse",role:"button","aria-expanded":"true","aria-controls":"sidebar-settings",children:[e.jsx("i",{className:"bi bi-people"})," Staff management "]}),e.jsx("div",{className:`collapse ${l(a,"/account/staffs*")?"show":""}`,id:"sidebar-staffs",style:{},children:e.jsxs("ul",{className:"nav nav-sm flex-column",children:[e.jsx("li",{className:"nav-item",children:e.jsx(s,{href:route("account.staffs.index"),className:"nav-link",children:"Staffs"})}),e.jsx(r,{permission:"Role and Responsibilities Listing",children:e.jsx("li",{className:"nav-item",children:e.jsx(s,{href:route("account.roles.index"),className:"nav-link",children:"Roles"})})})]})})]})}),e.jsx(r,{permission:"Support Ticket Listing",children:e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${l(a,"/account/tickets*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("account.tickets.index"),children:[e.jsx("i",{className:"bi bi-headset"})," Support tickets"]})})}),e.jsx(r,{permission:"Settings",children:n.is_agent&&e.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${l(a,"/account/settings*")?"bg-gray-100":""}`,children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("account.settings.index"),children:[e.jsx("i",{className:"bi bi-gear"})," Settings"]})})}),e.jsx("li",{className:"nav-item rounded-0 rounded-lg-3 mb-2",children:e.jsxs(s,{className:"nav-link text-md rounded-0 rounded-lg-3",onClick:c,children:[e.jsx("i",{className:"bi bi-power"})," Logout"]})})]}),e.jsx("div",{className:"mb-auto"})]})]})})})};export{u as default};
