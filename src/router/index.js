import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Document from '@/components/Document'
import About from '@/components/About'
import Hobby from '@/views/hobby'
import Study from '@/views/study'
import Work from '@/views/work'
import Slider from '@/components/Slider'
import User from '@/components/User'

Vue.use(Router)

let router = new Router({
  // 路由模式
  // history: http://localhost:8081/about
  // hash: http://localhost:8081/#/about
  mode: 'history',
  // 设置被点击路由的class，如果不设置也可以用提供的 router-link-exact-active
  linkActiveClass: 'is-active',
  // 点击浏览器前进后退或切换导航触发
  scrollBehavior (to, from, savePosition) {
    // 要进入的目标路由对象 要去向哪里
    // console.log(to)
    // 离开的路由对象 从哪里来
    // console.log(from)
    // 记录目标路由滚动条坐标，点击前进后退的时候记录值
    // console.log(savePosition)

    // 前进后退时回到之前的滚动位置
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }

    // 当访问路径为 http://localhost:8081/document#abc 时 会显示id为 abc 的元素位置
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  },
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        index: 0,
        title: 'home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // 别名，访问/index也会跳转这个组件
      alias: '/index'
    },
    {
      path: '/document',
      name: 'Document',
      // 进入指定路由前的钩子函数
      beforeEnter (to, from, next) {
        console.log('beforeEnter')
        next()
      },
      components: {
        default: Document, // 默认组件 对应App.vue中没有起名字的那个router-view
        slider: Slider  // 匹配 name 为 'slider' 的 router-view
      },
      meta: {
        index: 1,
        login: true, // true 只有登陆后才能访问
        title: 'document'
      }
    },
    {
      path: '/about',
      // name: 'About', //如果有默认子路由的话，要将name属性放在子路由中
      component: About,
      // 子路由
      children: [
        {
          // 空路径为默认子路由
          path: '', // /about
          name: 'About',
          component: Study,
          meta: {
            index: 2,
            title: 'about'
          }
        },
        {
          path: 'hobby', // /about/hobby 相对于父路由
          // path: '/hobby', // /hobby 相对于根路径
          name: 'Hobby',
          component: Hobby
        },
        {
          path: 'work', // /about/work
          name: 'Work',
          component: Work
        }
      ]
    },
    {
      path: '/user/:UserID?', // 动态路径参数，路径如：http://localhost:8081/user/3 ，'?'表示UserID可以没有
      // path: '/user/:Type?/:UserID?', // 需要接收 Type 和 UserID 两个参数的时候 路径：http://localhost:8081/user/vip/3，此时 Type 接收到的参数值为 'vip'，普通参数最好不要用这种方式传，可以使用query字符串传参
      name: 'User',
      component: User,
      meta: {
        index: 3,
        title: 'user'
      }
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

// // 进入每个路由前的钩子函数
// router.beforeEach((to, from, next) => {
//   // 判断页面是否需要登录才能显示
//   if (to.meta.login) {
//     // 这里判断用户是否登录
//     // 如果没有登录跳转到登录页
//     next('/login')
//   } else {
//     next()
//   }
// })
//
// // 进入每个路由后的钩子函数
// router.afterEach((to, from) => {
//   if (to.meta.title) {
//     window.document.title = to.meta.title
//   } else {
//     window.document.title = 'system'
//   }
// })

export default router
