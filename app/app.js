const http = require('http');
const port = 3000;
const version = process.env.VERSION || "v1";

http.createServer((req, res) => {
  res.end(`Hello from Tekton version ${version}`);
}).listen(port);

// cambio de prueba
