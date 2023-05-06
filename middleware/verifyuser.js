var jwt=require("jsonwebtoken");
var verifyUser=(req,res,next)=>{
    const tokan=req.headers.authorization;
    if(tokan){
        jwt.verify(tokan,process.env.A_TOKEN,(err,user)=>{
            if(err) res.status(402).json({message: "Invalid token"})
            res.user=user;
            next()
        })
    }
}
module.exports=verifyUser;