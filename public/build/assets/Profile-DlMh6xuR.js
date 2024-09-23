import{W as b,r as d,j as e,Y as N}from"./app-3mR5dcr4.js";import"./Dropdown-ZEr-Y8i8.js";import"./index-DIiL02v3.js";import"./PermissionAllow-DG8o1wpc.js";import y from"./Wrapper-Bgu9zrSR.js";import{I as l}from"./InputError-Du3SBvs4.js";import{S as C}from"./react-select.esm-SN6pvjJu.js";import"./Header-_tj5AQFI.js";import"./ProfileDropdown-AkfgYUD3.js";import"./Dropdown-CdjKfX0W.js";import"./useMergedRefs-Cxa2RhTo.js";import"./useWindow-DWsydW6I.js";import"./NavbarContext-YjzeEbex.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-Ce627oE5.js";import"./ReactToastify-CLUolKJn.js";import"./Select-49a62830.esm-JzTYEEs2.js";import"./objectSpread2-zE2D4Rih.js";import"./defineProperty-yZu_Kmkx.js";import"./extends-DfGK67Ds.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DGv-1Euc.js";import"./hoist-non-react-statics.cjs-i33gionF.js";function K({user:a,queryParams:w=null,auth:m,success:p,error:h,province_options:x}){const{data:r,setData:o,post:j,errors:t,reset:v}=b({picture:"",firstname:a.firstname,lastname:a.lastname,email:a.email,phone:a.phone,password:"",confirm_password:"",address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:""}),[u,c]=d.useState();d.useEffect(()=>{a.picture&&c(a.picture_url)},[a.picture]);const g=s=>{const n=s.target.files[0];n&&(o("picture",n),c(URL.createObjectURL(n)))},i=(s,n)=>{o(s,n)},f=async s=>{s.preventDefault(),await j(route("account.profile.store"),{preserveScroll:!0,onSuccess:()=>{v("confirm_password","password")}})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Profile"}),e.jsx(y,{success:p,error:h,user:m.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your profile settings"}),e.jsx("div",{children:"Update your profile information easily. Change your picture and contact details."}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},alt:"...",src:u})}),e.jsxs("div",{className:"ms-4",children:[e.jsxs("span",{className:"h4 d-block mb-0",children:[r.firstname," ",r.lastname]}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(l,{message:t.picture})]}),e.jsx("input",{onChange:g,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:r.firstname,onChange:s=>i("firstname",s.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(l,{message:t.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:s=>i("lastname",s.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(l,{message:t.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{disabled:!0,value:r.phone,type:"tel",onChange:s=>i("phone",s.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(l,{message:t.phone})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:r.address,onChange:s=>{i("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(l,{message:t.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:r.city,onChange:s=>{i("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(l,{message:t.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:r.postalcode,onChange:s=>{i("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(l,{message:t.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(C,{defaultValue:{value:r.province,label:r.province?r.province:"Select..."},onChange:s=>{i("province",s.value)},options:x}),e.jsx(l,{message:t.province})]})})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end mt-10",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})})]})})]})})})})]})}export{K as default};
