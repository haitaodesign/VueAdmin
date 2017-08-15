import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
import Cookies from 'js-cookie'

Vue.use(Vuex);

// const store = new Vuex.Store({
//     state:{
//         isLogin:false
//     },
//     mutations:{
//         add(state){
//             state.isLogin=true;
//         }
//     },
//     actions:{
//         add(context){
//             context.commit('add');
//         }
//     }

// });

const store = new Vuex.Store({
    state:{
        // 用户名
        userName:'',
        // 是否登录
        isLogin:Cookies.get('isLogin'),
        authList:[],
        cookieValue:''
    },
    mutations:{
        SET_USERNAME:(state,username)=>{
            state.userName = username;
        },
        SET_ISLOGIN:(state,isLogin)=>{
            state.isLogin = isLogin;
        },
        SET_AUTHLIST:(state,authList)=>{
            state.authList = authList;
        },
        SET_COOKIEVALUE:(state,cookieValue)=>{
            state.cookieValue = cookieValue;
        }

    },
    actions:{
        // 调用mutations里面的方法改变state状态，可以执行异步操作
        Login({commit,state}){
            commit('SET_ISLOGIN',true);
        },

        //获取用户信息
        GetUserInfo({commit,state}){
            commit('SET_USERNAME','lihaitao');
        }
    }
});


export default store;