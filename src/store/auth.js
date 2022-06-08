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
    getUserLogin(store) {
      return store.creditionals.login
    },
    getUserRole(store) {
      return store.creditionals.role
    },
  },
  actions: {
    login(data) {
      AuthAPI.login(data).then((res) => {
        this.creditionals.login = res.login
        this.creditionals.role = res.role
        this.creditionals.accessToken = res.access_token
        this.creditionals.refreshToken = res.refresh_token
      })
      localStorage.setItem(
        'auth.creditionals', 
        JSON.stringify(this.creditionals)
      )
      console.log(this.creditionals)
    },
    logout() {
      localStorage.removeItem('auth.creditionals')
      this.creditionals = loadCreditionals()
      console.log(this.creditionals)
    },
    register(data) {
      console.log('register data: ', JSON.stringify(data))
      AuthAPI.register(data).then((res) => {
        this.creditionals.login = res.login
        this.creditionals.role = res.role
        this.creditionals.accessToken = res.access_token
        this.creditionals.refreshToken = res.refresh_token
      })
      localStorage.setItem(
        'auth.creditionals', 
        JSON.stringify(this.creditionals)
      )
      console.log(this.creditionals)
    }
  }
})