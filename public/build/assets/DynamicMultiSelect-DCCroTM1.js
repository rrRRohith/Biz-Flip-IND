var U=Object.defineProperty;var q=(a,t,e)=>t in a?U(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var j=(a,t,e)=>(q(a,typeof t!="symbol"?t+"":t,e),e);import{r as u,j as z}from"./app-1W61cHJj.js";import{_ as B}from"./extends-CF3RwP-h.js";import{_ as F,c as W,a as h,v as G,g as H,b as I,u as J,S as K}from"./Select-49a62830.esm-VWcMs1ZE.js";import{_ as A}from"./objectSpread2-zE2D4Rih.js";var Q=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],E=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=String(t).toLowerCase(),i=String(o.getOptionValue(e)).toLowerCase(),g=String(o.getOptionLabel(e)).toLowerCase();return i===n||g===n},b={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,e,o,n){return!(!t||e.some(function(i){return E(t,i,n)})||o.some(function(i){return E(t,i,n)}))},getNewOptionData:function(t,e){return{label:e,value:t,__isNew__:!0}}};function X(a){var t=a.allowCreateWhileLoading,e=t===void 0?!1:t,o=a.createOptionPosition,n=o===void 0?"last":o,i=a.formatCreateLabel,g=i===void 0?b.formatCreateLabel:i,L=a.isValidNewOption,w=L===void 0?b.isValidNewOption:L,S=a.getNewOptionData,d=S===void 0?b.getNewOptionData:S,O=a.onCreateOption,$=a.options,l=$===void 0?[]:$,m=a.onChange,r=F(a,Q),N=r.getOptionValue,V=N===void 0?H:N,_=r.getOptionLabel,P=_===void 0?I:_,s=r.inputValue,D=r.isLoading,x=r.isMulti,v=r.value,y=r.name,p=u.useMemo(function(){return w(s,W(v),l,{getOptionValue:V,getOptionLabel:P})?d(s,g(s)):void 0},[g,d,P,V,s,w,l,v]),R=u.useMemo(function(){return(e||!D)&&p?n==="first"?[p].concat(h(l)):[].concat(h(l),[p]):l},[e,n,D,p,l]),k=u.useCallback(function(c,f){if(f.action!=="select-option")return m(c,f);var M=Array.isArray(c)?c:[c];if(M[M.length-1]===p){if(O)O(s);else{var C=d(s,s),T={action:"create-option",name:y,option:C};m(G(x,[].concat(h(W(v)),[C]),C),T)}return}m(c,f)},[d,s,x,y,p,O,m,v]);return A(A({},r),{},{options:R,onChange:k})}var Y=u.forwardRef(function(a,t){var e=J(a),o=X(e);return u.createElement(K,B({ref:t},o))}),Z=Y;class ee extends u.Component{constructor(e){super(e);j(this,"handleChange",e=>{this.setState({selectedOption:e},()=>{this.props.onChange&&this.props.onChange(e?e.map(o=>o.value):[])})});this.state={selectedOption:e.defaultValue?e.defaultValue.map(o=>({value:o,label:String(o)})):[],options:e.options||[]}}componentDidUpdate(e){e.options!==this.props.options&&this.setState({options:this.props.options})}render(){const{selectedOption:e,options:o}=this.state,{nameval:n}=this.props;return z.jsx(Z,{isClearable:!0,options:o,onChange:this.handleChange,name:n,value:e,isMulti:!0})}}const re=ee;export{re as D};
