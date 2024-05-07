import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import Register from "@/views/Register"
import Instance from '@/views/Instance'
import Quota from '@/views/Quota'
import User from '@/views/User'
import Manger from '@/views/Manger'
import CloudFront from '@/views/CloudFront'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Instance',
        name: 'Instance',
        component: Instance,
        meta: {
            needLogin: true
        }
    },
    {
        path: '/User',
        name: 'User',
        component: User,
        meta: {
            needLogin: true
        }
    },
    {
        path: '/Quota',
        name: 'Quota',
        component: Quota,
        meta: {
            needLogin: true
        }
    },
    {
        path: '/Manger',
        name: 'Manger',
        component: Manger,
        meta: {
            needLogin: true
        }
    },
    {
        path: '/CloudFront',
        name: 'CloudFront',
        component: CloudFront,  // Lazy loading the component
        meta: {
            needLogin: true  // Assuming it requires user to be logged in
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

function CheckCookie(name) {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    return arr != null;
}

router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        if (CheckCookie("loginSession")) {
            next()
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        next()
    }
});

export default router