<template>
  <div id="app">
    <h1>Rounter</h1>
    <p>
      <router-link to="/A">Go to ComponentA</router-link>
      <router-link to="/B">Go to ComponentB</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
