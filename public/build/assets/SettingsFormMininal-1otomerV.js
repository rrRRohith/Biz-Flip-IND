import{r as c,W as P,j as e}from"./app-m6jwzREc.js";import"./Dropdown-De-CftB8.js";import"./index-DoH87g0J.js";import"./PermissionAllow-DFKxE1No.js";import"./Wrapper-BDmbUgRz.js";import{S as u}from"./react-select.esm-C4l9KfHj.js";import{I as i}from"./InputError--WutcOn4.js";import{P as A}from"./react-gmap-picker.esm-DBzh7sV4.js";import"./Header-BgyePXWS.js";import"./ProfileDropdown-DxLUntg8.js";import"./Dropdown-DZe-wPe9.js";import"./useMergedRefs-Txjd5-DZ.js";import"./SSRProvider-D3QKeGVy.js";import"./useWindow-DjWiBSqy.js";import"./NavbarContext-DmJk-5Ir.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-DDdeHOU8.js";import"./ReactToastify-BUp-Yjnc.js";import"./TopMenu-CSn-rCfy.js";import"./Footer-DXVMIJ87.js";import"./Select-49a62830.esm-B5h1ngej.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DvY3Merc.js";import"./hoist-non-react-statics.cjs-r4hCWOT5.js";const D=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}];function pe({API_KEY:j,seller:a,province_options:v,handleClose:m}){const[g,E]=c.useState(a.days),[b,M]=c.useState(a.social_settings),{data:t,setData:d,post:y,errors:o,reset:O}=P({logo:"",company_name:a.company_name,email:a.email,phone:a.phone,employee:a.employee,short_description:a.short_description,description:a.description,website:a.website,facebook:a.social_links.facebook,twitter:a.social_links.twitter,instagram:a.social_links.instagram,linkedin:a.social_links.linkedin,address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:"",lat:a?a.lat:"",lng:a?a.lng:"",established:a?a.established:""}),[N,h]=c.useState(""),[r,p]=c.useState(1);c.useState(()=>{a.logo&&h(a.logo)},[a.logo]);const f=s=>{const n=s.target.files[0];n&&(d("logo",n),h(URL.createObjectURL(n)))},S=(s,n)=>{d(s,n.value)},l=(s,n)=>{d(s,n)},C=async s=>{s.preventDefault();const n="account.settings.step"+r;await y(route(n,{days:g,socials:b,location:_}),{preserveScroll:!0,onSuccess:()=>{switch(r){case 1:p(2);break;case 2:p(3);break;case 3:m(!1);break}}})},k={lat:a&&a.lat?a.lat:13.4,lng:a&&a.lng?a.lng:77},w=10,[x,T]=c.useState(k),[_,I]=c.useState(x),[L,Y]=c.useState(w),F=(s,n)=>{I({lat:s,lng:n})};return e.jsxs(e.Fragment,{children:[r==1&&e.jsx("div",{className:"card rounded-input mb-5",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:N})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Upload logo"})]})]}),e.jsx(i,{message:o.logo})]}),e.jsx("input",{onChange:f,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:C,children:[r==1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:s=>{l("company_name",s.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(i,{message:o.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{rows:10,onChange:s=>{l("description",s.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:t.description}),e.jsx(i,{message:o.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(u,{defaultValue:{value:t.employee,label:t.employee},onChange:s=>{S("employee",s)},name:"employee",options:D}),e.jsx(i,{message:o.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:s=>{l("website",s.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(i,{message:o.website})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Established"}),e.jsx("input",{value:t.established,onChange:s=>{l("established",s.target.value)},type:"text",placeholder:"Established year",className:"form-control"})]}),e.jsx(i,{message:o.established})]})]})]}),r==2&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:s=>{l("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(i,{message:o.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:s=>{l("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(i,{message:o.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:t.postalcode,onChange:s=>{l("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(i,{message:o.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(u,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:s=>{l("province",s.value)},options:v}),e.jsx(i,{message:o.province})]})}),e.jsx("div",{className:"col-12",children:e.jsx(A,{defaultLocation:x,zoom:L,mapTypeId:"roadmap",style:{height:"300px"},onChangeLocation:F,apiKey:j})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:s=>{l("email",s.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(i,{message:o.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:t.phone,onChange:s=>{l("phone",s.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(i,{message:o.phone})]})]})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{onClick:m,type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn btn-primary",children:["Save",r==3?e.jsx(e.Fragment,{children:" and close"}):e.jsx(e.Fragment,{children:" and continue"})]})]})})]})})]})}export{pe as default};
