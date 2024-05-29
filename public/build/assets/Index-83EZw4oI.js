import{r as d,j as t,Y as b,y as u,b as N}from"./app-Ce4nVPSv.js";import{A as g}from"./AdminAuthenticated-DFE4wL38.js";import{M as y}from"./ModalPopup-DJLZWl8T.js";import"./Dropdown-BaINlLOw.js";import"./AdminSidebar-C_IBhiI5.js";import"./ToastNotification-Cst6kWz9.js";import"./index-DGJWvmkl.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ThemeProvider-BZdLA0m-.js";function M({Leads:r,auth:n,success:l=null,error:i=null}){console.log(r);const o=e=>{window.confirm("Are you sure you want to delete this Leads?")&&u.delete(route("admin.propery_lead_delete",e.id))},[c,a]=d.useState(!1),[h,m]=d.useState(null),x=()=>a(!1),j=async e=>{try{const s=await N.get(route("admin.propery_lead_show",e.id)),p=`   <table class="table fw-700">
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
                                </table>`;m(p),a(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(g,{user:n.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Leads"}),success:l,error:i,children:[t.jsx(b,{title:"Leads List"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Leads"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Agent"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:r.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsx("td",{children:e.property.title}),t.jsxs("td",{children:[e.property.seller.firstname," ",e.property.seller.lastname]}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.status}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>j(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>o(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(y,{show:c,handleClose:x,data:h,title:"Lead Details"})]})}export{M as default};