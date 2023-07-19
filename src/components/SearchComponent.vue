<template>
<div>
  <div id="app">
    <input v-model="itemName" type="text" /><br />
    <button @click="addItem()">Add Item</button>
    <button @click="download('json.json', itemName)">Download JSON</button>
	{{itemName}}
  </div>
  <ul>
    <li v-for="item of items" :key="item.id">
      {{ item.en }}
    </li>
  </ul></div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      itemName: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/data`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async addItem() {
      const res = await axios.post(`http://localhost:3000/data`, {
        name: this.itemName,
      });
      this.items = [...this.items, res.data];
      this.itemName = "";
    },
	download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}
  },
};
</script>