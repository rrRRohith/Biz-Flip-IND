import{W as j,j as e,Y as N,a as m}from"./app-D41T0fGa.js";import{A as b}from"./AdminAuthenticated-B-gBr97n.js";import{S as g}from"./SortableComponent-CC4OqeWr.js";import{I as v}from"./InputLabel-CqAaeXXG.js";import"./Dropdown-BMwrh3Yb.js";import"./AdminHeader-CIYaoX6-.js";import"./PermissionAllow-qpmA6zyp.js";import"./Dropdown-CAuRMyfi.js";import"./useMergedRefs-UB2H-Ypw.js";import"./SSRProvider-D4KCxASD.js";import"./useWindow-z8Co3swi.js";import"./NavbarContext-DIez8F21.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-GGVkxW0X.js";import"./BootstrapModalManager-zqmYjI_v.js";import"./Fade-BXoS1YHl.js";import"./index-DhL8C9L7.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./ToastNotification-BGDkdE4D.js";import"./ReactToastify-8Iqnslit.js";import"./react-beautiful-dnd.esm-DifnpY4W.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./hoist-non-react-statics.cjs-DMWDGzy_.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-OqcbbNZo.js";import"./InputError-C-8LUSJC.js";const f=[{id:"item-1",linkText:"",linkType:"page_link",customLink:""}],V=({auth:r,landingPage:l})=>{const{data:i,setData:a,post:o}=j({title:"",items:f}),c=t=>{if(!t.destination)return;const n=i.items[t.source.index],s=[...i.items];s.splice(t.source.index,1),s.splice(t.destination.index,0,n),a("items",s)},d=()=>{const t={id:`item-${i.items.length+1}`,linkText:"",linkType:"page_link",customLink:""};a("items",[...i.items,t])},p=t=>{const n=i.items.filter((s,u)=>u!==t);a("items",n)},x=(t,n)=>{const s=[...i.items];s[t]=n,a("items",s)},h=t=>{t.preventDefault(),o(route("admin.navigation-menu.store"))};return e.jsxs(b,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(N,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(m,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(v,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:i.title,onChange:t=>a("title",t.target.value)})]}),e.jsx(g,{items:i.items,onDragEnd:c,onAddItem:d,onDeleteItem:p,onChangeItem:x,landingPage:l}),e.jsx("div",{className:"col-lg-12 text-left",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})]})})]})};export{V as default};
