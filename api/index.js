import request from './request.js'


//获取tab标签
export const getTag = data => {
  return request.get(`/tags/all`, data)
}
//获取全部文章
export const getArticleAll = data => {
  return request.get(`/article/all`, data)
}
//获取文章详情
export const getArticleById = data => {
  return request.get(`/article/byId`, data)
}


