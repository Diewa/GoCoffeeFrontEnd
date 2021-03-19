<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <CoffeeList/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CoffeeList from "./components/CoffeeList";

export default {
  name: 'App',
  components: {
    HelloWorld,
    CoffeeList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
