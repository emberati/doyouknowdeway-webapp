import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'

import ui from '@/components/ui'
import { registerLayouts } from '@/components/layouts'

// import components from '@/components'

import './assets/css/colors.css'
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './assets/css/icons.css'
import './assets/css/global.css'

const app = createApp(App)
const pinia = createPinia()

registerLayouts(app)

// components.forEach(component => {
//     app.component(component.name, component)
// })

ui.forEach(item => {
  app.component(item.name, item)
  // console.log(item.name)
})

app
  .use(pinia)
  .use(router)
  .mount('#app')
