var hotals=require("../model/hotal.model");
var hotal= async (req,res)=>{
        const catagiry=req.query.catagiry;
        try{
            if(catagiry){
           var hot=await hotals.find({ category:catagiry});
            }
           hot? res.json(hot):res.status(404).json({message: "conud not fetch"});
        }
        catch(error){
            res.json({message: "error"});
            console.log(error);
        }
    }
module.exports=hotal;