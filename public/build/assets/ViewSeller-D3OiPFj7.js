import{r as a,W as x,j as e,a as t}from"./app-CPHmblyB.js";import{P as l}from"./index-jrEq7tlc.js";import"./slick-theme-5I0BuFsp.js";import"./TabView-BbReKAnr.js";import"./DynamicSelect-uXoqBOIg.js";import{T as o}from"./Tabs-o2dsaJ7K.js";import{T as d}from"./Tab-Biy1FCdp.js";import{d as s}from"./index-CA_DTVAv.js";import{B as j}from"./Badge-DH4A3NL3.js";import"./useMergedRefs-BFO96Tpx.js";import"./TabPane-tGVXYZw1.js";import"./NavbarContext-Bbiy1I5a.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Fade-D2_AvUfd.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./react-select.esm-Cyx6UeUx.js";import"./Select-49a62830.esm-qKEew1ha.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./extends-D4OKFbg0.js";import"./emotion-react.browser.esm-CAbDcd6o.js";import"./hoist-non-react-statics.cjs-JylaiONB.js";import"./ElementChildren-ChtDAW7O.js";import"./SSRProvider-CxlNfGfU.js";import"./interopRequireDefault-Y9pwbXtE.js";const m=({collection:i,handleClose:p,onSubmit:b})=>{a.useState(!1),a.useState(i.status);const[c,h]=a.useState("Profile");return x({status:i.status||"0"}),console.log(i),i.status==1||i.status==-1,e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row  border-0",children:e.jsxs(o,{id:"subscription-plans-tabs",activeKey:c,onSelect:r=>h(r),className:"mb-3",children:[e.jsx(d,{eventKey:"Profile",title:"Profile",children:e.jsx("div",{className:"col-lg-12 mx-auto",children:e.jsxs("div",{className:"row p-4 position-relative",children:[e.jsx("div",{className:" float-end me-20 "}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("img",{src:i.picture,className:"me-3 rounded-circle avatar-xxxl",onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}}),e.jsx(t,{href:route("admin.sellers.edit",i.id),className:"position-absolute",style:{width:"30px",height:"30px",borderRadius:"25px"},children:e.jsx("i",{className:"bi bi-pencil-fill  text-primary",role:"button"})})]})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("h5",{children:[e.jsx("span",{className:"bi bi-person-fill fs-20 me-2"}),i.full_name]}),e.jsxs("h6",{children:[e.jsx("span",{className:"bi bi-envelope-fill fs-20 me-2"}),e.jsx("a",{href:`tel:${i.email}`,children:i.email})]}),e.jsxs("h6",{children:[e.jsx("span",{className:"bi bi-phone-fill fs-20 me-2"}),e.jsx("a",{href:`tel:${i.phone}`,children:i.phone})]}),e.jsxs("h6",{children:[e.jsx("span",{className:"bi bi-geo-alt-fill fs-20 me-2"}),i.address,",",e.jsxs("span",{className:"",children:[" ",i.postalcode," ",i.city," ",i.province]})]})]}),i.is_agent&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-20",children:[e.jsx("h4",{className:"fw-bold",children:e.jsx("u",{children:"Company Details"})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("h5",{children:[e.jsx("span",{className:"bi bi-buildings-fill fs-20 me-2"}),i.company_name]}),e.jsxs("h6",{children:[e.jsx("span",{className:"bi bi-globe-europe-africa fs-20 me-2"}),i.website]})]}),e.jsx("div",{className:"col-lg-4"})]})})]})})]})})}),e.jsxs(d,{eventKey:"Ads",title:"Ads",children:[e.jsx(e.Fragment,{children:console.log(i.ads)}),e.jsx("div",{className:"table-responsive rounded card-table",children:i.ads.length>0?e.jsx(e.Fragment,{children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Ad"}),e.jsx(s.Th,{children:"City"}),e.jsx(s.Th,{className:"text-end",children:"Price"}),e.jsx(s.Th,{children:"Leads"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Purpose"}),e.jsx(s.Th,{children:"Created at"})]})}),e.jsx(s.Tbody,{children:i.ads.map(r=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:e.jsx(j,{value:`#${1e3+r.id}`,bg:"bg-dark",color:"text-white"})}),e.jsx(s.Td,{role:"button",onClick:()=>handleShow(r),children:e.jsxs("div",{className:"d-flex",children:[e.jsx("img",{src:r.main_picture,className:"w-30 rounded-5 ",alt:"Image",onError:n=>{n.target.onerror=null,n.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("span",{className:"ms-2",children:[" ",r.title," "]})]})}),e.jsx(s.Td,{children:e.jsx("small",{children:r.city})}),e.jsx(s.Td,{className:"text-end",children:window.formatPrice(r.price)}),e.jsx(s.Td,{children:e.jsx(t,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:r.id}),children:r.total_leads??0})}),e.jsx(s.Td,{children:r.property_type}),e.jsx(s.Td,{children:r.ad_purpose}),e.jsxs(s.Td,{children:[window.formatDate(r.created_at),e.jsx("br",{}),window.formatTime(r.created_at)]})]},r.id))})]})}):e.jsx(e.Fragment,{children:e.jsx("div",{id:"content",className:"h-100 text-center",children:e.jsx("h5",{className:"fw-bold fs-4",children:"No ads found!"})})})})]}),e.jsx(d,{eventKey:"Leads",title:"Leads",children:e.jsx("div",{className:"table-responsive rounded card-table",children:i.leads.length>0?e.jsx(e.Fragment,{children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Property"}),e.jsx(s.Th,{children:"Full Name"}),e.jsx(s.Th,{children:"Email"}),e.jsx(s.Th,{children:"Mobile"}),e.jsx(s.Th,{children:"Created At"})]})}),e.jsx(s.Tbody,{children:i.leads.map(r=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:r.id}),e.jsx(s.Td,{children:r.ad!=null?r.ad.title:"Unknown ad"}),e.jsxs(s.Td,{children:[r.firstname," ",r.lastname]}),e.jsx(s.Td,{children:r.email}),e.jsx(s.Td,{children:r.phone}),e.jsxs(s.Td,{children:[" ",e.jsxs(e.Fragment,{children:[window.formatDate(r.created_at)," ",e.jsx("br",{}),window.formatTime(r.created_at)]})]})]},r.id))})]})}):e.jsx(e.Fragment,{children:e.jsx("div",{id:"content",className:"h-100 text-center",children:e.jsx("h5",{className:"fw-bold fs-4",children:"No leads found!"})})})})})]})})})};m.propTypes={collection:l.object.isRequired,handleClose:l.func.isRequired,onSubmit:l.func.isRequired};const W=m;export{W as default};
