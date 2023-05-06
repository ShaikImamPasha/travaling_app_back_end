var mongoose=require("mongoose");
var express=require("express");
var cat=require("../controlers/catageryimportControle");
const router=express.Router();

router.route("/")
   .post(cat);
module.exports=router;