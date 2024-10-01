import{W as _,j as e,Y as y,a as b}from"./app-BRka-KZj.js";import{A as M}from"./AdminAuthenticated-D0a8WZse.js";import{I as v}from"./InputError-CypHsP44.js";import{T as f}from"./TextInput-CotNzmsA.js";import{I as j}from"./InputLabel-jvZ3Yt4n.js";import{D as U}from"./DynamicSelect-CoM_qe1l.js";import{v as N}from"./v4-DvF23Exx.js";import"./Dropdown-l3z-OvCN.js";import"./AdminHeader-B1IVDkuy.js";import"./PermissionAllow-BgpLl_U7.js";import"./Dropdown-DlBPpJII.js";import"./useMergedRefs-CZiAms9R.js";import"./SSRProvider-Dlm-1-Ub.js";import"./useWindow-CuNVpxSP.js";import"./NavbarContext-B8ZcC0Vl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BLBjHt0e.js";import"./BootstrapModalManager-Cjh__IM3.js";import"./Fade-CCdyyhwP.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-3O2AzmWt.js";import"./ToastNotification-GElTyFIB.js";import"./ReactToastify-B7xAIgUs.js";import"./react-select.esm-D2708-DB.js";import"./Select-49a62830.esm-cP5bPbAw.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CLVvkXXn.js";import"./hoist-non-react-statics.cjs-Bl6mVeBR.js";const ae=({auth:s})=>{const{data:r,setData:i,post:h,errors:o,reset:d}=_({menuItems:[{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=n=>{n.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{d()}})},x=(n,a,u)=>{const c=I=>I.map(m=>m.id===n?{...m,[a]:u}:m.children.length>0?{...m,children:c(m.children)}:m),t=c(r.menuItems);i("menuItems",t)},l=()=>{i("menuItems",[...r.menuItems,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}])},g=n=>{const a=c=>c.filter(t=>t.id!==n).map(t=>t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)},C=n=>{const a=c=>c.map(t=>t.id===n?{...t,children:[...t.children,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}:t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)};return e.jsxs(M,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(b,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsxs("form",{onSubmit:p,children:[r.menuItems.map(n=>e.jsx(k,{node:n,handleChange:x,handleRemovePart:g,handleAddChild:C,errors:o},n.id)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:l,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success",children:"Save Menu"})})]})})]})})]})},k=({node:s,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:o})=>{const d=(l,g)=>{r(s.id,l,g)},p=()=>{h(s.id)},x=()=>{i(s.id)};return e.jsx("div",{className:"tree-node ",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`title-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(f,{id:`title-${s.id}`,className:"form-control",value:s.title,onChange:l=>d("title",l.target.value)}),e.jsx(v,{error:o.title})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`landingpageUrl-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(U,{id:`landingpageUrl-${s.id}`,className:"form-control",value:s.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:l=>d("landingpageUrl",l)})]})}),e.jsx("div",{className:"col-lg-3 ",children:s.landingpageUrl==="custom-link"&&e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`custom_link-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(f,{id:`custom_link-${s.id}`,className:"form-control",value:s.custom_link,onChange:l=>d("custom_link",l.target.value)}),e.jsx(v,{error:o.custom_link})]})}),e.jsx("div",{className:"col-lg-3  text-end",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:x,children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary ms-2",onClick:p,children:"Add Child"})]})}),s.children&&s.children.map(l=>e.jsx(k,{node:l,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:o},l.id))]})})})};export{ae as default};
