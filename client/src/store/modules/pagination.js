import Vue from 'vue'

export default {
  state: {
    getList: {
      data: [],
      meta: {
        record_count: 0,
        page_count: 0,
        page_limit: 0
      }
    }
  },
  mutations: {
    updateList (state, data) {
      state.getList = data
    }
  },
  actions: {
    clearRegistries (context) {
      context.commit('updateList', [])
    },
    getRegistries (context, config) {
      if (!config) {
        console.error('Nenhuma configuração de paginação foi enviada')
      }
      if (!config.resource) {
        console.error('Por favor, informe o resource a ser lido na API')
      }
      if (!config.page) {
        config.page = 1
      }
      if (!config.limit) {
        config.limit = 20
      }

      Vue.http.get('api/v1/' + config.resource + '?limit=' + config.limit + '&page=' + config.page)
        .then(response => {
          context.commit('updateList', response.data)
        })
    }
  }
}
