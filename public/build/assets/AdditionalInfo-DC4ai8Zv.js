import{j as e}from"./app-1W61cHJj.js";function i({info:a,onNameChange:s,onValueChange:t,onDelete:n}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"row g-5 align-items-end",children:[e.jsx("div",{className:"col",children:e.jsxs("div",{children:[e.jsx("label",{children:"Name"}),e.jsx("input",{type:"text",placeholder:"Info name",className:"form-control",value:a.info,onChange:l=>s(a.id,l.target.value)})]})}),e.jsx("div",{className:"col",children:e.jsxs("div",{children:[e.jsx("label",{children:"Value"}),e.jsx("input",{type:"text",placeholder:"Value",className:"form-control",value:a.value,onChange:l=>t(a.id,l.target.value)})]})}),e.jsx("div",{className:"col-auto",children:e.jsx("button",{type:"button",onClick:()=>n(a.id),className:"btn btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})})})}export{i as default};
