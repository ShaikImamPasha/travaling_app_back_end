var Catagery=require("../model/catagery.model");
var Catagerys=require("../data/catagery");
var catageryImport=async (req,res)=>{
    try{
       Catagery.deleteMany({})
       var catageryDB=await Catagery.insertMany(Catagerys.data);
       res.json({catageryDB});
   }
catch(error){
    console.log(error);
    res.json({message: "coud not insert"});
}
}
module.exports=catageryImport;