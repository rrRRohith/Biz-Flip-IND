import{r as n,W as f,j as s}from"./app-DqEs7Bkv.js";import{P as l}from"./inheritsLoose-B1A_Czny.js";import"./slick-theme-C-o3FmXP.js";import{S as g}from"./StatusBtn-Hy8i-pkq.js";import{D as S}from"./DynamicSelect-C6qYJtHS.js";import"./index-Chjiymov.js";import"./setPrototypeOf-D424jnZp.js";import"./Fade-QJ9PgHvc.js";import"./TabPane-CF__rGOj.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./react-select-creatable.esm-6Dbc75pq.js";import"./inherits-BIvzEtgb.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./emotion-react.browser.esm-CFsy6mXa.js";import"./inherits-DEw0FBPK.js";import"./hoist-non-react-statics.cjs-CYd8FKoI.js";const c=({collection:e,handleClose:v,onSubmit:m})=>{const[x,r]=n.useState(!1),[y,d]=n.useState(e.status),{data:i,setData:h,post:j,errors:C,reset:w}=f({status:e.status||"0"}),p=[{value:"0",label:"Pending/Inactive"},{value:"1",label:"Active"},{value:"-1",label:"Suspend"}];console.log(e);var t="";e.status==1?t="Active":e.status==-1?t="Suspend":t="Pending/Inactive";const o=()=>{r(!0)},u=a=>{a.preventDefault(),console.log(i),j(route("admin.sellers.status-update",e.id),{preserveScroll:!0,onSuccess:()=>{r(!1),m()}})},b=()=>{r(!1),d(e.status)},N=a=>{h("status",a),d(a.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsx("div",{className:"row  border-0",children:s.jsx("div",{className:"col-lg-12 mx-auto",children:s.jsxs("div",{className:" p-4",children:[s.jsx("h4",{className:"fw-bold",children:s.jsx("u",{children:"Contact Person Details"})}),s.jsx("table",{className:"border-0 ",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{colSpan:2,children:s.jsx("img",{src:e.picture,className:"wd-100 hd-100 me-3 rounded-circle",onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}})}),s.jsx("td",{colSpan:10,children:s.jsxs("table",{className:"border-0 ",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Full Name"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.full_name})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Email"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.email})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Mobile No:"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.phone})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Address"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.address})})]})]})})]})})}),s.jsxs("div",{className:" p-4",children:[s.jsx("h4",{className:"fw-bold",children:s.jsx("u",{children:"Company Details"})}),s.jsx("table",{className:"border-0 ",children:s.jsx("tbody",{children:s.jsx("tr",{children:s.jsx("td",{colSpan:10,children:s.jsxs("table",{className:"border-0 ",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Company Name"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.company_name})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Company Address"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.full_address})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Website"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.website})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Business Type"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:e.business_type})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(e.created_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:x?s.jsx("form",{onSubmit:u,children:s.jsxs("div",{className:"text-center",children:[s.jsx(S,{onChange:N,value:i.status,defaultValue:t,options:p,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:b,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(g,{status:e.status}),s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:o})]})})]})]})})})})})]})]})})})})};c.propTypes={collection:l.object.isRequired,handleClose:l.func.isRequired,onSubmit:l.func.isRequired};const H=c;export{H as default};
