<<<<<<< HEAD:public/build/assets/SettingsFormMininal-Cjk8l1VO.js
import{r as c,W as N,j as e}from"./app-xlIuIJsy.js";import"./Dropdown-Dol-GmEj.js";import"./index-BoPl_Y3N.js";import"./PermissionAllow-D1RHxqIQ.js";import"./Wrapper-BBAZhQT6.js";import{S as h}from"./react-select.esm-wpzns3_j.js";import{I as o}from"./InputError-BIxLSMlx.js";import"./Header-DQItnz8a.js";import"./ProfileDropdown-Irduj0MZ.js";import"./Dropdown-D_xQ10D-.js";import"./useMergedRefs-Dgr7rqb-.js";import"./SSRProvider-CY2U98zS.js";import"./useWindow-CA08abZi.js";import"./NavbarContext-B8z2EYbj.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-Bykq7ejt.js";import"./ReactToastify-BEIb5fZt.js";import"./TopMenu-CfHYWUAJ.js";import"./Select-49a62830.esm-BqHydHpT.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BoNDEcRd.js";import"./hoist-non-react-statics.cjs-BqazR4wt.js";const f=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}];function X({seller:a,province_options:p,handleClose:d}){const[x,C]=c.useState(a.days),[u,S]=c.useState(a.social_settings),{data:t,setData:r,post:j,errors:l,reset:_}=N({logo:"",company_name:a.company_name,email:a.email,phone:a.phone,employee:a.employee,short_description:a.short_description,description:a.description,website:a.website,facebook:a.social_links.facebook,twitter:a.social_links.twitter,instagram:a.social_links.instagram,linkedin:a.social_links.linkedin,address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:"",lat:a?a.lat:"",lng:a?a.lng:""}),[v,m]=c.useState("");c.useEffect(()=>{a.logo&&m(a.logo)},[a.logo]);const g=s=>{const n=s.target.files[0];n&&(r("logo",n),m(URL.createObjectURL(n)))},b=(s,n)=>{r(s,n.value)},i=(s,n)=>{r(s,n)},y=async s=>{s.preventDefault(),await j(route("account.settings.store",{days:x,socials:u}),{preserveScroll:!0,onSuccess:()=>{d(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"card rounded-input mb-5",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:v})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(o,{message:l.logo})]}),e.jsx("input",{onChange:g,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:s=>{i("company_name",s.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(o,{message:l.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Short description"}),e.jsx("input",{value:t.short_description,onChange:s=>{i("short_description",s.target.value)},placeholder:"Tell us about your business briefly",className:"form-control"}),e.jsx(o,{message:l.short_description})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{onChange:s=>{i("description",s.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:t.description}),e.jsx(o,{message:l.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(h,{defaultValue:{value:t.employee,label:t.employee},onChange:s=>{b("employee",s)},name:"employee",options:f}),e.jsx(o,{message:l.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:s=>{i("website",s.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(o,{message:l.website})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:s=>{i("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(o,{message:l.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:s=>{i("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(o,{message:l.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:t.postalcode,onChange:s=>{i("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(o,{message:l.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(h,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:s=>{i("province",s.value)},options:p}),e.jsx(o,{message:l.province})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Latitude"}),e.jsx("input",{value:t.lat,onChange:s=>{i("lat",s.target.value)},type:"text",placeholder:"Latitude",className:"form-control"}),e.jsx(o,{message:l.lat})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Longitude"}),e.jsx("input",{value:t.lng,onChange:s=>{i("lng",s.target.value)},type:"text",placeholder:"Longitude",className:"form-control"}),e.jsx(o,{message:l.lng})]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:s=>{i("email",s.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(o,{message:l.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:t.phone,onChange:s=>{i("phone",s.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(o,{message:l.phone})]})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{onClick:d,type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})}export{X as default};
=======
import{r as c,W as N,j as e}from"./app-itwJjUX3.js";import"./Dropdown-gO2VTgWX.js";import"./index-l5WsDjp0.js";import"./PermissionAllow-D0TY0oyo.js";import"./Wrapper-B9PnvgjQ.js";import{S as h}from"./react-select.esm-CY3ZuqwZ.js";import{I as o}from"./InputError-BAp5vySU.js";import"./Header-C2ukkRW7.js";import"./ProfileDropdown-CQ5bC5EY.js";import"./Dropdown-DxKzW6ad.js";import"./useMergedRefs-avGIJ7As.js";import"./SSRProvider-BTMhcs7e.js";import"./useWindow-YycjxZAG.js";import"./NavbarContext-D8L38UUl.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BeZVjDUA.js";import"./ReactToastify-LOs0-z25.js";import"./TopMenu-BbM6zan9.js";import"./Select-49a62830.esm-DoM9QxNl.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BjLfIPvS.js";import"./hoist-non-react-statics.cjs-ryeQnAKc.js";const f=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}];function X({seller:a,province_options:p,handleClose:d}){const[x,C]=c.useState(a.days),[u,S]=c.useState(a.social_settings),{data:t,setData:r,post:j,errors:l,reset:_}=N({logo:"",company_name:a.company_name,email:a.email,phone:a.phone,employee:a.employee,short_description:a.short_description,description:a.description,website:a.website,facebook:a.social_links.facebook,twitter:a.social_links.twitter,instagram:a.social_links.instagram,linkedin:a.social_links.linkedin,address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:"",lat:a?a.lat:"",lng:a?a.lng:""}),[v,m]=c.useState("");c.useEffect(()=>{a.logo&&m(a.logo)},[a.logo]);const g=s=>{const n=s.target.files[0];n&&(r("logo",n),m(URL.createObjectURL(n)))},b=(s,n)=>{r(s,n.value)},i=(s,n)=>{r(s,n)},y=async s=>{s.preventDefault(),await j(route("account.settings.store",{days:x,socials:u}),{preserveScroll:!0,onSuccess:()=>{d(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"card rounded-input mb-5",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:v})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(o,{message:l.logo})]}),e.jsx("input",{onChange:g,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:s=>{i("company_name",s.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(o,{message:l.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Short description"}),e.jsx("input",{value:t.short_description,onChange:s=>{i("short_description",s.target.value)},placeholder:"Tell us about your business briefly",className:"form-control"}),e.jsx(o,{message:l.short_description})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{onChange:s=>{i("description",s.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:t.description}),e.jsx(o,{message:l.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(h,{defaultValue:{value:t.employee,label:t.employee},onChange:s=>{b("employee",s)},name:"employee",options:f}),e.jsx(o,{message:l.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:s=>{i("website",s.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(o,{message:l.website})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:s=>{i("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(o,{message:l.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:s=>{i("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(o,{message:l.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:t.postalcode,onChange:s=>{i("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(o,{message:l.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(h,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:s=>{i("province",s.value)},options:p}),e.jsx(o,{message:l.province})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Latitude"}),e.jsx("input",{value:t.lat,onChange:s=>{i("lat",s.target.value)},type:"text",placeholder:"Latitude",className:"form-control"}),e.jsx(o,{message:l.lat})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Longitude"}),e.jsx("input",{value:t.lng,onChange:s=>{i("lng",s.target.value)},type:"text",placeholder:"Longitude",className:"form-control"}),e.jsx(o,{message:l.lng})]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:s=>{i("email",s.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(o,{message:l.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:t.phone,onChange:s=>{i("phone",s.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(o,{message:l.phone})]})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{onClick:d,type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})}export{X as default};
>>>>>>> d8d0e48fb030c3c19412ab73f21a9382ef01b7cd:public/build/assets/SettingsFormMininal-Be72PNp-.js
