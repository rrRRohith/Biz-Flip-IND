import{j as e}from"./app-DQU21Xrf.js";function a({ad:s,status:n}){return s.status!=-1&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"position-absolute",children:e.jsxs("div",{className:"dropdown me-2",children:[e.jsx("button",{"data-bs-toggle":"dropdown",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-chevron-compact-down"})}),e.jsxs("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[s.status==1&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("a",{onClick:l=>n(s,0),className:"dropdown-item",href:"#",children:"Unpublish"})}),e.jsx("li",{children:e.jsx("a",{onClick:l=>n(s,2),className:"dropdown-item",href:"#",children:"Mark as sold"})})]}),s.status==2&&e.jsx(e.Fragment,{children:e.jsx("li",{children:e.jsx("a",{onClick:l=>n(s,1),className:"dropdown-item",href:"#",children:"Mark as available"})})}),s.status==0&&e.jsx(e.Fragment,{children:e.jsx("li",{children:e.jsx("a",{onClick:l=>n(s,1),className:"dropdown-item",href:"#",children:"Publish"})})})]})]})}),e.jsx("a",{type:"button",className:"btn btn-sm btn-square btn-neutral me-2",children:e.jsx("i",{className:"bi bi-pen"})})]})}export{a as default};
