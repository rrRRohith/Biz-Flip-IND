<<<<<<<< HEAD:public/build/assets/Graphs-CUc8C3D9.js
import{r as o,W as f,j as s,b as h}from"./app-DlBo-Ddu.js";import{_ as j}from"./react-apexcharts.min-DhmXgpy-.js";/* empty css              */import"./index-BWjN7ugN.js";const w=()=>{const[r,n]=o.useState([]),[c,i]=o.useState([{name:"Leads",data:[]},{name:"Views",data:[]}]),{data:d,setData:y}=f({start:"",end:""}),l={chart:{id:"combined-line-chart"},xaxis:{categories:r},toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}},m=e=>{const a=Object.keys(e),u=a.map(t=>e[t].leads),x=a.map(t=>e[t].views);n(a),i([{name:"Leads",data:u},{name:"Views",data:x}])},p=async()=>{try{const e=await h.get(route("account.graph"),d);m(e.data)}catch(e){console.error("Error fetching data:",e)}};return o.useEffect(()=>{p()},[]),s.jsxs("div",{className:"mt-5",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Daily Leads and Views"}),s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsx(j,{options:l,series:c,type:"area",height:350})})})]})},E=w;export{E as default};
========
import{r as o,W as f,j as s,b as h}from"./app-roG2FNUw.js";import{_ as j}from"./react-apexcharts.min-BWMG543K.js";/* empty css              */import"./index-BhalhK_u.js";const w=()=>{const[r,n]=o.useState([]),[c,i]=o.useState([{name:"Leads",data:[]},{name:"Views",data:[]}]),{data:d,setData:y}=f({start:"",end:""}),l={chart:{id:"combined-line-chart"},xaxis:{categories:r},toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}},m=e=>{const a=Object.keys(e),u=a.map(t=>e[t].leads),x=a.map(t=>e[t].views);n(a),i([{name:"Leads",data:u},{name:"Views",data:x}])},p=async()=>{try{const e=await h.get(route("account.graph"),d);m(e.data)}catch(e){console.error("Error fetching data:",e)}};return o.useEffect(()=>{p()},[]),s.jsxs("div",{className:"mt-5",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Daily Leads and Views"}),s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsx(j,{options:l,series:c,type:"area",height:350})})})]})},E=w;export{E as default};
>>>>>>>> bcdb30c4ee2f7ede093e73517a01ebb57695d351:public/build/assets/Graphs-DYbWHEXy.js
