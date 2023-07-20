(()=>{"use strict";var e={7191:(e,t,a)=>{var s=a(144),i=a(998),l=a(9582),o=a(4886),n=a(2118),d=a(2928),c=a(3305),r=a(7808),p=function(){var e=this,t=e._self._c;return t(i.Z,{attrs:{dark:""}},[t(d.Z,{attrs:{dark:""}},[e.isWelcome?t(n.Z,{staticClass:"h100 h-100 align-center d-flex"},[t(l.Z,{staticClass:"mx-auto px-4",attrs:{"max-width":"344"}},[t(o.EB,[e._v(" DSpace Tłumacz ")]),t(o.ZB,[t(r.Z,{attrs:{label:"Zaloguj"},on:{input:e.input},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}})],1)],1)],1):e._e(),e.isPreloading?t(n.Z,{staticClass:"h100 h-100 align-center d-flex justify-center"},[t("div",[t(c.Z,{attrs:{indeterminate:"",color:"primary"}})],1)]):e._e(),e.isAuth?t("table-component",{attrs:{api:e.api}}):e._e(),t("div",{attrs:{id:"aa"}})],1)],1)},m=[],h=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"app"}},[t("h1",[e._v("Shopping List")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.itemName,expression:"itemName"}],attrs:{type:"text"},domProps:{value:e.itemName},on:{input:function(t){t.target.composing||(e.itemName=t.target.value)}}}),t("br"),t("button",{on:{click:function(t){return e.addItem()}}},[e._v("Add Item")]),t("button",{on:{click:function(t){return e.download("json.json",e.itemName)}}},[e._v("Download JSON")]),e._v(" "+e._s(e.itemName)+" ")]),t("ul",e._l(e.items,(function(a){return t("li",{key:a.id},[e._v(" "+e._s(a.en)+" ")])})),0)])},u=[],v=a(9669),x=a.n(v);const I={name:"App",data(){return{items:[],itemName:""}},async created(){try{const e=await x().get("http://localhost:3000/data");this.items=e.data}catch(e){console.log(e)}},methods:{async addItem(){const e=await x().post("http://localhost:3000/data",{name:this.itemName});this.items=[...this.items,e.data],this.itemName=""},download(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},g=I;var f=a(1001),b=(0,f.Z)(g,h,u,!1,null,null,null);const k=b.exports;var w=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"app"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.itemName,expression:"itemName"}],attrs:{type:"text"},domProps:{value:e.itemName},on:{input:function(t){t.target.composing||(e.itemName=t.target.value)}}}),t("br"),t("button",{on:{click:function(t){return e.addItem()}}},[e._v("Add Item")]),t("button",{on:{click:function(t){return e.download("json.json",e.itemName)}}},[e._v("Download JSON")]),e._v(" "+e._s(e.itemName)+" ")]),t("ul",e._l(e.items,(function(a){return t("li",{key:a.id},[e._v(" "+e._s(a.en)+" ")])})),0)])},y=[];const Z={name:"App",data(){return{items:[],itemName:""}},async created(){try{const e=await x().get("http://localhost:3000/data");this.items=e.data}catch(e){console.log(e)}},methods:{async addItem(){const e=await x().post("http://localhost:3000/data",{name:this.itemName});this.items=[...this.items,e.data],this.itemName=""},download(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},E=Z;var C=(0,f.Z)(E,w,y,!1,null,null,null);const _=C.exports;var P=a(4562),A=a(120),O=a(266),j=a(5718),S=a(9930),$=a(4324),N=a(1713),T=a(3687),D=a(1783),z=a(7953),U=function(){var e=this,t=e._self._c;return t(n.Z,{attrs:{fluid:""}},[t(n.Z,{attrs:{fluid:""}},[t(N.Z,{attrs:{align:"center"}},[t(O.Z,{staticClass:"search-bar"},[t(r.Z,{attrs:{"append-icon":"mdi-magnify",label:"Wyszukaj w tabeli","single-line":"",outlined:"",dense:"",dark:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),t(j.Z,{staticClass:"elevation-1",class:{god:e.isGod},attrs:{headers:e.headers,items:e.listAll,height:"100%","items-per-page":10,"custom-sort":e.customSort,search:e.search,"fixed-header":"","footer-props":{"items-per-page-options":[10,50,100]}},on:{"click:row":e.handleClick},scopedSlots:e._u([{key:"top",fn:function(){return[t(D.Z,[t(z.qW,[e._v("Tłumacz DSpace")]),t(T.Z),t(P.Z,{staticClass:"mb-2",attrs:{color:"secondary",dark:""},on:{click:e.saveModal}},[e._v(" Pobierz ")]),t(S.Z,{attrs:{width:"100%","max-width":"1200px",dark:""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(P.Z,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),a),[e._v(" Nowy klucz ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.Z,[t(o.EB,{staticClass:"justify-space-between"},[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))]),t("span",{staticClass:"text-caption deep-orange--text text--lighten-2"},[e._v(e._s(e.alert))])]),t(o.ZB,[t(n.Z,{staticClass:"minH",attrs:{fluid:""}},[t(r.Z,{attrs:{label:"Klucz","background-color":e.validationColor,color:"white",disabled:e.isKeyLabelDisabled},model:{value:e.editedItem.key,callback:function(t){e.$set(e.editedItem,"key",t)},expression:"editedItem.key"}}),t(N.Z,{staticClass:"expandRow",class:{active:e.editedItem.dspace.active}},[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:"DSpace",color:"green"},on:{click:function(t){return e.checkBox("dspace")}},model:{value:e.editedItem.dspace.active,callback:function(t){e.$set(e.editedItem.dspace,"active",t)},expression:"editedItem.dspace.active"}}),e.editedItem.dspace.active?t("div",{staticClass:"w-100"},[t(N.Z,[t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"Polski","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.dspace.pl,callback:function(t){e.$set(e.editedItem.dspace,"pl",t)},expression:"editedItem.dspace.pl"}})],1),t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"English","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.dspace.en,callback:function(t){e.$set(e.editedItem.dspace,"en",t)},expression:"editedItem.dspace.en"}})],1)],1)],1):e._e()],1),t(N.Z,{staticClass:"expandRow",class:{active:e.editedItem.cris.active}},[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:"Cris",color:"green"},model:{value:e.editedItem.cris.active,callback:function(t){e.$set(e.editedItem.cris,"active",t)},expression:"editedItem.cris.active"}}),e.editedItem.cris.active?t("div",{staticClass:"w-100"},[t(N.Z,[t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"Polski","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.cris.pl,callback:function(t){e.$set(e.editedItem.cris,"pl",t)},expression:"editedItem.cris.pl"}})],1),t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"English","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.cris.en,callback:function(t){e.$set(e.editedItem.cris,"en",t)},expression:"editedItem.cris.en"}})],1)],1)],1):e._e()],1),t(N.Z,{staticClass:"expandRow",class:{active:e.editedItem.pcg.active}},[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:"PCG",color:"green"},on:{click:function(t){return e.click(e.editedItem)}},model:{value:e.editedItem.pcg.active,callback:function(t){e.$set(e.editedItem.pcg,"active",t)},expression:"editedItem.pcg.active"}}),e.editedItem.pcg.active?t("div",{staticClass:"w-100"},[t(N.Z,[t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"Polski","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.pcg.pl,callback:function(t){e.$set(e.editedItem.pcg,"pl",t)},expression:"editedItem.pcg.pl"}})],1),t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"English","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.pcg.en,callback:function(t){e.$set(e.editedItem.pcg,"en",t)},expression:"editedItem.pcg.en"}})],1)],1)],1):e._e()],1),t(N.Z,{staticClass:"expandRow",class:{active:e.editedItem.swps.active}},[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:"SWPS",color:"green"},model:{value:e.editedItem.swps.active,callback:function(t){e.$set(e.editedItem.swps,"active",t)},expression:"editedItem.swps.active"}}),e.editedItem.swps.active?t("div",{staticClass:"w-100"},[t(N.Z,[t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"Polski","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.swps.pl,callback:function(t){e.$set(e.editedItem.swps,"pl",t)},expression:"editedItem.swps.pl"}})],1),t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"English","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.swps.en,callback:function(t){e.$set(e.editedItem.swps,"en",t)},expression:"editedItem.swps.en"}})],1)],1)],1):e._e()],1),t(N.Z,{staticClass:"expandRow",class:{active:e.editedItem.asp.active}},[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:"ASP",color:"green"},model:{value:e.editedItem.asp.active,callback:function(t){e.$set(e.editedItem.asp,"active",t)},expression:"editedItem.asp.active"}}),e.editedItem.asp.active?t("div",{staticClass:"w-100"},[t(N.Z,[t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"Polski","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.asp.pl,callback:function(t){e.$set(e.editedItem.asp,"pl",t)},expression:"editedItem.asp.pl"}})],1),t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"English","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.asp.en,callback:function(t){e.$set(e.editedItem.asp,"en",t)},expression:"editedItem.asp.en"}})],1)],1)],1):e._e()],1),t(N.Z,{staticClass:"expandRow",class:{active:e.editedItem.uw.active}},[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:"UW",color:"green"},model:{value:e.editedItem.uw.active,callback:function(t){e.$set(e.editedItem.uw,"active",t)},expression:"editedItem.uw.active"}}),e.editedItem.uw.active?t("div",{staticClass:"w-100"},[t(N.Z,[t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"Polski","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.uw.pl,callback:function(t){e.$set(e.editedItem.uw,"pl",t)},expression:"editedItem.uw.pl"}})],1),t(O.Z,{attrs:{cols:"6"}},[t(r.Z,{attrs:{label:"English","background-color":e.validationColor,color:"white"},model:{value:e.editedItem.uw.en,callback:function(t){e.$set(e.editedItem.uw,"en",t)},expression:"editedItem.uw.en"}})],1)],1)],1):e._e()],1)],1)],1),t(o.h7,[t(T.Z),t(P.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Anuluj ")]),t(P.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Zapisz ")])],1)],1)],1),t(S.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(l.Z,[t(o.EB,{staticClass:"text-h5"},[e._v("Na pewno chcesz usunąć ten klucz?")]),t(o.h7,[t(T.Z),t(P.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Anuluj")]),t(P.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(T.Z)],1)],1)],1),t(S.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogError,callback:function(t){e.dialogError=t},expression:"dialogError"}},[t(l.Z,[t(o.EB,{staticClass:"text-h5 red"},[e._v("Błąd serwera")]),t(o.h7,[t(T.Z),t(T.Z)],1)],1)],1),t(S.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogSave,callback:function(t){e.dialogSave=t},expression:"dialogSave"}},[t(l.Z,[t(o.EB,{staticClass:"text-h5"},[e._v("Pobierz JSON")]),t(o.ZB,[t(n.Z,[e._v(" Baza "),e._l(e.downloads.base,(function(a,s){return t("div",{key:"A"+s},[e._v(" "+e._s(e.downloads.base[s].active)+" "),t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:e.downloads.base[s].text,color:"green"},on:{click:function(t){return e.click(s)}},model:{value:e.downloads.base[s].active,callback:function(t){e.$set(e.downloads.base[s],"active",t)},expression:"downloads.base[index].active"}})],1)})),e._v(" Suplement "),e._l(e.downloads.supplement,(function(a,s){return t("div",{key:"B"+s},[e._v(e._s(e.downloads.supplement[s].active)+" "),t(A.Z,{staticClass:"ma-0",attrs:{dense:"",label:e.downloads.supplement[s].text,color:"green"},model:{value:e.downloads.supplement[s].active,callback:function(t){e.$set(e.downloads.supplement[s],"active",t)},expression:"downloads.supplement[index].active"}})],1)}))],2)],1),t(o.h7,[t(T.Z),t(P.Z,{staticClass:"mb-2",attrs:{color:"secondary",dark:""},on:{click:function(t){return e.saveJson2("pl")}}},[e._v(" Pobierz JSON pl ")]),t(P.Z,{staticClass:"mb-2",attrs:{color:"secondary",dark:""},on:{click:function(t){return e.saveJson2("en")}}},[e._v(" Pobierz JSON en ")]),t(T.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:a}){return[t($.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),t($.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}},{key:"item",fn:function({item:a}){return[t("tr",e._l(e.headers,(function(s,i){return t("td",{key:i,class:s.class,on:{click:e.handleClick}},["actions"==s.value?[t($.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),t($.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]:"cris"==s.value?[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:a.cris.active,callback:function(t){e.$set(a.cris,"active",t)},expression:"item.cris.active"}})]:"dspace"==s.value?[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:a.dspace.active,callback:function(t){e.$set(a.dspace,"active",t)},expression:"item.dspace.active"}})]:"translationExample1"==s.value?[e._v(" "+e._s(a["translationExample1"])+" ")]:"translationExample2"==s.value?[e._v(" "+e._s(a["translationExample2"])+" ")]:"translationExample3"==s.value?[e._v(" "+e._s(a["translationExample3"])+" ")]:"pcg"==s.value?[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:a.pcg.active,callback:function(t){e.$set(a.pcg,"active",t)},expression:"item.pcg.active"}})]:"swps"==s.value?[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:a.swps.active,callback:function(t){e.$set(a.swps,"active",t)},expression:"item.swps.active"}})]:"asp"==s.value?[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:a.asp.active,callback:function(t){e.$set(a.asp,"active",t)},expression:"item.asp.active"}})]:"uw"==s.value?[t(A.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:a.uw.active,callback:function(t){e.$set(a.uw,"active",t)},expression:"item.uw.active"}})]:[e._v(" "+e._s(a[s.value])+" ")]],2)})),0)]}},{key:"no-data",fn:function(){return[t(P.Z,{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)},B=[];const R={name:"Table",computed:{formTitle(){return-1===this.editedIndex?"Nowy klucz":"Edytuj"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},props:{api:""},methods:{handleClick(e){console.log(e)},click(e){console.log(e)},checkBox(e){setTimeout((()=>{this.editedItem[e].active?(console.log("active"),this.editedItem[e].active=!0):(console.log("notactive"),this.editedItem[e].active=!1)}),1)},saveModal(){this.dialogSave=!0},slicer(e,t,a){this.spaces.forEach((t=>{e[t].active&&Object.defineProperty(e,a,{value:e[t][a],writable:!0})})),"401.test"==e.key&&console.log("4021",e);const s=Object.entries(e),i=s.filter((e=>1==e[1]&&t.some((t=>t==e[0]))));return 0!==i.length},saveJson2(e){const t=[...this.downloads.base.filter((e=>1==e.active)),...this.downloads.supplement.filter((e=>1==e["active"]))],a=t.map((e=>e.value)).reverse();let s={};this.listAll.forEach((t=>{let i=[t.key],l=!1;a.forEach((a=>{l||t[a][e]&&(i.push(t[a][e]),l=!0)})),Object.defineProperty(s,i[0],{value:i[1],enumerable:!0})})),console.log("json",s),console.log(JSON.stringify(s)),this.download(e+".json5",JSON.stringify(s))},saveJson(e){const t=[...this.downloads.base.filter((e=>1==e.active)),...this.downloads.supplement.filter((e=>1==e["active"]))],a=t.map((e=>e.value));console.log("spacenames",a),item2={key:item.key,id:item.id},a.forEach((t=>{item[t].active&&Object.defineProperty(item,t,{value:item[t][e],writable:!0})}));const s=this.listAll.filter((t=>this.slicer(t,a,e)));let i=s.map((t=>[t.id,t[e]]));i=Object.fromEntries(i),console.log(i),console.log(Object.keys(i).length)},saveJsonPl(){let e=this.listAll.map((e=>[e.id,e.pl]));e=Object.fromEntries(e),this.download("pl.json5",JSON.stringify(e))},download(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},log(e){console.log(e)},customSort(e,t,a){return e.sort(((e,s)=>e[t]==s[t]?0:""==e[t]||null==e[t]?1:""==s[t]||null==s[t]?-1:a[0]?e[t]<s[t]?1:-1:e[t]<s[t]?-1:1)),e},editItem(e){console.log("edititem"),this.editedIndex=this.listAll.indexOf(e),console.log(this.editedIndex=this.listAll.indexOf(e));const t=this.spaces;this.editedItem.key=e.key,this.editedItem.id=e.id,console.log("arr",t),t.forEach((t=>{e.hasOwnProperty(t)&&(e[t].active?(this.editedItem[t].active=!0,this.editedItem[t].pl=e[t].pl,this.editedItem[t].en=e[t].en):this.editedItem[t].active=!1),e.hasOwnProperty(t)||Object.defineProperty(e,t,{value:{active:!1}})})),console.log("editedItem",this.editedItem),this.dialog=!0,this.isKeyLabelDisabled=!0},deleteItem(e){this.editedIndex=this.listAll.indexOf(e),this.dialogDelete=!0},deleteItemConfirm(){let e=this.listAll[this.editedIndex]["id"];x()["delete"](this.restUpdate+"/i18n/api/v1/translations/"+e),this.listAll.splice(this.editedIndex,1),this.closeDelete()},close(){this.isKeyLabelDisabled=!1,this.alert="",this.dialog=!1,console.log("close"),this.$nextTick((()=>{this.editedIndex=-1,this.editedItem.id=this.defaultItem.id,this.editedItem.key=this.defaultItem.key,this.editedItem.translationExample1=this.defaultItem.translationExample1,this.editedItem.translationExample2=this.defaultItem.translationExample2,this.editedItem.translationExample3=this.defaultItem.translationExample3,this.spaces.forEach((e=>{this.editedItem[e].active=this.defaultItem[e].active,this.editedItem[e].pl=this.defaultItem[e].pl,this.editedItem[e].en=this.defaultItem[e].en}))}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedIndex=-1,this.editedItem.id=this.defaultItem.id,this.editedItem.key=this.defaultItem.key,this.editedItem.translationExample1=this.defaultItem.translationExample1,this.editedItem.translationExample2=this.defaultItem.translationExample2,this.editedItem.translationExample3=this.defaultItem.translationExample3,this.spaces.forEach((e=>{this.editedItem[e].active=this.defaultItem[e].active,this.editedItem[e].pl=this.defaultItem[e].pl,this.editedItem[e].en=this.defaultItem[e].en}))}))},async save(){this.lastIndex=this.editedIndex;let e=!1;this.editedItem;if(this.editedItem["translationExample1"]=" ",this.editedItem["translationExample2"]=" ",this.editedItem["translationExample3"]=" ",this.spaces.forEach((t=>{this.editedItem.hasOwnProperty(t)&&!e&&(this.editedItem[t].en&&(this.editedItem.translationExample1=this.editedItem[t].en,this.editedItem.translationExample3+=this.editedItem[t].en,e=!0),this.editedItem[t].pl&&(this.editedItem.translationExample2=this.editedItem[t].pl,this.editedItem.translationExample3+=this.editedItem[t].pl,e=!0))})),this.editedIndex>-1){this.listAll[this.editedIndex].id=this.editedItem.id,this.listAll[this.editedIndex].key=this.editedItem.key,this.listAll[this.editedIndex].translationExample1=this.editedItem.translationExample1,this.listAll[this.editedIndex].translationExample2=this.editedItem.translationExample2,this.listAll[this.editedIndex].translationExample3=this.editedItem.translationExample3,this.spaces.forEach((e=>{this.editedItem.hasOwnProperty(e)&&(this.listAll[this.editedIndex][e].active=this.editedItem[e].active,this.listAll[this.editedIndex][e].pl=this.editedItem[e].pl,this.listAll[this.editedIndex][e].en=this.editedItem[e].en)}));let e=this.constructPayload();try{await x().put(this.restUpdate+"/i18n/api/v1/translations/"+this.editedItem["id"],e)}catch(t){this.dialogError=!0,console.log("ERR"),console.log(t),this.makeExample(),this.close()}}else if(this.editedItem.key)if(this.listAll.find((e=>e.key===this.editedItem.key)))console.log("find",this.listAll.find((e=>e.key===this.editedItem.key))),this.alert="klucz już egzystuje + "+this.editedItem.key,console.log(this.editedItem.key);else{console.log(this.lastIndex,this.listAll);let e=this.constructPayload();try{await x().post(this.restUpdate+"/i18n/api/v1/translations",e),this.pushTranslation(),this.lastIndex=this.listAll.length-1,this.makeExample(),this.close()}catch(t){console.log("ERR"),console.log(t),this.pushTranslation(),this.lastIndex=this.listAll.length-1,this.makeExample(),this.close()}console.log("listAll",this.listAll)}else this.alert="klucz musi być wypełniony",console.log(this.editedItem.key)},pushTranslation(){let e={id:this.editedItem.id,key:this.editedItem.key,translationExample1:"",translationExample2:"",translationExample3:""},t="",a="";this.spaces.forEach((s=>{this.editedItem[s]?Object.defineProperty(e,s,{value:{active:this.editedItem[s].active,pl:this.editedItem[s].pl,en:this.editedItem[s].en},configurable:!0}):Object.defineProperty(e,s,{value:{active:!0,pl:t,en:a},configurable:!0})})),this.listAll.push(e),console.log("row",e)},makeExample(){let e=!1;this.spaces.forEach((t=>{this.listAll[this.lastIndex].hasOwnProperty(t)&&!e&&this.listAll[this.lastIndex][t].active&&(this.listAll[this.lastIndex].translationExample1=this.listAll[this.lastIndex][t].en,this.listAll[this.lastIndex].translationExample2=this.listAll[this.lastIndex][t].pl,this.listAll[this.lastIndex].translationExample3=this.listAll[this.lastIndex][t].pl+this.listAll[this.lastIndex][t].en,e=!0)}))},constructPayload(){let e={};e["key"]=this.editedItem.key;let t=0;return e["spaces"]=[],this.spaces.forEach((a=>{this.editedItem[a].active&&(e["spaces"].push({name:a,languages:[]}),e["spaces"][t]["languages"].push(["pl",this.editedItem[a]["pl"]]),e["spaces"][t]["languages"].push(["en",this.editedItem[a]["en"]]),t++)})),e},async getTranslations(){x().get(this.rest+"/i18n/api/v1/translations").then((e=>this.handleTranslations(e.data))).then()},handleTranslations(e){let t=[];e.forEach(((e,a)=>{let s={id:e.id,key:e.key,translationExample1:"",translationExample2:"",translationExample3:""},i="",l="";e["spaces"].forEach((e=>{e.languages&&(i=e.languages.some((e=>"pl"===e[0]))?e.languages.find((e=>"pl"===e[0]))[1]:"",l=e.languages.some((e=>"en"===e[0]))?e.languages.find((e=>"en"===e[0]))[1]:""),Object.defineProperty(s,e.name,{value:{active:!0,pl:i,en:l},configurable:!0})}));const o=this.spaces;let n=!1;s.translationExample1="",s.translationExample2="",s.translationExample3="",o.forEach((function(e){s.hasOwnProperty(e)&&s[e].active&&(s.translationExample3+=s[e].pl+s[e].en),s.hasOwnProperty(e)&&!n&&s[e].active&&(s.translationExample1=s[e].en,s.translationExample2=s[e].pl,n=!0),s.hasOwnProperty(e)||Object.defineProperty(s,e,{value:{active:!1,pl:"",en:""},configurable:!0})})),t.push(s),s={}})),console.log("arrd",t),this.listAll=t},async newTranslation(e){let t={key:e.key};console.log("sataSend",t);try{const e=await x().get(this.restUpdate+"/i18n/api/v1/translations/");return console.log("res",e),e.data}catch(a){console.log("err",a)}},async saveTranslation(){try{const e={key:"test.test",space:"cris",languages:[{locale:"en",data:"english"},{locale:"pl",data:"polski"}]},t=await x().put(this.restUpdate+"/i18n/api/v1/translations/63aaf6adf46fec261499ed80",e);return console.log("res",t),t.data}catch(e){console.log("err",e)}},async deleteTranslation(e){console.log(e);try{const t=await x()["delete"](this.restUpdate+"/i18n/api/v1/translations/"+e);console.log("delete",t),console.log("deleted")}catch(t){console.log("err",t)}}},async mounted(){this.getTranslations(),window.addEventListener("keypress",(e=>{this.isGod||(this.keystrokes.unshift(e.key.toString()),this.keystrokes.splice(10,1),this.isGod=this.godPassword.length==this.keystrokes.length&&this.godPassword.every(((e,t)=>e===this.keystrokes[t])),this.isGod&&(this.restUpdate="https://test.dspace7.com"))}))},data:()=>({rest:"https://test.dspace7.com",restUpdate:"",godPassword:["a","r","t","s","u","t","a","r","a","z"],keystrokes:["","","","","","","","","",""],isGod:!1,host:window.location.origin,dialog:!1,dialogDelete:!1,counter1:0,dialogSave:!1,lastIndex:0,dialogError:!1,itemToDelete:"",validationColor:"initial",isKeyLabelDisabled:!1,alert:"",search:"",check:!0,selected:null,all:"Wszystkie",actionsLabel:"actions",headers:[{text:"Klucz",value:"key",width:"500px"},{text:"en",value:"translationExample1",width:"auto"},{text:"pl",value:"translationExample2",width:"auto"},{text:"XXX",value:"translationExample3",width:"auto",class:"content"},{text:"Dspace",value:"dspace",width:"50px"},{text:"Cris",value:"cris",width:"50px"},{text:"PCG",value:"pcg",width:"50px"},{text:"SWPS",value:"swps",width:"50px"},{text:"ASP",value:"asp",width:"50px"},{text:"UW",value:"uw",width:"50px"},{text:" ",value:"actions",sortable:!1,width:"50px"}],spaces:["dspace","cris","pcg","swps","asp","uw"],listEn:[],listPl:[],listAll:[],listAll2:[],editedIndex:-1,editedItem:{id:"",key:"",dspace:{active:!1,pl:"",en:""},cris:{active:!1,pl:"",en:""},pcg:{active:!1,pl:"",en:""},swps:{active:!1,pl:"",en:""},asp:{active:!1,pl:"",en:""},uw:{active:!1,pl:"",en:""}},downloads:{base:[{value:"dspace",text:"DSpace",active:!0},{value:"cris",text:"Cris",active:!0}],supplement:[{value:"pcg",text:"PCG",active:!0},{value:"swps",text:"SWPS",active:!0},{value:"asp",text:"ASP",active:!0},{value:"uw",text:"UW",active:!0}]},defaultItem:{id:"",key:"",dspace:{active:!1,pl:"",en:""},cris:{active:!1,pl:"",en:""},pcg:{active:!1,pl:"",en:""},swps:{active:!1,pl:"",en:""},asp:{active:!1,pl:"",en:""},uw:{active:!1,pl:"",en:""}}})},J=R;var W=(0,f.Z)(J,U,B,!1,null,null,null);const G=W.exports,L={name:"App",components:{HeaderComponent:k,SearchComponent:_,TableComponent:G},created(){this.api=this.$config.API+"/data"},data:()=>({isAuth:!1,isWelcome:!0,isPreloading:!1,login:"",nowe:[],arr:[],api:"https://translations.dspace7.com/api/data"}),methods:{input(){"trobriandy"==this.login&&(this.isWelcome=!1,this.isPreloading=!0,setTimeout((()=>{this.isPreloading=!1,this.isAuth=!0}),2e3))}}},K=L;var M=(0,f.Z)(K,p,m,!1,null,null,null);const H=M.exports;var X=a(1705);s.ZP.use(X.Z);const q=new X.Z({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:{base:"#0871DB"}}}}});var F=a(2346);s.ZP.config.productionTip=!1,s.ZP.use(F.Z,x()),fetch("/config.json").then((e=>e.json())).then((e=>{s.ZP.prototype.$config=e,console.log(e),s.ZP.prototype.$config={API:"https://translations.dspace7.com/api"},new s.ZP({vuetify:q,render:e=>e(H)}).$mount("#app")})),window.addEventListener("message",(e=>{e.data&&"string"===typeof e.data&&e.data.match(/webpackHotUpdate/)&&(console.log("hot reload happened"),console.clear())}))}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var l=t[s]={id:s,loaded:!1,exports:{}};return e[s](l,l.exports,a),l.loaded=!0,l.exports}a.m=e,(()=>{a.amdO={}})(),(()=>{var e=[];a.O=(t,s,i,l)=>{if(!s){var o=1/0;for(r=0;r<e.length;r++){for(var[s,i,l]=e[r],n=!0,d=0;d<s.length;d++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](s[d])))?s.splice(d--,1):(n=!1,l<o&&(o=l));if(n){e.splice(r--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[s,i,l]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var i,l,[o,n,d]=s,c=0;if(o.some((t=>0!==e[t]))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(d)var r=d(a)}for(t&&t(s);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(r)},s=self["webpackChunkjs_dspace_tlumaczenia"]=self["webpackChunkjs_dspace_tlumaczenia"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[998],(()=>a(7191)));s=a.O(s)})();
//# sourceMappingURL=app.9bad8afc.js.map