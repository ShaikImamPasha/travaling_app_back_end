var express=require("express");
var app=express();
var  sign=require("../controlers/signupControler");
var login=require("../controlers/loginControler");
var router=express.Router();
const bodyParser=require('body-parser'); 
app.use(bodyParser.json());  

router.route("/rigester")
.post(sign);

router.route("/login")
    .post(login);
module.exports=router;