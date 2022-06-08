import { defineStore } from 'pinia'
import { useRentsStore } from '@/store/rents'
import { useAuthStore } from '@/store/auth'

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    loading: false,
    rentsNotifications: 0,
    adminMode: false,
    authDialogVisible: false,
    query: ''
  }),
  getters: {
    isLoading(store) {
        return store.loading
    },
    isUserAdmin() {
      return useAuthStore().isUserAdmin
    },
    getUserLogin() {
      return useAuthStore().getUserLogin
    },
    getRentsNotifications() {
      const rents = useRentsStore()
      return rents.getCartItemsCount
    },
    isAuthDialogVisible(store) {
      return store.authDialogVisible
    }
  },
  actions: {
    setLoading(value) {
      this.loading = value
    },
    showAuthDialog() {
      this.authDialogVisible = true
    },
    hideAuthDialog() {
      this.authDialogVisible = false
    }
  },
})