var cripto=require("crypto-js");
var userSc=require("../model/users.model");
var jwt=require("jsonwebtoken");
var loginUp=async (req,res)=>{
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
   }
module.exports=loginUp;