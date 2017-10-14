<template>
  <div>
    关于
    test：{{test}}
    <hr>
    <ul class="nav">
      <!--<router-link to="/about" exact tag="li">-->
        <!--<a>study</a>-->
      <!--</router-link>-->
      <!--<router-link to="/about/work" tag="li">-->
        <!--<a>work</a>-->
      <!--</router-link>-->
      <!--<router-link to="/about/hobby" tag="li">-->
        <!--<a >hobby</a>-->
      <!--</router-link>-->
      <router-link :to="{name: 'About'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name: 'Work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name: 'Hobby'}" tag="li">
        <a >hobby</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>


</template>
<script>
  export default {
    data () {
      return {
        test: '改变前'
      }
    },
    beforeCreate () {
      // console.log('beforeCreate')
    },
    // 路由钩子在组件创建前执行
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
      // 这里this还没有值，组件还没创建
      console.log(this)
      // 使用回调，保证在组件创建后修改
      next((vm) => {
        vm.test = '改变后'
      })
    },
    // 当切换子路由时执行
    beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate')
      next()
    },
    // 离开时执行
    beforeRouteLeave (to, from, next) {
      console.log('befordRouteLeave')
      next()
    }
  }
</script>
<style>

</style>
