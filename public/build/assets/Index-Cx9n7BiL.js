import{r as d,W as I,j as e,Y as B,a as l,y as S,b}from"./app-CPHmblyB.js";import{A as P}from"./AdminAuthenticated-Cu-_eB4y.js";import{P as o}from"./PermissionAllow-BwxwuOhX.js";import{Q as A,B as E}from"./ReactToastify-Xt1VQqe3.js";import{S as g}from"./sweetalert2.all-DM8hCQ2F.js";import"./index-CA_DTVAv.js";/* empty css                                  */import{M as k}from"./ModalPopup-CmUcXm6G.js";import $ from"./ViewCategory-l7VEt193.js";import{D as M,C as O,P as R}from"./react-beautiful-dnd.esm-Cfi2Rd1r.js";import"./Dropdown-0CXcFjtq.js";import"./AdminHeader-CSY18d6r.js";import"./Dropdown-QtP6JdFm.js";import"./useMergedRefs-BFO96Tpx.js";import"./SSRProvider-CxlNfGfU.js";import"./useWindow-B4KFCQso.js";import"./NavbarContext-Bbiy1I5a.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-SRguHiia.js";import"./BootstrapModalManager-BFaiKgB2.js";import"./Fade-D2_AvUfd.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-jrEq7tlc.js";import"./ToastNotification-Ci4gm1Z1.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./Modal-Du3TRiBS.js";import"./slick-theme-5I0BuFsp.js";import"./TabView-BbReKAnr.js";import"./TabPane-tGVXYZw1.js";import"./StatusBtn-DcB4b0p_.js";import"./DynamicSelect-uXoqBOIg.js";import"./react-select.esm-Cyx6UeUx.js";import"./Select-49a62830.esm-qKEew1ha.js";import"./objectSpread2-BGia1Xzf.js";import"./emotion-react.browser.esm-CAbDcd6o.js";import"./hoist-non-react-statics.cjs-JylaiONB.js";import"./tiny-invariant.esm-CCoILDQG.js";function Se({categoryList:c,auth:f}){const[N,m]=d.useState(!1),[T,C]=d.useState(c.data),{data:p,setData:h,post:H,errors:L,reset:Y}=I({orderedIds:[]}),w=r=>{g.fire({title:"Are you sure you want to delete this category?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&S.delete(route("admin.business-category.destroy",r.id),{onSuccess:()=>{g.fire("Deleted!","category has been deleted.","success")}})})},[x,y]=d.useState(c.data),u=()=>m(!1),v=async r=>{if(!r.destination)return;const s=Array.from(x),[a]=s.splice(r.source.index,1);s.splice(r.destination.index,0,a);const t=s.map((i,D)=>({...i,position:D+1}));y(t),C(t);const n=t.map(i=>i.id);h("orderedIds",n);try{const i=await b.post(route("admin.business-category.position-update"),{orderedIds:n});E.success(i.data,{position:"top-right",autoClose:5e3,closeOnClick:!0})}catch(i){console.error("Error posting data:",i)}},j=async r=>{try{const a=(await b.get(route("admin.business-category.show",r.id))).data;h(a),m(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(P,{user:f.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Categories"}),children:[e.jsx(B,{title:"Business Category List"}),e.jsx(A,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Business Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(l,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Business Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(o,{permission:"Category Create",children:e.jsx(l,{className:"btn btn-info text-end",href:route("admin.business-category.create"),children:"Create"})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(o,{permission:"Categories Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(M,{onDragEnd:v,children:e.jsx(O,{droppableId:"categories",children:r=>e.jsxs("table",{className:"table border-no ",id:"example1",...r.droppableProps,ref:r.innerRef,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Move Position"}),e.jsx("th",{children:"Name"}),e.jsx("th",{className:"text-center",children:"Status"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[x.map((s,a)=>e.jsx(R,{draggableId:`${s.id}-${s.name}`,index:a,children:(t,n)=>e.jsxs("tr",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,className:` ${n.isDragging?"dragging":""}`,children:[e.jsx("td",{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsx("td",{children:e.jsx("strong",{role:"button",onClick:()=>j(s),children:s.name})}),e.jsx("td",{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs("td",{align:"right",children:[e.jsx(o,{permission:"Category Show",children:e.jsx("span",{onClick:()=>j(s),className:"btn btn-transparent p-2 px-3",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(o,{permission:"Category Edit",children:e.jsx(l,{className:"btn btn-transparent p-2 px-3",href:route("admin.business-category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(o,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>w(s),className:"btn btn-transparent p-2 px-3 border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]})},`${s.id}-${s.name}`)),r.placeholder]})]})})})})})})})})})})]})}),e.jsx(k,{show:N,handleClose:u,size:"md",title:"Business Category Details",children:p?e.jsx($,{collection:p,handleClose:u}):"Failed fetching data..."})]})}export{Se as default};
