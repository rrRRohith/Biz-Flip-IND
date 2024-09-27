import{r as c,W as D,j as e}from"./app-CQIRDB_X.js";import"./Dropdown-QRzkMtG8.js";import"./index-CrHqqKcv.js";import"./PermissionAllow-twJbe2hf.js";import"./Wrapper-CcDNTEO7.js";import{S as u}from"./react-select.esm-Binnh_wz.js";import{I as n}from"./InputError-Cmx0lrw6.js";import{P as E}from"./react-gmap-picker.esm-B3D_hQLo.js";import"./Header-BPfH20Qo.js";import"./ProfileDropdown-H_p66_7D.js";import"./Dropdown-BxzEHkzu.js";import"./useMergedRefs-BzCFH6f-.js";import"./SSRProvider-ClyxOBUY.js";import"./useWindow-DgAo-4V8.js";import"./NavbarContext-D_AIF8F9.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-CIvtYDRL.js";import"./ReactToastify-McQGZ74s.js";import"./TopMenu-DSOItgAX.js";import"./Footer-Dt2XqniV.js";import"./Select-49a62830.esm-13r5pgxB.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BJVtzPrT.js";import"./hoist-non-react-statics.cjs-Ezi43cMB.js";const M=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],O=[{id:"facebook",label:"Facebook"},{id:"x",label:"X"},{id:"instagram",label:"Instagram"},{id:"linkedin",label:"Linkedin"},{id:"youtube",label:"Youtube"}];function je({API_KEY:b,seller:s,province_options:g,handleClose:h}){const[v,T]=c.useState(s.days),[d,y]=c.useState(s.social_settings),{data:t,setData:m,post:N,errors:i,reset:Y}=D({logo:"",company_name:s.company_name,email:s.email,phone:s.phone,employee:s.employee,short_description:s.short_description,description:s.description,website:s.website,facebook:s.social_links.facebook,twitter:s.social_links.twitter,instagram:s.social_links.instagram,linkedin:s.social_links.linkedin,address:s?s.address:"",city:s?s.city:"",postalcode:s?s.postalcode:"",province:s?s.province:"",lat:s?s.lat:"",lng:s?s.lng:"",established:s?s.established:""}),[f,p]=c.useState(""),[r,x]=c.useState(1);c.useState(()=>{s.logo&&p(s.logo)},[s.logo]);const k=a=>{const o=a.target.files[0];o&&(m("logo",o),p(URL.createObjectURL(o)))},S=(a,o)=>{m(a,o.value)},l=(a,o)=>{m(a,o)},C=async a=>{a.preventDefault();const o="account.settings.step"+r;await N(route(o,{days:v,socials:d,location:I}),{preserveScroll:!0,onSuccess:()=>{switch(r){case 1:x(2);break;case 2:x(3);break;case 3:h(!1);break}}})},w={lat:s&&s.lat?s.lat:13.4,lng:s&&s.lng?s.lng:77},_=10,[j,$]=c.useState(w),[I,F]=c.useState(j),[L,R]=c.useState(_),P=(a,o)=>{F({lat:a,lng:o})},A=async a=>{await y(o=>({...o,[a]:!o[a]}))};return e.jsxs(e.Fragment,{children:[r==1&&e.jsx("div",{className:"card rounded-input mb-5",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:f})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Upload logo"})]})]}),e.jsx(n,{message:i.logo})]}),e.jsx("input",{onChange:k,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:C,children:[r==1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:a=>{l("company_name",a.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(n,{message:i.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{rows:10,onChange:a=>{l("description",a.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:t.description}),e.jsx(n,{message:i.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(u,{defaultValue:{value:t.employee,label:t.employee},onChange:a=>{S("employee",a)},name:"employee",options:M}),e.jsx(n,{message:i.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:a=>{l("website",a.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(n,{message:i.website})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Established"}),e.jsx("input",{value:t.established,onChange:a=>{l("established",a.target.value)},type:"text",placeholder:"Established year",className:"form-control"})]}),e.jsx(n,{message:i.established})]})]})]}),r==2&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:a=>{l("address",a.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(n,{message:i.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:a=>{l("city",a.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(n,{message:i.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:t.postalcode,onChange:a=>{l("postalcode",a.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(n,{message:i.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(u,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:a=>{l("province",a.value)},options:g}),e.jsx(n,{message:i.province})]})}),e.jsx("div",{className:"col-12",children:e.jsx(E,{defaultLocation:j,zoom:L,mapTypeId:"roadmap",style:{height:"300px"},onChangeLocation:P,apiKey:b})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:a=>{l("email",a.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(n,{message:i.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:t.phone,onChange:a=>{l("phone",a.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(n,{message:i.phone})]})]})]}),r==3&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Social media"})}),e.jsx("table",{className:"w-100 w-full mb-10",children:e.jsx("tbody",{children:O.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"me-2",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`social_${a.id}`,checked:d[a.id],onChange:()=>A(a.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`social_${a.id}`,children:a.label})]}),e.jsx("div",{children:e.jsxs("small",{children:["Set your ",a.label," page link"]})})]})}),e.jsx("td",{children:d[a.id]&&e.jsx("div",{children:e.jsx("input",{value:t[a.id]??"",onChange:o=>{l(a.id,o.target.value)},type:"text",placeholder:`${a.label} page`,className:"form-control"})})})]},a.id))})})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{onClick:h,type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn btn-primary",children:["Save",r==3?e.jsx(e.Fragment,{children:" and close"}):e.jsx(e.Fragment,{children:" and continue"})]})]})})]})})]})}export{je as default};