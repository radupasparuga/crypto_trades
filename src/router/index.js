import Vue from 'vue';
import Router from 'vue-router';
import exchange from '@/components/Exchange';
import pair from '@/components/Pair';
import trades from '@/components/Trades';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'exchange',
      component: exchange,
    },
    {
      path: '/',
      name: 'pair',
      component: pair,
    },
    {
      path: '/',
      name: 'trades',
      component: trades,
    },
  ],
});
