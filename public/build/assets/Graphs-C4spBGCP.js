<<<<<<<< HEAD:public/build/assets/Graphs-C4spBGCP.js
import{r as o,W as f,j as s,b as h}from"./app-CszI9XME.js";import{_ as j}from"./react-apexcharts.min-BRGy4Gpv.js";/* empty css              */import"./index-C9FPKsoB.js";const w=()=>{const[r,n]=o.useState([]),[c,i]=o.useState([{name:"Leads",data:[]},{name:"Views",data:[]}]),{data:d,setData:y}=f({start:"",end:""}),l={chart:{id:"combined-line-chart"},xaxis:{categories:r},toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}},m=e=>{const a=Object.keys(e),u=a.map(t=>e[t].leads),x=a.map(t=>e[t].views);n(a),i([{name:"Leads",data:u},{name:"Views",data:x}])},p=async()=>{try{const e=await h.get(route("account.graph"),d);m(e.data)}catch(e){console.error("Error fetching data:",e)}};return o.useEffect(()=>{p()},[]),s.jsxs("div",{className:"mt-5",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Daily Leads and Views"}),s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsx(j,{options:l,series:c,type:"area",height:350})})})]})},E=w;export{E as default};
========
import{r as o,W as f,j as s,b as h}from"./app-m6jwzREc.js";import{_ as j}from"./react-apexcharts.min-H2MAaDHN.js";/* empty css              */import"./index-Chjiymov.js";const w=()=>{const[r,n]=o.useState([]),[c,i]=o.useState([{name:"Leads",data:[]},{name:"Views",data:[]}]),{data:d,setData:y}=f({start:"",end:""}),l={chart:{id:"combined-line-chart"},xaxis:{categories:r},toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}},m=e=>{const a=Object.keys(e),u=a.map(t=>e[t].leads),x=a.map(t=>e[t].views);n(a),i([{name:"Leads",data:u},{name:"Views",data:x}])},p=async()=>{try{const e=await h.get(route("account.graph"),d);m(e.data)}catch(e){console.error("Error fetching data:",e)}};return o.useEffect(()=>{p()},[]),s.jsxs("div",{className:"mt-5",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Daily Leads and Views"}),s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsx(j,{options:l,series:c,type:"area",height:350})})})]})},E=w;export{E as default};
>>>>>>>> 135266f00fcd0a63563ceb412c65b6dbccd3db07:public/build/assets/Graphs-BiMRqGAe.js
