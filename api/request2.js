import store from "@/store"
const baseUrl = 'http://music.heblogs.cn/'; // 测试环境

let ajaxTimes = 0
export function request(info) {
  ajaxTimes++
  return new Promise((resolve, reject) => {
    let header = {}
    Object.assign(header, info.header, store.getters.authorization)
    uni.request({
      url: info.url.includes('http') ? info.url : `${baseUrl}${info.url}`,
      method: info.method,
      data: info.data,
      header: header,
      success: res => {
        if(res.statusCode!==200){
          uni.showToast({
            icon: 'none',
            title: '系统异常'
          })
        }else{
          res.data?resolve(res.data):resolve(res)
        }
      },
      fail: err => {
        uni.hideLoading()
        uni.clearStorage()
        uni.switchTab({
            url: '/pages/mine/mine'
        })
        uni.showToast({
          icon: 'none',
          title: '系统异常'
        })
        reject(err)
      },
    })
  })

}

const jsonHeader = {
  ContentType: 'application/json; charset=UTF-8'
}
const formHeader = {
  'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
}
export default {
  get(url, parmas) {
    const obj = {
      url: url,
      method: 'GET',
      data: parmas
    }
    return request(obj)
  },
  post(url, data) {
    const obj = {
      url: url,
      data: data,
      method: 'POST',
    }
    return request(obj)
  },
  postJSON(url, data) {
    const userInfo = uni.getStorageSync('userInfo') || null
    userInfo && (jsonHeader.token = userInfo.token)
    const obj = {
      url: url,
      data: data,
      method: 'POST',
      header: jsonHeader
    }
    return request(obj)
  },
  postForm(url, data) {
    const userInfo = uni.getStorageSync('userInfo') || null
    userInfo && (formHeader.token = userInfo.token)
    const obj = {
      url: url,
      data: data,
      method: 'POST',
      header: formHeader
    }
    return request(obj)
  }

}
