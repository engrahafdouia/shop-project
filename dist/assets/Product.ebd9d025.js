import{a9 as r}from"./index.9e801163.js";const o=r("Product",{persist:!0,state:()=>({ProductsStore:[],SingleProduct:[],productFilter:"all",searchvalue:"",index:null,currntproductedit:{},productDetails:[]}),getters:{all(){return this.ProductsStore.filter(t=>t)},smartphones(){return this.ProductsStore.filter(t=>t.category==="smartphones")},laptops(){return this.ProductsStore.filter(t=>t.category==="laptops")},fragrances(){return this.ProductsStore.filter(t=>t.category==="fragrances")},skincare(){return this.ProductsStore.filter(t=>t.category==="skincare")},groceries(){return this.ProductsStore.filter(t=>t.category==="groceries")},homedecoration(){return this.ProductsStore.filter(t=>t.category==="home-decoration")},filteredProducts(){if(!this.searchvalue=="")return this.ProductsStore.filter(t=>t.title.toLowerCase().includes(this.searchvalue.toLowerCase()));if(this.productFilter==="all")return this.all;if(this.productFilter==="laptops")return this.laptops;if(this.productFilter==="smartphones")return this.smartphones;if(this.productFilter==="fragrances")return this.fragrances;if(this.productFilter==="skincare")return this.skincare;if(this.productFilter==="groceries")return this.groceries;if(this.productFilter==="home-decoration")return this.homedecoration}},actions:{ShowProductDetails(t){this.productDetails=t},productFilterValue(t){return this.productFilter=t},addProducttoStore(t){this.ProductsStore=t},selectSingleProduct(t){this.SingleProduct=t},AddProduct(t){this.ProductsStore.push(t)},RemoveProduct(t){this.ProductsStore.splice(t,1)},returnindexProductEdit(t){this.index=t,this.currntproductedit=this.ProductsStore[t],console.log(this.index),console.log(this.currntproductedit),console.log(this.currntproductedit.id)},AddEditProductToProducts(){this.ProductsStore[this.index]=this.currntproductedit,this.currntproductedit={}}}});export{o as u};
