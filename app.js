//let ip = require('ip');
let app = require('./server/bootstrap');
let port = process.env.APP_PORT || 3000;
//let host = ip.address();
let host = '127.0.0.1';
app.listen(port,()=>{
	console.log(`server is running at http://${host}:${port}`)
});
