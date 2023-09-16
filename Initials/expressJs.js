<<<<<<< HEAD
=======
// const express=require('express')
// const server=express()
// server.use((req,res,next)=>{
//     console.log(1)
//     next();
// })
// server.use((req,res,next)=>{
//     console.log(1)
//     res.send('Hello i am Created Brother')
    
// })


// server.listen(4000,()=>{
//     console.log("server Started.....");
// })
>>>>>>> eb004ed6a6b26f8072a56d5523849d0771fafada
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
<<<<<<< HEAD
=======

>>>>>>> eb004ed6a6b26f8072a56d5523849d0771fafada
