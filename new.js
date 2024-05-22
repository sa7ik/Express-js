const express=require("express")
const app=express()
const port=3008

app.get('/flights/:from-:to',(req,res)=>{
    res.send(`flights from ${req.params.from} to ${req.params.to}`)
})

app.get('/place/:state.:dist',(req,res)=>{
    res.send(`States from ${req.params.state} District ${req.params.dist}`)
})

// app.get('/product/:category/:brand',(req,res)=>{
//     const {category}=req.params;
//     const {brand}=req.params

//     res.send(`product: ${category} and Brand: ${brand}`)

    // if(category==='laptop'){
    //     res.send("Laptop Page")
    // }else if(category==='mobile'){
    //     res.send("Mobile Page")
    // }
    // else{
    //     res.send("Other products")
    // }
// })

app.listen(port,()=>{
    console.log(`Appppp listening on port ${port}`);
    })