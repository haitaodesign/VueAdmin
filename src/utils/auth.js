import Cookie from 'js-cookie'

// 封装js-cookie的set、get、remove 功能


export default {
        getCookieValue:function(key){
            return Cookie.get(key);
        },
        setCookieValue:function(key,value,expires){
            return Cookie.set(key,value,expires);
        },
        removeCookieValue:function(key){
            return Cookie.remove(key);
        }
    };
