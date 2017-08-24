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
        token.replace(/"/i, '')
        request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUwMTg2NTY5Mn0.-YGpTQ_oA_HwnVqjdrUZlRo--sL72_Id0nl_vBOqZ9c')
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
