import{q as i,j as a,a as s}from"./app-hKBUMLe1.js";import c from"./ProfileDropdown-B5ZTvGwX.js";import"./PermissionAllow-DHgXbBFu.js";import{D as r}from"./Dropdown-BfH5VE4C.js";import"./index-CasjjZNO.js";import"./useMergedRefs-C-7sqODX.js";import"./useWindow-9aWrHFBt.js";import"./NavbarContext-osRKzuZ_.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";const g=({user:n})=>{i().props;const{notifications:l}=i().props;return a.jsx("nav",{className:"navbar seller-top-navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top",children:a.jsxs("div",{className:"container px-3",children:[a.jsx("button",{className:"navbar-toggler me-2 border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("a",{className:"navbar-brand me-auto",href:"/",children:a.jsx("img",{src:"/logo.png",alt:"..."})}),a.jsxs(r,{className:"d-block d-lg-none",children:[a.jsx(r.Toggle,{as:"a",href:"#",className:"nav-item ps-2 text-dark ms-2 position-relative",children:a.jsxs("li",{className:"dropdown notifications-menu",children:[a.jsx("span",{className:"label fw-bold text-dark label-dark seller-count",children:l.length}),a.jsx("a",{href:"#",className:"waves-effect text-dark waves-light",title:"Notifications",children:a.jsx("span",{className:"bi bi-bell fs-20"})})]})}),l.length>0&&a.jsx(r.Menu,{className:"animated flipInX",children:l.map((e,t)=>a.jsx(r.Item,{href:e.redirection,title:e.subject,children:truncateText(e.subject,20)},t))})]}),a.jsx("div",{className:"navbar-user d-block d-lg-none ms-2",children:a.jsxs("div",{className:"dropdown",children:[a.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a.jsxs("div",{className:"avatar-parent-child",children:[a.jsx("img",{alt:"Image Placeholder",src:n.picture_url,onError:e=>{e.target.onerror=null,e.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),a.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),a.jsx("div",{className:"dropdown-menu dropdown-menu-end profile-dropdown","aria-labelledby":"sidebarAvatar",children:a.jsx(c,{user:n})})]})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:a.jsxs("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 align-items-center",children:[a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.index"),children:"Dashboard"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.ads.index"),children:"Ads"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.leads.index"),children:"Leads"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.chats.index"),children:"Messages"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.invoices.index"),children:"Accounts"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.tickets.index"),children:"Support"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.staffs.index"),children:"Staffs"})}),a.jsx("li",{className:"nav-item me-auto",children:a.jsx(s,{className:"nav-link p-2",href:route("account.settings.index"),children:"Settings"})}),a.jsx("li",{className:"d-none d-lg-block",children:a.jsxs(r,{children:[a.jsx(r.Toggle,{as:"a",href:"#",className:"nav-item ps-2 text-dark ms-2 position-relative",children:a.jsxs("li",{className:"dropdown notifications-menu",children:[a.jsx("span",{className:"label fw-bold text-dark label-dark seller-count",children:l.length}),a.jsx("a",{href:"#",className:"waves-effect text-dark waves-light",title:"Notifications",children:a.jsx("span",{className:"bi bi-bell fs-20"})})]})}),l.length>0&&a.jsx(r.Menu,{className:"animated flipInX",children:l.map((e,t)=>a.jsx(r.Item,{href:e.redirection,title:e.subject,children:truncateText(e.subject,20)},t))})]})}),a.jsx("li",{className:"nav-item ps-2 ms-2 d-none d-lg-block",children:a.jsx("div",{className:"navbar-user",children:a.jsxs("div",{className:"dropdown",children:[a.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a.jsxs("div",{className:"avatar-parent-child",children:[a.jsx("img",{alt:"Image Placeholder",src:n.picture_url,onError:e=>{e.target.onerror=null,e.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),a.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),a.jsx("div",{className:"dropdown-menu dropdown-menu-end profile-dropdown","aria-labelledby":"sidebarAvatar",children:a.jsx(c,{user:n})})]})})})]})})]})})};export{g as default};
