import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/common/Home'
import DashBoard from '@/components/page/DashBoard'
import CRUD from '@/components/page/demo1/CRUD'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },
        {
          path:'/DashBoard',
          component:DashBoard
        },
        {
          path:'/CRUD',
          component:CRUD
        }
      ]
    },
   {
     path:'*',
     component:Home
   }
  ]
})
