import{g as h,bk as x,bl as P,B as y,bm as S,s as B,aO as D,ab as f,r as O,n as m,k as w,bn as A,l as g,al as I,ba as R,b9 as T,aj as F}from"./index.9e801163.js";const L=h()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...x({origin:"center center",scrollStrategy:"block",transition:{component:P},zIndex:2400})},emits:{"update:modelValue":l=>!0},setup(l,b){let{slots:c}=b;const r=y(l,"modelValue"),{scopeId:p}=S(),a=B();function i(o){var n,s;const e=o.relatedTarget,t=o.target;if(e!==t&&((n=a.value)==null?void 0:n.contentEl)&&((s=a.value)==null?void 0:s.globalTop)&&![document,a.value.contentEl].includes(t)&&!a.value.contentEl.contains(t)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}D&&f(()=>r.value&&l.retainFocus,o=>{o?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),f(r,async o=>{var e,t;await F(),o?(e=a.value.contentEl)==null||e.focus({preventScroll:!0}):(t=a.value.activatorEl)==null||t.focus({preventScroll:!0})});const V=O(()=>m({"aria-haspopup":"dialog","aria-expanded":String(r.value)},l.activatorProps));return w(()=>{const[o]=A(l);return g(R,m({ref:a,class:["v-dialog",{"v-dialog--fullscreen":l.fullscreen,"v-dialog--scrollable":l.scrollable}]},o,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:V.value},p),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(I,{root:!0},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),T({},a)}});export{L as V};