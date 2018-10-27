<template>
  <div id="app">
      <Exchange />
      <Pair />
      <Trades />
  </div>
</template>

<script>
  import goldenLayout from 'vue-golden-layout'
  import glCol from 'vue-golden-layout'
  import Exchange from './components/Exchange'
  import Pair from './components/Pair'
  import Trades from './components/Trades'
  import store from './store/store'
  export default {
    name: 'App',
    store,
    components: {
      Exchange,
      Pair,
      Trades,
      goldenLayout,
      glCol,
    }
  }

</script>

<style>
  @import 'golden-layout/src/css/goldenlayout-light-theme.css';

  html,
  body {
    margin: 0px;
    padding: 0px;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    display: grid;
    grid-template-columns: auto auto auto;
    min-height: 100%;
  }

</style>
