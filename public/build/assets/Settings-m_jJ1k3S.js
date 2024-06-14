import{r as o,W as _,j as e,Y as L}from"./app-Cw5Ne8KB.js";import"./Dropdown-2O1FAkn9.js";import"./index-BAsefGh2.js";import"./PermissionAllow-XmIZXA0k.js";import F from"./Wrapper-gKqiSjrr.js";import{S as x}from"./react-select.esm-Ds9dxtYj.js";import{I as t}from"./InputError-LluIB3eq.js";import"./SideBar-DblrliQP.js";import"./ProfileDropdown-CTauys-I.js";import"./Header-DPn3A4xx.js";import"./ToastNotification-BaIpM5CO.js";import"./useStateManager-7e1e8489.esm-DgxfG77z.js";import"./extends-B6xKY8K9.js";import"./inherits-31b1Cyi6.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-3OZEs3te.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";const I=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],P=[{id:"mon",label:"Monday"},{id:"tue",label:"Tuesday"},{id:"wed",label:"Wednesday"},{id:"thu",label:"Thursday"},{id:"fri",label:"Friday"},{id:"sat",label:"Saturday"},{id:"sun",label:"Sunday"}],Y=[{id:"facebook",label:"Facebook"},{id:"twitter",label:"Twitter"},{id:"instagram",label:"Instagram"},{id:"linkedin",label:"Linkedin"}];function Q({seller:a,auth:p,success:u,error:j,province_options:b}){const[d,v]=o.useState(a.days),[r,g]=o.useState(a.social_settings),{data:l,setData:m,post:N,errors:n,reset:$}=_({logo:"",company_name:a.company_name,email:a.email,phone:a.phone,employee:a.employee,address:a.address,short_description:a.short_description,description:a.description,website:a.website,facebook:a.social_links.facebook,twitter:a.social_links.twitter,instagram:a.social_links.instagram,linkedin:a.social_links.linkedin,address:a?a.address:"",city:a?a.city:"",postalcode:a?a.postalcode:"",province:a?a.province:"",lat:a?a.lat:"",lng:a?a.lng:""}),[y,h]=o.useState("");o.useEffect(()=>{a.logo&&h(a.logo)},[a.logo]);const f=s=>{const i=s.target.files[0];i&&(m("logo",i),h(URL.createObjectURL(i)))},k=(s,i)=>{m(s,i.value)},c=(s,i)=>{m(s,i)},C=async s=>{s.preventDefault(),await N(route("seller.settings.store",{days:d,socials:r}),{preserveScroll:!0,onSuccess:()=>{}})},w=async s=>{await v(i=>({...i,[s]:!i[s]}))},S=async s=>{await g(i=>({...i,[s]:!i[s]}))};return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"Settings"}),e.jsx(F,{user:p.user,success:u,error:j,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your business settings"}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("a",{href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:y})}),e.jsx("div",{className:"ms-4",children:e.jsx("span",{className:"h4 d-block mb-0",children:l.company_name})})]}),e.jsx(t,{message:n.logo})]}),e.jsx("input",{onChange:f,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"}),e.jsx("div",{className:"ms-auto",children:e.jsx("label",{htmlFor:"avatar",type:"button",className:"btn btn-sm btn-neutral",children:"Upload"})})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:C,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"About your business"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Business name"}),e.jsx("input",{value:l.company_name,onChange:s=>{c("company_name",s.target.value)},placeholder:"Your business name",className:"form-control"}),e.jsx(t,{message:n.company_name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Short description"}),e.jsx("input",{value:l.short_description,onChange:s=>{c("short_description",s.target.value)},placeholder:"Tell us about your business briefly",className:"form-control"}),e.jsx(t,{message:n.short_description})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{onChange:s=>{c("description",s.target.value)},placeholder:"Tell us about your business in detail",className:"form-control",children:l.description}),e.jsx(t,{message:n.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"No of employees"}),e.jsx(x,{defaultValue:{value:l.employee,label:l.employee},onChange:s=>{k("employee",s)},name:"employee",options:I}),e.jsx(t,{message:n.employee})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:l.website,onChange:s=>{c("website",s.target.value)},type:"text",placeholder:"Your website url",className:"form-control"})]}),e.jsx(t,{message:n.website})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:l.address,onChange:s=>{c("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(t,{message:n.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:l.city,onChange:s=>{c("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(t,{message:n.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:l.postalcode,onChange:s=>{c("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(t,{message:n.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(x,{defaultValue:{value:l.province,label:l.province?l.province:"Select..."},onChange:s=>{c("province",s.value)},options:b}),e.jsx(t,{message:n.province})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Latitude"}),e.jsx("input",{value:l.lat,onChange:s=>{c("lat",s.target.value)},type:"text",placeholder:"Latitude",className:"form-control"}),e.jsx(t,{message:n.lat})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Longitude"}),e.jsx("input",{value:l.lng,onChange:s=>{c("lng",s.target.value)},type:"text",placeholder:"Longitude",className:"form-control"}),e.jsx(t,{message:n.lng})]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{value:l.email,onChange:s=>{c("email",s.target.value)},placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(t,{message:n.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{value:l.phone,onChange:s=>{c("phone",s.target.value)},type:"tel",placeholder:"Your phone number",className:"form-control"})]}),e.jsx(t,{message:n.phone})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Office working days"})}),e.jsx("div",{className:"card mb-5 rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"",children:P.map(s=>e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`office_${s.id}`,checked:d[s.id],onChange:()=>w(s.id)}),e.jsxs("label",{role:"button",className:"mt-1",htmlFor:`office_${s.id}`,children:[s.label," ",d[s.id]?e.jsx("span",{className:"text-success",children:"(opened)"}):e.jsx("span",{className:"text-danger",children:"(closed)"})]})]},s.id))})})}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Social media"})}),e.jsx("div",{children:e.jsx("table",{children:Y.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"me-2",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`social_${s.id}`,checked:r[s.id],onChange:()=>S(s.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`social_${s.id}`,children:s.label})]}),e.jsx("div",{children:e.jsxs("small",{children:["Set your ",s.label," page link"]})})]})}),e.jsx("td",{children:r[s.id]&&e.jsx("div",{children:e.jsx("input",{value:l[s.id],onChange:i=>{c(s.id,i.target.value)},type:"text",placeholder:`${s.label} page`,className:"form-control"})})})]},s.id))})}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})})]})})]})})})})]})}export{Q as default};