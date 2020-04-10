const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world');
    res.end();
});

server.listen(port, () => console.log(`listen on port ${port}`));