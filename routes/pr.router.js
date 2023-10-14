const express=require("express");
const router=express.Router();
const pra=require("../controlers/proxy");
var {pr}=pra;
router.route("/")
    .get(pr);
module.exports=router;