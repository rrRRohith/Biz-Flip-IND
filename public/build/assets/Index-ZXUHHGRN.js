import{j as e,Y as i,a as n}from"./app-CVpwYE9P.js";import"./Dropdown-P-QDNcVZ.js";import"./index-DN9VZM2a.js";import"./PermissionAllow-CPI5K9D7.js";import o from"./Wrapper-DL8-RZlH.js";import"./Header-C0WHjnMq.js";import"./ProfileDropdown-DVXz1-wH.js";import"./Dropdown-Dp0-k-F5.js";import"./useMergedRefs-CQHdrhiR.js";import"./SSRProvider-DGBg1T-M.js";import"./useWindow-DWtcNps6.js";import"./NavbarContext-7YKe9biM.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BUuELAn3.js";import"./ReactToastify-CfG5r9Q7.js";import"./TopMenu-D9BGnATh.js";function P({auth:a,plans:s,can_purchase:t}){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Plans"}),e.jsx(o,{user:a.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3",children:e.jsx("div",{className:"vstack gap-6 m-auto",children:e.jsxs("div",{className:"container p-0",children:[e.jsx("div",{className:"text-xl font-bold",children:"Choose the Perfect Ad Subscription Plan for Your Needs"}),e.jsx("div",{className:"mb-3",children:"Maximize your reach with our tailored ad subscription plans designed to suit businesses of all sizes. Whether you're looking to promote occasionally or need a consistent presence, our plans offer the flexibility and value to ensure your ads make an impact."}),e.jsx("div",{className:"alert alert-warning",children:"You can only purchase a new plan once the usage of your current plan has been fully exhausted."}),e.jsx("div",{className:"row mt-10 justify-content-center",children:s.data.length?e.jsx(e.Fragment,{children:s.data.map(r=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4",children:e.jsxs("div",{className:r.current_plan?"card position-relative rounded-3 h-full py-4 border-primary":"card position-relative rounded-3 py-4",children:[r.current_plan&&e.jsx("span",{className:"position-absolute top-0 end-0 p-1",children:e.jsxs("span",{className:"bg-secondary p-1 text-white rounded-sm small",children:["Current plan ",e.jsx("i",{class:"bi bi-exclamation-circle"})]})}),e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h5",{className:"card-title font-bolder",children:r.name}),e.jsx("div",{className:"text-primary mb-3",children:e.jsxs("h4",{className:"card-title text-primary",children:["$",r.price," ",e.jsxs("small",{children:["/ ",r.duration," month"]})," "]})}),e.jsx("p",{className:"card-text mb-3",children:r.description}),e.jsx("div",{children:r.features}),r.default!="1"&&e.jsx(e.Fragment,{children:t?e.jsxs(n,{className:"btn btn-primary mt-5 btn-sm text-overflow",href:route("account.plans.show",r.id),children:["Purchase ",r.name," ",e.jsx("i",{className:"bi bi-arrow-right"})]}):e.jsxs("button",{className:"btn btn-primary mt-5 btn-sm text-overflow",disabled:!0,children:["Purchase ",r.name," ",e.jsx("i",{className:"bi bi-arrow-right"})]})})]})]})})}))}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"alert alert-warning rounded-1 border-0 w-auto",children:"Opps, no plans found at this moment."})})})]})})})})})]})}export{P as default};
