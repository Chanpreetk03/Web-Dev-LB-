const express=require("express");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//routes
const todoRoutes=require("./routes/todo");

app.use("/api/v1",todoRoutes);

app.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`)
})

//connect to db
const dbConnect=require("./config/database");
dbConnect();

//default route

app.get("/" , (req,res)=>{
    console.log("this is home page")
})