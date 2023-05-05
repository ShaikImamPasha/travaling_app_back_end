var express=require("express");
var mongoose=require("mongoose");
var hotalRouter=require("./routes/hotal.router");
var connectDB=require("./config/dbconfig");
var insertdata=require("./routes/dataimport.router");
var catagery=require("./routes/catageryimport.router");
var catagery_detailss=require("./routes/catagery.router");
var app=express();
connectDB();

var PORT=3300;
app.use(express.json());
app.use("/api/catagery_insert",catagery);
app.use("/api/insert",insertdata);
app.use("/api/hotels_details",hotalRouter);
app.use("/api/catagery_details",catagery_detailss);

mongoose.connection.once("open",()=>{
    console.log("connected to db");
    app.listen(process.env.PORT || PORT,()=>{
    console.log("server runing");
})
})