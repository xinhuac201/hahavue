<template>
  <div class="register">
        <div class="box">
            <i class="el-icon-close" @click="close_register"></i>
            <div class="content">
                <div class="nav">
                    <span class="active">新用户注册</span>
                </div>
                <el-form>
                    <el-input
                            placeholder="手机号"
                            prefix-icon="el-icon-phone-outline"
                            v-model="mobile"
                            clearable
                            @blur="check_mobile">
                    </el-input>
                    <el-input
                            placeholder="密码"
                            prefix-icon="el-icon-key"
                            v-model="password"
                            clearable
                            show-password>
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
                    <el-button type="primary" @click="go_register">注册</el-button>
                </el-form>
                <div class="foot">
                    <span @click="go_login">立即登录</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      mobile: '',
      password: '',
      sms: '',
      sms_interval: '获取验证码',
      is_send: false
    }
  },
  methods: {
    close_register () {
      this.$emit('close', false)
    },
    go_login () {
      this.$emit('go')
    },
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
      // 校验手机号是否注册过了
      this.$axios.get(this.$settings.base_url + '/user/check_mobile/?mobile=' + this.mobile).then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.data.status === 1) {
          // 可以正常注册
          this.$message({
            message: '手机号可以正常注册',
            type: 'warning',
            duration: 1000
          })
          this.is_send = true
        } else {
          this.$message({
            message: res.data.msg,
            type: 'warning',
            duration: 1000,
            onClose: () => {
              this.mobile = ''
            }
          })
        }
      })
    },
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
      // 发送验证码
      this.$axios.get(this.$settings.base_url + '/user/send_code/?mobile=' + this.mobile).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'info',
          duration: 1000
        })
      })
    },
    go_register () {
      this.$axios.post(this.$settings.base_url + '/user/register/', {
        mobile: this.mobile,
        code: this.sms,
        password: this.password
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'info',
          duration: 1000
        })
        // eslint-disable-next-line eqeqeq
        if (res.data.status == 0) {
          // 跳转到登录
          this.go_login()
        }
      })
    }

  }
}
</script>

<style scoped>
  .register {
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
        height: 480px;
        background-color: white;
        border-radius: 10px;
        position: relative;
        top: calc(50vh - 240px);
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
        margin-left: 90px;
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
