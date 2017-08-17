<template>
    <div class="login-layout">
        <Form ref="loginForm" :model="loginForm" :rules="loginRules"  class="login-form" inline>
            <h1 class="login-title">系统登录</h1>
            <Form-item prop="userName">
                <Input type="text" name="userName" v-model="loginForm.userName"  placeholder="Username" size="large">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="password">
                <Input type="password" name="password" v-model="loginForm.password" placeholder="Password" size="large">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item>
                <Button type="primary" size="large" @click="handleSubmit('loginForm')">登录</Button>
            </Form-item>
        </Form>  
    </div>
</template>
<script>
import Cookies from 'js-cookie'
import {mapActions} from 'vuex'
export default {
  data(){
      return{
          loginForm:{
              userName:'',
              password:''
          },
          loginRules:{
              userName:[
                  {required:true,message:'请填写用户名',trigger:'blur'}
                  ],
              password:[
                  {required:true,message:'请填写密码',trigger:'blue'},
                  {type:'string',min:6,message:'密码长度不能少于6位',trigger:'blue'}
              ]
          }
      }
  },
  methods:{
      ...mapActions([
        'Login'
      ]),
      handleSubmit(name){
          this.$refs[name].validate((valid)=>{
              if(valid){
                  //获取用户名和密码，发送请求登录
                  this.$Message.success('登录成功！');
                //   this.$store.state.isLogin=true;
                  this.$store.dispatch('Login');
                console.log(this.$store.state.user.isLogin);
                //   this.$store.dispatch('GetUserInfo');
                  Cookies.set('isLogin',true);
                  Cookies.set('userName','lihaitao');
                  this.$axios({
                      method:'post',
                      url:'/login',
                      data:{
                          userName:'lihaitao'
                      }
                  }).then(function(response){
                      console.log(response.data);
                  })
                  // 密码验证成功之后，路由重定向
                  this.$router.push('/');
              }else{
                  this.$Message.error('表单验证失败！');
              }
          })
      }
  }
}
</script>
<style scoped>
.login-layout{
    width: 100%;
    height: 100%;
    background-color: #495060;
}
.login-form{
    position: absolute;
    width: 525px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.login-title{
    color: #fff;
    font-size: 36px;
    margin-bottom: 20px;
}
</style>
