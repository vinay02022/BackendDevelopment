const express=require('express')
const server=express()
server.use((req,res,next)=>{
    console.log(1)
    next();
})
server.use((req,res,next)=>{
    console.log(1)
    res.send('Hello i am Created Brother')
    
})


server.listen(4000,()=>{
    console.log("server Started.....");
})
