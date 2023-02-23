import{F as i,G as a,J as s,K as p,l as r,L as d,T as c,a6 as n,be as m,x as V,bg as b,Q as w}from"./index.9e801163.js";import{u as t}from"./Product.ebd9d025.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as f}from"./VForm.bed5fe55.js";const P={data(){return{newproduct:{id:null,title:"",description:"",price:null,discountPercentage:null,rating:null,stock:null,brand:null,category:"",thumbnail:""}}},computed:{...i(t,["ProductsStore"])},methods:{...a(t,["AddProduct"])}},v={class:"ma-16"},U=c("h3",{class:"text-h4 font-weight-bold"},"Add new Product",-1);function q(u,e,k,x,l,A){return s(),p("section",v,[U,r(f,{class:"w-75 ma-8"},{default:d(()=>[r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.id,"onUpdate:modelValue":e[0]||(e[0]=o=>l.newproduct.id=o),required:"",label:"id"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.title,"onUpdate:modelValue":e[1]||(e[1]=o=>l.newproduct.title=o),required:"",label:"title"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.description,"onUpdate:modelValue":e[2]||(e[2]=o=>l.newproduct.description=o),required:"",label:"description"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.price,"onUpdate:modelValue":e[3]||(e[3]=o=>l.newproduct.price=o),required:"",label:"price"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.discountPercentage,"onUpdate:modelValue":e[4]||(e[4]=o=>l.newproduct.discountPercentage=o),required:"",label:"discountPercentage"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.rating,"onUpdate:modelValue":e[5]||(e[5]=o=>l.newproduct.rating=o),required:"",label:"rating"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.stock,"onUpdate:modelValue":e[6]||(e[6]=o=>l.newproduct.stock=o),required:"",label:"stock"},null,8,["modelValue"]),r(n,{clearable:"",variant:"underlined",color:"indigo",modelValue:l.newproduct.brand,"onUpdate:modelValue":e[7]||(e[7]=o=>l.newproduct.brand=o),required:"",label:"brand"},null,8,["modelValue"]),r(m,{color:"indigo",label:"category",modelValue:l.newproduct.category,"onUpdate:modelValue":e[8]||(e[8]=o=>l.newproduct.category=o),items:["smartphones","laptops","fragrances","skincare","home-decoration","groceries"]},null,8,["modelValue"]),r(n,{color:"indigo",modelValue:l.newproduct.thumbnail,"onUpdate:modelValue":e[9]||(e[9]=o=>l.newproduct.thumbnail=o),required:"",label:"thumbnail"},null,8,["modelValue"]),r(V,{onClick:e[10]||(e[10]=b(o=>u.AddProduct(l.newproduct),["prevent"])),color:"indigo",to:"/productlist"},{default:d(()=>[w("Add Product ")]),_:1})]),_:1})])}const N=g(P,[["render",q]]);export{N as default};
