import{r as x,j as e,W as V,Y as W,a as w}from"./app-CPHmblyB.js";import{A as Y}from"./AdminAuthenticated-Cu-_eB4y.js";import{I as m}from"./InputError-Cf0V5wQP.js";import{T as r}from"./TextInput-CncPGdq6.js";import{I as o}from"./InputLabel-Drt76RjO.js";import"./SelectOption-nweZkzkI.js";import{S as q}from"./react-select.esm-Cyx6UeUx.js";import{D as f}from"./DynamicSelect-uXoqBOIg.js";import{a as I,F as N}from"./Form-Cm_0ygcR.js";import"./PermissionAllow-BwxwuOhX.js";import{u as S,c as L}from"./useMergedRefs-BFO96Tpx.js";import{c as z}from"./Dropdown-QtP6JdFm.js";import"./Dropdown-0CXcFjtq.js";import"./AdminHeader-CSY18d6r.js";import"./index-SRguHiia.js";import"./BootstrapModalManager-BFaiKgB2.js";import"./useWindow-B4KFCQso.js";import"./Fade-D2_AvUfd.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-jrEq7tlc.js";import"./NavbarContext-Bbiy1I5a.js";import"./extends-CF3RwP-h.js";import"./ToastNotification-Ci4gm1Z1.js";import"./ReactToastify-Xt1VQqe3.js";import"./Select-49a62830.esm-qKEew1ha.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CAbDcd6o.js";import"./hoist-non-react-statics.cjs-JylaiONB.js";import"./ElementChildren-ChtDAW7O.js";import"./Col-B32p3Saq.js";import"./SSRProvider-CxlNfGfU.js";const g=x.forwardRef(({className:c,bsPrefix:i,as:u="span",...h},p)=>(i=S(i,"input-group-text"),e.jsx(u,{ref:p,className:L(c,i),...h})));g.displayName="InputGroupText";const H=c=>e.jsx(g,{children:e.jsx(I,{type:"checkbox",...c})}),J=c=>e.jsx(g,{children:e.jsx(I,{type:"radio",...c})}),R=x.forwardRef(({bsPrefix:c,size:i,hasValidation:u,className:h,as:p="div",...j},a)=>{c=S(c,"input-group");const d=x.useMemo(()=>({}),[]);return e.jsx(z.Provider,{value:d,children:e.jsx(p,{ref:a,...j,className:L(h,c,i&&`${c}-${i}`,u&&"has-validation")})})});R.displayName="InputGroup";const k=Object.assign(R,{Text:g,Radio:J,Checkbox:H});function Ae({auth:c,cities:i,provinces:u,featureLabel:h}){const[p,j]=x.useState(!1),{data:a,setData:d,post:P,errors:t,reset:K}=V({firstname:"",lastname:"",email:"",password:"",phone:"",address:"",postalcode:"",city:"",province:"",picture:"",short_description:"",description:"",logo:"",company_name:"",full_address:"",alt_email:"",alt_phone:"",lat:"",long:"",employee:"",website:"",designation:"",business_type:"",public_profile_on:"",company_email:"",company_phone:"",position:"",featureLabel:"",status:"1"}),A=[{id:"mon",label:"Monday"},{id:"tue",label:"Tuesday"},{id:"wed",label:"Wednesday"},{id:"thu",label:"Thursday"},{id:"fri",label:"Friday"},{id:"sat",label:"Saturday"},{id:"sun",label:"Sunday"}],[b,E]=x.useState({mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,sun:!1}),T=s=>{E(n=>({...n,[s]:!n[s]})),d("days",b)},D=[{id:"Agency",label:"Agency"},{id:"Mortgage Brokerage",label:"Mortgage Brokerage"},{id:"Residential Real Estate Agent",label:"Residential Real Estate Agent"},{id:"Commercial Property Broker",label:"Commercial Property Broker"},{id:"Other",label:"Other"}],B=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],[v,_]=x.useState(""),[y,C]=x.useState(""),G=s=>{const n=s.target.files[0];n&&(d("picture",n),_(URL.createObjectURL(n)))},U=()=>{d("picture",""),_("")},F=s=>{const n=s.target.files[0];n&&(d("logo",n),C(URL.createObjectURL(n)))},M=()=>{d("logo",""),C("")},l=(s,n)=>{d(s,n)},$=async s=>{s.preventDefault(),await P(route("admin.sellers.store"),{preserveScroll:!0,onSuccess:()=>{}})},O=()=>{j(!p)};return e.jsxs(Y,{user:c.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"User/Create"}),children:[e.jsx(W,{title:"User Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create User"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(w,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(w,{href:route("admin.sellers.index"),children:"Users"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("form",{onSubmit:$,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(r,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:a.company_name,onChange:s=>l("company_name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(r,{id:"designation",type:"text",name:"designation",className:"form-control",value:a.designation,onChange:s=>l("designation",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(r,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:a.firstname,onChange:s=>l("firstname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(r,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:a.lastname,onChange:s=>l("lastname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx(r,{id:"email",type:"text",name:"email",className:"form-control",value:a.email,onChange:s=>l("email",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone No"}),e.jsx(r,{id:"phone",type:"text",name:"phone",maxlength:"10",className:"form-control",value:a.phone,onChange:s=>l("phone",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Password"}),e.jsxs(k,{className:"mb-3",children:[e.jsx(r,{id:"password",type:p?"text":"password",name:"password",className:"form-control",autoComplete:"new-password",value:a.password,onChange:s=>l("password",s.target.value)}),e.jsx(k.Text,{id:"inputGroup-sizing-sm",children:e.jsx("i",{role:"button",className:`bi ${p?"bi-eye":"bi-eye-slash"}`,onClick:O})})]}),e.jsx(m,{message:t.password,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(r,{id:"address",type:"text",name:"address",className:"form-control",value:a.address,onChange:s=>l("address",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Postal Code"}),e.jsx(r,{id:"postalcode",type:"text",name:"postalcode",maxlength:"8",className:"form-control",value:a.postalcode,onChange:s=>l("postalcode",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.postalcode,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"City"}),e.jsx(f,{onChange:s=>l("city",s),value:a.city,options:i,name:"city",defaultValue:a.city}),e.jsx(m,{message:t.city,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(f,{onChange:s=>l("province",s),value:a.province,options:u,name:"province",defaultValue:a.province}),e.jsx(m,{message:t.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{id:"description",type:"text",name:"description",className:"form-control",rows:5,value:a.description,onChange:s=>l("description",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Latitude"}),e.jsx(r,{id:"lat",type:"text",name:"lat",className:"form-control",value:a.lat,onChange:s=>l("lat",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.lat,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Longtitude"}),e.jsx(r,{id:"long",type:"text",name:"long",className:"form-control",value:a.long,onChange:s=>l("long",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.long,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Website"}),e.jsx(r,{id:"website",type:"text",name:"website",className:"form-control",value:a.website,onChange:s=>l("website",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.website,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Business Type"}),e.jsx(q,{onChange:s=>{l("business_type",s.value)},name:"business_type",options:D.map(s=>({value:s.id,label:s.label}))}),e.jsx(m,{message:t.business_type,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"col-lg-3 d-flex align-items-center",children:e.jsxs("div",{className:"col-md-12",children:[e.jsxs("div",{className:"border   p-3 bg-gray-100 rounded10  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[v?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:v,alt:"Selected",className:"avatar-xxxl rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:U})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 avatar-xxxl text-center rounded-circle "}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-natural  btn-sm",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path",type:"file",name:"picture",className:"d-none mt-1 block w-full upload",onChange:G})]})]})]}),e.jsxs("div",{className:"border mt-10 p-3 bg-gray-100 rounded10  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Logo"}),e.jsxs("div",{className:"product-img",children:[y?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:y,alt:"Selected",className:"avatar-xxxl text-center rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:M})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center avatar-xxxl rounded-circle"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-natural  btn-sm",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path2",type:"file",name:"logo",className:"d-none mt-1 block w-full upload",onChange:F})]})]})]})]})})]})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row d-none",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Company Information"})}),e.jsx("div",{className:"col-md-12 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Address"}),e.jsx(r,{id:"full_address",type:"text",name:"full_address",className:"form-control",value:a.full_address,onChange:s=>l("full_address",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.full_address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Email"}),e.jsx(r,{id:"company_email",type:"text",name:"company_email",className:"form-control",value:a.company_email,onChange:s=>l("company_email",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.company_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Phone No"}),e.jsx(r,{id:"company_phone",type:"text",name:"company_phone",className:"form-control",value:a.company_phone,onChange:s=>l("company_phone",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.company_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Emails"}),e.jsx(r,{id:"alt_email",type:"text",name:"alt_email",className:"form-control",value:a.alt_email,onChange:s=>l("alt_email",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.alt_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(r,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:a.alt_phone,onChange:s=>l("alt_phone",s.target.value),autoComplete:"off"}),e.jsx(m,{message:t.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"No Employees"}),e.jsx(f,{onChange:s=>{l("employee",s)},name:"employee",options:B}),e.jsx(m,{message:t.employee,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Feature Label"}),e.jsx(f,{onChange:s=>l("featureLabel",s),value:a.featureLabel,options:h,name:"featureLabel",defaultValue:a.featureLabel})]})})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3"}),e.jsxs("div",{className:"col-md-12 mb-3",children:[e.jsxs("div",{className:"form-group px-20",children:[e.jsx(o,{className:"fw-700  form-label small",children:"Available Days"}),e.jsx("div",{className:"row pt-5",children:A.map(s=>e.jsx("div",{className:"col-12",children:e.jsx(N.Check,{type:"checkbox",id:`default-checkbox-${s.id}`,name:s.id,label:e.jsxs(e.Fragment,{children:[s.label,b[s.id]?e.jsx("span",{className:"text-success",children:" (opened)"}):e.jsx("span",{className:"text-danger",children:" (closed)"})]}),checked:b[s.id],onChange:()=>T(s.id)})},s.id))})]}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsx("div",{className:"form-group px-30",children:e.jsx(N.Check,{type:"switch",id:"custom-switch",name:"public_profile_on",label:"Show Public Profile",role:"button",onChange:s=>l("public_profile_on",s.target.checked?1:0)})})})]})]})})]}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group px-10",children:[e.jsx("label",{className:" fs-14 form-label",children:"Status"}),e.jsx(N.Check,{type:"switch",id:"custom-switch-status",name:"status",label:"Active",role:"button",onChange:s=>l("status",s.target.checked?1:0)})]})})]}),e.jsx("div",{className:"form-actions mt-10 col-lg-12 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{Ae as default};
