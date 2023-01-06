const express=require('express');
const app=express();
const port=8000;
app.get('/',(req,res)=>{
    res.send("server is running");
})
app.get('/ashish',(req,res)=>{
    res.send("server is running ashishsn");
})
app.listen(port,()=>{
    console.log("server running on"+port);
})