import{F as r,J as u,N as c,L as e,H as f,l as s,ap as m,O as h,Q as n,R as i,x as o,bh as g,T as t}from"./index.f1a42aba.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as p}from"./VContainer.5d769358.js";import{a as d,V as x}from"./VRow.4131ac0e.js";import{V as l,d as V,b as I,e as b,a as k,c as C}from"./VCard.63fdc475.js";/* empty css              */const N="/shop-project/assets/rahaf.jpg",j={data:()=>({userInfo:{},loading:!1,selection:1,items:[{text:"mdpjeanne",icon:"mdi-instagram"},{text:"mdnjeanneGit",icon:"mdi-github"},{text:"@mdnjeanne",icon:"mdi-twitter"},{text:"jeanne",icon:"mdi-facebook"}]}),computed:{...r(f,["user"])},created(){this.axios.get("https://dummyjson.com/users/"+this.user.id).then(a=>{this.userInfo=a.data})},methods:{reserve(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)}}},v=t("thead",null,[t("tr",{class:"bg-indigo-lighten-4"},[t("th",{class:"text-left text-indigo-darken-2"}," Information "),t("th",{class:"text-left text-indigo-darken-2"}," Details ")])],-1),y=t("td",{class:"text-indigo-darken-4"},"Full Name",-1),S={class:"text-indigo-lighten-2"},T=t("td",{class:"text-indigo-darken-4"},"Age",-1),w={class:"text-indigo-lighten-2"},B=t("td",{class:"text-indigo-darken-4"},"Gender",-1),A={class:"text-indigo-lighten-2"},D=t("td",{class:"text-indigo-darken-4"},"BirthDate",-1),$={class:"text-indigo-lighten-2"},F=t("td",{class:"text-indigo-darken-4"},"University",-1),G={class:"text-indigo-lighten-2"};function L(a,O,E,R,U,z){return u(),c(p,null,{default:e(()=>[s(x,null,{default:e(()=>[s(d,{cols:"12",md:"4"},{default:e(()=>[s(l,{class:"mx-auto bg-indigo-lighten-3",width:"300",height:"400"},{default:e(()=>[s(m,{size:"170",rounded:"50",class:"ma-auto"},{default:e(()=>[s(h,{cover:"",src:N})]),_:1}),s(V,null,{default:e(()=>[s(I,{class:"text-h6 text-indigo pb-2"},{default:e(()=>[n(i(a.userInfo.firstName+" "+a.userInfo.lastName),1)]),_:1}),s(b,{class:"text-indigo"},{default:e(()=>[n(i(a.userInfo.email),1)]),_:1}),s(k,{class:"text-indigo"},{default:e(()=>[n(i(a.userInfo.phone),1)]),_:1})]),_:1}),s(C,{class:"d-flex justify-center"},{default:e(()=>[s(o,{variant:"outlined"},{default:e(()=>[n(" FOLLOW ")]),_:1}),s(o,{variant:"outlined",class:"bg-indigo-darken-2"},{default:e(()=>[n(" MESSAGE ")]),_:1})]),_:1})]),_:1})]),_:1}),s(d,{cols:"12",md:"6"},{default:e(()=>[s(l,{class:"mt-4"},{default:e(()=>[s(g,null,{default:e(()=>[v,t("tbody",null,[t("tr",null,[y,t("td",S,i(a.userInfo.firstName)+" "+i(a.userInfo.lastName),1)]),t("tr",null,[T,t("td",w,i(a.userInfo.age),1)]),t("tr",null,[B,t("td",A,i(a.userInfo.gender),1)]),t("tr",null,[D,t("td",$,i(a.userInfo.birthDate),1)]),t("tr",null,[F,t("td",G,i(a.userInfo.university),1)])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const q=_(j,[["render",L]]);export{q as default};