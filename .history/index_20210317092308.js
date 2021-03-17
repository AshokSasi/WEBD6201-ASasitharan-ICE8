const http = require('http');
const PORT = 3000;
const host = "localhost";

let server = http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain'
});
res.end('HEY WEBD6201');
});
server.listen(PORT);
console.log(`Server running at http://${host}:${PORT}/`);