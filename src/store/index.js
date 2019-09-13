import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import product from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    product
  }
});