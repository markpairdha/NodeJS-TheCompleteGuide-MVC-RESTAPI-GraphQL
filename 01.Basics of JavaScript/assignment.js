const http = require('http');
const server = http.createServer((req,res) => {
    const url = req.url;

    if(url === '/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment1</title></head>');
        res.write(
            '<body><form action = "/create-user" method = "POST"><input type = "text" name = "username"><button type = "submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }

    if(url === '/users')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment1</title></head>');
        res.write('<body><ul><li>User1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user')
    {
        const body = [];
        req.on('data',chunk => {
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            Console.log(parsedBody.split('=')[1]); 
            // username = whatever user entered.
        });
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }
});

server.listen(3000);