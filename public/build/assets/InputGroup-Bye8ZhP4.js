import{u,c}from"./useMergedRefs-Bc_6mM0I.js";import{r as n,j as t}from"./app-BGiLrZjH.js";import{a as m}from"./Form-pGpkAPSU.js";import{c as j}from"./Dropdown-C2zKZrgQ.js";const s=n.forwardRef(({className:o,bsPrefix:r,as:a="span",...p},e)=>(r=u(r,"input-group-text"),t.jsx(a,{ref:e,className:c(o,r),...p})));s.displayName="InputGroupText";const I=o=>t.jsx(s,{children:t.jsx(m,{type:"checkbox",...o})}),h=o=>t.jsx(s,{children:t.jsx(m,{type:"radio",...o})}),x=n.forwardRef(({bsPrefix:o,size:r,hasValidation:a,className:p,as:e="div",...i},d)=>{o=u(o,"input-group");const l=n.useMemo(()=>({}),[]);return t.jsx(j.Provider,{value:l,children:t.jsx(e,{ref:d,...i,className:c(p,o,r&&`${o}-${r}`,a&&"has-validation")})})});x.displayName="InputGroup";const k=Object.assign(x,{Text:s,Radio:h,Checkbox:I});export{k as I};