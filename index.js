const http = require('http');

const hostname = '127.0.0.1';
const serverPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const info = 'process.env: ' + JSON.stringify(process.env)
  res.end(info);  
});

server.listen(serverPort, hostname, () => {
  console.log(`Server running at http://${hostname}:${serverPort}/`);
});