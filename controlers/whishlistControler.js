var whishlist=require("../model/wishlist.model");
var addwhislist= async (req,res)=>{
    try{
        const newwhislist=new whishlist(req.body);
        const savedwhislist=await newwhislist.save();
        res.json(savedwhislist);
    }
    catch(error){
        console.log(error);
        res.json({message: "server is busy"});
    }
  }
var deletewhislist= async(req,res)=>{
        try{
           await whishlist.findByIdAndRemove(req.params.Id);
           res.json({message: "hotal was removes"});
        }
        catch(error){
            console.log(error);
            res.json({message: "server busy"});
        }
    }
var printwhislist= async (req,res)=>{
    try{
          var result=await whishlist.find({});
          result ? res.json(result):res.json({message: "no data found"});
    }
    catch(error){
        console.log(error);
        res.json({message: "serveer busy"});
    }
  }
  module.exports={addwhislist,deletewhislist,printwhislist};