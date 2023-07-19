const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const { default: mongoose } = require("mongoose");
app.use(bodyParser.json());
const mongoose=require("mongoose");
mongoose.connect()
app.listen(7000, ()=>{
    console.log("server at port 7000")
});

app.get('/' , (req,res)=>{
    res.send("hello")
})

app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    console.log("car submiited succesfully")
})