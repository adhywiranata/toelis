<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- <ul
      class="nav"
      v-for="navItem in navItems"
      v-bind:key="navItem.id"
    >
      <li>{{navItem.text}}</li>
    </ul> -->
  </header>
</template>

<style scoped>
  header {
    background: #2a9d8f;
    color: white;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  .nav {
    color: white;
    list-style-type: none;
    padding: 0;
  }
</style>

<script>
export default {
  name: 'app-header',
  props: {
    title: String,
  },
  data() {
    return {
      navItems: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
      ],
    }
  },
  mounted() {
    console.log('mounted?');
  }
}
</script>