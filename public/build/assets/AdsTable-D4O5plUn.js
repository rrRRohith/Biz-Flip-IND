import{r as n,j as e,a as d,y as N}from"./app-BRka-KZj.js";import g from"./AdStatusBtn-B92GZFfP.js";import{P as i}from"./PermissionAllow-BgpLl_U7.js";import v from"./AdAction-Be4kB-n6.js";import{M as c}from"./Modal-C1QgjEjE.js";import"./useMergedRefs-CZiAms9R.js";import"./useWindow-CuNVpxSP.js";import"./BootstrapModalManager-Cjh__IM3.js";import"./Fade-CCdyyhwP.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-3O2AzmWt.js";function H({ads:a,confirmDelete:x,minimal:t=!1,searchResult:h}){const m=(s,r)=>{N.put(route("account.ads.status",s.id),{status:r}),h()},[j,o]=n.useState(!1),[p,u]=n.useState(""),[b,f]=n.useState(""),l=s=>{f(route("ads.show",s.slug)+"?embed=true"),u(s.title),o(!0)},w=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(c,{size:"xl",show:j,onHide:w,centered:!0,children:[e.jsx(c.Header,{closeButton:!0,children:e.jsx(c.Title,{children:p})}),e.jsx(c.Body,{className:"p-0",children:e.jsx("iframe",{className:"rounded-3 listframe",src:b,frameborder:"0"})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Title"}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Industry"}),e.jsx("th",{scope:"col",children:"Category"}),e.jsx("th",{scope:"col",children:"Price"})]}),e.jsx("th",{scope:"col",children:"Leads"}),e.jsx("th",{scope:"col",children:"Views"}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col"})]}),t&&e.jsx("th",{})]})}),e.jsx("tbody",{children:a.length?e.jsx(e.Fragment,{children:a.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:r=>l(s),children:[e.jsx("div",{className:"text-overflow w-40",children:s.title}),!t&&e.jsxs("div",{className:"text-overflow w-40",children:[e.jsx("small",{children:s.city}),s.ad_type=="sale"?e.jsx("small",{className:"btn btn-sm small p-0 bg-primary text-white py-0 px-1 text-capitalize ms-2 text-xs",children:s.ad_type}):e.jsx("small",{className:"btn btn-sm small p-0 bg-info text-white py-0 px-1 text-capitalize ms-2 text-xs",children:s.ad_type})]})]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>l(s),children:e.jsx("div",{className:"text-overflow w-24",children:s.category.label})}),e.jsx("td",{onClick:r=>l(s),children:e.jsx("div",{className:"text-overflow w-24",children:s.business_category.label})}),e.jsx("td",{className:"text-overflow w-24 text-end",onClick:r=>l(s),children:s.ad_type=="sale"?e.jsx(e.Fragment,{children:window.formatPrice(s.price)}):e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{className:"small",children:"from."})," ",window.formatPrice(s.price)]})})]}),e.jsx("td",{children:e.jsx("div",{children:e.jsxs(d,{className:"text-decoration-none",href:route("account.leads.index",{ad:s.id}),children:[s.total_leads," leads"]})})}),e.jsxs("td",{onClick:r=>l(s),children:[s.total_views," views"]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("td",{children:e.jsx(g,{ad:s})}),e.jsxs("td",{className:"text-end",children:[e.jsx(i,{permission:"Ad Create",children:e.jsx(v,{status:m,ad:s})}),e.jsx(i,{permission:"Ad Edit",children:e.jsx(d,{type:"button",href:route("account.ads.edit",s.id),className:"btn btn-sm btn-square btn-neutral me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(i,{permission:"Ad Delete",children:e.jsx("button",{onClick:r=>x(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]}),t&&e.jsx("td",{children:e.jsx("a",{target:"_blank",href:route("ads.show",s.slug),className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})})]}))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{H as default};
