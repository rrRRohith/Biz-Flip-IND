import{r as c,j as e,a as i,y as w}from"./app-DqBPa-SR.js";import g from"./AdStatusBtn-CGTvYU9Y.js";import{P as a}from"./PermissionAllow-_FOCjMW7.js";import y from"./AdAction-D8dacrSm.js";import{M as n}from"./Modal-CxxBVebG.js";import"./useMergedRefs-CDRUL058.js";import"./useWindow-D7v8P1xz.js";import"./BootstrapModalManager-BVazxGBD.js";import"./Fade-BDlFZNxo.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BfUHJ4WG.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";function H({ads:o,confirmDelete:x,minimal:t=!1,searchResult:h}){const m=(s,r)=>{w.put(route("account.ads.status",s.id),{status:r}),h()},[j,d]=c.useState(!1),[p,b]=c.useState(""),[u,N]=c.useState(""),l=s=>{N(route("ads.show",s.slug)+"?embed=true"),b(s.title),d(!0)},f=()=>d(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(n,{size:"xl",show:j,onHide:f,centered:!0,children:[e.jsx(n.Header,{closeButton:!0,children:e.jsx(n.Title,{children:p})}),e.jsx(n.Body,{className:"p-0",children:e.jsx("iframe",{className:"rounded-3 listframe",src:u,frameborder:"0"})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Title"}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Industry"}),e.jsx("th",{scope:"col",children:"Category"}),e.jsx("th",{scope:"col",children:"Price"})]}),e.jsx("th",{scope:"col",children:"Leads"}),e.jsx("th",{scope:"col",children:"Views"}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col"})]}),t&&e.jsx("th",{})]})}),e.jsx("tbody",{children:o.length?e.jsx(e.Fragment,{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:r=>l(s),children:[e.jsx("div",{className:"text-overflow w-40",children:s.title}),!t&&e.jsxs("div",{className:"text-overflow w-40",children:[e.jsx("small",{children:s.city}),s.ad_type=="sale"?e.jsx("small",{className:"btn btn-sm small p-0 bg-primary text-white py-0 px-1 text-capitalize ms-2 text-xs",children:s.ad_type}):e.jsx("small",{className:"btn btn-sm small p-0 bg-info text-white py-0 px-1 text-capitalize ms-2 text-xs",children:s.ad_type})]})]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>l(s),children:e.jsx("div",{className:"text-overflow w-24",children:s.category.label})}),e.jsx("td",{onClick:r=>l(s),children:e.jsx("div",{className:"text-overflow w-24",children:s.business_category.label})}),e.jsx("td",{className:"text-overflow w-24 text-end",onClick:r=>l(s),children:s.ad_type=="sale"?e.jsxs(e.Fragment,{children:["$",s.price_text]}):e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{className:"small",children:"from."})," $",s.price_text]})})]}),e.jsx("td",{children:e.jsx("div",{children:e.jsxs(i,{className:"text-decoration-none",href:route("account.leads.index",{ad:s.id}),children:[s.total_leads," leads"]})})}),e.jsxs("td",{onClick:r=>l(s),children:[s.total_views," views"]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("td",{children:e.jsx(g,{status:s.status})}),e.jsxs("td",{children:[e.jsxs(a,{permission:"Ad Create",children:[e.jsx("span",{className:"position-absolute",children:e.jsx(y,{status:m,ad:s})}),e.jsx(i,{type:"button",className:"btn btn-sm btn-square btn-neutral me-2",children:e.jsx("i",{className:"bi bi-pen"})})]}),e.jsx(a,{permission:"Ad Edit",children:e.jsx(i,{type:"button",href:route("account.ads.edit",s.id),className:"btn btn-sm btn-square btn-neutral me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(a,{permission:"Ad Delete",children:e.jsx("button",{onClick:r=>x(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]}),t&&e.jsx("td",{children:e.jsx("a",{target:"_blank",href:route("ads.show",s.slug),className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})})]}))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{H as default};
