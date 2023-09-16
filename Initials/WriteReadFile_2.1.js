const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // Read messages from the file and display them
        // const messages = data.split('\n').filter((message) => message.trim() !== '');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="./message" method="post">');
        res.write('<input type="text" name="message" /><button type="submit">Send</button>');
        res.write('</form>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('msg.txt',"Hello I am FInal Msg");
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
        
    }
    res.setHeader('Content-Type','text/html');
    res.write('</html');
    

server.listen(3000, () => {
  console.log('Server is running at port 3000');
});
