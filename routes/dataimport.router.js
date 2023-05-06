var mongoose=require("mongoose");
var express=require("express");

var hota=require("../controlers/dataimportControle");
const router=express.Router();

router.route("/")
   .post(hota);
module.exports=router;