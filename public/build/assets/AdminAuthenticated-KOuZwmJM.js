import{r as i,R as b,j as d}from"./app-1W61cHJj.js";import"./Dropdown-ChLCVAVs.js";import{A as S,a as x}from"./AdminHeader-9zNdcYjW.js";import{T as w}from"./ToastNotification-BzT7mPO5.js";var s={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},h=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],v=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],g=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],r=typeof window<"u"&&typeof window.document<"u"?window.document:{},t="fullscreenEnabled"in r&&Object.keys(s)||h[0]in r&&h||v[0]in r&&v||g[0]in r&&g||[],a={requestFullscreen:function(e){return e[t[s.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[t[s.requestFullscreen]]},get exitFullscreen(){return r[t[s.exitFullscreen]].bind(r)},get fullscreenPseudoClass(){return":"+t[s.fullscreen]},addEventListener:function(e,l,n){return r.addEventListener(t[s[e]],l,n)},removeEventListener:function(e,l,n){return r.removeEventListener(t[s[e]],l,n)},get fullscreenEnabled(){return!!r[t[s.fullscreenEnabled]]},set fullscreenEnabled(e){},get fullscreenElement(){return r[t[s.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return r[("on"+t[s.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return r[("on"+t[s.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return r[("on"+t[s.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return r[("on"+t[s.fullscreenerror]).toLowerCase()]=e}};function C(){var e=i.useState(!1),l=e[0],n=e[1],u=i.useRef(null);i.useEffect(function(){var c=function(){n(a.fullscreenElement===u.current)};return a.addEventListener("fullscreenchange",c),function(){return a.removeEventListener("fullscreenchange",c)}},[]);var o=i.useCallback(function(){if(a.fullscreenElement)return a.exitFullscreen().then(function(){return a.requestFullscreen(u.current)});if(u.current)return a.requestFullscreen(u.current)},[]),f=i.useCallback(function(){return a.fullscreenElement===u.current?a.exitFullscreen():Promise.resolve()},[]);return i.useMemo(function(){return{active:l,enter:o,exit:f,node:u}},[l,o,f])}var p=function(l){var n=l.handle,u=l.onChange,o=l.children,f=l.className,c=[];return f&&c.push(f),c.push("fullscreen"),n.active&&c.push("fullscreen-enabled"),i.useEffect(function(){u&&u(n.active,n)},[n.active]),b.createElement("div",{className:c.join(" "),ref:n.node,style:n.active?{height:"100%",width:"100%"}:void 0},o)};function y({user:e,children:l}){const[n,u]=i.useState(!1),o=C(),[f,c]=i.useState(!1),m=E=>{c(E)},F=()=>{u(!n)};return d.jsx(p,{handle:o,onChange:m,className:"bg-gray-100",children:d.jsxs("div",{className:`hold-transition bg-gray-100 light-skin sidebar-mini theme-primary fixed ${n?"sidebar-collapse":""}`,children:[d.jsx(S,{user:e,onSidebarToggle:F,handle:o,isFullScreen:f}),d.jsx(x,{isCollapsed:n}),d.jsx("main",{className:"bg-gray-100",children:l}),d.jsx(w,{})]})})}export{y as A};
