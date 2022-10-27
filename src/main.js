import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import xss from 'xss'

// 使用global.css这个样式
import '@/assets/css/global.css'
// bootstrap的使用
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// 配置全局自定义设置
import settings from '@/assets/js/settings'
// axios的配置
import axios from 'axios'
// elementui的配置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// vue-cookie的配置
import cookies from 'vue-cookies'
Vue.prototype.$xss = xss

Vue.prototype.$settings = settings
// 在所有需要与后台交互的组件中：this.$settings.base_url + '再拼接具体后台路由'
Vue.prototype.$axios = axios
// this.$axios.get()
Vue.prototype.$cookies = cookies
// this.$cookie

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
