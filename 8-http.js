const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home Page');
    }
    if(req.url === '/about'){
        res.end('Welcome to about page');
    }
    res.end(`
    <h1>OOPS!!</h2>
    <p>This page does not exist</p>
    <a href="/">Go back</a>`)
})

server.listen(5000)