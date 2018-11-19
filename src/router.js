import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from './assets/page/FirstPage.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production'
        ? './' // prod
        : '/',  // dev
    routes: [
        {
            path: '/',
            component: FirstPage
        }
    ]
});  