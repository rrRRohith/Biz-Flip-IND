<<<<<<<< HEAD:public/build/assets/hoist-non-react-statics.cjs-BRtGKWye.js
import{g as R}from"./app-BGtL1idN.js";var A={exports:{}},e={};/** @license React v16.13.1
========
import{g as R}from"./app-Cv4J_obM.js";var A={exports:{}},e={};/** @license React v16.13.1
>>>>>>>> 0489afd8f35de188ae832589e863e72546ac7e17:public/build/assets/hoist-non-react-statics.cjs-BRioJMba.js
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,P=t?Symbol.for("react.element"):60103,g=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,p=t?Symbol.for("react.profiler"):60114,y=t?Symbol.for("react.provider"):60109,a=t?Symbol.for("react.context"):60110,T=t?Symbol.for("react.async_mode"):60111,i=t?Symbol.for("react.concurrent_mode"):60111,l=t?Symbol.for("react.forward_ref"):60112,m=t?Symbol.for("react.suspense"):60113,D=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,d=t?Symbol.for("react.lazy"):60116,C=t?Symbol.for("react.block"):60121,z=t?Symbol.for("react.fundamental"):60117,L=t?Symbol.for("react.responder"):60118,W=t?Symbol.for("react.scope"):60119;function o(r){if(typeof r=="object"&&r!==null){var n=r.$$typeof;switch(n){case P:switch(r=r.type,r){case T:case i:case u:case p:case s:case m:return r;default:switch(r=r&&r.$$typeof,r){case a:case l:case d:case S:case y:return r;default:return n}}case g:return n}}}function E(r){return o(r)===i}e.AsyncMode=T;e.ConcurrentMode=i;e.ContextConsumer=a;e.ContextProvider=y;e.Element=P;e.ForwardRef=l;e.Fragment=u;e.Lazy=d;e.Memo=S;e.Portal=g;e.Profiler=p;e.StrictMode=s;e.Suspense=m;e.isAsyncMode=function(r){return E(r)||o(r)===T};e.isConcurrentMode=E;e.isContextConsumer=function(r){return o(r)===a};e.isContextProvider=function(r){return o(r)===y};e.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===P};e.isForwardRef=function(r){return o(r)===l};e.isFragment=function(r){return o(r)===u};e.isLazy=function(r){return o(r)===d};e.isMemo=function(r){return o(r)===S};e.isPortal=function(r){return o(r)===g};e.isProfiler=function(r){return o(r)===p};e.isStrictMode=function(r){return o(r)===s};e.isSuspense=function(r){return o(r)===m};e.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===u||r===i||r===p||r===s||r===m||r===D||typeof r=="object"&&r!==null&&(r.$$typeof===d||r.$$typeof===S||r.$$typeof===y||r.$$typeof===a||r.$$typeof===l||r.$$typeof===z||r.$$typeof===L||r.$$typeof===W||r.$$typeof===C)};e.typeOf=o;A.exports=e;var q=A.exports,O=q,K={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x={};x[O.ForwardRef]=Y;x[O.Memo]=F;function j(r){return O.isMemo(r)?F:x[r.$$typeof]||K}var B=Object.defineProperty,G=Object.getOwnPropertyNames,M=Object.getOwnPropertySymbols,H=Object.getOwnPropertyDescriptor,J=Object.getPrototypeOf,h=Object.prototype;function I(r,n,b){if(typeof n!="string"){if(h){var v=J(n);v&&v!==h&&I(r,v,b)}var c=G(n);M&&(c=c.concat(M(n)));for(var w=j(r),_=j(n),$=0;$<c.length;++$){var f=c[$];if(!V[f]&&!(b&&b[f])&&!(_&&_[f])&&!(w&&w[f])){var N=H(n,f);try{B(r,f,N)}catch{}}}}return r}var Q=I;const Z=R(Q);export{Z as h};
