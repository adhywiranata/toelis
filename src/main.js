import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import './index.css'

const store = createStore({
  state: {
    theme: 'light'
  },
  mutations: {
    setThemeToLight (state) {
      state.theme = 'light';
    },
    setThemeToDark (state) {
      state.theme = 'dark';
    },
  },
  actions: {
    setThemeToLight ({ commit }) {
      commit('setThemeToLight')
    },
    setThemeToDark ({ commit }) {
      commit('setThemeToDark')
    }
  }
})

createApp(App).use(store).mount('#app')
  