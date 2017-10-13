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
      component: HelloWorld,
      // 别名，访问/index也会跳转这个组件
      alias: '/index'
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
    },
    // 不存在的页面重定向到home页
    {
      path: '*',
      // redirect: '/home'
      // redirect: {path: '/home'}
      // redirect: {name: 'Home'}
      redirect: (to) => {
        // to -- 目标路由对象，访问路径的路由信息
        console.log(to)
        return '/home'
      }
    }
  ]
})
