import{c as d,u as i}from"./listen-BUjgbK5W.js";import{P as h}from"./index-BSHEpYjn.js";import{r,j as l}from"./app-DucyktCl.js";import{h as J}from"./ElementChildren-BDWmj69z.js";import{C as K}from"./Col-CGc_9Xcg.js";const Q={type:h.string,tooltip:h.bool,as:h.elementType},N=r.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:s=!1,...t},n)=>l.jsx(e,{...t,ref:n,className:d(o,`${a}-${s?"tooltip":"feedback"}`)}));N.displayName="Feedback";N.propTypes=Q;const u=r.createContext({}),$=r.forwardRef(({id:e,bsPrefix:o,className:a,type:s="checkbox",isValid:t=!1,isInvalid:n=!1,as:m="input",...p},f)=>{const{controlId:c}=r.useContext(u);return o=i(o,"form-check-input"),l.jsx(m,{...p,ref:f,type:s,id:e||c,className:d(a,o,t&&"is-valid",n&&"is-invalid")})});$.displayName="FormCheckInput";const y=r.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...s},t)=>{const{controlId:n}=r.useContext(u);return e=i(e,"form-check-label"),l.jsx("label",{...s,ref:t,htmlFor:a||n,className:d(o,e)})});y.displayName="FormCheckLabel";const O=r.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:s=!1,reverse:t=!1,disabled:n=!1,isValid:m=!1,isInvalid:p=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:F,className:C,style:w,title:v="",type:g="checkbox",label:x,children:R,as:q="input",...z},A)=>{o=i(o,"form-check"),a=i(a,"form-switch");const{controlId:L}=r.useContext(u),D=r.useMemo(()=>({controlId:e||L}),[L,e]),T=!R&&x!=null&&x!==!1||J(R,y),H=l.jsx($,{...z,type:g==="switch"?"checkbox":g,ref:A,isValid:m,isInvalid:p,disabled:n,as:q});return l.jsx(u.Provider,{value:D,children:l.jsx("div",{style:w,className:d(C,T&&o,s&&`${o}-inline`,t&&`${o}-reverse`,g==="switch"&&a),children:R||l.jsxs(l.Fragment,{children:[H,T&&l.jsx(y,{title:v,children:x}),c&&l.jsx(N,{type:F,tooltip:f,children:c})]})})})});O.displayName="FormCheck";const j=Object.assign(O,{Input:$,Label:y}),S=r.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:s,id:t,className:n,isValid:m=!1,isInvalid:p=!1,plaintext:f,readOnly:c,as:F="input",...C},w)=>{const{controlId:v}=r.useContext(u);return e=i(e,"form-control"),l.jsx(F,{...C,type:o,size:s,ref:w,readOnly:c,id:t||v,className:d(n,f?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,m&&"is-valid",p&&"is-invalid")})});S.displayName="FormControl";const U=Object.assign(S,{Feedback:N}),G=r.forwardRef(({className:e,bsPrefix:o,as:a="div",...s},t)=>(o=i(o,"form-floating"),l.jsx(a,{ref:t,className:d(e,o),...s})));G.displayName="FormFloating";const k=r.forwardRef(({controlId:e,as:o="div",...a},s)=>{const t=r.useMemo(()=>({controlId:e}),[e]);return l.jsx(u.Provider,{value:t,children:l.jsx(o,{...a,ref:s})})});k.displayName="FormGroup";const E=r.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:s=!1,className:t,htmlFor:n,...m},p)=>{const{controlId:f}=r.useContext(u);o=i(o,"form-label");let c="col-form-label";typeof a=="string"&&(c=`${c} ${c}-${a}`);const F=d(t,o,s&&"visually-hidden",a&&c);return n=n||f,a?l.jsx(K,{ref:p,as:"label",className:F,htmlFor:n,...m}):l.jsx(e,{ref:p,className:F,htmlFor:n,...m})});E.displayName="FormLabel";const M=r.forwardRef(({bsPrefix:e,className:o,id:a,...s},t)=>{const{controlId:n}=r.useContext(u);return e=i(e,"form-range"),l.jsx("input",{...s,type:"range",ref:t,className:d(o,e),id:a||n})});M.displayName="FormRange";const B=r.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:s,isValid:t=!1,isInvalid:n=!1,id:m,...p},f)=>{const{controlId:c}=r.useContext(u);return e=i(e,"form-select"),l.jsx("select",{...p,size:a,ref:f,className:d(s,e,o&&`${e}-${o}`,t&&"is-valid",n&&"is-invalid"),id:m||c})});B.displayName="FormSelect";const V=r.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:s,...t},n)=>(e=i(e,"form-text"),l.jsx(a,{...t,ref:n,className:d(o,e,s&&"text-muted")})));V.displayName="FormText";const _=r.forwardRef((e,o)=>l.jsx(j,{...e,ref:o,type:"switch"}));_.displayName="Switch";const W=Object.assign(_,{Input:j.Input,Label:j.Label}),b=r.forwardRef(({bsPrefix:e,className:o,children:a,controlId:s,label:t,...n},m)=>(e=i(e,"form-floating"),l.jsxs(k,{ref:m,className:d(o,e),controlId:s,...n,children:[a,l.jsx("label",{htmlFor:s,children:t})]})));b.displayName="FloatingLabel";const X={_ref:h.any,validated:h.bool,as:h.elementType},I=r.forwardRef(({className:e,validated:o,as:a="form",...s},t)=>l.jsx(a,{...s,ref:t,className:d(e,o&&"was-validated")}));I.displayName="Form";I.propTypes=X;const ae=Object.assign(I,{Group:k,Control:U,Floating:G,Check:j,Switch:W,Label:E,Text:V,Range:M,Select:B,FloatingLabel:b});export{ae as F,$ as a};
