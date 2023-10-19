const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("User Routing"+ req.method);
    res.sendFile(path.join(__dirname,'../public/view/users.html'));
})


router.post('/',express.urlencoded({extended:false}),(req,res,next)=>{
    console.log("Routing"+ req.method);
    res.send("Routing "+ req.method + " "+ JSON.stringify(req.body));
})

module.exports = router;