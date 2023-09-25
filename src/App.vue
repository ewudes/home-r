<template>
  <Home />
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  @import './assets/fonts/fira/fira.css';
  /* @import './assets/fonts/proxima-nova/'; */

  html {
    height: 100%;
  }

  body {
    height: 100%;
    background: url(./assets/img/pattern.png) repeat;
    font: normal 1em 'fira_sanslight';
    color: #4a545d;
  }
</style>
