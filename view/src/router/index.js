import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index.vue'
import docs from '@/pages/docs/docs.vue'
import about from '@/pages/about/about.vue'
//后台管理
import admin from '@/admin/admin.vue'
import adminIndex from '@/admin/index/index.vue'
import adminLogin from '@/admin/login/login.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        meta: {
            title: '前端开发者工具库'
        },
        component: index
    }, {
        path: '/docs',
        name: 'docs',
        meta: {
            title: '开发文档'
        },
        component: docs
    }, {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于我们'
        },
        component: about
    }, {
        path: '/admin',
        component: admin,
        children: [
            { path: '/', name: 'adminLogin', meta: { title: '管理系统' }, component: adminIndex },
            { path: 'login', name: 'home', meta: { title: '登录' }, component: adminLogin }
        ]

    }]
})