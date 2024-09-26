import{r as d,W as U,j as e,Y as B,a as j}from"./app-BVfgA8MD.js";import{A as T}from"./AdminAuthenticated-DEHfcgNN.js";import{I as c}from"./InputError-CNHYCWNO.js";import{T as i}from"./TextInput-CBJYQQfN.js";import{I as t}from"./InputLabel-BhoMlwD8.js";import"./SelectOption-BmYuYKhH.js";import{D as u}from"./DynamicSelect-D9Ye4aIl.js";import{S as N}from"./react-select.esm-BRHNnAXT.js";import{F as h}from"./Form-DhQ77uXM.js";import"./PermissionAllow-DerVwwrp.js";import"./Dropdown-DGVRm4s2.js";import"./AdminHeader-qMONlavz.js";import"./Dropdown-CSewB2O-.js";import"./useMergedRefs-BibEQBDI.js";import"./SSRProvider-BMAy1Wxu.js";import"./useWindow-C_1n6iJy.js";import"./NavbarContext-CkkAU4yH.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-C4miQACD.js";import"./BootstrapModalManager-Bw23O1Yn.js";import"./Fade-Bpdq1hMi.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CRrC9As2.js";import"./ToastNotification-B1BXF7TZ.js";import"./ReactToastify-lnkyzxL8.js";import"./Select-49a62830.esm-D7MT8xFp.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-BzoTG0jd.js";import"./hoist-non-react-statics.cjs-DZf2pnCY.js";import"./ElementChildren-OIYAk5yR.js";import"./Col-DE7YWiKZ.js";function ve({auth:v,seller:s,cities:_,provinces:y,featureLabel:C}){d.useState(!1);const{data:l,setData:r,post:w,errors:m,reset:M}=U({firstname:s.firstname||"",lastname:s.lastname||"",email:s.email||"",phone:s.phone||"",address:s.address||"",postalcode:s.postalcode||"",password:"",city:s.city||"",province:s.province||"",featureLabel:s.feature_label_id||"",featureLabelName:s.featureLabelName||"",picture:"",short_description:s.short_description||"",description:s.description||"",logo:"",company_name:s.company_name||"",full_address:s.full_address||"",alt_emails:s.alt_emails||"",alt_phone:s.alt_phone||"",lat:s.lat||"",long:s.long||"",employee:s.employee||"",website:s.website||"",designation:s.designation||"",public_profile_on:s.public_profile_on==1?1:0,company_email:s.company_email||"",company_phone:s.company_phone||"",position:s.position||"",business_type:"",status:s.status=="active"?1:(s.status=="suspended"?-1:0)||1,days:s.availableDays||{},_method:"PUT",remove_picture:!1,remove_logo:!1}),[g,x]=d.useState(""),[b,f]=d.useState("");d.useEffect(()=>{s.picture&&x(s.picture)},[s.picture]),d.useEffect(()=>{s.logo&&f(s.logo)},[s.logo]);const k=[{id:"mon",label:"Monday"},{id:"tue",label:"Tuesday"},{id:"wed",label:"Wednesday"},{id:"thu",label:"Thursday"},{id:"fri",label:"Friday"},{id:"sat",label:"Saturday"},{id:"sun",label:"Sunday"}],[p,D]=d.useState({mon:s.availableDays&&s.availableDays.mon||!1,tue:s.availableDays&&s.availableDays.tue||!1,wed:s.availableDays&&s.availableDays.wed||!1,thu:s.availableDays&&s.availableDays.thu||!1,fri:s.availableDays&&s.availableDays.fri||!1,sat:s.availableDays&&s.availableDays.sat||!1,sun:s.availableDays&&s.availableDays.sun||!1}),L=a=>{const n={...p,[a]:!p[a]};D(n),r("days",n)},S=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],I=[{id:"Agency",label:"Agency"},{id:"Mortgage Brokerage",label:"Mortgage Brokerage"},{id:"Residential Real Estate Agent",label:"Residential Real Estate Agent"},{id:"Commercial Property Broker",label:"Commercial Property Broker"},{id:"Other",label:"Other"}],E=a=>{const n=a.target.files[0];n&&(r("picture",n),x(URL.createObjectURL(n)))},P=()=>{r("picture",""),x(""),r("remove_picture",!0)},A=a=>{const n=a.target.files[0];n&&(r("logo",n),f(URL.createObjectURL(n)))},R=()=>{r("logo",""),f(""),r("remove_logo",!0)},o=(a,n)=>{r(a,n)},F=async a=>{a.preventDefault(),await w(route("admin.sellers.update",s.user_id),{preserveScroll:!0,onSuccess:()=>{}})};return e.jsxs(T,{user:v.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"User/Edit"}),children:[e.jsx(B,{title:"User Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit User"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.sellers.index"),children:"Users"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("form",{onSubmit:F,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[s.is_agent&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(i,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:l.company_name,onChange:a=>o("company_name",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(i,{id:"designation",type:"text",name:"designation",className:"form-control",value:l.designation,onChange:a=>o("designation",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.designation,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(i,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:a=>o("firstname",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(i,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:a=>o("lastname",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx(i,{disabled:!0,id:"email",type:"text",name:"email",className:"form-control",value:l.email,onChange:a=>o("email",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone No"}),e.jsx(i,{disabled:!0,id:"phone",type:"text",maxlength:"10",name:"phone",className:"form-control",value:l.phone,onChange:a=>o("phone",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.phone,className:"mt-2 col-12"})]})}),s.is_agent&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(i,{id:"address",type:"text",name:"address",className:"form-control",value:l.address,onChange:a=>o("address",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Postal Code"}),e.jsx(i,{id:"postalcode",type:"text",name:"postalcode",maxlength:"8",className:"form-control",value:l.postalcode,onChange:a=>o("postalcode",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.postalcode,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"City"}),e.jsx(u,{onChange:a=>o("city",a),value:l.city,options:_,name:"city",defaultValue:l.city}),e.jsx(c,{message:m.city,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(u,{onChange:a=>o("province",a),value:l.province,options:y,name:"province",defaultValue:l.province}),e.jsx(c,{message:m.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{id:"description",type:"text",name:"description",className:"form-control",rows:5,value:l.description,onChange:a=>o("description",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Latitude"}),e.jsx(i,{id:"lat",type:"text",name:"lat",className:"form-control",value:l.lat,onChange:a=>o("lat",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.lat,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Longtitude"}),e.jsx(i,{id:"long",type:"text",name:"long",className:"form-control",value:l.long,onChange:a=>o("long",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.long,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Website"}),e.jsx(i,{id:"website",type:"text",name:"website",className:"form-control",value:l.website,onChange:a=>o("website",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.website,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Business Type"}),e.jsx(N,{onChange:a=>{o("business_type",a.value)},defaultValue:{value:l.business_type,label:l.business_type},name:"business_type",options:I.map(a=>({value:a.id,label:a.label}))}),e.jsx(c,{message:m.business_type,className:"mt-2 col-12"})]})})]})]})}),e.jsx("div",{className:"col-lg-3 d-flex align-items-center",children:e.jsxs("div",{className:"col-md-12",children:[e.jsxs("div",{className:"border  bg-gray-100 rounded10 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[g?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:g,alt:"Selected",className:"avatar-xxxl rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:P})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 avatar-xxxl text-center rounded-circle "}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-nature btn-sm",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(i,{id:"project_image_path",type:"file",name:"picture",className:"d-none mt-1 block w-full upload",onChange:E})]})]})]}),s.is_agent&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border bg-gray-100 rounded10 p-3 mt-10 text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Logo"}),e.jsxs("div",{className:"product-img",children:[b?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:b,alt:"Selected",className:"avatar-xxxl text-center rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:R})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center avatar-xxxl rounded-circle"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-nature btn-sm",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(i,{id:"project_image_path2",type:"file",name:"logo",className:"d-none mt-1 block w-full upload",onChange:A})]})]})]})})]})})]})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row d-none",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Company Information"})}),e.jsx("div",{className:"col-md-12 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Full Address"}),e.jsx(i,{id:"full_address",type:"text",name:"full_address",className:"form-control",value:l.full_address,onChange:a=>o("full_address",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.full_address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Email"}),e.jsx(i,{id:"company_email",type:"text",name:"company_email",className:"form-control",value:l.company_email,onChange:a=>o("company_email",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.company_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Phone No"}),e.jsx(i,{id:"company_phone",type:"text",name:"company_phone",className:"form-control",value:l.company_phone,onChange:a=>o("company_phone",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.company_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Emails"}),e.jsx(i,{id:"alt_email",type:"text",name:"alt_email",className:"form-control",value:l.alt_email,onChange:a=>o("alt_email",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.alt_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(i,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:l.alt_phone,onChange:a=>o("alt_phone",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"No Employees"}),e.jsx(N,{onChange:a=>{o("employee",a)},defaultValue:{value:l.employee,label:l.employee},name:"employee",options:S}),e.jsx(c,{message:m.employee,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 d-none",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Feature Label"}),e.jsx(u,{onChange:a=>o("featureLabel",a),value:l.featureLabel,options:C,name:"featureLabel",defaultValue:l.featureLabelName})]})})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3"}),e.jsxs("div",{className:"col-md-12 mb-3",children:[e.jsxs("div",{className:"form-group px-20",children:[e.jsx(t,{className:"fw-700  form-label small",children:"Available Days"}),e.jsx("div",{className:"row pt-5",children:k.map(a=>e.jsx("div",{className:"col-12",children:e.jsx(h.Check,{type:"checkbox",id:`default-checkbox-${a.id}`,name:a.id,label:e.jsxs(e.Fragment,{children:[a.label,p[a.id]?e.jsx("span",{className:"text-success",children:" (opened)"}):e.jsx("span",{className:"text-danger",children:" (closed)"})]}),checked:p[a.id],onChange:()=>L(a.id)})},a.id))})]}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsx("div",{className:"form-group px-30",children:e.jsx(h.Check,{type:"switch",id:"custom-switch",name:"public_profile_on",checked:l.public_profile_on===1,onChange:a=>o("public_profile_on",a.target.checked?1:0),label:"Public Profile Show"})})})]})]})})]}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group px-10",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(h.Check,{type:"switch",id:"custom-switch-status",name:"status",label:"Active",checked:l.status===1,role:"button",onChange:a=>o("status",a.target.checked?1:0)}),e.jsx(c,{message:m.status,className:"mt-2 col-12"})]})]})})]}),e.jsx("div",{className:"form-actions mt-10 col-lg-12 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save"]})})]})})})})})})})]})})]})}export{ve as default};
