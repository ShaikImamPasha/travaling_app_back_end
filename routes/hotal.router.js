const express=require("express");
const router=express.Router();
const hotals=require("../model/hotal.model");
router.route("/")
    .get(async (req,res)=>{
        const catagiry=req.query.catagiry;
        try{
            if(catagiry){
           var hot=await hotals.find({ category:catagiry});
            }else{
                var hot=await hotals.find({});
            }
           hot? res.json(hot):res.status(404).json({message: "conud not fetch"});
        }
        catch(error){
            res.json({message: "error"});
            console.log(error);
        }
    })
module.exports=router;