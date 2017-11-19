import Vue from 'vue';

Vue.filter('currency', value => {
  return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`
});

