<template>
  <div>
    <div class="title">
      <h1 class="exchange">{{msg}}</h1>
    </div>
      <div class="searchContainer">
        <form action="" >
          <input type="text" class="searchBar" v-model="search">
        </form>
      </div>
      <div class="resultContainer">
        <ul>
          <li v-for="exchange in finalExchanges"><button class="resultBtn"  @click="returnExchange(exchange)"> {{exchange}} <hr></button></li>
        </ul>
      </div>
    </div>
</template>
<script>
  const ccxt = require ('ccxt')
  const exchanges = ccxt.exchanges; 
  let selectedExchange;

  export default {
    name: 'exchange',
    data () {
      return {
        exchanges,
        selectedExchange,
        msg: 'Exchange',
        search: ''
      }
    },
    computed: {
    finalExchanges() {
      return this.exchanges.filter(exchange => {
        return exchange.includes(this.search)
      })
    }
   },
   methods: {
     returnExchange(exchange){
       this.selectedExchange = exchange
       this.$emit('returnExchange', this.selectedExchange)
     },
   },
  }
  
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
input[type="text"] {
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  text-transform: capitalize;
  color: #e8edf4;
}
button {
  color: #e8edf4;
  font-family: "Montserrat", sans-serif;
}
button:hover {
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
hr {
  border: 0;
  height: 1px;
  width: 75%;
  background: #e8edf4;
}

.searchContainer {
  margin: auto;
  width: 60%;
}

.resultContainer {
  margin: auto;
  width: 60%;
  height: 80vh;
  overflow: scroll;
}

.searchBar {
  width: 96%;
  padding: 10px 2% 10px 2%;
  background-color: #4062bb;
  border: none;
  border-radius: 5px 5px 0 0;
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
