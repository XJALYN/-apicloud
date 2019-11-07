import Vue from 'vue'
import App from './index'
import router from '../../router/index.app'
import VConsole from 'vconsole'              // 微信官网 手机上调试工具
// eslint-disable-next-line
const _console = new VConsole()
Vue.prototype.router = router

// eslint-disable-next-line no-new

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})



// window.apiready = function () {

// }

