import{r as c,W as O,j as e}from"./app-D_D74tUt.js";import"./Dropdown-qLx94PMu.js";import"./index-BFy5EeX4.js";import"./PermissionAllow-YeKPp4If.js";import"./Wrapper-DIy4KG7k.js";import{S as j}from"./react-select.esm-CV6PdSHX.js";import{I as i}from"./InputError-B1ud7tu6.js";import{P as T}from"./react-gmap-picker.esm-NDR-UTd2.js";import"./Header-CHwRpwWr.js";import"./ProfileDropdown-CEkw_TzO.js";import"./Dropdown-CuF_LXpi.js";import"./useMergedRefs-n2zPvBG-.js";import"./SSRProvider-DXhRavo-.js";import"./useWindow-ClJS8nvT.js";import"./NavbarContext-cqYE-L1I.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-CkGG_adf.js";import"./ReactToastify-Djx545Da.js";import"./TopMenu-jfyFinTK.js";import"./Footer-Cqtccjsz.js";import"./Select-49a62830.esm-DHLKogkW.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-B8v1kUts.js";import"./hoist-non-react-statics.cjs-BtYKNnE3.js";const Y=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],$=[{id:"facebook",label:"Facebook"},{id:"x",label:"X"},{id:"instagram",label:"Instagram"},{id:"linkedin",label:"Linkedin"},{id:"youtube",label:"Youtube"}];function ge({API_KEY:g,seller:s,province_options:v,handleClose:h}){const[y,R]=c.useState(s.days),[m,N]=c.useState(s.social_settings),[p,f]=c.useState(!!(s&&s.lat!=""&&s.lat!="")),{data:t,setData:d,post:k,errors:n,reset:U}=O({logo:"",company_name:s.company_name,email:s.email,phone:s.phone,employee:s.employee,short_description:s.short_description,description:s.description,website:s.website,facebook:s.social_links.facebook,twitter:s.social_links.twitter,instagram:s.social_links.instagram,linkedin:s.social_links.linkedin,address:s?s.address:"",city:s?s.city:"",postalcode:s?s.postalcode:"",province:s?s.province:"",lat:s?s.lat:"",lng:s?s.lng:"",established:s?s.established:"",isMapEnabled:!!(s&&s.lat!=""&&s.lat!="")}),[C,x]=c.useState(""),[r,u]=c.useState(1);c.useState(()=>{s.logo&&x(s.logo)},[s.logo]);const S=a=>{const o=a.target.files[0];o&&(d("logo",o),x(URL.createObjectURL(o)))},w=(a,o)=>{d(a,o.value)},l=(a,o)=>{d(a,o)},_=async a=>{a.preventDefault();const o="account.settings.step"+r;await k(route(o,{days:y,socials:m,location:L}),{preserveScroll:!0,onSuccess:()=>{switch(r){case 1:u(2);break;case 2:u(3);break;case 3:h(!1);break}}})},I={lat:s&&s.lat?s.lat:13.4,lng:s&&s.lng?s.lng:77},F=10,[b,V]=c.useState(I),[L,E]=c.useState(b),[M,W]=c.useState(F),P=(a,o)=>{E({lat:a,lng:o})},A=async a=>{await N(o=>({...o,[a]:!o[a]}))},D=a=>{f(a.target.checked),d("isMapEnabled",a.target.checked)};return e.jsxs(e.Fragment,{children:[r==1&&e.jsx("div",{className:"card rounded-input mb-5",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:C})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Upload logo"})]})]}),e.jsx(i,{message:n.logo})]}),e.jsx("input",{onChange:S,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:_,children:[r==1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:a=>{l("company_name",a.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(i,{message:n.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{rows:10,onChange:a=>{l("description",a.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:t.description}),e.jsx(i,{message:n.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(j,{defaultValue:{value:t.employee,label:t.employee},onChange:a=>{w("employee",a)},name:"employee",options:Y}),e.jsx(i,{message:n.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:a=>{l("website",a.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(i,{message:n.website})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Established"}),e.jsx("input",{value:t.established,onChange:a=>{l("established",a.target.value)},type:"text",placeholder:"Established year",className:"form-control"})]}),e.jsx(i,{message:n.established})]})]})]}),r==2&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:a=>{l("address",a.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(i,{message:n.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:a=>{l("city",a.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(i,{message:n.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:t.postalcode,onChange:a=>{l("postalcode",a.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(i,{message:n.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(j,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:a=>{l("province",a.value)},options:v}),e.jsx(i,{message:n.province})]})}),e.jsxs("div",{className:"col-12 mb-5",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("input",{id:"map",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",name:"map_enable",defaultChecked:p,onChange:D}),e.jsx("label",{role:"button",className:"ms-2",for:"map",children:" Enable Map"})]}),p&&e.jsx("div",{children:e.jsx(T,{defaultLocation:b,zoom:M,mapTypeId:"roadmap",style:{height:"300px"},onChangeLocation:P,apiKey:g})})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:a=>{l("email",a.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(i,{message:n.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:t.phone,onChange:a=>{l("phone",a.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(i,{message:n.phone})]})]})]}),r==3&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Social media"})}),e.jsx("table",{className:"w-100 w-full mb-10",children:e.jsx("tbody",{children:$.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"me-2",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`social_${a.id}`,checked:m[a.id],onChange:()=>A(a.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`social_${a.id}`,children:a.label})]}),e.jsx("div",{children:e.jsxs("small",{children:["Set your ",a.label," page link"]})})]})}),e.jsx("td",{children:m[a.id]&&e.jsx("div",{children:e.jsx("input",{value:t[a.id]??"",onChange:o=>{l(a.id,o.target.value)},type:"text",placeholder:`${a.label} page`,className:"form-control"})})})]},a.id))})})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{onClick:h,type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn btn-primary",children:["Save",r==3?e.jsx(e.Fragment,{children:" and close"}):e.jsx(e.Fragment,{children:" and continue"})]})]})})]})})]})}export{ge as default};
