const http = require("http");
const fs= require("fs");

const server = http.createServer((req, res) => {
  const newData = `${Date.now()}: ${req.url} get info on which page user are!\n`;
  fs.appendFile("serverNotes.txt", newData, (err, data) => {
        switch(req.url){
          case '/': res.end("Home page");
          break;

          case '/about': res.end("i am Asmita..");
          break;

          default:res.end("404 Page Not found");
        }
  });
});

server.listen(8000, () => {
  console.log("listening from server 8000");
});
