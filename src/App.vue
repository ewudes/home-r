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

  .image-wrap {
    float: left;
    margin-left: 55px;
    margin-top: 18px;
  }

  .worksheet-wrap {
    float: right;
    width: 400px;
  }

  .worksheet-list {
    list-style: none;
    padding: 0;
  }

  .worksheet-item {
    padding: 3px 0;
  }

  .worksheet-what,
  .worksheet-info {
    display: inline-block;
  }

  .worksheet-what {
    margin-right: 20px;
    font-weight: bold;
    float: left;
  }

  .skills {
    width: 200px;
  }

  .skills-list {
    list-style: none;
    padding: 0;
    float: right;
  }

  .skill-item {
    display: inline-block;
    background: linear-gradient(
      180deg,
      rgba(59, 168, 192, 1) 50%,
      rgba(46, 140, 162, 1) 50%
    );
    color: #ffffff;
    font-size: 12px;
    padding: 3px 10px;
    margin-bottom: 5px;
    border-radius: 3px;
  }

  .experiment {
    margin-bottom: 25px;
    padding-left: 125px;
    background-image: url('./assets/img/exp.png');
    background-repeat: no-repeat;
    background-position: 60px center;
  }

  .experiment-title {
    margin: 0;
  }

  .education {
    margin-bottom: 25px;
    padding-left: 125px;
    background-image: url('./assets/img/edu.png');
    background-repeat: no-repeat;
    background-position: 60px center;
  }

  .education-title {
    margin: 0;
  }
</style>
