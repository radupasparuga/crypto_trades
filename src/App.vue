<template>
  <div id="app">
    <div id="exchange">
      <exchange></exchange>
    </div>
    <div id="pair">
      <pair></pair>
    </div>
    <div id="trades">
      <trades></trades>
    </div>
  </div>
</template>

<script>
import exchange from '@/components/Exchange';
import pair from '@/components/Pair';
import trades from '@/components/Trades';
const ccxt = require ('ccxt');

export default {
  name: 'App',
  components: { exchange, pair, trades },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
body{
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

#app{
  display: grid;
  grid-template-columns: 33vw 33vw 34vw;
  grid-template-rows: repeat(1, 100vh);
  
}

#exchange{
  background-color: #52489C;
}

#pair{
  background-color: #4062BB;
}

#trades{
  background-color: #59C3C3;
}

h1{
    text-align: center;
    color: #e8edf4;
}
</style>
