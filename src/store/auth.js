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
    isUserAdmin(store) {
      return store.creditionals.role == 'ADMIN' || false
    },
    getUserLogin(store) {
      return store.creditionals.login
    },
    getUserRole(store) {
      return store.creditionals.role
    },
  },
  actions: {
    async login(data) {
      let success = false
      await AuthAPI.login(data).then((res) => {
        let data = res.data
        this.creditionals.login = data.login
        this.creditionals.role = data.role
        this.creditionals.accessToken = data.access_token
        this.creditionals.refreshToken = data.refresh_token
        success = true
        console.log("response: ", data)
        console.log("creditionals: ", this.creditionals)
      })
      localStorage.setItem(
        'auth.creditionals', 
        JSON.stringify(this.creditionals)
      )
      console.log(this.creditionals)
      return success
    },
    logout() {
      localStorage.removeItem('auth.creditionals')
      this.creditionals = loadCreditionals()
      console.log(this.creditionals)
    },
    async register(data) {
      this.logout()
      await AuthAPI.register(data).then((res) => {
        let data = res.data
        this.creditionals.login = data.login
        this.creditionals.role = data.role
        this.creditionals.accessToken = data.access_token
        this.creditionals.refreshToken = data.refresh_token
      })
      localStorage.setItem(
        'auth.creditionals', 
        JSON.stringify(this.creditionals)
      )
      console.log(this.creditionals)
    }
  }
})