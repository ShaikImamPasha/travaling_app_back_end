var mongoose=require("mongoose");
var dotenv=require('dotenv');
dotenv.config();

const connectDB=async()=>{
    try{   await mongoose.connect(process.env.DATABASE_API)
   }
   catch(error){
    console.log(error);
   }
}
module.exports=connectDB;