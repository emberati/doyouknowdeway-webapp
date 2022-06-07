import { defineStore } from 'pinia'
import { AuthAPI } from '@/api/auth'

function loadCreditionals() {
  return JSON.parse(localStorage.getItem('auth.creditionals')) || {
    login: null,
    role: null,
    accessToken: null,
    refreshToken: null,
  }
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    creditionals: loadCreditionals()
  }),
  getters: {
    getUserRole(store) {
      return store.creditionals.role
    },
  },
  actions: {
    login(email, password) {
      AuthAPI.login(email, password).then((res) => {
        this.creditionals.login = res.login
        this.creditionals.role = res.role
        this.creditionals.accessToken = res.access_token
        this.creditionals.refreshToken = res.refresh_token
      })
      localStorage.setItem(
        'auth.creditionals', 
        JSON.stringify(this.creditionals)
      )
    },
    logout() {
      localStorage.removeItem('auth.creditionals')
      this.creditionals = loadCreditionals()
    }
  }
})