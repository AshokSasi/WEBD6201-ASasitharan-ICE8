const http = require('http');
const PORT = 3000;
const host = "localhost";

http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain'
});
res.end('HEY WEBD6201');
}).listen(PORT);
console.log(`Server running at http://${host}:${PORT}/`);