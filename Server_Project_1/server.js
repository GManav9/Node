const http = require("http");
const port = 8888;

const porthandler = (req, res) => {
  res.write("<h1>Server Is Started at this port : 8888</h1>");
  res.end();
};

const server = http.createServer(porthandler);

server.listen(port, (err) => {
  err ? console.log(err) : console.log("server is started at " + port);
});
