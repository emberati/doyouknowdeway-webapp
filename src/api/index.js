import axios from 'axios'

const baseURL = 'https://sport-equipment-rent.herokuapp.com'

const defaultConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
}

const loginConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
}

console.log(loginConfig)
console.log(defaultConfig)

export const DefaultAPIInstance = axios.create(defaultConfig)
export const LoginAPIInstance = axios.create(loginConfig)
