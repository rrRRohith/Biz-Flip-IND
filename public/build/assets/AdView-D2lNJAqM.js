<<<<<<<< HEAD:public/build/assets/AdView-D2lNJAqM.js
import{j as s,r as u,W as w}from"./app-NOf8Ud2Y.js";import{P as c}from"./index-0eJ9DX1U.js";import{S as y}from"./slick-theme-CNBmrXs2.js";import{S as h,T as P}from"./StatusBtn-CbSqwZlf.js";import{D as T}from"./DynamicSelect-DOBuTmDv.js";import"./listen-DAonDIvx.js";import"./TabPane-BoRo_x9l.js";import"./Anchor-Bk6fN3Km.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-BeIZaMCs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-Zq4xYsl7.js";import"./Select-49a62830.esm-yfvIYKNF.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CsTObgxi.js";import"./hoist-non-react-statics.cjs-D1VeiPUh.js";function C({images:t=[],slidesToShow:p=4,dots:l=!1,arrow:n=!1}){const e={dots:l,infinite:!0,speed:500,slidesToShow:p,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:n};return s.jsx(s.Fragment,{children:t.length?s.jsx(y,{...e,children:t.map((m,i)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:m,className:"img-fluid rounded15 mb-15",alt:m,onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},i))}):s.jsx("div",{children:"No images available"})})}const D=({collection:t,handleClose:p,onSubmit:l})=>{const[n,e]=u.useState(!1),[m,i]=u.useState(t.status),{data:a,setData:o,post:x,errors:_,reset:$}=w({status:t.status||"0",_method:"PUT"}),j=t.images||[],b=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
========
import{j as s,r as u,W as w}from"./app-DvZEQs7q.js";import{P as c}from"./index-BHIby_lu.js";import{S as y}from"./slick-theme-Bkh6r8hD.js";import{S as h,T as P}from"./StatusBtn-65s-nox-.js";import{D as T}from"./DynamicSelect-C0SWDV6o.js";import"./listen-B73106F4.js";import"./TabPane-BeJMI2JZ.js";import"./Anchor-CDa32GWz.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-nrbR4rxK.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-BVUURsEn.js";import"./Select-49a62830.esm-D0RUBDeS.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-xdAJojEI.js";import"./hoist-non-react-statics.cjs-B9q_QMYK.js";function C({images:t=[],slidesToShow:p=4,dots:l=!1,arrow:n=!1}){const e={dots:l,infinite:!0,speed:500,slidesToShow:p,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:n};return s.jsx(s.Fragment,{children:t.length?s.jsx(y,{...e,children:t.map((m,i)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:m,className:"img-fluid rounded15 mb-15",alt:m,onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},i))}):s.jsx("div",{children:"No images available"})})}const D=({collection:t,handleClose:p,onSubmit:l})=>{const[n,e]=u.useState(!1),[m,i]=u.useState(t.status),{data:a,setData:o,post:x,errors:_,reset:$}=w({status:t.status||"0",_method:"PUT"}),j=t.images||[],b=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
>>>>>>>> 470c74d89ca7d7db853d4fce4809f9e3b5a4e1a7:public/build/assets/AdView-ByV2GJpj.js
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
                                                </table>`}],f=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="Inactive":r="Pending";const N=()=>{e(!0)};h,t.status;const S=d=>{d.preventDefault(),console.log(a),x(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{e(!1),l()}})},g=()=>{e(!1),i(t.status)},v=d=>{o("status",d),i(d.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(C,{images:j,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:n?s.jsx("form",{onSubmit:S,children:s.jsxs("div",{className:"text-center",children:[s.jsx(T,{onChange:v,value:a.status,defaultValue:r,options:f,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:g,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(h,{status:t.status}),t.status!=2?s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:N}):""]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(P,{options:b})})]})})};D.propTypes={collection:c.object.isRequired,handleClose:c.func.isRequired,onSubmit:c.func.isRequired};export{D as default};
