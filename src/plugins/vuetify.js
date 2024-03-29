import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: true,
		options: { customProperties: true },
		themes: {
			dark: {
				primary: {
					base: "#0871DB"
				}
			}
		},
	}
});
