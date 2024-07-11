const http = require('http');

const server = http.createServer((req ,res )=>{
   if(req.url === '/')
   {
    res.end("Home page");
   }
   if(req.url === '/about')
   {
    res.end("This is aboutpage");
   }
 res.end(
    `<h1>sorry !<h1>
    <p>The page doesn't exits.<p>
    <a href= "/" >backhome<a>`
 )

});

server.listen(5000);