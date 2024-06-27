import{r,j as t,Y as b,y as u,b as N}from"./app-96-ETbjc.js";import{A as g}from"./AdminAuthenticated-COmTzILu.js";import{M as f}from"./ModalPopup-DycMcrJf.js";import"./Dropdown-6BPLZ4oq.js";import"./AdminSidebar-DB5qyKHv.js";import"./listen-B9FOW-Dn.js";import"./useWindow-DfpURWEg.js";import"./Anchor-WK8Zy-oT.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CXjygUsK.js";import"./PermissionAllow-Y5bVv8C0.js";import"./ToastNotification-BUJYWa7C.js";import"./Modal-CbKQkVhD.js";import"./Fade-CK5pYl47.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DZN8NTON.js";import"./index-Chjiymov.js";import"./TransitionGroupContext-B1P8tJmz.js";function B({contactMsgList:d,auth:l,success:n=null,error:i=null}){const o=e=>{window.confirm("Are you sure you want to delete this Inquiry?")&&u.delete(route("admin.contact_delete",e.id))},[c,a]=r.useState(!1),[m,h]=r.useState(null),x=()=>a(!1),j=async e=>{try{const s=await N.get(route("admin.contact_show",e.id)),p=`   <table class="table fw-700">
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
                                </table>`;h(p),a(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(g,{user:l.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Contact Inquiries"}),success:n,error:i,children:[t.jsx(b,{title:"Contact Inquiries List"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Contact Inquiries"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Subject"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:d.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.subject}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>j(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>o(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(f,{show:c,handleClose:x,data:m,title:"Contact Inquiry Details"})]})}export{B as default};
