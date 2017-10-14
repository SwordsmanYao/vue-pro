<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">

        <!--默认转换为 a 标签，设置 tag 可以转换为其他标签, 设置 event="mouseover" 表示鼠标移入时切换-->
        <!--exact 精确匹配-->
        <!--绑定数据的方式-->
        <router-link :to="index" exact tag="li" event="mouseover">home</router-link>
        <li>
          <!--传入对象的方式-->
          <router-link :to="{path:'/document'}" event="mouseover">document</router-link>
        </li>
        <li>
          <router-link to="/about" event="mouseover">about</router-link>
        </li>
        <li>
          <router-link to="/user" event="mouseover">user</router-link>
        </li>
      </ul>
    </div>

    <!--<router-view name="slider"/>-->

    <!--过度动画组件，mode设置先入后出还是先出后入-->
    <!--<transition mode="out-in">-->
      <!--&lt;!&ndash;给路由视图设置class就是给每一个要渲染的组件设置&ndash;&gt;-->
      <!--&lt;!&ndash;<router-view class="center"/>&ndash;&gt;-->
      <!--<router-view class="center"/>-->
    <!--</transition>-->

    <!--<transition name="right">-->
      <!--&lt;!&ndash;给路由视图设置class就是给每一个要渲染的组件设置&ndash;&gt;-->
      <!--&lt;!&ndash;<router-view class="center"/>&ndash;&gt;-->
      <!--<router-view class="center"/>-->
    <!--</transition>-->

    <button @click="gobackHandle">后退</button>
    <button @click="forwardHandle">前进</button>
    <button @click="goAnyHandle(2)">前进2</button>
    <button @click="goAnyHandle(-2)">后退2</button>
    <button @click="pushDucumentHandle">pushDucumentHandle</button>
    <button @click="replaceDocumentHandle">replaceDocumentHandle</button>
    <transition :name="transitionName">
      <!--给路由视图设置class就是给每一个要渲染的组件设置-->
      <!--<router-view class="center"/>-->
      <router-view class="center"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
//      console.log(to)
//      console.log(from)

      if (to.meta.index > from.meta.index) {
        this.transitionName = 'left'
      } else {
        this.transitionName = 'right'
      }
    }
  },
  data () {
    return {
      index: '/',
      transitionName: 'left'
    }
  },
  methods: {
    gobackHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goAnyHandle (value) {
      this.$router.go(value)
    },
    pushDucumentHandle () {
      // this.$router.push('/document')
      this.$router.push({path: '/document'})
    },
    replaceDocumentHandle () {
      this.$router.replace('/document')
    }

  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /*过度动画组件，其中 v 可以改为任何名称，eg:left-enter*/
  .v-enter {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-enter-active {
    transition: 1s;
  }
  .v-leave {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
  .v-leave-active {
    transition: 1s;
  }

  .left-enter {
       transform: translateX(100%);
     }
  .left-enter-to {
    transform: translateX(0);
  }
  .left-enter-active {
    transition: 1s;
  }
  .left-leave {
    transform: translateX(0);
  }
  .left-leave-to {
    transform: translateX(-100%);
  }
  .left-leave-active {
    transition: 1s;
  }

  .right-enter {
    transform: translateX(-100%);
  }
  .right-enter-to {
    transform: translateX(0);
  }
  .right-enter-active {
    transition: 1s;
  }
  .right-leave {
    transform: translateX(0);
  }
  .right-leave-to {
    transform: translateX(100%);
  }
  .right-leave-active {
    transition: 1s;
  }
</style>
