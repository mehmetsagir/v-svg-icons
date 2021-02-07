import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    githubRepo: "https://github.com/mehmetsagir/v-svg-icons",
    baseURL: "https://v-svg-icons-server.herokuapp.com",
    iconList: [],
    version: "",
    iconIsLoad: false,
    pageLoader: true
  },
  mutations: {
    initIconList(state, iconList){
      state.iconList = iconList;
      state.iconIsLoad = true;
    },
    initVersion(state, version){
      state.version = version;
    }
  },
  actions: {
      async fetchIcons(context){
      await Axios.get(context.state.baseURL).then(res => {
        context.commit('initIconList', res.data.reverse());
      }).catch(err => {
        console.log(err);
        context.state.pageLoader = true;
      })
    },
    fetchVersion(context){
      Axios.get( context.state.baseURL + '/version/').then(res => {
        context.commit('initVersion', res.data[0])
      }).catch(err => {
        console.log(err)
        context.state.pageLoader = true
      })
    }
  },
  getters: {
    countIcons(state) {
      return state.iconList.length;
    },
    getIcons(state){
      if(state.iconList.length > 0){
        state.pageLoader = false;
        return state.iconList
      }
    }
  }
});
