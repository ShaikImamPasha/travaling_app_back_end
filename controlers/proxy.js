var cors_proxy = require('cors-anywhere');
var pr= async (req,res)=>{
    cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    })
    res.json("new")
}
module.exports={pr};