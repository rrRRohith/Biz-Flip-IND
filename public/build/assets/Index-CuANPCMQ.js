import{r as m,j as e,Y as M,a as v}from"./app-R6y9gL3g.js";import{A as z}from"./AdminAuthenticated-B2wS1uY8.js";import{P as f}from"./PermissionAllow-D4BwgB5q.js";import{D as i,B as N}from"./Dropdown-BlSHQWGn.js";import{M as h}from"./Modal-CXcZHr5_.js";import{F as l}from"./Form-C0tocSo4.js";import"./Dropdown-DgAiWIoo.js";import"./AdminHeader-CDhl87mA.js";import"./index-CU6KdK5U.js";import"./useMergedRefs-C3t7vQZD.js";import"./BootstrapModalManager-aBqd47xI.js";import"./useWindow-DRSLSfK6.js";import"./Fade-q808BQ0I.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CeBJEy_f.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./NavbarContext-DQxyGIWx.js";import"./extends-CF3RwP-h.js";import"./ToastNotification-DAW1pCwX.js";import"./ReactToastify-BMVUs_yP.js";import"./SSRProvider-xBs2tMT7.js";import"./ElementChildren-Bnk9bHPl.js";import"./Col-Dvm8EQeK.js";function ce({category:C,auth:k}){const[n,u]=m.useState([]),[$,x]=m.useState(!1),[w,F]=m.useState(null),[c,d]=m.useState({name:"",placeholder:"",label:"",required:!1,values:[]}),[j,g]=m.useState(""),o=s=>{const a={type:s,name:"",placeholder:"",label:"",required:!1,values:[]};u([...n,a]),y(n.length)},A=s=>{u(n.filter((a,r)=>r!==s))},y=s=>{d({...n[s]}),F(s),x(!0)},p=s=>{const{name:a,value:r,type:t,checked:b}=s.target;d(L=>({...L,[a]:t==="checkbox"?b:r}))},q=()=>{const s=[...n];s[w]=c,u(s),x(!1)},I=()=>{j.trim()&&(d(s=>({...s,values:[...s.values,j]})),g(""))},E=s=>{d(a=>({...a,values:a.values.filter((r,t)=>t!==s)}))},S=(s,a)=>e.jsxs("div",{className:"mb-3 d-flex align-items-start",children:[e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("label",{htmlFor:`${s.type}-${a}`,className:"form-label",children:s.label||`Field ${a+1}`}),s.type==="textarea"?e.jsx("textarea",{className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control",id:`${s.type}-${a}`,name:s.name,placeholder:s.placeholder,required:s.required}):s.type==="select"?e.jsx("select",{className:"form-control",id:`${s.type}-${a}`,name:s.name,required:s.required,children:s.values.map((r,t)=>e.jsx("option",{value:r,children:r},t))}):s.type==="checkbox"?s.values.map((r,t)=>e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:`${s.type}-${a}-${t}`,value:r}),e.jsx("label",{className:"form-check-label",htmlFor:`${s.type}-${a}-${t}`,children:r})]},t)):s.type==="radio"?s.values.map((r,t)=>e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"radio",id:`${s.type}-${a}-${t}`,name:`radio-group-${a}`,value:r}),e.jsx("label",{className:"form-check-label",htmlFor:`${s.type}-${a}-${t}`,children:r})]},t)):e.jsx("input",{type:s.type,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control",id:`${s.type}-${a}`,name:s.name,placeholder:s.placeholder,required:s.required})]}),e.jsxs("div",{className:"ms-3",children:[e.jsx("button",{type:"button",className:"btn btn-transparent p-2 px-3 btn-sm me-2",onClick:()=>y(a),children:e.jsx("i",{class:"bi bi-pencil"})}),e.jsx("button",{type:"button",className:"btn btn-transparent p-2 px-3 btn-sm",onClick:()=>A(a),children:e.jsx("i",{class:"bi bi-trash"})})]})]},a);return e.jsxs(z,{user:k.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Customize category fields"}),children:[e.jsx(M,{title:"Customize category fields"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Customize category fields"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(v,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(f,{permission:"Categories Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(v,{href:route("admin.category.index"),children:"Categories"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Customize category fields"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row mb-200",children:e.jsxs("div",{className:"col-12 col-xl-6 m-auto",children:[e.jsxs("div",{className:"alert alert-warning",children:["You are currently customizing form fields for ad category ",e.jsx("strong",{children:C.name})]}),e.jsx("div",{className:"box mb-200",children:e.jsx("div",{className:"box-body",children:e.jsx(f,{permission:"Ad Type Edit",message:!0,children:e.jsxs("form",{children:[e.jsx("div",{className:"mt-30"}),n.map((s,a)=>S(s,a)),!n.length&&e.jsx("div",{className:"text-center pb-50 fs-5",children:"Add form fields"}),e.jsxs("div",{className:"form-actions d-flex mt-10 col-lg-12 text-left",children:[e.jsxs(i,{children:[e.jsx(i.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Add new field"}),e.jsxs(i.Menu,{children:[e.jsx(i.Item,{onClick:()=>o("text"),children:"Add text"}),e.jsx(i.Item,{onClick:()=>o("email"),children:"Add email"}),e.jsx(i.Item,{onClick:()=>o("number"),children:"Add number"}),e.jsx(i.Item,{onClick:()=>o("textarea"),children:"Add textarea"}),e.jsx(i.Item,{onClick:()=>o("select"),children:"Add select"}),e.jsx(i.Item,{onClick:()=>o("checkbox"),children:"Add checkbox"}),e.jsx(i.Item,{onClick:()=>o("radio"),children:"Add radio button"})]})]}),e.jsxs("button",{type:"submit",className:"ms-4 btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Save"]})]})]})})})})]})})}),e.jsxs(h,{centered:!0,show:$,onHide:()=>x(!1),children:[e.jsx(h.Header,{closeButton:!0,children:e.jsx(h.Title,{children:"Edit Field"})}),e.jsx(h.Body,{children:e.jsxs(l,{children:[e.jsxs(l.Group,{className:"mb-3",children:[e.jsx(l.Label,{children:"Field Label"}),e.jsx(l.Control,{type:"text",name:"label",value:c.label,onChange:p})]}),e.jsxs(l.Group,{className:"mb-3",children:[e.jsx(l.Label,{children:"Field Name"}),e.jsx(l.Control,{type:"text",name:"name",value:c.name,onChange:p})]}),(c.type==="text"||c.type==="email"||c.type==="number"||c.type==="textarea")&&e.jsxs(l.Group,{className:"mb-3",children:[e.jsx(l.Label,{children:"Placeholder"}),e.jsx(l.Control,{type:"text",name:"placeholder",value:c.placeholder,onChange:p})]}),e.jsx(l.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:e.jsx(l.Check,{type:"checkbox",label:"Required",name:"required",checked:c.required,onChange:p})}),(c.type==="select"||c.type==="checkbox"||c.type==="radio")&&e.jsxs("div",{children:[e.jsxs(l.Group,{className:"mb-3",children:[e.jsx(l.Label,{children:"Add Option"}),e.jsxs("div",{className:"d-flex",children:[e.jsx(l.Control,{type:"text",value:j,onChange:s=>g(s.target.value)}),e.jsx(N,{onClick:I,className:"ms-2 text-white",children:e.jsx("i",{class:"bi bi-plus"})})]})]}),e.jsx("ul",{className:"list-group",children:c.values.map((s,a)=>e.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.jsx(l.Control,{type:"text",value:s,onChange:r=>{const t=[...c.values];t[a]=r.target.value,d(b=>({...b,values:t}))}}),e.jsx("button",{type:"button",className:"btn ms-2 btn-sm btn-danger text-white",onClick:()=>E(a),children:e.jsx("i",{class:"bi bi-trash"})})]},a))})]})]})}),e.jsxs(h.Footer,{children:[e.jsx(N,{variant:"secondary",onClick:()=>x(!1),children:"Close"}),e.jsx(N,{variant:"primary",className:"text-white",onClick:q,children:"Save"})]})]})]})})]})}export{ce as default};
