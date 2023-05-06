var cripto=require("crypto-js");
var userSc=require("../model/users.model");
var signUp=async (req,res)=>{
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
}
module.exports=signUp;