<<<<<<<< HEAD:public/build/assets/Create-0-j44II2nb.js
import{W as _,j as e,Y as y,a as b}from"./app-1W61cHJj.js";import{A as M}from"./AdminAuthenticated-KOuZwmJM.js";import{I as v}from"./InputError-BASFLVK9.js";import{T as f}from"./TextInput-CYkU9j_F.js";import{I as j}from"./InputLabel-B3CMY0KR.js";import{D as U}from"./DynamicSelect-C7-ZKmy2.js";import{v as N}from"./v4-DvF23Exx.js";import"./Dropdown-ChLCVAVs.js";import"./AdminHeader-9zNdcYjW.js";import"./PermissionAllow-Bx3DGybq.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BCmS9dAa.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./react-select.esm-BfdzhtfU.js";import"./Select-49a62830.esm-VWcMs1ZE.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-D9bVkl2G.js";import"./hoist-non-react-statics.cjs-CLxNQMLt.js";const ie=({auth:s})=>{const{data:r,setData:i,post:h,errors:d,reset:o}=_({menuItems:[{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=n=>{n.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{o()}})},x=(n,a,u)=>{const c=I=>I.map(m=>m.id===n?{...m,[a]:u}:m.children.length>0?{...m,children:c(m.children)}:m),t=c(r.menuItems);i("menuItems",t)},l=()=>{i("menuItems",[...r.menuItems,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}])},g=n=>{const a=c=>c.filter(t=>t.id!==n).map(t=>t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)},C=n=>{const a=c=>c.map(t=>t.id===n?{...t,children:[...t.children,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}:t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)};return e.jsxs(M,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(b,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsxs("form",{onSubmit:p,children:[r.menuItems.map(n=>e.jsx(k,{node:n,handleChange:x,handleRemovePart:g,handleAddChild:C,errors:d},n.id)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:l,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success",children:"Save Menu"})})]})})]})})]})},k=({node:s,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d})=>{const o=(l,g)=>{r(s.id,l,g)},p=()=>{h(s.id)},x=()=>{i(s.id)};return e.jsx("div",{className:"tree-node ",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`title-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(f,{id:`title-${s.id}`,className:"form-control",value:s.title,onChange:l=>o("title",l.target.value)}),e.jsx(v,{error:d.title})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`landingpageUrl-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(U,{id:`landingpageUrl-${s.id}`,className:"form-control",value:s.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:l=>o("landingpageUrl",l)})]})}),e.jsx("div",{className:"col-lg-3 ",children:s.landingpageUrl==="custom-link"&&e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`custom_link-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(f,{id:`custom_link-${s.id}`,className:"form-control",value:s.custom_link,onChange:l=>o("custom_link",l.target.value)}),e.jsx(v,{error:d.custom_link})]})}),e.jsx("div",{className:"col-lg-3  text-end",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:x,children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary ms-2",onClick:p,children:"Add Child"})]})}),s.children&&s.children.map(l=>e.jsx(k,{node:l,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d},l.id))]})})})};export{ie as default};
========
import{W as _,j as e,Y as y,a as b}from"./app-3mR5dcr4.js";import{A as M}from"./AdminAuthenticated-BlwLajFx.js";import{I as v}from"./InputError-Du3SBvs4.js";import{T as f}from"./TextInput-BkBK5nx2.js";import{I as j}from"./InputLabel-HAmvNK3t.js";import{D as U}from"./DynamicSelect-DusFDqch.js";import{v as N}from"./v4-DvF23Exx.js";import"./Dropdown-ZEr-Y8i8.js";import"./AdminHeader-BW3uHsMP.js";import"./PermissionAllow-DG8o1wpc.js";import"./Dropdown-CdjKfX0W.js";import"./useMergedRefs-Cxa2RhTo.js";import"./useWindow-DWsydW6I.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DIiL02v3.js";import"./BootstrapModalManager-BNNgC5FG.js";import"./Fade-RO9t0QGZ.js";import"./index-CXQI1DE5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-Ce627oE5.js";import"./ReactToastify-CLUolKJn.js";import"./react-select.esm-SN6pvjJu.js";import"./Select-49a62830.esm-JzTYEEs2.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-DGv-1Euc.js";import"./hoist-non-react-statics.cjs-i33gionF.js";const ie=({auth:s})=>{const{data:r,setData:i,post:h,errors:d,reset:o}=_({menuItems:[{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=n=>{n.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{o()}})},x=(n,a,u)=>{const c=I=>I.map(m=>m.id===n?{...m,[a]:u}:m.children.length>0?{...m,children:c(m.children)}:m),t=c(r.menuItems);i("menuItems",t)},l=()=>{i("menuItems",[...r.menuItems,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}])},g=n=>{const a=c=>c.filter(t=>t.id!==n).map(t=>t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)},C=n=>{const a=c=>c.map(t=>t.id===n?{...t,children:[...t.children,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}:t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)};return e.jsxs(M,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(b,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsxs("form",{onSubmit:p,children:[r.menuItems.map(n=>e.jsx(k,{node:n,handleChange:x,handleRemovePart:g,handleAddChild:C,errors:d},n.id)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:l,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success",children:"Save Menu"})})]})})]})})]})},k=({node:s,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d})=>{const o=(l,g)=>{r(s.id,l,g)},p=()=>{h(s.id)},x=()=>{i(s.id)};return e.jsx("div",{className:"tree-node ",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`title-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(f,{id:`title-${s.id}`,className:"form-control",value:s.title,onChange:l=>o("title",l.target.value)}),e.jsx(v,{error:d.title})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`landingpageUrl-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(U,{id:`landingpageUrl-${s.id}`,className:"form-control",value:s.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:l=>o("landingpageUrl",l)})]})}),e.jsx("div",{className:"col-lg-3 ",children:s.landingpageUrl==="custom-link"&&e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`custom_link-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(f,{id:`custom_link-${s.id}`,className:"form-control",value:s.custom_link,onChange:l=>o("custom_link",l.target.value)}),e.jsx(v,{error:d.custom_link})]})}),e.jsx("div",{className:"col-lg-3  text-end",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:x,children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary ms-2",onClick:p,children:"Add Child"})]})}),s.children&&s.children.map(l=>e.jsx(k,{node:l,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d},l.id))]})})})};export{ie as default};
>>>>>>>> c9be03ff60f4a7293e6db07ca2da3faa2a6d6e95:public/build/assets/Create-0-d8rpFUKy.js
