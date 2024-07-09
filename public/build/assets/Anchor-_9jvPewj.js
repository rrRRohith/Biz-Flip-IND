import{_ as x}from"./extends-CCbyfPlC.js";import{a as m}from"./setPrototypeOf-D424jnZp.js";import{r as c,j as v}from"./app-DqEs7Bkv.js";import{f as j}from"./Fade-QJ9PgHvc.js";function y(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function P(t){var n=w(t,"string");return typeof n=="symbol"?n:String(n)}function w(t,n){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function C(t,n,r){var e=c.useRef(t!==void 0),o=c.useState(n),s=o[0],a=o[1],f=t!==void 0,p=e.current;return e.current=f,!f&&p&&s!==n&&a(n),[f?t:s,c.useCallback(function(l){for(var i=arguments.length,d=new Array(i>1?i-1:0),u=1;u<i;u++)d[u-1]=arguments[u];r&&r.apply(void 0,[l].concat(d)),a(l)},[r])]}function T(t,n){return Object.keys(n).reduce(function(r,e){var o,s=r,a=s[y(e)],f=s[e],p=m(s,[y(e),e].map(P)),l=n[e],i=C(f,a,t[l]),d=i[0],u=i[1];return x({},p,(o={},o[e]=d,o[l]=u,o))},t)}function W(){const[,t]=c.useReducer(n=>!n,!1);return t}const K=c.createContext(null);K.displayName="NavContext";const g=c.createContext(null),H=(t,n=null)=>t!=null?String(t):n||null,F=g,D=["as","disabled"];function O(t,n){if(t==null)return{};var r={},e=Object.keys(t),o,s;for(s=0;s<e.length;s++)o=e[s],!(n.indexOf(o)>=0)&&(r[o]=t[o]);return r}function S(t){return!t||t.trim()==="#"}function b({tagName:t,disabled:n,href:r,target:e,rel:o,role:s,onClick:a,tabIndex:f=0,type:p}){t||(r!=null||e!=null||o!=null?t="a":t="button");const l={tagName:t};if(t==="button")return[{type:p||"button",disabled:n},l];const i=u=>{if((n||t==="a"&&S(r))&&u.preventDefault(),n){u.stopPropagation();return}a==null||a(u)},d=u=>{u.key===" "&&(u.preventDefault(),i(u))};return t==="a"&&(r||(r="#"),n&&(r=void 0)),[{role:s??"button",disabled:void 0,tabIndex:n?void 0:f,href:r,target:t==="a"?e:void 0,"aria-disabled":n||void 0,rel:t==="a"?o:void 0,onClick:i,onKeyDown:d},l]}const h=c.forwardRef((t,n)=>{let{as:r,disabled:e}=t,o=O(t,D);const[s,{tagName:a}]=b(Object.assign({tagName:r,disabled:e},o));return v.jsx(a,Object.assign({},o,s,{ref:n}))});h.displayName="Button";const k=c.createContext(null);k.displayName="NavbarContext";const R=["onKeyDown"];function _(t,n){if(t==null)return{};var r={},e=Object.keys(t),o,s;for(s=0;s<e.length;s++)o=e[s],!(n.indexOf(o)>=0)&&(r[o]=t[o]);return r}function A(t){return!t||t.trim()==="#"}const E=c.forwardRef((t,n)=>{let{onKeyDown:r}=t,e=_(t,R);const[o]=b(Object.assign({tagName:"a"},e)),s=j(a=>{o.onKeyDown(a),r==null||r(a)});return A(e.href)||e.role==="button"?v.jsx("a",Object.assign({ref:n},e,o,{onKeyDown:s})):v.jsx("a",Object.assign({ref:n},e,{onKeyDown:r}))});E.displayName="Anchor";export{E as A,h as B,K as N,F as S,T as a,b,k as c,H as m,W as u};
