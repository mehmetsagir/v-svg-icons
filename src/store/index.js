import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    githubRepo: 'https://github.com/mehmetsagir/v-svg-icons',
    baseURL: 'https://v-svg-icons-server.herokuapp.com',
    iconList: [],
    version: '',
    iconIsLoad: false,
    pageLoader: true
  },
  mutations: {
    initIconList(state, iconList) {
      state.iconList = iconList
      state.iconIsLoad = true
      state.pageLoader = false
    },
    initVersion(state, version) {
      state.version = version
    }
  },
  actions: {
    async fetchIcons(context) {
      const response = await Axios.get(context.state.baseURL)
      context.commit('initIconList', response.data.reverse())
    },
    async fetchVersion(context) {
      const response = await Axios.get(context.state.baseURL + '/version/')
      context.commit('initVersion', response.data[0])
    }
  },
  getters: {
    countIcons(state) {
      return state.iconList.length
    }
  }
})
