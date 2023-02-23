import{m as ne,f as oe,a as le}from"./VToolbar.c66f4773.js";import{a as F,u as U}from"./layout.0c71c014.js";import{g as L,s as V,B as j,r as y,t as Y,k as W,l as S,n as G,I as ue,x as ie,E as P,aa as J,ab as N,ac as K,ad as re,a1 as se,a2 as ce,a as ve,b as de,c as me,a0 as fe,$ as he,a3 as ge,u as X,a4 as ye,ae as we,e as be,af as pe,ag as Se,ah as Te,D as ke,ai as Be,Z as Ee,aj as Ve}from"./index.de21d3bd.js";import{u as Q}from"./ssrBoot.0c6dccaf.js";const $e=L()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ne(),...F(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:r}=i;const o=V(),a=j(e,"modelValue"),t=y(()=>{var l,c,v,d;const w=(c=(l=o.value)==null?void 0:l.contentHeight)!=null?c:0,f=(d=(v=o.value)==null?void 0:v.extensionHeight)!=null?d:0;return w+f}),{ssrBootStyles:m}=Q(),{layoutItemStyles:h}=U({id:e.name,order:y(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:t,elementSize:t,active:a,absolute:Y(e,"absolute")});return W(()=>{const[w]=oe(e);return S(le,G({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...h.value,height:void 0,...m.value}},w),r)}),{}}}),Ae=L()({name:"VAppBarNavIcon",props:{icon:{type:ue,default:"$menu"}},setup(e,i){let{slots:r}=i;return W(()=>S(ie,{class:"v-app-bar-nav-icon",icon:e.icon},r)),{}}});function xe(e){let{rootEl:i,isSticky:r,layoutItemStyles:o}=e;const a=V(!1),t=V(0),m=y(()=>{const f=typeof a.value=="boolean"?"top":a.value;return[r.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[f]:P(t.value)}:{top:o.value.top}]});J(()=>{N(r,f=>{f?window.addEventListener("scroll",w,{passive:!0}):window.removeEventListener("scroll",w)},{immediate:!0})}),K(()=>{document.removeEventListener("scroll",w)});let h=0;function w(){var g;const f=h>window.scrollY?"up":"down",l=i.value.getBoundingClientRect(),c=parseFloat((g=o.value.top)!=null?g:0),v=window.scrollY-Math.max(0,t.value-c),d=l.height+Math.max(t.value,c)-window.scrollY-window.innerHeight;l.height<window.innerHeight-c?(a.value="top",t.value=c):f==="up"&&a.value==="bottom"||f==="down"&&a.value==="top"?(t.value=window.scrollY+l.top,a.value=!0):f==="down"&&d<=0?(t.value=0,a.value="bottom"):f==="up"&&v<=0&&(t.value=l.top+v,a.value="top"),h=window.scrollY}return{isStuck:a,stickyStyles:m}}const Me=100,He=20;function Z(e){const i=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*i}function q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let r=e.length-1;r>0;r--){if(e[r].t===e[r-1].t)continue;const o=Z(i),a=(e[r].d-e[r-1].d)/(e[r].t-e[r-1].t);i+=(a-o)*Math.abs(a),r===e.length-1&&(i*=.5)}return Z(i)*1e3}function Ce(){const e={};function i(a){Array.from(a.changedTouches).forEach(t=>{var h;((h=e[t.identifier])!=null?h:e[t.identifier]=new re(He)).push([a.timeStamp,t])})}function r(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function o(a){var f;const t=(f=e[a])==null?void 0:f.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const m=t[0],h=[],w=[];for(const l of t){if(m[0]-l[0]>Me)break;h.push({t:l[0],d:l[1].clientX}),w.push({t:l[0],d:l[1].clientY})}return{x:q(h),y:q(w),get direction(){const{x:l,y:c}=this,[v,d]=[Math.abs(l),Math.abs(c)];return v>d&&l>=0?"right":v>d&&l<=0?"left":d>v&&c>=0?"down":d>v&&c<=0?"up":Re()}}}return{addMovement:i,endTouch:r,getVelocity:o}}function Re(){throw new Error}function Ie(e){let{isActive:i,isTemporary:r,width:o,touchless:a,position:t}=e;J(()=>{window.addEventListener("touchstart",E,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),K(()=>{window.removeEventListener("touchstart",E),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",x)});const m=y(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:w,getVelocity:f}=Ce();let l=!1;const c=V(!1),v=V(0),d=V(0);let g;function R(n,u){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="top"?n:t.value==="bottom"?document.documentElement.clientHeight-n:C())-(u?o.value:0)}function I(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const s=t.value==="left"?(n-d.value)/o.value:t.value==="right"?(document.documentElement.clientWidth-n-d.value)/o.value:t.value==="top"?(n-d.value)/o.value:t.value==="bottom"?(document.documentElement.clientHeight-n-d.value)/o.value:C();return u?Math.max(0,Math.min(1,s)):s}function E(n){if(a.value)return;const u=n.changedTouches[0].clientX,s=n.changedTouches[0].clientY,b=25,k=t.value==="left"?u<b:t.value==="right"?u>document.documentElement.clientWidth-b:t.value==="top"?s<b:t.value==="bottom"?s>document.documentElement.clientHeight-b:C(),B=i.value&&(t.value==="left"?u<o.value:t.value==="right"?u>document.documentElement.clientWidth-o.value:t.value==="top"?s<o.value:t.value==="bottom"?s>document.documentElement.clientHeight-o.value:C());(k||B||i.value&&r.value)&&(l=!0,g=[u,s],d.value=R(m.value?u:s,i.value),v.value=I(m.value?u:s),w(n),h(n))}function M(n){const u=n.changedTouches[0].clientX,s=n.changedTouches[0].clientY;if(l){if(!n.cancelable){l=!1;return}const k=Math.abs(u-g[0]),B=Math.abs(s-g[1]);(m.value?k>B&&k>3:B>k&&B>3)?(c.value=!0,l=!1):(m.value?B:k)>3&&(l=!1)}if(!c.value)return;n.preventDefault(),h(n);const b=I(m.value?u:s,!1);v.value=Math.max(0,Math.min(1,b)),b>1?d.value=R(m.value?u:s,!0):b<0&&(d.value=R(m.value?u:s,!1))}function x(n){if(l=!1,!c.value)return;h(n),c.value=!1;const u=f(n.changedTouches[0].identifier),s=Math.abs(u.x),b=Math.abs(u.y);(m.value?s>b&&s>400:b>s&&b>3)?i.value=u.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||C()):i.value=v.value>.5}const T=y(()=>c.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*o.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*o.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*o.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*o.value}px))`:C(),transition:"none"}:void 0);return{isDragging:c,dragProgress:v,dragStyles:T}}function C(){throw new Error}const Pe=["start","end","left","right","top","bottom"],De=L()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Pe.includes(e)},sticky:Boolean,...se(),...ce(),...F(),...ve(),...de({tag:"nav"}),...me()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:r,emit:o,slots:a}=i;const{isRtl:t}=fe(),{themeClasses:m}=he(e),{borderClasses:h}=ge(e),{backgroundColorClasses:w,backgroundColorStyles:f}=X(Y(e,"color")),{elevationClasses:l}=ye(e),{mobile:c}=we(),{roundedClasses:v}=be(e),d=pe(),g=j(e,"modelValue",null,p=>!!p),{ssrBootStyles:R}=Q(),I=V(),E=V(!1),M=y(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),x=y(()=>Se(e.location,t.value)),T=y(()=>!e.permanent&&(c.value||e.temporary)),n=y(()=>e.sticky&&!T.value&&x.value!=="bottom");e.expandOnHover&&e.rail!=null&&N(E,p=>o("update:rail",!p)),e.disableResizeWatcher||N(T,p=>!e.permanent&&Ve(()=>g.value=!p)),!e.disableRouteWatcher&&d&&N(d.currentRoute,()=>T.value&&(g.value=!1)),N(()=>e.permanent,p=>{p&&(g.value=!0)}),Te(()=>{e.modelValue!=null||T.value||(g.value=e.permanent||!c.value)});const{isDragging:u,dragProgress:s,dragStyles:b}=Ie({isActive:g,isTemporary:T,width:M,touchless:Y(e,"touchless"),position:x}),k=y(()=>{const p=T.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):M.value;return u.value?p*s.value:p}),{layoutItemStyles:B,layoutRect:H,layoutItemScrimStyles:ee}=U({id:e.name,order:y(()=>parseInt(e.order,10)),position:x,layoutSize:k,elementSize:M,active:y(()=>g.value||u.value),disableTransitions:y(()=>u.value),absolute:y(()=>e.absolute||n.value&&typeof $.value!="string")}),{isStuck:$,stickyStyles:te}=xe({rootEl:I,isSticky:n,layoutItemStyles:B}),A=X(y(()=>typeof e.scrim=="string"?e.scrim:null)),ae=y(()=>({...u.value?{opacity:s.value*.2,transition:"none"}:void 0,...H.value?{left:P(H.value.left),right:P(H.value.right),top:P(H.value.top),bottom:P(H.value.bottom)}:void 0,...ee.value}));return ke({VList:{bgColor:"transparent"}}),W(()=>{const p=a.image||e.image;return S(Ee,null,[S(e.tag,G({ref:I,onMouseenter:()=>E.value=!0,onMouseleave:()=>E.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${x.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":T.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":n.value},m.value,w.value,h.value,l.value,v.value],style:[f.value,B.value,b.value,R.value,te.value]},r),{default:()=>{var D,_,O,z;return[p&&S("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(D=a.image)==null?void 0:D.call(a,{image:e.image}):S("img",{src:e.image,alt:""},null)]),a.prepend&&S("div",{class:"v-navigation-drawer__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),S("div",{class:"v-navigation-drawer__content"},[(O=a.default)==null?void 0:O.call(a)]),a.append&&S("div",{class:"v-navigation-drawer__append"},[(z=a.append)==null?void 0:z.call(a)])]}}),S(Be,{name:"fade-transition"},{default:()=>[T.value&&(u.value||g.value)&&!!e.scrim&&S("div",{class:["v-navigation-drawer__scrim",A.backgroundColorClasses.value],style:[ae.value,A.backgroundColorStyles.value],onClick:()=>g.value=!1},null)]})])}),{isStuck:$}}});export{Ae as V,$e as a,De as b};
