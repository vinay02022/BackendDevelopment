const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // Check if the messages.txt file exists, and create it if it doesn't
    if (!fs.existsSync('messages.txt')) {
      fs.writeFileSync('messages.txt', ''); // Create an empty file
    }

    // Read messages from the file and display them
    fs.readFile('messages.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const messages = data.split('\n').filter((message) => message.trim() !== '');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="./message" method="post">');
        res.write('<input type="text" name="message" /><button type="submit">Send</button>');
        res.write('</form>');
        res.write('<div>');
        res.write('<h2>Messages</h2>');
        res.write('<ul>');
        // Display existing messages
        messages.forEach((message) => {
          res.write(`<li>${message}</li>`);
        });
        res.write('</ul>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
      }
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]; // Extract the message from the form data

      // Append the new message to the file
      fs.appendFile('messages.txt', message + '\n', (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Message saved to file.');
        }
        res.statusCode = 302; // Redirect
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>Page not found</h1></body></html>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running at port 3000');
});
