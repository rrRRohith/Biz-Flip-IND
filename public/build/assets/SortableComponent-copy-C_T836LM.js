import{r as v,j as e}from"./app-BEKZL5x1.js";import{D as T,C as y,P as C}from"./react-beautiful-dnd.esm-D1OXMXvR.js";import{I as d}from"./InputLabel-DCVzNYft.js";import{T as u}from"./TextInput-D9Rh1z9Y.js";import"./index-mzBByKJf.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./extends-CF3RwP-h.js";import"./objectSpread2-BGia1Xzf.js";import"./defineProperty-CbP60PBK.js";import"./hoist-non-react-statics.cjs-BsFk7wc9.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";const O=({items:p,onDragEnd:f,onAddItem:h,onAddChildItem:b,onDeleteItem:j,onChangeItem:t,landingPage:k})=>{const[o,c]=v.useState({}),x=(s,l)=>{for(let n of s){if(n.id===l)return n;if(n.children){const r=x(n.children,l);if(r)return r}}return null},g=s=>{const l={};return s.linkText||(l.linkText="Link text is required"),(!s.linkType||s.linkType=="page_link")&&(l.linkType="Link type is required"),l},N=s=>{const l=x(p,s);if(!l){console.error("Parent item not found:",s);return}const n=g(l);if(Object.keys(n).length>0){c(r=>({...r,[s]:n}));return}b(s),c(r=>({...r,[s]:{}}))},m=s=>s.map((l,n)=>e.jsx(C,{draggableId:l.id,index:n,children:r=>e.jsxs("li",{className:"sortable-item",ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,children:[e.jsx("div",{className:"add-child-btn",children:e.jsx("span",{className:"bi bi-plus",onClick:()=>N(l.id)})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(u,{className:"form-control",type:"text",value:l.linkText,onChange:a=>{t(l.id,{...l,linkText:a.target.value}),c(i=>({...i,[l.id]:{...i[l.id],linkText:""}}))}}),o[l.id]&&o[l.id].linkText&&e.jsx("div",{className:"text-danger",children:o[l.id].linkText})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsxs("select",{className:"form-control py-10",value:l.linkType,onChange:a=>{t(l.id,{...l,linkType:a.target.value,customLink:a.target.value==="page_link"?"":l.customLink}),c(i=>({...i,[l.id]:{...i[l.id],linkType:""}}))},children:[e.jsx("option",{value:""}),e.jsx("optgroup",{label:"Landing Pages",children:k.map((a,i)=>e.jsx("option",{value:a.link,children:a.label},i))}),e.jsx("option",{className:"fw-bold",value:"custom_link",children:"Custom Link"})]}),o[l.id]&&o[l.id].linkType&&e.jsx("div",{className:"text-danger",children:o[l.id].linkType})]})}),l.linkType==="custom_link"&&e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Custom link"}),e.jsx(u,{className:"form-control",type:"text",value:l.customLink,onChange:a=>t(l.id,{...l,customLink:a.target.value})})]})}),e.jsx("div",{className:"remove-child-btn",children:e.jsx("span",{className:"bi bi-x my-10",onClick:()=>j(l.id)})})]}),l.children&&l.children.length>0&&e.jsx("ul",{className:"sub-tree",children:m(l.children)})]})]})},l.id));return e.jsxs("div",{className:"sortable-container",children:[e.jsx(T,{onDragEnd:f,children:e.jsx(y,{droppableId:"droppable",children:s=>e.jsxs("ul",{className:"sortable-list tree",ref:s.innerRef,...s.droppableProps,children:[m(p),s.placeholder]})})}),e.jsx("button",{className:"btn btn-dark btn-sm",type:"button",onClick:h,children:"Add Item"})]})};export{O as default};
