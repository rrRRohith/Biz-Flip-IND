import{r as h,j as e,a as n,q as le}from"./app-BxhF_EED.js";import{P as i}from"./PermissionAllow-CvZIo2bm.js";import{D as N}from"./Dropdown-DgyMqlYl.js";import{d as re}from"./index-COytUgZp.js";import{i as te,u as C,c as v,f as ce}from"./listen-_UJhk0oD.js";import{A as oe,d as de,M as me,B as he,a as xe,g as je}from"./BootstrapModalManager-Bs-EdAkh.js";import{T as pe,a as ue,E as H,b as fe,c as ge,F as Ne}from"./Fade-BDdvC6zZ.js";import{c as be}from"./Anchor-DZg1DzuG.js";function Ae(){const[s,a]=h.useState(null),l=r=>{a(s===r?null:r)};return e.jsx(e.Fragment,{children:e.jsx("aside",{className:"main-sidebar",children:e.jsx("section",{className:"sidebar position-relative",children:e.jsx("div",{className:"multinav",children:e.jsx("div",{className:"multinav-scroll h-100",children:e.jsxs("ul",{className:"sidebar-menu","data-widget":"tree",children:[e.jsx(i,{permission:"Dashboard",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.index"),title:"Dashboard",children:[e.jsx("i",{className:"bi bi-house"}),e.jsx("span",{children:"Dashboard"})]})})}),e.jsx(i,{permission:"Categories",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.business-category.index"),title:"Business Categories",children:[e.jsx("i",{className:"bi bi-bookmark-star"}),e.jsx("span",{children:"Business Categories"})]})})}),e.jsx(i,{permission:"Categories",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.category.index"),title:"Categories",children:[e.jsx("i",{className:"bi bi-bookmark-star"}),e.jsx("span",{children:"Ad Categories"})]})})}),e.jsx(i,{permission:"Sellers",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.sellers.index"),title:"Categories",children:[e.jsx("i",{className:"bi bi-person-check"}),e.jsx("span",{children:"Users"})]})})}),e.jsx(i,{permission:"Ads",children:e.jsx("li",{className:`treeview ${s==="ads"?"active":""}`,children:e.jsxs(n,{href:route("admin.ads.index"),children:[e.jsx("i",{className:"bi bi-badge-ad",title:"ads"}),e.jsx("span",{children:"Ads"})]})})}),e.jsx(i,{permission:"Leads",children:e.jsx("li",{className:`treeview ${s==="leads"?"active":""}`,children:e.jsxs(n,{href:route("admin.leads"),onClick:()=>l("leads"),children:[e.jsx("i",{className:"bi bi-at",title:"Leads"}),e.jsx("span",{children:"Leads"})]})})}),e.jsx(i,{permission:"Locations",children:e.jsxs("li",{className:`treeview ${s==="locations"?"active":""}`,children:[e.jsxs("a",{href:"#",onClick:()=>l("locations"),children:[e.jsx("i",{className:"bi bi-geo-alt",title:"Locations"}),e.jsx("span",{children:"Locations"}),e.jsx("span",{className:"pull-right-container",children:e.jsx("i",{className:`fa ${s==="locations"?"fa-angle-down":"fa-angle-right"} pull-right`})})]}),s==="locations"&&e.jsxs("ul",{className:"treeview-menu",children:[e.jsx(i,{permission:"Locations",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.province.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Provinces"]})})}),e.jsx(i,{permission:"Locations",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.city.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Cities"]})})})]})]})}),e.jsx(i,{permission:"Staff Management",children:e.jsx("li",{className:"treeview",children:e.jsxs(n,{href:route("admin.staff.index"),children:[e.jsx("i",{className:"bi bi-people",title:"Staff Management"}),e.jsx("span",{children:"Staff Management"})]})})}),e.jsx(i,{permission:"Support Tickets",children:e.jsx("li",{className:"treeview",children:e.jsxs(n,{href:route("admin.support-tickets.index"),children:[e.jsx("i",{className:"bi bi-ticket-perforated",title:"Support Tickets"}),e.jsx("span",{children:"Support Tickets"})]})})}),e.jsx(i,{permission:"Subscribers",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.subscribers.index"),children:[e.jsx("i",{className:"bi bi-person-vcard",title:"Subscribers"}),e.jsx("span",{children:"Subscribers"})]})})}),e.jsx(i,{permission:"Subscribers",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.subscription.index"),children:[e.jsx("i",{className:"bi bi-cash-coin",title:"Subscription plans"}),e.jsx("span",{children:"Subscription plans"})]})})}),e.jsx(i,{permission:"Collections",children:e.jsxs("li",{className:`treeview ${s==="collections"?"active":""}`,children:[e.jsxs("a",{href:"#",onClick:()=>l("collections"),children:[e.jsx("i",{className:"bi bi-files-alt",title:"Collections"}),e.jsx("span",{children:"Collections"}),e.jsx("span",{className:"pull-right-container",children:e.jsx("i",{className:`fa ${s==="collections"?"fa-angle-down":"fa-angle-right"} pull-right`})})]}),s==="collections"&&e.jsxs("ul",{className:"treeview-menu",children:[e.jsx(i,{permission:"Banners",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.banners.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Banners"]})})}),e.jsx(i,{permission:"Navigation Menu",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.navigation-menu.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Navigation Menu"]})})}),e.jsx(i,{permission:"Testimonials",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.testimonial.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Testimonials"]})})}),e.jsx(i,{permission:"Content Pages",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.content-page.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Pages"]})})}),e.jsx(i,{permission:"Features",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.features.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Features"]})})}),e.jsx(i,{permission:"Facilities",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.facilities.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Facilities"]})})}),e.jsx(i,{permission:"Feature Label",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.feature-label.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Feature Label"]})})})]})]})}),e.jsx(i,{permission:"Settings",children:e.jsxs("li",{className:`treeview ${s==="settings"?"active":""}`,children:[e.jsxs("a",{href:"#",onClick:()=>l("settings"),children:[e.jsx("i",{className:"bi bi-gear",title:"Settings"}),e.jsx("span",{children:"Settings"}),e.jsx("span",{className:"pull-right-container",children:e.jsx("i",{className:`fa ${s==="settings"?"fa-angle-down":"fa-angle-right"} pull-right`})})]}),s==="settings"&&e.jsxs("ul",{className:"treeview-menu",children:[e.jsx(i,{permission:"Company Settings",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.company-settings.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Company Settings"]})})}),e.jsx(i,{permission:"App Settings",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.app-settings.index"),children:[e.jsx("i",{className:"icon-Commit"}),"App Settings"]})})}),e.jsx(i,{permission:"Role and Responsibilities",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.role-responsibilities.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Role & Responsibilities"]})})}),e.jsx(i,{permission:"Role and Responsibilities",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.backups.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Backups"]})})})]})]})})]})})})})})})}const T=new WeakMap,D=(s,a)=>{if(!s||!a)return;const l=T.get(a)||new Map;T.set(a,l);let r=l.get(s);return r||(r=a.matchMedia(s),r.refCount=0,l.set(r.media,r)),r};function ve(s,a=typeof window>"u"?void 0:window){const l=D(s,a),[r,m]=h.useState(()=>l?l.matches:!1);return te(()=>{let t=D(s,a);if(!t)return m(!1);let p=T.get(a);const o=()=>{m(t.matches)};return t.refCount++,t.addListener(o),o(),()=>{t.removeListener(o),t.refCount--,t.refCount<=0&&(p==null||p.delete(t.media)),t=void 0}},[s]),r}function Ce(s){const a=Object.keys(s);function l(o,c){return o===c?c:o?`${o} and ${c}`:c}function r(o){return a[Math.min(a.indexOf(o)+1,a.length-1)]}function m(o){const c=r(o);let d=s[c];return typeof d=="number"?d=`${d-.2}px`:d=`calc(${d} - 0.2px)`,`(max-width: ${d})`}function t(o){let c=s[o];return typeof c=="number"&&(c=`${c}px`),`(min-width: ${c})`}function p(o,c,d){let u;typeof o=="object"?(u=o,d=c,c=!0):(c=c||!0,u={[o]:c});let x=h.useMemo(()=>Object.entries(u).reduce((f,[b,j])=>((j==="up"||j===!0)&&(f=l(f,t(b))),(j==="down"||j===!0)&&(f=l(f,m(b))),f),""),[JSON.stringify(u)]);return ve(x,d)}return p}const we=Ce({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),I=h.forwardRef(({className:s,bsPrefix:a,as:l="div",...r},m)=>(a=C(a,"offcanvas-body"),e.jsx(l,{ref:m,className:v(s,a),...r})));I.displayName="OffcanvasBody";const ke={[H]:"show",[ge]:"show"},Q=h.forwardRef(({bsPrefix:s,className:a,children:l,in:r=!1,mountOnEnter:m=!1,unmountOnExit:t=!1,appear:p=!1,...o},c)=>(s=C(s,"offcanvas"),e.jsx(pe,{ref:c,addEndListener:ue,in:r,mountOnEnter:m,unmountOnExit:t,appear:p,...o,childRef:l.ref,children:(d,u)=>h.cloneElement(l,{...u,className:v(a,l.props.className,(d===H||d===fe)&&`${s}-toggling`,ke[d])})})));Q.displayName="OffcanvasToggling";const X=h.forwardRef(({bsPrefix:s,className:a,closeLabel:l="Close",closeButton:r=!1,...m},t)=>(s=C(s,"offcanvas-header"),e.jsx(oe,{ref:t,...m,className:v(a,s),closeLabel:l,closeButton:r})));X.displayName="OffcanvasHeader";const Se=de("h5"),z=h.forwardRef(({className:s,bsPrefix:a,as:l=Se,...r},m)=>(a=C(a,"offcanvas-title"),e.jsx(l,{ref:m,className:v(s,a),...r})));z.displayName="OffcanvasTitle";function ye(s){return e.jsx(Q,{...s})}function Me(s){return e.jsx(Ne,{...s})}const G=h.forwardRef(({bsPrefix:s,className:a,children:l,"aria-labelledby":r,placement:m="start",responsive:t,show:p=!1,backdrop:o=!0,keyboard:c=!0,scroll:d=!1,onEscapeKeyDown:u,onShow:x,onHide:f,container:b,autoFocus:j=!0,enforceFocus:k=!0,restoreFocus:U=!0,restoreFocusOptions:J,onEntered:K,onExit:Y,onExiting:Z,onEnter:$,onEntering:_,onExited:E,backdropClassName:L,manager:B,renderStaticNode:W=!1,...P},V)=>{const S=h.useRef();s=C(s,"offcanvas");const{onToggle:O}=h.useContext(be)||{},[F,q]=h.useState(!1),R=we(t||"xs","up");h.useEffect(()=>{q(t?p&&!R:p)},[p,t,R]);const y=ce(()=>{O==null||O(),f==null||f()}),ee=h.useMemo(()=>({onHide:y}),[y]);function se(){return B||(d?(S.current||(S.current=new xe({handleContainerOverflow:!1})),S.current):je())}const ie=(g,...M)=>{g&&(g.style.visibility="visible"),$==null||$(g,...M)},ne=(g,...M)=>{g&&(g.style.visibility=""),E==null||E(...M)},ae=h.useCallback(g=>e.jsx("div",{...g,className:v(`${s}-backdrop`,L)}),[L,s]),A=g=>e.jsx("div",{...g,...P,className:v(a,t?`${s}-${t}`:s,`${s}-${m}`),"aria-labelledby":r,children:l});return e.jsxs(e.Fragment,{children:[!F&&(t||W)&&A({}),e.jsx(me.Provider,{value:ee,children:e.jsx(he,{show:F,ref:V,backdrop:o,container:b,keyboard:c,autoFocus:j,enforceFocus:k&&!d,restoreFocus:U,restoreFocusOptions:J,onEscapeKeyDown:u,onShow:x,onHide:y,onEnter:ie,onEntering:_,onEntered:K,onExit:Y,onExiting:Z,onExited:ne,manager:se(),transition:ye,backdropTransition:Me,renderBackdrop:ae,renderDialog:A})})]})});G.displayName="Offcanvas";const w=Object.assign(G,{Body:I,Header:X,Title:z});function De({user:s,header:a,onSidebarToggle:l,handle:r,isFullScreen:m}){const t=()=>{re.Inertia.post(route("logout"))},{notifications:p}=le().props,[o,c]=h.useState(!1),d=()=>c(!1),u=()=>c(!0),[x,f]=h.useState(null),b=j=>{f(x===j?null:j)};return e.jsx(e.Fragment,{children:e.jsxs("header",{className:"main-header me-4",children:[e.jsx("div",{className:"",children:e.jsxs("div",{className:"d-flex align-items-center logo-box justify-content-start",children:[e.jsx("a",{href:"#",onClick:l,className:"waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary",role:"button",children:e.jsxs("span",{className:"icon-Align-left",style:{fontSize:"2.2rem"},children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]})}),e.jsx("a",{href:"#",onClick:u,className:"waves-effect waves-light nav-link d-md-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary",role:"button",children:e.jsxs("span",{className:"icon-Align-left",style:{fontSize:"2.2rem"},children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]})}),e.jsx(n,{href:route("admin.index"),className:"logo",children:e.jsxs("div",{className:"logo-lg",children:[e.jsx("span",{className:"light-logo",children:e.jsx("img",{src:"/logo.png",width:150,alt:"logo"})}),e.jsx("span",{className:"dark-logo",children:e.jsx("img",{src:"/logo.png",width:150,alt:"logo"})})]})})]})}),e.jsxs("nav",{className:"navbar navbar-static-top bg-body",children:[e.jsx("div",{className:"app-menu",children:e.jsxs(w,{show:o,onHide:d,children:[e.jsx(w.Header,{closeButton:!0,children:e.jsx(w.Title,{})}),e.jsx(w.Body,{children:e.jsxs("ul",{className:"sidebar-menu","data-widget":"tree",children:[e.jsx(i,{permission:"Dashboard",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.index"),title:"Dashboard",children:[e.jsx("i",{className:"bi bi-house"}),e.jsx("span",{children:"Dashboard"})]})})}),e.jsx(i,{permission:"Categories",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.business-category.index"),title:"Business Categories",children:[e.jsx("i",{className:"bi bi-bookmark-star"}),e.jsx("span",{children:"Business Categories"})]})})}),e.jsx(i,{permission:"Categories",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.category.index"),title:"Categories",children:[e.jsx("i",{className:"bi bi-bookmark-star"}),e.jsx("span",{children:"Ad Categories"})]})})}),e.jsx(i,{permission:"Sellers",children:e.jsx("li",{className:"",children:e.jsxs(n,{href:route("admin.sellers.index"),title:"Categories",children:[e.jsx("i",{className:"bi bi-person-check"}),e.jsx("span",{children:"Sellers"})]})})}),e.jsx(i,{permission:"Ads",children:e.jsx("li",{className:`treeview ${x==="ads"?"active":""}`,children:e.jsxs("a",{href:route("admin.ads.index"),children:[e.jsx("i",{className:"bi bi-badge-ad",title:"ads"}),e.jsx("span",{children:"Ads"})]})})}),e.jsx(i,{permission:"Leads",children:e.jsx("li",{className:`treeview ${x==="leads"?"active":""}`,children:e.jsxs("a",{href:route("admin.leads"),onClick:()=>b("leads"),children:[e.jsx("i",{className:"bi bi-at",title:"Leads"}),e.jsx("span",{children:"Leads"})]})})}),e.jsx(i,{permission:"Locations",children:e.jsxs("li",{className:`treeview ${x==="locations"?"active":""}`,children:[e.jsxs("a",{href:"#",onClick:()=>b("locations"),children:[e.jsx("i",{className:"bi bi-geo-alt",title:"Locations"}),e.jsx("span",{children:"Locations"}),e.jsx("span",{className:"pull-right-container",children:e.jsx("i",{className:`fa ${x==="locations"?"fa-angle-down":"fa-angle-right"} pull-right`})})]}),x==="locations"&&e.jsxs("ul",{className:"treeview-menu",children:[e.jsx(i,{permission:"Locations",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.country.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Country"]})})}),e.jsx(i,{permission:"Locations",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.province.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Province"]})})}),e.jsx(i,{permission:"Locations",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.city.index"),children:[e.jsx("i",{className:"icon-Commit"}),"City"]})})})]})]})}),e.jsx(i,{permission:"Staff Management",children:e.jsx("li",{className:"treeview",children:e.jsxs(n,{href:route("admin.staff.index"),children:[e.jsx("i",{className:"bi bi-people",title:"Staff Management"}),e.jsx("span",{children:"Staff Management"})]})})}),e.jsx(i,{permission:"Support Tickets",children:e.jsx("li",{className:"treeview",children:e.jsxs(n,{href:route("admin.support-tickets.index"),children:[e.jsx("i",{className:"bi bi-ticket-perforated",title:"Support Tickets"}),e.jsx("span",{children:"Support Tickets"})]})})}),e.jsx(i,{permission:"Subscribers",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.subscribers.index"),children:[e.jsx("i",{className:"bi bi-person-vcard",title:"Subscribers"}),e.jsx("span",{children:"Subscribers"})]})})}),e.jsx(i,{permission:"Collections",children:e.jsxs("li",{className:`treeview ${x==="collections"?"active":""}`,children:[e.jsxs("a",{href:"#",onClick:()=>b("collections"),children:[e.jsx("i",{className:"bi bi-files-alt",title:"Collections"}),e.jsx("span",{children:"Collections"}),e.jsx("span",{className:"pull-right-container",children:e.jsx("i",{className:`fa ${x==="collections"?"fa-angle-down":"fa-angle-right"} pull-right`})})]}),x==="collections"&&e.jsxs("ul",{className:"treeview-menu",children:[e.jsx(i,{permission:"Banners",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.banners.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Banners"]})})}),e.jsx(i,{permission:"Navigation Menu",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.navigation-menu.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Navigation Menu"]})})}),e.jsx(i,{permission:"Testimonials",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.testimonial.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Testimonials"]})})}),e.jsx(i,{permission:"Content Pages",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.content-page.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Pages"]})})}),e.jsx(i,{permission:"Features",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.features.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Features"]})})}),e.jsx(i,{permission:"Facilities",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.facilities.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Facilities"]})})}),e.jsx(i,{permission:"Feature Label",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.feature-label.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Feature Label"]})})})]})]})}),e.jsx(i,{permission:"Settings",children:e.jsxs("li",{className:`treeview ${x==="settings"?"active":""}`,children:[e.jsxs("a",{href:"#",onClick:()=>b("settings"),children:[e.jsx("i",{className:"bi bi-gear",title:"Settings"}),e.jsx("span",{children:"Settings"}),e.jsx("span",{className:"pull-right-container",children:e.jsx("i",{className:`fa ${x==="settings"?"fa-angle-down":"fa-angle-right"} pull-right`})})]}),x==="settings"&&e.jsxs("ul",{className:"treeview-menu",children:[e.jsx(i,{permission:"Company Settings",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.company-settings.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Company Settings"]})})}),e.jsx(i,{permission:"App Settings",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.app-settings.index"),children:[e.jsx("i",{className:"icon-Commit"}),"App Settings"]})})}),e.jsx(i,{permission:"Role and Responsibilities",children:e.jsx("li",{children:e.jsxs(n,{href:route("admin.role-responsibilities.index"),children:[e.jsx("i",{className:"icon-Commit"}),"Role & Responsibilities"]})})})]})]})})]})})]})}),e.jsx("div",{className:"navbar-custom-menu r-side",children:e.jsxs("ul",{className:"nav navbar-nav",children:[e.jsx("li",{className:"btn-group nav-item d-lg-inline-flex d-none",children:e.jsx("a",{href:"#",children:e.jsx("span",{"data-provide":"fullscreen",className:"waves-effect waves-light nav-link full-screen",onClick:m?r.exit:r.enter,title:m?"Exit Full Screen":"Full Screen",children:e.jsx("i",{className:"bi bi-arrows-fullscreen"})})})}),e.jsx(e.Fragment,{children:p.length>0&&e.jsxs(N,{children:[e.jsx(N.Toggle,{as:"a",href:"#",className:"text-dark hover-primary ms-md-30 ms-10",children:e.jsxs("li",{className:"dropdown notifications-menu",children:[e.jsx("span",{className:"label label-primary count",children:p.length}),e.jsx("a",{href:"#",className:"waves-effect waves-light",title:"Notifications",children:e.jsx("span",{className:"bi bi-bell fs-20"})})]})}),e.jsx(N.Menu,{className:"animated flipInX",children:p.map((j,k)=>e.jsx(N.Item,{href:j.redirection,children:truncateText(j.subject,20)},k))})]})}),e.jsx("li",{className:"dropdown messages-menu",children:e.jsx(n,{href:route("admin.support-tickets.index"),className:"dropdown-toggle ","data-bs-toggle":"dropdown",title:"Messages",children:e.jsx("span",{className:"bi bi-envelope fs-20"})})}),e.jsx("li",{className:"user user-menu",children:e.jsxs(N,{children:[e.jsxs(N.Toggle,{as:"a",href:"#",className:"dropdown-toggle p-0 text-dark hover-primary ms-md-30 ms-10",id:"dropdown-custom-components",children:[e.jsx("span",{className:"fs-2 text-muted",children:"|"}),e.jsx("span",{className:"ps-30 d-md-inline-block d-none",children:"Hello,  "}),e.jsxs("strong",{className:"d-md-inline-block d-none",children:[s.firstname," ",s.lastname]}),e.jsx("img",{src:"/images/"+s.picture,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"},className:"user-image rounded-circle avatar bg-white mx-10",alt:"User Image"})]}),e.jsxs(N.Menu,{className:"animated flipInX",children:[e.jsxs(i,{permission:"Profile Edit",children:[e.jsxs(N.Item,{href:route("admin.profile.index"),children:[e.jsx("i",{className:"ti-user text-muted me-2"})," Profile"]}),e.jsx(N.Divider,{})]}),e.jsx(N.Item,{href:"#",children:e.jsxs(n,{onClick:t,children:[e.jsx("i",{className:"ti-lock text-muted me-2"})," Log Out"]})})]})]})})]})})]})]})})}export{De as A,Ae as a};
