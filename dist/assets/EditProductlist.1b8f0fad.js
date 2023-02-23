import{F as m,G as V,J as a,K as b,T as g,R as f,l as o,L as l,a6 as d,be as $,x as v,bg as P,Q as k,bp as U,_ as q,N as S}from"./index.9e801163.js";import{u as n}from"./Product.ebd9d025.js";import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as E}from"./VForm.bed5fe55.js";const B={data(){return{}},computed:{...m(n,["ProductsStore","currntproductedit"])},methods:{...V(n,["AddProduct","EditProduct","AddEditProductToProducts"])}},T={class:"ma-16"},w={class:"text-h4 font-weight-bold"};function y(e,r,u,s,c,p){return a(),b("section",T,[g("h3",w,"Edit Product:("+f(e.currntproductedit.id)+")",1),o(E,{class:"w-75 ma-8"},{default:l(()=>[o(d,{modelValue:e.currntproductedit.id,"onUpdate:modelValue":r[0]||(r[0]=t=>e.currntproductedit.id=t),required:"",label:"id",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o(d,{modelValue:e.currntproductedit.title,"onUpdate:modelValue":r[1]||(r[1]=t=>e.currntproductedit.title=t),required:"",label:"title",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o(d,{modelValue:e.currntproductedit.description,"onUpdate:modelValue":r[2]||(r[2]=t=>e.currntproductedit.description=t),required:"",label:"description",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o(d,{modelValue:e.currntproductedit.rating,"onUpdate:modelValue":r[3]||(r[3]=t=>e.currntproductedit.rating=t),required:"",label:"rating",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o(d,{modelValue:e.currntproductedit.stock,"onUpdate:modelValue":r[4]||(r[4]=t=>e.currntproductedit.stock=t),required:"",label:"stock",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o(d,{modelValue:e.currntproductedit.brand,"onUpdate:modelValue":r[5]||(r[5]=t=>e.currntproductedit.brand=t),required:"",label:"brand",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o($,{label:"category",modelValue:e.currntproductedit.category,"onUpdate:modelValue":r[6]||(r[6]=t=>e.currntproductedit.category=t),variant:"underlined",color:"indigo",items:["smartphones","laptops","fragrances","skincare","home-decoration","groceries"]},null,8,["modelValue"]),o(d,{modelValue:e.currntproductedit.thumbnail,"onUpdate:modelValue":r[7]||(r[7]=t=>e.currntproductedit.thumbnail=t),required:"",label:"thumbnail",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),o(v,{onClick:r[8]||(r[8]=P(t=>e.AddEditProductToProducts(),["prevent"])),to:"/productlist",class:"mt-2 bg-success"},{default:l(()=>[k("OK ")]),_:1}),U(e.$slots,"default")]),_:3})])}const A=i(B,[["render",y]]),N={components:{editProdectSection:A}};function C(e,r,u,s,c,p){const t=q("edit-prodect-section");return a(),S(t)}const J=i(N,[["render",C]]);export{J as default};
