<template>
  <v-app dark>
    <v-main dark>
      <table-component :api="api"></table-component>
	  <div id="aa"></div>
    </v-main>
  </v-app>
</template>

<script>
import TestComponent from './components/TestComponent';
import TableComponent from './components/TableComponent';

export default {
  name: 'App',

  components: {
    TestComponent,
    TableComponent
  },
	created() {
		this.api = this.$config.API + "/data"
	},
  data: () => ({
	nowe: [],
	arr: [],
	api: "http://localhost:3300/data"
  }),
};
</script>
<style>
	#app{
		background: black;
	}
</style>