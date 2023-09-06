/**Q-
 
Like the youtuber return a response like "Welcome to my Node Js project". 
Just follow the way he writes code in 30th video.
Based on the url the user hits , I want you to return custom responses.
When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project

*/
const { log } = require('console');
const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.write("Welcome to my Node Js project");
    const url=req.url;
    if(url==='/home'){
        res.write("Welcome home")

    }else if(url==='/about'){
        res.write("Welcome to about us Page");

    }else if(url==='/node'){
        res.write("Welcome to my Node Js project");


    }else{
        res.write("404 Not Found")

    }
    res.end();
    
})
server.listen(3000,()=>{
    console.log("Sever Is Running Bro");
})
