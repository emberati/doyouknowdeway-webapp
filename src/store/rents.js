import { defineStore } from 'pinia'

export const useRentsStore = defineStore({
  id: 'rents',
  state: () => ({
    archiveRents: [],
    activeRent: {
      status: 'Готово к оплате',
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
      store.activeRent.items.reduce((cost, item) => {
        cost + item.cost_per_hour
      }, 0)
    },
    getCartItemsCount(store) {
        return store.activeRent.items.length
    }
  },
  actions: {
    addToCart(item) {
      this.activeRent.items.push(item)
    },
    removeFromCart(item) {
      this.activeRent.items.remove(item)
    },
    clearCart() {
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