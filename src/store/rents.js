import { defineStore } from 'pinia'
import {
  saveActiveRent,
  loadActiveRent,
  saveArchiveRents,
  loadArchiveRents
} from '@/handlers/rents'

export const useRentsStore = defineStore({
  id: 'rents',
  state: () => ({
    archiveRents: loadArchiveRents(),
    activeRent: loadActiveRent()
  }),
  getters: {
    isCartNotEmpty(store) {
      return Boolean(store.activeRent.items.length)
    },
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
    },
    getArchiveRents(store) {
      return store.archiveRents
    }
  },
  actions: {
    addToCart(item) {
      this.activeRent.items.push(item)
      this.activeRent.status = this.getCartStatus
    },
    removeFromCart(item) {
      var index = this.activeRent.items.indexOf(item);
      if (~index) {
        this.activeRent.items.splice(index, 1);
      }
      this.activeRent.status = this.getCartStatus
      saveActiveRent(this.activeRent)
    },
    clearCart() {
      if (!this.activeRent.items.length) return
      this.activeRent = {
        status: 'Корзина не собрана!',
        rentStart: '',
        rentEnd: '',
        items: []
      }
      saveActiveRent(null)
    },
    archiveRent() {
      this.archiveRents.push({
        status: 'В архиве',
        rentStart: this.activeRent.rentStart,
        rentEnd: this.activeRent.rentStart,
        items: this.activeRent.items,
        totalCost: this.getTotalCost
      })
      this.clearCart()
      saveArchiveRents(this.archiveRents)
    },
    saveActiveRent() {
      localStorage.setItem(
        'rents.activeRent',
        JSON.stringify(this.activeRent)
      )
      
    }
  }
})