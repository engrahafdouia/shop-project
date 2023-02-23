import{a9 as p,F as h,G as f,_ as g,J as m,K as P,l as e,L as r,Z as S,Q as s,R as o,U as V,T as i,x as _,V as C,O as D}from"./index.de21d3bd.js";import{u as y}from"./Cart.6c586377.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as c,a}from"./VRow.d9443b53.js";import{V as F,a as d}from"./VCarouselItem.64f5752f.js";import{V as k,d as w,b,e as x,a as u,c as T}from"./VCard.1ca1f42e.js";/* empty css              */import"./ssrBoot.0c6dccaf.js";const $=p("Product",{persist:!0,state:()=>({ProductsStore:[],SingleProduct:[],productFilter:"all",searchvalue:"",index:null,currntproductedit:{},productDetails:[]}),getters:{all(){return this.ProductsStore.filter(t=>t)},smartphones(){return this.ProductsStore.filter(t=>t.category==="smartphones")},laptops(){return this.ProductsStore.filter(t=>t.category==="laptops")},fragrances(){return this.ProductsStore.filter(t=>t.category==="fragrances")},skincare(){return this.ProductsStore.filter(t=>t.category==="skincare")},groceries(){return this.ProductsStore.filter(t=>t.category==="groceries")},homedecoration(){return this.ProductsStore.filter(t=>t.category==="home-decoration")},filteredProducts(){if(!this.searchvalue=="")return this.ProductsStore.filter(t=>t.title.toLowerCase().includes(this.searchvalue.toLowerCase()));if(this.productFilter==="all")return this.all;if(this.productFilter==="laptops")return this.laptops;if(this.productFilter==="smartphones")return this.smartphones;if(this.productFilter==="fragrances")return this.fragrances;if(this.productFilter==="skincare")return this.skincare;if(this.productFilter==="groceries")return this.groceries;if(this.productFilter==="home-decoration")return this.homedecoration}},actions:{ShowProductDetails(t){this.productDetails=t},productFilterValue(t){return this.productFilter=t},addProducttoStore(t){this.ProductsStore=t},selectSingleProduct(t){this.SingleProduct=t},AddProduct(t){this.ProductsStore.push(t)},RemoveProduct(t){this.ProductsStore.splice(t,1)},returnindexProductEdit(t){this.index=t,this.currntproductedit=this.ProductsStore[t],console.log(this.index),console.log(this.currntproductedit),console.log(this.currntproductedit.id)},AddEditProductToProducts(){this.ProductsStore[this.index]=this.currntproductedit,this.currntproductedit={}}}}),A={components:{},data(){return{alert:!1}},computed:{...h($,["productDetails"]),product(){return{id:this.id,title:this.title,price:this.price,category:this.category,image:this.image}}},methods:{...f(y,["addToCard"])}},B={class:"mb-2"},I={class:"mt-2 text-indigo"},E={class:"w-100 h-100"};function L(t,l,N,R,j,G){const n=g("tmplate");return m(),P(S,null,[e(c,{justify:"center"},{default:r(()=>[e(a,{cols:"12"},{default:r(()=>[e(F,{"show-arrows":"hover",height:"410",class:"bg-grey-lighten-2","hide-delimiters":""},{default:r(()=>[e(d,{src:t.productDetails.images[0],cover:""},null,8,["src"]),e(d,{src:t.productDetails.images[1],cover:""},null,8,["src"]),e(d,{src:t.productDetails.images[2],cover:""},null,8,["src"])]),_:1})]),_:1})]),_:1}),e(c,{class:"bg-indigo-lighten-4 ma-auto pa-8"},{default:r(()=>[e(a,null,{default:r(()=>[e(k,{align:"center",class:"bg-indigo-lighten-5"},{default:r(()=>[e(w,{class:"pt-8"},{default:r(()=>[e(b,{class:"text-h4 text-dark pa-2"},{default:r(()=>[s("Product info:"+o(t.productDetails.id),1)]),_:1}),e(V,{class:"bg-indigo-darken-4",width:"10%"}),e(x,{class:"pt-4 text-h6"},{default:r(()=>[s(o(t.productDetails.title),1)]),_:1}),e(u,{class:"text-grey-darken-4"},{default:r(()=>[s(o(t.productDetails.category)+" - "+o(t.productDetails.brand),1)]),_:1}),e(u,{class:"text-grey-darken-4"},{default:r(()=>[e(n,null,{default:r(()=>[i("p",B,o(t.productDetails.description),1),i("p",null,[s(" price: "),i("span",I,o(t.productDetails.price)+" $",1)])]),_:1})]),_:1})]),_:1}),i("div",null,[e(T,{class:"d-flex justify-center"},{default:r(()=>[e(_,{rounded:"pill",class:"bg-purpleme text-right",onClick:l[0]||(l[0]=J=>t.addToCard(t.productDetails))},{default:r(()=>[e(C,{large:""},{default:r(()=>[s(" mdi-cart ")]),_:1}),s(" addToCart ")]),_:1})]),_:1})])]),_:1})]),_:1}),e(a,{cols:"6"},{default:r(()=>[i("div",E,[e(D,{src:t.productDetails.images[0],class:"h-100 w-100"},null,8,["src"])])]),_:1})]),_:1})],64)}const M=v(A,[["render",L]]);export{M as default};