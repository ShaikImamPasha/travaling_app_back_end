var express=require("express");
var whishlist=require("../controlers/whishlistControler");
var verifyuser=require("../middleware/verifyuser");
const {addwhislist,deletewhislist,printwhislist}=whishlist;
var router=express.Router();
router.route("/")
  .post(verifyuser,addwhislist);

router.route("/:Id")
    .delete(verifyuser,deletewhislist);

router.route("/")
  .get(verifyuser,printwhislist);


module.exports=router;