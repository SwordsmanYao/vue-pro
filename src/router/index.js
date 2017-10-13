import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Document from '@/components/Document'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  // 路由模式
  // history: http://localhost:8081/about
  // hash: http://localhost:8081/#/about
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
