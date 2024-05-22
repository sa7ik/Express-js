const express=require("express")
const app=express()
const userRoute=require("./userRoute")
const mongoose=require("mongoose")
const port=3009

app.use(express.json())
app.use("/api",userRoute)
mongoose.connect("mongodb://localhost:27017/").then(res=>console.log("connected dbs")).catch(err=>console.log(err))
// app.post("/Login",controller.userRegister)

// app.get('/Home',(req,res)=>{
//     res.send("<h1>Hai World</h1>")
// })
// // app.post('/Home',(req,res)=>{
// //     res.send("<h1>home page</h1>")
// // })
// app.put('/Home',(req,res)=>{
//     res.send("<h1>contact page</h1>")
// })

// app.delete('/Home',(req,res)=>{
//     res.send("<h1>personal page</h1>")
// })
// app.post('/user',(req,res)=>{
//     const {username,email,Name} = req.body

//     console.log(Name);
//     console.log(username)
//     console.log(email);
//     res.send("<h1>tingle</h1>")
// })



app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
    })