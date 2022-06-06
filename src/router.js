import Main from '@/components/pages/Main'
import Catalog from '@/components/pages/Catalog'
import Rents from '@/components/pages/Rents'
import AdminCatalog from '@/components/pages/AdminCatalog'
import AdminRents from '@/components/pages/AdminRents'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'index',
    component: Main
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/rents',
    name: 'rents',
    component: Rents
  },
  {
    path: '/admin/catalog',
    name: 'admin-catalog',
    component: AdminCatalog
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
