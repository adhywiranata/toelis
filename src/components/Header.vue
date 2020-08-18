<template>
  <header>
    <h1>{{ title }}</h1>
    <ul
      class="nav"
      v-for="navItem in navItems"
      v-bind:key="navItem.id"
    >
      <li>{{navItem.text}}</li>
    </ul>
  </header>
</template>

<style scoped>
  header {
    background: teal;
  }

  .nav {
    color: white;
    list-style-type: none;
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