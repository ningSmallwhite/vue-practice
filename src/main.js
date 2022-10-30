import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Vue.config.silent = true //取消 Vue 所有的日志与警告。

//Vue.config.devtools = true //配置是否允许 vue-devtools 检查代码。

new Vue({
  data() {
    return {
      loading: false
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
