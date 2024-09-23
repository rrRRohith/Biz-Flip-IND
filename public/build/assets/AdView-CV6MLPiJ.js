import{j as s,r as c,W as b}from"./app-DlBo-Ddu.js";import{P as l}from"./index-BWjN7ugN.js";import{S as N}from"./slick-theme-pNbvdM6J.js";import{S as g,T as S}from"./StatusBtn-BKHu1hy3.js";import"./DynamicSelect-fmHR695F.js";import"./useMergedRefs-C2W-uHs9.js";import"./TabPane-Qhvnfe1O.js";import"./NavbarContext-BzvdvPuO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-CmSRjtXj.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-J2nNCklL.js";import"./Select-49a62830.esm-Dx6Tf3xm.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-BhcPD_Qg.js";import"./hoist-non-react-statics.cjs-CyvW9ahi.js";function f({images:t=[],slidesToShow:m=4,dots:i=!1,arrow:e=!1}){const p={dots:i,infinite:!0,speed:500,slidesToShow:m,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:e};return s.jsx(s.Fragment,{children:t.length?s.jsx(N,{...p,children:t.map((a,o)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:a,className:"img-fluid rounded15 mb-15",alt:a,onError:d=>{d.target.onerror=null,d.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},o))}):s.jsx("div",{children:"No images available"})})}const w=({collection:t,handleClose:m,onSubmit:i,keyVal:e})=>{const[p,a]=c.useState(!1);c.useState(t.status);const{data:o,setData:d,post:h,errors:v,reset:A}=b({status:t.status||"0",_method:"PUT"}),u=t.images||[],x=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table className="table">
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
                                                </table>`}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="Inactive":r="Pending",g,t.status;const n=j=>{d("status",j),h(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{a(!1),i()},onError:()=>{console.error("An error occurred while updating the status.")}})};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(f,{images:u,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-dark badge-pill",children:r})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(S,{options:x})}),e!="SoldAds"&&s.jsxs("div",{className:"action-btns col-lg-12 text-end",children:[e!="ApprovedAds"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>n(1),className:"btn btn-sm btn-success text-white me-3",children:"Publish"}),e!="PendingApproval"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>n(0),className:"btn btn-sm btn-info text-white me-3",children:"On hold"}),e!="SuspendedAds"&&e!="SoldAds"&&s.jsx("button",{type:"button",onClick:()=>n(-1),className:"btn btn-sm text-white btn-danger",children:"Suspend"})]})]})})};w.propTypes={collection:l.object.isRequired,handleClose:l.func.isRequired,onSubmit:l.func.isRequired};export{w as default};
