var express=require("express");
var hotal=require("../controlers/singleHotalControler");
var router=express.Router();
router.route("/:id")
.get(hotal);
module.exports=router;