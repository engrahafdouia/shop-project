// Utilities
// import { push } from 'core-js/core/array'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  persist: true,
  state: () => ({
    //items:JSON.parse(localStorage.getItem('product')),
    items: [],
    }),
  getters:{
    //computed
    itemscount(state)
    {
      return state.items.length
    },
  },
  actions:{
    //method
    addToCard(product)
     {
       this.items.push(product)
       console.log(product);
      //localStorage.setItem('product' , JSON.stringify(this.items))
     },
     removeItem(i)
     {
        this.items.splice(i,1)
        //localStorage.setItem('product' , JSON.stringify(this.items))
     }
  }

})
