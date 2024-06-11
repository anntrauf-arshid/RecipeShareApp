const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send('hellow from home page')
})
app.get('/about',(req,res)=>{
    res.send('My About Page')
})
app.listen(4000,()=>console.log("server started succesfully"))

 