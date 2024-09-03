import{j as s,r as u,W as w}from"./app-Bf-6bzmR.js";import{P as c}from"./index-BycFVu8o.js";import{S as y}from"./slick-theme-Co5wQc3-.js";import{S as h,T as P}from"./StatusBtn-XlsfrS7w.js";import{D as T}from"./DynamicSelect-DfuThz6_.js";import"./listen-D8yN62rw.js";import"./TabPane-B9ZhxAmW.js";import"./Anchor-DkY9dI_7.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-B5ce3zLY.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-BL0KiKBC.js";import"./Select-49a62830.esm-D_yjJMAl.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-BNGZ2AcF.js";import"./hoist-non-react-statics.cjs-BKQ1xvJS.js";function C({images:t=[],slidesToShow:p=4,dots:l=!1,arrow:n=!1}){const e={dots:l,infinite:!0,speed:500,slidesToShow:p,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:n};return s.jsx(s.Fragment,{children:t.length?s.jsx(y,{...e,children:t.map((m,i)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:window.getImageAsset(m),className:"img-fluid rounded15 mb-15",alt:window.getImageAsset(m),onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},i))}):s.jsx("div",{children:"No images available"})})}const D=({collection:t,handleClose:p,onSubmit:l})=>{const[n,e]=u.useState(!1),[m,i]=u.useState(t.status),{data:a,setData:o,post:x,errors:_,reset:$}=w({status:t.status||"0",_method:"PUT"}),j=t.images||[],b=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table class="table">
                                                    <tr>
                                                        <th>
                                                        Addess
                                                        </th>
                                                        <td>
                                                            ${t.address}, <br>
                                                            ${t.postalcode}, 
                                                            ${t.city}, <br>
                                                            ${t.province}.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Space
                                                        </th>
                                                        <td>
                                                            ${t.space}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Price
                                                        </th>
                                                        <td>
                                                            ${window.formatPrice(t.price)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Ad Viewed
                                                        </th>
                                                        <td>
                                                            ${t.total_views}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Total Leads
                                                        </th>
                                                        <td>
                                                            ${t.total_leads}
                                                        </td>
                                                    </tr>
                                                </table>`}],f=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="Inactive":r="Pending";const N=()=>{e(!0)};h,t.status;const g=d=>{d.preventDefault(),console.log(a),x(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{e(!1),l()}})},S=()=>{e(!1),i(t.status)},v=d=>{o("status",d),i(d.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(C,{images:j,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:n?s.jsx("form",{onSubmit:g,children:s.jsxs("div",{className:"text-center",children:[s.jsx(T,{onChange:v,value:a.status,defaultValue:r,options:f,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:S,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(h,{status:t.status}),t.status!=2?s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:N}):""]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(P,{options:b})})]})})};D.propTypes={collection:c.object.isRequired,handleClose:c.func.isRequired,onSubmit:c.func.isRequired};export{D as default};
