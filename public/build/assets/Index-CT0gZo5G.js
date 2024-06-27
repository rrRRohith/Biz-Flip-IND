import{r,j as e,Y as w,a as c,y}from"./app-hnfrkFZg.js";import{A as T}from"./AdminAuthenticated-Cv4Vg8Vq.js";import{d as t}from"./index-B6i2j1mE.js";import"./PermissionAllow-DpFhgEPZ.js";import{P as S}from"./Pagination-USn0Arz4.js";import"./Dropdown-Ca-UCSU0.js";import"./AdminSidebar-DA2ORclv.js";import"./listen-DT5iH6cS.js";import"./useWindow-BqAU_gkT.js";import"./Anchor-C_LCvmXY.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9RErJyb.js";import"./ToastNotification-EgQe7kOo.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./index-CtPsS-RI.js";import"./emotion-react.browser.esm-ZojVR3yc.js";import"./hoist-non-react-statics.cjs-C5HjtOxa.js";import"./inheritsLoose-1HkgTRWY.js";import"./TransitionGroupContext-DclnSYLS.js";function X({cityList:d,auth:j,success:u=null,error:p=null}){const[n,o]=r.useState(1),[m,b]=r.useState(""),[g,N]=r.useState([]);r.useEffect(()=>{const a=new URLSearchParams(window.location.search).get("name")||"";h(a)},[]);const f=s=>{Swal.fire({title:"Are you sure you want to delete this country?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&y.delete(route("admin.city.destroy",s.id),{onSuccess:()=>{Swal.fire("Deleted!","City has been deleted.","success")}})})},v=(s,a)=>{o(a),window.scrollTo(0,0)},C=s=>{const a=s.target.value;h(a)},h=(s=null)=>{b(s);const a=d.data.filter(i=>i.name.toLowerCase().includes(s.toLowerCase()));N(a),o(1)},l=m.length>0?g:d.data,x=(n-1)*50,P=n*50;return e.jsxs(T,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City"}),success:u,error:p,children:[e.jsx(w,{title:"City List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Cities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Cities"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(c,{className:"btn btn-info text-end",href:route("admin.city.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:m,onChange:C})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsxs("div",{className:"box-body",children:[e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Image"}),e.jsx(t.Th,{children:"Name"}),e.jsx(t.Th,{children:"Position"}),e.jsx(t.Th,{children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:l.slice(x,P).map((s,a)=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx("td",{children:a+x+1}),e.jsxs("td",{children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(c,{className:"btn btn-transparent",href:route("admin.city.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:i=>f(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})}),l.length>50&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(S,{count:Math.ceil(l.length/50),page:n,onChange:v})})]})})})})})]})})]})}export{X as default};
