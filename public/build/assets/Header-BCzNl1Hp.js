import{q as n,j as a,a as i}from"./app-Pjbz9rYH.js";import o from"./ProfileDropdown-tDMWrGp-.js";import{P as d}from"./PermissionAllow-BcOslNQQ.js";import{D as s}from"./Dropdown-DEtUw4_i.js";import"./index-DM2p7FV6.js";import"./listen-CXcLQhiT.js";import"./useWindow-D1noL5Ib.js";import"./Anchor-CzasrsdE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";const f=({user:r})=>{n().props;const{notifications:l}=n().props;return a.jsx("nav",{className:"navbar seller-top-navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top d-none d-lg-block",children:a.jsxs("div",{className:"container-fluid px-3 px-lg-6",children:[a.jsx("button",{className:"navbar-toggler border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),r.type!=="customer"&&a.jsx(d,{permission:"Ad Create",children:a.jsx(i,{className:"btn btn-primary btn-sm text-overflow",href:route("seller.ads.create"),children:"Place an ad"})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:a.jsxs("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 align-items-center",children:[a.jsx("li",{className:"nav-item ps-2",children:a.jsx("a",{className:"fw-semibold btn btn-primary btn-sm",href:"/",children:"Home"})}),a.jsx(a.Fragment,{children:l.length>0&&a.jsxs(s,{children:[a.jsx(s.Toggle,{as:"a",href:"#",className:"nav-item ps-2 ms-2 position-relative",children:a.jsxs("li",{className:"dropdown notifications-menu",children:[a.jsx("span",{className:"label fw-bold label-primary seller-count",children:l.length}),a.jsx("a",{href:"#",className:"waves-effect waves-light",title:"Notifications",children:a.jsx("span",{className:"bi bi-bell fs-20"})})]})}),a.jsx(s.Menu,{className:"animated flipInX",children:l.map((e,t)=>a.jsx(s.Item,{href:e.redirection,title:e.subject,children:truncateText(e.subject,20)},t))})]})}),a.jsx("li",{className:"nav-item ps-2 ms-2",children:a.jsx("div",{className:"navbar-user",children:a.jsxs("div",{className:"dropdown",children:[a.jsx("a",{href:"#",id:"sidebarAvatar",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a.jsxs("div",{className:"avatar-parent-child",children:[a.jsx("img",{alt:"Image Placeholder",src:r.picture_url,onError:e=>{e.target.onerror=null,e.target.src="/assets/admin/images/noimage.webp"},className:"avatar avatar- rounded-circle"}),a.jsx("span",{className:"avatar-child avatar-badge bg-success"})]})}),a.jsx("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"sidebarAvatar",children:a.jsx(o,{user:r})})]})})})]})})]})})};export{f as default};
