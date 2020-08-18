<template>
  <Header title="toelis" />
  <PostList />
</template>

<script>
import Header from './components/Header.vue'
import PostList from './components/PostList.vue'

export default {
  name: 'App',
  components: {
    Header,
    PostList,
  },
  data() {
    return {
      appName: 'toelis',
    }
  }
}
</script>
