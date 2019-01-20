const jsonServer = require('json-server');
const server = jsonServer.create();
const group = jsonServer.router('group.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
server.use((req, res, next) => {
	// if (req.method === 'POST') {
	// 	req.body.createdAt = Date.now();
	// }
	console.log(req.method);
	// Continue to JSON Server router
	next();
});

// Use default router
server.use(group);
server.listen(3000, () => {
	console.log(`JSON Server is running at Port http://localhost:3000`); //eslint-disable-line no-console
});
