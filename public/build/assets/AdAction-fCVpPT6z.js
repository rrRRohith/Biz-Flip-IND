import{j as s}from"./app-CEerusyk.js";function a({ad:e,status:n}){return e.status!=-1&&e.status!="0"&&e.status!="3"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"position-absolute",children:s.jsxs("div",{className:"dropdown me-2",children:[s.jsx("button",{"data-bs-toggle":"dropdown",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:s.jsx("i",{className:"bi bi-chevron-compact-down"})}),s.jsxs("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[e.status==1&&e.publish_at&&s.jsxs(s.Fragment,{children:[s.jsx("li",{children:s.jsx("a",{onClick:l=>n(e,0),className:"dropdown-item",href:"#",children:"Unpublish"})}),s.jsx("li",{children:s.jsx("a",{onClick:l=>n(e,2),className:"dropdown-item",href:"#",children:"Mark as sold"})})]}),e.status==1&&!e.publish_at&&s.jsx(s.Fragment,{children:s.jsx("li",{children:s.jsx("a",{onClick:l=>n(e,1),className:"dropdown-item",href:"#",children:"Publish"})})}),e.status==2&&s.jsx(s.Fragment,{children:s.jsx("li",{children:s.jsx("a",{onClick:l=>n(e,1),className:"dropdown-item",href:"#",children:"Mark as available"})})})]})]})}),s.jsx("a",{type:"button",className:"btn btn-sm btn-square btn-neutral me-2",children:s.jsx("i",{className:"bi bi-pen"})})]})}export{a as default};
