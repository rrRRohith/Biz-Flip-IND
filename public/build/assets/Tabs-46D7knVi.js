import{j as t}from"./app-aINRV8qI.js";import{u as b}from"./Anchor-B3cpeJ7_.js";import{a as f}from"./Tab-Cf7E4E2X.js";import{g as v,N as x,T as y,a as T,b as h,c as j}from"./TabPane-CGCS4bsu.js";import{m as c,f as K}from"./ElementChildren-DPqvOh15.js";function N(n){let e;return K(n,a=>{e==null&&(e=a.props.eventKey)}),e}function E(n){const{title:e,eventKey:a,disabled:r,tabClassName:i,tabAttrs:o,id:l}=n.props;return e==null?null:t.jsx(h,{as:"li",role:"presentation",children:t.jsx(j,{as:"button",type:"button",eventKey:a,disabled:r,id:l,className:i,...o,children:e})})}const A=n=>{const{id:e,onSelect:a,transition:r,mountOnEnter:i=!1,unmountOnExit:o=!1,variant:l="tabs",children:d,activeKey:u=N(d),...m}=b(n,{activeKey:"onSelect"});return t.jsxs(f,{id:e,activeKey:u,onSelect:a,transition:v(r),mountOnEnter:i,unmountOnExit:o,children:[t.jsx(x,{id:e,...m,role:"tablist",as:"ul",variant:l,children:c(d,E)}),t.jsx(y,{children:c(d,p=>{const s={...p.props};return delete s.title,delete s.disabled,delete s.tabClassName,delete s.tabAttrs,t.jsx(T,{...s})})})]})};A.displayName="Tabs";export{A as T};