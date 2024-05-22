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
		 	@click:row="handleClick"
			:headers="headers"
			:items="listAll"
			height="100%"
			:items-per-page="10"
			class="elevation-1"
			:custom-sort="customSort"
			:search="search"
			fixed-header
			
			:footer-props="{'items-per-page-options':[10, 50, 100]}"
			:class="{ god: isGod, demo: !editMode}"
		>

	<template v-slot:top>
      <v-toolbar
      >
        <v-toolbar-title>Tłumacz DSpace</v-toolbar-title>

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
            <v-card-title class="justify-space-between ">
              <span class="text-h5">{{ formTitle }}</span>
              <span class="text-caption deep-orange--text text--lighten-2">{{alert}}</span>
            </v-card-title>

            <v-card-text >
              <v-container fluid class="minH">
				
                    <v-text-field
                      v-model="editedItem.key"
                      label="Klucz"
					 						:background-color="validationColor"
					  					color="white"
					  					:disabled="isKeyLabelDisabled"
                    ></v-text-field>

									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.dspace.active}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.dspace.active"
											label="DSpace"
											color="green"
											@click="checkBox('dspace')"
										></v-checkbox>
										<div v-if="editedItem.dspace.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.dspace.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.dspace.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>									
									
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.cris.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.cris.active"
											label="Cris"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.cris.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.cris.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.cris.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>									
									
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.pcg.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.pcg.active"
											label="PCG"
											color="green"
											@click="click(editedItem)"
										></v-checkbox>
										<div v-if="editedItem.pcg.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.pcg.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.pcg.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>									
									
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.swps.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.swps.active"
											label="SWPS"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.swps.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.swps.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.swps.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.asp.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.asp.active"
											label="ASP"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.asp.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.asp.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.asp.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.uw.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.uw.active"
											label="UW"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.uw.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.uw.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.uw.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.uj.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.uj.active"
											label="UJ"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.uj.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.uj.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.uj.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.uep.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.uep.active"
											label="Uniwersytet Ekonomiczny Poznań"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.uep.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.uep.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.uep.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
									</v-row>
									<v-row 
									 		class="expandRow"
											:class="{active: editedItem.upp.active, invisible: !editMode}">
										<v-checkbox dense class="ma-0"
											v-model="editedItem.upp.active"
											label="Uniwersytet Przyrodniczy Poznań"
											color="green"
										></v-checkbox>
										<div v-if="editedItem.upp.active" class="w-100">
											<v-row>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.upp.pl"
														label="Polski"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field
														v-model="editedItem.upp.en"
														label="English"
														:background-color="validationColor"
														color="white"
													></v-text-field>
												</v-col>
											</v-row>
										</div>	
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
        <v-dialog v-model="dialogError" max-width="500px">
          <v-card>
            <v-card-title class="text-h5 red">Błąd serwera</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
				<v-dialog v-model="dialogSave" max-width="500px" >
          <v-card :class="{demo: !editMode}">
            <v-card-title class="text-h5">Pobierz JSON</v-card-title>
						<v-card-text >
							<v-container>
											<div v-for="(baseItem, index) in downloads.base" :key="'A'+index" class="baza">
												<v-checkbox dense class="ma-0"
													v-model="downloads.base[index].active"
													:label="downloads.base[index].text"
													color="green"
													@click="click(index)"
												></v-checkbox>
											</div>
											<div v-for="(supplementItem, index) in downloads.supplement" :key="'B'+index" class="suplement">
												<v-checkbox dense class="ma-0" v-if="editMode"
													v-model="downloads.supplement[index].active"
													:label="downloads.supplement[index].text"
													color="green"
												></v-checkbox>
												<v-checkbox dense class="ma-0" v-if="!editMode"
													value="false"
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
										@click="saveJson2('pl')"
									>
										Pobierz JSON pl
									</v-btn>
									<v-btn
										color="secondary"
										dark
										class="mb-2"
										@click="saveJson2('en')"
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




