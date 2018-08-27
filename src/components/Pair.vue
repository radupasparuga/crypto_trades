<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <div class="container">
    <select v-model="selected" class="pairContainer">
      <option v-for="pair in pairs" class="pair">
        {{ pair.symbol }}
        <hr>
      </option>
    </select>
    </div>
  </div>
</template>

<script>
  const ccxt = require('ccxt')
  const exchanges = ccxt.exchanges;

  async function getMarkets() {
    let acx = new ccxt.acx()
    let markets = await acx.load_markets()
    return markets

  };
  let pairs = getMarkets()

  export default {
    name: 'pair',
    data() {
      return {
        pairs,
        msg: 'Pair',
        selected: ''

      }
    },
    mounted() {
      getMarkets().then(markets => this.pairs = markets)
    }
  }

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
select,
option {
  font-family: "Montserrat", sans-serif;
  color: #e8edf4;
  font-size: 1rem;
}

hr {
  border: 0;
  height: 1px;
  width: 75%;
  background: #e8edf4;
}
.container {
  text-align: center;
}
.pairContainer {
  background-color: #52489c;
  margin: auto;
  width: 60%;
  padding: 10px 2% 10px 2%;
  border: none;
  border-radius: 5px 5px 0 0;
}

.pair {
  background-color: #59c3c3;
  border: none;
  width: 100%;
  padding: 10px 0px 10px 0px;
  text-transform: capitalize;
  font-size: 1rem;
  text-align: center;
}
</style>

