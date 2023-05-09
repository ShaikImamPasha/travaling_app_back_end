var hotals=require("../model/hotal.model");
var hotal= async (req,res)=>{
        const catagiry1=req.query.catagiry;
        try{
            if(catagiry1){
           var hot=await hotals.find({ category:catagiry1});
            }else{
                var hot=await hotals.find({});
            }
           hot? res.json(hot):res.status(404).json({message: "conud not fetch"});
        }
        catch(error){
            res.json({message: "error"});
            console.log(error);
        }
    }
module.exports=hotal;