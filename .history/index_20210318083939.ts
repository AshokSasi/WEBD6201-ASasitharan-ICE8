//node modules
import fs = require("fs");


// 3rd party module
import express = require('express')
const app = express()

const PORT = 3000;
const HOST:string = "localhost";
 
//routing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//kicks off the server and listens on PORT
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

  // fs.readFile(file, function (err, data) 
  // {
  //   if (err) 
  //   {
  //     res.writeHead(404);
  //     res.end("ERROR: 404 - Page not found!");
  //     return;
  //   }

  //   res.setHeader("X-Content-Type-Options", "nosniff"); // security: avoids mime-sniffing
  //   let mime = lookup(path);

  //   res.writeHead(200, { "Content-type": mime });
  //   res.end(data);
  // });


