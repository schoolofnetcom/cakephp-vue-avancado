import Vue from 'vue'

export default {
  setToken: function (router) {
    Vue.http.interceptors.push((request, next) => {
      let token = localStorage['token'] || null
      next()
      if (token) {
        request.headers.set('Authorization', 'Bearer ' + token)
      } else {
        router.push('/login')
      }
    })
    Vue.http.interceptors.push((request, next) => {
      let token = localStorage['token'] || null
      if (token !== null) {
        token = token.replace(/^"|"$/g, '')
        request.headers.set('Authorization', 'Bearer ' + token)
        next(res => {
          if (res.status === 0 || res.status === 401) {
            router.push('/login')
          }
        })
      } else {
        next()
      }
    })
  }
}
