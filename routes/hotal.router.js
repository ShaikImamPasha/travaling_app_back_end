const express=require("express");
const router=express.Router();
const hotals=require("../data/hotels");
router.route("/")
    .get((req,res)=>{
        res.json(hotals.data);
    })
module.exports=router;