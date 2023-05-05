var mongoose=require("mongoose");
var express=require("express");

var Hotel=require("../model/hotal.model");
var hotals=require("../data/hotels");
const router=express.Router();

router.route("/")
   .post(async (req,res)=>{
    try{
        await Hotel.remove();
    const hotalDB=await Hotel.insertMany(hotals.data);
    res.json({hotalDB});
   }
catch(error){
    console.log(error);
    res.json({message: "coud not insert"});
}
})
module.exports=router;