require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('painel', require('./components/Painel.vue').default);
Vue.component('card', require('./components/Card.vue').default);

const app = new Vue({
    el: '#app',
});
