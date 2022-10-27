<template>
  <div class="login">
    <div class="box">
      <i class="el-icon-close" @click="close_login"></i>
      <div class="content">
        <div class="nav">
                    <span :class="{active: login_method === 'is_pwd'}"
                          @click="change_login_method('is_pwd')">密码登录</span>
          <span :class="{active: login_method === 'is_sms'}"
                @click="change_login_method('is_sms')">短信登录</span>
        </div>
        <!--非手机号码登录-->
        <el-form v-if="login_method === 'is_pwd'">
          <el-input
            placeholder="用户名/手机号/邮箱"
            prefix-icon="el-icon-user"
            v-model="username"
            clearable>
          </el-input>
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-key"
            v-model="password"
            clearable
            show-password>
          </el-input>
          <el-button type="primary" @click="login_pwd">登录</el-button>
        </el-form>
        <!--手机号码登录-->
        <el-form v-if="login_method === 'is_sms'">
          <el-input
            placeholder="手机号"
            prefix-icon="el-icon-phone-outline"
            v-model="mobile"
            clearable
            @blur="check_mobile">
          </el-input>
          <el-input
            placeholder="验证码"
            prefix-icon="el-icon-chat-line-round"
            v-model="sms"
            clearable>
            <template slot="append">
              <span class="sms" @click="send_sms">{{ sms_interval }}</span>
            </template>
          </el-input>
          <el-button type="primary" @click="sms_login">登录</el-button>
        </el-form>
        <div class="foot">
          <span @click="go_register">立即注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      mobile: '',
      sms: '',
      login_method: 'is_pwd',
      sms_interval: '获取验证码',
      is_send: false
    }
  },
  methods: {
    // 关闭登录页面
    close_login () {
      this.$emit('close')
    },
    // 跳转注册
    go_register () {
      this.$emit('go')
    },
    // 改变登录方式
    change_login_method (method) {
      this.login_method = method
    },
    // 检查手机号码
    check_mobile () {
      if (!this.mobile) return
      if (!this.mobile.match(/^1[3-9][0-9]{9}$/)) {
        this.$message({
          message: '手机号有误',
          type: 'warning',
          duration: 1000,
          onClose: () => {
            this.mobile = ''
          }
        })
        return false
      }
      this.is_send = true
    },
    // 发送sms短信
    send_sms () {
      if (!this.is_send) return
      this.is_send = false
      // eslint-disable-next-line camelcase
      let sms_interval_time = 60
      this.sms_interval = '发送中...'
      const timer = setInterval(() => {
        // eslint-disable-next-line camelcase
        if (sms_interval_time <= 1) {
          clearInterval(timer)
          this.sms_interval = '获取验证码'
          this.is_send = true // 重新回复点击发送功能的条件
        } else {
          // eslint-disable-next-line camelcase
          sms_interval_time -= 1
          // eslint-disable-next-line camelcase
          this.sms_interval = `${sms_interval_time}秒后再发`
        }
      }, 1000)
      // 发送短信
      this.$axios.get(this.$settings.base_url + '/user/send_sms_code/?mobile=' + this.mobile)
    },
    // 密码登录事件
    login_pwd () {
      // 向后端发送ajax请求（axios）
      this.$axios.post(this.$settings.base_url + '/user/login/', {
        username: this.username,
        password: this.password
      }).then(item => {
        // eslint-disable-next-line eqeqeq
        if (item.data.status === 0) {
          // 存cookie
          // 持久化存储val的值到cookie中
          // this.$cookies.set('val', this.val, 300)
          // 获取cookie中val字段值
          // this.$cookies.get('val')
          // 删除cookie键值对
          // this.$cookies.remove('val')
          // 过期时间按s计时
          // this.$cookies.set('username', item.data.data.username, '7d')
          // this.$cookies.set('token', item.data.data.token, '7d')
          // this.$cookies.set('icon', item.data.data.icon, '7d')
          // this.$cookies.set('id', item.data.id, '7d')
          this.set_cookies(item)
          // this.$emit('close')
          this.close_login() // 关闭模态框
        } else {
          this.$message({
            message: item.data.msg,
            type: 'error',
            duration: 1000,
            onClose: () => {
              // 提示信息关闭以后，情况提示框
              this.password = ''
              this.username = ''
            }
          })
        }
      })
    },
    // sms登录
    sms_login () {
      this.$axios.post(this.$settings.base_url + '/user/code_login/', {
        mobile: this.mobile,
        code: this.sms
      }).then(
        item => {
          if (item.data.status === 0) {
            this.set_cookies(item)
            this.close_login()
          } else {
            this.$message({
              message: item.data.msg,
              type: 'error',
              duration: 1000,
              onClose: () => {
                // 提示信息关闭以后，情况提示框
                this.sms = ''
                this.mobile = ''
              }
            })
          }
        }
      )
    },
    // 存入cookies
    set_cookies (item) {
      this.$cookies.set('username', item.data.data.username, '7d')
      this.$cookies.set('token', item.data.data.token, '7d')
      this.$cookies.set('icon', item.data.data.icon, '7d')
      this.$cookies.set('id', item.data.id, '7d')
    }
  }
}
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
}

.box {
  width: 400px;
  height: 420px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  top: calc(50vh - 210px);
  left: calc(50vw - 200px);
}

.el-icon-close {
  position: absolute;
  font-weight: bold;
  font-size: 20px;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.el-icon-close:hover {
  color: darkred;
}

.content {
  position: absolute;
  top: 40px;
  width: 280px;
  left: 60px;
}

.nav {
  font-size: 20px;
  height: 38px;
  border-bottom: 2px solid darkgrey;
}

.nav > span {
  margin: 0 20px 0 35px;
  color: darkgrey;
  user-select: none;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 2px solid darkgrey;
}

.nav > span.active {
  color: black;
  border-bottom: 3px solid black;
  padding-bottom: 9px;
}

.el-input, .el-button {
  margin-top: 40px;
}

.el-button {
  width: 100%;
  font-size: 18px;
}

.foot > span {
  float: right;
  margin-top: 20px;
  color: orange;
  cursor: pointer;
}

.sms {
  color: orange;
  cursor: pointer;
  display: inline-block;
  width: 70px;
  text-align: center;
  user-select: none;
}
</style>
