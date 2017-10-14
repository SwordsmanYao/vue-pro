<template>
  <div>
    user
    <div class="userList">

      <router-link :to="{path: '/user/' + item.id, query: {info: 'follow'}}" v-for="item,index in userList" :key="index">{{item.userName}}</router-link>
      <!--多个参数的例子-->
      <!--<router-link :to="'/user/' + item.type + '/' + item.id" v-for="item,index in userList" :key="index">{{item.userName}}</router-link>-->
    </div>
    <div class="user-info" v-if="userInfo.userName">
      <p>姓名：{{userInfo.userName}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
    <div v-if="userInfo.userName" class="info-list">
      <!--相对于当前路由的 query 字符串传参-->
      <!--参数可以通过 $route.query 获取-->
      <!--<router-link exact to="?info=follow">他的关注</router-link>-->
      <!--<router-link exact to="?share">他的分享</router-link>-->
      <router-link exact :to="{path: '', query: {info: 'follow'}}">他的关注</router-link>
      <router-link exact :to="{path: '', query: {info: 'share'}}">他的分享</router-link>
      <div>{{$route.query.info}}</div>
    </div>
  </div>
</template>

<script>
  let data = [
    {
      id: 1,
      type: 'vip',
      userName: 'leo1',
      sex: '男',
      hobby: '写代码'
    },
    {
      id: 2,
      type: 'vip',
      userName: 'leo2',
      sex: '男',
      hobby: '唱歌'
    },
    {
      id: 3,
      type: 'common',
      userName: 'leo3',
      sex: '男',
      hobby: '读书'
    }
  ]
  export default {
    data () {
      return {
        userList: data,
        userInfo: {}
      }
    },
    // 组件生成时调用一次
    created () {
      this.loadUserInfo()
    },
    watch: {
      // 如果 $route 发生变化，这个函数就会运行
      $route () {
        this.loadUserInfo()
      }
    },
    methods: {
      loadUserInfo () {
        let id = this.$route.params.UserID
        // console.log(this.$router) // router实例对象
        // console.log(this.$route) // 路由信息对象
        // console.log(this.$route.params.UserID) // 路由中传过来的id
        if (id) {
          this.userInfo = this.userList.filter((item) => {
            return item.id == id
          })[0]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
