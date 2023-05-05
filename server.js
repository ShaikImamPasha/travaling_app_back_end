var express=require("express");
var hotalRouter=require("./routes/hotal.router")
var app=express();
var PORT=3300;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hii");
})

app.use("/api/hotels",hotalRouter);
app.listen(process.env.PORT || PORT,()=>{
    console.log("server runing");
})