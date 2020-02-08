import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false


Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-vue-resource-4ea7f.firebaseio.com/'



new Vue({
  render: h => h(App),
}).$mount('#app')
