import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import './assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
import './utils/rem'
import 'swiper/dist/css/swiper.min.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import Tabs from '@/components/Tabs'
import ProductList from '@/components/ProductList'
import Tags from '@/components/Tags'
import FilterBar from '@/components/FilterBar'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component('Tabs', Tabs)
Vue.component('ProductList', ProductList)
Vue.component('Tags', Tags)
Vue.component('FilterBar', FilterBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
