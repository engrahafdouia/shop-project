import{g as r,b1 as t,B as d,b2 as i}from"./index.9e801163.js";const p=r()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...t()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=d(e,"modelValue"),{runOpenDelay:u,runCloseDelay:s}=i(e,o=>!e.disabled&&(l.value=o));return()=>{var o;return(o=a.default)==null?void 0:o.call(a,{isHovering:l.value,props:{onMouseenter:u,onMouseleave:s}})}}});export{p as V};
