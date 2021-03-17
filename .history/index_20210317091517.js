const http = require('http');
const PORT = 3000;
const host = "localhost";

http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain'
});
res.end('Hello World');
}).listen(3000);
console.log('Server running at http://localhost:3000/');