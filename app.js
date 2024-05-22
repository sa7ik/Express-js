const express=require("express")
const app=express()
const mongoose = require('mongoose')
const port=3007
const path=require("path")

app.use(express.static("public"))
mongoose.connect("mongodb://localhost:27017/").then(res=>console.log("connected dbs")).catch(err=>console.log(err))
// app.get('/',(req,res)=>{
//     res.send("<h1>Hai World</h1>")
// })
// app.get('/product',(req,res)=>{
//     res.send("Product Page")
// })

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"index.html"))
// })

app.listen(port,()=>{
console.log(`App listening on port ${port}`);
})