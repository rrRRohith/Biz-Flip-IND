import{r as o,j as s,Y as y,a as d}from"./app-DLXOGcZi.js";import"./Dropdown-BzQaryl-.js";import"./index-DRfxNIt4.js";import{P as a}from"./PermissionAllow-FjCSE7Fq.js";import k from"./Wrapper-KqCoG1sh.js";import L from"./LeadsTable-CeuaiTGS.js";import T from"./Tickets-DupK_ivF.js";import M from"./AdsTable-fHQuwM7t.js";import S from"./Graphs-CoDro7Ar.js";import{M as e}from"./Modal-Dhutz5BA.js";import P from"./SettingsFormMininal-BTgeH9Uf.js";import A from"./PlanError-CbMfOUBc.js";import B from"./PlanForm-CGvERyDc.js";import"./Header-iWLcsGuZ.js";import"./ProfileDropdown-CNaTrhvE.js";import"./Dropdown-DoBBUR4m.js";import"./useMergedRefs-BtIKzljZ.js";import"./SSRProvider-BEKAir0L.js";import"./useWindow-BsXDL-p9.js";import"./NavbarContext-B4gA4rQT.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-CfEM5l5i.js";import"./ReactToastify-B0j25eZ5.js";import"./TopMenu-D7r3AiSl.js";import"./Footer-rFEbk-bU.js";import"./LeadStatusBtn-DIicv2D_.js";import"./server.browser-DjKQyHHI.js";import"./Lead-VhuNHMi1.js";import"./InputError-DIMp_WVY.js";import"./AdStatusBtn-eXsNHYoC.js";import"./AdAction-Bhca6xeX.js";import"./BootstrapModalManager-duh7bGD7.js";import"./Fade-DoodeI9j.js";import"./index-rRSUnOEs.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./react-apexcharts.min-Dh1mcZAC.js";/* empty css              */import"./react-select.esm-CHGhcu4T.js";import"./Select-49a62830.esm-BP3jXN8-.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CXBwkEfE.js";import"./hoist-non-react-statics.cjs-DWxBPR1j.js";import"./react-gmap-picker.esm-Dk63GK_1.js";function Ls({API_KEY:t,plans:n,showPlanForm:m,showAgentForm:x,auth:h,data:i,leads:j,tickets:p,ads:u,current_invoice:l,seller:v,province_options:N}){const[b,f]=o.useState(!0),[w,g]=o.useState(!0),r=()=>f(!1),c=()=>g(!1);return s.jsxs(s.Fragment,{children:[x&&s.jsxs(e,{size:"lg",backdrop:"static",keyboard:!1,show:b,onHide:r,centered:!0,children:[s.jsx(e.Header,{closeButton:!0,children:s.jsx(e.Title,{children:"Update company settings"})}),s.jsx(e.Body,{children:s.jsx(P,{API_KEY:t,handleClose:r,seller:v,province_options:N})})]}),m&&s.jsxs(e,{size:"xl",backdrop:"static",keyboard:!1,show:w,onHide:c,centered:!0,children:[s.jsx(e.Header,{closeButton:!0,children:s.jsx(e.Title,{children:"Purchase advertising plans"})}),s.jsx(e.Body,{children:s.jsx(B,{current_invoice:l,handleClose:c,plans:n})})]}),s.jsx(y,{title:"Dashboard"}),s.jsx(k,{user:h.user,children:s.jsx("main",{className:"py-6",children:s.jsxs("div",{className:"container-fluid px-3",children:[s.jsx("div",{className:"mb-10",children:"Track the performance of your ads, including daily views and leads, and view detailed metrics like lead-to-view ratios. Manage your active subscriptions and monitor your most viewed ads and recent leads."}),s.jsx(A,{current_invoice:l}),s.jsxs("div",{className:"row g-6",children:[s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.ads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"My ads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.ads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-building-fill-check"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Leads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.leads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-send-check-fill"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Views"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.views})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-eye"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col text-overflow",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2 text-overflow",children:"Views to lead ratio"}),s.jsxs("span",{className:"h3 font-bold mb-0",children:[i.view_lead_ratio,"%"]})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-warning text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-percent"})})})]})})})})})]}),s.jsx("div",{children:s.jsx(S,{})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(a,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Latest leads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(L,{minimal:!0,leads:j.data})})})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(a,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Most viewd ads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(M,{minimal:!0,ads:u.data})})})]})}),s.jsx("div",{className:"col-md-12",children:s.jsxs(a,{permission:"Support Ticket Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Recent tickets"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(T,{minimal:!0,ticketData:p.data})})})]})})]})]})})})]})}export{Ls as default};