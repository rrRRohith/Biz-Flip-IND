<<<<<<<< HEAD:public/build/assets/BootstrapModalManager--MDj59b2.js
import{o as le,f as ke,j as ce,h as de,e as m,d as ne,l as se,c as ue,q as R}from"./useMergedRefs-HxUQZzs9.js";import{b as X,u as Oe,d as je,c as oe}from"./useWindow-BVM9NObz.js";import{r as i,j as c,e as we}from"./app-0W1APbZD.js";import{s as C,N as Me}from"./Fade-DuU66Ubb.js";import{P as G}from"./index-DrR2ekXN.js";function V(e){e===void 0&&(e=le());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Ne(e){const t=i.useRef(e);return t.current=e,t}function Le(e){const t=Ne(e);i.useEffect(()=>()=>t.current(),[])}function Ae(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const re=ke("modal-open");class Y{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:s=!1}={}){this.handleContainerOverflow=n,this.isRTL=s,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Ae(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[s]:o.style[s]},t.scrollBarWidth&&(n[s]=`${parseInt(C(o,s)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(re,""),C(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(re),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const H=(e,t)=>ce?e==null?(t||le()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Be(e,t){const n=X(),[s,o]=i.useState(()=>H(e,n==null?void 0:n.document));if(!s){const r=H(e);r&&o(r)}return i.useEffect(()=>{},[t,s]),i.useEffect(()=>{const r=H(e);r!==s&&o(r)},[e,s]),s}function Se(e){return e.code==="Escape"||e.keyCode===27}function We(){const e=i.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const De=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Fe(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ie(e){let{onEnter:t,onEntering:n,onEntered:s,onExit:o,onExiting:r,onExited:f,addEndListener:h,children:d}=e,u=Fe(e,De);const{major:E}=We(),T=E>=19?d.props.ref:d.ref,p=i.useRef(null),k=de(p,typeof d=="function"?null:T),g=v=>b=>{v&&p.current&&v(p.current,b)},N=i.useCallback(g(t),[t]),L=i.useCallback(g(n),[n]),A=i.useCallback(g(s),[s]),B=i.useCallback(g(o),[o]),O=i.useCallback(g(r),[r]),S=i.useCallback(g(f),[f]),W=i.useCallback(g(h),[h]);return Object.assign({},u,{nodeRef:p},t&&{onEnter:N},n&&{onEntering:L},s&&{onEntered:A},o&&{onExit:B},r&&{onExiting:O},f&&{onExited:S},h&&{addEndListener:W},{children:typeof d=="function"?(v,b)=>d(v,Object.assign({},b,{ref:k})):i.cloneElement(d,{ref:k})})}const Pe=["component"];function _e(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Ke=i.forwardRef((e,t)=>{let{component:n}=e,s=_e(e,Pe);const o=Ie(s);return c.jsx(n,Object.assign({ref:t},o))});function Ge({in:e,onTransition:t}){const n=i.useRef(null),s=i.useRef(!0),o=m(t);return ne(()=>{if(!n.current)return;let r=!1;return o({in:e,element:n.current,initial:s.current,isStale:()=>r}),()=>{r=!0}},[e,o]),ne(()=>(s.current=!1,()=>{s.current=!0}),[]),n}function Ve({children:e,in:t,onExited:n,onEntered:s,transition:o}){const[r,f]=i.useState(!t);t&&r&&f(!1);const h=Ge({in:!!t,onTransition:u=>{const E=()=>{u.isStale()||(u.in?s==null||s(u.element,u.initial):(f(!0),n==null||n(u.element)))};Promise.resolve(o(u)).then(E,T=>{throw u.in||f(!0),T})}}),d=de(h,e.ref);return r&&!t?null:i.cloneElement(e,{ref:d})}function ie(e,t,n){return e?c.jsx(Ke,Object.assign({},n,{component:e})):t?c.jsx(Ve,Object.assign({},n,{transition:t})):c.jsx(Me,Object.assign({},n))}const He=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function $e(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let $;function Ue(e){return $||($=new Y({ownerDocument:e==null?void 0:e.document})),$}function Xe(e){const t=X(),n=e||Ue(t),s=i.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>n.add(s.current),remove:()=>n.remove(s.current),isTopModal:()=>n.isTopModal(s.current),setDialogRef:i.useCallback(o=>{s.current.dialog=o},[]),setBackdropRef:i.useCallback(o=>{s.current.backdrop=o},[])})}const fe=i.forwardRef((e,t)=>{let{show:n=!1,role:s="dialog",className:o,style:r,children:f,backdrop:h=!0,keyboard:d=!0,onBackdropClick:u,onEscapeKeyDown:E,transition:T,runTransition:p,backdropTransition:k,runBackdropTransition:g,autoFocus:N=!0,enforceFocus:L=!0,restoreFocus:A=!0,restoreFocusOptions:B,renderDialog:O,renderBackdrop:S=a=>c.jsx("div",Object.assign({},a)),manager:W,container:v,onShow:b,onHide:z=()=>{},onExit:he,onExited:J,onExiting:ge,onEnter:me,onEntering:Ee,onEntered:pe}=e,ve=$e(e,He);const x=X(),j=Be(v),l=Xe(W),be=Oe(),xe=je(n),[D,Q]=i.useState(!n),w=i.useRef(null);i.useImperativeHandle(t,()=>l,[l]),ce&&!xe&&n&&(w.current=V(x==null?void 0:x.document)),n&&D&&Q(!1);const Z=m(()=>{if(l.add(),P.current=se(document,"keydown",Te),I.current=se(document,"focus",()=>setTimeout(Re),!0),b&&b(),N){var a,te;const K=V((a=(te=l.dialog)==null?void 0:te.ownerDocument)!=null?a:x==null?void 0:x.document);l.dialog&&K&&!oe(l.dialog,K)&&(w.current=K,l.dialog.focus())}}),F=m(()=>{if(l.remove(),P.current==null||P.current(),I.current==null||I.current(),A){var a;(a=w.current)==null||a.focus==null||a.focus(B),w.current=null}});i.useEffect(()=>{!n||!j||Z()},[n,j,Z]),i.useEffect(()=>{D&&F()},[D,F]),Le(()=>{F()});const Re=m(()=>{if(!L||!be()||!l.isTopModal())return;const a=V(x==null?void 0:x.document);l.dialog&&a&&!oe(l.dialog,a)&&l.dialog.focus()}),ye=m(a=>{a.target===a.currentTarget&&(u==null||u(a),h===!0&&z())}),Te=m(a=>{d&&Se(a)&&l.isTopModal()&&(E==null||E(a),a.defaultPrevented||z())}),I=i.useRef(),P=i.useRef(),Ce=(...a)=>{Q(!0),J==null||J(...a)};if(!j)return null;const ee=Object.assign({role:s,ref:l.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},ve,{style:r,className:o,tabIndex:-1});let _=O?O(ee):c.jsx("div",Object.assign({},ee,{children:i.cloneElement(f,{role:"document"})}));_=ie(T,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:he,onExiting:ge,onExited:Ce,onEnter:me,onEntering:Ee,onEntered:pe,children:_});let M=null;return h&&(M=S({ref:l.setBackdropRef,onClick:ye}),M=ie(k,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:M})),c.jsx(c.Fragment,{children:we.createPortal(c.jsxs(c.Fragment,{children:[M,_]}),j)})});fe.displayName="Modal";const rt=Object.assign(fe,{Manager:Y}),Ye=i.createContext({onHide(){}}),qe={"aria-label":G.string,onClick:G.func,variant:G.oneOf(["white"])},q=i.forwardRef(({className:e,variant:t,"aria-label":n="Close",...s},o)=>c.jsx("button",{ref:o,type:"button",className:ue("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...s}));q.displayName="CloseButton";q.propTypes=qe;const it=i.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:s,children:o,...r},f)=>{const h=i.useContext(Ye),d=m(()=>{h==null||h.onHide(),s==null||s()});return c.jsxs("div",{ref:f,...r,children:[o,n&&c.jsx(q,{"aria-label":e,variant:t,onClick:d})]})}),at=e=>i.forwardRef((t,n)=>c.jsx("div",{...t,ref:n,className:ue(t.className,e)}));function ze(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Je(e,t){e.classList?e.classList.add(t):ze(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function ae(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Qe(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=ae(e.className,t):e.setAttribute("class",ae(e.className&&e.className.baseVal||"",t))}const y={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Ze extends Y{adjustAndStore(t,n,s){const o=n.style[t];n.dataset[t]=o,C(n,{[t]:`${parseFloat(C(n,t))+s}px`})}restore(t,n){const s=n.dataset[t];s!==void 0&&(delete n.dataset[t],C(n,{[t]:s}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Je(n,"modal-open"),!t.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";R(n,y.FIXED_CONTENT).forEach(r=>this.adjustAndStore(s,r,t.scrollBarWidth)),R(n,y.STICKY_CONTENT).forEach(r=>this.adjustAndStore(o,r,-t.scrollBarWidth)),R(n,y.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(o,r,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Qe(n,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";R(n,y.FIXED_CONTENT).forEach(r=>this.restore(s,r)),R(n,y.STICKY_CONTENT).forEach(r=>this.restore(o,r)),R(n,y.NAVBAR_TOGGLER).forEach(r=>this.restore(o,r))}}let U;function lt(e){return U||(U=new Ze(e)),U}export{it as A,rt as B,Ye as M,Ze as a,Je as b,at as d,lt as g,Qe as r,Le as u};
========
import{o as le,f as ke,j as ce,h as de,e as m,d as ne,l as se,c as ue,q as R}from"./useMergedRefs-BNa28cw-.js";import{b as X,u as Oe,d as je,c as oe}from"./useWindow-CYm_A8RM.js";import{r as i,j as c,e as we}from"./app-CETDUQ2O.js";import{s as C,N as Me}from"./Fade-Unlbx0yM.js";import{P as G}from"./index-CpSO6HaL.js";function V(e){e===void 0&&(e=le());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Ne(e){const t=i.useRef(e);return t.current=e,t}function Le(e){const t=Ne(e);i.useEffect(()=>()=>t.current(),[])}function Ae(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const re=ke("modal-open");class Y{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:s=!1}={}){this.handleContainerOverflow=n,this.isRTL=s,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Ae(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[s]:o.style[s]},t.scrollBarWidth&&(n[s]=`${parseInt(C(o,s)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(re,""),C(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(re),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const H=(e,t)=>ce?e==null?(t||le()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Be(e,t){const n=X(),[s,o]=i.useState(()=>H(e,n==null?void 0:n.document));if(!s){const r=H(e);r&&o(r)}return i.useEffect(()=>{},[t,s]),i.useEffect(()=>{const r=H(e);r!==s&&o(r)},[e,s]),s}function Se(e){return e.code==="Escape"||e.keyCode===27}function We(){const e=i.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const De=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Fe(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ie(e){let{onEnter:t,onEntering:n,onEntered:s,onExit:o,onExiting:r,onExited:f,addEndListener:h,children:d}=e,u=Fe(e,De);const{major:E}=We(),T=E>=19?d.props.ref:d.ref,p=i.useRef(null),k=de(p,typeof d=="function"?null:T),g=v=>b=>{v&&p.current&&v(p.current,b)},N=i.useCallback(g(t),[t]),L=i.useCallback(g(n),[n]),A=i.useCallback(g(s),[s]),B=i.useCallback(g(o),[o]),O=i.useCallback(g(r),[r]),S=i.useCallback(g(f),[f]),W=i.useCallback(g(h),[h]);return Object.assign({},u,{nodeRef:p},t&&{onEnter:N},n&&{onEntering:L},s&&{onEntered:A},o&&{onExit:B},r&&{onExiting:O},f&&{onExited:S},h&&{addEndListener:W},{children:typeof d=="function"?(v,b)=>d(v,Object.assign({},b,{ref:k})):i.cloneElement(d,{ref:k})})}const Pe=["component"];function _e(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Ke=i.forwardRef((e,t)=>{let{component:n}=e,s=_e(e,Pe);const o=Ie(s);return c.jsx(n,Object.assign({ref:t},o))});function Ge({in:e,onTransition:t}){const n=i.useRef(null),s=i.useRef(!0),o=m(t);return ne(()=>{if(!n.current)return;let r=!1;return o({in:e,element:n.current,initial:s.current,isStale:()=>r}),()=>{r=!0}},[e,o]),ne(()=>(s.current=!1,()=>{s.current=!0}),[]),n}function Ve({children:e,in:t,onExited:n,onEntered:s,transition:o}){const[r,f]=i.useState(!t);t&&r&&f(!1);const h=Ge({in:!!t,onTransition:u=>{const E=()=>{u.isStale()||(u.in?s==null||s(u.element,u.initial):(f(!0),n==null||n(u.element)))};Promise.resolve(o(u)).then(E,T=>{throw u.in||f(!0),T})}}),d=de(h,e.ref);return r&&!t?null:i.cloneElement(e,{ref:d})}function ie(e,t,n){return e?c.jsx(Ke,Object.assign({},n,{component:e})):t?c.jsx(Ve,Object.assign({},n,{transition:t})):c.jsx(Me,Object.assign({},n))}const He=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function $e(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let $;function Ue(e){return $||($=new Y({ownerDocument:e==null?void 0:e.document})),$}function Xe(e){const t=X(),n=e||Ue(t),s=i.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>n.add(s.current),remove:()=>n.remove(s.current),isTopModal:()=>n.isTopModal(s.current),setDialogRef:i.useCallback(o=>{s.current.dialog=o},[]),setBackdropRef:i.useCallback(o=>{s.current.backdrop=o},[])})}const fe=i.forwardRef((e,t)=>{let{show:n=!1,role:s="dialog",className:o,style:r,children:f,backdrop:h=!0,keyboard:d=!0,onBackdropClick:u,onEscapeKeyDown:E,transition:T,runTransition:p,backdropTransition:k,runBackdropTransition:g,autoFocus:N=!0,enforceFocus:L=!0,restoreFocus:A=!0,restoreFocusOptions:B,renderDialog:O,renderBackdrop:S=a=>c.jsx("div",Object.assign({},a)),manager:W,container:v,onShow:b,onHide:z=()=>{},onExit:he,onExited:J,onExiting:ge,onEnter:me,onEntering:Ee,onEntered:pe}=e,ve=$e(e,He);const x=X(),j=Be(v),l=Xe(W),be=Oe(),xe=je(n),[D,Q]=i.useState(!n),w=i.useRef(null);i.useImperativeHandle(t,()=>l,[l]),ce&&!xe&&n&&(w.current=V(x==null?void 0:x.document)),n&&D&&Q(!1);const Z=m(()=>{if(l.add(),P.current=se(document,"keydown",Te),I.current=se(document,"focus",()=>setTimeout(Re),!0),b&&b(),N){var a,te;const K=V((a=(te=l.dialog)==null?void 0:te.ownerDocument)!=null?a:x==null?void 0:x.document);l.dialog&&K&&!oe(l.dialog,K)&&(w.current=K,l.dialog.focus())}}),F=m(()=>{if(l.remove(),P.current==null||P.current(),I.current==null||I.current(),A){var a;(a=w.current)==null||a.focus==null||a.focus(B),w.current=null}});i.useEffect(()=>{!n||!j||Z()},[n,j,Z]),i.useEffect(()=>{D&&F()},[D,F]),Le(()=>{F()});const Re=m(()=>{if(!L||!be()||!l.isTopModal())return;const a=V(x==null?void 0:x.document);l.dialog&&a&&!oe(l.dialog,a)&&l.dialog.focus()}),ye=m(a=>{a.target===a.currentTarget&&(u==null||u(a),h===!0&&z())}),Te=m(a=>{d&&Se(a)&&l.isTopModal()&&(E==null||E(a),a.defaultPrevented||z())}),I=i.useRef(),P=i.useRef(),Ce=(...a)=>{Q(!0),J==null||J(...a)};if(!j)return null;const ee=Object.assign({role:s,ref:l.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},ve,{style:r,className:o,tabIndex:-1});let _=O?O(ee):c.jsx("div",Object.assign({},ee,{children:i.cloneElement(f,{role:"document"})}));_=ie(T,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:he,onExiting:ge,onExited:Ce,onEnter:me,onEntering:Ee,onEntered:pe,children:_});let M=null;return h&&(M=S({ref:l.setBackdropRef,onClick:ye}),M=ie(k,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:M})),c.jsx(c.Fragment,{children:we.createPortal(c.jsxs(c.Fragment,{children:[M,_]}),j)})});fe.displayName="Modal";const rt=Object.assign(fe,{Manager:Y}),Ye=i.createContext({onHide(){}}),qe={"aria-label":G.string,onClick:G.func,variant:G.oneOf(["white"])},q=i.forwardRef(({className:e,variant:t,"aria-label":n="Close",...s},o)=>c.jsx("button",{ref:o,type:"button",className:ue("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...s}));q.displayName="CloseButton";q.propTypes=qe;const it=i.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:s,children:o,...r},f)=>{const h=i.useContext(Ye),d=m(()=>{h==null||h.onHide(),s==null||s()});return c.jsxs("div",{ref:f,...r,children:[o,n&&c.jsx(q,{"aria-label":e,variant:t,onClick:d})]})}),at=e=>i.forwardRef((t,n)=>c.jsx("div",{...t,ref:n,className:ue(t.className,e)}));function ze(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Je(e,t){e.classList?e.classList.add(t):ze(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function ae(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Qe(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=ae(e.className,t):e.setAttribute("class",ae(e.className&&e.className.baseVal||"",t))}const y={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Ze extends Y{adjustAndStore(t,n,s){const o=n.style[t];n.dataset[t]=o,C(n,{[t]:`${parseFloat(C(n,t))+s}px`})}restore(t,n){const s=n.dataset[t];s!==void 0&&(delete n.dataset[t],C(n,{[t]:s}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Je(n,"modal-open"),!t.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";R(n,y.FIXED_CONTENT).forEach(r=>this.adjustAndStore(s,r,t.scrollBarWidth)),R(n,y.STICKY_CONTENT).forEach(r=>this.adjustAndStore(o,r,-t.scrollBarWidth)),R(n,y.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(o,r,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Qe(n,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";R(n,y.FIXED_CONTENT).forEach(r=>this.restore(s,r)),R(n,y.STICKY_CONTENT).forEach(r=>this.restore(o,r)),R(n,y.NAVBAR_TOGGLER).forEach(r=>this.restore(o,r))}}let U;function lt(e){return U||(U=new Ze(e)),U}export{it as A,rt as B,Ye as M,Ze as a,Je as b,at as d,lt as g,Qe as r,Le as u};
>>>>>>>> a169e6ad0c6d73ed0d666a16a5e4b062b5695b38:public/build/assets/BootstrapModalManager-DKIU9LXT.js
