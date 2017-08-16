import Vue from 'vue'
import Vueroute from 'vue-router';
import App from './App.vue'
import product from './Product.vue'
 Vue.use(Vueroute);

const routes=[
  {path:'/pro',component:product},
  {path:'/',component:App},
];
const router=new Vueroute({
routes,
})
new Vue({
  el: '#app',
  router,
 // render: h => h(App),

})
