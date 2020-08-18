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
    <div>
      <button class="theme-toggler"><i class="icon icon-sun"></i></button>
      <!-- <button class="theme-toggler"><i class="icon icon-moon"></i></button> -->
    </div>
  </header>
</template>

<style scoped>
  header {
    background: #2a9d8f;
    color: white;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .theme-toggler {
    font-size: 2rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  .theme-toggler > i {
    transition: 0.5s;
  }

  .theme-toggler:hover {
    background-color: rgba(0, 0, 0, .3);
  }

  .theme-toggler:hover > i {
    transition: 0.5s;
    transform: rotate(20deg);
    zoom: 1.2;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: white;
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