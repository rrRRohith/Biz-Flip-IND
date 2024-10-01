import{r as o,j as s,Y as y,a as d}from"./app-BsOJghhl.js";import"./Dropdown-BYzwnsEO.js";import"./index-DkcNz8M8.js";import{P as r}from"./PermissionAllow-YX3Tka-N.js";import k from"./Wrapper-C2MOBHOB.js";import L from"./LeadsTable-821oXJWh.js";import T from"./Tickets-CUAfdk6f.js";import M from"./AdsTable-C2pQOgkm.js";import S from"./Graphs-0RE2kA0J.js";import{M as e}from"./Modal-B1cnOn8-.js";import P from"./SettingsFormMininal-C2lBpeEs.js";import A from"./PlanError-Cbu2L7s9.js";import B from"./PlanForm-7Ma9mXar.js";import"./Header-CQbeWHhR.js";import"./ProfileDropdown-D4mOfFQ6.js";import"./Dropdown-DrWaoWjp.js";import"./useMergedRefs-BTu5Tfsf.js";import"./SSRProvider-CLPcrxiC.js";import"./useWindow-BMkORsZB.js";import"./NavbarContext-BWF44MDB.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BFMfi9dG.js";import"./ReactToastify-2rcHb9Do.js";import"./TopMenu-DuD2N9_7.js";import"./Footer-D8p53Sn3.js";import"./SocialLinks-D4aIjqkN.js";import"./LeadStatusBtn-K3A4kLIq.js";import"./server.browser-DNwyyT94.js";import"./Lead-D9IkU8Xk.js";import"./InputError-yWYu4p-W.js";import"./AdStatusBtn-DsPdTtbi.js";import"./AdAction-BF1B4Hbf.js";import"./BootstrapModalManager-BbI2tKKn.js";import"./Fade-o5JNLu4S.js";import"./index-BSd_Xglo.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./react-apexcharts.min-BSIlXGG_.js";/* empty css              */import"./react-select.esm-C4QHfAis.js";import"./Select-49a62830.esm-BKRU5Dry.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CVLQRJoG.js";import"./hoist-non-react-statics.cjs-Chw3-TuI.js";import"./react-gmap-picker.esm-BNN-3WyY.js";import"./useMask-BiZZ6Hzv.js";function Ms({API_KEY:t,plans:n,showPlanForm:m,showAgentForm:x,auth:h,data:i,leads:p,tickets:j,ads:u,current_invoice:a,seller:v,province_options:N}){const[b,f]=o.useState(!0),[w,g]=o.useState(!0),l=()=>f(!1),c=()=>g(!1);return s.jsxs(s.Fragment,{children:[x&&s.jsxs(e,{size:"lg",backdrop:"static",keyboard:!1,show:b,onHide:l,centered:!0,children:[s.jsx(e.Header,{closeButton:!0,children:s.jsx(e.Title,{children:"Update company settings"})}),s.jsx(e.Body,{children:s.jsx(P,{API_KEY:t,handleClose:l,seller:v,province_options:N})})]}),m&&s.jsxs(e,{size:"xl",backdrop:"static",keyboard:!1,show:w,onHide:c,centered:!0,children:[s.jsx(e.Header,{closeButton:!0,children:s.jsx(e.Title,{children:"Purchase advertising plans"})}),s.jsx(e.Body,{children:s.jsx(B,{current_invoice:a,handleClose:c,plans:n})})]}),s.jsx(y,{title:"Dashboard"}),s.jsx(k,{user:h.user,children:s.jsx("main",{className:"py-6",children:s.jsxs("div",{className:"container-fluid px-3",children:[s.jsx("div",{className:"mb-10",children:"Track the performance of your ads, including daily views and leads, and view detailed metrics like lead-to-view ratios. Manage your active subscriptions and monitor your most viewed ads and recent leads."}),s.jsx(A,{current_invoice:a}),s.jsxs("div",{className:"row g-6",children:[s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.ads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"My ads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.ads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-building-fill-check"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Leads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.leads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-send-check-fill"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Views"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.views})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-eye"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col text-overflow",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2 text-overflow",children:"Views to lead ratio"}),s.jsxs("span",{className:"h3 font-bold mb-0",children:[i.view_lead_ratio,"%"]})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-warning text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-percent"})})})]})})})})})]}),s.jsx("div",{children:s.jsx(S,{})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(r,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Latest leads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(L,{minimal:!0,leads:p.data})})})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(r,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Most viewd ads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(M,{minimal:!0,ads:u.data})})})]})}),s.jsx("div",{className:"col-md-12",children:s.jsxs(r,{permission:"Support Ticket Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Recent tickets"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(T,{minimal:!0,ticketData:j.data})})})]})})]})]})})})]})}export{Ms as default};