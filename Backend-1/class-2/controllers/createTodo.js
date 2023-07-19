const Todo=require("../models/Todo");

exports.createTodo=async(req,res)=>{
    try{
        //extract title and time
        const {title,description}=req.body;
        //create a new Obj and insert in db
        const response=await Todo.create({title,description});
        //send json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        );
    }
}