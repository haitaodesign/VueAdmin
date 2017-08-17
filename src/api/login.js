// 通过封装axios和调用mock数据，统一管理api接口数据
import fetch from 'utils/axios.js'

export function login(username,password){
    const data = {
        username,
        password
    };
    return fetch({
        url:'/Login',
        method:'post',
        data
    });
}