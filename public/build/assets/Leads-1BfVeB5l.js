import{r as i,W as x,j as e,S as h,Y as u,b as j}from"./app-DUUes-Qe.js";import"./Dropdown-CFmbVfto.js";import"./index-BzWycOG-.js";import"./PermissionAllow-a6rJKmWW.js";import v from"./Wrapper-CmKRsvxI.js";import b from"./LeadsTable-7BrSV0Vd.js";import{S as f}from"./react-select.esm-_8J5l9wT.js";import"./SideBar-XH0J0a7H.js";import"./ProfileDropdown-CvQ1wisH.js";import"./Header-DeJlKGev.js";import"./ToastNotification-Cn01RQ_-.js";import"./LeadStatusBtn-Djq34g1Z.js";import"./server.browser-Bq3EySzD.js";import"./Modal-GfOXL3US.js";import"./listen-8kQ8eSJE.js";import"./useWindow-BvcGFOsK.js";import"./Fade-DrSkmKeO.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-B97ufHi8.js";import"./index-BgGHsYll.js";import"./Lead-CfVwl7Aa.js";import"./useStateManager-7e1e8489.esm-D26xKiTS.js";import"./extends-B6xKY8K9.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./emotion-react.browser.esm-BGHy7EY5.js";function P({auth:l,leads:o,ads:m}){const[d,s]=i.useState(!1),[n,c]=i.useState(o.data),{data:t,setData:r}=x({ad:"",ad_title:"All ads",q:""}),p=async()=>{s(!0);const a=await j.get(route("seller.leads.search",t));c(a.data),s(!1)};return e.jsxs(e.Fragment,{children:[d&&e.jsx(h,{}),e.jsx(u,{title:"Leads"}),e.jsx(v,{user:l.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-xl vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Leads"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:t.q,onChange:a=>r("q",a.target.value),type:"search",placeholder:"Search by name, phone etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"",children:e.jsx(f,{defaultValue:{value:t.ad,label:t.ad_title},onChange:a=>r("ad",a.value),options:[{label:"All ads",value:""},...m]})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:a=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx(b,{leads:n})]})})]})})})})]})}export{P as default};
