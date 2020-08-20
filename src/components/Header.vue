<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul
        class="nav"
      >
        <li
          v-for="navItem in navItems"
          v-bind:key="navItem.id"
        >
          <router-link :to="{name: navItem.routeName}">
            {{navItem.text}}
          </router-link>
        </li>
      </ul>
      <div>
        <button v-if="getTheme === 'light'" class="theme-toggler" v-on:click="setDarkTheme"><i class="icon icon-sun"></i></button>
        <button v-if="getTheme === 'dark'" class="theme-toggler" v-on:click="setLightTheme"><i class="icon icon-moon"></i></button>
      </div>
    </nav>
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
    font-size: 1.5rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 50px;
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

  nav {
    display: flex;
    flex-direction: row;
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
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav a {
    padding: 10px 20px;
    font-size: 1.1rem;
    color: white;
    opacity: 0.7;
    border-right: 1px solid rgba(255, 255, 255, .3);
  }

  .nav a:last-child {
    border-right: 0;
  }

  .nav a:hover {
    opacity: 1;
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
        { id: 1, text: 'Home', routeName: 'home' },
        { id: 2, text: 'Toelisans', routeName: 'browse' },
        { id: 3, text: 'About Toelis', routeName: 'about' },
      ],
    }
  },
  mounted() {
    console.log('mounted?')
  },
  methods: {
    setLightTheme() {
      this.$store.dispatch('setThemeToLight')
    },
    setDarkTheme() {
      this.$store.dispatch('setThemeToDark')
    },
  },
  computed: {
    getTheme() {
      return this.$store.state.theme
    }
  },
}
</script>