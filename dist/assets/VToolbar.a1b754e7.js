import{ak as y,c as T,g as k,k as V,l as a,m as H,a as I,b as E,d as R,u as D,t as j,e as $,f as w,h as F,p as J,r as O,j as x,W as U,al as c,a0 as W,X as i,am as X,J as q}from"./index.de7d1076.js";const z=y({text:String,...T()},"v-toolbar-title"),A=k()({name:"VToolbarTitle",props:z(),setup(e,l){let{slots:t}=l;return V(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:"v-toolbar-title"},{default:()=>{var o;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),G=[null,"prominent","default","comfortable","compact"],K=y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>G.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...H(),...I(),...E(),...T({tag:"header"}),...R()},"v-toolbar"),m=k()({name:"VToolbar",props:K(),setup(e,l){var v;let{slots:t}=l;const{backgroundColorClasses:s,backgroundColorStyles:o}=D(j(e,"color")),{borderClasses:_}=$(e),{elevationClasses:B}=w(e),{roundedClasses:C}=F(e),{themeClasses:P}=J(e),r=O(!!(e.extended||((v=t.extension)==null?void 0:v.call(t)))),d=x(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=x(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return U({VBtn:{variant:"text"}}),V(()=>{var b;const S=!!(e.title||t.title),N=!!(t.image||e.image),g=(b=t.extension)==null?void 0:b.call(t);return r.value=!!(e.extended||g),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,B.value,C.value,P.value],style:[o.value]},{default:()=>[N&&a("div",{key:"image",class:"v-toolbar__image"},[a(c,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var n;return[t.image?(n=t.image)==null?void 0:n.call(t):a(W,null,null)]}})]),a(c,{defaults:{VTabs:{height:i(d.value)}}},{default:()=>{var n,f,h;return[a("div",{class:"v-toolbar__content",style:{height:i(d.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(n=t.prepend)==null?void 0:n.call(t)]),S&&a(A,{key:"title",text:e.title},{text:t.title}),(f=t.default)==null?void 0:f.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(h=t.append)==null?void 0:h.call(t)])])]}}),a(c,{defaults:{VTabs:{height:i(u.value)}}},{default:()=>[a(X,null,{default:()=>[r.value&&a("div",{class:"v-toolbar__extension",style:{height:i(u.value)}},[g])]})]})]})}),{contentHeight:d,extensionHeight:u}}});function M(e){var l;return q(e,Object.keys((l=m==null?void 0:m.props)!=null?l:{}))}export{A as V,m as a,M as f,K as m};