import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)



fetch(process.env.BASE_URL + "config.json")
.then((response) => response.json())
.then((config) => {
    Vue.prototype.$config = config
	console.log(config)
	Vue.prototype.$config = { API: "https://translations.dspace7.com/api"
}
	new Vue({
		vuetify,
		render: h => h(App)
	}).$mount('#app')
})


window.addEventListener('message', (e) => {
  if (e.data && typeof e.data === 'string' && e.data.match(/webpackHotUpdate/)) {
    console.log('hot reload happened')
    console.clear()
  }
})