import{r as d,j as t,Y as u,y as p,b as N}from"./app-CJ8gtaWK.js";import{A as g}from"./AdminAuthenticated-VedlVE-1.js";import{M as f}from"./ModalPopup-DUwLAwmV.js";import"./PermissionAllow-8aMWW39F.js";import"./AdminSidebar-k5u8Y9Pb.js";import"./objectWithoutPropertiesLoose-mTU-Rj-z.js";import"./ToastNotification-GiQwRqxR.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CM2cCItZ.js";function M({contactMsgList:r,auth:l,success:n=null,error:c=null}){const i=e=>{window.confirm("Are you sure you want to delete this Inquiry?")&&p.delete(route("admin.contact_delete",e.id))},[o,a]=d.useState(!1),[h,x]=d.useState(null),m=()=>a(!1),j=async e=>{try{const s=await N.get(route("admin.contact_show",e.id)),b=`   <table class="table fw-700">
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
                                </table>`;x(b),a(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(g,{user:l.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Contact Inquiries"}),success:n,error:c,children:[t.jsx(u,{title:"Contact Inquiries List"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Contact Inquiries"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Subject"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:r.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.subject}),t.jsx("td",{children:e.status}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>j(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>i(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(f,{show:o,handleClose:m,data:h,title:"Inquiry Details"})]})}export{M as default};
