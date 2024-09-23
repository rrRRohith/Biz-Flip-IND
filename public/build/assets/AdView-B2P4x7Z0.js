import{j as s,r as p,W as y}from"./app-3mR5dcr4.js";import{P as n}from"./index-CXQI1DE5.js";import{S as P}from"./slick-theme-CkWrX6mJ.js";import{S as o,T}from"./StatusBtn-BXOPHjtE.js";import{D as C}from"./DynamicSelect-DusFDqch.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./useMergedRefs-Cxa2RhTo.js";import"./TabPane-cwv-IVSK.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-RO9t0QGZ.js";import"./react-select.esm-SN6pvjJu.js";import"./Select-49a62830.esm-JzTYEEs2.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-DGv-1Euc.js";import"./hoist-non-react-statics.cjs-i33gionF.js";function D({images:t=[],slidesToShow:m=4,dots:d=!1,arrow:c=!1}){const l={dots:d,infinite:!0,speed:500,slidesToShow:m,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:c};return s.jsx(s.Fragment,{children:t.length?s.jsx(P,{...l,children:t.map((e,u)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:e,className:"img-fluid rounded15 mb-15",alt:e,onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},u))}):s.jsx("div",{children:"No images available"})})}const _=({collection:t,handleClose:m,onSubmit:d,keyVal:c})=>{const[l,e]=p.useState(!1),[u,a]=p.useState(t.status),{data:h,setData:x,post:j,errors:$,reset:k}=y({status:t.status||"0",_method:"PUT"}),b=t.images||[],N=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
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
                                                </table>`}],f=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="Inactive":r="Pending";const S=()=>{e(!0)};o,t.status;const g=i=>{i.preventDefault(),console.log(h),j(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{e(!1),d()}})},v=()=>{e(!1),a(t.status)},w=i=>{x("status",i),a(i.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(D,{images:b,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:l?s.jsx("form",{onSubmit:g,children:s.jsxs("div",{className:"text-center",children:[s.jsx(C,{onChange:w,value:h.status,defaultValue:r,options:f,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:v,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(o,{status:t.status}),t.status!=2?s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:S}):""]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(T,{options:N})}),s.jsxs("div",{className:"action-btns col-lg-12 text-end",children:[s.jsx("button",{className:"btn btn-sm btn-success text-white me-3",children:"Publish"}),s.jsx("button",{className:"btn btn-sm btn-info text-white me-3",children:"On hold"}),s.jsx("button",{className:"btn btn-sm text-white btn-danger",children:"Suspended"})]})]})})};_.propTypes={collection:n.object.isRequired,handleClose:n.func.isRequired,onSubmit:n.func.isRequired};export{_ as default};
