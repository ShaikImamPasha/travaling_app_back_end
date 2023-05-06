const express=require("express");
const router=express.Router();
const hotals=require("../controlers/hotalcontroler");
router.route("/")
    .get(hotals);
module.exports=router;