var hotal=require("../model/hotal.model");
var single_hotal=async (req,res)=>{
    const {id}=req.params;
           try{
    var hotal_detail=await hotal.findById({_id: id});
       res.json(hotal_detail);
    }
    catch(error){
        console.log(error);
        res.json({message: "not possible"});
    }
}
module.exports=single_hotal;