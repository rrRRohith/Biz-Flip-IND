import{P as e}from"./index-CsygoueB.js";import{r as m,j as i}from"./app-BGiLrZjH.js";import{u as P,$}from"./Dropdown-C2zKZrgQ.js";import{d as j,e as E,g as I,T as O,a as K}from"./TabPane-C1ZL8xTP.js";import{S}from"./NavbarContext-i2-xdJJK.js";const u=n=>{const{id:o,generateChildId:l,onSelect:x,activeKey:y,defaultActiveKey:f,transition:c,mountOnEnter:d,unmountOnExit:p,children:h}=n,[b,a]=P(y,f,x),s=$(o),r=m.useMemo(()=>l||((t,v)=>s?`${s}-${v}-${t}`:null),[s,l]),g=m.useMemo(()=>({onSelect:a,activeKey:b,transition:c,mountOnEnter:d||!1,unmountOnExit:p||!1,getControlledId:t=>r(t,"tabpane"),getControllerId:t=>r(t,"tab")}),[a,b,c,d,p,r]);return i.jsx(j.Provider,{value:g,children:i.jsx(S.Provider,{value:a||null,children:h})})};u.Panel=E;const T=({transition:n,...o})=>i.jsx(u,{...o,transition:I(n)});T.displayName="TabContainer";const A={eventKey:e.oneOfType([e.string,e.number]),title:e.node.isRequired,disabled:e.bool,tabClassName:e.string,tabAttrs:e.object},C=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};C.propTypes=A;const B=Object.assign(C,{Container:T,Content:O,Pane:K});export{B as T,u as a};