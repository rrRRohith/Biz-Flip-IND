<<<<<<< HEAD:public/build/assets/Profile-Bm8Q9uAw.js
import{W as b,r as d,j as e,Y as N}from"./app-xlIuIJsy.js";import"./Dropdown-Dol-GmEj.js";import"./index-BoPl_Y3N.js";import"./PermissionAllow-D1RHxqIQ.js";import y from"./Wrapper-BBAZhQT6.js";import{I as l}from"./InputError-BIxLSMlx.js";import{S as C}from"./react-select.esm-wpzns3_j.js";import"./Header-DQItnz8a.js";import"./ProfileDropdown-Irduj0MZ.js";import"./Dropdown-D_xQ10D-.js";import"./useMergedRefs-Dgr7rqb-.js";import"./SSRProvider-CY2U98zS.js";import"./useWindow-CA08abZi.js";import"./NavbarContext-B8z2EYbj.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-Bykq7ejt.js";import"./ReactToastify-BEIb5fZt.js";import"./TopMenu-CfHYWUAJ.js";import"./Select-49a62830.esm-BqHydHpT.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BoNDEcRd.js";import"./hoist-non-react-statics.cjs-BqazR4wt.js";function T({user:a,queryParams:w=null,auth:m,success:p,error:h,province_options:x}){const{data:r,setData:o,post:j,errors:t,reset:v}=b({picture:"",firstname:a.firstname,lastname:a.lastname,email:a.email,phone:a.phone,password:"",confirm_password:"",address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:""}),[u,c]=d.useState();d.useEffect(()=>{a.picture&&c(a.picture_url)},[a.picture]);const g=s=>{const n=s.target.files[0];n&&(o("picture",n),c(URL.createObjectURL(n)))},i=(s,n)=>{o(s,n)},f=async s=>{s.preventDefault(),await j(route("account.profile.store"),{preserveScroll:!0,onSuccess:()=>{v("confirm_password","password")}})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Profile"}),e.jsx(y,{success:p,error:h,user:m.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your profile settings"}),e.jsx("div",{children:"Update your profile information easily. Change your picture and contact details."}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},alt:"...",src:u})}),e.jsxs("div",{className:"ms-4",children:[e.jsxs("span",{className:"h4 d-block mb-0",children:[r.firstname," ",r.lastname]}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(l,{message:t.picture})]}),e.jsx("input",{onChange:g,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:r.firstname,onChange:s=>i("firstname",s.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(l,{message:t.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:s=>i("lastname",s.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(l,{message:t.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{disabled:!0,value:r.phone,type:"tel",onChange:s=>i("phone",s.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(l,{message:t.phone})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:r.address,onChange:s=>{i("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(l,{message:t.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:r.city,onChange:s=>{i("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(l,{message:t.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:r.postalcode,onChange:s=>{i("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(l,{message:t.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(C,{defaultValue:{value:r.province,label:r.province?r.province:"Select..."},onChange:s=>{i("province",s.value)},options:x}),e.jsx(l,{message:t.province})]})})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end mt-10",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{T as default};
=======
import{W as b,r as d,j as e,Y as N}from"./app-itwJjUX3.js";import"./Dropdown-gO2VTgWX.js";import"./index-l5WsDjp0.js";import"./PermissionAllow-D0TY0oyo.js";import y from"./Wrapper-B9PnvgjQ.js";import{I as l}from"./InputError-BAp5vySU.js";import{S as C}from"./react-select.esm-CY3ZuqwZ.js";import"./Header-C2ukkRW7.js";import"./ProfileDropdown-CQ5bC5EY.js";import"./Dropdown-DxKzW6ad.js";import"./useMergedRefs-avGIJ7As.js";import"./SSRProvider-BTMhcs7e.js";import"./useWindow-YycjxZAG.js";import"./NavbarContext-D8L38UUl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BeZVjDUA.js";import"./ReactToastify-LOs0-z25.js";import"./TopMenu-BbM6zan9.js";import"./Select-49a62830.esm-DoM9QxNl.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BjLfIPvS.js";import"./hoist-non-react-statics.cjs-ryeQnAKc.js";function T({user:a,queryParams:w=null,auth:m,success:p,error:h,province_options:x}){const{data:r,setData:o,post:j,errors:t,reset:v}=b({picture:"",firstname:a.firstname,lastname:a.lastname,email:a.email,phone:a.phone,password:"",confirm_password:"",address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:""}),[u,c]=d.useState();d.useEffect(()=>{a.picture&&c(a.picture_url)},[a.picture]);const g=s=>{const n=s.target.files[0];n&&(o("picture",n),c(URL.createObjectURL(n)))},i=(s,n)=>{o(s,n)},f=async s=>{s.preventDefault(),await j(route("account.profile.store"),{preserveScroll:!0,onSuccess:()=>{v("confirm_password","password")}})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Profile"}),e.jsx(y,{success:p,error:h,user:m.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your profile settings"}),e.jsx("div",{children:"Update your profile information easily. Change your picture and contact details."}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},alt:"...",src:u})}),e.jsxs("div",{className:"ms-4",children:[e.jsxs("span",{className:"h4 d-block mb-0",children:[r.firstname," ",r.lastname]}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(l,{message:t.picture})]}),e.jsx("input",{onChange:g,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:r.firstname,onChange:s=>i("firstname",s.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(l,{message:t.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:s=>i("lastname",s.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(l,{message:t.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{disabled:!0,value:r.phone,type:"tel",onChange:s=>i("phone",s.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(l,{message:t.phone})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:r.address,onChange:s=>{i("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(l,{message:t.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:r.city,onChange:s=>{i("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(l,{message:t.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:r.postalcode,onChange:s=>{i("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(l,{message:t.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(C,{defaultValue:{value:r.province,label:r.province?r.province:"Select..."},onChange:s=>{i("province",s.value)},options:x}),e.jsx(l,{message:t.province})]})})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end mt-10",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{T as default};
>>>>>>> d8d0e48fb030c3c19412ab73f21a9382ef01b7cd:public/build/assets/Profile-B2JKDqXa.js
