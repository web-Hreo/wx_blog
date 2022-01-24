import request from './request2.js'


//私人FM
export const personal_fm = data => {
  return request.get(`/personal_fm`, data)
}
//推荐新音乐
export const getNewsong = data => {
  return request.get(`/personalized/newsong`, data)
}
//推荐歌单
export const getPersonalized = data => {
  return request.get(`/personalized`, data)
}
//获取歌曲详情
export const getSongDetail = data => {
  return request.get(`song/detail`, data)
}
// 获取音乐 url
export const getSongUrl = data => {
  return request.get(`/song/url`, data)
}



