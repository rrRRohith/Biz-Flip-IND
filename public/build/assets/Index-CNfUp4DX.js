import{r as d,j as t,Y as j,y as p,b}from"./app-DOZcIWVh.js";import{A as u}from"./AdminAuthenticated-CBQJ-3I7.js";import{M as g}from"./ModalPopup-BFWklUzi.js";import"./Dropdown-BYdKb6tQ.js";import"./AdminSidebar-BGLDizeY.js";import"./listen-BbKSz9Gy.js";import"./useWindow-DhqI_zMA.js";import"./Anchor-DRVRSgLP.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BgJ3aozw.js";import"./PermissionAllow-DPIa7gDb.js";import"./ToastNotification-DWZrIRJL.js";import"./Modal-ZaUwpqJY.js";import"./Fade-DFkOFMZb.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-Piw2Mxfl.js";import"./index-DHEsC4vh.js";function q({Leads:a,auth:i,success:N=null,error:f=null}){const n=e=>{window.confirm("Are you sure you want to delete this Leads?")&&p.delete(route("admin.propery_lead_delete",e.id))},[l,r]=d.useState(!1),[o,c]=d.useState(null),h=()=>r(!1),m=async e=>{try{const s=await b.get(route("admin.propery_lead_show",e.id)),x=`   <table class="table fw-700">
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
                                </table>`;c(x),r(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(u,{user:i.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Leads Listing"}),children:[t.jsx(j,{title:"Ad Leads Listing"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Ad Leads Listing"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Agent"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:a.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsx("td",{children:e.ad.title}),t.jsxs("td",{children:[e.ad.seller.firstname," ",e.ad.seller.lastname]}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.status}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>m(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>n(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(g,{show:l,handleClose:h,data:o,title:"Lead Details"})]})}export{q as default};
