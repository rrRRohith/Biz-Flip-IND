import{q as n,j as a}from"./app-C-YXobOe.js";import i from"./ProfileDropdown-CRfh9xOE.js";import"./PermissionAllow-DtvTqjfA.js";import{D as s}from"./Dropdown-CQoZgOke.js";import"./index-D5jd2WL2.js";import"./listen-NJRWOGU3.js";import"./useWindow-BglnbEhR.js";import"./Anchor-Cu9NdDED.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";const j=({user:l})=>{n().props;const{notifications:r}=n().props;return a.jsx("nav",{className:"navbar seller-top-navbar navbar-expand navbar-light bg-white border-bottom px-0 fixed-top",children:a.jsxs("div",{className:"container px-3 px-lg-6",children:[a.jsx("button",{className:"navbar-toggler border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("a",{className:"navbar-brand",href:"/",children:a.jsx("img",{src:"/logo.png",alt:"..."})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:a.jsxs("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 align-items-center",children:[a.jsx("li",{className:"nav-item ps-2",children:a.jsx("a",{className:"fw-semibold btn btn-primary btn-sm",href:"/",children:"Home"})}),a.jsx(a.Fragment,{children:r.length>0&&a.jsxs(s,{children:[a.jsx(s.Toggle,{as:"a",href:"#",className:"nav-item ps-2 ms-2 position-relative",children:a.jsxs("li",{className:"dropdown notifications-menu",children:[a.jsx("span",{className:"label fw-bold label-primary seller-count",children:r.length}),a.jsx("a",{href:"#",className:"waves-effect waves-light",title:"Notifications",children:a.jsx("span",{className:"bi bi-bell fs-20"})})]})}),a.jsx(s.Menu,{className:"animated flipInX",children:r.map((e,t)=>a.jsx(s.Item,{href:e.redirection,title:e.subject,children:truncateText(e.subject,20)},t))})]})}),a.jsx("li",{className:"nav-item ps-2 ms-2",children:a.jsx("div",{className:"navbar-user",children:a.jsxs("div",{className:"dropdown",children:[a.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a.jsxs("div",{className:"avatar-parent-child",children:[a.jsx("img",{alt:"Image Placeholder",src:l.picture_url,onError:e=>{e.target.onerror=null,e.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),a.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),a.jsx("div",{className:"dropdown-menu dropdown-menu-end profile-dropdown","aria-labelledby":"sidebarAvatar",children:a.jsx(i,{user:l})})]})})})]})})]})})};export{j as default};
