import{j as a,a as l}from"./app-DeIulrNp.js";import d from"./ProfileDropdown-BkhfP03_.js";import"./PermissionAllow-D4mDavJj.js";import{d as o}from"./index-B_47ad35.js";const n=(e,s)=>new RegExp(`^${s.replace(/\*/g,".*")}$`).test(e),t=()=>{o.Inertia.post(route("logout"))},b=({user:e})=>{const s=window.location.pathname;return a.jsx(a.Fragment,{children:a.jsx("nav",{className:"navbar show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0",id:"navbarVertical",children:a.jsxs("div",{className:"container-fluid px-3 px-lg-4",children:[a.jsx("button",{className:"navbar-toggler ms-n2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarCollapse","aria-controls":"sidebarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("a",{className:"navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-none d-lg-block text-center",href:"/",children:a.jsx("img",{src:"/logo.png",alt:"..."})}),a.jsx("div",{className:"me-auto ms-3 d-lg-none"}),a.jsx("div",{className:"ms-auto me-3 d-lg-none",children:a.jsx("a",{className:"fw-semibold btn btn-primary btn-sm",href:"/",children:"Home"})}),a.jsx("div",{className:"navbar-user d-lg-none",children:a.jsxs("div",{className:"dropdown",children:[a.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a.jsxs("div",{className:"avatar-parent-child",children:[a.jsx("img",{alt:"Image Placeholder",src:e.picture_url,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),a.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),a.jsx("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"sidebarAvatar",children:a.jsx(d,{user:e})})]})}),a.jsxs("div",{className:"collapse navbar-collapse",id:"sidebarCollapse",children:[a.jsx("div",{className:"mt-auto"}),a.jsxs("div",{className:"mb-5 text-center d-none d-lg-block",children:[a.jsx("img",{alt:"Image Placeholder",src:e.picture_url,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar-big rounded-circle border-2 border-light rounded-circle"}),a.jsxs("div",{className:"text-center text-md font-bold mt-3",children:[e.firstname," ",e.lastname]})]}),a.jsxs("ul",{className:"navbar-nav p-0 px-lg-3",children:[a.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/customer")||n(s,"/customer/chats*")?"bg-gray-100":""}`,children:a.jsxs(l,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("customer.index"),children:[a.jsx("i",{class:"bi bi-chat-left-dots"})," Messages"]})}),a.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/customer/profile*")?"bg-gray-100":""}`,children:a.jsxs(l,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("customer.profile.index"),children:[a.jsx("i",{className:"bi bi-person"})," Profile"]})}),a.jsx("li",{className:`nav-item rounded-0 rounded-lg-3 mb-2 ${n(s,"/customer/password")?"bg-gray-100":""}`,children:a.jsxs(l,{className:"nav-link text-md rounded-0 rounded-lg-3",href:route("customer.password.index"),children:[a.jsx("i",{class:"bi bi-shield-lock"})," Security"]})}),a.jsx("li",{className:"nav-item rounded-0 rounded-lg-3 mb-2",children:a.jsxs(l,{className:"nav-link text-md rounded-0 rounded-lg-3",onClick:t,children:[a.jsx("i",{className:"bi bi-power"})," Logout"]})})]}),a.jsx("div",{className:"mb-auto"})]})]})})})};export{b as default};
