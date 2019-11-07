import Vue from 'vue'
import App from './index'
import router from '../../router/index.app'
Vue.prototype.$router = router
// eslint-disable-next-line no-new
window.api.apiready = () => {
    new Vue({
        el: '#app',
        components: { App },
        template: '<App/>'
    })
}
