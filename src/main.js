import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ui from '@/components/ui'
// import components from '@/components'

import './assets/css/colors.css'
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './assets/css/icons.css'
import './assets/css/global.css'

const app = createApp(App)

// components.forEach(component => {
//     app.component(component.name, component)
// })

ui.forEach(item => {
    app.component(item.name, item)
    console.log(item.name)
})

app
    .use(router)
    .mount('#app')
