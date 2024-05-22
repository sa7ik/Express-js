const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
  
    Name:String,
    profilepic:String,
    email:{
        type:String,
        unique:true,
        required:true,
    },
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"user",
    //     required:true,
    //     unique:true,
    // },
    username:{
        type:String,
       
    },
})
module.exports=mongoose.model("UserSchema",userSchema);