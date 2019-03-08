import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'
import ProductCreate from './components/product/Create.vue'
import ProductEdit from './components/product/Edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/login",
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                forVisitors: true
            }
        },
        {
            path: "/feed",
            component: Feed,
            meta: {
                forAuth: true
            }
        },
        {
            path: "/products/create",
            component: ProductCreate,
            meta: {
                forAuth: true
            }
        },
        {
            path: "/products/:product/edit",
            component: ProductEdit,
            meta: {
                forAuth: true
            }
        }
    ],
    linkActiveClass: 'active'
})

export default router