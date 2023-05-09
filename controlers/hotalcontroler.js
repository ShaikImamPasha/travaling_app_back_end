var hotals=require("../model/hotal.model");
var hotal= async (req,res)=>{
        const category=req.query.category;
        try{
            if(category){
           var hot=await hotals.find({category:category});
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