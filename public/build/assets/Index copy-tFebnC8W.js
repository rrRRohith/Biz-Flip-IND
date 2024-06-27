import{r as a,j as t,Y as u,y as b,b as N}from"./app-hnfrkFZg.js";import{S as g}from"./sweetalert2.all-Dxdk7mo5.js";import{A as f}from"./AdminAuthenticated-Cv4Vg8Vq.js";import{M as v}from"./ModalPopup-CCfZQLNE.js";import"./index-B6i2j1mE.js";/* empty css                                  */import"./Dropdown-Ca-UCSU0.js";import"./AdminSidebar-DA2ORclv.js";import"./listen-DT5iH6cS.js";import"./useWindow-BqAU_gkT.js";import"./Anchor-C_LCvmXY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9RErJyb.js";import"./PermissionAllow-DpFhgEPZ.js";import"./ToastNotification-EgQe7kOo.js";import"./Modal-BfpCo8Qn.js";import"./Fade-DvMu3KAZ.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CtPsS-RI.js";import"./index-Chjiymov.js";import"./TransitionGroupContext-DclnSYLS.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";function K({contactMsgList:r,auth:n,success:i=null,error:o=null}){a.useState(1),a.useState(""),a.useState(ads.data),a.useState(pendingAdsList.data),a.useState(suspendedAdsList.data),a.useState(soldAdsList.data),a.useState("ApprovedAds");const l=e=>{g.fire({title:"Are you sure you want to delete this Inquiry?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&b.delete(route("admin.contact_delete",e.id))})},[c,d]=a.useState(!1),[m,h]=a.useState(null),x=()=>d(!1),j=async e=>{try{const s=await N.get(route("admin.contact_show",e.id)),p=`   <table class="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${s.data.firstname} ${s.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${s.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${s.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${s.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${s.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;h(p),d(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(f,{user:n.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Contact Inquiries"}),success:i,error:o,children:[t.jsx(u,{title:"Contact Inquiries List"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Contact Inquiries"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Subject"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:r.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.subject}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>j(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>l(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(v,{show:c,handleClose:x,data:m,title:"Contact Inquiry Details"})]})}export{K as default};
