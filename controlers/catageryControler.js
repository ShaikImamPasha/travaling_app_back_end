var catagery=require("../model/catagery.model");
var catagerys= async (req,res)=>{
       try{
           var hot=await catagery.find({});
           hot? res.json(hot):res.status(404).json({message: "conud not fetch"});
        }
        catch(error){
            res.json({message: "error"});
            console.log(error);
        }
    }
module.exports=catagerys;