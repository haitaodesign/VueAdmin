// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView  from 'iview'
import 'iview/dist/styles/iview.css'
import  Cookies from 'js-cookie'
import store from './store'

Vue.use(iView);
Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
//   store.dispatch('Login');
//   console.log(store.state.isLogin);
//   if(store.state.isLogin){
//   }
//   next();
// });



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created(){
    this.checkLogin();
  },
  template: '<App/>',
  components: { App },
  methods:{
    checkLogin(){
      console.log(Cookies.get('isLogin'));
      if(Cookies.get('isLogin')){
        this.$router.push('/')
      }else{
        this.$router.push('/Login');
      }
    }
  }
})
