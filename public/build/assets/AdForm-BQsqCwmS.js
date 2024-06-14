import{r as u,W as B,j as e,Y as E,a as v}from"./app-DOZcIWVh.js";import"./Dropdown-BYdKb6tQ.js";import"./index-BgJ3aozw.js";import"./PermissionAllow-DPIa7gDb.js";import G from"./Wrapper-BL3eDJqj.js";import M from"./AdditionalInfo-Ncxn3Sk5.js";import{S as p}from"./react-select.esm-DjEZP4HW.js";import{I as t}from"./InputError-COM9Dc_m.js";import{B as R}from"./ToastNotification-DWZrIRJL.js";import"./SideBar-CxUa0Ge8.js";import"./ProfileDropdown-g4YhXZGT.js";import"./Header-Ax64f-yz.js";import"./useStateManager-7e1e8489.esm-BdAqZFbm.js";import"./extends-B6xKY8K9.js";import"./inherits-31b1Cyi6.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-JnW2krE5.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";const U=[{label:"Land",value:"Land"},{label:"Building",value:"Building"},{label:"Farm",value:"Farm"}],O=[{label:"Rental",value:"Rental"},{label:"Lease",value:"Lease"},{label:"Sale",value:"Sale"}];function ce({ad:l,auth:b,categories_options:N,facilities_options:f,features_options:y,province_options:_}){const[m,h]=u.useState(l?l.additional_info:[]),{data:a,setData:x,post:k,errors:o,reset:W}=B({_method:l?"PUT":"POST",title:l?l.title:"",price:l?l.price:"",space:l?l.space:"",description:l?l.description:"",property_type:l?l.property_type:"",ad_purpose:l?l.ad_purpose:"",category:l?l.category.id:"",facilities:l?l.facilities_ids:[],features:l?l.features_ids:[],address:l?l.address:"",city:l?l.city:"",postalcode:l?l.postalcode:"",province:l?l.province:"",status:l?l.status:0,lat:l?l.lat:"",lng:l?l.lng:"",map_link:l?l.map_link:"",has_negotiable:l?l.has_negotiable:0,has_commission:l?l.has_commission:0,commission:l?l.commission:"",images:[],uploaded_images:l?l.images:[],seo_title:l?l.seo_title:"",seo_keywords:l?l.seo_keywords:"",seo_description:l?l.seo_description:""}),r=(s,i)=>{x(s,i)},C=()=>{h([...m,{id:Date.now(),info:"",value:""}])},w=s=>{h(m.filter(i=>i.id!==s))},S=(s,i)=>{const n=m.map(c=>c.id===s?{...c,info:i}:c);h(n)},I=(s,i)=>{const n=m.map(c=>c.id===s?{...c,value:i}:c);h(n)},[P,j]=u.useState([]);u.useState([]);const F=async s=>{s.preventDefault(),await k(route(l?"seller.ads.update":"seller.ads.store",{ad:l?l.id:null,additional_info:m}),{preserveScroll:!0})},A=s=>{s.preventDefault(),g(Array.from(s.dataTransfer.files))},L=s=>{s.preventDefault()},V=async function(s){g(Array.from(s.target.files))},g=async s=>{const i=["image/jpeg","image/png","image/webp"],n=s.filter(c=>i.includes(c.type)&&c.size<=2097152);if(s.length>n.length&&R.error("Please select PNG, WEBP, JPG upto 2mb",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0}),n.length>0){const c=n.map(d=>({file:d,url:URL.createObjectURL(d)}));await j(d=>[...d,...c]),x(d=>({...d,images:[...d.images,...n]}))}},D=s=>{j(i=>i.filter((n,c)=>c!==s)),x(i=>({...i,images:i.images.filter((n,c)=>c!==s)}))},T=s=>{x(i=>({...i,uploaded_images:i.uploaded_images.filter((n,c)=>c!==s)}))};return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:l?"Edit add":"Create new ad"}),e.jsx(G,{user:b.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:l?"Edit add":"Create new ad"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(v,{href:route("seller.ads.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsxs("form",{onSubmit:F,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Basic details"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Title"}),e.jsx("input",{value:a.title,onChange:s=>{r("title",s.target.value)},type:"text",placeholder:"Title",className:"form-control"}),e.jsx(t,{message:o.title})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Price"}),e.jsx("input",{value:a.price,onChange:s=>{r("price",s.target.value)},type:"text",placeholder:"Price",className:"form-control"}),e.jsx(t,{message:o.price})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Space/Length/Area"}),e.jsx("input",{value:a.space,onChange:s=>{r("space",s.target.value)},type:"text",placeholder:"Space/Length/Area",className:"form-control"}),e.jsx(t,{message:o.space})]})}),e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{checked:a.has_negotiable==1,onClick:s=>r("has_negotiable",s.target.checked?1:0),role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",defaultValue:"true",id:"has_negotiable"}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:"has_negotiable",children:"Is your price negotiable?"})]}),e.jsx("div",{className:"text-muted small",children:"Is your price negotiable?."}),e.jsx(t,{message:o.has_negotiable})]}),e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{checked:a.has_commission==1,onClick:s=>r("has_commission",s.target.checked?1:0),role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",defaultValue:"true",id:"has_commission"}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:"has_commission",children:"Have commission?"})]}),e.jsx("div",{className:"text-muted small",children:"Do you have extra commission from buyer?."}),e.jsx(t,{message:o.has_commission})]}),a.has_commission==1&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsxs("label",{children:["Commission ",e.jsx("small",{children:"(in percentage)"})]}),e.jsx("input",{value:a.commission,onChange:s=>{r("commission",s.target.value)},type:"text",placeholder:"Commission",className:"form-control"}),e.jsx(t,{message:o.commission})]})})}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{value:a.description,onChange:s=>{r("description",s.target.value)},placeholder:"Tell us about your property in detail",className:"form-control"}),e.jsx(t,{message:o.description})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Type"}),e.jsx(p,{defaultValue:{value:a.property_type,label:a.property_type?a.property_type:"Select..."},onChange:s=>{r("property_type",s.value)},options:U}),e.jsx(t,{message:o.property_type})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Purpose"}),e.jsx(p,{defaultValue:{value:a.ad_purpose,label:a.ad_purpose?a.ad_purpose:"Select..."},onChange:s=>{r("ad_purpose",s.value)},options:O}),e.jsx(t,{message:o.ad_purpose})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Category"}),e.jsx(p,{defaultValue:{value:a.category,label:l?l.category.label:"Select..."},onChange:s=>{r("category",s.value)},options:N}),e.jsx(t,{message:o.category})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Facilities"}),e.jsx(p,{defaultValue:l?l.facilities:[],isMulti:!0,onChange:s=>{r("facilities",s?s.map(i=>i.value):[])},options:f}),e.jsx(t,{message:o.facilities})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Features"}),e.jsx(p,{defaultValue:l?l.features:[],isMulti:!0,onChange:s=>{r("features",s?s.map(i=>i.value):[])},options:y}),e.jsx(t,{message:o.features})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:a.address,onChange:s=>{r("address",s.target.value)},type:"text",placeholder:"Address",className:"form-control"}),e.jsx(t,{message:o.address})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:a.city,onChange:s=>{r("city",s.target.value)},type:"text",placeholder:"City",className:"form-control"}),e.jsx(t,{message:o.city})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"}),e.jsx("input",{value:a.postalcode,onChange:s=>{r("postalcode",s.target.value)},type:"text",placeholder:"Postcode",className:"form-control"}),e.jsx(t,{message:o.postalcode})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(p,{defaultValue:{value:a.province,label:a.province?a.province:"Select..."},onChange:s=>{r("province",s.value)},options:_}),e.jsx(t,{message:o.province})]})}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{children:[e.jsx("label",{children:"Map link"}),e.jsx("input",{value:a.map_link,onChange:s=>{r("map_link",s.target.value)},type:"text",placeholder:"Map link",className:"form-control"}),e.jsx(t,{message:o.map_link})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Latitude"}),e.jsx("input",{value:a.lat,onChange:s=>{r("lat",s.target.value)},type:"text",placeholder:"Latitude",className:"form-control"}),e.jsx(t,{message:o.lat})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Longitude"}),e.jsx("input",{value:a.lng,onChange:s=>{r("lng",s.target.value)},type:"text",placeholder:"Longitude",className:"form-control"}),e.jsx(t,{message:o.lng})]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Gallery"})}),e.jsx("div",{className:"row g-5 mb-5",children:e.jsxs("div",{className:"col-12",children:[e.jsx("div",{onDrop:A,onDragOver:L,className:"card rounded-input border-dashed bg-gray-100",children:e.jsx("label",{role:"button",htmlFor:"images",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"text-center py-5",role:"button",children:[e.jsx("i",{className:"bi bi-upload text-lg"}),e.jsx("div",{className:"font-semibold",children:"Upload a file or drag and drop"}),e.jsx("div",{className:"text-muted small",children:"PNG, WEBP, JPG upto 2mb"})]})})})}),e.jsxs("div",{className:"row mt-4",children:[l&&e.jsx(e.Fragment,{children:a.uploaded_images.map((s,i)=>e.jsx("div",{className:"col-xl-2 col-lg-3 col-md-4 col-6 mb-3",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("img",{className:"ad-image shadow-sm rounded-input pointer-events-none",src:`/images/${s}`}),e.jsx("div",{className:"position-absolute p-1 top-0 end-0",children:e.jsx("div",{onClick:()=>T(i),role:"button",className:"d-flex align-items-center w-h-30  bg-white border border-2 text-dark rounded-circle",children:e.jsx("i",{className:"bi bi-trash m-auto"})})})]})},i))}),P.map((s,i)=>e.jsx("div",{className:"col-xl-2 col-lg-3 col-md-4 col-6 mb-3",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("img",{className:"ad-image shadow-sm rounded-input pointer-events-none",src:s.url}),e.jsx("div",{className:"position-absolute p-1 top-0 end-0",children:e.jsx("div",{onClick:()=>D(i),role:"button",className:"d-flex align-items-center w-h-30  bg-white border border-2 text-dark rounded-circle",children:e.jsx("i",{className:"bi bi-trash m-auto"})})})]})},i))]}),e.jsx("input",{onChange:s=>V(s),type:"file",name:"",id:"images",multiple:!0,hidden:!0,accept:"image/*"})]})}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Additional info"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[m.map(s=>e.jsx(M,{onNameChange:S,onValueChange:I,onDelete:w,info:s})),e.jsx(t,{message:o.addiotion_info}),e.jsx("div",{className:"col-12",children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:C,children:[e.jsx("i",{className:"bi bi-plus"})," Add additional info"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Seo Settings"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{children:[e.jsx("label",{children:"Title"}),e.jsx("input",{value:a.seo_title,onChange:s=>{r("seo_title",s.target.value)},type:"text",placeholder:"Seo title",className:"form-control"}),e.jsx(t,{message:o.seo_title})]})}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Keywords"}),e.jsx("textarea",{value:a.seo_keywords,onChange:s=>{r("seo_keywords",s.target.value)},placeholder:"Seo keywords",className:"form-control"}),e.jsx(t,{message:o.seo_keywords})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{value:a.seo_description,onChange:s=>{r("seo_description",s.target.value)},placeholder:"Seo description",className:"form-control"}),e.jsx(t,{message:o.seo_description})]})]}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{checked:a.status==1,onClick:s=>r("status",s.target.checked?1:0),role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",name:"publish_property",defaultValue:"true",id:"publish_property"}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:"publish_property",children:"Publish property"})]}),e.jsx("div",{className:"text-muted small",children:"Your property will not visible to your clients if not published."}),e.jsx(t,{message:o.status})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(v,{href:route("seller.ads.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})]})})]})})})})]})}export{ce as default};