import{j as e,Y as a}from"./app-DcN8zudL.js";import{A as d}from"./AdminAuthenticated-DOp9_PE3.js";import"./sweetalert2.all-Dxtv_aqn.js";import{P as n}from"./PermissionAllow-gmy82ES7.js";import"./Dropdown-CW4W-Z99.js";import"./AdminHeader-BcXv8tNL.js";import"./Dropdown-aPJtcy8e.js";import"./listen-CkIe4jDr.js";import"./useWindow-DFgxe6vw.js";import"./Anchor-C4dP5X3l.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-PahQ3mUt.js";import"./BootstrapModalManager--W_sWn4v.js";import"./Fade-ChvjKj89.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BAa1kz2K.js";import"./ToastNotification-BRXF_Xlh.js";import"./ReactToastify-DXCocdDQ.js";function F({customersList:t,auth:l}){return e.jsxs(d,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Customers"}),children:[e.jsx(a,{title:"Customers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Customers List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Subscribers Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Full Name "}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{children:"     "})]})}),e.jsx("tbody",{children:t.data.map((s,i)=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:i+1}),e.jsxs("td",{children:[e.jsx("img",{src:s.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${s.picture} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),s.firstname," ",s.lastname]}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone}),e.jsx("td",{children:s.updated_at}),e.jsx("td",{})]},i))})]})})})})})})})})]})})]})}export{F as default};