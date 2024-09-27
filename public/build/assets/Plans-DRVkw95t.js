import{r as u,W as k,j as e,Y as D,a as A,y as I}from"./app-C_Be1jwZ.js";import{M as F}from"./ModalPopup-ETyD9WAZ.js";import{A as B}from"./AdminAuthenticated-C2osrzw6.js";/* empty css                                  */import{d as a}from"./index-BxBzHHXV.js";import{I as o}from"./InputError-BagiSJ6e.js";import{T as m}from"./TextInput-BeSRt_xy.js";import{I as d}from"./InputLabel-CpwEwnUe.js";import{F as f}from"./Form-LYqItxon.js";import"./SelectOption-BUeH_XMT.js";import"./DynamicSelect-CmYqOVaO.js";import{S as g}from"./sweetalert2.all-CKhwm26G.js";import"./Modal-TWh0wtiB.js";import"./useMergedRefs-Drm3LOLV.js";import"./useWindow-pV3AxwMP.js";import"./BootstrapModalManager-Bw0chMoc.js";import"./Fade-CfNVKMxo.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D82SmN59.js";import"./Dropdown-BZPnonvo.js";import"./AdminHeader-D8yZVA1r.js";import"./PermissionAllow-Bmij6yoq.js";import"./Dropdown-DZcJNce2.js";import"./SSRProvider-DcoMz4P4.js";import"./NavbarContext-BaOOSdYv.js";import"./extends-CF3RwP-h.js";import"./index-Chr8vuT0.js";import"./ToastNotification-CXcIhcAv.js";import"./ReactToastify-C7iM6RHl.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./extends-D4OKFbg0.js";import"./defineProperty-CbP60PBK.js";import"./ElementChildren-Dj7-ZXsq.js";import"./Col-CoUUclA6.js";import"./react-select.esm---he2VZI.js";import"./Select-49a62830.esm-8wMshqvs.js";import"./objectSpread2-BGia1Xzf.js";import"./emotion-react.browser.esm-CvHRklAn.js";import"./hoist-non-react-statics.cjs-kxpDYtxE.js";function we({plans:M,subscribedAgents:E,freePlanAgents:z,invoices:_,auth:C}){u.useState("SubscriptionPlans");const[P,b]=u.useState(!1),[l,j]=u.useState(null),[i,w]=u.useState(""),{data:r,setData:p,post:v,errors:n,reset:N}=k({name:"",description:"",features:"",price:"",ads:"",duration:"1",default:0,visibility:0,status:0}),x=(s,t=null)=>{w(s),t?(j(t),p({name:t.name,description:t.description,features:t.features,price:t.price,ads:t.ads,duration:t.duration,default:t.default,visibility:t.visibility,status:t.status})):N(),b(!0)},c=(s,t)=>{p(s,t)},T=s=>{s.preventDefault(),i==="create"?v(route("admin.subscription.create"),{preserveScroll:!0,onSuccess:()=>h()}):i==="edit"&&v(route("admin.subscription.update",{id:l.id}),{preserveScroll:!0,onSuccess:()=>h()})},h=()=>{b(!1),j(null),N()},S=s=>{g.fire({title:"Are you sure you want to delete this plan?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&I.post(route("admin.subscription.delete",s),{onSuccess:()=>{g.fire("Deleted!","Plan has been deleted.","success")}})})},y=[{value:"1",label:"1 Month"},{value:"2",label:"2 Month"},{value:"3",label:"3 Month"},{value:"4",label:"4 Month"},{value:"5",label:"5 Month"},{value:"6",label:"6 Month"},{value:"7",label:"7 Month"},{value:"8",label:"8 Month"},{value:"9",label:"9 Month"},{value:"10",label:"10 Month"},{value:"11",label:"11 Month"},{value:"12",label:"12 Month"},{value:"13",label:"13 Month"},{value:"14",label:"14 Month"},{value:"15",label:"15 Month"},{value:"16",label:"16 Month"},{value:"17",label:"17 Month"},{value:"18",label:"18 Month"},{value:"19",label:"19 Month"},{value:"2",label:"2 Month"},{value:"22",label:"22 Month"},{value:"23",label:"23 Month"},{value:"24",label:"24 Month"},{value:"25",label:"25 Month"},{value:"26",label:"26 Month"},{value:"27",label:"27 Month"},{value:"27",label:"27 Month"},{value:"28",label:"28 Month"},{value:"29",label:"29 Month"},{value:"30",label:"30 Month"},{value:"31",label:"31 Month"},{value:"32",label:"32 Month"},{value:"33",label:"33 Month"},{value:"34",label:"34 Month"},{value:"35",label:"35 Month"},{value:"36",label:"36 Month"}];return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Subscription Plans"}),e.jsx(B,{user:C.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscription Plans"}),children:e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Subscription Plans"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(A,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Subscription Plans"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("button",{onClick:()=>x("create"),className:"btn btn-info float-end mb-4",children:"Create New Plan"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(a.Table,{className:"table border-no",id:"example1",children:[e.jsx(a.Thead,{children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{children:"#"}),e.jsx(a.Th,{children:"Name"}),e.jsx(a.Th,{className:"text-end",children:"Price"}),e.jsx(a.Th,{className:"text-center",children:"No:of Ads"}),e.jsx(a.Th,{children:"Duration"}),e.jsx(a.Th,{children:"Status"}),e.jsx(a.Th,{className:"text-end",children:"Actions"})]})}),e.jsx(a.Tbody,{children:M.data.map(s=>e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:s.id}),e.jsx(a.Td,{children:s.name}),e.jsx(a.Td,{className:"text-end",children:window.formatPrice(s.price)}),e.jsx(a.Td,{className:"text-center",children:s.ads}),e.jsxs(a.Td,{className:"text-capitalize",children:[s.duration," ",s.duration>1?"months":"month"]}),e.jsx(a.Td,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsxs(a.Td,{className:"text-end",children:[e.jsx("button",{className:"btn btn-transparent p-2 px-3",onClick:()=>x("view",s),children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{className:"btn btn-transparent p-2 px-3",onClick:()=>x("edit",s),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{className:"btn btn-transparent p-2 px-3",onClick:()=>S(s.id),children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})}),e.jsxs(F,{show:P,handleClose:h,size:"md",title:i==="create"?"Create New Plan":i==="edit"?"Edit Plan":"View Plan",children:[i==="view"&&l&&e.jsx("div",{children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Plan Name"}),e.jsx("td",{children:l.name})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Description"}),e.jsx("td",{children:l.description})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Features"}),e.jsx("td",{children:l.features})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Price"}),e.jsx("td",{children:window.formatPrice(l.price)})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"No:of Ads"}),e.jsx("td",{children:l.ads})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Duration"}),e.jsxs("td",{className:"text-capitalize",children:[l.duration," ",l.duration>1?"months":"month"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Status"}),e.jsx("td",{children:l.status_text})]})]})]})}),(i==="edit"||i==="create")&&e.jsxs("form",{onSubmit:T,method:"POST",children:[e.jsxs("div",{className:"modal-body row theme-primary",children:[e.jsxs("div",{className:"col-lg-12 mb-3",children:[e.jsx(d,{value:"Plan Name"}),e.jsx(m,{name:"name",value:r.name,className:"form-control",autoComplete:"name",onChange:s=>c("name",s.target.value)}),e.jsx(o,{message:n.name,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-12 mb-3",children:[e.jsx(d,{value:"Plan Description"}),e.jsx(m,{name:"description",value:r.description,className:"form-control",autoComplete:"description",onChange:s=>c("description",s.target.value)}),e.jsx(o,{message:n.description,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-12 mb-3",children:[e.jsx(d,{value:"Features"}),e.jsx(m,{name:"features",value:r.features,className:"form-control",autoComplete:"features",onChange:s=>c("features",s.target.value)}),e.jsx(o,{message:n.features,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-6 mb-3",children:[e.jsx(d,{value:"Plan Price"}),e.jsx(m,{name:"price",value:r.price,className:"form-control",autoComplete:"price",onChange:s=>c("price",s.target.value)}),e.jsx(o,{message:n.price,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-6 mb-3",children:[e.jsx(d,{value:"No:of Ads"}),e.jsx(m,{name:"ads",value:r.ads,className:"form-control",autoComplete:"ads",onChange:s=>c("ads",s.target.value)}),e.jsx(o,{message:n.ads,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-6 mb-3",children:[e.jsx(d,{value:"Duration"}),e.jsx("select",{name:"duration",value:r.duration??1,onChange:s=>c("duration",s.target.value),className:"form-control bg-white",children:y.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))}),e.jsx(o,{message:n.duration,className:"mt-2"})]}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"form-group mb-20 ps-10",children:[e.jsx(f.Check,{type:"switch",id:"default",name:"default",label:"Default",role:"button",checked:!!r.default,onChange:s=>c("default",s.target.checked)}),e.jsx(o,{message:n.default,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"form-group mb-20 ps-10",children:[e.jsx(f.Check,{type:"switch",id:"status",name:"status",label:"Publish",role:"button",checked:!!r.status,onChange:s=>c("status",s.target.checked)}),e.jsx(o,{message:n.status,className:"mt-2 col-12"})]})})]}),e.jsxs("div",{className:"modal-footer  theme-primary",children:[e.jsx("button",{type:"button",className:"btn  btn-secondary",onClick:h,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn  text-white  btn-success",children:[e.jsx("i",{className:"bi bi-check"}),i==="create"?"Create Plan":"Update Plan"]})]})]})]})]})})})})})})]})})})]})}export{we as default};
