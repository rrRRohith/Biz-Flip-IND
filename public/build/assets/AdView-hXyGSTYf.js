<<<<<<< HEAD:public/build/assets/AdView-hXyGSTYf.js
import{j as s,r as u,W as N}from"./app-xlIuIJsy.js";import{P as o}from"./index-CER1-L1P.js";import{S as g}from"./slick-theme-BuQSZGAM.js";import{T as w}from"./TabView-3Q3rlL3c.js";import{S as v}from"./StatusBtn-BQ40mGey.js";import"./DynamicSelect-BxefrusT.js";import{S as A}from"./sweetalert2.all-U43Oqb_N.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./useMergedRefs-Dgr7rqb-.js";import"./TabPane-Ba-c7c4d.js";import"./NavbarContext-B8z2EYbj.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-DUV1peZc.js";import"./react-select.esm-wpzns3_j.js";import"./Select-49a62830.esm-BqHydHpT.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-BoNDEcRd.js";import"./hoist-non-react-statics.cjs-BqazR4wt.js";function P({images:t=[],slidesToShow:c=4,dots:n=!1,arrow:e=!1}){const p={dots:n,infinite:!0,speed:500,slidesToShow:c,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:e};return s.jsx(s.Fragment,{children:t.length?s.jsx(g,{...p,children:t.map((a,h)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:a,className:"img-fluid rounded15 mb-15",alt:a,onError:d=>{d.target.onerror=null,d.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},h))}):s.jsx("div",{children:"No images available"})})}const T=({collection:t,handleClose:c,onSubmit:n,keyVal:e})=>{const[p,a]=u.useState(!1),[h,d]=u.useState(t.status),{data:y,setData:x,post:j,errors:C,reset:_}=N({status:t.status||"0",_method:"PUT"}),b=t.images||[],S=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
=======
import{j as s,r as u,W as N}from"./app-itwJjUX3.js";import{P as o}from"./index-CpWed4k1.js";import{S as g}from"./slick-theme-DKB0mHB7.js";import{T as w}from"./TabView-CIXFYX8C.js";import{S as v}from"./StatusBtn-CHQdCp3C.js";import"./DynamicSelect-Mq8p4erh.js";import{S as A}from"./sweetalert2.all-DUrIEgmt.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./useMergedRefs-avGIJ7As.js";import"./TabPane-DAD4fcQ4.js";import"./NavbarContext-D8L38UUl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-DEX4mjoG.js";import"./react-select.esm-CY3ZuqwZ.js";import"./Select-49a62830.esm-DoM9QxNl.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-BjLfIPvS.js";import"./hoist-non-react-statics.cjs-ryeQnAKc.js";function P({images:t=[],slidesToShow:c=4,dots:n=!1,arrow:e=!1}){const p={dots:n,infinite:!0,speed:500,slidesToShow:c,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:e};return s.jsx(s.Fragment,{children:t.length?s.jsx(g,{...p,children:t.map((a,h)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:a,className:"img-fluid rounded15 mb-15",alt:a,onError:d=>{d.target.onerror=null,d.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},h))}):s.jsx("div",{children:"No images available"})})}const T=({collection:t,handleClose:c,onSubmit:n,keyVal:e})=>{const[p,a]=u.useState(!1),[h,d]=u.useState(t.status),{data:y,setData:x,post:j,errors:C,reset:_}=N({status:t.status||"0",_method:"PUT"}),b=t.images||[],S=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
>>>>>>> d8d0e48fb030c3c19412ab73f21a9382ef01b7cd:public/build/assets/AdView-B0lW0B-8.js
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
