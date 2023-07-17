(()=>{"use strict";var e={753:(e,t,s)=>{var a=s(144),i=s(998),l=s(2928),n=function(){var e=this,t=e._self._c;return t(i.Z,{attrs:{dark:""}},[t(l.Z,{attrs:{dark:""}},[t("table-component",{attrs:{api:e.api}}),t("div",{attrs:{id:"aa"}})],1)],1)},o=[],d=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"app"}},[t("h1",[e._v("Shopping List")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.itemName,expression:"itemName"}],attrs:{type:"text"},domProps:{value:e.itemName},on:{input:function(t){t.target.composing||(e.itemName=t.target.value)}}}),t("br"),t("button",{on:{click:function(t){return e.addItem()}}},[e._v("Add Item")]),t("button",{on:{click:function(t){return e.download("json.json",e.itemName)}}},[e._v("Download JSON")]),e._v(" "+e._s(e.itemName)+" ")]),t("ul",e._l(e.items,(function(s){return t("li",{key:s.id},[e._v(" "+e._s(s.en)+" ")])})),0)])},r=[],c=s(9669),u=s.n(c);const m={name:"App",data(){return{items:[],itemName:""}},async created(){try{const e=await u().get("http://localhost:3000/data");this.items=e.data}catch(e){console.log(e)}},methods:{async addItem(){const e=await u().post("http://localhost:3000/data",{name:this.itemName});this.items=[...this.items,e.data],this.itemName=""},download(e,t){var s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),s.setAttribute("download",e),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}}},p=m;var h=s(1001),v=(0,h.Z)(p,d,r,!1,null,null,null);const b=v.exports;var f=s(6190),k=s(9582),x=s(4886),g=s(120),I=s(266),y=s(2118),w=s(5718),Z=s(9930),_=s(4324),C=s(1713),j=s(3687),O=s(7808),S=s(1783),A=s(7953),P=function(){var e=this,t=e._self._c;return t(y.Z,{attrs:{fluid:""}},[t(y.Z,{attrs:{fluid:""}},[t(C.Z,{attrs:{align:"center"}},[t(I.Z,{staticClass:"search-bar"},[t(O.Z,{attrs:{"append-icon":"mdi-magnify",label:"Wyszukaj w tabeli","single-line":"",outlined:"",dense:"",dark:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),t(w.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.listAll,height:"100%","items-per-page":10,"custom-sort":e.customSort,search:e.search,"fixed-header":"",dark:""},scopedSlots:e._u([{key:"top",fn:function(){return[t(S.Z,[t(A.qW,[e._v("tłumaczenia CRUD")]),t(j.Z),t(f.Z,{staticClass:"mb-2",attrs:{color:"secondary",dark:""},on:{click:e.saveJsonPl}},[e._v(" Pobierz JSON pl ")]),t(f.Z,{staticClass:"mb-2",attrs:{color:"secondary",dark:""},on:{click:e.saveJsonEn}},[e._v(" Pobierz JSON en ")]),t(Z.Z,{attrs:{width:"100%","max-width":"1200px",dark:""},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(f.Z,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),s),[e._v(" Nowy klucz ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(k.Z,[t(x.EB,{staticClass:"justify-space-between"},[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))]),t("span",{staticClass:"text-caption deep-orange--text text--lighten-2"},[e._v(e._s(e.alert))])]),t(x.ZB,[t(y.Z,{attrs:{fluid:""}},[t(O.Z,{attrs:{label:"Klucz","background-color":e.validationColor,color:"white",disabled:e.isKeyLabelDisabled},model:{value:e.editedItem.id,callback:function(t){e.$set(e.editedItem,"id",t)},expression:"editedItem.id"}}),t(O.Z,{attrs:{label:"English",color:"white"},model:{value:e.editedItem.en,callback:function(t){e.$set(e.editedItem,"en",t)},expression:"editedItem.en"}}),t(O.Z,{attrs:{label:"Polski",color:"white"},model:{value:e.editedItem.pl,callback:function(t){e.$set(e.editedItem,"pl",t)},expression:"editedItem.pl"}}),t(C.Z,[t(I.Z,{attrs:{cols:"6"}},[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",label:"DSpace",color:"green"},model:{value:e.editedItem.dspace,callback:function(t){e.$set(e.editedItem,"dspace",t)},expression:"editedItem.dspace"}}),t(g.Z,{staticClass:"ma-0",attrs:{dense:"",label:"Cris",color:"green"},model:{value:e.editedItem.cris,callback:function(t){e.$set(e.editedItem,"cris",t)},expression:"editedItem.cris"}})],1),t(I.Z,{attrs:{cols:"6"}},[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",label:"SWPS",color:"green"},model:{value:e.editedItem.swps,callback:function(t){e.$set(e.editedItem,"swps",t)},expression:"editedItem.swps"}}),t(g.Z,{staticClass:"ma-0",attrs:{dense:"",label:"ASP",color:"green"},model:{value:e.editedItem.asp,callback:function(t){e.$set(e.editedItem,"asp",t)},expression:"editedItem.asp"}}),t(g.Z,{staticClass:"ma-0",attrs:{dense:"",label:"UW",color:"green"},model:{value:e.editedItem.uw,callback:function(t){e.$set(e.editedItem,"uw",t)},expression:"editedItem.uw"}})],1)],1)],1)],1),t(x.h7,[t(j.Z),t(f.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Anuluj ")]),t(f.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Zapisz ")])],1)],1)],1),t(Z.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(k.Z,[t(x.EB,{staticClass:"text-h5"},[e._v("Na pewno chcesz usunąć ten klucz?")]),t(x.h7,[t(j.Z),t(f.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Anuluj")]),t(f.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(j.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:s}){return[t(_.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")]),t(_.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])]}},{key:"item",fn:function({item:s}){return[t("tr",e._l(e.headers,(function(a,i){return t("td",{key:i},["actions"==a.value?[t(_.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")]),t(_.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])]:"cris"==a.value?[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:s.cris,callback:function(t){e.$set(s,"cris",t)},expression:"item.cris"}})]:"dspace"==a.value?[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:s.dspace,callback:function(t){e.$set(s,"dspace",t)},expression:"item.dspace"}})]:"swps"==a.value?[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:s.swps,callback:function(t){e.$set(s,"swps",t)},expression:"item.swps"}})]:"asp"==a.value?[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:s.asp,callback:function(t){e.$set(s,"asp",t)},expression:"item.asp"}})]:"uw"==a.value?[t(g.Z,{staticClass:"ma-0",attrs:{dense:"",disabled:""},model:{value:s.uw,callback:function(t){e.$set(s,"uw",t)},expression:"item.uw"}})]:[e._v(" "+e._s(s[a.value])+" ")]],2)})),0)]}},{key:"no-data",fn:function(){return[t(f.Z,{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)},$=[];const D={name:"Table",computed:{formTitle(){return-1===this.editedIndex?"Nowy klucz":"Edytuj"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},props:{api:""},methods:{saveJsonEn(){let e=this.listAll.map((e=>[e.id,e.en]));e=Object.fromEntries(e),this.download("en.json5",JSON.stringify(e))},saveJsonPl(){let e=this.listAll.map((e=>[e.id,e.pl]));e=Object.fromEntries(e),this.download("pl.json5",JSON.stringify(e))},download(e,t){var s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),s.setAttribute("download",e),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)},log(e){console.log(e)},customSort(e,t,s){return e.sort(((e,a)=>e[t]==a[t]?0:""==e[t]?1:""==a[t]?-1:s[0]?e[t]<a[t]?1:-1:e[t]<a[t]?-1:1)),e},editItem(e){this.editedIndex=this.listAll.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.isKeyLabelDisabled=!0},deleteItem(e){this.editedIndex=this.listAll.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){u()["delete"](`${this.api}/${this.editedItem.id}`),this.listAll.splice(this.editedIndex,1),this.closeDelete()},close(){this.isKeyLabelDisabled=!1,this.alert="",this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.editedIndex>-1?(Object.assign(this.listAll[this.editedIndex],this.editedItem),u().patch(`${this.api}/${this.editedItem.id}`,this.editedItem),this.close()):this.editedItem.id?this.listAll.find((e=>e.id===this.editedItem.id))?this.alert="klucz już egzystuje":(this.listAll.push(this.editedItem),console.log(this.editedItem),u().post(this.api,this.editedItem),this.close()):this.alert="klucz musi być wypełniony"}},data:()=>({host:window.location.origin,dialog:!1,dialogDelete:!1,validationColor:"initial",isKeyLabelDisabled:!1,alert:"",search:"",check:!0,selected:null,all:"Wszystkie",actionsLabel:"actions",headers:[{text:"Klucz",value:"id"},{text:"English",value:"en"},{text:"Polski",value:"pl"},{text:"DSpace",value:"dspace"},{text:"Cris",value:"cris"},{text:"SWPS",value:"swps"},{text:"ASP",value:"asp"},{text:"UW",value:"uw"},{text:"Akcje",value:"actions",sortable:!1}],listEn:[],listPl:[],listAll:[],editedIndex:-1,editedItem:{id:"",en:"",pl:"",dspace:!0,cris:!0,swps:!1,asp:!1,uw:!1},defaultItem:{id:"",en:"",pl:"",dspace:!0,cris:!0,swps:!1,asp:!1,uw:!1}}),async mounted(){const e=await u().get(this.api);this.listAll=e.data}},N=D;var z=(0,h.Z)(N,P,$,!1,null,null,null);const E=z.exports,T={name:"App",components:{TestComponent:b,TableComponent:E},created(){this.api=this.$config.API+"/data"},data:()=>({nowe:[],arr:[],api:"http://localhost:3300/data"})},J=T;var K=(0,h.Z)(J,n,o,!1,null,null,null);const W=K.exports;var L=s(1705);a.ZP.use(L.Z);const U=new L.Z({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:{base:"#08113B"}}}}});var M=s(2346);a.ZP.config.productionTip=!1,a.ZP.use(M.Z,u()),fetch("/config.json").then((e=>e.json())).then((e=>{a.ZP.prototype.$config=e,console.log(e),new a.ZP({vuetify:U,render:e=>e(W)}).$mount("#app")}))}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var l=t[a]={id:a,loaded:!1,exports:{}};return e[a](l,l.exports,s),l.loaded=!0,l.exports}s.m=e,(()=>{s.amdO={}})(),(()=>{var e=[];s.O=(t,a,i,l)=>{if(!a){var n=1/0;for(c=0;c<e.length;c++){for(var[a,i,l]=e[c],o=!0,d=0;d<a.length;d++)(!1&l||n>=l)&&Object.keys(s.O).every((e=>s.O[e](a[d])))?a.splice(d--,1):(o=!1,l<n&&(n=l));if(o){e.splice(c--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,i,l]}})(),(()=>{s.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return s.d(t,{a:t}),t}})(),(()=>{s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={143:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var i,l,[n,o,d]=a,r=0;if(n.some((t=>0!==e[t]))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(d)var c=d(s)}for(t&&t(a);r<n.length;r++)l=n[r],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(c)},a=self["webpackChunkvue_dspace_tlumaczenia"]=self["webpackChunkvue_dspace_tlumaczenia"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=s.O(void 0,[998],(()=>s(753)));a=s.O(a)})();
//# sourceMappingURL=app.27792527.js.map