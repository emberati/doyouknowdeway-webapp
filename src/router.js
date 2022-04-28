import Main from '@/components/pages/Main'
import Catalog from '@/components/pages/Catalog'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/catalog',
        component: Catalog
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
