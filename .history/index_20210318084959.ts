//node modules
import fs = require("fs");
import path=require('path');

// 3rd party module
import express = require('express')
import { ServerResponse } from "node:http";
const app = express()

const PORT = 3000;
const HOST:string = "localhost";

//static files
app.use(express.static(path.join(__dirname,"node_modules"))); 


//routing
app.get('/', (req, res) => {
 displaySPA(res);
});

//kicks off the server and listens on PORT
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});


function displaySPA(res:any) :void
{
  fs.readFile("index.html",  (err, data) =>
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

}

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


