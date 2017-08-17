import Mock from 'mockjs'
import Login from './login/login.js'

Mock.mock('/login','post',Login.login);

export default Mock;