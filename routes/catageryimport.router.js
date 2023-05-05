var mongoose=require("mongoose");
var express=require("express");

var Catagery=require("../model/catagery.model");
var Catagerys=require("../data/catagery");
const router=express.Router();

router.route("/")
   .post(async (req,res)=>{
    try{
       Catagery.deleteMany({})
       var catageryDB=await Catagery.insertMany(Catagerys.data);
       res.json({catageryDB});
   }
catch(error){
    console.log(error);
    res.json({message: "coud not insert"});
}
})
module.exports=router;