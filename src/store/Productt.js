
import { defineStore } from 'pinia'
export const useProducttStore = defineStore('Productt', {
  state: () => ({
    productDetails:[],
  }),
  persist: true,
  getters:{
    },

  actions:{
    ShowProductDetails(product){

      this.productDetails=product;
     }
  }

})
