import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ()=>import('./components/Slider.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: ()=>import('./views/about.vue')
        },
        {
            path: '/shop',
            name: 'Shop',
            component: ()=>import('./views/Shop.vue')
        },
        {
            path: '/delivery',
            name: 'Delivery',
            component: ()=>import('./views/Delivery.vue')
        },
        {
            path: '/cart',
            name: 'Cart',
            component: ()=>import('./views/Cart.vue')
        },
        // ###   Product Pages   ###
        {
            path: '/brazilia-santos',
            name: 'BraziliaSantos',
            component: ()=>import('./views/cards/BraziliaSantos.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/efiopia-sidamo',
            name: 'EfiopiaSidamo',
            component: ()=>import('./views/cards/EfiopiaSidamo.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/gonduras',
            name: 'Gonduras',
            component: ()=>import('./views/cards/Gonduras.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/india',
            name: 'India',
            component: ()=>import('./views/cards/India.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/keniya-karibu',
            name: 'KeniyaKaribu',
            component: ()=>import('./views/cards/KeniyaKaribu.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/kolumbia-supremo',
            name: 'KolumbiaSupremo',
            component: ()=>import('./views/cards/KolumbiaSupremo.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/micnui-gorishok',
            name: 'MicnuiGorishok',
            component: ()=>import('./views/cards/MicnuiGorishok.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/nikaragua',
            name: 'Nikaragua',
            component: ()=>import('./views/cards/Nikaragua.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/zaryad-bodrosty',
            name: 'ZaryadBodrosty',
            component: ()=>import('./views/cards/ZaryadBodrosty.vue'),
            meta: { scrollToTop: true }
        },
        // ###   Product Pages   ###
        {
            path: '/login',
            name: 'Login',
            component: ()=>import('./views/Login.vue'),
            meta: { scrollToTop: true }
        },
        {
            path: '/register',
            name: 'Register',
            component: ()=>import('./views/Register.vue'),
            meta: { scrollToTop: true }
        },
    ],
    scrollBehavior(to) {
        if (to.matched.some(m => m.meta.scrollToTop)) {
            return {x: 0, y: 0}
        }
    }
})

export default router
