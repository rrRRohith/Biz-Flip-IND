import{r as n,W as S,j as s}from"./app-D6Sd9B5k.js";import{P as i}from"./index-CTUAnpqy.js";import{S as g}from"./SlickSlider-Cf4CyVhu.js";import{S as v,T as w}from"./StatusBtn-yUOVkYY3.js";import{D as y}from"./DynamicSelect-vgkii2Wb.js";import"./slick-theme-CzBuxcb7.js";import"./listen-BKFQpVTe.js";import"./TabPane-C-PwC2RJ.js";import"./Anchor-BKbuGxYG.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-gQdSWnLQ.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-BlztnDVr.js";import"./react-select-creatable.esm-Lgmj3tdE.js";import"./useStateManager-7e1e8489.esm-DCwUItwu.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./inherits-Ds6J14_q.js";import"./emotion-react.browser.esm-CVAkBKNs.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-CjqPhzwV.js";const P=({collection:e,handleClose:C,onSubmit:c})=>{const[m,r]=n.useState(!1),[D,l]=n.useState(e.status),{data:d,setData:o,post:p,errors:T,reset:k}=S({status:e.status||"0",_method:"PUT"}),u=e.images||[],x=[{title:"Details",content:"test"},{title:"Address",content:"test"},{title:"Additional Info",content:"test"},{title:"SEO Details",content:"test"},{title:"Leads",content:"test"}],h=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"},{value:"3",label:"Inactive"}];var t="";e.status==1?t="Publish":e.status==-1?t="Suspend":e.status==3?t="Inactive":t="Pending";const j=()=>{r(!0)},b=a=>{a.preventDefault(),console.log(d),p(route("admin.ads.update",e.id),{preserveScroll:!0,onSuccess:()=>{r(!1),c()}})},f=()=>{r(!1),l(e.status)},N=a=>{o("status",a),l(a.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(g,{images:u,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:e.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(e.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[e.property_type," / ",e.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[e.seller.firstname," ",e.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(e.created_at)})})]}),e.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(e.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:m?s.jsx("form",{onSubmit:b,children:s.jsxs("div",{className:"text-center",children:[s.jsx(y,{onChange:N,value:d.status,defaultValue:t,options:h,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:f,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(v,{status:e.status}),s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:j})]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(w,{options:x})})]})})};P.propTypes={collection:i.object.isRequired,handleClose:i.func.isRequired,onSubmit:i.func.isRequired};export{P as default};