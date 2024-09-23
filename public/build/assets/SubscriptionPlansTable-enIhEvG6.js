import{r as h,W as w,j as e,y as D}from"./app-OIveC4vg.js";import{M as k}from"./ModalPopup-3118e6Wq.js";import{d as s}from"./index-Bgd1G4Oe.js";import{I as c}from"./InputError-XKtWHHBC.js";import{T as m}from"./TextInput-lVSeuO6k.js";import{I as d}from"./InputLabel-DWC1Vcc3.js";/* empty css                                  */import{F as N}from"./Form-JIihCp9k.js";import{S as A}from"./SelectOption-DM1n37jW.js";import"./DynamicSelect-DILRhJ57.js";import{S as M}from"./sweetalert2.all-D3u0yv--.js";import"./Modal-CBSZOgBU.js";import"./useMergedRefs-C14ws7xt.js";import"./useWindow-BKz7HuOD.js";import"./BootstrapModalManager-D7nAxY6_.js";import"./Fade-B6ZocwEE.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DO24z29d.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./ElementChildren-DbRJ-GKy.js";import"./Col-Yi2DZfoo.js";import"./react-select.esm-CC62c_7a.js";import"./Select-49a62830.esm-BxixOZo6.js";import"./objectSpread2-fZMFotU9.js";import"./extends-CCbyfPlC.js";import"./emotion-react.browser.esm-iisuEEUB.js";import"./hoist-non-react-statics.cjs-Bz-59q0U.js";function ce({plans:g}){const[C,x]=h.useState(!1),[l,b]=h.useState(null),[r,T]=h.useState(""),{data:n,setData:j,post:v,errors:o,reset:p}=w({name:"",description:"",features:"",price:"",ads:"",duration:"1",default:"0",visibility:"0",status:"0"}),f=(t,a=null)=>{T(t),a?(b(a),j({name:a.name,description:a.description,features:a.features,price:a.price,ads:a.ads,duration:a.duration,default:a.default,visibility:a.visibility,status:a.status})):p(),x(!0)},i=(t,a)=>{j(t,a)},y=t=>{t.preventDefault(),r==="create"?v(route("admin.subscription.create"),{preserveScroll:!0,onSuccess:()=>u()}):r==="edit"&&v(route("admin.subscription.update",{id:l.id}),{preserveScroll:!0,onSuccess:()=>u()})},u=()=>{x(!1),b(null),p()},P=t=>{M.fire({title:"Are you sure you want to delete this plan?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&D.post(route("admin.subscription.delete",t),{onSuccess:()=>{M.fire("Deleted!","Plan has been deleted.","success")}})})},S=[{value:"1",label:"1 Month"},{value:"2",label:"2 Month"},{value:"3",label:"3 Month"},{value:"4",label:"4 Month"},{value:"5",label:"5 Month"},{value:"6",label:"6 Month"},{value:"7",label:"7 Month"},{value:"8",label:"8 Month"},{value:"9",label:"9 Month"},{value:"10",label:"10 Month"},{value:"11",label:"11 Month"},{value:"12",label:"12 Month"},{value:"13",label:"13 Month"},{value:"14",label:"14 Month"},{value:"15",label:"15 Month"},{value:"16",label:"16 Month"},{value:"17",label:"17 Month"},{value:"18",label:"18 Month"},{value:"19",label:"19 Month"},{value:"2",label:"2 Month"},{value:"22",label:"22 Month"},{value:"23",label:"23 Month"},{value:"24",label:"24 Month"},{value:"25",label:"25 Month"},{value:"26",label:"26 Month"},{value:"27",label:"27 Month"},{value:"27",label:"27 Month"},{value:"28",label:"28 Month"},{value:"29",label:"29 Month"},{value:"30",label:"30 Month"},{value:"31",label:"31 Month"},{value:"32",label:"32 Month"},{value:"33",label:"33 Month"},{value:"34",label:"34 Month"},{value:"35",label:"35 Month"},{value:"36",label:"36 Month"}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Price"}),e.jsx(s.Th,{children:"No:of Ads"}),e.jsx(s.Th,{children:"Duration"}),e.jsx(s.Th,{className:"text-end",children:"Actions"})]})}),e.jsx(s.Tbody,{children:g.data.map(t=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:t.id}),e.jsx(s.Td,{children:t.name}),e.jsx(s.Td,{children:t.price}),e.jsx(s.Td,{children:t.ads}),e.jsx(s.Td,{children:t.duration}),e.jsxs(s.Td,{className:"text-end",children:[e.jsx("button",{className:"btn btn-transparent",onClick:()=>f("view",t),children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{className:"btn btn-transparent",onClick:()=>f("edit",t),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{className:"btn btn-transparent",onClick:()=>P(t.id),children:e.jsx("i",{className:"bi bi-trash"})})]})]},t.id))})]})})}),e.jsxs(k,{show:C,handleClose:u,size:"md",title:r==="create"?"Create New Plan":r==="edit"?"Edit Plan":"View Plan",children:[r==="view"&&l&&e.jsx("div",{children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Plan Name"}),e.jsx("td",{children:l.name})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Description"}),e.jsx("td",{children:l.description})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Features"}),e.jsx("td",{children:l.features})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Price"}),e.jsx("td",{children:l.price})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"No:of Ads"}),e.jsx("td",{children:l.ads})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Duration"}),e.jsx("td",{children:l.duration})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Status"}),e.jsx("td",{children:l.status_text})]})]})]})}),(r==="edit"||r==="create")&&e.jsxs("form",{onSubmit:y,method:"POST",children:[e.jsxs("div",{className:"modal-body row",children:[e.jsxs("div",{className:"col-lg-12 mb-3",children:[e.jsx(d,{value:"Plan Name"}),e.jsx(m,{name:"name",value:n.name,className:"form-control",autoComplete:"name",onChange:t=>i("name",t.target.value)}),e.jsx(c,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-12 mb-3",children:[e.jsx(d,{value:"Plan Description"}),e.jsx(m,{name:"description",value:n.description,className:"form-control",autoComplete:"description",onChange:t=>i("description",t.target.value)}),e.jsx(c,{message:o.description,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-12 mb-3",children:[e.jsx(d,{value:"Features"}),e.jsx(m,{name:"features",value:n.features,className:"form-control",autoComplete:"features",onChange:t=>i("features",t.target.value)}),e.jsx(c,{message:o.features,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-6 mb-3",children:[e.jsx(d,{value:"Plan Price"}),e.jsx(m,{name:"price",value:n.price,className:"form-control",autoComplete:"price",onChange:t=>i("price",t.target.value)}),e.jsx(c,{message:o.price,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-6 mb-3",children:[e.jsx(d,{value:"No:of Ads"}),e.jsx(m,{name:"ads",value:n.ads,className:"form-control",autoComplete:"ads",onChange:t=>i("ads",t.target.value)}),e.jsx(c,{message:o.ads,className:"mt-2"})]}),e.jsxs("div",{className:"col-lg-6 mb-3",children:[e.jsx(d,{value:"Duration"}),e.jsx(A,{name:"duration",items:S,onChange:t=>i("duration",t.target.value),value:n.duration}),e.jsx(c,{message:o.duration,className:"mt-2"})]}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"form-group mb-20 ps-10",children:[e.jsx(N.Check,{type:"switch",id:"default",name:"default",label:"Default",role:"button",onChange:t=>i("default",t.target.checked?n.default:0)}),e.jsx(c,{message:o.default,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"form-group mb-20 ps-10",children:[e.jsx(N.Check,{type:"switch",id:"status",name:"status",label:"Publish",role:"button",onChange:t=>i("status",t.target.checked?n.status:0)}),e.jsx(c,{message:o.status,className:"mt-2 col-12"})]})})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:u,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:r==="create"?"Create Plan":"Update Plan"})]})]})]})]})}export{ce as default};
