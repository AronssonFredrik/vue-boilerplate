import Vue from 'vue'
import Router from 'vue-router'
import Index from './assets/page/Index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production'
        ? './' // prod
        : '/',  // dev
    routes: [
        {
            path: '/',
            component: Index
        }
    ]
});  