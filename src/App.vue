<template>
  <Header title="toelis" />
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      appName: 'toelis',
    }
  }
}
</script>
