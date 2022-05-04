import { defineStore } from 'pinia'

export const useRentsStore = defineStore({
  id: 'rents',
  state: () => ({
    archiveRents: [],
    activeRent: {
      status: 'Корзина не собрана!',
      rentStart: '',
      rentEnd: '',
      items: [],
    }
  }),
  getters: {
    getCartItems(store) {
      return store.activeRent.items
    },
    getTotalCost(store) {
      return store.activeRent.items.reduce((cost, item) => {
        return cost + item.cost_per_hour
      }, 0)
    },
    getCartStatus(store) {
      if (store.activeRent.items.length) return 'Готово к оплате!'
      else return 'Корзина не собрана!'
    },
    getCartItemsCount(store) {
        return store.activeRent.items.length
    }
  },
  actions: {
    addToCart(item) {
      this.activeRent.items.push(item)
      this.activeRent.status = this.getCartStatus
    },
    removeFromCart(item) {
    //   this.activeRent.items.remove(item)
      console.log('Removing from cart is NOT implemented yet...')
      this.activeRent.status = this.getCartStatus
    },
    clearCart() {
      if (!this.activeRent.items.length) return
      this.activeRent = {
        status: 'Корзина не собрана!',
        rentStart: '',
        rentEnd: '',
        items: []
      }
    },
    archiveRent() {
      this.archiveRents.push(this.activeRent)
      this.clearCart()
    }
  }
})