import Main from '@/components/pages/Main'
import Catalog from '@/components/pages/Catalog'
import Rents from '@/components/pages/Rents'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
      path: '/',
      component: Main
    },
    {
      path: '/catalog',
      component: Catalog
    },
    {
      path: '/rents',
      component: Rents
    }
]

const router = createRouter({
  mode: 'history',
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
