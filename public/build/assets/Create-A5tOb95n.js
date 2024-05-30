import{W as y,r as h,j as e,Y as k,a as j}from"./app-CJ8gtaWK.js";import{A as I}from"./AdminAuthenticated-VedlVE-1.js";import{I as c}from"./InputError-CXZmLGzP.js";import{T as o}from"./TextInput-BkMZLaX2.js";import{I as m}from"./InputLabel-L28_G93Y.js";import{S}from"./SelectOption-M1bIkM26.js";import{D}from"./DynamicSelect-u7jrcKN2.js";import{R as b}from"./RadioButtonLabel-uD2ao7s4.js";import"./PermissionAllow-8aMWW39F.js";import"./AdminSidebar-k5u8Y9Pb.js";import"./objectWithoutPropertiesLoose-mTU-Rj-z.js";import"./ToastNotification-GiQwRqxR.js";import"./react-select.esm-C-Qzknou.js";import"./Select-49a62830.esm-CrE4LB8d.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BDHRj7Tc.js";import"./react-select-creatable.esm-CRMacsRt.js";function V({auth:u}){const{data:t,setData:i,post:N,errors:r,reset:R}=y({title:"",redirection:"",type:"",new_window:"",picture_desktop:"",picture_mobile:"",position:"",status:"1"}),g=s=>{s.preventDefault(),N(route("admin.banners.store"))},[n,d]=h.useState(""),[x,p]=h.useState(""),v=s=>{const a=s.target.files[0];a&&(i("picture_desktop",a),d(URL.createObjectURL(a)))},f=()=>{i("picture_desktop",""),d("")},w=s=>{const a=s.target.files[0];a&&(i("picture_mobile",a),p(URL.createObjectURL(a)))},_=()=>{i("picture_mobile",""),p("")},l=(s,a)=>{i(s,a)},C=[{value:"Banner Slider",label:"Banner Slider"},{value:"Home Tile",label:"Home Tile"},{value:"Home Top Tile",label:"Home Top Tile"}];return e.jsxs(I,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banner/Create"}),children:[e.jsx(k,{title:"Banner Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Banner"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.banners.index"),children:"Banner"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:g,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(o,{id:"title",type:"text",name:"title",className:"form-control",value:t.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Redirection"}),e.jsx(o,{id:"redirection",type:"text",name:"redirection",className:"form-control",value:t.redirection,onChange:s=>l("redirection",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.redirection,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Type"}),e.jsx(D,{onChange:s=>l("type",s),value:t.type,options:C,name:"type"}),e.jsx(c,{message:r.type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(S,{onChange:s=>l("position",s),value:t.position}),e.jsx(c,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(b,{name:"status",onChange:s=>l("status",s),value:"1",checked:t.status==="1",label:"Published"}),e.jsx(b,{name:"status",onChange:s=>l("status",s),value:"0",checked:t.status==="0",label:"Draft"}),e.jsx(c,{message:r.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Desktop Image"}),e.jsxs("div",{className:"desktop-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(o,{id:"project_image_path",type:"file",name:"picture_desktop",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Mobile Image"}),e.jsxs("div",{className:"desktop-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:_})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(o,{id:"project_image_path2",type:"file",name:"picture_mobile",className:"d-none mt-1 block w-full upload",onChange:w})]})]})]})})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{V as default};
