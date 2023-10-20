const express = require("express");
const studentRouter = require("./router/studentRouter")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/students',studentRouter);
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).json({message:"Something went wrong: " + err.message});
})
app.listen(process.env.PORT ,()=> console.log('Server is started on ' + port));

