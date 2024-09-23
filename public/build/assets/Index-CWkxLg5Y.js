import{r as a,W as B,j as e,Y as Q,a as x,y as R,b as _}from"./app-OIveC4vg.js";import{A as q}from"./AdminAuthenticated-tBKSSTyR.js";import{P as n}from"./PermissionAllow-InpQN_vS.js";import{P as C}from"./index-DO24z29d.js";import{S as y}from"./sweetalert2.all-D3u0yv--.js";import{d as r}from"./index-Bgd1G4Oe.js";/* empty css                                  */import{M as Y}from"./ModalPopup-3118e6Wq.js";import z from"./ViewCategory-BxkLIx0T.js";import{P as F}from"./Pagination--LFkob9f.js";import"./Dropdown-BT5_CmUH.js";import"./AdminHeader-B9F_eyeo.js";import"./Dropdown-CCZ7KOyw.js";import"./useMergedRefs-C14ws7xt.js";import"./useWindow-BKz7HuOD.js";import"./NavbarContext-BfalcnaE.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CISIEJfx.js";import"./BootstrapModalManager-D7nAxY6_.js";import"./Fade-B6ZocwEE.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ToastNotification-B_e3cxiv.js";import"./ReactToastify-k7iD8hA9.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./Modal-CBSZOgBU.js";import"./slick-theme-DmK7pkHA.js";import"./StatusBtn-Xv8JkNy9.js";import"./TabPane-C_lOkj8e.js";import"./DynamicSelect-DILRhJ57.js";import"./react-select.esm-CC62c_7a.js";import"./Select-49a62830.esm-BxixOZo6.js";import"./objectSpread2-fZMFotU9.js";import"./emotion-react.browser.esm-iisuEEUB.js";import"./hoist-non-react-statics.cjs-Bz-59q0U.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function H({categoryList:i,auth:v}){const[w,p]=a.useState(!1),o=20,[l,j]=a.useState(1),[u,T]=a.useState(""),[S,b]=a.useState(i.data),{data:g,setData:P,post:O,errors:V,reset:W}=B({orderedIds:[]}),A=s=>{y.fire({title:"Are you sure you want to delete this category?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&R.delete(route("admin.category.destroy",s.id),{onSuccess:()=>{y.fire("Deleted!","Category has been deleted.","success")}})})},D=(s,t)=>{j(t),window.scrollTo(0,0)};a.useEffect(()=>{b(i.data)},[i]);const d=u.length>0?S:i.data,I=(l-1)*o,k=l*o,m=d.slice(I,k);a.useEffect(()=>{f(m)},[m]);const[E,f]=a.useState(m),L=(s=null)=>{T(s);const t=i.data.filter(h=>h.name.toLowerCase().includes(s.toLowerCase()));b(t),f(t),j(1)},M=s=>{const t=s.target.value;L(t)},N=()=>p(!1),c=async s=>{try{const h=(await _.get(route("admin.category.show",s.id))).data;P(h),p(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(q,{user:v.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Categories"}),children:[e.jsx(Q,{title:"Category List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Ad Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Ad Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Category Create",children:e.jsxs(x,{className:"btn btn-info text-end",href:route("admin.category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(n,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by Category name...",value:u,onChange:M})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(r.Table,{className:"table border-no",id:"example1",children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{children:"Name"}),e.jsx(r.Th,{className:"text-center",children:"Status"}),e.jsx(r.Th,{className:"text-center",children:"Last Modified"}),e.jsx(r.Th,{})]})}),e.jsx(r.Tbody,{children:E.map((s,t)=>e.jsxs(r.Tr,{children:[e.jsx(r.Td,{onClick:()=>c(s),children:s.name}),e.jsx(r.Td,{onClick:()=>c(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(r.Td,{onClick:()=>c(s),className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs(r.Td,{align:"right",children:[e.jsx(n,{permission:"Category Show",children:e.jsx("span",{onClick:()=>c(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(n,{permission:"Category Edit",children:e.jsx(x,{className:"btn btn-transparent",href:route("admin.category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>A(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t))})]})}),d.length>o&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(F,{count:Math.ceil(d.length/o),page:l,onChange:D})})]})})})})})})]})}),e.jsx(Y,{show:w,handleClose:N,size:"md",title:"Ad Category Details",children:g?e.jsx(z,{collection:g,handleClose:N}):"Failed fetching data..."})]})}H.propTypes={categoryList:C.object.isRequired,auth:C.object.isRequired};export{H as default};
