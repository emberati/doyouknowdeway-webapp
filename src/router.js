import Main from '@/components/pages/Main'
import Profile from '@/components/pages/Profile'
import Catalog from '@/components/pages/Catalog'
import Rents from '@/components/pages/Rents'
import Order from '@/components/pages/Order'
import AdminRents from '@/components/pages/AdminRents'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'index',
    component: Main,
    redirect: 'catalog'
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/rents',
    name: 'rents',
    component: Rents
  },
  {
    path: '/order/:id',
    name: 'order',
    component: Order,
    meta: {
      layout: 'flat-layout'
    }
  },
  {
    path: '/admin/rents',
    name: 'admin-rents',
    component: AdminRents
  },
]

const router = createRouter({
  mode: 'history',
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
