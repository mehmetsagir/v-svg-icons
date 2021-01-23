import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    githubRepo: "https://github.com/mehmetsagir/v-svg-icons",
    iconList: [],
    version: "",
  },
  mutations: {
    initIconList(state, iconList){
      state.iconList = iconList;
    },
    initVersion(state, version){
      state.version = version;
    }
  },
  actions: {
    fetchIcons(context){
      Axios.get('https://v-svg-icons-server.herokuapp.com/').then(res => {
        context.commit('initIconList', res.data.reverse())
      }).catch(err => {
        console.log(err)
      })
    },
    fetchVersion(context){
      Axios.get('https://v-svg-icons-server.herokuapp.com/version/').then(res => {
        context.commit('initVersion', res.data[0])
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {
    countIcons(state) {
      return state.iconList.length;
    }
  }
});
