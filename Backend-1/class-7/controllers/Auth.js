const bcrypt=require("bcrypt");
const User=requir("../models/User");


//signup route handler
exports.signup=async (req,res)=>{
    try{
        const{name,email,password,role}=req.body;
        //if exists
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        //secure password
        let hashedPassword;
        try {
            hashedPassword=await bcrypt.hash(password,10);
        } catch (err) {
            return res.status(500).json({
                success:false,
                message:"issue in hashing"
            })
        }

        //create user
        const user=await User.create({
            name,email,password:hashedPassword,role
        })
        res.staus(200).json({
            success:true,
            message:"user created successfully"
        })
    }
    catch(err){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"user could not be created"
        })
    }
}