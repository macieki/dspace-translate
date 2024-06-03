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
          v-model="email"
          class="mb-2"
          label="Login"
					type="email"
					></v-text-field>

					<v-text-field
						v-model="password"
						label="Password"
						placeholder="Enter your password"
						type="password"
					></v-text-field>

					<br />

					<v-btn
						color="success"
						size="large"
						type="submit"
						variant="elevated"
						block
						@click="input"
					>
						Sign In
					</v-btn>

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
      <table-component :api="api" v-if="isAuth" :editMode="editMode" :god="god" :user="email"></table-component>
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
		//this.api = this.$config.API + "/data"
	},
  data: () => ({
		isAuth: false,
		isWelcome: true,
		editMode: false,
		god: false,
		//isAuth: true,
		//isWelcome: false,
		isPreloading: false,
		login: "",
		email: "",
		password: "",
	nowe: [],
	arr: [],
	api: "https://translations.dspace7.com/api/data"
  }),
	methods:{
		input(){
			if( 
				
			(this.email=="m.dykas" && this.password=="12412") ||
			(this.email=="j.buda" && this.password=="23456") ||
			(this.email=="d.jozefowski" && this.password=="67597") ||
			(this.email=="m.milosz" && this.password=="23674") ||
			(this.email=="m.kleban" && this.password=="09278") ||
			(this.email=="k.kubiak" && this.password=="96291") ||
			(this.email=="p.masalski" && this.password=="44673") ||
			(this.email=="d.slupisnki" && this.password=="97834") ||
			(this.email=="a.alesik" && this.password=="37337") ||
			(this.email=="m.iwaniszewski" && this.password=="11111")

			){				
 				this.editMode = true
				this.isWelcome = false
				this.isPreloading = true
				setTimeout(() => {
					this.isPreloading = false
					this.isAuth = true
					this.god = true
				}, 2000);
				
			}
			if(this.email=="demo" && this.password=="demo"){
				this.editMode = false
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