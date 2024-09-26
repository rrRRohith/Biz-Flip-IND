import{r as o,j as s,Y as y,a as d}from"./app-m6jwzREc.js";import"./Dropdown-De-CftB8.js";import"./index-DoH87g0J.js";import{P as a}from"./PermissionAllow-DFKxE1No.js";import k from"./Wrapper-BDmbUgRz.js";import L from"./LeadsTable--00GpnqP.js";import T from"./Tickets-CeYZIYov.js";import M from"./AdsTable-CtMl4VEI.js";import S from"./Graphs-BiMRqGAe.js";import{M as e}from"./Modal-Dyn_Q01z.js";import P from"./SettingsFormMininal-1otomerV.js";import A from"./PlanError-DMUawsVL.js";import B from"./PlanForm-BZRGYjee.js";import"./Header-BgyePXWS.js";import"./ProfileDropdown-DxLUntg8.js";import"./Dropdown-DZe-wPe9.js";import"./useMergedRefs-Txjd5-DZ.js";import"./SSRProvider-D3QKeGVy.js";import"./useWindow-DjWiBSqy.js";import"./NavbarContext-DmJk-5Ir.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-DDdeHOU8.js";import"./ReactToastify-BUp-Yjnc.js";import"./TopMenu-CSn-rCfy.js";import"./Footer-DXVMIJ87.js";import"./LeadStatusBtn-B-AwDw9P.js";import"./server.browser-DS1y3QtU.js";import"./Lead-Dfu1R2y0.js";import"./InputError--WutcOn4.js";import"./AdStatusBtn-CiDTO4De.js";import"./AdAction-BWDtxkpc.js";import"./BootstrapModalManager-C4GqAccA.js";import"./Fade-CGtw0FQ8.js";import"./index-vBzHIoDB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./react-apexcharts.min-H2MAaDHN.js";/* empty css              */import"./react-select.esm-C4l9KfHj.js";import"./Select-49a62830.esm-B5h1ngej.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-DvY3Merc.js";import"./hoist-non-react-statics.cjs-r4hCWOT5.js";import"./react-gmap-picker.esm-DBzh7sV4.js";import"./Plans-BpL199eN.js";function Ts({API_KEY:t,plans:n,showPlanForm:m,showAgentForm:x,auth:h,data:i,leads:p,tickets:j,ads:u,current_invoice:l,seller:v,province_options:N}){const[b,f]=o.useState(!0),[w,g]=o.useState(!0),r=()=>f(!1),c=()=>g(!1);return s.jsxs(s.Fragment,{children:[x&&s.jsxs(e,{size:"lg",backdrop:"static",keyboard:!1,show:b,onHide:r,centered:!0,children:[s.jsx(e.Header,{closeButton:!0,children:s.jsx(e.Title,{children:"Update company settings"})}),s.jsx(e.Body,{children:s.jsx(P,{API_KEY:t,handleClose:r,seller:v,province_options:N})})]}),m&&s.jsxs(e,{size:"xl",backdrop:"static",keyboard:!1,show:w,onHide:c,centered:!0,children:[s.jsx(e.Header,{closeButton:!0,children:s.jsx(e.Title,{children:"Purchase advertising plans"})}),s.jsx(e.Body,{children:s.jsx(B,{current_invoice:l,handleClose:c,plans:n})})]}),s.jsx(y,{title:"Dashboard"}),s.jsx(k,{user:h.user,children:s.jsx("main",{className:"py-6",children:s.jsxs("div",{className:"container-fluid px-3",children:[s.jsx("div",{className:"mb-10",children:"Track the performance of your ads, including daily views and leads, and view detailed metrics like lead-to-view ratios. Manage your active subscriptions and monitor your most viewed ads and recent leads."}),s.jsx(A,{current_invoice:l}),s.jsxs("div",{className:"row g-6",children:[s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.ads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"My ads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.ads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-building-fill-check"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Leads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.leads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-send-check-fill"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Views"}),s.jsx("span",{className:"h3 font-bold mb-0",children:i.views})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-eye"})})})]})})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx(d,{href:route("account.leads.index"),children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col text-overflow",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2 text-overflow",children:"Views to lead ratio"}),s.jsxs("span",{className:"h3 font-bold mb-0",children:[i.view_lead_ratio,"%"]})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-warning text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-percent"})})})]})})})})})]}),s.jsx("div",{children:s.jsx(S,{})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(a,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Latest leads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(L,{minimal:!0,leads:p.data})})})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(a,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Most viewd ads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(M,{minimal:!0,ads:u.data})})})]})}),s.jsx("div",{className:"col-md-12",children:s.jsxs(a,{permission:"Support Ticket Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Recent tickets"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(T,{minimal:!0,ticketData:j.data})})})]})})]})]})})})]})}export{Ts as default};
