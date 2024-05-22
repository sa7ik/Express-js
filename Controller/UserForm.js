const UserSchema = require("../Model/UserSchema")
// const userSchema= require("../Model/UserSchema")

const userRegister=async(req,res)=>{
    const {username,email,Name}=req.body
    if(!(username && email && Name) ){
        res.send("Fill all Field")
    }
    else{
        const user=await UserSchema.create({
            Name,
            email,
            username
        })
        res.status(201).json({message:"user created successfully"})
    }

}

// view all users

const allUsers=async(req,res)=>{
    const users=await UserSchema.find();
    if (users.length===0){
        res.status(401).json({
            success:true,
            message:"users is empty",
        })
    }else{
        res.status(201).json(users);
    }
}

//view users by Id

const userById=async(req,res)=>{
    const userId=req.params.id;
    const user=await UserSchema.findById(userId);
    if(!user){
        res.status(401).json({
            success:true,
            message:"user not found for specified Id"
        })
    }
    else{
        res.status(201).json(user);
    }
}

//update by id

const update=async (req,res)=>{
    try{
        const userId=req.params.id; 

        const user=await UserSchema.findById(userId);
        if(!user){
            
            res.status(401).json({
                success:true,
                message:"user not found for specified Id"
            })
        }
      const updatedData=await UserSchema.findByIdAndUpdate(userId,req.body,{
            new:true

        }) 
        res.status(200).json(updatedData)
    
    }
    catch(error){
        res.status(500).json({
            errorMessage:error.message})
    }
}
const deleteUser=async (req,res)=>{
    console.log("abc");
    try {
        const userId=req.params.id; 

        const user=await UserSchema.findById(userId);
        if(!user){
            
            res.status(401).json({
                success:true,
                message:"user not found for specified Id"
            })
        }
        await UserSchema.findByIdAndDelete(userId)
        res.status(200).json({message:"user Deleted"})
        
    } catch (error) {
        res.status(500).json({
            errorMessage:error.message})
    }
    }


module.exports={userRegister,allUsers,userById,update,deleteUser}