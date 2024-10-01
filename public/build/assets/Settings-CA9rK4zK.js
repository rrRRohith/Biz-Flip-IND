import{r as c,W as O,j as e,Y as T}from"./app-BsOJghhl.js";import"./Dropdown-BYzwnsEO.js";import"./index-DkcNz8M8.js";import"./PermissionAllow-YX3Tka-N.js";import U from"./Wrapper-C2MOBHOB.js";import{S as x}from"./react-select.esm-C4QHfAis.js";import{I as o}from"./InputError-yWYu4p-W.js";import{P as B}from"./react-gmap-picker.esm-BNN-3WyY.js";import{u as R}from"./useMask-BiZZ6Hzv.js";import"./Header-CQbeWHhR.js";import"./ProfileDropdown-D4mOfFQ6.js";import"./Dropdown-DrWaoWjp.js";import"./useMergedRefs-BTu5Tfsf.js";import"./SSRProvider-CLPcrxiC.js";import"./useWindow-BMkORsZB.js";import"./NavbarContext-BWF44MDB.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-BFMfi9dG.js";import"./ReactToastify-2rcHb9Do.js";import"./TopMenu-DuD2N9_7.js";import"./Footer-D8p53Sn3.js";import"./SocialLinks-D4aIjqkN.js";import"./Select-49a62830.esm-BKRU5Dry.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CVLQRJoG.js";import"./hoist-non-react-statics.cjs-Chw3-TuI.js";const V=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],W=[{id:"facebook",label:"Facebook"},{id:"x",label:"X"},{id:"instagram",label:"Instagram"},{id:"linkedin",label:"Linkedin"},{id:"youtube",label:"Youtube"}];function Se({seller:s,auth:u,success:j,error:b,province_options:g,API_KEY:v}){const y=R({mask:"(___) ___-____",replacement:{_:/\d/}}),[f,Z]=c.useState(s.days),[d,N]=c.useState(s.social_settings),[m,k]=c.useState(!!(s&&s.lat!=""&&s.lat!="")),_=a=>{if(!a)return"";const t=a.replace(/\D/g,"");return t.length<10?a:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,10)}`},{data:n,setData:r,post:C,errors:l,reset:z}=O({logo:"",company_name:s.company_name,email:s.email,phone:_(s.phone),employee:s.employee,short_description:s.short_description,description:s.description,website:s.website,facebook:s.social_links.facebook,x:s.social_links.x,instagram:s.social_links.instagram,linkedin:s.social_links.linkedin,youtube:s.social_links.youtube,address:s?s.address:"",city:s?s.city:"",postalcode:s?s.postalcode:"",province:s?s.province:"",lat:s?s.lat:"",lng:s?s.lng:"",established:s?s.established:"",isMapEnabled:!!(s&&s.lat!=""&&s.lat!="")}),[S,h]=c.useState(""),w=a=>{k(a.target.checked),r("isMapEnabled",a.target.checked)},L=a=>{const t=a.target.files[0];t&&(r("logo",t),h(URL.createObjectURL(t)))},I=(a,t)=>{r(a,t.value)},i=(a,t)=>{r(a,t)},E=async a=>{a.preventDefault(),await C(route("account.settings.store",{days:f,socials:d,location:D}),{preserveScroll:!0,onSuccess:()=>{}})},M=async a=>{await N(t=>({...t,[a]:!t[a]}))},P={lat:s&&s.lat?s.lat:13.4,lng:s&&s.lng?s.lng:77},A=10,[p,K]=c.useState(P),[D,Y]=c.useState(p),[$,X]=c.useState(A),F=(a,t)=>{Y({lat:a,lng:t})};return c.useState(()=>{s.logo&&h(s.logo)},[s.logo]),e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Settings"}),e.jsx(U,{user:u.user,success:j,error:b,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your business settings"}),e.jsx("div",{children:"Manage your business information easily. Update your profile, contact details, and company description."}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:S})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:n.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Upload logo"})]})]}),e.jsx(o,{message:l.logo})]}),e.jsx("input",{onChange:L,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:E,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Business name"}),e.jsx("span",{class:"text-danger",children:" *"}),e.jsx("input",{value:n.company_name,onChange:a=>{i("company_name",a.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(o,{message:l.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("span",{class:"text-danger",children:" *"}),e.jsx("textarea",{rows:10,onChange:a=>{i("description",a.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",defaultValue:n.description}),e.jsx(o,{message:l.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx("small",{children:" (optional)"}),e.jsx(x,{defaultValue:{value:n.employee,label:n.employee},onChange:a=>{I("employee",a)},name:"employee",options:V}),e.jsx(o,{message:l.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("small",{children:" (optional)"}),e.jsx("input",{value:n.website,onChange:a=>{i("website",a.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(o,{message:l.website})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Established"}),e.jsx("span",{class:"text-danger",children:" *"}),e.jsx("input",{maxLength:4,value:n.established,onChange:a=>{i("established",a.target.value)},type:"text",placeholder:"Established year",className:"form-control"})]}),e.jsx(o,{message:l.established})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Business Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"})," ",e.jsx("small",{children:"(optional)"}),e.jsx("input",{value:n.address,onChange:a=>{i("address",a.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(o,{message:l.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"})," ",e.jsx("small",{children:"(optional)"}),e.jsx("input",{value:n.city,onChange:a=>{i("city",a.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(o,{message:l.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"})," ",e.jsx("small",{children:"(optional)"}),e.jsx("input",{maxLength:7,value:n.postalcode,onChange:a=>{i("postalcode",a.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(o,{message:l.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"})," ",e.jsx("small",{children:"(optional)"}),e.jsx(x,{defaultValue:{value:n.province,label:n.province?n.province:"Select..."},onChange:a=>{i("province",a.value)},options:g}),e.jsx(o,{message:l.province})]})}),e.jsxs("div",{className:"col-12 mb-5",children:[e.jsxs("div",{className:"mb-0 form-check form-check-lg",children:[e.jsx("input",{id:"map",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",name:"map_enable",defaultChecked:m,onChange:w}),e.jsx("label",{role:"button",className:"mt-1",for:"map",children:" Enable Map"})]}),e.jsx("p",{className:"small",children:"Select map location to show in front end"}),m&&e.jsx("div",{children:e.jsx(B,{defaultLocation:p,zoom:$,mapTypeId:"roadmap",style:{height:"300px"},onChangeLocation:F,apiKey:v})})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Business Communication"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("span",{class:"text-danger",children:"*"}),e.jsx("input",{value:n.email,onChange:a=>{i("email",a.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(o,{message:l.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("span",{class:"text-danger",children:" *"}),e.jsx("input",{ref:y,value:n.phone,onChange:a=>{i("phone",a.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(o,{message:l.phone})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Social media"})}),e.jsx("div",{children:e.jsx("table",{className:"w-100 w-full mb-10",children:e.jsx("tbody",{children:W.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"me-2",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`social_${a.id}`,checked:d[a.id],onChange:()=>M(a.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`social_${a.id}`,children:a.label})]}),e.jsx("div",{children:e.jsxs("small",{children:["Set your ",a.label," page link"]})})]})}),e.jsx("td",{children:d[a.id]&&e.jsx("div",{children:e.jsx("input",{value:n[a.id]??"",onChange:t=>{i(a.id,t.target.value)},type:"text",placeholder:`${a.label} page`,className:"form-control"})})})]},a.id))})})}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{Se as default};
