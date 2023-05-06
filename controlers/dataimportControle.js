var Hotel=require("../model/hotal.model");
var hotals=require("../data/hotels");
var dataimportCon=async (req,res)=>{
    try{
        await Hotel.deleteMany({}) 
    const hotalDB=await Hotel.insertMany(hotals.data);
    res.json({hotalDB});
   }
catch(error){
    console.log(error);
    res.json({message: "coud not insert"});
}
}
module.exports=dataimportCon;