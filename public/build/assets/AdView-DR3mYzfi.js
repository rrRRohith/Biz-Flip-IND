import{j as s,r as u,W as w}from"./app-B3lS64dG.js";import{P as c}from"./inheritsLoose-DbZSpFkk.js";import{S as y}from"./slick-theme-BErfMsUZ.js";import{S as h,T as P}from"./StatusBtn-CkClRXKO.js";import{D as T}from"./DynamicSelect-BKXhiq5r.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./listen-B_F_1ACR.js";import"./TabPane-CHHGYJq3.js";import"./Anchor-BTx_t2Do.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-HZCctfIx.js";import"./react-select.esm-Q33XHUIR.js";import"./Select-49a62830.esm-qpeq2c33.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CclaArDC.js";import"./hoist-non-react-statics.cjs-DA1IKqmT.js";function C({images:e=[],slidesToShow:p=4,dots:l=!1,arrow:n=!1}){const t={dots:l,infinite:!0,speed:500,slidesToShow:p,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:n};return s.jsx(s.Fragment,{children:e.length?s.jsx(y,{...t,children:e.map((m,i)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:window.getImageAsset(m),className:"img-fluid rounded15 mb-15",alt:window.getImageAsset(m),onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},i))}):s.jsx("div",{children:"No images available"})})}const D=({collection:e,handleClose:p,onSubmit:l})=>{const[n,t]=u.useState(!1),[m,i]=u.useState(e.status),{data:a,setData:o,post:x,errors:_,reset:$}=w({status:e.status||"0",_method:"PUT"}),j=e.images||[],b=[{title:"Details",content:e.description+"<br>"},{title:"More Information",content:`<table className="table">
                                                    <tr>
                                                        <th>
                                                        Addess
                                                        </th>
                                                        <td>
                                                            ${e.address}, <br>
                                                            ${e.postalcode}, 
                                                            ${e.city}, <br>
                                                            ${e.province}.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Space
                                                        </th>
                                                        <td>
                                                            ${e.space}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Price
                                                        </th>
                                                        <td>
                                                            ${window.formatPrice(e.price)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Ad Viewed
                                                        </th>
                                                        <td>
                                                            ${e.total_views}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Total Leads
                                                        </th>
                                                        <td>
                                                            ${e.total_leads}
                                                        </td>
                                                    </tr>
                                                </table>`}],f=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"}];var r="";e.status==1?r="Publish":e.status==-1?r="Suspend":e.status==3?r="Inactive":r="Pending";const N=()=>{t(!0)};h,e.status;const g=d=>{d.preventDefault(),console.log(a),x(route("admin.ads.update",e.id),{preserveScroll:!0,onSuccess:()=>{t(!1),l()}})},S=()=>{t(!1),i(e.status)},v=d=>{o("status",d),i(d.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(C,{images:j,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:e.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(e.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[e.property_type," / ",e.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[e.seller.firstname," ",e.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(e.created_at)})})]}),e.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(e.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:n?s.jsx("form",{onSubmit:g,children:s.jsxs("div",{className:"text-center",children:[s.jsx(T,{onChange:v,value:a.status,defaultValue:r,options:f,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:S,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(h,{status:e.status}),e.status!=2?s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:N}):""]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(P,{options:b})})]})})};D.propTypes={collection:c.object.isRequired,handleClose:c.func.isRequired,onSubmit:c.func.isRequired};export{D as default};
