import{r as p,j as s,Y as v,a as N}from"./app-1W61cHJj.js";import"./Dropdown-ChLCVAVs.js";import"./index-BCmS9dAa.js";import{P as l}from"./PermissionAllow-Bx3DGybq.js";import b from"./Wrapper-CtLR49R1.js";import u from"./LeadsTable-BGOnBmM0.js";import f from"./Tickets-CEqiIfGn.js";import w from"./AdsTable-BJrhq100.js";import g from"./Graphs-BJCJq0T7.js";import{M as a}from"./Modal-DVrnKPqa.js";import y from"./SettingsFormMininal-DH9igmWn.js";import"./Header-CY5r9c7k.js";import"./ProfileDropdown-Bq2lP1JJ.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./LeadStatusBtn-BWJZq33A.js";import"./server.browser-N9mLeX_X.js";import"./Lead-D1MP5YWc.js";import"./InputError-BASFLVK9.js";import"./AdStatusBtn-D2UhgJtl.js";import"./AdAction-C7-aUVAL.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./react-apexcharts.min-DZgum97o.js";/* empty css              */import"./react-select.esm-BfdzhtfU.js";import"./Select-49a62830.esm-VWcMs1ZE.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-D9bVkl2G.js";import"./hoist-non-react-statics.cjs-CLxNQMLt.js";function ms({showAgentForm:r,auth:c,data:e,leads:t,tickets:o,ads:n,current_invoice:i,seller:m,province_options:x}){const[h,j]=p.useState(!0),d=()=>j(!1);return s.jsxs(s.Fragment,{children:[r&&s.jsxs(a,{size:"lg",backdrop:"static",keyboard:!1,show:h,onHide:d,centered:!0,children:[s.jsx(a.Header,{closeButton:!0,children:s.jsx(a.Title,{children:"Hello"})}),s.jsx(a.Body,{children:s.jsx(y,{handleClose:d,seller:m,province_options:x})})]}),s.jsx(v,{title:"Dashboard"}),s.jsx(b,{user:c.user,children:s.jsx("main",{className:"py-6",children:s.jsxs("div",{className:"container-fluid px-3",children:[s.jsx("div",{className:"mb-10",children:"Track the performance of your ads, including daily views and leads, and view detailed metrics like lead-to-view ratios. Manage your active subscriptions and monitor your most viewed ads and recent leads."}),i?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",s.jsx("strong",{children:i.name})," with remaining ",s.jsx("strong",{children:i.remaining_ads})," ads till ",s.jsx("strong",{children:i.expire_date})]})}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"alert alert-danger mb-5",children:["You dont have any active subscriptions. Please ",s.jsx(N,{href:route("account.plans.index"),children:"purchase "}),"new plan to create new ads."]})}),s.jsxs("div",{className:"row g-6",children:[s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"My ads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.ads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-building-fill-check"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Leads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.leads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-send-check-fill"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Views"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.views})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-eye"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col text-overflow",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2 text-overflow",children:"Views to lead ratio"}),s.jsxs("span",{className:"h3 font-bold mb-0",children:[e.view_lead_ratio,"%"]})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-warning text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-percent"})})})]})})})})]}),s.jsx("div",{children:s.jsx(g,{})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(l,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Latest leads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(u,{minimal:!0,leads:t.data})})})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(l,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Most viewd ads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(w,{minimal:!0,ads:n.data})})})]})}),s.jsx("div",{className:"col-md-12",children:s.jsxs(l,{permission:"Support Ticket Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Recent tickets"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(f,{minimal:!0,ticketData:o.data})})})]})})]})]})})})]})}export{ms as default};
