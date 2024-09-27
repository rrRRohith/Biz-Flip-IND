import{r as c,W as D,j as e,Y as E}from"./app-Cv4J_obM.js";import"./Dropdown-Ct4HCL4H.js";import"./index-3INN4Kof.js";import"./PermissionAllow-Dt8qbyn1.js";import F from"./Wrapper-CYSCNMPr.js";import{S as p}from"./react-select.esm-DbBsV75s.js";import{I as l}from"./InputError-ClMS-C0l.js";import{P as M}from"./react-gmap-picker.esm-U4k1Jy6J.js";import"./Header-CNlSSr3n.js";import"./ProfileDropdown-FS4tmf6s.js";import"./Dropdown-B0ayaTV9.js";import"./useMergedRefs-DoppZSNR.js";import"./SSRProvider-7ChdXwuB.js";import"./useWindow-BdZtvrSg.js";import"./NavbarContext-BP5HhpAZ.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./ToastNotification-Lp0O2Nnd.js";import"./ReactToastify-CXeg6P4H.js";import"./TopMenu-tJLB5VSc.js";import"./Footer-CxCj33Js.js";import"./Select-49a62830.esm-Cyc_cq1R.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CoBmq05W.js";import"./hoist-non-react-statics.cjs-BRioJMba.js";const O=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],T=[{id:"facebook",label:"Facebook"},{id:"x",label:"X"},{id:"instagram",label:"Instagram"},{id:"linkedin",label:"Linkedin"},{id:"youtube",label:"Youtube"}];function be({seller:s,auth:x,success:u,error:j,province_options:b,API_KEY:v}){const[g,U]=c.useState(s.days),[d,y]=c.useState(s.social_settings),{data:t,setData:r,post:N,errors:o,reset:$}=D({logo:"",company_name:s.company_name,email:s.email,phone:s.phone,employee:s.employee,short_description:s.short_description,description:s.description,website:s.website,facebook:s.social_links.facebook,twitter:s.social_links.twitter,instagram:s.social_links.instagram,linkedin:s.social_links.linkedin,address:s?s.address:"",city:s?s.city:"",postalcode:s?s.postalcode:"",province:s?s.province:"",lat:s?s.lat:"",lng:s?s.lng:"",established:s?s.established:""}),[f,m]=c.useState(""),C=a=>{const i=a.target.files[0];i&&(r("logo",i),m(URL.createObjectURL(i)))},k=(a,i)=>{r(a,i.value)},n=(a,i)=>{r(a,i)},S=async a=>{a.preventDefault(),await N(route("account.settings.store",{days:g,socials:d,location:I}),{preserveScroll:!0,onSuccess:()=>{}})},w=async a=>{await y(i=>({...i,[a]:!i[a]}))},_={lat:s&&s.lat?s.lat:13.4,lng:s&&s.lng?s.lng:77},L=10,[h,R]=c.useState(_),[I,P]=c.useState(h),[A,V]=c.useState(L),Y=(a,i)=>{P({lat:a,lng:i})};return c.useState(()=>{s.logo&&m(s.logo)},[s.logo]),e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Settings"}),e.jsx(F,{user:x.user,success:u,error:j,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your business settings"}),e.jsx("div",{children:"Manage your business information easily. Update your profile, contact details, and company description."}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:f})}),e.jsxs("div",{className:"ms-4",children:[e.jsx("span",{className:"h4 d-block mb-0",children:t.company_name}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Upload logo"})]})]}),e.jsx(l,{message:o.logo})]}),e.jsx("input",{onChange:C,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:S,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:t.company_name,onChange:a=>{n("company_name",a.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(l,{message:o.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{rows:10,onChange:a=>{n("description",a.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",defaultValue:t.description}),e.jsx(l,{message:o.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(p,{defaultValue:{value:t.employee,label:t.employee},onChange:a=>{k("employee",a)},name:"employee",options:O}),e.jsx(l,{message:o.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:t.website,onChange:a=>{n("website",a.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(l,{message:o.website})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Established"}),e.jsx("input",{maxLength:4,value:t.established,onChange:a=>{n("established",a.target.value)},type:"text",placeholder:"Established year",className:"form-control"})]}),e.jsx(l,{message:o.established})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:t.address,onChange:a=>{n("address",a.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(l,{message:o.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:t.city,onChange:a=>{n("city",a.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(l,{message:o.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{maxLength:7,value:t.postalcode,onChange:a=>{n("postalcode",a.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(l,{message:o.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(p,{defaultValue:{value:t.province,label:t.province?t.province:"Select..."},onChange:a=>{n("province",a.value)},options:b}),e.jsx(l,{message:o.province})]})}),e.jsx("div",{className:"col-12",children:e.jsx(M,{defaultLocation:h,zoom:A,mapTypeId:"roadmap",style:{height:"300px"},onChangeLocation:Y,apiKey:v})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Business Communication"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:t.email,onChange:a=>{n("email",a.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(l,{message:o.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{maxLength:12,value:t.phone,onChange:a=>{n("phone",a.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(l,{message:o.phone})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Social media"})}),e.jsx("div",{children:e.jsx("table",{className:"w-100 w-full mb-10",children:e.jsx("tbody",{children:T.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"me-2",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`social_${a.id}`,checked:d[a.id],onChange:()=>w(a.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`social_${a.id}`,children:a.label})]}),e.jsx("div",{children:e.jsxs("small",{children:["Set your ",a.label," page link"]})})]})}),e.jsx("td",{children:d[a.id]&&e.jsx("div",{children:e.jsx("input",{value:t[a.id]??"",onChange:i=>{n(a.id,i.target.value)},type:"text",placeholder:`${a.label} page`,className:"form-control"})})})]},a.id))})})}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})})]})})})})]})}export{be as default};
