// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(1);
//     console.log(req);
// })
// server.listen(3000);
const http=require('http');
const server=http.createServer((req,res)=>{
    // req -req obj information about incoming req  to be send and res is response which come from server
   
    console.log(req.url,req.headers,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello Testing</title></head>');
    res.write('<body><h2>Res Hai From server</h2></body>')
    res.write('<h1>hello</h1>');
    res.write('</html>')
    res.end("Here All the Operation response End With a msg");
    res.write("Hello Daaa")
    console.log("We are Running at port 3000");
    
})
server.listen(3000, () => {

    console.log('Server is running on port 3000');
  
  });
  
