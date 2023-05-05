var express=require("express");
const bodyParser=require('body-parser'); 
var app=express();
app.use(bodyParser.json());  
var mongoose=require("mongoose");
var hotalRouter=require("./routes/hotal.router");
var connectDB=require("./config/dbconfig");
var insertdata=require("./routes/dataimport.router");
var catagery=require("./routes/catageryimport.router");
var catagery_detailss=require("./routes/catagery.router");
var single_hotal=require("./routes/singlehotel.router");
var user=require("./routes/user.router");
var app=express();
connectDB();

var PORT=3300;
app.use(express.json());
app.use("/api/auth",user);
app.use("/api/auth",user);
app.use("/api/singelhotal",single_hotal);
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