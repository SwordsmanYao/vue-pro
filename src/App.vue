<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">

        <!--默认转换为 a 标签，设置 tag 可以转换为其他标签, 设置 event="mouseover" 表示鼠标移入时切换-->
        <!--绑定数据的方式-->
        <router-link :to="index" tag="li" event="mouseover">home</router-link>
        <li>
          <!--传入对象的方式-->
          <router-link :to="{path:'/document'}" event="mouseover">document</router-link>
        </li>
        <li>
          <router-link to="/about" event="mouseover">about</router-link>
        </li>
        <li></li>
      </ul>
    </div>
    <!--给路由视图设置class就是给每一个要渲染的组件设置-->
    <router-view class="center"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/home'
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
</style>
