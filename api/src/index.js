const express = require("express");
const app = express()
app.use("/",(req,res)=>{
    res.send("hello");
})
app.listen(3001, ()=> console.log("app listen to 3000"))