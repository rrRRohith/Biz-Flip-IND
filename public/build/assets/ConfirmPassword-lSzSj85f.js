import{W as d,r as p,j as s,Y as l}from"./app-BGiLrZjH.js";import{G as c}from"./GuestLayout-CP_qNqy8.js";import{I as u}from"./InputError-CuBgUW9l.js";import{I as f}from"./InputLabel-VgQ6af_4.js";import{P as x}from"./PrimaryButton-Bw0UKriM.js";import{T as w}from"./TextInput-DXeXlTKY.js";function P(){const{data:e,setData:a,post:t,processing:o,errors:m,reset:i}=d({password:""});p.useEffect(()=>()=>{i("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{P as default};