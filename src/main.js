import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import PostList from './components/PostList.vue'
import Browse from './components/Browse.vue'
import About from './components/About.vue'

import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'index', path: '/', component: PostList },
    { name: 'home', path: '/home', redirect: '/' },
    { name: 'about', path: '/about', component: About },
    { name: 'browse', path: '/browse', component: Browse },
  ],
})

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

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
  