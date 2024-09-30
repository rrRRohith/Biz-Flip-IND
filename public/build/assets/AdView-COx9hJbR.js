import{j as s,r as u,W as g}from"./app-DlsXmS-z.js";import{P as c}from"./index-BPLLq1QB.js";import{S as N}from"./slick-theme-bvSs3oUS.js";import{T as w}from"./TabView-Dzq9ITJb.js";import{S as v}from"./StatusBtn-VP3VSBwM.js";import"./DynamicSelect-x1dNMMxv.js";import{S as T}from"./sweetalert2.all-C9ZcmpBe.js";import"./useMergedRefs-Do9yVItw.js";import"./TabPane-CC8qtynW.js";import"./NavbarContext-53g5QPFy.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-CTayNvS6.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-Dv1lr1BE.js";import"./Select-49a62830.esm-CMRaAhg1.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CAgKHjCr.js";import"./hoist-non-react-statics.cjs-CfsdZF3N.js";function A({images:t=[],slidesToShow:p=1,dots:i=!1,arrow:e=!1}){const h={dots:i,infinite:t.length>1,speed:500,slidesToShow:t.length===1?1:p,slidesToScroll:1,autoplay:t.length>1,autoplaySpeed:2e3,arrows:e};return s.jsx(s.Fragment,{children:t.length?s.jsx(N,{...h,children:t.map((n,l)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:n,className:"img-fluid rounded15 mb-15",alt:`Slide ${l}`,onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},l))}):s.jsx("div",{children:"No images available"})})}const P=({collection:t,handleClose:p,onSubmit:i,keyVal:e})=>{const[h,n]=u.useState(!1),[l,a]=u.useState(t.status),{data:y,setData:x,post:j,errors:C,reset:$}=g({status:t.status||"0",_method:"PUT"}),b=t.images||[],S=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
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
                                                </table>`}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="On hold":r="Pending",v,t.status;const f=d=>{d.preventDefault(),j(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{n(!1),i()}})},m=d=>{x(o=>({...o,status:d})),a(d.value),T.fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, do it!"}).then(o=>{o.isConfirmed&&document.getElementById("myFormSubmit").click()})};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(A,{images:b,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"User"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-dark badge-pill",children:r})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(w,{options:S})}),e!="SoldAds"&&s.jsxs("div",{className:"action-btns col-lg-12 text-end",children:[e!="ApprovedAds"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>m("1"),className:"btn btn-sm btn-success text-white me-3",children:"Publish"}),e!="PendingApproval"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>m("3"),className:"btn btn-sm btn-info text-white me-3",children:"On hold"}),e!="SuspendedAds"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>m("-1"),className:"btn btn-sm text-white btn-danger",children:"Suspend"}),s.jsx("form",{onSubmit:f,id:"myForm",children:s.jsx("button",{id:"myFormSubmit",className:"d-none",children:"Submit"})})]})]})})};P.propTypes={collection:c.object.isRequired,handleClose:c.func.isRequired,onSubmit:c.func.isRequired};export{P as default};
