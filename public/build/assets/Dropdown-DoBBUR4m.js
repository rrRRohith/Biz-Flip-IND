import{e as X,o as Qt,l as Ee,f as wt,q as et,g as Zt,u as _,c as G,h as yt,d as er,i as tr}from"./useMergedRefs-BtIKzljZ.js";import{r as h,g as rr,j as M}from"./app-DLXOGcZi.js";import{$ as nr,u as or}from"./SSRProvider-BEKAir0L.js";import{u as ar,c as tt,a as ir,b as sr,d as cr}from"./useWindow-BsXDL-p9.js";import{S as Se,N as ur,m as rt,B as fr,u as lr,A as pr,c as dr,a as vr,b as mr}from"./NavbarContext-B4gA4rQT.js";function gr(e,t,r,n=!1){const o=X(r);h.useEffect(()=>{const a=typeof e=="function"?e():e;return a.addEventListener(t,o,n),()=>a.removeEventListener(t,o,n)},[e])}const Ae=h.createContext(null);var nt=Object.prototype.hasOwnProperty;function ot(e,t,r){for(r of e.keys())if(pe(r,t))return r}function pe(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&pe(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=ot(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=ot(t,o),!o)||!pe(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(nt.call(e,r)&&++n&&!nt.call(t,r)||!(r in t)||!pe(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function hr(e){const t=ar();return[e[0],h.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var N="top",H="bottom",F="right",L="left",Ne="auto",he=[N,H,F,L],oe="start",me="end",wr="clippingParents",bt="viewport",le="popper",yr="reference",at=he.reduce(function(e,t){return e.concat([t+"-"+oe,t+"-"+me])},[]),xt=[].concat(he,[Ne]).reduce(function(e,t){return e.concat([t,t+"-"+oe,t+"-"+me])},[]),br="beforeRead",xr="read",Or="afterRead",Er="beforeMain",Cr="main",$r="afterMain",Dr="beforeWrite",Ar="write",jr="afterWrite",Pr=[br,xr,Or,Er,Cr,$r,Dr,Ar,jr];function U(e){return e.split("-")[0]}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function te(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Le(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var ee=Math.max,De=Math.min,ae=Math.round;function Te(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ot(){return!/^((?!chrome|android).)*safari/i.test(Te())}function ie(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&q(e)&&(o=e.offsetWidth>0&&ae(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ae(n.height)/e.offsetHeight||1);var f=te(e)?W(e):window,s=f.visualViewport,i=!Ot()&&r,u=(n.left+(i&&s?s.offsetLeft:0))/o,c=(n.top+(i&&s?s.offsetTop:0))/a,l=n.width/o,m=n.height/a;return{width:l,height:m,top:c,right:u+l,bottom:c+m,left:u,x:u,y:c}}function Ie(e){var t=ie(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Et(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Le(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Y(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){return W(e).getComputedStyle(e)}function Rr(e){return["table","td","th"].indexOf(Y(e))>=0}function J(e){return((te(e)?e.ownerDocument:e.document)||window.document).documentElement}function je(e){return Y(e)==="html"?e:e.assignedSlot||e.parentNode||(Le(e)?e.host:null)||J(e)}function it(e){return!q(e)||K(e).position==="fixed"?null:e.offsetParent}function kr(e){var t=/firefox/i.test(Te()),r=/Trident/i.test(Te());if(r&&q(e)){var n=K(e);if(n.position==="fixed")return null}var o=je(e);for(Le(o)&&(o=o.host);q(o)&&["html","body"].indexOf(Y(o))<0;){var a=K(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function we(e){for(var t=W(e),r=it(e);r&&Rr(r)&&K(r).position==="static";)r=it(r);return r&&(Y(r)==="html"||Y(r)==="body"&&K(r).position==="static")?t:r||kr(e)||t}function We(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function de(e,t,r){return ee(e,De(t,r))}function Mr(e,t,r){var n=de(e,t,r);return n>r?r:n}function Ct(){return{top:0,right:0,bottom:0,left:0}}function $t(e){return Object.assign({},Ct(),e)}function Dt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Sr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,$t(typeof t!="number"?t:Dt(t,he))};function Tr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,s=U(r.placement),i=We(s),u=[L,F].indexOf(s)>=0,c=u?"height":"width";if(!(!a||!f)){var l=Sr(o.padding,r),m=Ie(a),p=i==="y"?N:L,v=i==="y"?H:F,g=r.rects.reference[c]+r.rects.reference[i]-f[i]-r.rects.popper[c],d=f[i]-r.rects.reference[i],O=we(a),b=O?i==="y"?O.clientHeight||0:O.clientWidth||0:0,x=g/2-d/2,w=l[p],y=b-m[c]-l[v],C=b/2-m[c]/2+x,$=de(w,C,y),D=i;r.modifiersData[n]=(t={},t[D]=$,t.centerOffset=$-C,t)}}function Br(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Et(t.elements.popper,o)&&(t.elements.arrow=o))}const Nr={name:"arrow",enabled:!0,phase:"main",fn:Tr,effect:Br,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(e){return e.split("-")[1]}var Lr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ir(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ae(r*o)/o||0,y:ae(n*o)/o||0}}function st(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,f=e.offsets,s=e.position,i=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,l=e.isFixed,m=f.x,p=m===void 0?0:m,v=f.y,g=v===void 0?0:v,d=typeof c=="function"?c({x:p,y:g}):{x:p,y:g};p=d.x,g=d.y;var O=f.hasOwnProperty("x"),b=f.hasOwnProperty("y"),x=L,w=N,y=window;if(u){var C=we(r),$="clientHeight",D="clientWidth";if(C===W(r)&&(C=J(r),K(C).position!=="static"&&s==="absolute"&&($="scrollHeight",D="scrollWidth")),C=C,o===N||(o===L||o===F)&&a===me){w=H;var R=l&&C===y&&y.visualViewport?y.visualViewport.height:C[$];g-=R-n.height,g*=i?1:-1}if(o===L||(o===N||o===H)&&a===me){x=F;var P=l&&C===y&&y.visualViewport?y.visualViewport.width:C[D];p-=P-n.width,p*=i?1:-1}}var E=Object.assign({position:s},u&&Lr),A=c===!0?Ir({x:p,y:g},W(r)):{x:p,y:g};if(p=A.x,g=A.y,i){var j;return Object.assign({},E,(j={},j[w]=b?"0":"",j[x]=O?"0":"",j.transform=(y.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",j))}return Object.assign({},E,(t={},t[w]=b?g+"px":"",t[x]=O?p+"px":"",t.transform="",t))}function Wr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,u={placement:U(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,st(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,st(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Hr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Wr,data:{}};var Ce={passive:!0};function Fr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,s=f===void 0?!0:f,i=W(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(c){c.addEventListener("scroll",r.update,Ce)}),s&&i.addEventListener("resize",r.update,Ce),function(){a&&u.forEach(function(c){c.removeEventListener("scroll",r.update,Ce)}),s&&i.removeEventListener("resize",r.update,Ce)}}const Vr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Fr,data:{}};var Ur={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return Ur[t]})}var qr={start:"end",end:"start"};function ct(e){return e.replace(/start|end/g,function(t){return qr[t]})}function He(e){var t=W(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Fe(e){return ie(J(e)).left+He(e).scrollLeft}function Kr(e,t){var r=W(e),n=J(e),o=r.visualViewport,a=n.clientWidth,f=n.clientHeight,s=0,i=0;if(o){a=o.width,f=o.height;var u=Ot();(u||!u&&t==="fixed")&&(s=o.offsetLeft,i=o.offsetTop)}return{width:a,height:f,x:s+Fe(e),y:i}}function zr(e){var t,r=J(e),n=He(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ee(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=ee(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Fe(e),i=-n.scrollTop;return K(o||r).direction==="rtl"&&(s+=ee(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:s,y:i}}function Ve(e){var t=K(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function At(e){return["html","body","#document"].indexOf(Y(e))>=0?e.ownerDocument.body:q(e)&&Ve(e)?e:At(je(e))}function ve(e,t){var r;t===void 0&&(t=[]);var n=At(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=W(n),f=o?[a].concat(a.visualViewport||[],Ve(n)?n:[]):n,s=t.concat(f);return o?s:s.concat(ve(je(f)))}function Be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Xr(e,t){var r=ie(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ut(e,t,r){return t===bt?Be(Kr(e,r)):te(t)?Xr(t,r):Be(zr(J(e)))}function Yr(e){var t=ve(je(e)),r=["absolute","fixed"].indexOf(K(e).position)>=0,n=r&&q(e)?we(e):e;return te(n)?t.filter(function(o){return te(o)&&Et(o,n)&&Y(o)!=="body"}):[]}function _r(e,t,r,n){var o=t==="clippingParents"?Yr(e):[].concat(t),a=[].concat(o,[r]),f=a[0],s=a.reduce(function(i,u){var c=ut(e,u,n);return i.top=ee(c.top,i.top),i.right=De(c.right,i.right),i.bottom=De(c.bottom,i.bottom),i.left=ee(c.left,i.left),i},ut(e,f,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function jt(e){var t=e.reference,r=e.element,n=e.placement,o=n?U(n):null,a=n?se(n):null,f=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(o){case N:i={x:f,y:t.y-r.height};break;case H:i={x:f,y:t.y+t.height};break;case F:i={x:t.x+t.width,y:s};break;case L:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var u=o?We(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(a){case oe:i[u]=i[u]-(t[c]/2-r[c]/2);break;case me:i[u]=i[u]+(t[c]/2-r[c]/2);break}}return i}function ge(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,f=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?wr:s,u=r.rootBoundary,c=u===void 0?bt:u,l=r.elementContext,m=l===void 0?le:l,p=r.altBoundary,v=p===void 0?!1:p,g=r.padding,d=g===void 0?0:g,O=$t(typeof d!="number"?d:Dt(d,he)),b=m===le?yr:le,x=e.rects.popper,w=e.elements[v?b:m],y=_r(te(w)?w:w.contextElement||J(e.elements.popper),i,c,f),C=ie(e.elements.reference),$=jt({reference:C,element:x,strategy:"absolute",placement:o}),D=Be(Object.assign({},x,$)),R=m===le?D:C,P={top:y.top-R.top+O.top,bottom:R.bottom-y.bottom+O.bottom,left:y.left-R.left+O.left,right:R.right-y.right+O.right},E=e.modifiersData.offset;if(m===le&&E){var A=E[o];Object.keys(P).forEach(function(j){var k=[F,H].indexOf(j)>=0?1:-1,B=[N,H].indexOf(j)>=0?"y":"x";P[j]+=A[B]*k})}return P}function Gr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,u=i===void 0?xt:i,c=se(n),l=c?s?at:at.filter(function(v){return se(v)===c}):he,m=l.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=l);var p=m.reduce(function(v,g){return v[g]=ge(e,{placement:g,boundary:o,rootBoundary:a,padding:f})[U(g)],v},{});return Object.keys(p).sort(function(v,g){return p[v]-p[g]})}function Jr(e){if(U(e)===Ne)return[];var t=$e(e);return[ct(e),t,ct(t)]}function Qr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!0:f,i=r.fallbackPlacements,u=r.padding,c=r.boundary,l=r.rootBoundary,m=r.altBoundary,p=r.flipVariations,v=p===void 0?!0:p,g=r.allowedAutoPlacements,d=t.options.placement,O=U(d),b=O===d,x=i||(b||!v?[$e(d)]:Jr(d)),w=[d].concat(x).reduce(function(ne,z){return ne.concat(U(z)===Ne?Gr(t,{placement:z,boundary:c,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:g}):z)},[]),y=t.rects.reference,C=t.rects.popper,$=new Map,D=!0,R=w[0],P=0;P<w.length;P++){var E=w[P],A=U(E),j=se(E)===oe,k=[N,H].indexOf(A)>=0,B=k?"width":"height",S=ge(t,{placement:E,boundary:c,rootBoundary:l,altBoundary:m,padding:u}),I=k?j?F:L:j?H:N;y[B]>C[B]&&(I=$e(I));var ce=$e(I),V=[];if(a&&V.push(S[A]<=0),s&&V.push(S[I]<=0,S[ce]<=0),V.every(function(ne){return ne})){R=E,D=!1;break}$.set(E,V)}if(D)for(var T=v?3:1,re=function(z){var fe=w.find(function(xe){var Q=$.get(xe);if(Q)return Q.slice(0,z).every(function(Pe){return Pe})});if(fe)return R=fe,"break"},ue=T;ue>0;ue--){var be=re(ue);if(be==="break")break}t.placement!==R&&(t.modifiersData[n]._skip=!0,t.placement=R,t.reset=!0)}}const Zr={name:"flip",enabled:!0,phase:"main",fn:Qr,requiresIfExists:["offset"],data:{_skip:!1}};function ft(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function lt(e){return[N,F,H,L].some(function(t){return e[t]>=0})}function en(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,f=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),i=ft(f,n),u=ft(s,o,a),c=lt(i),l=lt(u);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}const tn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:en};function rn(e,t,r){var n=U(e),o=[L,N].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],s=a[1];return f=f||0,s=(s||0)*o,[L,F].indexOf(n)>=0?{x:s,y:f}:{x:f,y:s}}function nn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,f=xt.reduce(function(c,l){return c[l]=rn(l,t.rects,a),c},{}),s=f[t.placement],i=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=f}const on={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:nn};function an(e){var t=e.state,r=e.name;t.modifiersData[r]=jt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const sn={name:"popperOffsets",enabled:!0,phase:"read",fn:an,data:{}};function cn(e){return e==="x"?"y":"x"}function un(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!1:f,i=r.boundary,u=r.rootBoundary,c=r.altBoundary,l=r.padding,m=r.tether,p=m===void 0?!0:m,v=r.tetherOffset,g=v===void 0?0:v,d=ge(t,{boundary:i,rootBoundary:u,padding:l,altBoundary:c}),O=U(t.placement),b=se(t.placement),x=!b,w=We(O),y=cn(w),C=t.modifiersData.popperOffsets,$=t.rects.reference,D=t.rects.popper,R=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,P=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(C){if(a){var j,k=w==="y"?N:L,B=w==="y"?H:F,S=w==="y"?"height":"width",I=C[w],ce=I+d[k],V=I-d[B],T=p?-D[S]/2:0,re=b===oe?$[S]:D[S],ue=b===oe?-D[S]:-$[S],be=t.elements.arrow,ne=p&&be?Ie(be):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ct(),fe=z[k],xe=z[B],Q=de(0,$[S],ne[S]),Pe=x?$[S]/2-T-Q-fe-P.mainAxis:re-Q-fe-P.mainAxis,zt=x?-$[S]/2+T+Q+xe+P.mainAxis:ue+Q+xe+P.mainAxis,Re=t.elements.arrow&&we(t.elements.arrow),Xt=Re?w==="y"?Re.clientTop||0:Re.clientLeft||0:0,Ke=(j=E==null?void 0:E[w])!=null?j:0,Yt=I+Pe-Ke-Xt,_t=I+zt-Ke,ze=de(p?De(ce,Yt):ce,I,p?ee(V,_t):V);C[w]=ze,A[w]=ze-I}if(s){var Xe,Gt=w==="x"?N:L,Jt=w==="x"?H:F,Z=C[y],Oe=y==="y"?"height":"width",Ye=Z+d[Gt],_e=Z-d[Jt],ke=[N,L].indexOf(O)!==-1,Ge=(Xe=E==null?void 0:E[y])!=null?Xe:0,Je=ke?Ye:Z-$[Oe]-D[Oe]-Ge+P.altAxis,Qe=ke?Z+$[Oe]+D[Oe]-Ge-P.altAxis:_e,Ze=p&&ke?Mr(Je,Z,Qe):de(p?Je:Ye,Z,p?Qe:_e);C[y]=Ze,A[y]=Ze-Z}t.modifiersData[n]=A}}const fn={name:"preventOverflow",enabled:!0,phase:"main",fn:un,requiresIfExists:["offset"]};function ln(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function pn(e){return e===W(e)||!q(e)?He(e):ln(e)}function dn(e){var t=e.getBoundingClientRect(),r=ae(t.width)/e.offsetWidth||1,n=ae(t.height)/e.offsetHeight||1;return r!==1||n!==1}function vn(e,t,r){r===void 0&&(r=!1);var n=q(t),o=q(t)&&dn(t),a=J(t),f=ie(e,o,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((Y(t)!=="body"||Ve(a))&&(s=pn(t)),q(t)?(i=ie(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=Fe(a))),{x:f.left+s.scrollLeft-i.x,y:f.top+s.scrollTop-i.y,width:f.width,height:f.height}}function mn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&o(i)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function gn(e){var t=mn(e);return Pr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function hn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function wn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var pt={placement:"bottom",modifiers:[],strategy:"absolute"};function dt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function yn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?pt:o;return function(s,i,u){u===void 0&&(u=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},pt,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},l=[],m=!1,p={state:c,setOptions:function(O){var b=typeof O=="function"?O(c.options):O;g(),c.options=Object.assign({},a,c.options,b),c.scrollParents={reference:te(s)?ve(s):s.contextElement?ve(s.contextElement):[],popper:ve(i)};var x=gn(wn([].concat(n,c.options.modifiers)));return c.orderedModifiers=x.filter(function(w){return w.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=c.elements,b=O.reference,x=O.popper;if(dt(b,x)){c.rects={reference:vn(b,we(x),c.options.strategy==="fixed"),popper:Ie(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var y=c.orderedModifiers[w],C=y.fn,$=y.options,D=$===void 0?{}:$,R=y.name;typeof C=="function"&&(c=C({state:c,options:D,name:R,instance:p})||c)}}}},update:hn(function(){return new Promise(function(d){p.forceUpdate(),d(c)})}),destroy:function(){g(),m=!0}};if(!dt(s,i))return p;p.setOptions(u).then(function(d){!m&&u.onFirstUpdate&&u.onFirstUpdate(d)});function v(){c.orderedModifiers.forEach(function(d){var O=d.name,b=d.options,x=b===void 0?{}:b,w=d.effect;if(typeof w=="function"){var y=w({state:c,name:O,instance:p,options:x}),C=function(){};l.push(y||C)}})}function g(){l.forEach(function(d){return d()}),l=[]}return p}}const bn=yn({defaultModifiers:[tn,sn,Hr,Vr,on,Zr,fn,Nr]}),xn=["enabled","placement","strategy","modifiers"];function On(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const En={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Cn={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const a=n.getAttribute("aria-describedby");if(a&&a.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",a?`${a},${r.id}`:r.id)}}},$n=[];function Dn(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:a="absolute",modifiers:f=$n}=r,s=On(r,xn);const i=h.useRef(f),u=h.useRef(),c=h.useCallback(()=>{var d;(d=u.current)==null||d.update()},[]),l=h.useCallback(()=>{var d;(d=u.current)==null||d.forceUpdate()},[]),[m,p]=hr(h.useState({placement:o,update:c,forceUpdate:l,attributes:{},styles:{popper:{},arrow:{}}})),v=h.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:d})=>{const O={},b={};Object.keys(d.elements).forEach(x=>{O[x]=d.styles[x],b[x]=d.attributes[x]}),p({state:d,styles:O,attributes:b,update:c,forceUpdate:l,placement:d.placement})}}),[c,l,p]),g=h.useMemo(()=>(pe(i.current,f)||(i.current=f),i.current),[f]);return h.useEffect(()=>{!u.current||!n||u.current.setOptions({placement:o,strategy:a,modifiers:[...g,v,En]})},[a,o,v,n,g]),h.useEffect(()=>{if(!(!n||e==null||t==null))return u.current=bn(e,t,Object.assign({},s,{placement:o,strategy:a,modifiers:[...g,Cn,v]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,p(d=>Object.assign({},d,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),m}var An=function(){},jn=An;const Pn=rr(jn),vt=()=>{};function Rn(e){return e.button===0}function kn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Me=e=>e&&("current"in e?e.current:e),mt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Mn(e,t=vt,{disabled:r,clickTrigger:n="click"}={}){const o=h.useRef(!1),a=h.useRef(!1),f=h.useCallback(u=>{const c=Me(e);Pn(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!c||kn(u)||!Rn(u)||!!tt(c,u.target)||a.current,a.current=!1},[e]),s=X(u=>{const c=Me(e);c&&tt(c,u.target)&&(a.current=!0)}),i=X(u=>{o.current||t(u)});h.useEffect(()=>{var u,c;if(r||e==null)return;const l=Qt(Me(e)),m=l.defaultView||window;let p=(u=m.event)!=null?u:(c=m.parent)==null?void 0:c.event,v=null;mt[n]&&(v=Ee(l,mt[n],s,!0));const g=Ee(l,n,f,!0),d=Ee(l,n,b=>{if(b===p){p=void 0;return}i(b)});let O=[];return"ontouchstart"in l.documentElement&&(O=[].slice.call(l.body.children).map(b=>Ee(b,"mousemove",vt))),()=>{v==null||v(),g(),d(),O.forEach(b=>b())}},[e,r,n,f,s,i])}function Sn(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function Tn(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Bn({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:a,containerPadding:f,arrowElement:s,popperConfig:i={}}){var u,c,l,m,p;const v=Sn(i.modifiers);return Object.assign({},i,{placement:r,enabled:e,strategy:a?"fixed":i.strategy,modifiers:Tn(Object.assign({},v,{eventListeners:{enabled:t,options:(u=v.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},v.preventOverflow,{options:f?Object.assign({padding:f},(c=v.preventOverflow)==null?void 0:c.options):(l=v.preventOverflow)==null?void 0:l.options}),offset:{options:Object.assign({offset:o},(m=v.offset)==null?void 0:m.options)},arrow:Object.assign({},v.arrow,{enabled:!!s,options:Object.assign({},(p=v.arrow)==null?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!n},v.flip)}))})}const Nn=["children","usePopper"];function Ln(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const In=()=>{};function Pt(e={}){const t=h.useContext(Ae),[r,n]=ir(),o=h.useRef(!1),{flip:a,offset:f,rootCloseEvent:s,fixed:i=!1,placement:u,popperConfig:c={},enableEventListeners:l=!0,usePopper:m=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!o.current&&(o.current=!0);const v=C=>{t==null||t.toggle(!1,C)},{placement:g,setMenu:d,menuElement:O,toggleElement:b}=t||{},x=Dn(b,O,Bn({placement:u||g||"bottom-start",enabled:m,enableEvents:l??p,offset:f,flip:a,fixed:i,arrowElement:r,popperConfig:c})),w=Object.assign({ref:d||In,"aria-labelledby":b==null?void 0:b.id},x.attributes.popper,{style:x.styles.popper}),y={show:p,placement:g,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:m?x:null,arrowProps:m?Object.assign({ref:n},x.attributes.arrow,{style:x.styles.arrow}):{}};return Mn(O,v,{clickTrigger:s,disabled:!p}),[w,y]}function Rt(e){let{children:t,usePopper:r=!0}=e,n=Ln(e,Nn);const[o,a]=Pt(Object.assign({},n,{usePopper:r}));return M.jsx(M.Fragment,{children:t(o,a)})}Rt.displayName="DropdownMenu";const kt=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},gt=()=>{};function Mt(){const e=nr(),{show:t=!1,toggle:r=gt,setToggle:n,menuElement:o}=h.useContext(Ae)||{},a=h.useCallback(s=>{r(!t,s)},[t,r]),f={id:e,ref:n||gt,onClick:a,"aria-expanded":!!t};return o&&kt(o)&&(f["aria-haspopup"]=!0),[f,{show:t,toggle:r}]}function St({children:e}){const[t,r]=Mt();return M.jsx(M.Fragment,{children:e(t,r)})}St.displayName="DropdownToggle";const Wn=["eventKey","disabled","onClick","active","as"];function Hn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Tt({key:e,href:t,active:r,disabled:n,onClick:o}){const a=h.useContext(Se),f=h.useContext(ur),{activeKey:s}=f||{},i=rt(e,t),u=r==null&&e!=null?rt(s)===i:r;return[{onClick:X(l=>{n||(o==null||o(l),a&&!l.isPropagationStopped()&&a(i,l))}),"aria-disabled":n||void 0,"aria-selected":u,[wt("dropdown-item")]:""},{isActive:u}]}const Bt=h.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:a,as:f=fr}=e,s=Hn(e,Wn);const[i]=Tt({key:r,href:s.href,disabled:n,onClick:o,active:a});return M.jsx(f,Object.assign({},s,{ref:t},i))});Bt.displayName="DropdownItem";function ht(){const e=lr(),t=h.useRef(null),r=h.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function ye({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${wt("dropdown-item")}]`,focusFirstItemOnShow:a,placement:f="bottom-start",children:s}){const i=sr(),[u,c]=or(t,e,n),[l,m]=ht(),p=l.current,[v,g]=ht(),d=v.current,O=cr(u),b=h.useRef(null),x=h.useRef(!1),w=h.useContext(Se),y=h.useCallback((E,A,j=A==null?void 0:A.type)=>{c(E,{originalEvent:A,source:j})},[c]),C=X((E,A)=>{r==null||r(E,A),y(!1,A,"select"),A.isPropagationStopped()||w==null||w(E,A)}),$=h.useMemo(()=>({toggle:y,placement:f,show:u,menuElement:p,toggleElement:d,setMenu:m,setToggle:g}),[y,f,u,p,d,m,g]);p&&O&&!u&&(x.current=p.contains(p.ownerDocument.activeElement));const D=X(()=>{d&&d.focus&&d.focus()}),R=X(()=>{const E=b.current;let A=a;if(A==null&&(A=l.current&&kt(l.current)?"keyboard":!1),A===!1||A==="keyboard"&&!/^key.+$/.test(E))return;const j=et(l.current,o)[0];j&&j.focus&&j.focus()});h.useEffect(()=>{u?R():x.current&&(x.current=!1,D())},[u,x,D,R]),h.useEffect(()=>{b.current=null});const P=(E,A)=>{if(!l.current)return null;const j=et(l.current,o);let k=j.indexOf(E)+A;return k=Math.max(0,Math.min(k,j.length)),j[k]};return gr(h.useCallback(()=>i.document,[i]),"keydown",E=>{var A,j;const{key:k}=E,B=E.target,S=(A=l.current)==null?void 0:A.contains(B),I=(j=v.current)==null?void 0:j.contains(B);if(/input|textarea/i.test(B.tagName)&&(k===" "||k!=="Escape"&&S||k==="Escape"&&B.type==="search")||!S&&!I||k==="Tab"&&(!l.current||!u))return;b.current=E.type;const V={originalEvent:E,source:E.type};switch(k){case"ArrowUp":{const T=P(B,-1);T&&T.focus&&T.focus(),E.preventDefault();return}case"ArrowDown":if(E.preventDefault(),!u)c(!0,V);else{const T=P(B,1);T&&T.focus&&T.focus()}return;case"Tab":Zt(B.ownerDocument,"keyup",T=>{var re;(T.key==="Tab"&&!T.target||!((re=l.current)!=null&&re.contains(T.target)))&&c(!1,V)},{once:!0});break;case"Escape":k==="Escape"&&(E.preventDefault(),E.stopPropagation()),c(!1,V);break}}),M.jsx(Se.Provider,{value:C,children:M.jsx(Ae.Provider,{value:$,children:s})})}ye.displayName="Dropdown";ye.Menu=Rt;ye.Toggle=St;ye.Item=Bt;const Ue=h.createContext({});Ue.displayName="DropdownContext";const Nt=h.forwardRef(({className:e,bsPrefix:t,as:r="hr",role:n="separator",...o},a)=>(t=_(t,"dropdown-divider"),M.jsx(r,{ref:a,className:G(e,t),role:n,...o})));Nt.displayName="DropdownDivider";const Lt=h.forwardRef(({className:e,bsPrefix:t,as:r="div",role:n="heading",...o},a)=>(t=_(t,"dropdown-header"),M.jsx(r,{ref:a,className:G(e,t),role:n,...o})));Lt.displayName="DropdownHeader";const It=h.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:o,active:a,as:f=pr,...s},i)=>{const u=_(e,"dropdown-item"),[c,l]=Tt({key:r,href:s.href,disabled:n,onClick:o,active:a});return M.jsx(f,{...s,...c,ref:i,className:G(t,u,l.isActive&&"active",n&&"disabled")})});It.displayName="DropdownItem";const Wt=h.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},o)=>(t=_(t,"dropdown-item-text"),M.jsx(r,{ref:o,className:G(e,t),...n})));Wt.displayName="DropdownItemText";const qe=h.createContext(null);qe.displayName="InputGroupContext";function Ht(e,t){return e}function Ft(e,t,r){const n=r?"top-end":"top-start",o=r?"top-start":"top-end",a=r?"bottom-end":"bottom-start",f=r?"bottom-start":"bottom-end",s=r?"right-start":"left-start",i=r?"right-end":"left-end",u=r?"left-start":"right-start",c=r?"left-end":"right-end";let l=e?f:a;return t==="up"?l=e?o:n:t==="end"?l=e?c:u:t==="start"?l=e?i:s:t==="down-centered"?l="bottom":t==="up-centered"&&(l="top"),l}const Vt=h.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:o=!0,show:a,renderOnMount:f,as:s="div",popperConfig:i,variant:u,...c},l)=>{let m=!1;const p=h.useContext(dr),v=_(e,"dropdown-menu"),{align:g,drop:d,isRTL:O}=h.useContext(Ue);r=r||g;const b=h.useContext(qe),x=[];if(r)if(typeof r=="object"){const E=Object.keys(r);if(E.length){const A=E[0],j=r[A];m=j==="start",x.push(`${v}-${A}-${j}`)}}else r==="end"&&(m=!0);const w=Ft(m,d,O),[y,{hasShown:C,popper:$,show:D,toggle:R}]=Pt({flip:o,rootCloseEvent:n,show:a,usePopper:!p&&x.length===0,offset:[0,2],popperConfig:i,placement:w});if(y.ref=yt(Ht(l),y.ref),er(()=>{D&&($==null||$.update())},[D]),!C&&!f&&!b)return null;typeof s!="string"&&(y.show=D,y.close=()=>R==null?void 0:R(!1),y.align=r);let P=c.style;return $!=null&&$.placement&&(P={...c.style,...y.style},c["x-placement"]=$.placement),M.jsx(s,{...c,...y,style:P,...(x.length||p)&&{"data-bs-popper":"static"},className:G(t,v,D&&"show",m&&`${v}-end`,u&&`${v}-${u}`,...x)})});Vt.displayName="DropdownMenu";const Ut=h.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:o=!1,disabled:a=!1,className:f,...s},i)=>{const u=_(t,"btn"),[c,{tagName:l}]=vr({tagName:e,disabled:a,...s}),m=l;return M.jsx(m,{...c,...s,ref:i,disabled:a,className:G(f,u,o&&"active",r&&`${u}-${r}`,n&&`${u}-${n}`,s.href&&a&&"disabled")})});Ut.displayName="Button";const qt=h.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:o=Ut,...a},f)=>{const s=_(e,"dropdown-toggle"),i=h.useContext(Ae);n!==void 0&&(a.bsPrefix=n);const[u]=Mt();return u.ref=yt(u.ref,Ht(f)),M.jsx(o,{className:G(r,s,t&&`${s}-split`,(i==null?void 0:i.show)&&"show"),...u,...a})});qt.displayName="DropdownToggle";const Kt=h.forwardRef((e,t)=>{const{bsPrefix:r,drop:n="down",show:o,className:a,align:f="start",onSelect:s,onToggle:i,focusFirstItemOnShow:u,as:c="div",navbar:l,autoClose:m=!0,...p}=mr(e,{show:"onToggle"}),v=h.useContext(qe),g=_(r,"dropdown"),d=tr(),O=$=>m===!1?$==="click":m==="inside"?$!=="rootClose":m==="outside"?$!=="select":!0,b=X(($,D)=>{var R,P;!((R=D.originalEvent)==null||(P=R.target)==null)&&P.classList.contains("dropdown-toggle")&&D.source==="mousedown"||(D.originalEvent.currentTarget===document&&(D.source!=="keydown"||D.originalEvent.key==="Escape")&&(D.source="rootClose"),O(D.source)&&(i==null||i($,D)))}),w=Ft(f==="end",n,d),y=h.useMemo(()=>({align:f,drop:n,isRTL:d}),[f,n,d]),C={down:g,"down-centered":`${g}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return M.jsx(Ue.Provider,{value:y,children:M.jsx(ye,{placement:w,show:o,onSelect:s,onToggle:b,focusFirstItemOnShow:u,itemSelector:`.${g}-item:not(.disabled):not(:disabled)`,children:v?p.children:M.jsx(c,{...p,ref:t,className:G(a,o&&"show",C[n])})})})});Kt.displayName="Dropdown";const zn=Object.assign(Kt,{Toggle:qt,Menu:Vt,Item:It,ItemText:Wt,Divider:Nt,Header:Lt});export{Ut as B,zn as D,sn as a,Hr as b,qe as c,fn as d,Vr as e,Zr as f,Y as g,Nr as h,q as i,tn as j,on as o,yn as p};