import{r as c,j as v}from"./app-DLtj40sa.js";import{_ as x}from"./extends-CF3RwP-h.js";import{_ as m}from"./objectWithoutPropertiesLoose-CAYKN5F1.js";import{e as j}from"./useMergedRefs-D7YIcOyO.js";function T(){const[,t]=c.useReducer(n=>!n,!1);return t}const P=c.createContext(null),W=(t,n=null)=>t!=null?String(t):n||null,H=P,w=c.createContext(null);w.displayName="NavContext";const C=["as","disabled"];function K(t,n){if(t==null)return{};var r={},e=Object.keys(t),o,s;for(s=0;s<e.length;s++)o=e[s],!(n.indexOf(o)>=0)&&(r[o]=t[o]);return r}function g(t){return!t||t.trim()==="#"}function b({tagName:t,disabled:n,href:r,target:e,rel:o,role:s,onClick:a,tabIndex:f=0,type:p}){t||(r!=null||e!=null||o!=null?t="a":t="button");const l={tagName:t};if(t==="button")return[{type:p||"button",disabled:n},l];const i=u=>{if((n||t==="a"&&g(r))&&u.preventDefault(),n){u.stopPropagation();return}a==null||a(u)},d=u=>{u.key===" "&&(u.preventDefault(),i(u))};return t==="a"&&(r||(r="#"),n&&(r=void 0)),[{role:s??"button",disabled:void 0,tabIndex:n?void 0:f,href:r,target:t==="a"?e:void 0,"aria-disabled":n||void 0,rel:t==="a"?o:void 0,onClick:i,onKeyDown:d},l]}const D=c.forwardRef((t,n)=>{let{as:r,disabled:e}=t,o=K(t,C);const[s,{tagName:a}]=b(Object.assign({tagName:r,disabled:e},o));return v.jsx(a,Object.assign({},o,s,{ref:n}))});D.displayName="Button";function y(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function O(t){var n=S(t,"string");return typeof n=="symbol"?n:String(n)}function S(t,n){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function h(t,n,r){var e=c.useRef(t!==void 0),o=c.useState(n),s=o[0],a=o[1],f=t!==void 0,p=e.current;return e.current=f,!f&&p&&s!==n&&a(n),[f?t:s,c.useCallback(function(l){for(var i=arguments.length,d=new Array(i>1?i-1:0),u=1;u<i;u++)d[u-1]=arguments[u];r&&r.apply(void 0,[l].concat(d)),a(l)},[r])]}function F(t,n){return Object.keys(n).reduce(function(r,e){var o,s=r,a=s[y(e)],f=s[e],p=m(s,[y(e),e].map(O)),l=n[e],i=h(f,a,t[l]),d=i[0],u=i[1];return x({},p,(o={},o[e]=d,o[l]=u,o))},t)}const k=["onKeyDown"];function _(t,n){if(t==null)return{};var r={},e=Object.keys(t),o,s;for(s=0;s<e.length;s++)o=e[s],!(n.indexOf(o)>=0)&&(r[o]=t[o]);return r}function R(t){return!t||t.trim()==="#"}const A=c.forwardRef((t,n)=>{let{onKeyDown:r}=t,e=_(t,k);const[o]=b(Object.assign({tagName:"a"},e)),s=j(a=>{o.onKeyDown(a),r==null||r(a)});return R(e.href)||e.role==="button"?v.jsx("a",Object.assign({ref:n},e,o,{onKeyDown:s})):v.jsx("a",Object.assign({ref:n},e,{onKeyDown:r}))});A.displayName="Anchor";const E=c.createContext(null);E.displayName="NavbarContext";export{A,D as B,w as N,H as S,b as a,F as b,E as c,W as m,T as u};