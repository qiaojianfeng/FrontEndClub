import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index.vue'
import docs from '@/pages/docs/docs.vue'
import about from '@/pages/about/about.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    meta: {
      title: '前端开发者工具库'
    },
    component: index
  },{
    path: '/docs',
    name: 'docs',
    meta: {
      title: '开发文档'
    },
    component: docs
  },{
    path: '/about',
    name: 'about',
    meta: {
      title: '关于我们'
    },
    component: about
  }]
})
