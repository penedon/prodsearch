import { createRouter, createWebHashHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: SearchView,
        meta: { title: 'Prod Search' }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, _from) => {
    if ('title' in to.meta) { document.title = to.meta.title }
})

export default router
