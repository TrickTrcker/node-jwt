const express = require("express");
const mongoose = require("mongoose");
const bodyparser=require("body-parser");
const productrouter=require("./routers/product.router");
mongoose.Promise=global.Promise;
let dbconfig=require("./config/dbconfig");
mongoose.connect(dbconfig.url,{ useNewUrlParser:false})
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log("db connection error",err);
});
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ urlencoded : false}));
app.use("/products",productrouter);
let port=1234;
app.listen(port,()=>{
    console.log("app listening at 1234");
});