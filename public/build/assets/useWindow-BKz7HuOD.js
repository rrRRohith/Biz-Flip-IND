import{r}from"./app-OIveC4vg.js";import{d as u}from"./useMergedRefs-C14ws7xt.js";function c(e){const n=r.useRef(null);return r.useEffect(()=>{n.current=e}),n.current}function i(){return r.useState(null)}function a(){const e=r.useRef(!0),n=r.useRef(()=>e.current);return r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function f(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}const t=r.createContext(u?window:void 0);t.Provider;function m(){return r.useContext(t)}export{m as a,a as b,c,f as d,i as u};
