<template>
  <div id="app">
    <golden-layout>
      <gl-component>
        <Exchange />
      </gl-component>
    </golden-layout>
    <golden-layout>
      <gl-component>
        <Pair />
      </gl-component>
    </golden-layout>
    <golden-layout>
      <gl-component>
        <Trades />
      </gl-component>
    </golden-layout>
  </div>
</template>

<script>
  import 'golden-layout/src/css/goldenlayout-dark-theme.css'
  import Exchange from './components/Exchange'
  import Pair from './components/Pair'
  import Trades from './components/Trades'
  export default {
    name: 'App',
    components: {
      Exchange,
      Pair,
      Trades
    }
  }

</script>

<style>
  html,
  body {
    margin: 0px;
    padding: 0px;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    min-height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
  }

</style>
