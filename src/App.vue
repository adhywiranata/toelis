<template>
  <Header title="Toelis" />
  <div class="router-wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.router-wrapper {
  padding-top: 70px;
}
</style>

<script>
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      appName: 'Toelis',
    }
  }
}
</script>
