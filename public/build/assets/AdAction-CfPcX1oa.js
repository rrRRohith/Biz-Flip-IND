import{j as e}from"./app-DeIulrNp.js";function i({ad:s,status:n}){return s.status!=-1&&e.jsxs("div",{className:"dropdown me-2",children:[e.jsx("button",{"data-bs-toggle":"dropdown",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-chevron-compact-down"})}),e.jsxs("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[s.status==1&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("a",{onClick:r=>n(s,0),className:"dropdown-item",href:"#",children:"Unpublish"})}),e.jsx("li",{children:e.jsx("a",{onClick:r=>n(s,2),className:"dropdown-item",href:"#",children:"Mark as sold"})})]}),s.status==2&&e.jsx(e.Fragment,{children:e.jsx("li",{children:e.jsx("a",{onClick:r=>n(s,1),className:"dropdown-item",href:"#",children:"Mark as available"})})}),s.status==0&&e.jsx(e.Fragment,{children:e.jsx("li",{children:e.jsx("a",{onClick:r=>n(s,1),className:"dropdown-item",href:"#",children:"Publish"})})})]})]})}export{i as default};
