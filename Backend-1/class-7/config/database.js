const mongoose=require("mongoose");

require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUniFiedTopology:true
    })
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log("issue");
        console.error(err);
        process.exit(1);
    })
}