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

export const DefaultAPIInstance = axios.create(defaultConfig)
export const LoginAPIInstance = axios.create(loginConfig)

// curl -i -X OPTIONS -H "Origin: *" ^
//     -H "Access-Control-Request-Method: POST" ^
//     -H "Access-Control-Request-Headers: Content-Type, Authorization" ^
//     "https://sport-equipment-rent.herokuapp.com"