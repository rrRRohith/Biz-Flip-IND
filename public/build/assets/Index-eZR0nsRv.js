import{r as i,W as L,j as e,Y as M,a as h,y as Q,b as R}from"./app-CrIMPTAM.js";import{A as q}from"./AdminAuthenticated-CICSNNxp.js";import{P as n}from"./PermissionAllow-D4OnqpEt.js";import{P as C}from"./index-C-fSIBHE.js";import{S as y}from"./sweetalert2.all-BIQR7sDD.js";import{d as r}from"./index-DgLG8iIW.js";/* empty css                                  */import{M as Y}from"./ModalPopup-D3fR-MXv.js";import z from"./ViewCategory-WO775_7b.js";import{P as F}from"./Pagination-cGfwf_NT.js";import"./Dropdown-DWna7aM-.js";import"./AdminHeader-DcWke_fp.js";import"./Dropdown-CPvOAh2o.js";import"./useMergedRefs-D5grdPUn.js";import"./useWindow-CTg7VMSB.js";import"./NavbarContext-B2p1Hk4_.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B_5ZoEoG.js";import"./BootstrapModalManager-BCha_iXF.js";import"./Fade-CTsTf2WB.js";import"./ToastNotification-BalU_MaD.js";import"./ReactToastify-ByO5j3Yb.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-BtSwTQD2.js";import"./slick-theme-Dub2RYYI.js";import"./StatusBtn-Dse9tEuA.js";import"./TabPane-3OpR8s_-.js";import"./DynamicSelect-HXPxDlZQ.js";import"./react-select.esm-evy0UnjZ.js";import"./Select-49a62830.esm-DCQ7NBCt.js";import"./objectSpread2-BGia1Xzf.js";import"./emotion-react.browser.esm-CcBqXpXH.js";import"./hoist-non-react-statics.cjs-BszDc22f.js";import"./objectWithoutPropertiesLoose-_n_vZqlI.js";function H({categoryList:a,auth:v,business_category_options:O}){const[w,x]=i.useState(!1),o=20,[c,p]=i.useState(1),[u,T]=i.useState(""),[S,j]=i.useState(a.data),{data:g,setData:P,post:V,errors:W,reset:G}=L({orderedIds:[]}),A=s=>{y.fire({title:"Are you sure you want to delete this category?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&Q.delete(route("admin.category.destroy",s.id),{onSuccess:()=>{y.fire("Deleted!","Category has been deleted.","success")}})})},I=(s,t)=>{p(t),window.scrollTo(0,0)};i.useEffect(()=>{j(a.data)},[a]);const l=u.length>0?S:a.data,D=(c-1)*o,E=c*o,d=l.slice(D,E);i.useEffect(()=>{b(d)},[d]);const[_,b]=i.useState(d),B=(s=null)=>{T(s);const t=a.data.filter(m=>m.name.toLowerCase().includes(s.toLowerCase()));j(t),b(t),p(1)},k=s=>{const t=s.target.value;B(t)},f=()=>x(!1),N=async s=>{try{const m=(await R.get(route("admin.category.show",s.id))).data;P(m),x(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(q,{user:v.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Categories"}),children:[e.jsx(M,{title:"Category List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Ad Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Ad Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Category Create",children:e.jsxs(h,{className:"btn btn-info text-end",href:route("admin.category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(n,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by Category name...",value:u,onChange:k})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(r.Table,{className:"table border-no",id:"example1",children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{children:"Name"}),e.jsx(r.Th,{className:"text-center",children:"Status"}),e.jsx(r.Th,{children:"Business categories"}),e.jsx(r.Th,{})]})}),e.jsx(r.Tbody,{children:_.map((s,t)=>e.jsxs(r.Tr,{children:[e.jsx(r.Td,{children:e.jsx("strong",{role:"button",onClick:()=>N(s),children:s.name})}),e.jsx(r.Td,{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(r.Td,{children:s.business_categories_list}),e.jsxs(r.Td,{align:"right",children:[e.jsx(n,{permission:"Category Show",children:e.jsx("span",{onClick:()=>N(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(n,{permission:"Category Edit",children:e.jsx(h,{className:"btn btn-transparent",href:route("admin.category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>A(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t))})]})}),l.length>o&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(F,{count:Math.ceil(l.length/o),page:c,onChange:I})})]})})})})})})]})}),e.jsx(Y,{show:w,handleClose:f,size:"md",title:"Ad Category Details",children:g?e.jsx(z,{collection:g,handleClose:f}):"Failed fetching data..."})]})}H.propTypes={categoryList:C.object.isRequired,auth:C.object.isRequired};export{H as default};
