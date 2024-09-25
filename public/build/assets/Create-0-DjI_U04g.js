import{W as _,j as e,Y as y,a as b}from"./app-BEKZL5x1.js";import{A as M}from"./AdminAuthenticated-C84VsSbs.js";import{I as v}from"./InputError-CQY9oav2.js";import{T as f}from"./TextInput-D9Rh1z9Y.js";import{I as j}from"./InputLabel-DCVzNYft.js";import{D as U}from"./DynamicSelect-D7_wODRj.js";import{v as N}from"./v4-DvF23Exx.js";import"./Dropdown-DGn_KBEm.js";import"./AdminHeader-D58O1fOc.js";import"./PermissionAllow-BbQxP1Mu.js";import"./Dropdown-B6WWaJh1.js";import"./useMergedRefs-ClJ-oN-K.js";import"./SSRProvider-3O-wO1Tx.js";import"./useWindow-Q1YcEkHp.js";import"./NavbarContext-BMTg8RK9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-RfT9s9Qk.js";import"./BootstrapModalManager-DKhs2w8P.js";import"./Fade-BYEExXAF.js";import"./index-mzBByKJf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-O0cBrXff.js";import"./ReactToastify-BH1m3FPZ.js";import"./react-select.esm-CXe0J0MK.js";import"./Select-49a62830.esm-BkUeoM76.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CEhjs0WD.js";import"./hoist-non-react-statics.cjs-BsFk7wc9.js";const ae=({auth:s})=>{const{data:r,setData:i,post:h,errors:o,reset:d}=_({menuItems:[{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=n=>{n.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{d()}})},x=(n,a,u)=>{const c=I=>I.map(m=>m.id===n?{...m,[a]:u}:m.children.length>0?{...m,children:c(m.children)}:m),t=c(r.menuItems);i("menuItems",t)},l=()=>{i("menuItems",[...r.menuItems,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}])},g=n=>{const a=c=>c.filter(t=>t.id!==n).map(t=>t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)},C=n=>{const a=c=>c.map(t=>t.id===n?{...t,children:[...t.children,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}:t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)};return e.jsxs(M,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(b,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsxs("form",{onSubmit:p,children:[r.menuItems.map(n=>e.jsx(k,{node:n,handleChange:x,handleRemovePart:g,handleAddChild:C,errors:o},n.id)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:l,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success",children:"Save Menu"})})]})})]})})]})},k=({node:s,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:o})=>{const d=(l,g)=>{r(s.id,l,g)},p=()=>{h(s.id)},x=()=>{i(s.id)};return e.jsx("div",{className:"tree-node ",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`title-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(f,{id:`title-${s.id}`,className:"form-control",value:s.title,onChange:l=>d("title",l.target.value)}),e.jsx(v,{error:o.title})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`landingpageUrl-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(U,{id:`landingpageUrl-${s.id}`,className:"form-control",value:s.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:l=>d("landingpageUrl",l)})]})}),e.jsx("div",{className:"col-lg-3 ",children:s.landingpageUrl==="custom-link"&&e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`custom_link-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(f,{id:`custom_link-${s.id}`,className:"form-control",value:s.custom_link,onChange:l=>d("custom_link",l.target.value)}),e.jsx(v,{error:o.custom_link})]})}),e.jsx("div",{className:"col-lg-3  text-end",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:x,children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary ms-2",onClick:p,children:"Add Child"})]})}),s.children&&s.children.map(l=>e.jsx(k,{node:l,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:o},l.id))]})})})};export{ae as default};
