var l=Object.defineProperty;var r=(a,e,t)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(r(a,typeof e!="symbol"?e+"":e,t),t);import{r as h,j as p}from"./app-Co8j8I31.js";import{S as u}from"./react-select.esm-CF0JjBFx.js";class c extends h.Component{constructor(t){super(t);s(this,"handleChange",t=>{this.setState({selectedOption:t},()=>{this.props.onChange&&this.props.onChange(t?t.value:null)})});this.state={selectedOption:t.defaultValue?{value:t.defaultValue,label:String(t.defaultValue)}:null,options:t.options||[],isClearable:t.isClearable}}componentDidUpdate(t){t.options!==this.props.options&&this.setState({options:this.props.options})}render(){const{selectedOption:t,options:n,isClearable:o}=this.state,{nameval:i}=this.props;return p.jsx(u,{isClearable:o,options:n,onChange:this.handleChange,name:i,value:t})}}const S=c;export{S as D};