import{r as T,j as e}from"./app-1W61cHJj.js";import{D as y,C,P as L}from"./react-beautiful-dnd.esm-D4W8xMuN.js";import{I as t}from"./InputLabel-B3CMY0KR.js";import{T as m}from"./TextInput-CYkU9j_F.js";import{I as h}from"./InputError-BASFLVK9.js";const P=({items:u,onDragEnd:f,onAddItem:j,onAddChildItem:k,onDeleteItem:b,onChangeItem:d,landingPage:N,formErrors:_})=>{const[o,c]=T.useState({}),p=(s,l)=>{for(let r of s){if(r.id===l)return r;if(r.children){const n=p(r.children,l);if(n)return n}}return null},g=s=>{const l={};return s.linkText||(l.linkText="Link text is required"),(!s.linkType||s.linkType=="page_link")&&(l.linkType="Link type is required"),l},v=s=>{const l=p(u,s);if(!l){console.error("Parent item not found:",s);return}const r=g(l);if(Object.keys(r).length>0){c(n=>({...n,[s]:r}));return}k(s),c(n=>({...n,[s]:{}}))},x=s=>s.map((l,r)=>e.jsx(L,{draggableId:l.id,index:r,children:n=>e.jsxs("li",{className:"sortable-item",children:[e.jsx("div",{className:"add-child-btn",children:e.jsx("span",{className:"bi bi-plus",title:"add a child item",onClick:()=>v(l.id)})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(m,{className:"form-control",required:!0,type:"text",value:l.linkText,onChange:a=>{d(l.id,{...l,linkText:a.target.value}),c(i=>({...i,[l.id]:{...i[l.id],linkText:""}}))}}),o[l.id]&&o[l.id].linkText&&e.jsx(h,{message:o[l.id].linkText,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsxs("select",{className:"form-control py-10",value:l.linkType,required:!0,onChange:a=>{d(l.id,{...l,linkType:a.target.value,customLink:a.target.value==="page_link"?"":l.customLink}),c(i=>({...i,[l.id]:{...i[l.id],linkType:""}}))},children:[e.jsx("option",{value:""}),e.jsx("optgroup",{label:"Landing Pages",children:N.map((a,i)=>e.jsx("option",{value:a.link,children:a.label},i))}),e.jsx("option",{className:"fw-bold",value:"custom_link",children:"Custom Link"})]}),o[l.id]&&o[l.id].linkType&&e.jsx(h,{message:o[l.id].linkType,className:"mt-2 col-12"})]})}),l.linkType==="custom_link"&&e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Custom link"}),e.jsx(m,{className:"form-control",type:"text",value:l.customLink,onChange:a=>d(l.id,{...l,customLink:a.target.value})})]})}),e.jsx("div",{className:"remove-child-btn",children:e.jsx("span",{title:"Delete this item",className:"bi bi-x my-10",onClick:()=>b(l.id)})})]}),l.children&&l.children.length>0&&e.jsx("ul",{className:"sub-tree",children:x(l.children)})]})]})},l.id));return e.jsxs("div",{className:"sortable-container",children:[e.jsx(y,{onDragEnd:f,children:e.jsx(C,{droppableId:"droppable",children:s=>e.jsxs("ul",{className:"sortable-list tree",children:[x(u),s.placeholder]})})}),e.jsx("span",{role:"button",className:"bi bi-plus-circle",onClick:j,style:{position:"absolute",left:"60px"},children:"Add Item"})]})};export{P as S};
