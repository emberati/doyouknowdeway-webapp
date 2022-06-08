import {LoginAPIInstance, DefaultAPIInstance} from '@/api'

export const AuthAPI = {
  login(data) {
    const url = '/login'
    console.log(JSON.stringify(data))
    return LoginAPIInstance.post(url, JSON.stringify(data))
  },
  logout() {
    const url = '/logout'
    return DefaultAPIInstance.post(url)
  },
  register(data) {
    const url = '/register'
    return LoginAPIInstance.post(url, data)
  }
}