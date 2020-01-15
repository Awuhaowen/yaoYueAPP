import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		tz: false,
	},

	mutations: {
		qx(state) {
			state.tz = true
		}
	},

	actions: {}
})

export default store
