import{P as e}from"./index-WDzcDGFf.js";import{r as m,j as i}from"./app-BGtL1idN.js";import{u as P,$}from"./SSRProvider-BlUcPW8O.js";import{b as j,c as E,g as I,T as O,a as K}from"./TabPane-CzxJZT60.js";import{S}from"./NavbarContext-De51xqev.js";const u=n=>{const{id:o,generateChildId:l,onSelect:x,activeKey:y,defaultActiveKey:f,transition:c,mountOnEnter:d,unmountOnExit:b,children:h}=n,[p,a]=P(y,f,x),s=$(o),r=m.useMemo(()=>l||((t,v)=>s?`${s}-${v}-${t}`:null),[s,l]),g=m.useMemo(()=>({onSelect:a,activeKey:p,transition:c,mountOnEnter:d||!1,unmountOnExit:b||!1,getControlledId:t=>r(t,"tabpane"),getControllerId:t=>r(t,"tab")}),[a,p,c,d,b,r]);return i.jsx(j.Provider,{value:g,children:i.jsx(S.Provider,{value:a||null,children:h})})};u.Panel=E;const T=({transition:n,...o})=>i.jsx(u,{...o,transition:I(n)});T.displayName="TabContainer";const A={eventKey:e.oneOfType([e.string,e.number]),title:e.node.isRequired,disabled:e.bool,tabClassName:e.string,tabAttrs:e.object},C=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};C.propTypes=A;const B=Object.assign(C,{Container:T,Content:O,Pane:K});export{B as T,u as a};
