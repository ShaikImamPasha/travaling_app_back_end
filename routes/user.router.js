var express=require("express");
var app=express();
var jwt=require("jsonwebtoken")
;var cripto=require("crypto-js");
var userSc=require("../model/users.model");
var router=express.Router();
const bodyParser=require('body-parser'); 
app.use(bodyParser.json());  
router.route("/rigester")
.post(async (req,res)=>{
     try{
          const userObject=new userSc({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: cripto.AES.encrypt(req.body.password,process.env.PASSWORD_KEY).toString()
          });
          var saveduser=await userObject.save();
         res.status(201).json(req.body);
     }
     catch(error){
        console.log(error);
        res.json({message: "not register duo to server problem"});
     }
})
router.route("/login")
    .post(async (req,res)=>{
     try{
            var userData=await userSc.findOne({number: req.body.number});
            !userData && res.json({message: "invalid user name"});
     var decript=cripto.AES.decrypt(userData.password,process.env.PASSWORD_KEY).toString(cripto.enc.Utf8);
            decript!==req.body.password && res.json({message: "invalid password"});
              
           const {password,...rest}=userData._doc;

            var accesses_t=jwt.sign({username: userData.username},process.env.A_TOKEN);

            res.json({...rest,accesses_t});
     }
     catch(error){
      console.log(error);
         res.json({message: "server busy"});
     }
    })
module.exports=router;