<<<<<<<< HEAD:public/build/assets/AdView-ZO6WcKAM.js
import{j as s,r as u,W as N}from"./app-CszI9XME.js";import{P as o}from"./index-C9FPKsoB.js";import{S as g}from"./slick-theme-CzAD7Oc1.js";import{T as w}from"./TabView-CGXwFpS1.js";import{S as v}from"./StatusBtn-DJbb5w_J.js";import"./DynamicSelect-BBkrC_8A.js";import{S as A}from"./sweetalert2.all-DhRUe-lD.js";import"./useMergedRefs-DUl3Zfz6.js";import"./TabPane-BM5qkVg3.js";import"./NavbarContext-DZl0zhyv.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-CxbGQR9O.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-DkVyJrfY.js";import"./Select-49a62830.esm-CZiVth0l.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CPkSlLKx.js";import"./hoist-non-react-statics.cjs-DgIGiAz7.js";function P({images:t=[],slidesToShow:c=4,dots:n=!1,arrow:e=!1}){const p={dots:n,infinite:!0,speed:500,slidesToShow:c,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:e};return s.jsx(s.Fragment,{children:t.length?s.jsx(g,{...p,children:t.map((a,h)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:a,className:"img-fluid rounded15 mb-15",alt:a,onError:d=>{d.target.onerror=null,d.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},h))}):s.jsx("div",{children:"No images available"})})}const T=({collection:t,handleClose:c,onSubmit:n,keyVal:e})=>{const[p,a]=u.useState(!1),[h,d]=u.useState(t.status),{data:y,setData:x,post:j,errors:C,reset:_}=N({status:t.status||"0",_method:"PUT"}),b=t.images||[],S=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
========
import{j as s,r as u,W as N}from"./app-m6jwzREc.js";import{P as o}from"./index-vBzHIoDB.js";import{S as g}from"./slick-theme-To8acv6K.js";import{T as w}from"./TabView-DEFtWsig.js";import{S as v}from"./StatusBtn-C-JPhRiF.js";import"./DynamicSelect-CKWNAICl.js";import{S as A}from"./sweetalert2.all-f_CFJi6U.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./useMergedRefs-Txjd5-DZ.js";import"./TabPane-CeIcTijG.js";import"./NavbarContext-DmJk-5Ir.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-CGtw0FQ8.js";import"./react-select.esm-C4l9KfHj.js";import"./Select-49a62830.esm-B5h1ngej.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-DvY3Merc.js";import"./hoist-non-react-statics.cjs-r4hCWOT5.js";function P({images:t=[],slidesToShow:c=4,dots:n=!1,arrow:e=!1}){const p={dots:n,infinite:!0,speed:500,slidesToShow:c,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:e};return s.jsx(s.Fragment,{children:t.length?s.jsx(g,{...p,children:t.map((a,h)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:a,className:"img-fluid rounded15 mb-15",alt:a,onError:d=>{d.target.onerror=null,d.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},h))}):s.jsx("div",{children:"No images available"})})}const T=({collection:t,handleClose:c,onSubmit:n,keyVal:e})=>{const[p,a]=u.useState(!1),[h,d]=u.useState(t.status),{data:y,setData:x,post:j,errors:C,reset:_}=N({status:t.status||"0",_method:"PUT"}),b=t.images||[],S=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
>>>>>>>> 135266f00fcd0a63563ceb412c65b6dbccd3db07:public/build/assets/AdView-Cwcr40TP.js
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
                                                </table>`}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="On hold":r="Pending",v,t.status;const f=i=>{i.preventDefault(),j(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{a(!1),n()}})},l=i=>{x(m=>({...m,status:i})),d(i.value),A.fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, do it!"}).then(m=>{m.isConfirmed&&document.getElementById("myFormSubmit").click()})};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(P,{images:b,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"User"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-dark badge-pill",children:r})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(w,{options:S})}),e!="SoldAds"&&s.jsxs("div",{className:"action-btns col-lg-12 text-end",children:[e!="ApprovedAds"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>l("1"),className:"btn btn-sm btn-success text-white me-3",children:"Publish"}),e!="PendingApproval"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>l("3"),className:"btn btn-sm btn-info text-white me-3",children:"On hold"}),e!="SuspendedAds"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>l("-1"),className:"btn btn-sm text-white btn-danger",children:"Suspend"}),s.jsx("form",{onSubmit:f,id:"myForm",children:s.jsx("button",{id:"myFormSubmit",className:"d-none",children:"Submit"})})]})]})})};T.propTypes={collection:o.object.isRequired,handleClose:o.func.isRequired,onSubmit:o.func.isRequired};export{T as default};
