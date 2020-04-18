<template>
  <div id="app">
    <nav>
      <router-link to="/">目前成果</router-link>
      <router-link to="/e">範例檔</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  margin: 0.2em 1em;
  text-decoration: none;
}

.router-link-exact-active.router-link-active {
  font-size: 1.5em;
  color: blue !important;
}

@media screen and (min-width: 421px) {
  .thin-only {
    display: none !important;
  }
}

@media screen and (max-width: 420px) {
  .fat-only {
    display: none !important;
  }
}
</style>
