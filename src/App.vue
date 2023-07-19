<template>
  <v-app dark>
    <v-main dark>
			<v-container v-if="isWelcome" class="h100 h-100 align-center d-flex">
			  <v-card
					class="mx-auto px-4"
					max-width="344"
				>
				  <v-card-title>
						DSpace Tłumacz
					</v-card-title>
					<v-card-text>
					<v-text-field
						label="Zaloguj"
						v-model="login"
						@input="input"
					>
					</v-text-field>
					</v-card-text>
				</v-card>
			</v-container>
			<v-container v-if="isPreloading" class="h100 h-100 align-center d-flex justify-center">
				<div>
					    <v-progress-circular
							indeterminate
							color="primary"
						></v-progress-circular>
				</div>
			</v-container>
      <table-component :api="api" v-if="isAuth"></table-component>
	  <div id="aa"></div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import SearchComponent from './components/SearchComponent';
import TableComponent from './components/TableComponent';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    SearchComponent,
    TableComponent
  },
	created() {
		this.api = this.$config.API + "/data"
	},
  data: () => ({
		isAuth: false,
		isWelcome: true,
		//isAuth: true,
		//isWelcome: false,
		isPreloading: false,
		login: "",
	nowe: [],
	arr: [],
	api: "https://translations.dspace7.com/api/data"
  }),
	methods:{
		input(){
			if(this.login=="trobriandy"){
				this.isWelcome = false
				this.isPreloading = true
				setTimeout(() => {
					this.isPreloading = false
					this.isAuth = true
				}, 2000);
			}
		}
	}
};
</script>
<style>
	#app{
		background: black;
	}
	.h100{
		height: 100%;
	}
</style>