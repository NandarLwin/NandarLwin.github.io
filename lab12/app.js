const express = require ("express");
const path = require("path");
const router = require("./router/router");
const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const app = express();

//configuration
app.enable("case sensitive routing");

app.use(express.static("./public"));


//routing
app.use("/testroute", router);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.use('/payment', function (req, res, next)   {

    // throw new Error('Internal Server Error: Something broke!');

    const err = new Error('Internal Server Error: Something broke!');

    next(err);

});

 

app.use(function (err, req, res, next) {

    console.log(err.message);

    res.status(500).send(err.message);

});

 

app.use('/', (req, res, next) => {

    console.log('error page');

    res.status(404)

       .sendFile(path.join(__dirname, './public/view/404.html'));

});

//Middlewares
//app.use(express.urlencoded({extended:false})); // will be executed for each request, in order to pass the request body, need to use this, will see undefined
//app.use(express.static("./lab12")); // related directory can be accessed due to middleware

// app.use((req,res,next) =>{
//     console.log("1");
//     next();
// })
// app.all('/users',(req,res,next) =>{
// //app.use('/users',(req,res,next) =>{
//     console.log("Hello World");
//     res.send("Hello");
// })
// // app.use('/',(req,res,next) =>{
// //     console.log("3");
// //     res.send("3");
// // })
// app.use('/test/:id/:name',(req,res,next)=>{
//     console.log("test");
//     res.status(200).send(req.params);
// })
app.listen (process.env.PORT,() => {
    console.log("Server is running on 3000");
})