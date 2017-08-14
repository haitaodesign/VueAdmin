// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView  from 'iview'
import 'iview/dist/styles/iview.css'
import  Cookies from './utils/auth.js'

Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch:{
    '$route':'checkLogin'
  },
  methods:{
    checkLogin(){
      if(Cookies.getCookieValue('isLogin')){
        this.$router.push('/');
      }else{
        this.$router.push('/login');
      }
    }
  }
})
