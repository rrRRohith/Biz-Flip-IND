import{W as k,j as l,Y as C,a as N}from"./app-DqEs7Bkv.js";import{A as _}from"./AdminAuthenticated-8TtlGUvq.js";import{I as p}from"./InputError-D28HyOFN.js";import{T as g}from"./TextInput-DbDcmex8.js";import{I as d}from"./InputLabel-Dok6018G.js";import{D as v}from"./DynamicSelect-C6qYJtHS.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./PermissionAllow-De5fAs-K.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./ToastNotification-p7KpGbX9.js";import"./react-select-creatable.esm-6Dbc75pq.js";import"./inherits-BIvzEtgb.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./emotion-react.browser.esm-CFsy6mXa.js";import"./inherits-DEw0FBPK.js";import"./hoist-non-react-statics.cjs-CYd8FKoI.js";const V=({auth:n})=>{const{data:e,setData:i,post:b,errors:o,reset:j}=k({menuItems:[{title:"",landingpageUrl:"",custom_link:"",children:[]}]}),h=()=>{i("menuItems",[...e.menuItems,{title:"",landingpageUrl:"",custom_link:"",children:[]}])},u=t=>{const s=[...e.menuItems];s.splice(t,1),i("menuItems",s)},a=(t,s,m)=>{const c=[...e.menuItems];c[t][s]=m,i("menuItems",c)},r=t=>{const s=[...e.menuItems];s[t].children.push({title:"",landingpageUrl:"page-link",custom_link:"",children:[]}),i("menuItems",s)},x=(t,s)=>{const m=[...e.menuItems];m[t].children.splice(s,1),i("menuItems",m)};return l.jsxs(_,{user:n.user,header:l.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[l.jsx(C,{title:"Navigation Menu Create"}),l.jsx("div",{className:"content-wrapper me-4",children:l.jsxs("div",{className:"container-full",children:[l.jsx("div",{className:"content-header",children:l.jsxs("div",{className:"row",children:[l.jsx("div",{className:"col-lg-6",children:l.jsxs("div",{className:"d-flex flex-column",children:[l.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),l.jsx("div",{className:"d-inline-block align-items-center mt-2",children:l.jsx("nav",{children:l.jsxs("ol",{className:"breadcrumb",children:[l.jsx("li",{className:"breadcrumb-item",children:l.jsxs(N,{href:route("admin.index"),children:[l.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),l.jsx("li",{className:"breadcrumb-item",children:l.jsx(N,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),l.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),l.jsx("div",{className:"col-lg-6"})]})}),l.jsxs("section",{className:"content",children:[e.menuItems.map((t,s)=>l.jsx("div",{className:"mb-4",children:l.jsxs("div",{className:"tree-node row",children:[l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`title-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),l.jsx(g,{id:`title-${s}`,className:"form-control",value:t.title,onChange:m=>a(s,"title",m.target.value)}),l.jsx(p,{error:o.title})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`landingpageUrl-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),l.jsx(v,{id:`landingpageUrl-${s}`,className:"form-control",value:t.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:m=>a(s,"landingpageUrl",m)})]})}),t.landingpageUrl==="custom-link"&&l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`custom_link-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),l.jsx(g,{id:`custom_link-${s}`,className:"form-control",value:t.custom_link,onChange:m=>a(s,"custom_link",m.target.value)}),l.jsx(p,{error:o.custom_link})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"mt-1",children:[l.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:()=>u(s),children:"Remove"}),l.jsx("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>r(s),children:"Add Child"})]})}),t.children.map((m,c)=>l.jsx("div",{className:"mb-4 ml-5",children:l.jsx(f,{node:m,parentIndex:s,childIndex:c,onRemoveParent:()=>x(s,c),onAddChild:()=>r(s),onChange:a,errors:o})},c))]})},s)),l.jsx("div",{className:"mt-1",children:l.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:h,children:"Add Part"})}),l.jsx("div",{className:"mt-3",children:l.jsx("button",{type:"submit",className:"btn btn-sm btn-neutral",children:"Save Menu"})})]})]})})]})},f=({node:n,parentIndex:e,childIndex:i,onRemoveParent:b,onAddChild:o,onChange:j,errors:h})=>{const u=(a,r)=>{j(e,a,r)};return l.jsxs("div",{className:"tree-node row",children:[l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`title-${e}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),l.jsx(g,{id:`title-${e}-${i}`,className:"form-control",value:n.title,onChange:a=>u("title",a.target.value)})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`landingpageUrl-${e}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),l.jsx(v,{id:`landingpageUrl-${e}-${i}`,className:"form-control",value:n.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:a=>u("landingpageUrl",a)})]})}),n.landingpageUrl==="custom-link"&&l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"form-group",children:[l.jsx(d,{htmlFor:`custom_link-${e}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),l.jsx(g,{id:`custom_link-${e}-${i}`,className:"form-control",value:n.custom_link,onChange:a=>u("custom_link",a.target.value)}),l.jsx(p,{error:h.custom_link})]})}),l.jsx("div",{className:"col-lg-3 mb-3",children:l.jsxs("div",{className:"mt-1",children:[l.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:()=>b(i),children:"Remove"}),l.jsx("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>o(),children:"Add Child"})]})}),n.children.map((a,r)=>l.jsx("div",{className:"mb-4 ml-5",children:l.jsx(f,{node:a,parentIndex:e,childIndex:r,onRemoveParent:()=>b(r),onAddChild:()=>o(),onChange:j,errors:h})},r))]})};export{V as default};
