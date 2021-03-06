//node modules
const fs = require("fs");
const http = require("http");
const url = require("url");

// 3rd party module
const mime = require("mime-types");

let lookup = mime-types.lookup;

const PORT = 3000;
const host = "localhost";

let server = http.createServer((req, res) => {
  let parsedURL = new URL(req.url, "http://" + HOST + ":" + PORT);
  let path = parsedURL.pathname.replace(/^\/+|\/+$/g, "");

  if (path == "/" || path == "\\") {
    path = "/index.html";
  }

  switch (path) {
    case "":
    case "":
    case "home":
      path = "index.html";
      break;

    case "about":
      path = "index.html";
      break;

    case "services":
      path = "index.html";
      break;

    case "contact":
      path = "index.html";
      break;

    case "contact-list":
      path = "index.html";
      break;

    case "projects":
      path = "index.html";
      break;

    case "login":
      path = "index.html";
      break;

    case "register":
      path = "index.html";
      break;

    case "edit":
      path = "index.html";
      break;
  }

  let file = __dirname +"/"+ path;

  fs.readFile(file, function (err, data) 
  {
    if (err) 
    {
      res.writeHead(404);
      res.end("ERROR: 404 - Page not found!");
      return;
    }

    res.setHeader("X-Content-Type-Options", "nosniff"); // security: avoids mime-sniffing
    let mime = lookup(path);

    res.writeHead(200, { "Content-type": mime });
    res.end(data);
  });
});
server.listen(PORT);
console.log(`Server running at http://${host}:${PORT}/`);
