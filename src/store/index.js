// import Vuex from 'vuex'
import { createStore } from 'vuex'
import {notesModule} from "@/store/Notes/Notes";


export default createStore({
  state: {},
  getters: {
    getNotes(state) {
      return state.notes
    },
    getTitle(state) {
      return state.title
    }
  },
  mutations: {},
  actions: {},
  modules: {notesModule}
})
