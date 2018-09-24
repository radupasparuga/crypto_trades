<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <table>
      <th>
        <tr class="firstRow size">Size </tr>
        <tr v-for="trade in trades">{{ trade.amount}}</tr>
      </th>
      <th>
        <tr class="firstRow price">Price </tr>
        <tr v-for="trade in trades">{{ trade.price }}</tr>
      </th>
      <th>
        <tr class="firstRow time">Time</tr>
        <tr v-for="trade in trades">{{ trade.datetime.slice(12, 19) }}</tr>
      </th>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'trades',
    data() {
      return {
        trades: [],
        msg: 'Trades'
      }
    },
    props: {
      selectedPair: ''
    },
    computed: {
      getTrades() {
          const ccxt = require('ccxt')
          const exchange = new ccxt.acx()
          const limit = 20
          const since = undefined
          let sign =  exchange.fetchTrades(this.selectedPair, since, limit)
          exchange.fetchTrades(this.selectedPair, since, limit).then(sign => this.trades = sign)
          return sign
      }
    },

  }

</script>

<style>
table {
  width: 100%;
  padding: 0px 40px 0px 40px;
}

.firstRow {
  border-bottom: 3px solid #000;
}

.size {
  text-align: left;
}

.price {
  text-align: center;
}

.time {
  text-align: right;
}
</style>
