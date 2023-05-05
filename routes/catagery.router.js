const express=require("express");
const router=express.Router();
const catagery=require("../model/catagery.model");
router.route("/")
    .get(async (req,res)=>{
       try{
           var hot=await catagery.find({});
           hot? res.json(hot):res.status(404).json({message: "conud not fetch"});
        }
        catch(error){
            res.json({message: "error"});
            console.log(error);
        }
    })
module.exports=router;