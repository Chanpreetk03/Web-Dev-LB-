const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||4000;
require("./config/database").connect();
app.use(express.json());

const user=require("./routes/user")
app.use("/api/v1" , user);

//activate

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
} )