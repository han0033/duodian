import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})


export default {
  ...service,
  get (url, data = {}) {
    return service.get(url, {
      params: data
    })
  }
}