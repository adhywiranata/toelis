<template>
  <div class="wrapper">
    <div class="h-padded">
      <h1>My Posts</h1>
    </div>
    <input class="input__search" v-model="searchTerm" placeholder="Search Posts" />
    <div class="h-padded">
    <transition name="fade">
        <h2 v-if="searchTerm !== ''">
          Search Result for <span class="searchq">"{{ searchTerm }}"</span>
        </h2>
      </transition>
      <div v-if="filteredPosts.length === 0">
        <h3>Post not found.</h3>
        <button v-on:click="resetSearchTerm">reset search!</button>
      </div>
    </div>
      <ul>
        <li v-for="post in filteredPosts" v-bind:key="post.id" class="post__card">
          <span class="post__title">{{ post.title }}</span>
          <p class="post__content">{{ post.content }}</p>
        </li>
      </ul>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 30%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 80px;
    background-color: #f5f5f5;
    border-right: 1px solid #f5f5f5;
  }

  .h-padded {
    padding: 0 20px;
  }

  .input__search {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 10px 20px;
    font-size: 1rem;
    width: 100%;
    max-width: 400px;
    border: 0;
    border-bottom: 3px solid rgba(0, 0, 0, .1);
    outline: 0;
    background: transparent;
    margin-bottom: 20px;
  }
  
  .post__card {
    width: 100%;
    height: 300px;
    flex: 1;
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .post__title {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 600;
    color: #2a9d8f;
  }

  .post__content {
    margin-top: 5px;
    font-size: 1rem;
    line-height: 1.4rem;
    color: #264653;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .searchq {
    background-color: #e9c46a;
    color: white;
    padding-left: 5px;
    padding-top: 5px;
    margin-top: 10px;
  }

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  h1 {
    font-size: 2rem;
    margin: 10px 0;
    color: #e76f51;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 400;
  }

  button {
    border: 0;
    background: transparent;
    color: teal;
    font-size: 1.2rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    cursor: pointer;
    border-bottom: 2px solid teal;
    padding-bottom: 5px;
    opacity: 0.7;
  }

  button:hover {
    opacity: 1;
    transition: 0.5s opacity;
  }
</style>

<script>
export default {
  name: 'post-list',
  props: {},
  data() {
    return {
      searchTerm: '',
      posts: [
        {
          id: '1',
          title: 'Understanding Quantum Physics',
          content: 'quantum physics is a method of computation that...',
        },
        {
          id: '2',
          title: 'The Universe of 42',
          content: 'The key to understant the true meaning of life is to...',
        },
        {
          id: '3',
          title: 'Understanding Quantum Physics',
          content: 'quantum physics is a method of computation that...',
        },
        {
          id: '4',
          title: 'The Universe of 42',
          content: 'The key to understant the true meaning of life is to...',
        },
        {
          id: '5',
          title: 'Understanding Quantum Physics',
          content: 'quantum physics is a method of computation that...',
        },
        {
          id: '6',
          title: 'The Universe of 42',
          content: 'The key to understant the true meaning of life is to...',
        }
      ]
    }
  },
  methods: {
    resetSearchTerm() {
      this.searchTerm = '';
    },
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(p => p.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
  }
}
</script>