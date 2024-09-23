import{W as k,j as l,Y as C,a as N}from"./app-1W61cHJj.js";import{A as _}from"./AdminAuthenticated-KOuZwmJM.js";import{I as p}from"./InputError-BASFLVK9.js";import{T as g}from"./TextInput-CYkU9j_F.js";import{I as d}from"./InputLabel-B3CMY0KR.js";import{D as v}from"./DynamicSelect-C7-ZKmy2.js";import"./Dropdown-ChLCVAVs.js";import"./AdminHeader-9zNdcYjW.js";import"./PermissionAllow-Bx3DGybq.js";import"./Dropdown-67hKRfFg.js";import"./useMergedRefs-CIoa9NAg.js";import"./useWindow-CCgofWu_.js";import"./NavbarContext-ywN-jDeO.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BCmS9dAa.js";import"./BootstrapModalManager-B7eYKTIK.js";import"./Fade-BbV7DSrr.js";import"./index-DImNdvR3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BzT7mPO5.js";import"./ReactToastify-ClHQqPCq.js";import"./react-select.esm-BfdzhtfU.js";import"./Select-49a62830.esm-VWcMs1ZE.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./emotion-react.browser.esm-D9bVkl2G.js";import"./hoist-non-react-statics.cjs-CLxNQMLt.js";const sl=({auth:o})=>{const{data:e,setData:i,post:b,errors:n,reset:j}=k({menuItems:[{title:"",landingpageUrl:"",custom_link:"",children:[]}]}),h=()=>{i("menuItems",[...e.menuItems,{title:"",landingpageUrl:"",custom_link:"",children:[]}])},u=t=>{const s=[...e.menuItems];s.splice(t,1),i("menuItems",s)},a=(t,s,m)=>{const c=[...e.menuItems];c[t][s]=m,i("menuItems",c)},r=t=>{const s=[...e.menuItems];s[t].children.push({title:"",landingpageUrl:"page-link",custom_link:"",children:[]}),i("menuItems",s)},x=(t,s)=>{const m=[...e.menuItems];m[t].children.splice(s,1),i("menuItems",m)};return l.jsxs(_,{user:o.user,header:l.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[l.jsx(C,{title:"Navigation Menu Create"}),l.jsx("div",{className:"content-wrapper me-4",children:l.jsxs("div",{className:"container-full",children:[l.jsx("div",{className:"content-header",children:l.jsxs("div",{className:"row",children:[l.jsx("div",{className:"col-lg-6",children:l.jsxs("div",{className:"d-flex flex-column",children:[l.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),l.jsx("div",{className:"d-inline-block align-items-center mt-2",children:l.jsx("nav",{children:l.jsxs("ol",{className:"breadcrumb",children:[l.jsx("li",{className:"breadcrumb-item",children:l.jsxs(N,{href:route("admin.index"),children:[l.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),l.jsx("li",{className:"breadcrumb-item",children:l.jsx(N,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),l.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),l.jsx("div",{className:"col-lg-6"})]})}),l.jsxs("section",{className:"content",children:[e.menuItems.map((t,s)=>l.jsx("div",{className:"mb-4",children:l.jsxs("div",{className:"tree-node row",children:[l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`title-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),l.jsx(g,{id:`title-${s}`,className:"form-control",value:t.title,onChange:m=>a(s,"title",m.target.value)}),l.jsx(p,{error:n.title})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`landingpageUrl-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),l.jsx(v,{id:`landingpageUrl-${s}`,className:"form-control",value:t.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:m=>a(s,"landingpageUrl",m)})]})}),t.landingpageUrl==="custom-link"&&l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`custom_link-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),l.jsx(g,{id:`custom_link-${s}`,className:"form-control",value:t.custom_link,onChange:m=>a(s,"custom_link",m.target.value)}),l.jsx(p,{error:n.custom_link})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"mt-1",children:[l.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:()=>u(s),children:"Remove"}),l.jsx("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>r(s),children:"Add Child"})]})}),t.children.map((m,c)=>l.jsx("div",{className:"mb-4 ml-5",children:l.jsx(f,{node:m,parentIndex:s,childIndex:c,onRemoveParent:()=>x(s,c),onAddChild:()=>r(s),onChange:a,errors:n})},c))]})},s)),l.jsx("div",{className:"mt-1",children:l.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:h,children:"Add Part"})}),l.jsx("div",{className:"mt-3",children:l.jsx("button",{type:"submit",className:"btn btn-sm btn-neutral",children:"Save Menu"})})]})]})})]})},f=({node:o,parentIndex:e,childIndex:i,onRemoveParent:b,onAddChild:n,onChange:j,errors:h})=>{const u=(a,r)=>{j(e,a,r)};return l.jsxs("div",{className:"tree-node row",children:[l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`title-${e}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),l.jsx(g,{id:`title-${e}-${i}`,className:"form-control",value:o.title,onChange:a=>u("title",a.target.value)})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`landingpageUrl-${e}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),l.jsx(v,{id:`landingpageUrl-${e}-${i}`,className:"form-control",value:o.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:a=>u("landingpageUrl",a)})]})}),o.landingpageUrl==="custom-link"&&l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`custom_link-${e}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),l.jsx(g,{id:`custom_link-${e}-${i}`,className:"form-control",value:o.custom_link,onChange:a=>u("custom_link",a.target.value)}),l.jsx(p,{error:h.custom_link})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"mt-1",children:[l.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:()=>b(i),children:"Remove"}),l.jsx("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>n(),children:"Add Child"})]})}),o.children.map((a,r)=>l.jsx("div",{className:"mb-4 ml-5",children:l.jsx(f,{node:a,parentIndex:e,childIndex:r,onRemoveParent:()=>b(r),onAddChild:()=>n(),onChange:j,errors:h})},r))]})};export{sl as default};
