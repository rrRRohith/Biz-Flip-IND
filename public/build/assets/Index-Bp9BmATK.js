<<<<<<<< HEAD:public/build/assets/Index-DbzQDQoR.js
import{r as a,j as t,Y as b,y as u,b as N}from"./app-CjewbWUq.js";import{A as g}from"./AdminAuthenticated-B6RdVAZp.js";import{M as y}from"./ModalPopup-BIR1IjbJ.js";import"./Dropdown-CJ6RRfHE.js";import"./AdminSidebar-BByzt6BP.js";import"./listen-wp56gr8a.js";import"./useWindow-Cm-iF9fr.js";import"./Anchor-C1shSEEN.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DXXuAbUi.js";import"./PermissionAllow-CRcCMSN3.js";import"./ToastNotification-Chxa-umb.js";import"./Modal-c1dlaqwH.js";import"./Fade-C6KST17b.js";import"./TransitionGroupContext-BwccNs-L.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-B4YvV15V.js";function Y({Leads:d,auth:i,success:n=null,error:l=null}){const o=e=>{window.confirm("Are you sure you want to delete this Leads?")&&u.delete(route("admin.propery_lead_delete",e.id))},[c,r]=a.useState(!1),[h,m]=a.useState(null),x=()=>r(!1),j=async e=>{try{const s=await N.get(route("admin.propery_lead_show",e.id)),p=`   <table class="table fw-700">
========
import{r as a,j as t,Y as b,y as u,b as N}from"./app-BzHzbjUi.js";import{A as g}from"./AdminAuthenticated-BoOKwFnD.js";import{M as y}from"./ModalPopup-wJ0IhuzX.js";import"./Dropdown-B8zNYMVj.js";import"./AdminSidebar-Cj8lN2XK.js";import"./useMergedRefs-p-XhYV3y.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BiAyyWDW.js";import"./PermissionAllow-r-u98lAn.js";import"./ToastNotification-CNh4IScK.js";import"./Modal-NL7CEDYF.js";import"./TransitionGroupContext-BG4bzCke.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DOHSW8CS.js";function I({Leads:d,auth:i,success:n=null,error:l=null}){const o=e=>{window.confirm("Are you sure you want to delete this Leads?")&&u.delete(route("admin.propery_lead_delete",e.id))},[c,r]=a.useState(!1),[h,m]=a.useState(null),x=()=>r(!1),j=async e=>{try{const s=await N.get(route("admin.propery_lead_show",e.id)),p=`   <table class="table fw-700">
>>>>>>>> bc00db1c78c060f8578295bd60f80eb1c248181a:public/build/assets/Index-Bp9BmATK.js
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
<<<<<<<< HEAD:public/build/assets/Index-DbzQDQoR.js
                                </table>`;m(p),r(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(g,{user:i.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Leads"}),success:n,error:l,children:[t.jsx(b,{title:"Leads List"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Leads"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Agent"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:d.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsx("td",{children:e.property.title}),t.jsxs("td",{children:[e.property.seller.firstname," ",e.property.seller.lastname]}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.status}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>j(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>o(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(y,{show:c,handleClose:x,data:h,title:"Lead Details"})]})}export{Y as default};
========
                                </table>`;m(p),r(!0)}catch(s){console.error("Error fetching data",s)}};return t.jsxs(g,{user:i.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Leads"}),success:n,error:l,children:[t.jsx(b,{title:"Leads List"}),t.jsx("div",{className:"content-wrapper me-4",children:t.jsxs("div",{className:"container-full",children:[t.jsx("div",{className:"content-header",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"d-flex align-items-center",children:t.jsx("div",{className:"me-auto",children:t.jsx("h4",{className:"page-title",children:"Leads"})})})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"text-end"})})]})}),t.jsx("section",{className:"content",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"box",children:t.jsx("div",{className:"box-body",children:t.jsx("div",{className:"table-responsive rounded card-table",children:t.jsxs("table",{className:"table border-no",id:"example1",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Agent"}),t.jsx("th",{children:"Full Name"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Mobile"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Created At"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:d.data.map(e=>t.jsxs("tr",{className:"hover-primary",children:[t.jsx("td",{children:e.id}),t.jsx("td",{children:e.property.title}),t.jsxs("td",{children:[e.property.seller.firstname," ",e.property.seller.lastname]}),t.jsxs("td",{children:[e.firstname," ",e.lastname]}),t.jsx("td",{children:e.email}),t.jsx("td",{children:e.phone}),t.jsx("td",{children:e.status}),t.jsx("td",{children:e.created_at}),t.jsxs("td",{children:[t.jsx("button",{onClick:s=>j(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-eye"})}),t.jsx("button",{onClick:s=>o(e),className:"btn btn-transparent border-0",children:t.jsx("i",{className:"bi bi-trash"})})]})]},e.id))})]})})})})})})})]})}),t.jsx(y,{show:c,handleClose:x,data:h,title:"Lead Details"})]})}export{I as default};
>>>>>>>> bc00db1c78c060f8578295bd60f80eb1c248181a:public/build/assets/Index-Bp9BmATK.js
