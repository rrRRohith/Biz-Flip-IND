import{r as p,j as s,Y as v,a as N}from"./app-roG2FNUw.js";import"./Dropdown-CBoT_l1M.js";import"./index-BADdu3Kb.js";import{P as l}from"./PermissionAllow-Cm40Mk8e.js";import b from"./Wrapper-PPnQg89C.js";import u from"./LeadsTable-C8DCTlNs.js";import f from"./Tickets-C9vNtrPl.js";import w from"./AdsTable-77g8XeGk.js";import g from"./Graphs-DYbWHEXy.js";import{M as a}from"./Modal-CoaYMI_-.js";import y from"./SettingsFormMininal-5J3OvFOs.js";import"./Header-CiIeRvA2.js";import"./ProfileDropdown-D39kx3Nu.js";import"./Dropdown-Bctdksvb.js";import"./useMergedRefs-CmHmiumL.js";import"./useWindow-Degt0VVA.js";import"./NavbarContext-CzESW6Li.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-C7CNvKRm.js";import"./ReactToastify-B_HsxkDQ.js";import"./LeadStatusBtn-B-OliRL2.js";import"./server.browser-ClVAtjXT.js";import"./Lead-CCquZZmf.js";import"./InputError-Jzku-OSV.js";import"./AdStatusBtn-sbsB8CZx.js";import"./AdAction-DMiVRF76.js";import"./BootstrapModalManager-CJOGpHN0.js";import"./Fade-AzVfb9Pt.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BhalhK_u.js";import"./react-apexcharts.min-BWMG543K.js";/* empty css              */import"./react-select.esm-GrO0h9QA.js";import"./Select-49a62830.esm-CinIhGgm.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-CKqmVXxi.js";import"./hoist-non-react-statics.cjs-DQXGR7Nj.js";function ms({showAgentForm:r,auth:c,data:e,leads:t,tickets:o,ads:n,current_invoice:i,seller:m,province_options:x}){const[h,j]=p.useState(!0),d=()=>j(!1);return s.jsxs(s.Fragment,{children:[r&&s.jsxs(a,{size:"lg",backdrop:"static",keyboard:!1,show:h,onHide:d,centered:!0,children:[s.jsx(a.Header,{closeButton:!0,children:s.jsx(a.Title,{children:"Hello"})}),s.jsx(a.Body,{children:s.jsx(y,{handleClose:d,seller:m,province_options:x})})]}),s.jsx(v,{title:"Dashboard"}),s.jsx(b,{user:c.user,children:s.jsx("main",{className:"py-6",children:s.jsxs("div",{className:"container-fluid px-3",children:[s.jsx("div",{className:"mb-10",children:"Track the performance of your ads, including daily views and leads, and view detailed metrics like lead-to-view ratios. Manage your active subscriptions and monitor your most viewed ads and recent leads."}),i?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",s.jsx("strong",{children:i.name})," with remaining ",s.jsx("strong",{children:i.remaining_ads})," ads till ",s.jsx("strong",{children:i.expire_date})]})}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"alert alert-danger mb-5",children:["You dont have any active subscriptions. Please ",s.jsx(N,{href:route("account.plans.index"),children:"purchase "}),"new plan to create new ads."]})}),s.jsxs("div",{className:"row g-6",children:[s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"My ads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.ads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-building-fill-check"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Leads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.leads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-send-check-fill"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Views"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.views})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-eye"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col text-overflow",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2 text-overflow",children:"Views to lead ratio"}),s.jsxs("span",{className:"h3 font-bold mb-0",children:[e.view_lead_ratio,"%"]})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-warning text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-percent"})})})]})})})})]}),s.jsx("div",{children:s.jsx(g,{})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(l,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Latest leads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(u,{minimal:!0,leads:t.data})})})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(l,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Most viewd ads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(w,{minimal:!0,ads:n.data})})})]})}),s.jsx("div",{className:"col-md-12",children:s.jsxs(l,{permission:"Support Ticket Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Recent tickets"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(f,{minimal:!0,ticketData:o.data})})})]})})]})]})})})]})}export{ms as default};
