var mongoose=require("mongoose");
var whishlist=new mongoose.Schema({
    hotalId: {type:String,required: true}
})
var Whishlist=mongoose.model("Whishlist",whishlist);
module.exports=Whishlist;