import{g as c,c as m,k as i,l as o}from"./index.de7d1076.js";import{b as u}from"./layout.80b645c2.js";import{u as d}from"./ssrBoot.e7f0138f.js";const g=c()({name:"VMain",props:{scrollable:Boolean,...m({tag:"main"})},setup(e,t){let{slots:a}=t;const{mainStyles:r}=u(),{ssrBootStyles:n}=d();return i(()=>o(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[r.value,n.value]},{default:()=>{var l,s;return[e.scrollable?o("div",{class:"v-main__scroller"},[(l=a.default)==null?void 0:l.call(a)]):(s=a.default)==null?void 0:s.call(a)]}})),{}}});export{g as V};