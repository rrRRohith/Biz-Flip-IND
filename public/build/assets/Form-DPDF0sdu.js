import{r as N,W as f,j as e,Y as g,a as o}from"./app-DFq0yVq5.js";import"./Dropdown-BD6YUdaC.js";import"./index-DVM2IyrG.js";import"./PermissionAllow-D4zdlkCR.js";import k from"./Wrapper-BLliZJiD.js";import{I as m}from"./InputError-C6If64A0.js";import"./Header-Bi-ZyHgu.js";import"./ProfileDropdown-C4Tc1KxP.js";import"./Dropdown-ZvaNFalz.js";import"./useMergedRefs-yvt1E_s8.js";import"./SSRProvider-DDBakYgc.js";import"./useWindow-Cc31lRmn.js";import"./NavbarContext-CTX-ZvmD.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-IPnVRav-.js";import"./ReactToastify-C65YYl7Y.js";import"./TopMenu-Bv7gZj5C.js";import"./Footer-DjpUwvSC.js";function A({role:a,permissions:i,auth:d,success:x,error:h}){const n=a?Object.keys(a.permissions).map(s=>parseInt(s)):[];console.log(n),N.useState({});const p=s=>{let r;t.permissions.includes(s)?r=t.permissions.filter(v=>v!==s):r=[...t.permissions,s],l("permissions",r)},{data:t,setData:l,post:j,errors:c,reset:C}=f({permissions:n||[],name:a?a.name:null,_method:a?"PUT":"POST"}),u=(s,r)=>{l(s,r)},b=async s=>{s.preventDefault(),await j(route(a?"account.roles.update":"account.roles.store",{role:a?a.id:null}),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:a?"Edit role":"Create new role"}),e.jsx(k,{user:d.user,success:x,error:h,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:a?"Edit role":"Create new role"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(o,{href:route("account.roles.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"row g-5",children:[e.jsx("div",{className:"mb-0",children:e.jsx("h4",{children:"Role name"})}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Name"}),e.jsx("input",{value:t.name,onChange:s=>{u("name",s.target.value)},placeholder:"Enter name",className:"form-control"}),e.jsx(m,{message:c.name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Permissions"})}),Object.keys(i).map(s=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-md text-primary",children:s}),e.jsx("div",{children:i[s].map(r=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`permission_${r.id}`,checked:t.permissions.includes(r.id),onChange:()=>p(r.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`permission_${r.id}`,children:r.name})]},r.id)}))})]},s),e.jsx("hr",{})]})),e.jsx(m,{message:c.permissions})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(o,{href:route("account.roles.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})})})]})})})})]})}export{A as default};