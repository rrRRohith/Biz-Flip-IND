import{r as l,j as e}from"./app-DeIulrNp.js";import{N as s,T as p,a as m}from"./TabPane-DhgN3S-_.js";import{P as a}from"./index-tQceiO-8.js";function j({options:n}){const[i,o]=l.useState("0"),c=r=>{o(r)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{justify:!0,variant:"tabs",defaultActiveKey:i,onSelect:c,children:n.map((r,t)=>e.jsx(s.Item,{children:e.jsx(s.Link,{eventKey:t.toString(),children:r.title})},t))}),e.jsx(p,{children:n.map((r,t)=>e.jsx(m,{eventKey:t.toString(),active:i===t.toString(),children:e.jsx("div",{className:"p-20",dangerouslySetInnerHTML:{__html:r.content}})},t))})]})}j.propTypes={options:a.arrayOf(a.shape({title:a.string.isRequired})).isRequired};export{j as T};
