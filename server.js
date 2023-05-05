var express=require("express");
var mongoose=require("mongoose");
var hotalRouter=require("./routes/hotal.router");
var connectDB=require("./config/dbconfig");
var insertdata=require("./routes/dataimport.router");
var app=express();
connectDB();

var PORT=3300;
app.use(express.json());
app.use("/api/insert",insertdata);
app.use("/api/hotels",hotalRouter);
mongoose.connection.once("open",()=>{
    console.log("connected to db");
    app.listen(process.env.PORT || PORT,()=>{
    console.log("server runing");
})
})