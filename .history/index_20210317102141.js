const fs = require('fs');
const http = require('http');
const PORT = 3000;
const host = "localhost";

let server = http.createServer((req, res) => {



    let path = req.url;
    if(path == "/" || path == "\\")
    {
        path="/index.html";
    }

    switch (path) {
      case "/":
      case "\\":
      case "/home":
        path = "/index.html";
        break;

      case "/about":
        break;

      case "/services":
        break;

      case "/contact":
        break;

      case "/contact-list":
        break;

      case "/projects":
        break;

      case "/login":
        break;

      case "/register":
        break;

      case "/edit":
        break;

        default:
            path = "/index.html";
            break;
    }

    fs.readFile(__dirname + path, function (err,data) 
    {
        if (err) 
        {
        res.writeHead(404);
        res.end("ERROR: 404 - Page not found!");
        return;
        }

        res.writeHead(200);
        res.end(data);
    });
});
server.listen(PORT);
console.log(`Server running at http://${host}:${PORT}/`);

