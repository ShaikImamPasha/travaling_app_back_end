var express=require("express");
var hotal=require("../model/hotal.model");
var router=express.Router();
router.route("/:id")
.get(async (req,res)=>{
    const {id}=req.params;
    try{
    var hotal_detail=await hotal.findById(id);
       res.json(hotal_detail);
    }
    catch(error){
        console.log(error);
        res.json({message: "not possible"});
    }
})
module.exports=router;