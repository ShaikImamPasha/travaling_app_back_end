const express=require("express");
const router=express.Router();
const catagery=require("../controlers/catageryControler");
router.route("/")
    .get(catagery);
module.exports=router;