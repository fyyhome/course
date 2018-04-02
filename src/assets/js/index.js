import Miracle from 'incu-webview'
import axios from 'axios'

const instance = axios.create({
  baseURL:'https://api.ncuos.com/api/',
  timeout:5000
})

//根据token获取学生基本信息
const getUser = (token) => {
  return instance.get('/user/profile/basic',{
    headers:{
      'Authorization':'passport ' + token
    }
  }).then((res) => {
    return res
  })
}

//获取app端的数据，从里面拿token
function getAppData(cb){
  if(Miracle.isApp()){
    Miracle.onAppReady(() => {
      cb(Miracle.getData())
    })
  }
}


//根据学号获取选课数据
const getCourse = (username) => {
  return instance.post('http://101.37.24.80:8949/erke',{
    xh:username
  }).then((res) => {
    return res
  }).catch((error) => {
    console.log(error)
  })
}

export default {
  getUser,
  getCourse,
  getAppData
}