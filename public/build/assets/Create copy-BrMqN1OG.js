import{W as U,j as e,Y as y,a as x}from"./app-BRka-KZj.js";import{A as w}from"./AdminAuthenticated-D0a8WZse.js";import{I as j}from"./InputError-CypHsP44.js";import{T as b}from"./TextInput-CotNzmsA.js";import{I as d}from"./InputLabel-jvZ3Yt4n.js";import{D as k}from"./DynamicSelect-CoM_qe1l.js";import{S as M}from"./index-CUQU88w-.js";import"./Dropdown-l3z-OvCN.js";import"./AdminHeader-B1IVDkuy.js";import"./PermissionAllow-BgpLl_U7.js";import"./Dropdown-DlBPpJII.js";import"./useMergedRefs-CZiAms9R.js";import"./SSRProvider-Dlm-1-Ub.js";import"./useWindow-CuNVpxSP.js";import"./NavbarContext-B8ZcC0Vl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BLBjHt0e.js";import"./BootstrapModalManager-Cjh__IM3.js";import"./Fade-CCdyyhwP.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-3O2AzmWt.js";import"./ToastNotification-GElTyFIB.js";import"./ReactToastify-B7xAIgUs.js";import"./react-select.esm-D2708-DB.js";import"./Select-49a62830.esm-cP5bPbAw.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CLVvkXXn.js";import"./hoist-non-react-statics.cjs-Bl6mVeBR.js";import"./tiny-invariant.esm-CCoILDQG.js";const re=({auth:r})=>{const{data:l,setData:a,post:h,errors:c,reset:g}=U({menuItems:[{title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=i=>{i.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{g()}})},u=()=>{a("menuItems",[...l.menuItems,{title:"",landingpageUrl:"",custom_link:"",children:[]}])},m=i=>{const s=[...l.menuItems];s.splice(i,1),a("menuItems",s)},o=(i,s,t)=>{const n=[...l.menuItems];n[i][s]=t,a("menuItems",n)},v=i=>{const s=[...l.menuItems];s[i].children.push({title:"",landingpageUrl:"page-link",custom_link:"",children:[]}),a("menuItems",s)},_=(i,s)=>{const t=[...l.menuItems];t[i].children.splice(s,1),a("menuItems",t)};return e.jsxs(w,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(x,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsxs("section",{className:"content",children:[l.menuItems.map((i,s)=>e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"tree-node row",children:[e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`title-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(b,{id:`title-${s}`,className:"form-control",value:i.title,onChange:t=>o(s,"title",t.target.value)}),e.jsx(j,{error:c.title})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`landingpageUrl-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(k,{id:`landingpageUrl-${s}`,className:"form-control",value:i.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:t=>o(s,"landingpageUrl",t)})]})}),i.landingpageUrl==="custom-link"&&e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`custom_link-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(b,{id:`custom_link-${s}`,className:"form-control",value:i.custom_link,onChange:t=>o(s,"custom_link",t.target.value)}),e.jsx(j,{error:c.custom_link})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:()=>m(s),children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>v(s),children:"Add Child"})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsx(M,{tag:"div",options:{animation:150,handle:".move-icon",onEnd:({oldIndex:t,newIndex:n})=>{const N=[...l.menuItems],f=N[s].children,[$]=f.splice(t,1);f.splice(n,0,$),a("menuItems",N)}},children:i.children.map((t,n)=>e.jsx("div",{className:"mb-4 ml-5 child-tree-node",children:e.jsx(C,{node:t,parentIndex:s,childIndex:n,onRemoveParent:()=>_(s,n),onAddChild:()=>v(s),onChange:o,errors:c})},n))})})]})},s)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:u,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-sm btn-neutral",onClick:p,children:"Save Menu"})})]})]})})]})},C=({node:r,parentIndex:l,childIndex:a,onRemoveParent:h,onAddChild:c,onChange:g,errors:p})=>{const u=(m,o)=>{g(l,m,o)};return e.jsxs("div",{className:"tree-node row",children:[e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`title-${l}-${a}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(b,{id:`title-${l}-${a}`,className:"form-control",value:r.title,onChange:m=>u("title",m.target.value)})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`landingpageUrl-${l}-${a}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(k,{id:`landingpageUrl-${l}-${a}`,className:"form-control",value:r.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:m=>u("landingpageUrl",m)})]})}),r.landingpageUrl==="custom-link"&&e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`custom_link-${l}-${a}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(b,{id:`custom_link-${l}-${a}`,className:"form-control",value:r.custom_link,onChange:m=>u("custom_link",m.target.value)}),e.jsx(j,{error:p.custom_link})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger move-icon",onClick:()=>h(a),children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary move-icon",onClick:()=>c(),children:"Add Child"})]})}),r.children.map((m,o)=>e.jsx("div",{className:"mb-4 ml-5 child-tree-node",children:e.jsx(C,{node:m,parentIndex:l,childIndex:o,onRemoveParent:()=>h(o),onAddChild:()=>c(l),onChange:g,errors:p})},o))]})};export{re as default};