<!--------------------------->
<!-- wiersze tabeli  -->
<!--------------------------->

	  <template v-slot:item="{ item }">
		<tr>
			<td v-for="(header, index) in headers" :key="index" @click="handleClick" :class="header.class">
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
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.cris.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'dspace' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.dspace.active"
					></v-checkbox>
					
				</template>
				<template v-else-if="header.value ==  'translationExample1' ">
								{{item["translationExample1"]}}
				</template>
				<template v-else-if="header.value ==  'translationExample2' ">
								{{item["translationExample2"]}}
				</template>
				<template v-else-if="header.value ==  'translationExample3' ">
								{{item["translationExample3"]}}
				</template>
				<template v-else-if="header.value ==  'pcg' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.pcg.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'swps' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.swps.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'asp' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.asp.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'uw' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.uw.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'uj' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.uj.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'uep' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.uep.active"
					></v-checkbox>
				</template>
				<template v-else-if="header.value ==  'upp' ">
					<v-checkbox dense class="ma-0" disabled :class="{invisible: !editMode}"
						v-model="item.upp.active"
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
		api: "",
		editMode: false
	},
	methods: {
		handleClick(value){
			console.log(value)
		},
		click(el){
			console.log(el)
		},
		checkBox(item){
			setTimeout(() => {
				if(this.editedItem[item].active){
					console.log("active")
					this.editedItem[item].active = true
				}else{
					console.log("notactive")
					this.editedItem[item].active = false
				}
			}, 1);
		},
		saveModal(){
			this.dialogSave = true
		},
		slicer( item, spaceNames, lang ){
			//console.log('spaces',this.spaces)
			this.spaces.forEach((el)=>{
				if(item[el].active){
					Object.defineProperty(item, lang, {
						value: item[el][lang],
						writable: true
					})
				}
			})
			if(item.key=="401.test"){
				console.log('4021', item)
			}
			//const pairs = item.langitem[el][lang]
			const pairs = Object.entries(item)
			//console.log('pairs',pairs)
			const filteredPairs = pairs.filter(x => (x[1]==true && spaceNames.some(y => y==x[0])))
			//console.log('filteredPairs',filteredPairs)
			//console.log(pairs)
			if(filteredPairs.length === 0 )return false
			else return true
		},
		saveJson2(lang){
			const spaces = [...this.downloads.base.filter(x=>x.active==true), ...this.downloads.supplement.filter(x=>x['active']==true)]
			const spaceNames = spaces.map((x) => x.value).reverse()
			
			let json = {}
			this.listAll.forEach( (element)=>{
				let arr = [element.key]
				let set = false
				spaceNames.forEach((el)=>{
					if(!set){
						if(element[el][lang]){
							arr.push(element[el][lang])
							set = true
						}
						//set = true
					}
				})
				Object.defineProperty(json, arr[0], {
					value: arr[1],
					enumerable: true
				})
			})
			console.log('json',json)
			console.log(JSON.stringify(json))
			this.download(lang+'.json5', JSON.stringify(json))
		},
		saveJson(lang){
			const spaces = [...this.downloads.base.filter(x=>x.active==true), ...this.downloads.supplement.filter(x=>x['active']==true)]
			const spaceNames = spaces.map((x) => x.value)
			console.log('spacenames',spaceNames) 
			item2 = {key: item.key, id: item.id, }
			spaceNames.forEach((el)=>{
				if(item[el].active){
					Object.defineProperty(item, el, {
						value: item[el][lang],
						writable: true
					})
				}
			})

			const listSpaces = this.listAll.filter(x => (this.slicer(x, spaceNames, lang)))
			let newJson = listSpaces.map((item) => [item.id,item[lang]]  )

			newJson = Object.fromEntries(newJson)
			console.log(newJson)
			console.log(Object.keys(newJson).length)
			//this.download(lang+'.json5', JSON.stringify(newJson))
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
			console.log('edititem')
		    this.editedIndex = this.listAll.indexOf(item)
				console.log(this.editedIndex = this.listAll.indexOf(item))
				const arr = this.spaces
				this.editedItem.key = item.key
				this.editedItem.id = item.id
				console.log('arr',arr)
				arr.forEach((el)=>{
					if(item.hasOwnProperty(el)){
						if(item[el].active){
							this.editedItem[el].active = true
							this.editedItem[el].pl = item[el].pl
							this.editedItem[el].en = item[el].en
							//this.editedItem[el].en = true
						}else{
							this.editedItem[el].active = false
						}
					}
					if(!item.hasOwnProperty(el)){
						//item.el = {active: false, pl: "", en: ""}
						Object.defineProperty(item, el, {
							value: {"active": false}
						})
					}
				}) 
				
				console.log('editedItem',this.editedItem)


		    this.dialog = true
				this.isKeyLabelDisabled = true
				//this.editedItem = JSON.parse(JSON.stringify(item));

		},

		deleteItem (item) {
		    this.editedIndex = this.listAll.indexOf(item)
				
		    //this.editedItem = Object.assign({}, item)
		    this.dialogDelete = true
		},

		deleteItemConfirm () {
			let id = this.listAll[this.editedIndex]["id"]
			axios.delete(this.restUpdate+"/i18n/api/v1/translations/"+id)
		    this.listAll.splice(this.editedIndex, 1)
		    this.closeDelete()
		},

		close () {
			this.isKeyLabelDisabled = false
			this.alert = ""
		    this.dialog = false
				console.log('close')
		    this.$nextTick(() => {
		    	this.editedIndex = -1
					this.editedItem.id = this.defaultItem.id
					this.editedItem.key = this.defaultItem.key
					this.editedItem.translationExample1 = this.defaultItem.translationExample1
					this.editedItem.translationExample2 = this.defaultItem.translationExample2
					this.editedItem.translationExample3 = this.defaultItem.translationExample3

					this.spaces.forEach( (el) => {
						this.editedItem[el].active = this.defaultItem[el].active
						this.editedItem[el].pl = this.defaultItem[el].pl
						this.editedItem[el].en = this.defaultItem[el].en
					})
		    })
		},

		closeDelete () {
			this.dialogDelete = false
			this.$nextTick(() => {
				this.editedIndex = -1
				this.editedItem.id = this.defaultItem.id
				this.editedItem.key = this.defaultItem.key
				this.editedItem.translationExample1 = this.defaultItem.translationExample1
				this.editedItem.translationExample2 = this.defaultItem.translationExample2
				this.editedItem.translationExample3 = this.defaultItem.translationExample3
				
				this.spaces.forEach( (el) => {
					this.editedItem[el].active = this.defaultItem[el].active
					this.editedItem[el].pl = this.defaultItem[el].pl
					this.editedItem[el].en = this.defaultItem[el].en
				})
			})
		},
		async save () {
			this.lastIndex = this.editedIndex
			let isExampleSet = false
			let item = this.editedItem
			this.editedItem["translationExample1"] = " "
			this.editedItem["translationExample2"] = " "
			this.editedItem["translationExample3"] = " "
			this.spaces.forEach( (el) => {
				if(this.editedItem.hasOwnProperty(el) && !isExampleSet){
					if(this.editedItem[el].en){ 
						this.editedItem.translationExample1 = this.editedItem[el].en
						this.editedItem.translationExample3+=this.editedItem[el].en
						isExampleSet = true 
					}
					if(this.editedItem[el].pl){ 
						this.editedItem.translationExample2 = this.editedItem[el].pl
						this.editedItem.translationExample3+=this.editedItem[el].pl
						isExampleSet = true 
					}
				}
			})

  			if (this.editedIndex > -1) {

					//Object.assign(this.listAll[this.editedIndex], this.editedItem)
					this.listAll[this.editedIndex].id = this.editedItem.id
					this.listAll[this.editedIndex].key = this.editedItem.key
					this.listAll[this.editedIndex].translationExample1 = this.editedItem.translationExample1
					this.listAll[this.editedIndex].translationExample2 = this.editedItem.translationExample2
					this.listAll[this.editedIndex].translationExample3 = this.editedItem.translationExample3
					this.spaces.forEach( (el) => {
						if(this.editedItem.hasOwnProperty(el)){
							this.listAll[this.editedIndex][el].active = this.editedItem[el].active
							this.listAll[this.editedIndex][el].pl = this.editedItem[el].pl
							this.listAll[this.editedIndex][el].en = this.editedItem[el].en
						}
					})
				let payload = this.constructPayload()
    			try {
					await axios.put(this.restUpdate+"/i18n/api/v1/translations/"+this.editedItem["id"], 
					//await axios.put(`${this.api}/${this.editedItem.id}`, 
						payload
					)
				} catch (e){
					this.dialogError = true
					console.log('ERR')
					console.log(e)
					this.makeExample()
					this.close()
				}
				
			}
			else{
				if(!this.editedItem.key){
					this.alert = "klucz musi być wypełniony"
					console.log(this.editedItem.key)
				}
				else if( this.listAll.find(e => e.key === this.editedItem.key) ){
					
					console.log('find',this.listAll.find(e => e.key === this.editedItem.key))
					this.alert = "klucz już egzystuje + " + this.editedItem.key
					console.log(this.editedItem.key)
				}
				else{
					console.log(this.lastIndex, this.listAll)
					let payload = this.constructPayload()
					try{
						await axios.post(this.restUpdate+"/i18n/api/v1/translations", 
							payload
						)
						this.pushTranslation()
						this.lastIndex = this.listAll.length - 1
						this.makeExample()
						this.close()
					} catch (e){
						console.log('ERR')
						console.log(e)
						this.pushTranslation()
						this.lastIndex = this.listAll.length - 1
						this.makeExample()
						this.close()
					}
					
					console.log('listAll',this.listAll)
					
				}
			}
		}, 
		pushTranslation(){
			
				let row = {
					id:this.editedItem.id,
					key:this.editedItem.key,
					translationExample1:"",
					translationExample2:"",
					translationExample3:""
				}
				let valPl =""
				let valEn =""
				this.spaces.forEach(space => {
					if(this.editedItem[space]){
						Object.defineProperty(row, space, {
							value: {
								"active":this.editedItem[space].active,
								"pl":this.editedItem[space].pl,
								"en":this.editedItem[space].en},
							configurable: true
						})
					}else{
						Object.defineProperty(row, space, {
							value: {"active":true,"pl":valPl,"en":valEn},
							configurable: true
						})
					}

				});
				this.listAll.push(row)
				console.log('row',row)
		},
		makeExample(){
			let isExampleSet1 = false
			this.spaces.forEach((el)=>{
				if(this.listAll[this.lastIndex].hasOwnProperty(el) && !isExampleSet1){
					if(this.listAll[this.lastIndex][el].active){ 
						this.listAll[this.lastIndex].translationExample1 = this.listAll[this.lastIndex][el].en
						this.listAll[this.lastIndex].translationExample2 = this.listAll[this.lastIndex][el].pl
						this.listAll[this.lastIndex].translationExample3 = this.listAll[this.lastIndex][el].pl+this.listAll[this.lastIndex][el].en
						isExampleSet1 = true 
					}
				}
			})
		},
		constructPayload(){
			let payload = {}
			payload["key"] = this.editedItem.key
			let spaceIndex = 0
			payload["spaces"] = []
			this.spaces.forEach(el => {
				if(this.editedItem[el].active){
					payload["spaces"].push({"name":el, "languages": [] })
					payload["spaces"][spaceIndex]["languages"].push([ "pl", this.editedItem[el]["pl"] ])
					payload["spaces"][spaceIndex]["languages"].push([ "en", this.editedItem[el]["en"] ])
					spaceIndex++
					//payload["spaces"][spaceIndex]
					//payload["spaces"].push(el)
				}
			})
			return payload
		},
		async getTranslations(){
			let temp =[]
			axios
				.get(this.rest+"/i18n/api/v1/translations")
				.then(res => this.handleTranslations(res.data))
				.then()

		},
		handleTranslations(temp){
			
			let arrd = []
			temp.forEach((element, index) => {
				let row = {
					id:element.id,
					key:element.key,
					translationExample1:"",
					translationExample2:"",
					translationExample3:""
				}
				let valPl =""
				let valEn =""
				element["spaces"].forEach(space => {
					
					if(space.languages){
						if(space.languages.some(el => el[0] === "pl")){
							valPl = space.languages.find(obj => obj[0] === "pl")[1]
						}else{
							valPl = ""
						}
						if(space.languages.some(el => el[0] === "en")){
							valEn = space.languages.find(obj => obj[0] === "en")[1]
						}else{
							valEn = ""
						}
					}
					Object.defineProperty(row, space.name, {
						value: {"active":true,"pl":valPl,"en":valEn},
						configurable: true
					})
				});
				const arr = this.spaces
				let isExampleSet = false
				row.translationExample1 = ""
				row.translationExample2 = ""
				row.translationExample3 = ""
				
				arr.forEach( function(el){
					
					if(row.hasOwnProperty(el)){
						if(row[el].active){ 
							row.translationExample3 += row[el].pl+row[el].en
						}
					}
					if(row.hasOwnProperty(el) && !isExampleSet){
						if(row[el].active){ 
							row.translationExample1 = row[el].en
							row.translationExample2 = row[el].pl
							isExampleSet = true 
						}
					}
					if(!row.hasOwnProperty(el)){
						//item.el = {active: false, pl: "", en: ""}
						Object.defineProperty(row, el, {
							value: {"active":false,"pl":"","en":""},
							configurable: true
						})
					}
					
				})
				arrd.push(row)
				row = {}
			})

			console.log('arrd',arrd)
			this.listAll = arrd
		},


		async newTranslation(obj){
			let dataSend = {
				"key": obj.key
			}
			try{
				const res = await axios.get(this.restUpdate+"/i18n/api/v1/translations/")
				console.log('res',res)
				return (res.data)
			}
			catch(err){
				console.log('err',err)
			}
		},
		async saveTranslation(){
			try{
				const dataSend={
					"key": "test.test",
					"space": "cris",
					"languages": [
						{
							"locale": "en",
							"data": "english"
						},
						{
							"locale": "pl",
							"data": "polski"
						}
					]
				}
			const res = await axios.put(this.restUpdate+"/i18n/api/v1/translations/63aaf6adf46fec261499ed80", dataSend)
			console.log('res',res)
			return (res.data)
			}
			catch(err){
				console.log('err',err)
			}
		},
		async deleteTranslation(id){
			console.log(id)
			try{
				const res = await axios.delete(this.restUpdate+"/i18n/api/v1/translations/"+id)
				console.log('delete',res)
				console.log('deleted')
			}
			catch(err){
				console.log('err',err)
			}
		}
	},
	async mounted () { 
		let temp = []
		this.getTranslations()
		//let temp = this.mockApi
		//this.handleTranslations(temp)
		//this.listAll = temp
		/*
		let vm = this
		const res = await axios.get(this.api)
		this.listAll = res.data
		console.log(this.listAll)
		//this.lastId = Number(this.listAll[this.listAll.length-1].id)
		let arr = ['id', 'en', 'pl', 'dspace', 'cris', 'actions']
		this.downloads.supplement=this.headers.filter(x => !arr.includes(x['value'])) 
		*/
		window.addEventListener("keypress", (e) => {
			if(!this.isGod){
				this.keystrokes.unshift(e.key.toString())
				this.keystrokes.splice(12,1)
				this.isGod = (this.godPassword.length == this.keystrokes.length) && this.godPassword.every( (element, index) => {return element === this.keystrokes[index]  })
				if(this.isGod){
					this.restUpdate ="https://test.dspace7.com"
				}
			}
    })
	},
	data: () => ({
		rest: "https://test.dspace7.com",
		restUpdate: "",
		godPassword: ["l","t","a","o","c","l","a","z","t","e","u","q"],
		keystrokes: ["","","","","","","","","",""],
		isGod: false,
		host: window.location.origin,
		dialog: false,
		dialogDelete: false,
		counter1: 0,
		dialogSave: false,
		lastIndex: 0,
		dialogError: false,
		itemToDelete: "",
		validationColor: "initial",
		isKeyLabelDisabled: false,
		alert: "",
		search: '',
		check: true,
		selected: null,
		all: 'Wszystkie',
		actionsLabel: 'actions',
		headers: [
			{text: 'Klucz', value: 'key', width: '500px'},
			{text: 'en', value: 'translationExample1', width: 'auto'},
			{text: 'pl', value: 'translationExample2', width: 'auto'},
			{text: 'XXX', value: 'translationExample3', width: 'auto', class: "content"},
			{text: 'Dspace', value: 'dspace', width: '50px'},
			{text: 'Cris', value: 'cris', width: '50px'},
			{text: 'PCG', value: 'pcg', width: '50px'},
			{text: 'SWPS', value: 'swps', width: '50px'},
			{text: 'ASP', value: 'asp', width: '50px'},
			{text: 'UW', value: 'uw', width: '50px'},
			{text: 'UJ', value: 'uj', width: '50px'},
			{text: 'UEP', value: 'uep', width: '50px'},
			{text: 'UPP', value: 'upp', width: '50px'},
			{text: ' ', value: 'actions', sortable: false, width: '50px'}
		],
		spaces: ['dspace','cris','pcg','swps','asp','uw', 'uj', 'uep', 'upp'],
		listEn: [],
		listPl: [],
		listAll: [],
		listAll2: [],
		editedIndex: -1,
		editedItem: {
			id: '',
			key: '',
			dspace: {
				active: false, pl: "", en: ""
			},
			cris: {
				active: false, pl: "", en: ""
			},
			pcg: {
				active: false, pl: "", en: ""
			},
			swps: {
				active: false, pl: "", en: ""
			},
			asp: {
				active: false, pl: "", en: ""
			},
			uw: {
				active: false, pl: "", en: ""
			},
			uj: {
				active: false, pl: "", en: ""
			},
			uep: {
				active: false, pl: "", en: ""
			},
			upp: {
				active: false, pl: "", en: ""
			}
		},
		downloads: {
			base: [
				{value:'dspace', text:"DSpace", active:true},
				{value:'cris', text:"Cris", active:true}
			],
			supplement: [
				{value:'pcg', text:"PCG", active:true},
				{value:'swps', text:"SWPS", active:true},
				{value:'asp', text:"ASP", active:true},
				{value:'uw', text:"UW", active:true},
				{value:'uj', text:"UJ", active:true},
				{value:'uep', text:"UEP", active:true},
				{value:'upp', text:"UPP", active:true}
			]
		},
		defaultItem: {
			id: '',
			key: '',
			dspace: {
				active: false, pl: "", en: ""
			},
			cris: {
				active: false, pl: "", en: ""
			},
			pcg: {
				active: false, pl: "", en: ""
			},
			swps: {
				active: false, pl: "", en: ""
			},
			asp: {
				active: false, pl: "", en: ""
			},
			uw: {
				active: false, pl: "", en: ""
			},
			uj: {
				active: false, pl: "", en: ""
			},
			uep: {
				active: false, pl: "", en: ""
			},
			upp: {
				active: false, pl: "", en: ""
			}
		},
	})
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

	.expandRow{
		padding: 12px;
		
		.w-100{
			width: 100%;
		}
		&.active{
			background: #333;
		}
	}
	.minH{
		min-height: 620px;
	}
	.god{
		opacity: .9!important;
		> *{
			color: gold!important
		}
	}
	th{
		&:nth-child(4){
			display: none!important;
		}
	}
	td.content{
		display: none!important;
	}
	.invisible{
		display: none!important;
	}
	.demo{
		thead th:not(:first-child):not(:last-child):not(:nth-child(2)):not(:nth-child(3)){
				display: none;
		}
		tbody{
			td:last-child{
				width: 50px;
			}
		}
		.suplement{
			display: none!important;
		}
		.baza:nth-child(2){
			display: none!important;
		}
	}
</style>