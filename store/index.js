export const state = () => ({
  token: null
})

export const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  clearToken: (state) => {
    state.token = null
  },
}

export const actions = {
  nuxtServerInit() {
    console.log('Server started')
  },
  login({commit}) {
    commit('setToken', 'true-token')
  },
  logout({commit}) {
    commit('clearToken')
  },
}

export const getters = {
  hasToken: state => !!state.token
}
