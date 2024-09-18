import{r as c,W as N,j as e}from"./app-Cksvl5er.js";import"./Dropdown-VEgez_ti.js";import"./index-Bk1VfZ7k.js";import"./PermissionAllow-Ce_0d2Qw.js";import"./Wrapper-Bsno47X-.js";import{S as h}from"./react-select.esm-DeZKwFAe.js";import{I as o}from"./InputError-DoaSVOfD.js";import"./Header-Dpr57kmI.js";import"./ProfileDropdown-B_lh-9wV.js";import"./Dropdown-CIaqrQda.js";import"./listen-DWsycqH6.js";import"./useWindow-BALqw6zz.js";import"./Anchor-BJO8hJNl.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-BqIpHI82.js";import"./ReactToastify-1VlLDSZ-.js";import"./Select-49a62830.esm-DnofdlL7.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CtDYaGAH.js";import"./hoist-non-react-statics.cjs-DN7U3f_E.js";const f=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}];function K({seller:a,province_options:p,handleClose:d}){const[x,C]=c.useState(a.days),[u,S]=c.useState(a.social_settings),{data:t,setData:r,post:j,errors:l,reset:_}=N({logo:"",company_name:a.company_name,email:a.email,phone:a.phone,employee:a.employee,short_description:a.short_description,description:a.description,website:a.website,facebook:a.social_links.facebook,twitter:a.social_links.twitter,instagram:a.social_links.instagram,linkedin:a.social_links.linkedin,address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:"",lat:a?a.lat:"",lng:a?a.lng:""}),[v,m]=c.useState("");c.useEffect(()=>{a.logo&&m(a.logo)},[a.logo]);const g=s=>{const n=s.target.files[0];n&&(r("logo",n),m(URL.createObjectURL(n)))},b=(s,n)=>{r(s,n.value)},i=(s,n)=>{r(s,n)},y=async s=>{s.preventDefault(),await j(route("seller.settings.store",{days:x,socials:u}),{preserveScroll:!0,onSuccess:()=>{d(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"card rounded-input mb-5",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:v})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(o,{message:l.logo})]}),e.jsx("input",{onChange:g,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:s=>{i("company_name",s.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(o,{message:l.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Short description"}),e.jsx("input",{value:t.short_description,onChange:s=>{i("short_description",s.target.value)},placeholder:"Tell us about your business briefly",className:"form-control"}),e.jsx(o,{message:l.short_description})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{onChange:s=>{i("description",s.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:t.description}),e.jsx(o,{message:l.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(h,{defaultValue:{value:t.employee,label:t.employee},onChange:s=>{b("employee",s)},name:"employee",options:f}),e.jsx(o,{message:l.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:s=>{i("website",s.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(o,{message:l.website})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:s=>{i("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(o,{message:l.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:s=>{i("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(o,{message:l.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:t.postalcode,onChange:s=>{i("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(o,{message:l.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(h,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:s=>{i("province",s.value)},options:p}),e.jsx(o,{message:l.province})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Latitude"}),e.jsx("input",{value:t.lat,onChange:s=>{i("lat",s.target.value)},type:"text",placeholder:"Latitude",className:"form-control"}),e.jsx(o,{message:l.lat})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Longitude"}),e.jsx("input",{value:t.lng,onChange:s=>{i("lng",s.target.value)},type:"text",placeholder:"Longitude",className:"form-control"}),e.jsx(o,{message:l.lng})]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:s=>{i("email",s.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(o,{message:l.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:t.phone,onChange:s=>{i("phone",s.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(o,{message:l.phone})]})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{onClick:d,type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})})]})})]})}export{K as default};
