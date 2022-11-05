const jsonServer = require('json-server')

const fs = require('fs')
const jsonEn = JSON.parse(fs.readFileSync('./en.json5', 'utf8'))
const jsonPl = JSON.parse(fs.readFileSync('./pl.json5', 'utf8'))

const listEn = Object.entries(jsonEn).map(([key, value], index) => ({"name" : key, "id" : index, "en" : value, "cris" : true, "dspace": true}) );
console.log(listEn)

const listPl = Object.entries(jsonPl).map(([key, value], index) => ({"name" : key, "id" : index, "pl" : value, "cris" : true, "dspace": true}) );

const map = new Map();
listEn.forEach(item => {
	map.set(item["name"], item)
	});
listPl.forEach(item => map.set(item["name"], {...map.get(item["name"]), ...item}));
const listAll = Array.from(map.values());

const data = {"data":listAll,}

const routes = require('./routes.json')

const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

// github.com/typicode/json-server/issues/690#issuecomment-348616467
// json-server options.bodyParser defalut is true
// server.use(jsonServer.bodyParser);

server.use(middlewares)
server.use(jsonServer.rewriter(routes))
server.use(router)

// Avoid CORS issue
// json-server options.noCors defalut is false
// server.use( (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

server.listen(3000, () => {
  console.log('JSON Server is running, see http://localhost:3000')
})

