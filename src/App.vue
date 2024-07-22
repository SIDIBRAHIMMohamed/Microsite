<template>

  <div id="app">
    <navbar />
    <Banner />
    <router-view />
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Banner
  }
}
</script>

<style>
/* Ajouter des styles globaux ici */
nav {
  display: flex;
  gap: 1rem;
  background-color: #f8f9fa;
  padding: 1rem;
}
nav a {
  text-decoration: none;
  color: #007bff;
}
nav a:hover {
  text-decoration: underline;
}
</style>
