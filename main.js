import Vue from 'vue'
import App from './App'
import header from "./pages/header/header"
import Popup from "./pages/Popup/Popup"
import yaoQing from './common/yaoQing/yaoQing'

import store from "./store"

import inputSearch from './components/p-inputSearch/inputSearch.vue'

Vue.component('inputSearch', inputSearch)
Vue.prototype.$store = store

Vue.config.productionTip = false

Vue.component("myHeader", header)
Vue.component("myPopup", Popup)
Vue.component('yaoQing', yaoQing)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
