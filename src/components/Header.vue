<template>
   <div class="header">
        <div class="slogan">
            <p>哈哈哈哈哈 | 很高兴和你相遇</p>
        </div>
        <div class="nav">
            <ul class="left-part">
                <li class="logo">
                    <router-link to="/">
                        <img src="../assets/img/head-logo.png" alt="">
                    </router-link>
                </li>
                <li class="ele">
                    <span @click="goPage('/')" :class="{active: url_path === '/'}">首页</span>
                </li>
               <li class="ele">
                    <span @click="goPage('/international-travel')" :class="{active: url_path === '/international-travel'}">国际旅行</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/long-trip')" :class="{active: url_path === '/long-trip'}">长途旅行</span>
                </li>
              <li class="ele">
                    <span @click="goPage('/short-trip')" :class="{active: url_path === '/short-trip'}">短途旅行</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/super-weekend')" :class="{active: url_path === '/super_weekend'}">超级周末</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/about-us')" :class="{active: url_path === '/about-us'}">我们</span>
                </li>
            </ul>

      <div class="right-part">
        <div v-if="username">
          <span>{{username}}</span>|
          <span @click="logout">注销</span>
        </div>
        <div v-else>
          <span @click="put_login">登录</span>|
          <span @click="put_register">注册</span>
          <Login v-if="is_login" @close="close_login" @go="put_register"/>
          <Register v-if="is_register" @close="close_register" @go="put_login"/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Login from './Login'
import Register from './Register'

export default {
  name: 'Header',
  data () {
    return {
      // sessionStorage中有url_path就使用它，没有就是 /
      url_path: sessionStorage.url_path || '/',
      is_login: false,
      is_register: false,
      username: ''
    }
  },
  methods: {
    // eslint-disable-next-line camelcase
    goPage (url_path) {
      // 已经是当前路由就没有必要重新跳转
      // eslint-disable-next-line camelcase
      if (this.url_path !== url_path) {
        // js控制路由跳转
        this.$router.push(url_path)
      }
      // 把当前路径加入到了sessionStorage
      // eslint-disable-next-line camelcase
      sessionStorage.url_path = url_path
    },
    put_login () {
      this.is_login = true
      this.is_register = false
    },
    put_register () {
      this.is_login = false
      this.is_register = true
    },
    close_login () {
      this.is_login = false
      this.username = this.$cookies.get('username')
    },
    close_register () {
      this.is_register = false
    },
    logout () {
      // 清空cookie
      this.$cookies.remove('username')
      this.$cookies.remove('token')
      this.$cookies.remove('icon')
      this.$cookies.remove('id')
      // 清空username
      this.username = ''
    }
  },
  created () {
    this.username = this.$cookies.get('username')
  },
  components: {
    Login,
    Register
  }
}
</script>

<style scoped>
  .header {
    background-color: #ad0711;
    box-shadow: 0 0 5px 0 #aaa;
  }

  .header:after {
    content: "";
    display: block;
    clear: both;
  }

  .slogan {
    background-color: #ad0711;
    height: 40px;
  }

  .slogan p {
    width: 1200px;
    margin: 0 auto;
    color: #aaa;
    font-size: 13px;
    line-height: 40px;
  }

  .nav {
    background-color: #ad0711;
    user-select: none;
    width: 1200px;
    margin: 0 auto;

  }

  .nav ul {
    padding: 15px 0;
    float: left;
  }

  .nav ul:after {
    clear: both;
    content: '';
    display: block;
  }

  .nav ul li {
    float: left;
  }

  .logo {
    margin-right: 20px;
  }

  .ele {
    margin: 0 20px;
  }

  .ele span {
    display: block;
    font: 15px/36px '微软雅黑';
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  .ele span:hover {
    border-bottom-color: orange;
  }

  .ele span.active {
    color: orange;
    border-bottom-color: orange;
  }

  .right-part {
    float: right;
  }

  .right-part .line {
    margin: 0 10px;
  }

  .right-part span {
    line-height: 68px;
    cursor: pointer;
  }
</style>
