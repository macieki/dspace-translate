<template >
	<v-container fluid>
		<v-container fluid>
			<v-row align="center">
				<v-col class="search-bar">
					 <v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						label="Wyszukaj w tabeli"
						single-line
						outlined
						dense
						dark
					></v-text-field>
				</v-col>
			</v-row>
		</v-container>
		<v-data-table
			:headers="headers"
			:items="listAll"
			height="100%"
			:items-per-page="10"
			class="elevation-1"
			:custom-sort="customSort"
			:search="search"
			fixed-header
			dark
		>

	<template v-slot:top>
      <v-toolbar
      >
        <v-toolbar-title>tłumaczenia CRUD</v-toolbar-title>

        <v-spacer></v-spacer>
		<v-btn
		   color="secondary"
		   dark
		   class="mb-2"
		   @click="saveModal"
		 >
		   Pobierz
		 </v-btn>
        <v-dialog
          v-model="dialog"
          width="100%"
		  		max-width="1200px"
		  		dark
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nowy klucz
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="justify-space-between">
              <span class="text-h5">{{ formTitle }}</span>
              <span class="text-caption deep-orange--text text--lighten-2">{{alert}}</span>
            </v-card-title>

            <v-card-text >
              <v-container fluid>
				
                    <v-text-field
                      v-model="editedItem.id"
                      label="Klucz"
					 						:background-color="validationColor"
					  					color="white"
					  					:disabled="isKeyLabelDisabled"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.en"
                      label="English"
					  					color="white"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.pl"
                      label="Polski"
					  					color="white"
                    ></v-text-field>
									<v-row>
										<v-col cols="6">

										<v-checkbox dense class="ma-0"
											v-model="editedItem.dspace"
											label="DSpace"
											color="green"
										></v-checkbox>

										<v-checkbox dense class="ma-0"
											v-model="editedItem.cris"
											label="Cris"
											color="green"
										></v-checkbox>
										
										</v-col>
										<v-col cols="6">

										<v-checkbox dense class="ma-0"
											v-model="editedItem.pcg"
											label="PCG"
											color="green"
										></v-checkbox>

										<v-checkbox dense class="ma-0"
											v-model="editedItem.swps"
											label="SWPS"
											color="green"
										></v-checkbox>

										<v-checkbox dense class="ma-0"
											v-model="editedItem.asp"
											label="ASP"
											color="green"
										></v-checkbox>
										
										<v-checkbox dense class="ma-0"
											v-model="editedItem.uw"
											label="UW"
											color="green"
										></v-checkbox>

										</v-col>
									</v-row>

              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Anuluj
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Zapisz
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Na pewno chcesz usunąć ten klucz?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Anuluj</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
				<v-dialog v-model="dialogSave" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Pobierz JSON</v-card-title>
						<v-card-text >
							<v-container>
											Baza
											<div v-for="(baseItem, index) in downloads.base" :key="'A'+index">
												{{downloads.base[index].active}}
												<v-checkbox dense class="ma-0"
													v-model="downloads.base[index].active"
													:label="downloads.base[index].text"
													color="green"
													@click="click(index)"
												></v-checkbox>
											</div>
											Suplement
											<div v-for="(supplementItem, index) in downloads.supplement" :key="'B'+index">{{downloads.supplement[index].active}}
												<v-checkbox dense class="ma-0"
													v-model="downloads.supplement[index].active"
													:label="downloads.supplement[index].text"
													color="green"
												></v-checkbox>
											</div>
							</v-container>
						</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
									<v-btn
										color="secondary"
										dark
										class="mb-2"
										@click="saveJson('pl')"
									>
										Pobierz JSON pl
									</v-btn>
									<v-btn
										color="secondary"
										dark
										class="mb-2"
										@click="saveJson('en')"
									>
										Pobierz JSON en
									</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
	
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
	    <template v-slot:item="{ item }">
		<tr>
			<td v-for="(header, index) in headers" :key="index">
				<template v-if="header.value ==  'actions' ">
					
					<v-icon
						small
						class="mr-2"
						@click="editItem(item)"
					>
						mdi-pencil
					</v-icon>
					<v-icon
						small
						@click="deleteItem(item)"
					>
						mdi-delete
					</v-icon>
				</template>
				<template v-else-if="header.value ==  'cris' ">
					<v-checkbox dense class="ma-0" disabled
						v-model="item.cris"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'dspace' ">
					<v-checkbox dense class="ma-0" disabled
						v-model="item.dspace"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'pcg' ">
					<v-checkbox dense class="ma-0" disabled
						v-model="item.pcg"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'swps' ">
					<v-checkbox dense class="ma-0" disabled
						v-model="item.swps"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'asp' ">
					<v-checkbox dense class="ma-0" disabled
						v-model="item.asp"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'uw' ">
					<v-checkbox dense class="ma-0" disabled
						v-model="item.uw"
					></v-checkbox>
				</template>
				<template v-else>
					{{item[header.value]}}
				</template>
			</td>
		</tr>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
      >
        Reset
      </v-btn>
    </template>
		</v-data-table>
		
	</v-container>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Table',
	computed: {
		formTitle () {
			return this.editedIndex === -1 ? 'Nowy klucz' : 'Edytuj'
		},
	},
	watch: {
		dialog (val) {
			val || this.close()
		},
		dialogDelete (val) {
			val || this.closeDelete()
		}
	},
	props: {
		api: ""
	},
	methods: {
		click(index){
			console.log(this.downloads.base[index].active)
		},
		saveModal(){
			this.dialogSave = true
		},
		slicer( item, spaceNames ){
			const pairs = Object.entries(item)
			const filteredPairs = pairs.filter(x => (x[1]==true && spaceNames.some(y => y==x[0])))
			//console.log('filteredPairs',filteredPairs)
			//console.log(pairs)
			if(filteredPairs.length === 0 )return false
			else return true
		},
		saveJson(lang){
			const spaces = [...this.downloads.base.filter(x=>x.active==true), ...this.downloads.supplement.filter(x=>x['active']==true)]
			const spaceNames = spaces.map((x) => x.value)
			const listSpaces = this.listAll.filter(x => (this.slicer(x, spaceNames)))
			let newJson = listSpaces.map((item) => [item.id,item[lang]]  )
			newJson = Object.fromEntries(newJson)
			this.download('en.json5', JSON.stringify(newJson))
		},
		saveJsonPl(){
			let newJsonPl = this.listAll.map((item) => [item.id,item.pl]  )
			newJsonPl = Object.fromEntries(newJsonPl)
			this.download('pl.json5', JSON.stringify(newJsonPl))
		},
		download(filename, text) {
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);

			element.style.display = 'none';
			document.body.appendChild(element);
 
			element.click();

			document.body.removeChild(element);
		},
		log(item) {
			console.log(item)
		},
		customSort(items, index, isDesc) {
			items.sort((a, b) => {
				if(index<10){}
				//console.log(a)
				if (a[index] == b[index]) { 
					return 0;
				} else if (a[index] == "" || a[index] == null ) {
					return 1;
				} else if (b[index] == "" || b[index] == null ) {
					return -1;
				} else if (!isDesc[0]) {
					return a[index] < b[index] ? -1 : 1;
				} else { 
					return a[index] < b[index] ? 1 : -1;
				}
			});
			return items;
		},
		editItem (item) {
		    this.editedIndex = this.listAll.indexOf(item)
		    this.editedItem = Object.assign({}, item)
		    this.dialog = true
			this.isKeyLabelDisabled = true
		},

		deleteItem (item) {
		    this.editedIndex = this.listAll.indexOf(item)
		    this.editedItem = Object.assign({}, item)
		    this.dialogDelete = true
		},

		deleteItemConfirm () {
			axios.delete(`${this.api}/${this.editedItem.id}`)
		    this.listAll.splice(this.editedIndex, 1)
		    this.closeDelete()
		},

		close () {
			this.isKeyLabelDisabled = false
			this.alert = ""
		    this.dialog = false
		    this.$nextTick(() => {
		    	this.editedItem = Object.assign({}, this.defaultItem)
		    	this.editedIndex = -1
		    })
		},

		closeDelete () {
			this.dialogDelete = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},
		save () {
			console.log(this.editedItem)
			if (this.editedIndex > -1) {
				Object.assign(this.listAll[this.editedIndex], this.editedItem)
				axios.patch(`${this.api}/${this.editedItem.id}`, 
					this.editedItem
				)
				console.log(this.editedItem)
				this.close()
			}
			else{
				if(!this.editedItem.id){
					this.alert = "klucz musi być wypełniony"
				}
				else if( this.listAll.find(e => e.id === this.editedItem.id) ){
					this.alert = "klucz już egzystuje"
				}
				else{
					this.listAll.push(this.editedItem)
					console.log(this.editedItem)
					axios.post(this.api, 
						this.editedItem
					)
					this.close()
				}
			}
		}
			
	},
	data: () => ({
		clicks: true,
		host: window.location.origin,
		dialog: false,
		dialogDelete: false,
		dialogSave: false,
		validationColor: "initial",
		isKeyLabelDisabled: false,
		alert: "",
		search: '',
		check: true,
		selected: null,
		all: 'Wszystkie',
		actionsLabel: 'actions',
		headers: [
			{text: 'Klucz', value: 'id'},
			{text: 'English', value: 'en'},
			{text: 'Polski', value: 'pl'},
			{text: 'DSpace', value: 'dspace'},
			{text: 'Cris', value: 'cris'},
			{text: 'PCG', value: 'pcg'},
			{text: 'SWPS', value: 'swps'},
			{text: 'ASP', value: 'asp'},
			{text: 'UW', value: 'uw'},
			{text: 'Akcje', value: 'actions', sortable: false }
		],
		listEn: [],
		listPl: [],
		listAll: [],
		editedIndex: -1,
		editedItem: {
			id: '',
			en: "",
			pl: "",
			dspace: true,
			cris: true,
			pcg: false,
			swps: false,
			asp: false,
			uw: false
		},
		downloads: {
			base: [
				{value:'dspace', text:"DSpace", active:true},
				{value:'cris', text:"Cris", active:true}
			],
			supplement: [
				
			]
		},
		defaultItem: {
			id: '',
			en: "",
			pl: "",
			dspace: true,
			cris: true,
			pcg: false,
			swps: false,
			asp: false,
			uw: false
		},
	}),
	async mounted () {
		let vm = this
		const res = await axios.get(this.api)
		this.listAll = res.data
		//this.lastId = Number(this.listAll[this.listAll.length-1].id)
		let arr = ['id', 'en', 'pl', 'dspace', 'cris', 'actions']
		this.downloads.supplement=this.headers.filter(x => !arr.includes(x['value']))
	}
}
</script>
<style lang="scss">

	
	th{
		padding: 10px !important;
	}
	.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th{
		padding: 0;
		min-width: 20px;
		font-size: 12px;
	}
	.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td{
		padding-left:4px;
		padding-right: 4px;
		box-sizing: border-box;
	}
	tr > td:first-child{
	}
	tr > td{
	}
	.v-select{
		font-size: 0.75em!important;
	}
	.v-label{
		font-size: 1em!important;
	}
	th i.mdi{
	}
	.v-text-field--outlined fieldset{
		border-radius: 20px;
		border: 1px solid #aaa;
	}
	.search-bar .v-text-field{
		border-radius: 20px;
		//border: 1px solid #aaa;
		input, label{
			font-size: 14px!important;
		}
	}
	.v-select__slot{
		input{
			cursor: pointer!important;
			color: #053a6e;
		}
	}
	.logo{
		width: 160px;
		height: auto;
		position: relative;
		top: -12px;
	}
	td{
		padding: 0;
		padding-left: 0;
		padding-right: 0;
		div{
			padding: 0 2px;
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.super1{
		background-color: #A5E5AA;
	}
	.green1{
		background-color: #EBF7A4;
	}
	.yellow1{
		background-color: #FFF27B;
	}
	.orange1{
		background-color: #F9D19D;
	}
	.red1{
		background-color: #D8A0A0;
	}
</style>