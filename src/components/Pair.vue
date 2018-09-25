<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <div class="container resultContainer">
      <ul >
        <li v-for="pair in pairs">
          <button @click="returnPair(pair.symbol)" class="resultBtn">
          {{ pair.symbol }}
          <hr>
          </button>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pair',
    data() {
      return {
        pairs: [],
        msg: 'Pair',
        selected: '',
      }
    },
    props: {
      selectedExchange: {}
    },
    computed: {
      getMarkets() {
        (async () => {
          const ccxt = require('ccxt')
          const exchanges = ccxt.exchanges;
          let marketPair = new ccxt[this.selectedExchange]()
          let markets = await marketPair.load_markets()
          marketPair.load_markets().then(markets => this.pairs = markets)
          return markets
        })();
      }
    },
    methods: {
      returnPair(pair) {
        this.selectedPair = pair
        this.$emit('returnPair', this.selectedPair)
        console.log(this.selectedPair)
      },
    },
    mounted() {
      this.getMarkets()
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
.resultBtn {
  background-color: #59c3c3;
  border: none;
  width: 100%;
  padding: 10px 0px 10px 0px;
  text-transform: capitalize;
  font-size: 1.25rem;
}
</style>
