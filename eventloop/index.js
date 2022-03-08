const express=require("express")

const app=express()

app.get("/home",(req,res)=>{
    // console.log("avdf")
    res.send("hello")
})

app.get("/books",(req,res)=>{
         res.send({harrypoterr:"ldfdsfddfd",gameOfthorens:"dfdsdfd",halfGirlfrind:"dsfd"})
})

app.listen(4000,()=>{
    console.log("Port 500")
})